import { LitElement, html, css } from 'lit-element';

class ErrorView extends LitElement {

  static get styles() {
    return css`
      h3 {
        color: #468ff0;
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
    this.title = '404';
  }

  render() {
    return html`
      <h3>${this.title}</h3>
      <p>Oh no!!! Nothing here :(</p>
    `;
  }
}

window.customElements.define('view-404', ErrorView);