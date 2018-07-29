import React from 'react';
import { storiesOf } from '@storybook/react';
import {Button, H1} from  '../components/shared';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, boolean, number } from '@storybook/addon-knobs/react';


const stories = storiesOf('Button', module);

stories
  .add('Primary', () => <Button type="primary" onClick={action('Clicked!')} size="lg">Primary button</Button>)
  .add('Default', withInfo('This is an informational paragraph you can use to describe your component')(
    () =><Button type="default" size="lg" onClick={action('onClick')}>Default</Button>
  ))
  .add('Info', () => <Button type="info" size="lg">Info button</Button>)
  .add('Warning', () => 
  <Button disabled={boolean('Disabled', false)} type="warning" size="sm">Warning</Button>)
  .add('Danger', () => <Button type="danger" size="xs">!</Button>)
  .add('Testing default props', () => <Button>Default props</Button>)



const h1Stories = storiesOf('h1', module);
h1Stories
  .add('H1 element', () => <H1>This is a very simple Heading component</H1>)




