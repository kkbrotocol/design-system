import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";

import { Button } from "../button/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import type { DialogProps } from "./types";

const meta = {
  title: "UI/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  args: {
    closeOnBackdropClick: true,
    modal: true,
    size: "md",
    variant: "default",
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "inline-radio",
      options: ["default", "danger"],
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

function DialogPlayground(args: DialogProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog
        {...args}
        open={open}
        onOpenChange={setOpen}
        aria-labelledby="dialog-playground-title"
        aria-describedby="dialog-playground-description"
      >
        <DialogClose />
        <DialogHeader>
          <DialogTitle id="dialog-playground-title">
            Invite team members
          </DialogTitle>
          <DialogDescription id="dialog-playground-description">
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
    </div>
  );
}

function DangerDialog() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button variant="danger" onClick={() => setOpen(true)}>
        Delete project
      </Button>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        size="sm"
        variant="danger"
        aria-labelledby="dialog-danger-title"
        aria-describedby="dialog-danger-description"
      >
        <DialogClose />
        <DialogHeader>
          <DialogTitle id="dialog-danger-title">Delete project</DialogTitle>
          <DialogDescription id="dialog-danger-description">
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
    </div>
  );
}

export const Playground: Story = {
  render: (args) => <DialogPlayground {...args} />,
};

export const Danger: Story = {
  render: () => <DangerDialog />,
};
