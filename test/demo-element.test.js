import { html, fixture, expect } from '@open-wc/testing';

import '../src/demo-element';

describe('<demo-element/>', () => {
  let el;

  beforeEach(async () => {
    el = await fixture(html`
      <demo-element></demo-element>
    `);
  });

  it('Component has X properties initialized', () => {
    expect(el.title).to.be.an('string');

    expect(el.title).to.equal('LitElement');
  });
});
