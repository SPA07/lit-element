import { LitElement, html, css } from "lit-element";

export class ViewAbout extends LitElement {
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
      <img src="../images/kitty-g393d0de6c_1280.jpg" alt="cat-image" />
    `;
  }
}
customElements.define("view-about", ViewAbout);
