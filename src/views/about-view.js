import { LitElement, html, css } from 'lit-element';

class AboutView extends LitElement {

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
    this.title = 'About';
  }

  render() {
    return html`
      <h3>${this.title}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aliquam quasi ea commodi ad doloribus harum mollitia, est, ipsa illum voluptatibus quo facilis libero itaque corrupti nemo veniam laboriosam minima.</p>
    `;
  }
}

window.customElements.define('about-view', AboutView);