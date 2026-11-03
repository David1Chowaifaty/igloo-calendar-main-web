import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '60030dd2f3c1a021534b3b00612ba2ab826bac2b', style: { background: 'white' } }, h("ir-custom-button", { key: 'f94cb40c905ed97033cf394121e0c8c75adef4a3', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '475bbd515f789280c45183bde3f97bdf3a41bded', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '7f862a2af38db48da5136de773d739b780362610', style: { background: 'white' } }, h("table", { key: '1ab393a3e059fc615a957fb963b243bc1dbb5100', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '223b51e32d948377930ed21536e2042f9f53dd2d' }, "This", h("code", { key: 'e6142016138c37e83240d6690bde18d3cf3d9ce7' }, "<caption>"), "describes the table"), h("thead", { key: 'f183b87b460e24e458b0e874b97a07d663ea1b29' }, h("tr", { key: '5aeff5ae585358fb64992619277c07e6a3b3409c' }, h("th", { key: '457bca3d4d8c324f65375e6385943d8c197ad2af' }, "First column"), h("th", { key: 'dfae767fad9d71c8dfd6ff0d83d4f0bb688fa630' }, "Second column"), h("th", { key: '6c85ff80143d9a77b07713c7577c7168b3beb57b' }, "Third column"), h("th", { key: '372fc355ab86d82615f37c611b626fb53f35f44c' }, "Final column"))), h("tbody", { key: 'e000ebb4b0a037a9e94c41fa7570eb919409a7be' }, h("tr", { key: '1986992292e4fad5fc1a82da87f36603224e51ab' }, h("td", { key: 'c559406d17f6eea4bcbb0c89277a57e10ab9c5e6' }, "Data"), h("td", { key: 'e4191b8a81b0e03794639d3a32c29ba61541bba4' }, "Data"), h("td", { key: '4f968c263a5d08fe4c955ce489e8049a804d8441' }, "Data"), h("td", { key: 'd08352e694ea82ad54b1f743c22be4a1916b682f' }, "Data")), h("tr", { key: '0b7675413fcd3b0b46907c241799c3a0b0182415' }, h("td", { key: '01c5521d9b44fa2c0271211fab107a7c622f72a1' }, "Data"), h("td", { key: '340610ff1ce218dbac83c9029de2e7542d540e84' }, "Data"), h("td", { key: '152d8a29491abb66c8e613419e78840c971ca6b9' }, "Data"), h("td", { key: '5c90f7ded38521a24f0a12a22f378874b20b4677' }, "Data")), h("tr", { key: '859268edae6612627b070072a8dc7d6b2c36df1e' }, h("td", { key: 'd037cc595918a240ab3996fda68d127a40e96392' }, "Data"), h("td", { key: '062074a82b0fccf8815c18a8b1715c8bdf1f04c1' }, "Data"), h("td", { key: 'cd979a1849587c894ea9f2c196baf5769f5a0cbb' }, "Data"), h("td", { key: 'd4618e246ede04a2a27fb9814a042aac2cf29439' }, "Data")), h("tr", { key: '072d52453a6006e44201b5c8ad5cd3d597362029' }, h("td", { key: 'e8c2c6268be641be8788c66c8497e45d647404cb' }, "Data"), h("td", { key: '330d83201b406cd69f6f6e6d97854cd875c32e22' }, "Data"), h("td", { key: '4def61e4faba896a4b90930d0112adbfa31ed521' }, "Data"), h("td", { key: 'f139e3b6018e6072c2a2b737b535494698169668' }, "Data")))))));
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
