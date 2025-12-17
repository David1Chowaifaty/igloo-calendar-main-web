import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'dd8244b8650d0d8e332a253b8566f9c01bddb4cc', style: { background: 'white' } }, h("ir-custom-button", { key: '5efdaf735fe1d46d6a99119fb8fcf628927c5162', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '5cf6f8f509d2c273637de56eb4e37566a32c6aa5', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'b580244cdbeebddc1d54e671d34f16726602dc7a', style: { background: 'white' } }, h("table", { key: '2bf36500ddd74b4cb3c6b06c152cb1884897f83b', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '632372feefa4f5993e821cff46bce6d9c42778f2' }, "This", h("code", { key: '1962222f0e6b0c98b2d98e419bde64e86d237f97' }, "<caption>"), "describes the table"), h("thead", { key: '368315767e8404f69ad67cbde75a141518fb81ea' }, h("tr", { key: '5f9dd1b15db3786c0260e2c7685053226910a5ac' }, h("th", { key: '16558a56ff4e2b6f65333fee8cb84da01c357b26' }, "First column"), h("th", { key: '6e2c66e438d8c7414bea21ca7ae9a64f890dcf5e' }, "Second column"), h("th", { key: '95faaf95a05ce0123f41be335777a109f19e490d' }, "Third column"), h("th", { key: 'aac1967d85c1fab3ef8eaf72050ce87bcbc770a0' }, "Final column"))), h("tbody", { key: '9b934a48800b563a72ecb25a0744be3382b037ac' }, h("tr", { key: '9ac7165ea7c24120e0189e28c11235146e282144' }, h("td", { key: '27eb3c588847efffcdb435898e102935d71c9d68' }, "Data"), h("td", { key: '29450adacd546ed85b8e03d71ba83ceef306369f' }, "Data"), h("td", { key: '3e54f6ea79f984b8cf625b2690a41f6bcaddfb1c' }, "Data"), h("td", { key: 'd84966b3988b806ce40113b9db05faebe5e950a6' }, "Data")), h("tr", { key: '871a6cc4ea85b088c7a683b0f3cb6dc9261c28b9' }, h("td", { key: '8fe5e812608f6cf92a76479985b177699de9ee38' }, "Data"), h("td", { key: '776fb70c7635c498a2c973fe3b190cc55233cd6f' }, "Data"), h("td", { key: '4f5b9689946c1d0379c508feebf80cc29eef4b39' }, "Data"), h("td", { key: '6fc04c2bae5a684842e1ac62f0bfec6d49b2b1e5' }, "Data")), h("tr", { key: '46acd2187b0b4a2741a0f37e52ac9defbebe3742' }, h("td", { key: 'bdff1602514a5b8b256fa1c2610ff576e33fdb51' }, "Data"), h("td", { key: 'a5acb63dff642c1fe1c16d3d85cf77782770d823' }, "Data"), h("td", { key: 'a5f1bbf443875b9c6238cc8da1f0e8462d6f0047' }, "Data"), h("td", { key: 'cc3771f08caddbd94efb9aac1722e16d6e34f718' }, "Data")), h("tr", { key: 'f6f2a7a1d0ba01900b32526d2823f261f6bb79bc' }, h("td", { key: '7ae4fb82966560e6d4d5a049d6a575bcc298b731' }, "Data"), h("td", { key: 'f73475ad6bfd469731ddfa90ac64f7e0770df63c' }, "Data"), h("td", { key: '8d235ac4266b8607ae076093dd846c1b4e8afc20' }, "Data"), h("td", { key: '96d1ccd5e4fe05e46d338f4774d4fa87fe83ffd1' }, "Data")))))));
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
