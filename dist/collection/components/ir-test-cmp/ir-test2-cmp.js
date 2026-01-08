import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '20f297914e658b4ec8ba1fffbe38a4bae517df52', style: { background: 'white' } }, h("ir-custom-button", { key: '7f2d8075759f99825bd6f5fce705d3540ff254d9', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '5553d4e8e99708d3262f2454d5e319f3b384a3b3', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '9793975cbbf4a4e48176b2685b2bd76f2fe50a07', style: { background: 'white' } }, h("table", { key: '45c202a18fdbfa4af6d0b739f879a0c129cb52bd', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'e89381d0f0beb88fc4c252d529eb7101b584eff5' }, "This", h("code", { key: '6316bf93e2beaa14597c399d5386b48e5a46cd42' }, "<caption>"), "describes the table"), h("thead", { key: '5fd25563364c785e5423537bdb6f669d75b3c3b6' }, h("tr", { key: 'cadd897140c26bc53e2391691431758a11728c3d' }, h("th", { key: '60c5ecd32c56aabc6b85982fcf00305387b18cdf' }, "First column"), h("th", { key: '978ad119678500980eb366a83e8b5dd4202b13e8' }, "Second column"), h("th", { key: '519fcfa1907e9529a63ced254b2bc9365c7ec085' }, "Third column"), h("th", { key: '3cf9d09b932b27f78ceb07c9494aab890be2bcbb' }, "Final column"))), h("tbody", { key: '3dc23993a19ed24b32acb4013d00d6f1104ed355' }, h("tr", { key: 'dedeec035338ceef7276da18b2eea90090ef8827' }, h("td", { key: '559da80ab60522fe5e4fca177cb439fc5c75b1be' }, "Data"), h("td", { key: '8999fd43c55a12d05b29c31780a85914f39d1e46' }, "Data"), h("td", { key: '25532cadbdaa32946fc3d6964a9af1dc31cd3a4d' }, "Data"), h("td", { key: '6259732db7bd6702646f1b68343940f0e9601593' }, "Data")), h("tr", { key: 'ddf6ee923f10f64fb1c3e469821baafde358c76b' }, h("td", { key: 'd19394f21a75a314adbfe8f81d8cbfa36d2406eb' }, "Data"), h("td", { key: '92dc3cdaa08d9e585a275d7d51ce107719b99b6a' }, "Data"), h("td", { key: 'bd68fbc174213ac8f5f16898c7a9c772b09eabf7' }, "Data"), h("td", { key: '1d8e5582847e9889ee205543a94de1a0380eff51' }, "Data")), h("tr", { key: 'c7ae892be3828f963713ab69af7d99ac1435d808' }, h("td", { key: '356ec9454a31ff6d9ab81cccb707d0be2ac11c92' }, "Data"), h("td", { key: '58edc996cbb81410fbbc5e268f9b08f20835fb23' }, "Data"), h("td", { key: '4f592d95770739d8292720e1489a9571c876dac2' }, "Data"), h("td", { key: '2bbf1f2f9d1dba4be9730e7a2f56c09ba4173d82' }, "Data")), h("tr", { key: 'b80a8c7b72721a9c5a92cd212bda8a5eefd6b057' }, h("td", { key: '7bd4bc569c9d12e369e4fc06a0cce22c02634d75' }, "Data"), h("td", { key: '0bbb1ed2ef1cc52890bb4c90fbbbd46ef3d52365' }, "Data"), h("td", { key: 'a36f16532357e778ff9c0e340c5324f698842efc' }, "Data"), h("td", { key: '4609c59086942ef2213dc1aa32575e93e4d403c4' }, "Data")))))));
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
