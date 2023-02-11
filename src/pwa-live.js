import { LitElement, html, css } from "lit";
import './views/view-home';
import './views/view-about';

class PwaLive extends LitElement {
  static get styles() {
    return css`
      :host {
        display: bloc;
        padding: 15px;
      }

      h1 {
        font-weight: 200px;
        font-family: "Montserrat", sans-serif;
      }
    `;
  }

  static get properties() {
    return {
      selected: { type: String },
    };
  }

  constructor() {
    super();
    this.selected = "home";
  }

  render() {
    return html`
      <h1>My app</h1>
      <nav>
        <a href="#" @click="${this.go}" name="home">Home</a>
        <a href="#" @click="${this.go}" name="about">About</a>
        <a href="#">Contact</a>
      </nav>
      <main>
        ${this.selected == "home" ? html` <view-home texto="algo"></view-home> ` : ""}
        ${this.selected == "about" ? html` <view-about></view-about> ` : ""}
      </main>
    `;
  }

  go(e) {
    e.preventDefault();
    let page = e.target.getAttribute("name");
    this.selected = page;
  }
}

customElements.define("pwa-live", PwaLive);
