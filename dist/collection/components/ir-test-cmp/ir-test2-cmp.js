import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '0836d4a754e12cc764236102ce08c358fb5bd848', style: { background: 'white' } }, h("ir-custom-button", { key: 'bc965a4326976e3643139b154899126a54049da5', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '073accc687d911fd4b0b6a5e04977487c316b305', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '6f16053b5deded3a24eae67e8b694b8955b23bca', style: { background: 'white' } }, h("table", { key: 'f802494908ef90c9c785cb852ed2145e74eb3b7b', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '6191f02762840c97418ecacfbc1dcb7b22f62629' }, "This", h("code", { key: 'f436a6d4fc8a9ce3e0d29c08ca8f405cb505abe1' }, "<caption>"), "describes the table"), h("thead", { key: '98fb0c0d84fcce544091381ac0d2c14d09f32615' }, h("tr", { key: 'a9471fa3ae4c1faf7db9bcfcdb506da50701e666' }, h("th", { key: '0d6ecf168563e7d451b2f7109831facc5987d1a2' }, "First column"), h("th", { key: '8d6fafa15b3695b118eb49c0b7059b44add73429' }, "Second column"), h("th", { key: 'c102ddcac655cab6ccff612a8b92636df22ee9b7' }, "Third column"), h("th", { key: 'b1b1a13d67f8c1f1e40e6e901c14adf18b72cc73' }, "Final column"))), h("tbody", { key: 'f2f1caaae8d17bc770841cf26c976e39a0af448b' }, h("tr", { key: 'b9f347ecb46421b405305e210c24f9b37a798bed' }, h("td", { key: 'e13a31ce73cbbf3bf87a1bad1fa9ef3dd31ce43b' }, "Data"), h("td", { key: '5d762535adc8fc682c1555fda2eb0a7abab954f7' }, "Data"), h("td", { key: '46bc9e66be779544b5e0599e36c9f0d630d5c3fe' }, "Data"), h("td", { key: 'bdeacb21f9fb46d61ff808fa2dadb4e73352c3c9' }, "Data")), h("tr", { key: '7faf55e2170b381d2b4c309db2c77b7ebc729bac' }, h("td", { key: '39622dfcbe6f4f7e3afcb27d6433319cdb958ccc' }, "Data"), h("td", { key: '67ee178bbf6cd54d9e57804d7c7ad396d2c7fd8c' }, "Data"), h("td", { key: '66e33f79b284d7638022a5a3adfe7ca3ec04467b' }, "Data"), h("td", { key: 'fb6b23ae20608d6d44c8727011f3277274560e28' }, "Data")), h("tr", { key: '76c27fc921b8b39c2ce3f9e779d4796a5934cc3b' }, h("td", { key: '0b2e479815cff90291b3689d5d892dea9ba03d10' }, "Data"), h("td", { key: 'df4892439652643b85fca38777fb9aeb4e85cba9' }, "Data"), h("td", { key: '6eca5cbb95737db9163b2dd39a427f8e7f44885f' }, "Data"), h("td", { key: 'b7c25e6485fb617522b60423d85b872df2a94da8' }, "Data")), h("tr", { key: 'a701ee46065ee1ec67057a40937d032f80b1172a' }, h("td", { key: '61b47db0a27ff31ae4cbc747251417285d2efc69' }, "Data"), h("td", { key: '0cafa4d03f40029e60e82b741a56c8872b08a781' }, "Data"), h("td", { key: '60e5c8ddbc2d95820403750c6d7c8d7f75dd1ade' }, "Data"), h("td", { key: 'f1f4cdb4c5ca4f85bf10b10f6f14d3d05d236053' }, "Data")))))));
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
