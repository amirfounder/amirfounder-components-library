import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import {
  Button,
} from '../index'

const stories = storiesOf('Sandbox', module)

stories.add('testing dropdown', () => {

  const root = document.documentElement;

  root.style.setProperty('--button--theme-color', 'violet')
  root.style.setProperty('--button--theme-hover-color', 'purple')

  return (
    <BrowserRouter>
      <div>
        <Button classes="btn btn--danger btn--outline" label="Danger!" />
        <Button classes="btn btn--warn btn--outline" label="Warning" />
        <Button classes="btn btn--info btn--outline" label="Info" />
        <Button classes="btn btn--success btn--outline" label="Success!" />
        <Button classes="btn btn--default btn--outline" label="Default" />
        <Button classes="btn btn--theme btn--outline" label="Theme" />
      </div>
      <div>
        <Button classes="btn btn--danger btn--fill" label="Danger!" />
        <Button classes="btn btn--warn btn--fill" label="Warning" />
        <Button classes="btn btn--info btn--fill" label="Info" />
        <Button classes="btn btn--success btn--fill" label="Success!" />
        <Button classes="btn btn--default btn--fill" label="Default" />
        <Button classes="btn btn--theme btn--fill" label="Theme" />
      </div>
    </BrowserRouter>
  )
})