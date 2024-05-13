import { newE2EPage } from "@stencil/core/testing";
describe('ir-google-auth', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<ir-google-auth></ir-google-auth>');
        const element = await page.find('ir-google-auth');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=ir-google-auth.e2e.js.map
