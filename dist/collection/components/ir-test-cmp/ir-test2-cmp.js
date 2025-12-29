import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '4e4b4085b83150ffbaa13f6bab438676cf6beb8f', style: { background: 'white' } }, h("ir-custom-button", { key: '0975ee0af7d90b371b55cbb0b79bf9d6a90e995a', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '8a90492ce3bc0704516636ef360d5bf89f68a489', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'e8b5005f99316deb8cb5d3bf6e0623039af41a6e', style: { background: 'white' } }, h("table", { key: '4d007dfe27e217d4c72fb081191387874788ee55', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '0de1eb22595bd316e5a4b968bb3339eee4f88d58' }, "This", h("code", { key: 'c455b0321bdecaba361881e220611bd3294114da' }, "<caption>"), "describes the table"), h("thead", { key: '9c4f18c13a1b524bc15ecb435b9f6b1c9d93498f' }, h("tr", { key: 'd3adc99993ba0a956fcc2c77d6defdff27178b0b' }, h("th", { key: '7cccfefb14ca274202aa691e2e8ecba5f8bccd55' }, "First column"), h("th", { key: 'ddbe82a43c3302f0b7097261a3a1928c0136fa9a' }, "Second column"), h("th", { key: '583b08cf56e43ae856ac7aed223c83c2f5d4dc96' }, "Third column"), h("th", { key: '47618657612e5d7e72dbccb78112b514711ad37a' }, "Final column"))), h("tbody", { key: '82daada1a0e3c9060d321207e11ad5cbe3f332a9' }, h("tr", { key: 'da51e04408e01a1cd4dca700e4b06fa046ec1449' }, h("td", { key: '260a094673fa6e7cb77da208f9e59f7b746f1921' }, "Data"), h("td", { key: 'dc3bab77a043c1eabb93a224c763badd72b4f740' }, "Data"), h("td", { key: '37c67f6c08851272f6dd09c139a62ec4be9c36ed' }, "Data"), h("td", { key: '1681ecb773369989147caa44818f011602d7138e' }, "Data")), h("tr", { key: '06791bcca1ab320f93c26ba5fcd3f5dc5a9ad8a4' }, h("td", { key: '090ce785114d94aeaa000bb847b7c61705e63d0f' }, "Data"), h("td", { key: 'a298e6a53519ad9530cea1439a8d6a6b64bc7358' }, "Data"), h("td", { key: '07a0d18aafa5108abbf385ea75aa4036d3b7df53' }, "Data"), h("td", { key: '5d10a160a7f8952682b22c37d1bf6a025af26ad6' }, "Data")), h("tr", { key: '1493c3859500f1f44c164bec70796451542a1e39' }, h("td", { key: '7733b6d2d76595689ed7f50b1fa391b9a0880ba3' }, "Data"), h("td", { key: '70e2b69e4036fe2f70c246123b81c00f1989e944' }, "Data"), h("td", { key: '7eb8380f187207f0c4e013725adb19d1866f7732' }, "Data"), h("td", { key: '68da44c3800509d444610f3451cabe36fb6912d2' }, "Data")), h("tr", { key: 'c3acf9199ca3f83ff7479c2bc59a55bc92987cc6' }, h("td", { key: '4d2cabbaa31640d11eb7aefc68eee32e0b3ffb58' }, "Data"), h("td", { key: '02c147c9b7007c72f8cd34dcd9a93052cae3c195' }, "Data"), h("td", { key: '8999d3e31e6047708917abfa09a004193273dcfe' }, "Data"), h("td", { key: '5c028f107a9e1ce8709a3ec8478deaf26436bb94' }, "Data")))))));
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
