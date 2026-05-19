import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'e101748a6215030af089f53b3e32cd572e00d177', style: { background: 'white' } }, h("ir-custom-button", { key: '237d76bcb7bff8ee97f4d63e361f0d2353e0c38b', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '561188fd93f8feb8406615c0ae652b50e8d10a6f', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '547b234114cfeeab9a9467bb15e66b92fb9155e5', style: { background: 'white' } }, h("table", { key: 'dbf2365bf291c77d6be1533c4339d19f11daf051', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '9238ab771863ae70661f1f7cb5fbd37262d181a9' }, "This", h("code", { key: '53daf3b6adc834d3ef5ab1e75bf7b834ba77b9eb' }, "<caption>"), "describes the table"), h("thead", { key: '415b4ff30de72f0725368c0af74defdfbf6cf51b' }, h("tr", { key: '1a78db256ca6a0fc38beb01f4050052362f8611f' }, h("th", { key: 'd66041502af5e43fef8b6a9f4a7218ce880fcf4e' }, "First column"), h("th", { key: '01a04c41fcbb248089cf31c00994773455006a53' }, "Second column"), h("th", { key: 'bd249e55a5917c58510e9707418ec5052fa79a09' }, "Third column"), h("th", { key: 'd0ee5d50e0ecdb599a8c50b7ef164093ce52b71e' }, "Final column"))), h("tbody", { key: 'c7aa6b409e4a8fdcae7af402ce74c5e7f7b7f48b' }, h("tr", { key: 'c32184f4699294e5bd9140019fde796c0ec7e870' }, h("td", { key: '726dfc03739558f045c0e699ebb3fceb5c0dba52' }, "Data"), h("td", { key: '3e096a7ae8ec682e9aba2d387b6ac7b18da8f8c3' }, "Data"), h("td", { key: '8266e9d35377db0131a4d5d299dddb88d1303d16' }, "Data"), h("td", { key: 'db9acdd95d85655376f93a07513fb787f96799b7' }, "Data")), h("tr", { key: 'd0a01d5e34b8f785202212817f6595e5ea1dcbc5' }, h("td", { key: '7e544ccbfe4603742c6930b42dc26a4a398ad6bc' }, "Data"), h("td", { key: '29fb5ebc48b28551f534b756f3db2a199ab175b5' }, "Data"), h("td", { key: 'd3cd22e256b8d53e90bff5116a428c2437ac2f02' }, "Data"), h("td", { key: 'b0b34e8382234ad515aeabff00cb85d0d971def5' }, "Data")), h("tr", { key: '767e4b50d505bc420a7e9b8e82256c386b162636' }, h("td", { key: 'f2dc31a5845f0063dfee953f4085dcc158098d6a' }, "Data"), h("td", { key: '8401507bdc35510d86df7895d754a63d46c66e9c' }, "Data"), h("td", { key: 'bf378805636f4d9080601734d2df47516ac13610' }, "Data"), h("td", { key: 'e03c258fa063c57890e33812ed7e940a80c8efd0' }, "Data")), h("tr", { key: '0b71121be9ef799addff3b4ab04cde450794ed87' }, h("td", { key: 'a73a8a5a3c4f0dfdb71aaefc9c775034c78868d7' }, "Data"), h("td", { key: 'd2cf808ef28fbecd77b977e46e2d4e556b6a8f59' }, "Data"), h("td", { key: '455e3fd5f894de510dd0e7ea0552ebbcb9cac738' }, "Data"), h("td", { key: '11a43dd4deff804ecb4a4c806df2ae09df4b319e' }, "Data")))))));
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
