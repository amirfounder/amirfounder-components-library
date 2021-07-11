import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {
  Box,
  Button,
  Header,
  Section,
} from '../index'

const stories = storiesOf('Sandbox', module)

stories.add('Demo Site', () => {

  const root = document.documentElement;

  const customTheme = {
    button: {
      themeColor: 'violet',
      hover: {
        themeColor: 'purple'
      }
    }
  }

  root.style.setProperty('--button--custom-color', 'violet')
  root.style.setProperty('--button--custom-hover-color', 'purple')

  return (
    <BrowserRouter>
      <Header classes="header header--custom header--full-width">
        <Header.Column classes="header__col header__col--center-left">
          Amir Sharapov
        </Header.Column>
        <Header.Column classes="header__col header__col--center-right">
          Menu goes here
        </Header.Column>
      </Header>
      <Section classes="section section--cols-5">
        <Section.Column classes="section__col">
          <Box>
            <Button classes="btn btn--danger btn--outline btn--sm" label="Danger!" />
            <Button classes="btn btn--warn btn--outline btn--sm" label="Warning" />
            <Button classes="btn btn--info btn--outline btn--sm" label="Info" />
            <Button classes="btn btn--success btn--outline btn--sm" label="Success!" />
            <Button classes="btn btn--default btn--outline btn--sm" label="Default" />
            <Button classes="btn btn--custom btn--outline btn--sm" label="Custom" />
          </Box>
        </Section.Column>
        <Section.Column classes="section__col">
          <Box>
            <Button classes="btn btn--danger btn--fill btn--sm" label="Danger!" />
            <Button classes="btn btn--warn btn--fill btn--sm" label="Warning" />
            <Button classes="btn btn--info btn--fill btn--sm" label="Info" />
            <Button classes="btn btn--success btn--fill btn--sm" label="Success!" />
            <Button classes="btn btn--default btn--fill btn--sm" label="Default" />
            <Button classes="btn btn--custom btn--fill btn--sm" label="Custom" />
          </Box>
        </Section.Column>
      </Section>
    </BrowserRouter>
  )
})