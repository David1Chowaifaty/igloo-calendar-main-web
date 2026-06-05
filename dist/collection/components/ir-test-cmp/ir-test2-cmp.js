import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '585c09db21eec09d49a7c86afd5df28cd425404f', style: { background: 'white' } }, h("ir-custom-button", { key: '7edee09ba0ae559ef63a8de7fac9dba6c8b6d07f', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '180b71869eb0fa8d97f3fb41c6b5c65558b6d553', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '258f978f37e494107c9f9269a0055dab824cdbb6', style: { background: 'white' } }, h("table", { key: '6a62e393b494394d57925e539fcf0b06b9387a2c', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '27b787270d281078930901851d6fca3c48b02c75' }, "This", h("code", { key: 'a982131de5e1e47ff35c8119d3ab4d8280bc4cea' }, "<caption>"), "describes the table"), h("thead", { key: '572e077aa0ff0257c7967a9abd0a5630cf04a7b6' }, h("tr", { key: '24196a0f8103793b1b6effd13051c154b1397e6a' }, h("th", { key: '350a7dbfd863f6967a156e00b25ed3896a8a7473' }, "First column"), h("th", { key: 'f5011f0963094059202baacf827cb509364afc70' }, "Second column"), h("th", { key: '761c786364a13684f23b43a0d9dd2ec5b0bf7095' }, "Third column"), h("th", { key: 'f0922928ca9270453045a0dbc6d94de82e15e5ab' }, "Final column"))), h("tbody", { key: 'a2f09ba62e26d0907a10cc532eb56e0bdc5d1fa6' }, h("tr", { key: '1c0f871dbd34b74fbf3193413e9713f1e647b8b0' }, h("td", { key: '345c023f764aee6c4a7fc4ab1a564894f3d37e1c' }, "Data"), h("td", { key: '256cbb8803a221ed636ef117eda977d67d5d8755' }, "Data"), h("td", { key: '491eabf07ef469694bc12e5d00a3b11b86515a92' }, "Data"), h("td", { key: 'c78dee1076a721023ac0ab70e4ab7ec3aff56963' }, "Data")), h("tr", { key: 'bb78ce73f0a75ca580983cda336e63afa5482c9f' }, h("td", { key: '57d4744141e6e164f9a71289593bdfb9e4605b4b' }, "Data"), h("td", { key: '71e041b66bd2e37d5610f725bf32d0fc6914b0ac' }, "Data"), h("td", { key: 'b543702f52f3ba70336182602578f28c6d66799f' }, "Data"), h("td", { key: '8ecb713cc0b2ea8c7a391a0f12a88bbe77d99f87' }, "Data")), h("tr", { key: '89bbee44b0575a0fd63c8132354ba107d8bbdfd3' }, h("td", { key: 'ec4f466ef2cb8c2615eb3d248c7cd0be66716623' }, "Data"), h("td", { key: 'f0fc9af277a5970c37f6dc23d9fe802b3864a57a' }, "Data"), h("td", { key: 'db6775ef0a49f4766b6fcd73bd880cfb2ad01e2d' }, "Data"), h("td", { key: '0dd54bd41152d79f9c4718ce491065dfd893284a' }, "Data")), h("tr", { key: 'f587a5176bb32caf622b419da5c647d193c8e2b9' }, h("td", { key: '4509a9f301bec1c5601f141fe93df68d54d76a35' }, "Data"), h("td", { key: '533b77bb1334f5358185271809d06fb8b7b6a8b5' }, "Data"), h("td", { key: 'e484d12f1a97cfd1381c14b6c84922071b1048fc' }, "Data"), h("td", { key: '6247e9012822cb374f8b028688ee04ee00c0351e' }, "Data")))))));
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
