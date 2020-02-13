import { LitElement, html, css } from 'lit-element';

class DemoElement extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        color: var(--elem-text-color);
        text-align: center;
        --elem-text-color: #56676d;
        --elem-title-color: #2F4858;
        --elem-link-color: #00737A;
      }
      h2 {
        color: var(--elem-title-color);
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
    this.title = 'LitElement';
  }

  render() {
    return html`
      <h2>${this.title} Starter Kit</h2>
      <div class="text-container">
        <p>This a LitElement base component with routing.</p>
        <p>For documentation open README file at directory's root</p>
        <p>Made with ❤️ by <a target="_blank" href="https://github.com/marco238">Marcos</a></p>
      </div>
    `;
  }
}

window.customElements.define('demo-element', DemoElement);