import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

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
import { Container } from '../components/Container';
import { Input } from '../components/Input';

const stories = storiesOf('Sandbox', module)
stories.add('main', () => {
  
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <BrowserRouter>
        <Header size="medium">
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
        <Header size="small" variant="secondary">
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
        <Page columns="1fr 2fr">
          <Heading level="1">Title</Heading>
          <Paragraph>
            This is a paragraph.
            You can put breaks in the code, but on the HTML, it won't display the breaks.
          </Paragraph>
          <Paragraph>
            This is the second paragraph. Enter your information below:
          </Paragraph>
          <Input />
          <Button
            // variant="secondary"
            onClick={() => setShowModal(true)}
          >
            Learn More
          </Button>
          <Modal show={showModal}>
            <Container>
              <Heading level="3">Hello There.</Heading>
              <Button onClick={() => setShowModal(false)}>Close</Button>
            </Container>
          </Modal>
        </Page>
      </BrowserRouter>
    </>
  )
})