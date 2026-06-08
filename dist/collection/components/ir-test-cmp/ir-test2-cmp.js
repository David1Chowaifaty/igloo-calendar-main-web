import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '81cc907ae135ae8040ed5b0efce9a28bbd03e3d7', style: { background: 'white' } }, h("ir-custom-button", { key: '557d9b87d0f62aaec6b9d39314417c86738ae672', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'b98343a795c2fcfacab35e9935305f9b541ca33d', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '947cef79f06e66c49951db3da587f43577f97bec', style: { background: 'white' } }, h("table", { key: '5a931a2f328a1914b20892c6ed90fb8d9842aba8', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '260bfae64a5f738899b81bce5c82666882405c0b' }, "This", h("code", { key: '51c761e9de83d2f2505e6f559ca9de981b3009cd' }, "<caption>"), "describes the table"), h("thead", { key: '6a13dc86ea188a6345d4a7720710fe3dc3d5e802' }, h("tr", { key: 'b833445b294f8c91bc2633a2d4524efe5d918a42' }, h("th", { key: '9689b5f0f12c0a99e101ab1e3bfaf13918b7d269' }, "First column"), h("th", { key: 'c04482880e11af2e3be1754b5807b310b56b7771' }, "Second column"), h("th", { key: 'd48f4f540b2b847b0bc1ab5fff8a79ea9e3c8be8' }, "Third column"), h("th", { key: '5262e0eb22158f687f075e5d63718cb55935d392' }, "Final column"))), h("tbody", { key: '81f15c8b3988b6d1e7d0f154d49689b552a4e7d2' }, h("tr", { key: 'ea0bdd9574d30a8e7a7c1bc83ca5c8b259bf2731' }, h("td", { key: 'e39540d950058f0bb34c56dd4de5de3f079fed96' }, "Data"), h("td", { key: '4312fcf91bdeaba423dc1e45cff92733113d48c6' }, "Data"), h("td", { key: '02ec54d56748548725443a6cb8e1cd7373c19e84' }, "Data"), h("td", { key: '924770a3a7811dc59efb2b3f75193e7643b1a88a' }, "Data")), h("tr", { key: '7e054f4115b8b89d80ed275d56c3bcaebb4028d4' }, h("td", { key: '1860c29897bb398a92f02db99cddc196f5c50acd' }, "Data"), h("td", { key: 'f948f494921b6656febe01834f3426fb4d2ebd12' }, "Data"), h("td", { key: 'add6ab674459b5ba495f073f2c12a003d625dfd8' }, "Data"), h("td", { key: '525aa6f71ac7923f0bf0ff4e37d83f83efeeb450' }, "Data")), h("tr", { key: '478f79e478ec049ba33ce022f09fb107603b4f89' }, h("td", { key: '421318d74515fc28d46d767239b42ad59c70df64' }, "Data"), h("td", { key: 'd8fa9b0202f5fe4c306e52c8ecab33dfbc82cc9b' }, "Data"), h("td", { key: '0cd29cf116f93edb56d4dc5fd43d0cd77a27dd17' }, "Data"), h("td", { key: 'ba266a88f05e3537ec177581cdb196e1d86aadc0' }, "Data")), h("tr", { key: '5dc715bfbf7b4c6bac11ea911b91951f258b2821' }, h("td", { key: '5569159b8ffe8b32ee8d731a46c6eda963ef2868' }, "Data"), h("td", { key: 'a8db62787e487b94d0df67d6bb04600edc5567e1' }, "Data"), h("td", { key: 'efa2a5a3d000d01d0202bf15940746bbcfffd72b' }, "Data"), h("td", { key: '29f9cb422a4111bd6070c4e4b410d2f881e30d47' }, "Data")))))));
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
