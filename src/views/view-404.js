import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../../assets/sharedStyles';

class ErrorView extends LitElement {

  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          text-align: center;
          color: var(--app-text-color);
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
    this.title = '404';
  }

  render() {
    return html`
      <h2>${this.title}</h2>
      <div class="text-container">
        <p>Oh no 😟!! Nothing here!</p>
        <p>🤷🏻‍♂️</p>
      </div>
    `;
  }
}

window.customElements.define('view-404', ErrorView);