import { newSpecPage } from "@stencil/core/testing";
import { IrTestcmp } from "../ir-testcmp";
describe('ir-testcmp', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [IrTestcmp],
            html: `<ir-testcmp></ir-testcmp>`,
        });
        expect(page.root).toEqualHtml(`
      <ir-testcmp>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ir-testcmp>
    `);
    });
});
//# sourceMappingURL=ir-testcmp.spec.js.map
