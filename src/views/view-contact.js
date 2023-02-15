import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './pages-view-element';

export class ViewContact extends PageViewElement {

  static styles = css`
  :host {
    display: block;
  }
  `;

  render() {
    return html`
    <h1>Contacto</h1>
    `;
  }
}
customElements.define('view-contact', ViewContact);
