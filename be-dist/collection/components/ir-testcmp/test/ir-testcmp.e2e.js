import { newE2EPage } from "@stencil/core/testing";
describe('ir-testcmp', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<ir-testcmp></ir-testcmp>');
        const element = await page.find('ir-testcmp');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=ir-testcmp.e2e.js.map
