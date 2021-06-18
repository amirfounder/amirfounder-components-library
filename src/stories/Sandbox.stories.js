import React from 'react';
import { storiesOf } from '@storybook/react';

import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { Column } from '../components/Column';
import { Link } from '../components/Link';
import { Menu } from '../components/Menu';
import { Page } from '../components/Page';
import { Heading } from '../components/Heading';
import { Paragraph } from '../components/Paragraph';

import { BrowserRouter } from 'react-router-dom';

const stories = storiesOf('Sandbox', module)
stories.add('main', () => {
  return (
    <>
      <BrowserRouter>
        <Header>
          <Column>
            <Logo />
          </Column>
          <Column alignment="right">
            <Menu alignment="right">
              <Link>About</Link>
              <Link>Blog</Link>
              <Link>AI</Link>
              <Link>Projects</Link>
              <Link>Connect</Link>
            </Menu>
          </Column>
        </Header>
        <Header
          size="small"
          variant="secondary"
        >
          <Column alignment="left">
            <Link size="14px" variant="secondary">About</Link>
          </Column>
          <Column alignment="right">
            <Menu alignment="right">
              <Link size="14px" variant="secondary">Skills</Link>
              <Link size="14px" variant="secondary">Resumes</Link>
              <Link size="14px" variant="secondary">Interests</Link>
            </Menu>
          </Column>
        </Header>
        <Page columns="1fr 1fr">
          <Heading level="1">About Me</Heading>
          <Paragraph>
            Hello and thank you for taking the time to learn more about me. Although I won't say <i>too</i> much here, you can learn a lot about what I do professionally and for fun.
          </Paragraph>
        </Page>
      </BrowserRouter>
    </>
  )
})