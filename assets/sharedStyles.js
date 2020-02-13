import { css } from 'lit-element';

export const SharedStyles = css`
  :host {
    display: block;
    --app-text-color: #56676d;
    --app-title-color: #2F4858;
    --app-link-color: #00737A;
  }
  h2 {
    color: var(--app-title-color);
    text-align: center;
  }
  .text-container {
    margin-top: 50px;
  }
`;