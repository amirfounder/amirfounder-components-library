import React from 'react';

import { Column } from '../index';

export default {
  title: 'Components/Individual',
  component: Column,
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

export const Col = (args) => <Column {...args} />
