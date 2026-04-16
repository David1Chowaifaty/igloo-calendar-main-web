import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '9ecd35d6cc610a5964f02b391a05c5788e03f648', style: { background: 'white' } }, h("ir-custom-button", { key: '194930ce6de48a045fa2d681e700ef82f0637fe8', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '3291dc75354da7343fa0207911acf7d56424bc30', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '74c7debdc97124429e7ae63f9ef3a2cdc1e9a105', style: { background: 'white' } }, h("table", { key: 'af51f305a67b3247570452b72f4a261c85f1617d', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'e50025ad65d851bdda9d299a6ffadeb42dbcdfee' }, "This", h("code", { key: 'eeb3121ec1b9d8402355372793c5e6a05280910f' }, "<caption>"), "describes the table"), h("thead", { key: '38f3faa5f0b435a3cd593a5ce6d2f922329145b8' }, h("tr", { key: '1cab450bca2d0d10f01681705dd0a81cef71dce8' }, h("th", { key: '2f5e914858b7db68e4b72311a26192081227af48' }, "First column"), h("th", { key: '2fff174365bc791caee7171e059bd9ed212c9dc1' }, "Second column"), h("th", { key: '1f2510e1f4f16d43bc5f74b19b8a8949a8af1cc0' }, "Third column"), h("th", { key: '4be3d9097ec517e86e16815d855bb21de6e4678c' }, "Final column"))), h("tbody", { key: '15dbee29ba665c431d4c67b3d0ba10814cffbced' }, h("tr", { key: '17692ca23981933ca9dd5163e4660753869dbfc3' }, h("td", { key: 'be254aab78ba06b074008ca15898152499549453' }, "Data"), h("td", { key: '4f755f19ecf8bff0a78de8d03f6b7ad8faacc438' }, "Data"), h("td", { key: '9c31c495e28d73251358fbd7aa203b1de1a9ab00' }, "Data"), h("td", { key: 'f7146ad8b223dbf8729d621b4e04f811afd6994e' }, "Data")), h("tr", { key: '440d46c0150d7062a01d812fc9d3d639fd8155bb' }, h("td", { key: 'd13cbf69ee680ec143c6fbbdbae9ed50b1854627' }, "Data"), h("td", { key: '82291de1f70738c9ea2a103d9224a6413099693d' }, "Data"), h("td", { key: '7de635ac49495c02bb437718230820fac389ee4d' }, "Data"), h("td", { key: 'dc85f284eb83fd3c77776836a0ca8365943461ce' }, "Data")), h("tr", { key: 'e3713334d8670d3ff02bfce6d767ab58b73de676' }, h("td", { key: '04f3b30d88e4f9d204b3f282dc624f4a0ef62b88' }, "Data"), h("td", { key: '438121fa65b734358f8e8611c06f02798400e373' }, "Data"), h("td", { key: '8f0dc507c517851ca04a0730063845545d000377' }, "Data"), h("td", { key: '6282b9b46b49aaed782aa3882b5a3d543a147ce2' }, "Data")), h("tr", { key: '3593e543b4783c36b12ab3b19d3a1bd2a584f7d0' }, h("td", { key: '1a0eba7f18bb122ea932883ea7604bfa42921fec' }, "Data"), h("td", { key: '849ae4ac2c0428147d28cb64dfffe562dfb9be66' }, "Data"), h("td", { key: 'ab957b28506941b290e79599949d0cac3a8039b0' }, "Data"), h("td", { key: 'd79e72dc5bdc6da84ae455ec5833993f776e780a' }, "Data")))))));
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
