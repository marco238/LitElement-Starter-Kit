import { html, fixture, expect } from '@open-wc/testing';

import '../src/views/main-view';

describe('<main-view/>', () => {
  let el;

  beforeEach(async () => {
    el = await fixture(html`
      <main-view></main-view>
    `);
  });

  it('Main view component has X properties initialized', () => {
    expect(el.title).to.be.an('string');

    expect(el.title).to.equal('Home');
  });
});
