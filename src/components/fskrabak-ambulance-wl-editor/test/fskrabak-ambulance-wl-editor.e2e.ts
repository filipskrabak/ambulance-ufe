import { newE2EPage } from '@stencil/core/testing';

describe('fskrabak-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fskrabak-ambulance-wl-editor></fskrabak-ambulance-wl-editor>');

    const element = await page.find('fskrabak-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
