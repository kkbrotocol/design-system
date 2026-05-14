import type { Preview } from "@storybook/nextjs";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    a11y: {
      test: "todo",
    },
    backgrounds: {
      default: "system",
      values: [
        { name: "system", value: "var(--background)" },
        { name: "surface", value: "var(--surface)" },
        { name: "dark", value: "#0f0d0f" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
