import { newE2EPage } from '@stencil/core/testing';

describe('fskrabak-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fskrabak-ambulance-wl-list></fskrabak-ambulance-wl-list>');

    const element = await page.find('fskrabak-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
