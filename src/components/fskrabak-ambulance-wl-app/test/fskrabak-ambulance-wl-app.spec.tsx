import { newSpecPage } from '@stencil/core/testing';
import { FskrabakAmbulanceWlApp } from '../fskrabak-ambulance-wl-app';

describe('fskrabak-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [FskrabakAmbulanceWlApp],
      html: `<fskrabak-ambulance-wl-app base-path="/"></fskrabak-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("fskrabak-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [FskrabakAmbulanceWlApp],
      html: `<fskrabak-ambulance-wl-app base-path="/ambulance-wl/"></fskrabak-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("fskrabak-ambulance-wl-list");
  });
});
