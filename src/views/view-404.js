import { LitElement, html, css } from 'lit-element';

class ErrorView extends LitElement {

  static get styles() {
    return css`
      :host {
        text-align: center;
        color: #56676d;
      }
      h2 {
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
      <h2>${this.title}</h2>
      <p>Oh no!!! Nothing here :(</p>
    `;
  }
}

window.customElements.define('view-404', ErrorView);