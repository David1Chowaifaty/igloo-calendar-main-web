import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '4ed2937d1b5723b247535ab9ff7724bd2e765745', style: { background: 'white' } }, h("ir-custom-button", { key: 'bc08987c98ab19f18f059fd3a8d7f57501265abb', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '9f83b12eed938664d4c70a8f1c6b2a80ed88a94e', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '114fec4104e7f21d6654e03dbfcfd28164b77686', style: { background: 'white' } }, h("table", { key: '4bbf8ac5f30f3a465f391d1791ccb168e9e2f489', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '3e34794a7634c9ae618326d3982c5a22ca7684c0' }, "This", h("code", { key: '3754d96f390fb29f791a4e023453897877054f2f' }, "<caption>"), "describes the table"), h("thead", { key: 'b413ab47f6abafa845174531c8b1d707462b343a' }, h("tr", { key: 'a2fd182f0b9abc1a06feb2472f791717611c0cf9' }, h("th", { key: 'c1033b57a63ab2769c5a86c6b8e85a7aec492e90' }, "First column"), h("th", { key: '1949565d586d9cc5a8f7a7fb2a9f67164b6143df' }, "Second column"), h("th", { key: '45818cb388ca251c289b3404858526f3ea22b323' }, "Third column"), h("th", { key: '28238888755963686e28742cda01ed1dbe7f6878' }, "Final column"))), h("tbody", { key: 'c9178ffb9788d158da3407320843ffaf44465256' }, h("tr", { key: '9069d18ce1ff26eb80f9ef65b66720aacdbec574' }, h("td", { key: 'c106eb8a4b5e33262206dee24dc754fa2eb34e7d' }, "Data"), h("td", { key: 'cb7bc65ebdb5f83d223bfb4b1415813f858c3a8e' }, "Data"), h("td", { key: '335df69aa261a20a829ae12b93cb57b3e7f1437a' }, "Data"), h("td", { key: '3f1d5773bfdc5f5fdcad078ac976fa4d2ac794a2' }, "Data")), h("tr", { key: 'f5af1e9a2f37bc1cc8932cd1e966a2a38ddc2483' }, h("td", { key: 'da3b645ba40bac5b2c9270a2adffabc30d6ca00e' }, "Data"), h("td", { key: 'df48ecbde33d44773477d584b5636de273d36706' }, "Data"), h("td", { key: '049a95f09767220a85c544692a28dacae4ebfb02' }, "Data"), h("td", { key: '796a8496339d12c84a8a37727cbf26d7a4c169be' }, "Data")), h("tr", { key: 'b7cf50c2499e79f6957c08bbb69a15bcc4b1e2ff' }, h("td", { key: 'be5e227c9bf60d9b40db3aa42d326334c2f5c3fe' }, "Data"), h("td", { key: '2a71dd3ea05706e32f151b3ee9be4eabded5afaf' }, "Data"), h("td", { key: '1a48b87db18990ef3c2455fa1143735d56bbb10f' }, "Data"), h("td", { key: 'b8d140de6d72b89fa88adef849df4d2b749a4477' }, "Data")), h("tr", { key: '895614d177b0039b17363251a568b88465ac8dff' }, h("td", { key: '80295114f9725e6faa80d54790a7104c1ba51432' }, "Data"), h("td", { key: '9e65776a81b42919652df79aee509e66793eb9d4' }, "Data"), h("td", { key: '805a511d300ca0f07ef7cff618f778630897bacc' }, "Data"), h("td", { key: 'bc9a36159226e4927b635a5033cda5564ce00a51' }, "Data")))))));
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
