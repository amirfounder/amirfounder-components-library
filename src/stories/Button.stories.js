import React from 'react';
import { Button } from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['Primary', 'Secondary'],
      control: { type: 'select' }
    },
    size: {
      options: ['Large', 'Medium', 'Small'],
      control: { type: 'select' }
    },
    children: {
      control: { type: 'text' }
    }
  }
}

const Template = args => <Button {...args} />

export const Sandbox = Template.bind({})
Sandbox.args = {
  variant: 'Primary',
  size: 'Medium',
  children: 'Learn More'
}
