import { newSpecPage } from '@stencil/core/testing';
import { FskrabakAmbulanceWlList } from '../fskrabak-ambulance-wl-list';

describe('fskrabak-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FskrabakAmbulanceWlList],
      html: `<fskrabak-ambulance-wl-list></fskrabak-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <fskrabak-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fskrabak-ambulance-wl-list>
    `);
  });
});
