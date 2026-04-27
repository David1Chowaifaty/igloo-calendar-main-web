import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'bede9efa8c693c6a2775bdbe37b562729821b0ab', style: { background: 'white' } }, h("ir-custom-button", { key: '4e7747f339c4338c4487a40152ba4215f0ed6927', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '5052dd3c77cb4fffa9ed16452950b1dc0dfac43c', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'b511466cdc47e70779c1a7eecd8dc05759db8674', style: { background: 'white' } }, h("table", { key: '8134ce8dd0c6a632883a3d842d43043dd2dc1608', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'e1f86fb257b23ff969bbb80b961d4ba5300cf060' }, "This", h("code", { key: '739d52361d8d11a4869847e9d34766e0596b5942' }, "<caption>"), "describes the table"), h("thead", { key: '58b32deb4c61506bd1c12e1ada881e75ba75197a' }, h("tr", { key: 'a490dd68d83adc207e9498790b7a27897cb0e925' }, h("th", { key: 'd20f9f50e393de0112649b549dea34dae88899e8' }, "First column"), h("th", { key: '338dc7a60cf94f8c2a14d98e617603b88c4440b4' }, "Second column"), h("th", { key: '30d9e9e60b288b98e1a6a1f8eafc4f42f3b47913' }, "Third column"), h("th", { key: '2c276456c952c2b8b1c894a8816e85713fe6757c' }, "Final column"))), h("tbody", { key: '4cd240d76eab3c5bfb6ed9798620209c09f7a5bf' }, h("tr", { key: 'f100c5e3539c4b55280217f1165da0c341fdfe62' }, h("td", { key: 'bb5a7b78824c0fa63acb2c69112584ff2852466b' }, "Data"), h("td", { key: '51c4315ddc6f971d9cb3d0e5175bdb60f201fa30' }, "Data"), h("td", { key: '15fa2c3467fc0edc58859740f9baabafde20e800' }, "Data"), h("td", { key: 'a0d561469f3c7abf0189a1d9a528c0e699f1d12f' }, "Data")), h("tr", { key: '737a45abc101a3c38192871abd58e4d83d933389' }, h("td", { key: 'fc0fac77451054ada36440e041fc20901e83bc11' }, "Data"), h("td", { key: '31750b39a5babf821ca84ace0644223b9b6edf9f' }, "Data"), h("td", { key: '88ad8f34031cdce0e0527dcbef0ebc2d5ea57a36' }, "Data"), h("td", { key: 'ad9f742df82f0fc7ee392af8ddf9d2e1f8060de6' }, "Data")), h("tr", { key: 'ebaececeb8f6f5c650d124d30798aadddc8246c5' }, h("td", { key: '4a7aaf2ae925d867c101a40bc9c7a13c637890df' }, "Data"), h("td", { key: 'ea714404bacb2b75acf34635207aa1b9bed034d7' }, "Data"), h("td", { key: 'a1b1895718c5a1760fe8e95787c0d04353bcf754' }, "Data"), h("td", { key: '199ee64da301c5c739b651c97744b0cd7c507b52' }, "Data")), h("tr", { key: '4480aa89d6c5c8ff7784907965a3a100355d4b11' }, h("td", { key: '3da2c69663f1af359c46c60df720953923c694ef' }, "Data"), h("td", { key: '57c70fe9b1e24acc4e46762b86e6257144db293d' }, "Data"), h("td", { key: '1f90d0725935de9cfe607a80e971abc7b30be166' }, "Data"), h("td", { key: '1aafe69e2ebe5ff4df776483f987ab19b8c15fd6' }, "Data")))))));
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
