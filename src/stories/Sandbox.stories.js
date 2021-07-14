import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {
  Box,
  Button,
  Header,
  Section,
  Menu,
  Link
} from '../index'

const stories = storiesOf('Sandbox', module)

stories.add('Demo Site', () => {

  const root = document.documentElement;
  root.style.setProperty('--button--custom-color', 'violet')
  root.style.setProperty('--button--custom-hover-color', 'purple')

  return (
    <BrowserRouter>
      <Header classes="header header--custom header--full-width header--contained header--md">
        <Header.Column classes="header__col header__col--center-left">
          Amir Sharapov
        </Header.Column>
        <Header.Column classes="header__col header__col--center-right">
          amir@amirfounder.com
        </Header.Column>
      </Header>
      <Header classes="header header--sm header--secondary header--contained">
        <Header.Column classes="header__col header__col--center-left">
          Auoo
        </Header.Column>
        <Header.Column classes="header__col header__col--center-right">
          <Menu classes="menu">
            <Menu.Item classes="menu__item menu__item--sqr"><Link classes="link">Item1</Link></Menu.Item>
            <Menu.Item classes="menu__item menu__item--sqr">Item 2</Menu.Item>
            <Menu.Item classes="menu__item menu__item--sqr">Item 3
              <Menu.Submenu classes="menu__submenu">
                <Menu.Item classes="menu__submenu__item menu__submenu__item--sqr">Item 3.1</Menu.Item>
                <Menu.Item classes="menu__submenu__item menu__submenu__item--sqr">Item 3.2</Menu.Item>
                <Menu.Item classes="menu__submenu__item menu__submenu__item--sqr">Item 3.3
                  <Menu.Submenu classes="menu__submenu menu__submenu--dir-lft">
                    <Menu.Item classes="menu__submenu__item menu__submenu__item--sqr">Item 3.3.1</Menu.Item>
                    <Menu.Item classes="menu__submenu__item menu__submenu__item--sqr">Item 3.3.2</Menu.Item>
                    <Menu.Item classes="menu__submenu__item menu__submenu__item--sqr">Item 3.3.3
                      <Menu.Submenu classes="menu__submenu menu__submenu--dir-rgt">
                        <Menu.Item classes="menu__submenu__item menu__submenu__item--sqr">Item 3.3.3.1</Menu.Item>
                        <Menu.Item classes="menu__submenu__item menu__submenu__item--sqr">Item 3.3.3.2</Menu.Item>
                        <Menu.Item classes="menu__submenu__item menu__submenu__item--sqr">Item 3.3.3.3</Menu.Item>
                      </Menu.Submenu>
                    </Menu.Item>
                  </Menu.Submenu>
                </Menu.Item>
              </Menu.Submenu>
            </Menu.Item>
            <Menu.Item classes="menu__item menu__item-sqr">Item 4</Menu.Item>
          </Menu>
        </Header.Column>
      </Header>
      <Section classes="section section--8 section--contained">
        <Section.Column classes="section__col">
          Hello
        </Section.Column>
      </Section>
      <Section classes="section section--contained">
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