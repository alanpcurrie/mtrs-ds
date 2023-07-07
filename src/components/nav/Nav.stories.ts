import type { Meta, StoryObj } from '@storybook/react';

import { NavigationMenu } from './TwNav';

const meta = {
  title: 'ds/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'As Child Button',
  },
};
