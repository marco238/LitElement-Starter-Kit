import { html } from 'lit-html';
import { withKnobs, text } from "@storybook/addon-knobs";
import '../src/app-element';

export default {
  title: 'LitElement Demo',
  decorators: [withKnobs],
};

export const Case_1 = () => {
  const pageOne = text("Page One", 'Home');
  const pageTwo = text("Page Two", 'About');
  return html`
    <app-element pageOne=${pageOne} pageTwo=${pageTwo}></app-element>
  `
};
