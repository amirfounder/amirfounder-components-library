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
        <Header>
          <Column>
            <Logo />
          </Column>
          <Column justifySelf="center">
            <Menu spacingDirection="center">
              <Link>NavLink 1</Link>
              <Link>NavLink 1</Link>
              <Link>NavLink 1</Link>
            </Menu>
          </Column>
          <Column justifySelf="end">
            <Button variant="secondary">
              Leave Feedback
            </Button>
          </Column>
        </Header>
      </BrowserRouter>
    </>
  )
})