import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '928358166ea4b41be84ed47dca13d5798a5ac164', style: { background: 'white' } }, h("ir-custom-button", { key: 'fa82a2c19bb6ebd511561dfe8dab4cf04f5330c2', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '0790dfe0b55bc2f9a70e48aec4fd0af6389e921a', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '381cac13798cc9b560ac9e94d8e7c3c70bf8a931', style: { background: 'white' } }, h("table", { key: '447df8cc46778a248f712e0a2de5d04a66c9fab0', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '17c45de1c5c23686d46c6b7550b0f57d9fad23c5' }, "This", h("code", { key: '4c2bb4a5766e7bdc0047b7b2f1e069f98ca6d242' }, "<caption>"), "describes the table"), h("thead", { key: '79447a3d55aaeedbb229eaea9c1427ee952b3122' }, h("tr", { key: '59df099f4036576d138e7d81050293ca8baf3a18' }, h("th", { key: '977a9c89803cb0b4c49235df26a4a72745fb8af7' }, "First column"), h("th", { key: '67fc71b3c29e057889b64bf6c9e68cc480ddfe07' }, "Second column"), h("th", { key: '005637f34e59e47054b3345834730d88bb2e0219' }, "Third column"), h("th", { key: 'fe329166cd48f068798c160ebd8c9ea8b46fc17c' }, "Final column"))), h("tbody", { key: '5dce46ef0f905793d9cc1256e9f3d20ab60355a4' }, h("tr", { key: 'd6a1af41e1378c3045f0df9c3d17bd9aae617438' }, h("td", { key: '5d7a62b09b9f484930e9d0b918de738bd7296009' }, "Data"), h("td", { key: 'd6e06c498a0e288ce650d098f8050fceae24a9a1' }, "Data"), h("td", { key: '89f0352a87c847432655e1acbb4ec0790505bde9' }, "Data"), h("td", { key: 'd27f673a757f3b1fe0b493f2f6221bb072661661' }, "Data")), h("tr", { key: '86c2ddfd1d54fe3c445ed9fef336803bcb86c97d' }, h("td", { key: '3d058965843fcbb11b57e37d6b486e4f78c84eb5' }, "Data"), h("td", { key: '356ffe558df56ae2846f98389f1f85384d81a29e' }, "Data"), h("td", { key: '6abc804e68387232eddf9248f8558fc52af2b078' }, "Data"), h("td", { key: 'b9ce786de2190558c4588f0a9fa4ecb1538a71d1' }, "Data")), h("tr", { key: 'a15ff8dcfe8973ba909585bcefef86ed16b9a8b9' }, h("td", { key: '24791975a24a02010c0b0518929982d02ddea855' }, "Data"), h("td", { key: '817607b924adffe369d7a7af527a3f34f522d426' }, "Data"), h("td", { key: 'cc9d2fe4c6b540eb76245d027b16efbd364b80f8' }, "Data"), h("td", { key: 'dbbc4b0f693d1b393269c2531bd3a2e2a78cb80d' }, "Data")), h("tr", { key: '224090e64409de0c9cebeccbd085e95738098775' }, h("td", { key: '41ab7bb783fbd4ddcb15dac13e03c1d4a28e06bb' }, "Data"), h("td", { key: 'bd38d45f1a8c2744ee5e575c5aa22e5f8695f4ec' }, "Data"), h("td", { key: '23b87230a914b351c50ad95e0b3cc5ba9da803e2' }, "Data"), h("td", { key: '349a211e1737c331677d38bd4b9ecc613f52ee38' }, "Data")))))));
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
