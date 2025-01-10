import { newE2EPage } from "@stencil/core/testing";
describe('ir-quick-auth', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<ir-quick-auth></ir-quick-auth>');
        const element = await page.find('ir-quick-auth');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=ir-quick-auth.e2e.js.map
