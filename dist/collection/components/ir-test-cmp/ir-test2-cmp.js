import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'bda744f719cc2ec772e6b9a6c54254707b6a8ac5', style: { background: 'white' } }, h("ir-custom-button", { key: '20407c4c5f975240a6d86244d60c19776862bb87', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'd2cf75e307773f6f67812f5fd7327e4e92409be0', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'bd4d1722d2689e5f4e983b60b2bfdd991d88183d', style: { background: 'white' } }, h("table", { key: '7745d6cd33471f911fdde0df76cabf77bd1693a7', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'bd5f2ac884413f67014bc7b6a5f2e5408721be71' }, "This", h("code", { key: 'bf2bb7e61f2b8bbe799ed7b785eb172bcf3a0da6' }, "<caption>"), "describes the table"), h("thead", { key: '20f62ca3474f613cee2522ca54597cd3e503fcde' }, h("tr", { key: '34d9c99de1904838701d9ced367915ba408b5ba6' }, h("th", { key: '46bd701c6705099ba5f66abe4a158545f65af519' }, "First column"), h("th", { key: '2bb35484c759136c395a4d9f26a197d9e9b3991b' }, "Second column"), h("th", { key: '737c9b34a574bc1fd1592847015ea2b0f73ef3f7' }, "Third column"), h("th", { key: '332d68da97ab956a75cc1e1549ef069ebacae247' }, "Final column"))), h("tbody", { key: '282e68864ec48d9da18c6cb80059722ea1cead7d' }, h("tr", { key: '67927f01ae52913a86185ce4a38310d6c17d8529' }, h("td", { key: '47cf9624b9ae6d1fdc0fe17e8ecbeadaff213bec' }, "Data"), h("td", { key: 'e5d8a5adcc2f6b04c45166dacf615c3a5744169a' }, "Data"), h("td", { key: '21c27936ff8f20aee339e220718f1d7210d4a571' }, "Data"), h("td", { key: '1d3f493a3cc57598a05522c7e322b066430fc2c0' }, "Data")), h("tr", { key: '8ce158dd0e079e79b956d05fc253b99a6f78a736' }, h("td", { key: '72a7d48e944b16a7b1347c99a20041498ca531e2' }, "Data"), h("td", { key: '709300dc25e74b62e7cd46b909d96d40ddec8331' }, "Data"), h("td", { key: '42ea9663c7e7057db39e62da43991f3f1b7e97ed' }, "Data"), h("td", { key: 'bf8236df49caed281842b28a833bda34c66acf99' }, "Data")), h("tr", { key: '3f8aba6519a9ef0664e660dc83f6886d0a390d12' }, h("td", { key: 'b8eef9824731880826eeef3126f70617e7147e4c' }, "Data"), h("td", { key: 'a8bb37eb025e520c1d297471e4951d584f0ba855' }, "Data"), h("td", { key: '42e23710d5e9ce7dfc2e4da07908e19e9b8b7ab1' }, "Data"), h("td", { key: 'a49d165f4370a76bf4924db28a964f87af05d188' }, "Data")), h("tr", { key: '59beefbb557ab3b72dc56181218829fb0f5c5628' }, h("td", { key: 'ace49bc6bdad045a7bf953878d09ec8cfdc1e7db' }, "Data"), h("td", { key: 'fdcf22252526527545cbf555935ae16b6d1e22cb' }, "Data"), h("td", { key: 'c60f6f0482581c9bfb6e9d8c1f2714a9762063e2' }, "Data"), h("td", { key: 'd38aff379a80d4eb0d5a7f138182405e178a2dbc' }, "Data")))))));
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
