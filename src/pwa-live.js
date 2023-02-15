import { LitElement, html, css } from "lit";
import "./views/view-home";
import "./views/view-about";
import "./views/view-contact";
import "dile-tabs/dile-tabs";
import "dile-pages/dile-pages";

class PwaLive extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 15px;
      }

      h1 {
        font-weight: 200px;
        font-family: "Montserrat", sans-serif;
      }

      .page {
        display: none;
      }

      .page[active] {
        display: block;
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
      <!-- <nav>
        <a href="#" @click="${this.go}" name="home">Home</a>
        <a href="#" @click="${this.go}" name="about">About</a>
        <a href="#" @click="${this.go}" name="contact">Contact</a>
      </nav> -->
      <dile-tabs
        selected="${this.selected}"
        attrForSelected="name"
        @dile-tabs-selected-changed=${this.selectedChange}
      >
        <dile-tab name="home">Home</dile-tab>
        <dile-tab name="about">About</dile-tab>
        <dile-tab name="contact">Contact me</dile-tab>
      </dile-tabs>

      <dile-pages selected="${this.selected}" attrForSelected="name" º>
        <view-home name="home" ?active="${this.selected == "home"}"></view-home>
        <view-about
          name="about"
          ?active=${this.selected == "about"}
        ></view-about>
        <view-contact
          name="contact"
          ?active=${this.selected == "contact"}
        ></view-contact>
      </dile-pages>
    `;
  }

  selectedChange(e) {
    this.selected = e.detail;
  }
}

customElements.define("pwa-live", PwaLive);
