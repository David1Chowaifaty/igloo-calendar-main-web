import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'c3669dc6ef62ab0c61d59ebfe2f2e22330819c3b', style: { background: 'white' } }, h("ir-custom-button", { key: 'daf0aabe2a40989a7e00376f8639ed7482ccbafe', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'a21411bb4a7e3b633106511206a08b7809738d1d', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'f4996a06614c8556fea2dd65466b76bd43aae51e', style: { background: 'white' } }, h("table", { key: '456e86873cf8bd47d6f272daf177880dbd89f117', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'abd7fca996d070eee961500879987710778e64a6' }, "This", h("code", { key: '67b06039045ac9512bf86b29f9396dcabc947780' }, "<caption>"), "describes the table"), h("thead", { key: 'c3802fa18020e753e027edde826d1718f7290ea2' }, h("tr", { key: '816e04b76378db151c5e234aeac421dc08286c6e' }, h("th", { key: '4d796a4712c141266f423285543df18a174cbd18' }, "First column"), h("th", { key: 'efcbac80bd84cecefb5c7451eb4fb4f7c1412c19' }, "Second column"), h("th", { key: '13b3a33b4b4570ca74fe651e535bef73ab548266' }, "Third column"), h("th", { key: 'ecec287c27ec01cabe0949cc3306fce3e6c74347' }, "Final column"))), h("tbody", { key: '1b62be6f8346213be6988f4097af3f6cc0595ec6' }, h("tr", { key: '41a2415a92269733d1f1cc5ac2137f6f2e5e0ea5' }, h("td", { key: 'dbcdb96c613d87bae686dfcd7f8080b4f798d7b6' }, "Data"), h("td", { key: 'bf9f9fec5b02562b23c123bad426b3845a184c6c' }, "Data"), h("td", { key: '84592812db37bcbf8514f67c90492375d5562993' }, "Data"), h("td", { key: '8e7d13150d67df762f5725ccc6d7662e0dd970a5' }, "Data")), h("tr", { key: '8d5caf22c5ddaadeae38f0fdabb7903bedf733db' }, h("td", { key: '3a1b95d06f2c47aaff07d12dfedcd59c65592afb' }, "Data"), h("td", { key: 'da8800ca7ea9da693facc49d58a0e00cc03ce22b' }, "Data"), h("td", { key: '5b3632b13518540ee347f1f04df76a5d528ab1df' }, "Data"), h("td", { key: '68a3b7d0fe6c7c6d9cc1aa15f52d5b9635c8a319' }, "Data")), h("tr", { key: '85b28a58d7aecc86fbbb121c30ee0c689a361568' }, h("td", { key: '2e196914c1e1b6ebc589fe47fc99611c925f2250' }, "Data"), h("td", { key: 'c5fb341d1c7b88bd145f78e6c1483e9190d233d5' }, "Data"), h("td", { key: 'f4b35f3c4a24868080e84c79a58c7851b375e8b3' }, "Data"), h("td", { key: 'fe2168640c87986186669228ee2577e54bb859e1' }, "Data")), h("tr", { key: '0e8c0a1e5ab9fc253dffb3fba40f44f71dbdb359' }, h("td", { key: '15ecf66c693ed2747088cffc3fd08104e9ff4fcd' }, "Data"), h("td", { key: '6ec6aae0dbd5f91a34968348262f783a6030c486' }, "Data"), h("td", { key: '2f96ccaa78f21a48fe7a04a7a58fc4372858b409' }, "Data"), h("td", { key: 'ecc81522980456a13e2c97fdbf9667809ee13766' }, "Data")))))));
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
