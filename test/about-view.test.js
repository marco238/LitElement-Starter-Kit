import { html, fixture, expect } from '@open-wc/testing';

import '../src/views/about-view';

describe('<about-view/>', () => {
  let el;

  beforeEach(async () => {
    el = await fixture(html`
      <about-view></about-view>
    `);
  });

  it('About view component has X properties initialized', () => {
    expect(el.title).to.be.an('string');

    expect(el.title).to.equal('About');
  });
});
