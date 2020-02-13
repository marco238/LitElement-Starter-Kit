import { html, fixture, expect } from '@open-wc/testing';

import '../src/app-element';

describe('<app-element/>', () => {
  let el;

  beforeEach(async () => {
    el = await fixture(html`
      <app-element></app-element>
    `);
  });

  it('App main component has X properties initialized', () => {
    expect(el.pageOne).to.be.an('string');
    expect(el.pageTwo).to.be.an('string');
    expect(el.path).to.be.an('string');

    expect(el.pageOne).to.equal('Home');
    expect(el.pageTwo).to.equal('About');
    expect(el.path).to.equal(window.location.pathname);
  });

  it('_updatePath() method', () => {
    const link = el.shadowRoot.querySelectorAll('a');
    link[0].click();
    expect(el.path).to.equal('/home');
    link[1].click();
    expect(el.path).to.equal('/about');
  });
});
