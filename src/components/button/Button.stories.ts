import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'ds/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'As Child Button',
  },
};

export const Secondary: Story = {
  args: {
    children: 'As Child Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'As Child Button',
  },
};

export const Small: Story = {
  args: {
    size: 'lg',
    children: 'As Child Button',
  },
};

export const Outline: Story = {
  args: {
    size: 'sm',
    variant: 'outline',
    asChild: false,
    children: 'As Child Button',
  },
};
