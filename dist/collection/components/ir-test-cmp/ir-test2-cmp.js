import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'd00996ceaf2d5d86f5d876d3e48a2dda007c00be', style: { background: 'white' } }, h("ir-custom-button", { key: '5c2b72885738757e68b87ada44ddebe43be37cd3', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '6deada81dc256c5caf0af412c039c4512dd56d10', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '04d4eb635fc8a038a7cd8f966c70e87e51a2dc93', style: { background: 'white' } }, h("table", { key: '91c6415d3d1384bbf8cededcc86b8a9c6fca24b7', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '3f3844c7c9ca192e5a9780befc84712022d8e4f6' }, "This", h("code", { key: 'b2cf0d26e9c2db103ac2070415631a41f1b87e96' }, "<caption>"), "describes the table"), h("thead", { key: '5f8bb8fa3c3e3cec9e47f962f49ef3ceed634e95' }, h("tr", { key: '3053b9aee1292b2269c13026340a3f9a2873779a' }, h("th", { key: 'f4efac8aed00ba6a92bfa7ca9ecc4a143e6f10ad' }, "First column"), h("th", { key: 'c59752a69768733fef3a6b3a14aaa2852dcdd50f' }, "Second column"), h("th", { key: '85e3b2d2bfa7a1e5459a497b13aa731aa6dde9b3' }, "Third column"), h("th", { key: 'bde80592b0b41abbadbc65ce391ffc4c1b07320c' }, "Final column"))), h("tbody", { key: '5134e8866201ca7be916b3f842ac27c2a888f303' }, h("tr", { key: '475cd90872cef93131f610cf147e2bc30109bb54' }, h("td", { key: '22aa7ca6824b2f26cd3fe811c6e952af54ad23c7' }, "Data"), h("td", { key: '4dc77f20d3a1ce17a73a2d8bc8601b980442e5fa' }, "Data"), h("td", { key: 'be85ab590f74136abd259f74a5445733f1dbee02' }, "Data"), h("td", { key: 'edf8a5afe16f4f7dc19960d416f0bf6d1b341a68' }, "Data")), h("tr", { key: 'e3beb8ef9f3c254d10d57bd29604104d24240b51' }, h("td", { key: '3e1fb8a5286467301f1b31bb0ef92653c0b8411f' }, "Data"), h("td", { key: '8983688ed0873d9a593d1ea88d8d7ac06362f322' }, "Data"), h("td", { key: 'a05d42519ee5e98066ba4589e797512dcc5a5280' }, "Data"), h("td", { key: '69364d11508a44e81f2d6a7f74029aeb87eed88e' }, "Data")), h("tr", { key: 'a9b69c4c0e4435100a30348eeae8a76ef4375147' }, h("td", { key: '73dfde6da5150748917891b4de4448475616dc50' }, "Data"), h("td", { key: 'e9705b959316fac1906d973aaf6dc0c722fd1d67' }, "Data"), h("td", { key: '905737e4c979a357c80443132928b1048c439a67' }, "Data"), h("td", { key: 'a761fb36608c30b26342debe44bbc3ea20b22eb3' }, "Data")), h("tr", { key: '77e3d5248d63b5ce465564d2b4bbb0333265dcc0' }, h("td", { key: '969f319bdcb63a11bc7bb4301499346c84eb72ff' }, "Data"), h("td", { key: 'b16d66c5eaad30ef19e7aa7b025395c6c8264aeb' }, "Data"), h("td", { key: '4a188f1ff4ba1a5363220e84d04354344900ff17' }, "Data"), h("td", { key: '38beab6c63a42a82a036519c5ddc1d9d25e51b4f' }, "Data")))))));
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
