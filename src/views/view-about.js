import { LitElement, html, css } from "lit-element";
import { PageViewElement } from "./pages-view-element";

export class ViewAbout extends PageViewElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <div class="page">
        <h2>About</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla
        deleniti debitis, sunt at facilis tempora tenetur eveniet consectetur
        voluptatum eos ex fugiat velit! Atque perferendis aliquid neque
        dignissimos inventore!
      </p>
      <img src="https://picsum.photos/300/200" alt="image">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
        autem necessitatibus hic repellendus dolores facere, maiores corrupti
        consequuntur minus at ipsa vitae vero mollitia, atque nihil perferendis.
        Eaque, reprehenderit consequuntur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis harum
        vitae repudiandae explicabo facilis corrupti nulla possimus, quas quia
        ut est eius laudantium, iure perferendis cumque sint necessitatibus!
        Nesciunt, saepe?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        accusamus dicta in. Excepturi est dicta molestiae incidunt nostrum
        doloremque ad mollitia, magnam dolore delectus inventore optio odit non.
        Illo, dolore.
      </p>
    `;
  }
}
customElements.define("view-about", ViewAbout);
