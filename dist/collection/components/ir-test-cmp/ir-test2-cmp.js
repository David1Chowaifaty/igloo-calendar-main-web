import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '1926362a8c406057c218a0f844d284dd9cdbe2a5', style: { background: 'white' } }, h("ir-custom-button", { key: 'b4dae8c162f56f115bf7cd107c5b52d3ec5aded0', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'd7ad72558f76e5a814d4c4d2a41afe8d180a9c21', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '61564c1ce4daa55300a39faab95b3f0e8d0bc94d', style: { background: 'white' } }, h("table", { key: 'a2744d296383608a0b0e40e1128bb83ab8bfd862', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '0bb3b5f2b5643c008ea46d5b5eb494bbcbd277ce' }, "This", h("code", { key: '540dbfa96c4fb03ad6a22570bb653da9d4f4101c' }, "<caption>"), "describes the table"), h("thead", { key: '253eedcf1d94a0c8a8875db83863b2b27bd29940' }, h("tr", { key: '4398f01f7c1fbb1481acd30f24cf12b0d79daeb8' }, h("th", { key: 'a7b444d1c4d9f031dbf74d37b4458e5d4166a306' }, "First column"), h("th", { key: '4fbb524ac1675f749339b1f7532a51ac592994c7' }, "Second column"), h("th", { key: '30ac2c78362bac51dd76b83a1bde4ff29129d765' }, "Third column"), h("th", { key: 'a5d1b857d6cba072d2e14bdf24a942a4f87ca6b3' }, "Final column"))), h("tbody", { key: '9be00d09f226f5889972d2e8c07df68a518a0f3f' }, h("tr", { key: 'c54d6960d82b369341d2ca81e974f48e4c3981bf' }, h("td", { key: 'cd841cf77d3215ab7eb071d7c89a6750188bddb4' }, "Data"), h("td", { key: 'a0bd844e835b280b292aa8fdfd19e9274cbd23b8' }, "Data"), h("td", { key: '2e511cfeb440d8b5a90f88e07c3f8874a4ebb912' }, "Data"), h("td", { key: 'a6e2c251d033349a073b42148e7a91fd60edbf5a' }, "Data")), h("tr", { key: 'f92ca82370ef901e9b0d92d57215a9a7faffd9e7' }, h("td", { key: 'ac5a3969c1674ad03b536c777dedacd2b46cd39d' }, "Data"), h("td", { key: '7e068fbbfcda9cbbcc0bb97534393bff7d8682b6' }, "Data"), h("td", { key: 'b1e5514ff4c2ef116f79b90226a4e5936b202894' }, "Data"), h("td", { key: 'e52bded5e488eb0a6f7c3f80790c6ef8835bd1ad' }, "Data")), h("tr", { key: 'a7f408f586e431b74ee157bfd046d518899bee94' }, h("td", { key: '45045453ab372d228fbb882a6a675f15c24b5ba0' }, "Data"), h("td", { key: '8f5965a633342bf38a6bb8b7087a59e960079d07' }, "Data"), h("td", { key: '1760af84bc2c07d32c20af4118c369f8390cf696' }, "Data"), h("td", { key: 'af42e5d3241f903eae4c9458f4fe9cee901c3aab' }, "Data")), h("tr", { key: 'c73b22ba109207a5e82c16f3bf83a911aed68763' }, h("td", { key: '7bc0946035ec100f0aa0db35f11a53b2dc38cefc' }, "Data"), h("td", { key: 'aeca891bfbfdbda1a30c44df226d16a278dd1cf7' }, "Data"), h("td", { key: '94a999a13a792d55f8ed02ceb8dbb954d7f7e6e9' }, "Data"), h("td", { key: '09cbd815dc090239ff1149da6256bdaeac5cfa89' }, "Data")))))));
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
