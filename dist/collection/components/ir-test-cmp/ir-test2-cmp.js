import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'e9f5ad15f95db9f29ad071f4d3f4e1b3eba50e78', style: { background: 'white' } }, h("ir-custom-button", { key: '0b07d6e832feb3d9531998f222dba23446aafe5c', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '9a18db8a7f65cb235195e4cf4e367bb34e4318d2', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '0b3bcc15b4be7d737a500cffb846a7c45cbf8433', style: { background: 'white' } }, h("table", { key: '76a5764a4e6996ab248479e886a0210aac3268f4', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '047d2c619851fa0333375792fb969d469a40ae44' }, "This", h("code", { key: '526b6d77d3522fe62ee39a7b0586e5693636691a' }, "<caption>"), "describes the table"), h("thead", { key: '777b1e0183e2c08abdce526d9621eea9b0e9cbb0' }, h("tr", { key: '2fda8a4006ae88bdbf971cf38422502eaae84049' }, h("th", { key: '91b19392cb93170e999a16827443c3b2345fe0e4' }, "First column"), h("th", { key: '0223eea0781d95ce4b99e77071bebfbe7a92d434' }, "Second column"), h("th", { key: '84747a16032bb73524c16740501483f89205da49' }, "Third column"), h("th", { key: 'f909f0736942d9863993361eb2b5ef9aca016ca0' }, "Final column"))), h("tbody", { key: 'ad171439f32d0368d6177cf1f9f6bf7208c8315e' }, h("tr", { key: 'd0a904136faa7cf85090e6ddd4d27cdfe48afff7' }, h("td", { key: '028ec5faaed244df4c61d31cae40195ec49625c3' }, "Data"), h("td", { key: '0098fec8610b1ed2f67e1496ed51e9da5c7e6ebf' }, "Data"), h("td", { key: '31b37fd62f32a52ab2890ca340f486b9dd4d4cd5' }, "Data"), h("td", { key: '2c88d35d952db8f05f4c430f6465b6ece8ecfd6d' }, "Data")), h("tr", { key: '405c831c3f452be2e692906e5d4cbac05a66467c' }, h("td", { key: '8abf667e9822110edf3208d9b00d8329845287af' }, "Data"), h("td", { key: '905e1841540866e9bbc83e3cf29aa0ceb062b899' }, "Data"), h("td", { key: '2953f8fe551502a98f9653496f8d28c2a94c5c3f' }, "Data"), h("td", { key: '5a1c635fd1946989afed6e176cf8c95ba35bde0c' }, "Data")), h("tr", { key: '088e796ed213b0384c9a7254c642bbeaccc1850b' }, h("td", { key: 'a687607964ff8fcd1799c45a9c14cc60033808e3' }, "Data"), h("td", { key: '9c0cec4594f3d4ebc04942114b2a00f270a56f5c' }, "Data"), h("td", { key: 'fff13e64fe09f0bd6eaaf3b733d5cb946b5033b3' }, "Data"), h("td", { key: '4123fc17d3b23aac7bc2c5801c3562f07e5a8491' }, "Data")), h("tr", { key: '350a2e3073c723d60357f8929a57aa5b86bbfade' }, h("td", { key: '32107a9724028bce5d791eb921d31e4fd608c6e3' }, "Data"), h("td", { key: '1d9802d16696112a44b0410b03f8c929c57f3273' }, "Data"), h("td", { key: 'a066eac1ebb3bd1aa83912c083471dbb81fce8d0' }, "Data"), h("td", { key: '831ab4e13c315058d904a875665670cbb5b611be' }, "Data")))))));
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
