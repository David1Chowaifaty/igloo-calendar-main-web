import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'f8d6190a8c4991f95dfdfe5941a19b942463664d', style: { background: 'white' } }, h("ir-custom-button", { key: 'fe77091ddc038f0181c27c6a0c966d94dd1cb8af', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '25d4ea7901739b3edc924c4edaff1746d816e5f5', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'bcd400a71e580e37dd3b45cac0bcf36030bcfcbc', style: { background: 'white' } }, h("table", { key: '0f349d49ea6182d69bbfbf928896e75c99b7d91a', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'c15790b84832fbb1a2c8565a67d5839d6dfa2e12' }, "This", h("code", { key: '27c0540b548cde2de3f5c5ba3fc512061f4f39ae' }, "<caption>"), "describes the table"), h("thead", { key: '1213ee03e95e362e69dfd18a46794375b9a8cefc' }, h("tr", { key: 'd4a6a474d49ef1eba322e7136dd86d4447c838ff' }, h("th", { key: 'bdcfb2e016b31eeec89be3474785e5184de3a276' }, "First column"), h("th", { key: 'ebb287478126ec4747c76f8e42c4f3979174c84a' }, "Second column"), h("th", { key: '6627710a188dec96cd7d3ab1060d20148ea7f56e' }, "Third column"), h("th", { key: '50d300c1aca2329a111e0946e4bad8d0723782f5' }, "Final column"))), h("tbody", { key: '279515d8c17fbf6cc26ad079f856b7436581aa14' }, h("tr", { key: 'f346f5309298a5ad83067abd53749fcb71632b41' }, h("td", { key: 'c45db410a7ed1c3ba3a55a16364a3c39029aff60' }, "Data"), h("td", { key: '20a2297ccabfbd86715e6d74b5081a23aaa5712c' }, "Data"), h("td", { key: '7a33fce81eb885848edb86eb2a9f99a6ceb6f73c' }, "Data"), h("td", { key: '8c334eef9dc465500d941046dfe9c491826d7dde' }, "Data")), h("tr", { key: '6d1e0ae276cd87a20c69db07ece482e3a11d68a1' }, h("td", { key: '215b88e58a0b38f90ed5662dee888ad6294e24d6' }, "Data"), h("td", { key: 'a420e8340db7d011e6b9d64a64139b44566a49f9' }, "Data"), h("td", { key: 'd1ff56ca3ee1498e2260a47eedc736d8460a668b' }, "Data"), h("td", { key: 'b9c591b8b42e23b8f60f73206dcd4d7b95305d62' }, "Data")), h("tr", { key: '7b8cb66210fed5caab48d4a72ecae8f70910812b' }, h("td", { key: '339a324f837c6dd24119c98c098519794468f866' }, "Data"), h("td", { key: '0159bd419775f0530e128ab7f819f0f647d97910' }, "Data"), h("td", { key: '9a4dc1055241fbd7ef4944bc563cf67397deab8b' }, "Data"), h("td", { key: '71b70da926c08a75e3201167d8d8a53c460a7f4d' }, "Data")), h("tr", { key: 'ed0e2d833b631d9db581ee1fec9d72cfc69016c0' }, h("td", { key: '34a7379eb23e76b33629eb0ed2239b265d3e5f82' }, "Data"), h("td", { key: 'cd860df6eafed2d3eaddc16f6a974024d0c971a3' }, "Data"), h("td", { key: '264ceb1d3c62f60c28433f4842970f86ed41bf05' }, "Data"), h("td", { key: 'a7e0f338668280be23a80fbdd1dc2183480f0ac7' }, "Data")))))));
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
