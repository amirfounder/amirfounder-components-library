import React from 'react';
import { Header } from "../components/Header";

export default {
  title: 'Header',
  componenet: Header,
  argTypes: {
    size: {
      options: ['Small', 'Medium', 'Large'],
      control: { type: 'select' }
    },
    gridTemplateColumns: {
      control: { type: 'text' }
    },
    variant: {
      options: ['Primary', 'Secondary'],
      control: { type: 'select' },
    },
    boxShadow: {
      options: [true, false],
      control: { type: 'select' }
    }
  }
}

const Template = args => <Header {...args} />

export const Sandbox = Template.bind({})
Sandbox.args = {
  size: 'Small',
  gridTemplateColumns: '1fr 1fr',
  variant: 'Primary',
  boxShadow: true,
  sidePadding: '1vw',
  children: 'Cha - Ching'
}
