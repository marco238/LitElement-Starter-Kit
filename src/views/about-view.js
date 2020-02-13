import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../../assets/sharedStyles';

class AboutView extends LitElement {

  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          text-align: center;
          color: var(--app-text-color);
        }
        .text-container {
          margin-top: 50px;
        }
        a {
          text-decoration: none;
          color: var(--app-link-color);
        }
      `
    ];
  }

  static get properties() {
    return {
      title: {type: String}
    };
  }

  constructor() {
    super();
    this.title = 'About';
  }

  render() {
    return html`
      <h2>${this.title}</h2>
      <div class="text-container">
        <p>This a LitElement base component with routing.</p>
        <p>For documentation about Router please check out <a target="_blank" href="https://www.npmjs.com/package/@vaadin/router">Vaadin Router</a>.</p>
        <p>Made with ❤️ by <a target="_blank" href="https://github.com/marco238">Marcos</a></p>
      </div>
    `;
  }
}

window.customElements.define('about-view', AboutView);