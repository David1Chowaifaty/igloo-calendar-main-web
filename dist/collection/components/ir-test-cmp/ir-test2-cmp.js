import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '948aa748f60aa0cee32347ad94e0c95e25e5a962', style: { background: 'white' } }, h("ir-custom-button", { key: 'd791d812be30add326c50c0c6b5ff547ef3a8b2a', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '42cade594d6abbdefb1fb439e619d9f4b545fde4', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '956b175d2ffcad724664f42f6534eb6b9307c002', style: { background: 'white' } }, h("table", { key: 'f24be5a9f956bcaa16225a5875a91d33f571d5ca', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '6f36d9dc0b08488d4140f32f0da0b08f459f5f27' }, "This", h("code", { key: '25b88b2455c64064dff3caedefc0b1ac4f4ae754' }, "<caption>"), "describes the table"), h("thead", { key: 'aaf421d483e4182dd6bd9e31bf9e9e00e5b4a0ae' }, h("tr", { key: 'c6e3e6b2cfb3f288299038de465fdf4321464294' }, h("th", { key: 'bbb2e1de3c4fa46cff913b3ce13c049e5deac0aa' }, "First column"), h("th", { key: 'aad5b2786a7ca7e30ce909200b83d0b66d10be2b' }, "Second column"), h("th", { key: '9a1af3bac3835f278bbf8aa243c1ad9a2185d38c' }, "Third column"), h("th", { key: 'cbbce21b3640e385d4feb8f381d68a9e8d640868' }, "Final column"))), h("tbody", { key: '9171bbaf7f027c05a9ab93f30144eadbb3d80045' }, h("tr", { key: 'fba574bdcf477b354c905b4537cf08a83bd1adee' }, h("td", { key: 'd1e43e800792fb54c99e3bcf207aed033d9c4a2b' }, "Data"), h("td", { key: '942b2e05f5f44bba02b536cdbe8c0668021ef9f3' }, "Data"), h("td", { key: '65123a94ec4eb7169d96cac3557c91ef657c40cc' }, "Data"), h("td", { key: '09772617c3606be88d0208f91f2f713a26d8f046' }, "Data")), h("tr", { key: '87488fff0a4519300df56df14001c316477c9777' }, h("td", { key: '01ef5fbe6382935afdc88a01ff6e9c16e2e0d18f' }, "Data"), h("td", { key: 'f1b40478a993eec6c67ddc50cd789bfed3eecac4' }, "Data"), h("td", { key: 'b0a2cb7e8dc6c8aa28e7fde60dcda022982984d0' }, "Data"), h("td", { key: 'b2af01ca76977e5b7c48be98604738d8b5ad9de6' }, "Data")), h("tr", { key: '0fb2f8e111d71526548d94477d9ef63a14472152' }, h("td", { key: 'c196b66a57531af6f4c2d4a190378e747684f8f0' }, "Data"), h("td", { key: 'a7a6c62b0c8719942159c64b1d66d9117824af2c' }, "Data"), h("td", { key: '038946e831e0a98382562f645b06f7958863ae94' }, "Data"), h("td", { key: '61b33450fe1b54a4ca11f499e19de940e6d27c8e' }, "Data")), h("tr", { key: '95691951c2a107918ea75eefceb6322b6635f228' }, h("td", { key: '7fe83a043ed6c4f19052d5e86b5eb5721a71dbd1' }, "Data"), h("td", { key: '66e43ed5ad9e544cb6807297fcbb4dcc3b4b4bd3' }, "Data"), h("td", { key: '10f14ffae53990c535b70670248123bcec9be86a' }, "Data"), h("td", { key: '9aef4e2921af4e39e5e684fe7e1400b2ea158272' }, "Data")))))));
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
