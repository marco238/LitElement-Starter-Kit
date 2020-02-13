import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../../assets/sharedStyles';

class MainView extends LitElement {

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
    this.title = 'Home';
  }

  render() {
    return html`
      <h2>${this.title}</h2>
      <div class="text-container">
        <p>Hi there 👋!! This is the home view</p>
        <p>😊</p>
      </div>
    `;
  }
}

window.customElements.define('main-view', MainView);