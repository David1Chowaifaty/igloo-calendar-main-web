import { newSpecPage } from "@stencil/core/testing";
import { IrGoogleAuth } from "../ir-google-auth";
describe('ir-google-auth', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [IrGoogleAuth],
            html: `<ir-google-auth></ir-google-auth>`,
        });
        expect(page.root).toEqualHtml(`
      <ir-google-auth>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ir-google-auth>
    `);
    });
});
//# sourceMappingURL=ir-google-auth.spec.js.map
