import { LitElement, html, css } from 'lit-element';

class MainView extends LitElement {

  static get styles() {
    return css`
      :host {
        text-align: center;
        color: #56676d;
      }
      h2 {
        color: #2F4858;
        text-align: center;
      }
      .text-container {
        margin-top: 50px;
      }
    `;
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