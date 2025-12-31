import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'c77757cc442608ce6e7a36534d337406392b1b50', style: { background: 'white' } }, h("ir-custom-button", { key: '54a5e3336dbe743c54b26bab9ec558354683d3a3', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '925bab8b1bb50c605f3d5958cfc29dcd2ace88a9', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'a1a5b53aa3e47c4f7b012e3794c911760a55b7b4', style: { background: 'white' } }, h("table", { key: '4b0076e1f38302bac23bfbce22e91ae44fa9535c', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '475d99a988467f71e42fd926cb135f3f12212dcb' }, "This", h("code", { key: '93f5c634836c96eeac3db444d87dcd619ebef00c' }, "<caption>"), "describes the table"), h("thead", { key: '0332393954053b04ee7a9e38d0c523009cade366' }, h("tr", { key: '4d1b910ab49a91b36d9ae67bbc5a3975f74c1254' }, h("th", { key: 'f1cd2ce9b7e564e7127332026ebed5224ff1aa76' }, "First column"), h("th", { key: 'b0afa1acfaa0c7557d1ee7bb173877ec541ed924' }, "Second column"), h("th", { key: '9361c1cdc6e0758fd8e06c1bd409636cbf9abc54' }, "Third column"), h("th", { key: '5bc6b762c6a15dc7e1273cdd82d336390dadc784' }, "Final column"))), h("tbody", { key: '329f3a129b24468b4ec33acd09d7aa8d966abf5f' }, h("tr", { key: 'f4043ac1e896f1ae161f9542626c8f30c50fdfc4' }, h("td", { key: 'aa2751287b63d47c0496f57aaa2724356f34ff0b' }, "Data"), h("td", { key: '81f030b77f47c5de74d8a69bd2ae0d22b8524afe' }, "Data"), h("td", { key: 'cafef4c49bf458c64d8487ca0da61e9a42a40c98' }, "Data"), h("td", { key: 'beadf53309de42f23830230839d38972ec9b91f0' }, "Data")), h("tr", { key: 'ccc4e6619539df248f88fba19ec5ce7856867cc6' }, h("td", { key: '20f078015ed744e455466e2fe7f661c8d89673b5' }, "Data"), h("td", { key: '627068a7f4af603376c45e9f2e1e0154365d42ae' }, "Data"), h("td", { key: '09ad0ab950086b266ba0092e9d09717ee4fbe9e1' }, "Data"), h("td", { key: 'f079085e1c2bf7522f1d2a1a07306747d3aeb1fb' }, "Data")), h("tr", { key: '50a651f5c0ff964fc5b06396dbaff62d2e721672' }, h("td", { key: '2a9381759d34462c01375a7df4ffe5b5bfb54d32' }, "Data"), h("td", { key: '3440d02bf0fc98436016bb5e550f50a7c691d5f8' }, "Data"), h("td", { key: '2efebfbb0ac7320e2e80d567d3a393c5c626707b' }, "Data"), h("td", { key: '6eb091a9cba3940f504c6828ac7d6fd485dc8688' }, "Data")), h("tr", { key: '92e00569db0455c03735f3056a5c07fafbaa5b4b' }, h("td", { key: 'bf098d83f6ddbcd3d0bbc92f175b33241984bcdd' }, "Data"), h("td", { key: '8c2d8d697e16224ba7af5ee87911637377eecd99' }, "Data"), h("td", { key: 'af51e11ebc68ba05d7ed9ee17bc6e0381884691f' }, "Data"), h("td", { key: '70486f3edf7c8a03743b0f7cc67cf3f7d3cdf4ef' }, "Data")))))));
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
