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

const stories = storiesOf('Sandbox', module);

const BACKGROUND_IMAGE = 'https://images.unsplash.com/photo-1464802686167-b939a6910659?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1333&q=80'

stories.add('1', () => {
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
              <Link>Research</Link>
              <Link>Contact</Link>
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
        <Page>
          <Heading backgroundImage={BACKGROUND_IMAGE} level="1">About Me</Heading>
          <Paragraph>
            Hello
          </Paragraph>
        </Page>
      </BrowserRouter>
    </>
  )
})