import { newE2EPage } from '@stencil/core/testing';

describe('fskrabak-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fskrabak-ambulance-wl-app></fskrabak-ambulance-wl-app>');

    const element = await page.find('fskrabak-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
