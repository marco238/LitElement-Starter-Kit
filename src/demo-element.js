import { LitElement, html, css } from 'lit-element';

class DemoElement extends LitElement {

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
    this.title = 'LitElement';
  }

  render() {
    return html`
      <h3>${this.title} Starter Kit</h3>
    `;
  }
}

window.customElements.define('demo-element', DemoElement);