import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '1fd6f58ba9ef8540f07f175baf210a49eebf7401', style: { background: 'white' } }, h("ir-custom-button", { key: '1c4fa9d314e4e903470db7998c1781d973cf180a', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '186d7cb58976c972a73d17b3deaa296b270dac36', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '9662db4f3e6c5537956194509f79c26850f7f050', style: { background: 'white' } }, h("table", { key: 'afc017a1edab8a4b801f09c82bb62375ae991643', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'd6f2cbbf072638c39d60e99e895626c83390398d' }, "This", h("code", { key: 'f27afa17c444384cedc9937aa29ff4765b4f55dc' }, "<caption>"), "describes the table"), h("thead", { key: 'b2764f010a2fb5de95b80903ee5abd6eab001011' }, h("tr", { key: '6989ba1cbf874fcc6a6304c1473c25839afeda66' }, h("th", { key: 'e75f33aad87cd8c8e51891a2f0814e24e7a019be' }, "First column"), h("th", { key: '035365cbb937649afdf0fd39adab3495134f34c0' }, "Second column"), h("th", { key: 'ae45040c7755a15f86950081f2a6d42c1c31c305' }, "Third column"), h("th", { key: '2ecc286f7484c51ce649fd6bad0fa8ab095ada90' }, "Final column"))), h("tbody", { key: '341e93ede9a8a593f6c941073947299e42963726' }, h("tr", { key: '38518978db8576087beb0dbba87b61a4ba2c84c7' }, h("td", { key: '9fda307d95233ed22460ceac98b2087c7085c3da' }, "Data"), h("td", { key: 'edfd86c62c835d1647dc8cb13f62d2f973e592c8' }, "Data"), h("td", { key: 'c0c32179c2a774aba6403f823fd0dfe17e0d536b' }, "Data"), h("td", { key: 'a1d2960b1d098f21dd3888fd70d387865a2980bb' }, "Data")), h("tr", { key: '2e8417525ff1065ff466412630ea6f7286dc7701' }, h("td", { key: '3d70fc501a337766432b6d0c8c1d01e38dd11dec' }, "Data"), h("td", { key: '2a6a6e066cbe7ae1f760ecf89502a624e15bf4ac' }, "Data"), h("td", { key: 'da0ae708a2b7bab567a149a9430fec41bed8dea8' }, "Data"), h("td", { key: '3057b1f07e31516040e3e70875f8ef8e1ed92b05' }, "Data")), h("tr", { key: '11d510122f8f8495a3ffa34676c7deac09d6ea0c' }, h("td", { key: '2bce9e7682e4483c5b6c992fb932370f6ebac0ed' }, "Data"), h("td", { key: '4f1dd69409e0a755d460f46470c8c6e3896212f6' }, "Data"), h("td", { key: 'b09d375294b82eb473a35defd03755512975e760' }, "Data"), h("td", { key: 'be49dcf02aa379bcf23e5febea7b1de404d190f2' }, "Data")), h("tr", { key: '0f20ee9683abeca835bdd7abc20f7868c828dd2f' }, h("td", { key: '670f5827f0f84964e047a164c0e39045fecba016' }, "Data"), h("td", { key: '14bcae23128a02e6d376fd4296df866ee76e8e6d' }, "Data"), h("td", { key: '8b9f40f0e3517cc3cbdec63f0fbd1daa86afeaab' }, "Data"), h("td", { key: '474f0905a03dcced034a84a8b0aa4ae6020bfc67' }, "Data")))))));
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
