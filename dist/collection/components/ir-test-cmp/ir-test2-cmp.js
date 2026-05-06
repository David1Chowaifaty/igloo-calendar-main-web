import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '8d10f94dc1cde9077a44a1f6cfeb8e3ff14e8225', style: { background: 'white' } }, h("ir-custom-button", { key: '698ba4d4cd72d2880c02cadf44f4d253fa67838c', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '049dae6f974411713b88d82c390f22bd8e95c763', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '36a9bbbdf485dcffa27317bc6030e5875f50fa38', style: { background: 'white' } }, h("table", { key: '66a2ca66a23c45bf9000cf29687c687a8ed62bd5', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '745fd007ea88241753b49f98bb57d21e36935922' }, "This", h("code", { key: '5fdf598b51ce3727f8a7811a5d8de210311f4093' }, "<caption>"), "describes the table"), h("thead", { key: '19979db28941e1a0dc258482c5710b91a71c0990' }, h("tr", { key: '16a7308e651cebc99fe6740ae66f39a7c20e21b2' }, h("th", { key: '5a29cdc50d0203cc41e259dbb03561cd6250efdc' }, "First column"), h("th", { key: '8e72a7998932350fefafbaf7616bd783380c09a7' }, "Second column"), h("th", { key: 'b2a4a17cae755df17a56abe8a6f9231351d9b5f9' }, "Third column"), h("th", { key: '9cf1106bf95719127841ff345f130a2dc824e3b1' }, "Final column"))), h("tbody", { key: '98339d966f74153b529b0bead2e1a5c751cb0457' }, h("tr", { key: '542237656eff610bb0412ed113a4355f0a4aed57' }, h("td", { key: '762917c89e0208bbe866b4921bd22cdd793f43d1' }, "Data"), h("td", { key: '495cd61dd9ddfde3c4a98807a12226296d23ea6f' }, "Data"), h("td", { key: 'f20735e3c809c00b8f6666b9599e278a86dc7c30' }, "Data"), h("td", { key: 'fb0234e928b2b246b49fe7f462f31993334665b8' }, "Data")), h("tr", { key: '7d93fe8db994adf11e44521fccbb2ef7413995b5' }, h("td", { key: '902f7f3703f317ece59b2318f61560a21146b5e6' }, "Data"), h("td", { key: 'e914a0cf03e60092fa4cd03b396951b5c527af43' }, "Data"), h("td", { key: '68bb881bf5000045c26d01423012c4a87e0c263c' }, "Data"), h("td", { key: 'e00246e37e4c518e017661d5a3264f6ef5b4ffa0' }, "Data")), h("tr", { key: '2647ac7dbf547b5aee3658931100facb18d853b1' }, h("td", { key: 'ef311e63c4bff1fa304f6d92dd5c8cbb86c05b6a' }, "Data"), h("td", { key: 'f6f4c29fa01dba62d827e297a5624844576687dc' }, "Data"), h("td", { key: 'a29c49d87b914663b991f78cdbbf0f705f502b50' }, "Data"), h("td", { key: 'f0f8bda9feb1456177e9b422cb1970138fa16739' }, "Data")), h("tr", { key: '313cef8253e8b2e77153c9a22aeccd88748d6057' }, h("td", { key: '2e11e28244d532c848f9757ce48fc150a512ef7b' }, "Data"), h("td", { key: 'fc2a1979e58877b6aec622c3cae0c7787d010bac' }, "Data"), h("td", { key: '9e4be43fc17edf72cbba1bb05f9ce3962e29061f' }, "Data"), h("td", { key: '304b1df14e7c5e6c04b0521a99bb671bdccaaa51' }, "Data")))))));
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
