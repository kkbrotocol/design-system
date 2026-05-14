import type { Meta, StoryObj } from "@storybook/nextjs";
import { LoadingSpinner } from "./loading-spinner";

const meta = {
  title: "UI/LoadingSpinner",
  component: LoadingSpinner,
  tags: ["autodocs"],
  args: {
    label: "Loading",
    size: "md",
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <LoadingSpinner size="sm" />
      <LoadingSpinner size="md" />
      <LoadingSpinner size="lg" />
    </div>
  ),
};
