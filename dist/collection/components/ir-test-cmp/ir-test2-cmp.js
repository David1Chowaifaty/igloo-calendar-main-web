import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '299d31c368be0beeabb2d282ff013643d4577ba7', style: { background: 'white' } }, h("ir-custom-button", { key: 'aec8c126f429e8ca241d0229256bbd92e00c2f5a', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '4fe46856fce6765beea1df5b450a1b5896f6ca38', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'e7f08102e6dca8b12f40491f39e597088cb87a6e', style: { background: 'white' } }, h("table", { key: '0f6bd5198730bad74e1950fc134446696b69ddd2', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '78334e3efc612da153523905288cbdd5abb178a2' }, "This", h("code", { key: '81d333b12a6f376a79bb0b902f0efd3df82dcf08' }, "<caption>"), "describes the table"), h("thead", { key: 'fc8a78c650863137d3f0549b2e0331d90c2afb8f' }, h("tr", { key: '1b244b2980752fcfe71e1097764e3d5706f67e76' }, h("th", { key: 'b6ff0000cab5db0b0654d4ed9f00925c2baa97b9' }, "First column"), h("th", { key: 'f9cff400072be51d4686a2435cd52aec84d7ede6' }, "Second column"), h("th", { key: 'e50e66038eede2716b07da340902b0fd9764d589' }, "Third column"), h("th", { key: '4272fff2ef725043c4ea3dd0c573eb240eb9acd3' }, "Final column"))), h("tbody", { key: 'c04311163dec609407215f8b962f316a123ea896' }, h("tr", { key: '575d5bcb6fe2549b1a2f8a6c6c0966ba9538eee0' }, h("td", { key: '870e09874a1957b343a0bd3c5f1f106abe08da99' }, "Data"), h("td", { key: 'a9a71470f091a49d511c4802cbe2ec22a5ccc02e' }, "Data"), h("td", { key: '2acb973e03ac2a92f4efbe3758d6387ba2c991c3' }, "Data"), h("td", { key: 'ab84048d746fb6d171414e2d928ff1df9114dca8' }, "Data")), h("tr", { key: 'b70ac553934ff4c9295e87363fa4bd92bc9c0a05' }, h("td", { key: '8b3542b6c6df318b65d5e73263ae5091968ad325' }, "Data"), h("td", { key: 'b245147cbedc54a7d92ee99277fd4e55cf41049a' }, "Data"), h("td", { key: '058c2522368cfa2e7fb82ac58963fb00762400f0' }, "Data"), h("td", { key: '59a93fc9a349278ca73f185699cf65f442a73a76' }, "Data")), h("tr", { key: '3d74dcdb1d6e5b443aa3872709a84f171b02256d' }, h("td", { key: '74b108d01acb5bf68216b84d38d08862eeb3b55a' }, "Data"), h("td", { key: '8165646def49188da7edf46ccfd5840b7991fc21' }, "Data"), h("td", { key: '2490f6091d1769ff969d2bb3271b847933c194a8' }, "Data"), h("td", { key: 'cf44db92c96f8c0c79b2e9555434fe84163ea5c1' }, "Data")), h("tr", { key: '3141d6ac62755c9a04177e87605708b5eebc1d7c' }, h("td", { key: 'acad4942dbe0925d1fe7dfc016543c2639f9fb8e' }, "Data"), h("td", { key: '58defae1b4eff9b9ed3f6fd1518f457647bafbd2' }, "Data"), h("td", { key: '5e1173d4787c97c00bacf68ea651a6e7e905d189' }, "Data"), h("td", { key: 'a2b924ed196aec784d9e4901cc735692cc077261' }, "Data")))))));
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
