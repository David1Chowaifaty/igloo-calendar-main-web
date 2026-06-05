import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '34a225ea0e0d0350fbeb2848a89c9851a5f1b9a3', style: { background: 'white' } }, h("ir-custom-button", { key: '129beb8f74bcf6ec037e03fd6918d26d44b598a1', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '66c1f8311ebb7b8e0f71df4e8c529d67bfd8ba2b', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '164b99c163318b35e42fa51eaf97c183fef76bf9', style: { background: 'white' } }, h("table", { key: 'f8d49e849e590ceda26ec789915ed25a60d3020a', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '0df30f2d7d8a14d32653b9c0f9141ed120ad10d6' }, "This", h("code", { key: '131e9ff8168299324d6448c42ef33726a98704cd' }, "<caption>"), "describes the table"), h("thead", { key: '4fc833e0e3cd7a682a2842c0603537a5e7d83c25' }, h("tr", { key: 'ada52abeb7432846cb196266946a817f42212e73' }, h("th", { key: '02cbfdf21865992a9db8e9658eed42f3be7c9867' }, "First column"), h("th", { key: '9a7c6a7357d8e0500d8afc090fa7148c3f4e14bd' }, "Second column"), h("th", { key: '1464c4cbbbcc319747104c4c14cc244224831b96' }, "Third column"), h("th", { key: 'b2dadeb2ea5bd54bd30bb7d9242bff4f1495bc28' }, "Final column"))), h("tbody", { key: '9bf21f0e890d9187f20de3be0409bbce82348b96' }, h("tr", { key: '5e56ccdfe4fcbb812a0cde01704e7273214c3b00' }, h("td", { key: '3f4d334549f02d2c101f798ef201f3156fd9ca6b' }, "Data"), h("td", { key: 'b59aaf199550a95e3c89ba1b49b8697b00d380f6' }, "Data"), h("td", { key: 'a0eb2461aadb55194142d282480331c3973ac4b3' }, "Data"), h("td", { key: '00515f91f47007d3f83f3b3c9f5a28378f348826' }, "Data")), h("tr", { key: 'fc9fa18c824897a359962ce0b288d2c654ff10ff' }, h("td", { key: '48cc6c8e0ed0e93c4dfa6c86b723080130d6beb5' }, "Data"), h("td", { key: '41682ab37132884c9eb68a419ae72148d625c36e' }, "Data"), h("td", { key: '0022c618d8a1ce11a1c933f95d69b567038119f0' }, "Data"), h("td", { key: '4d5ab3c52fad0246689b271e12b7800b7f3946da' }, "Data")), h("tr", { key: '910778790bc0da167b17a20800bf56aa2d915134' }, h("td", { key: '1db4dcc570181231c568bcb714e1d746173fade7' }, "Data"), h("td", { key: '53eda147c11d9b15110f8c3edd410eea8c3fc67a' }, "Data"), h("td", { key: '39a9d0fb74473016ec451b51ac2f3569ae0c78cd' }, "Data"), h("td", { key: '9d2842de6bb32b6f3850e6e1b8f94bd98cef4db9' }, "Data")), h("tr", { key: 'aad4ec750fa4f6f0b81bb582f4476a7ef7095946' }, h("td", { key: 'a345d192fb45a1506f384f99844b67b4c425174e' }, "Data"), h("td", { key: '947c8ba39ce4c24ddb90f13c6de6ddecf7996f52' }, "Data"), h("td", { key: '13006ef8433c293fb78c2907efcc728797efdffe' }, "Data"), h("td", { key: 'f6ccdff9d04cbca0445c4aa6a6e177a66e99dfe6' }, "Data")))))));
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
