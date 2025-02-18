import { newSpecPage } from '@stencil/core/testing';
import { FskrabakAmbulanceWlList } from '../fskrabak-ambulance-wl-list';

describe('fskrabak-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FskrabakAmbulanceWlList],
      html: `<fskrabak-ambulance-wl-list></fskrabak-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as FskrabakAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
