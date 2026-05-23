import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '520073460dd51a53336cf2ccdd2a39054e7c08b4', style: { background: 'white' } }, h("ir-custom-button", { key: '03d55630756bc6d997d35c25abf847579db4882d', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'b99f5a9bddeedfb1dda4393d9526f9b22f073bf9', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '4bc038200b7a74baed756482480cc79ece205979', style: { background: 'white' } }, h("table", { key: '6ee8f2fd58050d0f61e1705c5437507756bc6bdd', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'a7275854ff6c4ecef64002f9413727bcc2f474d4' }, "This", h("code", { key: '70b996c35949a555d50994ac886d2dc7a541f383' }, "<caption>"), "describes the table"), h("thead", { key: '58c386105deec83e011efb6e02e87bd561253a1e' }, h("tr", { key: 'e8f5bd750284210c4d952a68cbaff553d4e3a8b4' }, h("th", { key: '124537dc1b0836f3b9948f334b2bf4d2c7e363fb' }, "First column"), h("th", { key: '1fe9c63c1fbd8391af34843b3d275930a88826c1' }, "Second column"), h("th", { key: 'ffda84fba732ab67cce640acaaf09d514f88926c' }, "Third column"), h("th", { key: '4c5616e04aaf22f3ff7739c38faa517ff9febe32' }, "Final column"))), h("tbody", { key: '47bfc6f001d549dc55f009f3f0f95d7c3f976ed6' }, h("tr", { key: '719178cb178a3afe726b3d899fbd8cbad5438568' }, h("td", { key: 'cafe1551a60cd73ec8c0b5e7ced924e25edeec82' }, "Data"), h("td", { key: '564270796735eb900e8b48eba02becaad5914544' }, "Data"), h("td", { key: '77e7fc1a913eaba715d7037e3d8675bb6f2f2bd9' }, "Data"), h("td", { key: '63d22e82ed5b2fca871d2b1ef217f009b69f98eb' }, "Data")), h("tr", { key: 'bc8992bc83b38845ffac4d467bf453cb39347c0a' }, h("td", { key: '0c89b9872b0619ff638f85c9bf43991c6aed64f9' }, "Data"), h("td", { key: '12170919c26badbffa407b4f39983571859d4250' }, "Data"), h("td", { key: '433e233e1b047a8bf7272c8542b32d3ca898c242' }, "Data"), h("td", { key: '8092c1ac33ec607b05981036170b4365d712f43c' }, "Data")), h("tr", { key: '47f2ac632936f1f75a63afb040dc44f43dbd9366' }, h("td", { key: '7a579dfde87f5d431cc4b4a25d8552062416b48e' }, "Data"), h("td", { key: 'f56bd97c888836e9cb8b0521e27cecfc3f863deb' }, "Data"), h("td", { key: '534594b90d72a453c1419ad8fd292b304b73e960' }, "Data"), h("td", { key: '2ab7983238b68df61e402dac595376f67997d476' }, "Data")), h("tr", { key: 'b8505e948ae21e9d985bc49d8450f777649e8c2a' }, h("td", { key: '1c6be7b4faecc2333641b313fbf333d9a80eeef8' }, "Data"), h("td", { key: '988920c8758106c1640f2dc26d8af3828619c5b4' }, "Data"), h("td", { key: 'a14b4f149f1b1f58a6922fff555aa10590b2c70b' }, "Data"), h("td", { key: '9828e08ad928efaaf0518fec73322d4e62b0236f' }, "Data")))))));
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
