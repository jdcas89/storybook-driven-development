import { configure, addDecorator } from '@storybook/react';
import {amazon, airbnb, coolblue} from '../src/components/themes/themes';
import { withKnobs } from '@storybook/addon-knobs/react';
import {withThemesProvider} from 'storybook-addon-styled-component-theme';

const themes = [amazon, airbnb, coolblue];
addDecorator(withThemesProvider(themes));
addDecorator(withKnobs);

function loadStories() {
  require('../src/stories');
}
configure(loadStories, module);
