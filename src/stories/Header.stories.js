import React from 'react';

import { Header } from '../index';

export default {
  title: 'Components/Individual',
  component: Header,
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

export const Hdr = (args) => <Header {...args} />
