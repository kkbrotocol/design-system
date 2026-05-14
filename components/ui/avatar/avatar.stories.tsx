import type { Meta, StoryObj } from "@storybook/nextjs";
import { Avatar } from "./avatar";

const avatarSrc =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%23900020'/%3E%3Ccircle cx='60' cy='45' r='24' fill='white' fill-opacity='.9'/%3E%3Cpath d='M24 112c6-24 22-36 36-36s30 12 36 36' fill='white' fill-opacity='.9'/%3E%3C/svg%3E";

const meta = {
  title: "UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    alt: "Kim Bora",
    fallback: "KB",
    size: "md",
    shape: "circle",
  },
  argTypes: {
    shape: {
      control: "inline-radio",
      options: ["circle", "square"],
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg", "xl"],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithImage: Story = {
  args: {
    src: avatarSrc,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar alt="Kim Bora" fallback="KB" size="sm" />
      <Avatar alt="Kim Bora" fallback="KB" size="md" />
      <Avatar alt="Kim Bora" fallback="KB" size="lg" />
      <Avatar alt="Kim Bora" fallback="KB" size="xl" />
    </div>
  ),
};
