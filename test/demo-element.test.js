import { html, fixture, expect } from '@open-wc/testing';

import '../src/app-element';

describe('<app-element/>', () => {
  let el;

  beforeEach(async () => {
    el = await fixture(html`
      <app-element></app-element>
    `);
  });

  it('Component has X properties initialized', () => {
    expect(el.title).to.be.an('string');

    expect(el.title).to.equal('LitElement');
  });
});
