import type { Meta, StoryObj } from "@storybook/react"
import { Tooltip } from "./Tooltip"

const meta: Meta<typeof Tooltip> = {
  title: "Tooltip",
  component: Tooltip,
  args: {
    explainer: "Additional explainer information in tooltip.",
    children: <span>hover me</span>,
    className: "some-css-class",
    withArrow: true,
    side: "bottom",
    defaultOpen: true,
  },
  argTypes: {
    open: {
      options: [undefined, true, false],
      control: { type: "radio" },
      description: "force state of tooltip",
    },
    side: {
      options: ["top", "right", "bottom", "left"],
      control: { type: "select" },
    },
    children: {
      control: false,
    },
  },
}

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: (args) => <Tooltip {...args} />,
}

export default meta
