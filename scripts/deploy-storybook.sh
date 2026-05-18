#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BUILD_DIR="${STORYBOOK_BUILD_DIR:-$ROOT_DIR/storybook-static}"
DEPLOY_BRANCH="${DEPLOY_BRANCH:-gh-pages}"
REMOTE="${REMOTE:-origin}"
COMMIT_MESSAGE="${COMMIT_MESSAGE:-deploy storybook}"
TMP_ROOT="${TMPDIR:-/tmp}"
WORKTREE_DIR="$(mktemp -d "$TMP_ROOT/storybook-deploy.XXXXXX")"

cleanup() {
  git -C "$ROOT_DIR" worktree remove --force "$WORKTREE_DIR" >/dev/null 2>&1 || true
  rm -rf "$WORKTREE_DIR"
}

trap cleanup EXIT

cd "$ROOT_DIR"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "deploy:story requires a git repository." >&2
  exit 1
fi

if ! git remote get-url "$REMOTE" >/dev/null 2>&1; then
  echo "Missing git remote '$REMOTE'." >&2
  echo "Add one first, for example: git remote add $REMOTE <repository-url>" >&2
  exit 1
fi

echo "Building Storybook..."
npm run build-storybook

if [ ! -d "$BUILD_DIR" ]; then
  echo "Storybook build directory not found: $BUILD_DIR" >&2
  exit 1
fi

echo "Preparing $DEPLOY_BRANCH worktree..."
if git ls-remote --exit-code --heads "$REMOTE" "$DEPLOY_BRANCH" >/dev/null 2>&1; then
  git fetch "$REMOTE" "$DEPLOY_BRANCH"
  git worktree add --detach "$WORKTREE_DIR" "FETCH_HEAD"
else
  git worktree add --detach "$WORKTREE_DIR"
  git -C "$WORKTREE_DIR" checkout --orphan "$DEPLOY_BRANCH"
fi

find "$WORKTREE_DIR" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R "$BUILD_DIR"/. "$WORKTREE_DIR"/
touch "$WORKTREE_DIR/.nojekyll"

if [ -n "${GITHUB_PAGES_CNAME:-}" ]; then
  printf "%s\n" "$GITHUB_PAGES_CNAME" > "$WORKTREE_DIR/CNAME"
fi

git -C "$WORKTREE_DIR" add -A

if git -C "$WORKTREE_DIR" diff --cached --quiet; then
  echo "No Storybook changes to deploy."
  exit 0
fi

git -C "$WORKTREE_DIR" commit -m "$COMMIT_MESSAGE"
git -C "$WORKTREE_DIR" push "$REMOTE" "HEAD:$DEPLOY_BRANCH"

echo "Storybook deployed to $REMOTE/$DEPLOY_BRANCH."
