import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '3a57fab7e1dbb2d536c9d2cee4c824acea9a6418', style: { background: 'white' } }, h("ir-custom-button", { key: '14bf7062c3f7cea28da167d35173f76c2bd14417', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'a1066424925b314c0c3139c207a159edda9dbe77', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'c4b3d3e135ced2380bb5564ec8393ec88d94012a', style: { background: 'white' } }, h("table", { key: '066bace5a0954f0f341af11775e98c77e5246a94', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'e70b53550fe9957d704137531a0890e610f9f958' }, "This", h("code", { key: '0f8d4c3ced305a0d967beeb3230058356fb72437' }, "<caption>"), "describes the table"), h("thead", { key: 'c422d3b077c8aa5feb33607245b01c919e50020b' }, h("tr", { key: '98438d867f459047aa3e6d76cf09dd89e20f74f6' }, h("th", { key: 'e836a6d06234fd6aaaa9609021e97d46f2c29f2f' }, "First column"), h("th", { key: 'c56c9f6b23717cbc4b4b0cd49659ed419b9eb256' }, "Second column"), h("th", { key: '91e21ae7899b4afd8b0bf50dd5c04068848e0b91' }, "Third column"), h("th", { key: '622bf6286aebae36bf19dfa762df47bd60eba213' }, "Final column"))), h("tbody", { key: 'ca9844ece4ee94550c3cf9f4849f10821ca80855' }, h("tr", { key: '2903e864f1da9482d7c54e880ef1cc866a5c599a' }, h("td", { key: 'f718e99c95385cd141d2d03083dd5b0964f64ec8' }, "Data"), h("td", { key: '8b7d1dcc4e63c6b90794e6571492c4644053b97f' }, "Data"), h("td", { key: '6fadf1521ed0e30a75993a10727b4158b125f186' }, "Data"), h("td", { key: '0b546955c78b425c243770e336b481d8328a6ca0' }, "Data")), h("tr", { key: '3d954e2cd319aad55f7f0a3e51500af8c6992b7e' }, h("td", { key: '123e92865b9eb500261f7fd2cfa8a207d0c13d01' }, "Data"), h("td", { key: 'ebef6e34737c2a4fe7b3431e4b92e9f2475f3fe8' }, "Data"), h("td", { key: '4f5a0d0550abc918b6473db4ee3be86a6be18613' }, "Data"), h("td", { key: 'f6845207f12509554ea94275f98134f8c884a8c1' }, "Data")), h("tr", { key: '5e43f5ed95add14a2979ea9779d5757cb605c812' }, h("td", { key: '59d789028b400659d51ac6d556ef98302ce1f994' }, "Data"), h("td", { key: '905676564da7f5c5994f67ff0e41d2d7f0e106cd' }, "Data"), h("td", { key: 'b4aaa15a1d73a82afb7b9468272b4091fdd1dd8c' }, "Data"), h("td", { key: '2a62daa07fecd4667d1461d3967904017188e945' }, "Data")), h("tr", { key: '02694cdddd309c5d158b96f2e8543cc355a009a8' }, h("td", { key: '5f2d98f105299d028e873ead108ba4022c2a20eb' }, "Data"), h("td", { key: '37fbcbd6cf925c13ed1894269b54b3e61a7499e7' }, "Data"), h("td", { key: 'dea8bf81c75dd69a2c07fd6e46f4c4de26ac6906' }, "Data"), h("td", { key: 'cf749574079df1209724ea3e68beb581e3cba864' }, "Data")))))));
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
