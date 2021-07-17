import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {
  Box,
  Button,
  Header,
  Section,
  Menu,
  Link,
  Heading
} from '../index'

const stories = storiesOf('Sandbox', module)

stories.add('Demo Site', () => {

  const root = document.documentElement;
  root.style.setProperty('--button--custom-color', 'violet')
  root.style.setProperty('--button--custom-hover-color', 'purple')

  return (
    <BrowserRouter>
      <Header classes="header header--custom header--full-width header--contained header--lg">
        <Header.Column classes="header__col header__col--center-left">
          Amir Sharapov
        </Header.Column>
        <Header.Column classes="header__col header__col--center-right">
          amir@amirfounder.com
        </Header.Column>
      </Header>
      <Header classes="header header--sm header--secondary header--contained">
        <Header.Column classes="header__col header__col--center-left">
          <Link classes="link">New Arrivals!</Link>
        </Header.Column>
        <Header.Column classes="header__col header__col--center-right">
          <Menu classes="menu">
            <Menu.Item classes="menu__item"><Link classes="link">Item1</Link></Menu.Item>
            <Menu.Item classes="menu__item">Item 2</Menu.Item>
            <Menu.Item classes="menu__item">Item 3
              <Menu.Submenu classes="menu__submenu" distance="2.5vh">
                <Menu.Item classes="menu__submenu__item">Item 3.1</Menu.Item>
                <Menu.Item classes="menu__submenu__item">Item 3.2</Menu.Item>
                <Menu.Item classes="menu__submenu__item">Item 3.3
                  <Menu.Submenu classes="menu__submenu menu__submenu--dir-lft">
                    <Menu.Item classes="menu__submenu__item">Item 3.3.1</Menu.Item>
                    <Menu.Item classes="menu__submenu__item">Item 3.3.2</Menu.Item>
                    <Menu.Item classes="menu__submenu__item">Item 3.3.3
                      <Menu.Submenu classes="menu__submenu menu__submenu--dir-lft">
                        <Menu.Item classes="menu__submenu__item">Item 3.3.3.1</Menu.Item>
                        <Menu.Item classes="menu__submenu__item">Item 3.3.3.2</Menu.Item>
                        <Menu.Item classes="menu__submenu__item">Item 3.3.3.3</Menu.Item>
                      </Menu.Submenu>
                    </Menu.Item>
                  </Menu.Submenu>
                </Menu.Item>
                <Menu.Item classes="menu__submenu__item">Item 3.4</Menu.Item>
              </Menu.Submenu>
            </Menu.Item>
            <Menu.Item classes="menu__item menu__item-sqr">Item 4</Menu.Item>
          </Menu>
        </Header.Column>
      </Header>
      <Section
        background={{
          image: "https://images.unsplash.com/photo-1588878497864-24269ed778ba",
          overlay: {
            colors: ['rgba(0,0,0,.85)', 'rgba(0,0,0,.25)'],
            direction: '270deg'
          },
          size: `cover`
        }}
        classes="section section--8 section--contained section--img-position-center"
        columns="1fr"
        style={{ color: 'white' }}
      >
        <Section.Column classes="section__col section__col--center-center">
          <Heading level="1" classes="heading">
            Hello
          </Heading>
        </Section.Column>
      </Section>
      <Section classes="section section--contained" style={{backgroundColor: '#ccc'}}>
        <Section.Column classes="section__col">
          <Box>
            <Button classes="btn btn--danger btn--outline btn--sm" label="Danger!" /><Button classes="btn btn--danger btn--outline btn--sm" label="Danger!" />
            <Button classes="btn btn--warn btn--outline btn--sm" label="Warning" />
            <Button classes="btn btn--info btn--outline btn--sm" label="Info" />
            <Button classes="btn btn--success btn--outline btn--sm" label="Success!" />
            <Button classes="btn btn--default btn--outline btn--sm" label="Default" />
            <Button classes="btn btn--custom btn--outline btn--sm" label="Custom" />
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