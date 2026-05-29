import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '18aae6eddc3ed27ba6d672165565891285a5d981', style: { background: 'white' } }, h("ir-custom-button", { key: '65ead3929874d117945c343cfef8afa8ab252407', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'c46ea152cc952a11d6e0c26fb2aa292be9996858', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '663a47d3df7fbab69788f01f3e492f489f538673', style: { background: 'white' } }, h("table", { key: 'd39456a4401c26f5373a6ae3a238434c4caaae89', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '002e4ff6565134734c57ea9a163fa6eda0797c79' }, "This", h("code", { key: '249936c5a33091d47613e5aae5665f2eaa84d929' }, "<caption>"), "describes the table"), h("thead", { key: '4823fc53513b166cb2a91c18afed5183705fb259' }, h("tr", { key: 'bacbc775cd0b1305d82d24152823d637445f5646' }, h("th", { key: 'c5e00c980b85baa64d523a416678305d7d240b3e' }, "First column"), h("th", { key: '2fecdd52205bd5818efd1fcdb73a12d6f0cd645f' }, "Second column"), h("th", { key: '6fcc2266d99de01bf8d19d28a0bf829609c7d39f' }, "Third column"), h("th", { key: 'b71350800faabe9db468496473425a1bebd0be5d' }, "Final column"))), h("tbody", { key: '9043ed621dc7b5fc28a8b3db65c1e6faf26a5950' }, h("tr", { key: '930785bf87fdc194d4a497c0793429996ae9483e' }, h("td", { key: '0270bc8202c10d9bfac5c15164ebf584b51d8169' }, "Data"), h("td", { key: '0b1218bbedc805477f13798bbd5144d42ce811e8' }, "Data"), h("td", { key: 'daef73fe986a8eaae26690b3e2cf385ecfd684a7' }, "Data"), h("td", { key: '502b17cafafc39b9ca613de05e4dfefde65c512b' }, "Data")), h("tr", { key: 'f8f5c10eb108c67127ac495f7123b55f3c111c7f' }, h("td", { key: '7edcf39869dbd06a92905811e1b71973d778bfff' }, "Data"), h("td", { key: '248d82cd6e095c455bb481d5a296976c646d7c22' }, "Data"), h("td", { key: '158e4c257df00d268fbe2540333d064f3cad0210' }, "Data"), h("td", { key: '2864d360b2ea3df00826a0dfabb1d2c2d7f82e8e' }, "Data")), h("tr", { key: '4d2b32bbf7569b9ac037bbb57a29a3cf182c53cf' }, h("td", { key: '590f952207fb173edd86c58784e6177316c08fbb' }, "Data"), h("td", { key: '8d51bc6a218a729053f57dc363d37005217de3f1' }, "Data"), h("td", { key: '2a69d8215a9408bb47c3fa5c85a8553bc2cad759' }, "Data"), h("td", { key: '7455a822efc21cd0447c24a34b455e99bfe65ec7' }, "Data")), h("tr", { key: 'b33b07b16f21bd81eaa862f9ff96a1f2f749aea9' }, h("td", { key: 'ba0beb3bd69fbb72fbf005bd25734dc62541086c' }, "Data"), h("td", { key: '1b1686aedd01be2787c3e031a55506d8302414aa' }, "Data"), h("td", { key: '796b796983aa3b3b01153d407a328d9f840214e7' }, "Data"), h("td", { key: '4edcfdc203edfead148fffd08854f084f8eeea41' }, "Data")))))));
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
