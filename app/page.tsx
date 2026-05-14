import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Radio, RadioGroup } from "@/components/ui/radio";
import { Option, Select } from "@/components/ui/select";
import { DialogExamples } from "./dialog-examples";

const avatarSrc =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%23900020'/%3E%3Ccircle cx='60' cy='45' r='24' fill='white' fill-opacity='.9'/%3E%3Cpath d='M24 112c6-24 22-36 36-36s30 12 36 36' fill='white' fill-opacity='.9'/%3E%3C/svg%3E";

export default function Home() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-8 sm:px-8 lg:px-10">
        <header className="grid gap-4 border-b border-border pb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-brand">#900020</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-normal sm:text-4xl">
                Minimal Design System
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Button size="sm" variant="outline">
                Secondary
              </Button>
              <Button size="sm">Primary</Button>
            </div>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            Native, accessible primitives for Next.js, TypeScript, Tailwind CSS
            v4, and Storybook.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-6 rounded-lg border border-border bg-surface p-5 shadow-soft">
            <SectionTitle eyebrow="Inputs" title="Form controls" />
            <div className="grid gap-4 sm:grid-cols-2">
              <label
                className="grid gap-2 text-sm font-medium"
                htmlFor="company-name"
              >
                Company
                <Input id="company-name" placeholder="Hanaloop" />
              </label>
              <label
                className="grid gap-2 text-sm font-medium"
                htmlFor="search-components"
              >
                Search
                <Input
                  id="search-components"
                  placeholder="Search components"
                  type="search"
                  variant="filled"
                />
              </label>
              <label
                className="grid gap-2 text-sm font-medium"
                htmlFor="team-size"
              >
                Team size
                <Input id="team-size" min={1} placeholder="12" type="number" />
              </label>
              <label
                className="grid gap-2 text-sm font-medium"
                htmlFor="plan"
              >
                Plan
                <Select defaultValue="growth" id="plan">
                  <Option value="starter">Starter</Option>
                  <Option value="growth">Growth</Option>
                  <Option value="enterprise">Enterprise</Option>
                </Select>
              </label>

              <label
                className="grid gap-2 text-sm font-medium"
                htmlFor="password"
              >
                Password
                <Input id="password" type="password" placeholder="Password" />
              </label>

              <label
                className="grid gap-2 text-sm font-medium"
                htmlFor="email"
              >
                email
                <Input id="email" type="email" placeholder="[EMAIL_ADDRESS]" />
              </label>

              <label
                className="grid gap-2 text-sm font-medium"
                htmlFor="file"
              >
                File
                <Input id="file" type="file" hidden />
                <Button >Choose File</Button>
              </label>
            </div>

            <SectionTitle eyebrow="Inputs" title="Form controls" />
            <div className="grid gap-4 sm:grid-cols-2">
              <label
                className="grid gap-2 text-sm font-medium"
                htmlFor="company-name"
              >
                Company
                <Input id="company-name" placeholder="Hanaloop" disabled />
              </label>
              <label
                className="grid gap-2 text-sm font-medium"
                htmlFor="search-components"
              >
                Search
                <Input
                  id="search-components"
                  placeholder="Search components"
                  type="search"
                  variant="filled"
                  disabled
                />
              </label>
              <label
                className="grid gap-2 text-sm font-medium"
                htmlFor="team-size"
              >
                Team size
                <Input id="team-size" min={1} placeholder="12" type="number" disabled />
              </label>
              <label
                className="grid gap-2 text-sm font-medium"
                htmlFor="plan"
              >
                Plan
                <Select defaultValue="growth" id="plan" disabled>
                  <Option value="starter">Starter</Option>
                  <Option value="growth">Growth</Option>
                  <Option value="enterprise">Enterprise</Option>
                </Select>
              </label>
            </div>
          </div>

          <div className="grid gap-6 rounded-lg border border-border bg-surface p-5 shadow-soft">
            <SectionTitle eyebrow="States" title="Selections" />
            <div className="grid gap-5">
              <Checkbox
                defaultChecked
                description="Send release notes and token changes."
                id="updates"
                label="Email updates"

              />
              <Checkbox
                defaultChecked
                description="Send release notes and token changes."
                id="updates"
                label="Email updates"
                variant="neutral"

              />
              <Checkbox
                description="This example shows error copy and aria-invalid."
                error="Agreement is required."
                id="terms"
                invalid
                label="Accept terms"
              />
              <RadioGroup
                label="Billing cycle"
                orientation="horizontal"
              >
                <Radio
                  defaultChecked
                  id="monthly"
                  label="Monthly"
                  name="billing"
                  value="monthly"
                />
                <Radio
                  id="annual"
                  label="Annual"
                  name="billing"
                  value="annual"
                />
              </RadioGroup>
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-lg border border-border bg-surface p-5 shadow-soft">
          <SectionTitle eyebrow="Actions" title="Buttons, loading, avatars" />
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
              <Button isLoading>Saving</Button>
            </div>

            <div>
              <Button disabled>Primary</Button>
              <Button disabled variant="secondary">Secondary</Button>
              <Button disabled variant="outline">Outline</Button>
              <Button disabled variant="ghost">Ghost</Button>
              <Button disabled variant="danger">Danger</Button>
              <Button disabled isLoading>Saving</Button>
            </div>

          </div>
          <div className="flex flex-wrap items-center gap-4 border-t border-border pt-5">
            <LoadingSpinner />
            <Avatar alt="Kim Bora" />
            <Avatar alt="Kim Bora" size="lg" src={avatarSrc} />
            <Avatar alt="Park Minjun" fallback="PM" shape="square" />
          </div>
        </section>

        <DialogExamples />

        <section className="dark grid gap-6 rounded-lg border border-border bg-background p-5 text-foreground shadow-soft">
          <SectionTitle eyebrow="Dark mode" title="Token-driven preview" />
          <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <label className="grid gap-2 text-sm font-medium" htmlFor="dark-email">
              Email
              <Input
                id="dark-email"
                placeholder="team@example.com"
                type="email"
              />
            </label>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="outline">Cancel</Button>
              <Button>Invite</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
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
