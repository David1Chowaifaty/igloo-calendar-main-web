import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '80ca72924164a91a0cb72ed86f0098ee4f0e372b', style: { background: 'white' } }, h("ir-custom-button", { key: 'fe75fe636c7c3dc86514fcfa0fd9048ba27963a2', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'bb790e25794163b3ddb0ac4cbd96e407735e5e95', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'deeae7ce35e40e15efabaf75e9c700385ce5b94a', style: { background: 'white' } }, h("table", { key: 'e3352871a740820265019d3aeabe00626e63a048', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'f0d3cf27fbecb37427ac1ec1b8107a03fd3c9f43' }, "This", h("code", { key: '9f6bea3191f9e3f73908f10e0bbc9cd93ac0969d' }, "<caption>"), "describes the table"), h("thead", { key: 'afc2cea3d8106615ae703b74e3828d130fe207cd' }, h("tr", { key: '52ce4f0cf14cd2618cbcfa279bf6f1c7f10b042e' }, h("th", { key: '8e1b4ad9f2cbaf51d297ed930ba11bafe21899e0' }, "First column"), h("th", { key: '9e0fec981307130e63d7efbb8f8ccd14f9b25565' }, "Second column"), h("th", { key: 'fb570f80b7c040d5dc8c7582b175f4d71da22d3d' }, "Third column"), h("th", { key: 'accd4a5b4b2f3f17e7e768a1c9abf83b67672d57' }, "Final column"))), h("tbody", { key: '95110cf5f6668d0436e1a4ea21615dadeea8c435' }, h("tr", { key: '29ee8789b65c5a633d78318b7ea7294b71648c33' }, h("td", { key: 'd188cd3d693fdfe67321480b463ae41de5a94688' }, "Data"), h("td", { key: '9fa27ee3dac2aa24dc7782f5a9d919500267cdf3' }, "Data"), h("td", { key: '59db4e2cdff945026470926de083863edd56c1c8' }, "Data"), h("td", { key: 'd7c1b98a184b68853ce0ce1d007bdda383658eb7' }, "Data")), h("tr", { key: '3afe4196505501e9f4e7fd77587bbc13de4d9049' }, h("td", { key: '7e00853c847dd0f966aac7104fe751b34d5b8a55' }, "Data"), h("td", { key: '0df63c841f0f38d53167f8d2b8529438f2cb26a6' }, "Data"), h("td", { key: '84c0042943b9bdbfc4be889316ff5956f0ccaad8' }, "Data"), h("td", { key: '5aa3f7f6c88e9a192f53bcf71e1e087a0f375d65' }, "Data")), h("tr", { key: 'e2e41b48064515c03e595fe5dbb6d855b9818963' }, h("td", { key: '7aa3dcb66b958b93b2603debd0c8559451a3e80f' }, "Data"), h("td", { key: '5d769b44d1b1fe416d888bf72d179784943a280f' }, "Data"), h("td", { key: '185c2f504f7f6c51092efbe29456a66b99ca10b5' }, "Data"), h("td", { key: 'c4a6a31dbebfeadce63aed16878423df55fcef40' }, "Data")), h("tr", { key: '78f279a4d75c4ec0db1cbe79d4ca1740a522868c' }, h("td", { key: '3f32c2c606bd4d2b51dda4588e1f295788f90218' }, "Data"), h("td", { key: '43dbc34ffd4a4f80802535da0812f22c33bd120b' }, "Data"), h("td", { key: 'cef40aa753499b2de2333ffa3c203b82f4db5d45' }, "Data"), h("td", { key: 'ffdaf36fc555a40b86dfd02cd466498467ab130e' }, "Data")))))));
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
