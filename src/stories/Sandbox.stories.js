import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {
  Header,
  Logo,
  Container,
  Column,
  Link,
  Menu,
  Page,
  Heading,
  Paragraph,
  Button,
  Modal,
  Input,
  GlobalStylesProvider,
  Section
} from '../index'

const stories = storiesOf('Sandbox', module)

stories.add('Sandbox', () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <BrowserRouter>
        <Header size="medium">
          <Logo size="large" />
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
              <Link size="14px" color="white">About</Link>
            </Menu>
          </Column>
          <Column alignment="right">
            <Menu alignment="right">
              <Link size="14px" color="white">Skills</Link>
              <Link size="14px" color="white">Resumes</Link>
              <Link size="14px" color="white">Interests</Link>
            </Menu>
          </Column>
        </Header>
        <Page>
          <Section columns="1fr 2fr" padding="8vh 3vw">
            <Column>
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
              <Paragraph>
                iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
                iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
                iiiiiiiiiiiiiiiiiiiIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiI</Paragraph>
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
            </Column>
            <Column />
          </Section>
        </Page>
      </BrowserRouter>
    </>
  )
})

stories.add('Sandbox 2', () => {
  return (
    <>
      <Container padding="5px">
        <Button size="large">Learn More</Button>
      </Container>
      <Container padding="5px">
        <Button size="medium">Learn More</Button>
      </Container>
      <Container padding="5px">
        <Button size="small">Learn More</Button>
      </Container>
      <hr />
      <Heading level="1">Heading 1</Heading>
      <Heading>Heading 2</Heading>
      <Heading level="3">Heading 3</Heading>
      <Heading level="4">Heading 4</Heading>
      <Heading level="5">Heading 5</Heading>
      <Heading level="6">Heading 6</Heading>
      <hr />
      <Container padding="5px">
        <Link size="large">Link</Link>
      </Container>
      <Container padding="5px">
        <Link size="medium">Link</Link>
      </Container>
      <Container padding="5px">
        <Link size="small">Link</Link>
      </Container>
      <hr />
      <Container padding="25px 0px">
        <Header shadow>
          <Logo />
          <Menu alignment="right">
            <Link>Nav Link 1</Link>
            <Link>Nav Link 1</Link>
            <Link>Nav Link 1</Link>
          </Menu>
        </Header>
      </Container>
      <Container padding="25px 0px">
        <Header shadow backgroundColor="black">
          <Logo color="white" />
          <Menu alignment="right">
            <Link>Nav Link 1</Link>
            <Link>Nav Link 1</Link>
            <Link>Nav Link 1</Link>
          </Menu>
        </Header>
      </Container>
    </>
  )
})

stories.add('Sandbox 3', () => {

  const globalStyles = {
    button: {
      size: 'large',
      variant: 'outline',
    },
    heading: {
      color: "red",
      one: {
        fontSize: '3rem',
        color: 'red'
      },
      two: {
        fontSize: '2rem'
      }
    }
  }

  return (
    <Page>
      <GlobalStylesProvider
        globalStyles={globalStyles}
      >
        <Heading>
          Coming soon...
        </Heading>
        <Button size="small">Click me</Button>
        <Button size="medium">Click me</Button>
        <Button>Click me</Button>
      </GlobalStylesProvider>
    </Page>
  )
})