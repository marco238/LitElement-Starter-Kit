import { LitElement, html, css } from 'lit-element';

class MainView extends LitElement {

  static get styles() {
    return css`
      h3 {
        color: #2F4858;
        text-align: center;
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
      <h3>${this.title}</h3>
      <p>Hi there! This is the home view :)</p>
    `;
  }
}

window.customElements.define('main-view', MainView);