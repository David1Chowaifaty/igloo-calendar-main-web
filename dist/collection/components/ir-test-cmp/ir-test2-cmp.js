import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'e7b53c185cc551a8a140df68defd5373799d87ed', style: { background: 'white' } }, h("ir-custom-button", { key: 'ef88ee620cdf4aeba796317b864d64a3a2a83aeb', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'f5101c5855c08d4990a472b1cecc200146def37c', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '0a01bbd69ea2b6db87e92906334c824e48623ba2', style: { background: 'white' } }, h("table", { key: '39953eaadd0eae07c57821261581865f47c49be6', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '7c828101794af93f1c9b70bba2bea0fd3522abd9' }, "This", h("code", { key: 'aaed776699c140d238e9bca613e92b72ece125d2' }, "<caption>"), "describes the table"), h("thead", { key: '64c6862f7e29dd93384356401625cfa4a983315c' }, h("tr", { key: '1fac2d930f3b0273a23a11b043944c2d229b36ce' }, h("th", { key: 'ee26ad9db335b6f96bb2f180807d9f949f2ccccc' }, "First column"), h("th", { key: '95e812013dee430be3591099a38c15e5cc419492' }, "Second column"), h("th", { key: 'ffaa420845210a1bba7cd5e6c7720b8372362e4a' }, "Third column"), h("th", { key: 'd2cd6f5be9fd38088b0bfd00300d9a109c08d2b1' }, "Final column"))), h("tbody", { key: '8139048611ab496f8fb7f15c7931ae6f31280b7b' }, h("tr", { key: '8448d97c001120a381b89056c853d46e80493ca1' }, h("td", { key: '05a9b2399ac622b586f5dbeb42aa3b7dc6a8253a' }, "Data"), h("td", { key: '214c2b01d381e19a69224cef2e680a4d717b4e55' }, "Data"), h("td", { key: '5dc00053f8ded851449229f74111aa5bec6588ca' }, "Data"), h("td", { key: '753b520850029a4758ff1904e1f2783f530b8c3a' }, "Data")), h("tr", { key: 'f6bc9c08d52f521b531cdb5a2d84a018e9acd23f' }, h("td", { key: '3232b1f7a9bb057275a5d8f3c02c61afe4af4a29' }, "Data"), h("td", { key: '05a6a1fdeb8f42487e865af9b2dc691b0932dbd3' }, "Data"), h("td", { key: 'f33a69c6cbcefcd0e4e6fe02b15b90a50e64fd57' }, "Data"), h("td", { key: '9c1c99de33388cd7887f5436825638eef624ad68' }, "Data")), h("tr", { key: '2ae40520a0cfa261f298610284e124496979f973' }, h("td", { key: 'bdfcc445ea8d6dda04c665d36355eaf152fd62e9' }, "Data"), h("td", { key: 'e1c1d38ac51d2f47802004fb1f6e60fd23a14f87' }, "Data"), h("td", { key: '8bfcc3dafa231426fa413c6599aac10e9b02ec89' }, "Data"), h("td", { key: 'd46bf9d8aa60e48b98e96a4e77779631f8b4172f' }, "Data")), h("tr", { key: '2faf31133b2afc032aede9e070635e5bd03fcb06' }, h("td", { key: '42ec64b5598e6fd9a2996045ba91d7b0e698eac2' }, "Data"), h("td", { key: 'a859e8b3c1cb6614f037e32750a0ca26ba9518d8' }, "Data"), h("td", { key: '208dd0bb70090519edf4472673afb6aebc776a60' }, "Data"), h("td", { key: '9b85cf909bbed411bab5c5fe29467c82dbc17d29' }, "Data")))))));
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
