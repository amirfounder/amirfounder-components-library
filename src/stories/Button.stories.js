import { storiesOf } from "@storybook/react";
import React from 'react';
import { Button, Container, Heading, Link, Logo, Header, Menu, Paragraph} from '../index'

const stories = storiesOf('Sandbox', module);

stories.add('Sandbox', () => {
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
            <Logo color="white"/>
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

stories.add('Sandbox 2', () => {
  return(
    <>
      <Button>
        Hello there.
      </Button>
      <Paragraph>
        Hello There!
      </Paragraph>
    </>
  )
})