import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import {
  BrowserRouter,
  // Link
} from 'react-router-dom';

import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { Column } from '../components/Column';
import { Link } from '../components/Link';
import { Menu } from '../components/Menu';
import { Page } from '../components/Page';
import { Heading } from '../components/Heading';
import { Paragraph } from '../components/Paragraph';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { Input } from '../components/Input';

const stories = storiesOf('Sandbox', module)
stories.add('main', () => {
  
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <BrowserRouter>
        <Header size="medium">
            <Logo size="large"/>
            <Menu alignment="right">
              <Link color="primary" >About</Link>
              <Link>Blog</Link>
              <Link>AI</Link>
              <Link>Projects</Link>
              <Link>Connect</Link>
            </Menu>
        </Header>
        <Header size="small" backgroundColor="black">
          <Column alignment="left">
            <Menu variant="secondary" size='12px'>
              <Link size="14px" color="secondary">About</Link>
            </Menu>
          </Column>
          <Column alignment="right">
            <Menu alignment="right">
              <Link size="14px" color="secondary">Skills</Link>
              <Link size="14px" color="secondary">Resumes</Link>
              <Link size="14px" color="secondary">Interests</Link>
            </Menu>
          </Column>
        </Header>
        <Page columns="1fr 2fr">
          <Heading level="1" size="5.5rem">
            Title
          </Heading>
          <Paragraph>
            This is a paragraph. Try entering a new line.
            See! That wasn't so hard. The cool thing is... The webpage doesn't account for the newline!
          </Paragraph>
          <Paragraph>
            This is the second paragraph. Enter your information below:
          </Paragraph>
          <Input />
          <Button
            variant="outline"
            size="medium"
            onClick={() => setShowModal(true)}
          >
            Learn More
          </Button>
          <Modal show={showModal} size='large'>
            <Heading level="3">Hello There.</Heading>
            <Paragraph>
              Check it out! You wanted to learn more... so you learned how to open the modal! Neat right? ;)
            </Paragraph>
            <Button onClick={() => setShowModal(false)}>Close</Button>
          </Modal>
        </Page>
      </BrowserRouter>
    </>
  )
})