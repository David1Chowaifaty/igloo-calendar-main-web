import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '4515e019138c4dbc25700cd9cfcf17306731cc5a', style: { background: 'white' } }, h("ir-custom-button", { key: '130579860f2fad39a01850d0608178f39166efcb', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '5cf81710791c4e363c112b1fb16d9ddfb010347d', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '4e10e7a9d8026d7f1434b624796b3a85d8bed836', style: { background: 'white' } }, h("table", { key: 'a0c818683270d32f832fdfe9f104e59ce304fe12', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '539ac939f02bc2b917dea9529e6d6dd70b88cf4b' }, "This", h("code", { key: 'a3bcff11c7fee081ceaab30c9f7522e3018e7c2f' }, "<caption>"), "describes the table"), h("thead", { key: '68b1f1ce195e128b6007d1a04475908ddf61a9a9' }, h("tr", { key: '741d7d2e8f8a49374e62ce545e3d08a6ff82b6cf' }, h("th", { key: 'b2f9dcce3f60c3857f498c32d537ed7456ceb033' }, "First column"), h("th", { key: '09bd389aa5dd1aaa2b99c18da8facab3fecea4d3' }, "Second column"), h("th", { key: '68424592a83280d8fc19c19bc630b4a031678d6c' }, "Third column"), h("th", { key: '7877176ac1ea9a5bfa7266fc93d710817bb54739' }, "Final column"))), h("tbody", { key: '35ca92c1aaeecc3592f860a439e1bb507699f28f' }, h("tr", { key: 'c7c757b9ca8ac7abdc644dde7f2d77871489e7a2' }, h("td", { key: '61456aef8e7ec891f98cdfeed412f96f17d179ba' }, "Data"), h("td", { key: 'fa04722b4bed8debedb5372639ce8ee2587644ec' }, "Data"), h("td", { key: 'f318ed5fefcdab1471498e5ae53bddf79e241cb0' }, "Data"), h("td", { key: 'fe271507a95370f2f9e8e742d7b224d28ceed42d' }, "Data")), h("tr", { key: 'b9410cc7e575c3533f4718be279a639f050401d8' }, h("td", { key: '29520ef41663a3918b09e6db240ff3d6ddeabb53' }, "Data"), h("td", { key: 'd287f6173d503d2fdd0286ed21586e02e7ecb029' }, "Data"), h("td", { key: '61baec8c43901fed3b3068afdc7e7ebe426339c0' }, "Data"), h("td", { key: '86ec16cdc49676f691cd132eebf68a2efe0fca8f' }, "Data")), h("tr", { key: 'b2609e8d0cd96afa6c93efda1905ebb54bf8c3e8' }, h("td", { key: '96417f189e76f9c8da407022bdbb819c937cebbe' }, "Data"), h("td", { key: '4aaa5ae460099315ba6cebb48e28e21f1b814939' }, "Data"), h("td", { key: '14d071a4624efd587ade3c6fd03a113ebecdc6d9' }, "Data"), h("td", { key: 'c9b03257d00146d44d5bd706c58cfcb952a84da2' }, "Data")), h("tr", { key: 'cd1cc47187497b64c03c6140f7dae3e6b99baf84' }, h("td", { key: '691e76f4747a0abe390a03218268711ca2275447' }, "Data"), h("td", { key: '834fc2bac275583787055ed977fc9a6c389dede4' }, "Data"), h("td", { key: '035d02382bdc8046d1f05ecffb8d1b1bdbab2d1e' }, "Data"), h("td", { key: 'd6b0f677661a958901a5263bed018e415f760ef2' }, "Data")))))));
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
