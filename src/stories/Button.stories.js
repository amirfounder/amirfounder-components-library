import React from 'react';
import { Button } from '../components/Button';


const Constants = Object.freeze({
  SIZE: {
    SMALL: 'Small',
    MEDIUM: 'Medium',
    LARGE: 'Large'
  },
  VARIANT: {
    PRIMARY: 'Primary',
    SECONDARY: 'Secondary'
  },
  CHILDREN: 'Learn More'
})

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

export const PrimaryLarge = Template.bind({})
PrimaryLarge.args = {
  variant: Constants.VARIANT.PRIMARY,
  size: Constants.SIZE.LARGE,
  children: Constants.CHILDREN
}

export const PrimaryMedium = Template.bind({})
PrimaryMedium.args = {
  variant: Constants.VARIANT.PRIMARY,
  size: Constants.SIZE.MEDIUM,
  children: Constants.CHILDREN
}

export const PrimarySmall = Template.bind({})
PrimarySmall.args = {
  variant: Constants.VARIANT.PRIMARY,
  size: Constants.SIZE.SMALL,
  children: Constants.CHILDREN
}
