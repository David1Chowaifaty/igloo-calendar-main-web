import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '5e96648665977b3009a36935c24a522d1c5bb344', style: { background: 'white' } }, h("ir-custom-button", { key: '47b707173b8b70bae9379922cd711adb000c6d59', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '21f22d62cf5ae060d20de15bec099b4e8dd517bf', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'da093ec720ef2909f56d6b42bc1e36cbedb048dd', style: { background: 'white' } }, h("table", { key: '85fccf861ca56724212aa4068c0e20f7ca15f3ee', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'dc068a4c1194747ef135f2dda817be2493782eec' }, "This", h("code", { key: 'ec600d0cdf29ed4ac276eda261f1e18435973c3f' }, "<caption>"), "describes the table"), h("thead", { key: 'd845187f544525582c0a3d751366baf4409ee76e' }, h("tr", { key: '6fe5f42b764d3779d21093980048670a4b07b03e' }, h("th", { key: '6c5b4023418a7c250792b37438a34689fd484c41' }, "First column"), h("th", { key: 'f38eb5efd1bdde5c1a4c9e81e2b35b6684147a87' }, "Second column"), h("th", { key: '31dcbe374d3d0ff55753742e7d24ad24f0bc06d4' }, "Third column"), h("th", { key: '3da98c2913b4789593c3ab0bfca28defaba28f6e' }, "Final column"))), h("tbody", { key: '5ff4be2f6a81f3451e23ae7cf6f3f24bdaf75e03' }, h("tr", { key: '7951c377cb2c7ce7cad8324a6104e21384000634' }, h("td", { key: '1f2bc1edf254df2bfc4d363fb166076bd1774933' }, "Data"), h("td", { key: 'c2b4577abdb61965ff6526eec1aeedaea09a5b79' }, "Data"), h("td", { key: '3a3051fc2de4c92cd229caaa5cede19b82ebb329' }, "Data"), h("td", { key: '6d98871d637bb00014e086fc780679dd457419fe' }, "Data")), h("tr", { key: '8e521bad985953cd40a716703744566ffe916f5a' }, h("td", { key: '2da4f13d44ad274db4dab6f918f44c05be529e44' }, "Data"), h("td", { key: '5f0b2d5fd57dd3e8f70b7fd2d06a47924e6726a2' }, "Data"), h("td", { key: 'c7adfe07142c4943bcc105042ebe84075c247a14' }, "Data"), h("td", { key: '50908b7e19bb984a0541d50a3767ff04d6e50acc' }, "Data")), h("tr", { key: '071928487ee3a284071f13508818e82bc7fb2068' }, h("td", { key: '53109df0df2b6f6bc19b2a509814b225f20a061c' }, "Data"), h("td", { key: 'fb90f500162ab7e5c1896b3c3128237b3a24c304' }, "Data"), h("td", { key: '302b31a5629c2ade4238cec06e83bca2ec86e738' }, "Data"), h("td", { key: '5177cf4c13dcd05732faffc1269fccd820556fd6' }, "Data")), h("tr", { key: 'dfee7906616cefb022f5aeb3e497f7d23c51fef4' }, h("td", { key: 'c24f412637a6f8445746a1800e847b59d0efa183' }, "Data"), h("td", { key: '9e038e727214bac589286ac3000a66743b5161df' }, "Data"), h("td", { key: '2e75a518328a6167d959fbcf0302ed143a1a709b' }, "Data"), h("td", { key: '35129ebe4daf82b9bf6e40fbc83831cb23925975' }, "Data")))))));
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
