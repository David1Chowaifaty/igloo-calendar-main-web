import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '3f45a7fd1aabd2a7d429800eea9fde93c5fc6812', style: { background: 'white' } }, h("ir-custom-button", { key: 'ea01ad1bed69e238e9406b59928c601630eeff8d', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'abc85428061129c54c03952b0f1f367b5aebd79b', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'edaab9deaf5d16249b3595623ce97311664b6717', style: { background: 'white' } }, h("table", { key: '56a2f7b2b63639a08501f976066d7cc5738d3577', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'e0cecb53b065cdf28d7bd77c27a7399d76265fd6' }, "This", h("code", { key: 'dc1c80fa0cb917f69e0a17b4fb1a9d3659d541df' }, "<caption>"), "describes the table"), h("thead", { key: 'c4efeee76df842f5fd67bd0fb450b736de2e826d' }, h("tr", { key: '900523b4a8f473014d3fd2391ecd866bd08ca09e' }, h("th", { key: '26d4b0def6ea8778665edde2b8de459f9b52e6d1' }, "First column"), h("th", { key: '660b2354e4f176ea22957463c6058bcefb44c2ee' }, "Second column"), h("th", { key: 'de02e47203c4fcca97c9bf25397b410e899f934a' }, "Third column"), h("th", { key: '2b25aaf9746d5a014501d21f9bc2d2ca42e6e80f' }, "Final column"))), h("tbody", { key: 'cbc5c9cf6fb805857a2ccd7f90727eb716a40f8c' }, h("tr", { key: 'a29fd19e2e003f463fd3dffcdb8be328739c0d93' }, h("td", { key: '8e64f3627fe332eef44154bd61076edb5466ef81' }, "Data"), h("td", { key: '47847db0c368eba195ae3e68b851cdc7dddc116f' }, "Data"), h("td", { key: 'bd963fbabf508901d21d496552a37a3c68f98797' }, "Data"), h("td", { key: 'a0550e7eb26f81667c54b57e6eecb804ddcd1188' }, "Data")), h("tr", { key: '99f555acb3025073e1e3cf5f219724c61adbfc3f' }, h("td", { key: 'b91b1e0e040ec722808821f8b796a903073ed5e5' }, "Data"), h("td", { key: 'e76dc3c1d062dc4ccc8474f8864cd7e7d8d639fa' }, "Data"), h("td", { key: '69395f43aa4288e801f1a53a936db4783359e9e0' }, "Data"), h("td", { key: '7dade8557b7997bff330c012a1bcebb9577a4b3d' }, "Data")), h("tr", { key: 'df0b3e3c0236dc760229bd660cfa32f8a8418486' }, h("td", { key: '612c4302061ec1f147d1028e5ae4dddabac95b21' }, "Data"), h("td", { key: '325190ea1098a366f6cf65b25866246af0fe8e92' }, "Data"), h("td", { key: '2e4a834b5eba7dad41977a7aa13d0c23d0456ae5' }, "Data"), h("td", { key: 'c8b2c7fe66d64db4e547168d95b748163aed4e3f' }, "Data")), h("tr", { key: 'e84eaa352191090b88acf58bbf355755b9ccd218' }, h("td", { key: 'e6a138c47a032446d984fb38b7fcf6dbe3bcd0db' }, "Data"), h("td", { key: '381dc6f2ec9b993cef7339746e0ec1fcbf4c6d06' }, "Data"), h("td", { key: '7f0474f082f6d81ea276c296432fd224acceec2b' }, "Data"), h("td", { key: 'f1477218999120ab8da05660382466fcb76c589a' }, "Data")))))));
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
