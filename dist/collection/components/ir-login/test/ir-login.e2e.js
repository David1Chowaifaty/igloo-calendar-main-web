import { newE2EPage } from "@stencil/core/testing";
describe('ir-login', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<ir-login></ir-login>');
        const element = await page.find('ir-login');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=ir-login.e2e.js.map
