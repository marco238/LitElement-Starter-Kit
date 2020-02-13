import { LitElement, html, css } from 'lit-element';
import { initRouter } from './router';

class DemoElement extends LitElement {

  static get styles() {
    return css`
      #router-links {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      #router-links a {
        color: #008F7A;
        padding: 10px 20px;
        border-radius: 4px;
        margin-right: 20px;
        text-decoration: none;
      }
    `;
  }

  static get properties() {
    return {
      pageOne: {type: String},
      pageTwo: {type: String}
    };
  }

  constructor() {
    super();
    this.pageOne = 'Home';
    this.pageTwo = 'About';
  }

  firstUpdated() {
    const node = this.shadowRoot.getElementById('outlet');
    initRouter(node);
  }

  render() {
    return html`
      <nav id="router-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>

      <main id="outlet"></main>
    `;
  }
}

window.customElements.define('demo-element', DemoElement);