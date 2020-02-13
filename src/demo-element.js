import { LitElement, html, css } from 'lit-element';
import { initRouter } from './router';

import { SharedStyles } from '../assets/sharedStyles';

class DemoElement extends LitElement {

  static get styles() {
    return [
      SharedStyles,
      css`
        #router-links {
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 0 20px #00000026;
        }
        #router-links a {
          color: #00737A;
          padding: 10px 25px;
          text-decoration: none;
        }
        #router-links a[active] {
          background-image: linear-gradient(to top, #ededed, #f1f1f1, #f6f6f6, #fafafa, #ffffff);
        }
      `
    ];
  }

  static get properties() {
    return {
      pageOne: {type: String},
      pageTwo: {type: String},
      path: {type: String}
    };
  }

  constructor() {
    super();
    this.pageOne = 'Home';
    this.pageTwo = 'About';
    this.path = window.location.pathname;
  }

  firstUpdated() {
    const node = this.shadowRoot.getElementById('outlet');
    initRouter(node);
  }

  render() {
    return html`
      <nav id="router-links">
        <a href="/" ?active="${this.path === '/home' || this.path === '/'}" @click="${() => this._updatePath('/home')}">Home</a>
        <a href="/about" ?active="${this.path === '/about'}" @click="${() => this._updatePath('/about')}">About</a>
      </nav>

      <main id="outlet"></main>
    `;
  }

  _updatePath(from) {
    this.path = from;
  }
}

window.customElements.define('demo-element', DemoElement);