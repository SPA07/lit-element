import { LitElement, html,css } from "lit-element";
import { PageViewElement } from "./pages-view-element";

export class ViewHome extends PageViewElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <div class="page">
        <h2>Home</h2>
      </div>
      <p>Esto es el home!!</p>
    `;
  }
}
customElements.define("view-home", ViewHome);
