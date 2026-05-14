"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function DialogExamples() {
  const [inviteOpen, setInviteOpen] = React.useState(false);
  const [dangerOpen, setDangerOpen] = React.useState(false);

  return (
    <section className="grid gap-6 rounded-lg border border-border bg-surface p-5 shadow-soft">
      <SectionTitle eyebrow="Overlay" title="Dialogs" />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid content-start gap-4 rounded-md border border-border p-4">
          <div className="grid gap-1">
            <h3 className="text-sm font-semibold text-foreground">
              Invite dialog
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Open a controlled native dialog for a focused task.
            </p>
          </div>
          <Button onClick={() => setInviteOpen(true)}>Open dialog</Button>
        </div>

        <div className="grid content-start gap-4 rounded-md border border-border p-4">
          <div className="grid gap-1">
            <h3 className="text-sm font-semibold text-foreground">
              Danger dialog
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Confirm destructive actions with danger styling.
            </p>
          </div>
          <Button variant="danger" onClick={() => setDangerOpen(true)}>
            Delete project
          </Button>
        </div>
      </div>

      <Dialog
        open={inviteOpen}
        onOpenChange={setInviteOpen}
        aria-labelledby="home-dialog-invite-title"
        aria-describedby="home-dialog-invite-description"
      >
        <DialogClose />
        <DialogHeader>
          <DialogTitle id="home-dialog-invite-title">
            Invite team members
          </DialogTitle>
          <DialogDescription id="home-dialog-invite-description">
            Add collaborators who should have access to this workspace.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          Use a native dialog surface with controlled open state, backdrop
          dismissal, Escape key support, and token-driven styles.
        </DialogBody>
        <DialogFooter>
          <Button data-dialog-close variant="secondary">
            Cancel
          </Button>
          <Button data-dialog-close>Send invite</Button>
        </DialogFooter>
      </Dialog>

      <Dialog
        open={dangerOpen}
        onOpenChange={setDangerOpen}
        size="sm"
        variant="danger"
        aria-labelledby="home-dialog-danger-title"
        aria-describedby="home-dialog-danger-description"
      >
        <DialogClose />
        <DialogHeader>
          <DialogTitle id="home-dialog-danger-title">Delete project</DialogTitle>
          <DialogDescription id="home-dialog-danger-description">
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          All project settings and saved component examples will be removed.
        </DialogBody>
        <DialogFooter>
          <Button data-dialog-close variant="secondary">
            Cancel
          </Button>
          <Button data-dialog-close variant="danger">
            Delete
          </Button>
        </DialogFooter>
      </Dialog>
    </section>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-normal text-brand">
        {eyebrow}
      </p>
      <h2 className="mt-1 text-xl font-semibold tracking-normal">{title}</h2>
    </div>
  );
}
