import { newE2EPage } from "@stencil/core/testing";
describe('ir-badge-group', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<ir-badge-group></ir-badge-group>');
        const element = await page.find('ir-badge-group');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=ir-badge-group.e2e.js.map
