import { html, fixture, expect } from '@open-wc/testing';

import '../src/views/view-404';

describe('<view-404/>', () => {
  let el;

  beforeEach(async () => {
    el = await fixture(html`
      <view-404></view-404>
    `);
  });

  it('404 view component has X properties initialized', () => {
    expect(el.title).to.be.an('string');

    expect(el.title).to.equal('404');
  });
});
