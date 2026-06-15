import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '8b5fc19da15fcd2013176622104e96f6cb9ba60f', style: { background: 'white' } }, h("ir-custom-button", { key: '8cb8910628fa7677f0006fde073dfc3747d916a4', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '52d57f81ec277e0f1770ce715b706a609759c94f', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '78c938c6a15f0f80bb6cb25fb86f34a96f993c27', style: { background: 'white' } }, h("table", { key: 'edee7371ee4fcc522fc1332d6eaed499155058b1', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '879f2691838253935fb634df6dc502ddb7d23269' }, "This", h("code", { key: 'e95d17063e954ebbd27495f6921375f27f22bb29' }, "<caption>"), "describes the table"), h("thead", { key: '53e6db39791568caa1153390f05165f9386c2b1e' }, h("tr", { key: 'de048301578372108e716d11b9fe325d04d91278' }, h("th", { key: 'abf8e879f55cb91450f8bbe38c7382565e692bd2' }, "First column"), h("th", { key: '7d7d0fc939e74d85ae488d5c1a1a9a86ae24da01' }, "Second column"), h("th", { key: '8e73d8ba9f3cb288bff08871d4696db6dec2ac36' }, "Third column"), h("th", { key: '3e523457a6a9de8dac5b3d9518ebbe5b75129e50' }, "Final column"))), h("tbody", { key: '32c84f60649c669c27dd40ea68009a59e53530bc' }, h("tr", { key: '67dcfdccd86c5556a1cf2f344099ad1f1a03eaf5' }, h("td", { key: '43545059a281899c2887c8a6c0e5bbcd942f01f8' }, "Data"), h("td", { key: 'a04ab33ea72ba6c31e7f341e0f07a32fe161dbfa' }, "Data"), h("td", { key: '940b3c58b4993622675512de27395907341c0b05' }, "Data"), h("td", { key: '6def92262339e9e8731a22e730a5ac1ba75ee020' }, "Data")), h("tr", { key: '4158f61a4debc185cc224f8afa23a7b2ea70ef71' }, h("td", { key: '94002439e1be5c9e70f8230fdfef5a556ce5f033' }, "Data"), h("td", { key: '0a0c4f1216eda355741496e43e116c476339d0fb' }, "Data"), h("td", { key: 'e801df7ba09f6794ddb32f8ccb0b9a295b934518' }, "Data"), h("td", { key: '40fbd147246dfcf7f74782caf24e783c13612c90' }, "Data")), h("tr", { key: 'f61d1f0df9bd13792a92c474fc31725f27b713e2' }, h("td", { key: '4062781fa6c57f4f22f7a00d6e0564bb92052c84' }, "Data"), h("td", { key: '2058bb823385ab878b7be1b256e38fb790aada71' }, "Data"), h("td", { key: 'd1520356a475b82bc0b26855929988be2fd0355d' }, "Data"), h("td", { key: 'be67a85cc3a48a8d3185d26c401c43af7e40aa8d' }, "Data")), h("tr", { key: 'f1b8b6cd4bdc5a1e59cb003d2b35f5f169af7a85' }, h("td", { key: '884cf1c47b515ddcf760d0c6332f8445070c15b5' }, "Data"), h("td", { key: '78d6789f65d7d9f5b485646545a0ae476c9691de' }, "Data"), h("td", { key: '6e57ca9f426ac666e76e926c96d67303ccb2cdfe' }, "Data"), h("td", { key: '8ad3ed80b4b130ab01c91f2dd2cfc58564b7ed88' }, "Data")))))));
    }
    static get is() { return "ir-test2-cmp"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-test-cmp.css", "../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-test-cmp.css", "../../common/table.css"]
        };
    }
}
//# sourceMappingURL=ir-test2-cmp.js.map
