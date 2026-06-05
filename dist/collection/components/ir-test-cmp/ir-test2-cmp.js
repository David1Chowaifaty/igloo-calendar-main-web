import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '7f7217b2a6d3091cfb7858c3633664cada6d8a08', style: { background: 'white' } }, h("ir-custom-button", { key: '719b3297afefff908e2899a5dc90c2386c31f049', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '90c27c0eb8f0c5c6b669ee684bc30308e36dc6d5', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '8a228371e17330f9c65ac3d1ed645f076b1cad60', style: { background: 'white' } }, h("table", { key: '8f57881378cf63109e836b10d179da5af288625d', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'a9c9e6ee7dc2bbad919a585b4612164199e0098f' }, "This", h("code", { key: 'd3ad99cc546afb3dc835a915997f6212d1c8e2fd' }, "<caption>"), "describes the table"), h("thead", { key: 'e3e3004e919bcadcd15efd2f926548eed49b7299' }, h("tr", { key: '1bf7183245513c8f68f9aea5e1c4fc5db7634ef4' }, h("th", { key: 'f82c72ece6acc4d801731ef8f0a8a63b788ce490' }, "First column"), h("th", { key: '912e553ff882e48b77fa0ec0c9f9fd799547d684' }, "Second column"), h("th", { key: 'e192abba3340cf3905ca0071432a35d0dce0d8bb' }, "Third column"), h("th", { key: '2f541f82fadb293b22421d1d2e235cbac327bd94' }, "Final column"))), h("tbody", { key: '6418ee7beb07fe95a5aab481e4c394bdc40f2d34' }, h("tr", { key: '167273da7c1b54b4e18b1a4a73e3e7b75c236d13' }, h("td", { key: 'daa18c05a6b581b32ea46a3b63df8c6012098028' }, "Data"), h("td", { key: '5f41f8fe92d70218f2a0a2dc014e9bce3fe683af' }, "Data"), h("td", { key: '54caac883d139d61c1cc76854328c5ca8ee1316f' }, "Data"), h("td", { key: 'fa97f3cdd14c3f30d7c9486e43df2e732f9e44cd' }, "Data")), h("tr", { key: '14739c964f58f6ccc82780fcfe4e2bc4955e980b' }, h("td", { key: 'c800f0edaf624b369afa1b8990ac88845418c9e7' }, "Data"), h("td", { key: '964fb87585f8b06e932fd54a6bc68d351c168bfd' }, "Data"), h("td", { key: 'a81a363daec6eb653facce714baeb3d0caf4651b' }, "Data"), h("td", { key: '555a2add1220ce23614502d43c88280c5b9faa2c' }, "Data")), h("tr", { key: '3466a62b217aef855e880a5687fe2a803397d6e8' }, h("td", { key: '8ff7675c4ea0463abc4ee68187cf0cce0dfaa14b' }, "Data"), h("td", { key: '60b138a80bf5748d3f910a3b879fe1a47a2bae7f' }, "Data"), h("td", { key: 'fa015ac1883c4272b361d5cec2101968569784ff' }, "Data"), h("td", { key: '0c47cde46ebc0556f051a02edb7869bd610c5111' }, "Data")), h("tr", { key: '33ac5779dcabffcd4119224d484804b9c38b6a86' }, h("td", { key: 'e0e8af280c9da37b2e653df33fdc7979c0ac9c92' }, "Data"), h("td", { key: '7f07c7237ae12118d0256d4ed70d5862a85079c3' }, "Data"), h("td", { key: 'f5194f1fe60212b9d1df677026f044b5c10a936d' }, "Data"), h("td", { key: '3c8118bcd746a201284a1d067c8799819a6ec3b6' }, "Data")))))));
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
