import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';

const meta = {
  title: 'ds/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'As Child Footer',
  },
};
