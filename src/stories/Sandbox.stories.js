import React from 'react';
import { storiesOf } from '@storybook/react';

import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { Column } from '../components/Column';
import { Button } from '../components/Button';
import { Link } from '../components/Link';
import { Menu } from '../components/Menu';

import { BrowserRouter } from 'react-router-dom';

const stories = storiesOf('Sandbox', module);

stories.add('Sandbox 1', () => {
  return (
    <>
      <BrowserRouter>
        <Header shadow>
          <Column>
            <Logo />
          </Column>
          <Column alignment="right">
            <Menu alignment="right">
              <Link>NavLink 1</Link>
              <Link>NavLink 1</Link>
              <Link>NavLink 1</Link>
              <Link>NavLink 1</Link>
              <Link>NavLink 1</Link>
            </Menu>
          </Column>
        </Header>
        <Header variant="SECONDARY">
          
        </Header>
      </BrowserRouter>
    </>
  )
})