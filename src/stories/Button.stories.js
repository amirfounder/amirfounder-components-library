import React from 'react';

import { Button } from '../index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    classes: {
      control: 'text',
      defaultValue: 'btn btn--lg btn--rounded'
    },
    label: {
      control: 'text',
      defaultValue: 'Contact Us'
    }
  }
}

export const Btn = (args) => <Button {...args} />
