import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '94a5533989477784f706a1a29fd1b77b9b87ff43', style: { background: 'white' } }, h("ir-custom-button", { key: '35589b029380ba48f57cadf7bc202d5deaf71dd7', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'e6c42a4a907eb5918cb8bd8b2bf22ae3d40f01d6', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '275ca57eb8ab98f1a8ced761e3260a859913fc6b', style: { background: 'white' } }, h("table", { key: '16c0afcc81dbd7354f9b43c105205dc89e68528f', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '93b56d388d4e9fda403aee46ba1ed8a5c2d6ca57' }, "This", h("code", { key: '105fb9e706918cb28142fc968af9cd3742d18610' }, "<caption>"), "describes the table"), h("thead", { key: '1ba35cc464b4574799bbf2560b1e2efea9096573' }, h("tr", { key: 'c18eb4cfa711df97db3df14202cc7bbb15bd99c6' }, h("th", { key: 'f654d0d9fb78226883b287c6926fa2f14d988adc' }, "First column"), h("th", { key: '10242916c16a8abe1be20806ab255c320f99eb8b' }, "Second column"), h("th", { key: '71638f92842bad8b270306b5fa0766f080227721' }, "Third column"), h("th", { key: 'f111064acfc8a330b6224b42033a2e6e37c4f5a9' }, "Final column"))), h("tbody", { key: '2269d3bddba66dfb9180c7d6c6af246b02ff18d0' }, h("tr", { key: 'c4ac0b2924f2c0d8ccd3999d6c07d495686f0ad4' }, h("td", { key: 'b0b1a64daf0e58177229eb7bfa609b824f55cd23' }, "Data"), h("td", { key: '376efc8b0709bec594e3c38102dbde523e083350' }, "Data"), h("td", { key: '7c8643448cece7e5c389356a045ebf72a19c611a' }, "Data"), h("td", { key: '49de0ae02737fed200f6101ef315cf6045fff8ff' }, "Data")), h("tr", { key: '64c106dd92c53632e25ee793ea7052bb471b0085' }, h("td", { key: 'bfb304eb00b2a389958e4db4d898c9d62908f608' }, "Data"), h("td", { key: '6ebc5e8606cbdbdc319b75f58d016263ce2776f1' }, "Data"), h("td", { key: '6645b537a973851accd82bcdbd9e272e94f0e86d' }, "Data"), h("td", { key: '7550352b431fabb58e8ff035cec99eba8d9d41c0' }, "Data")), h("tr", { key: 'f58b4c04771d892e2b44343c0e093abe0396b665' }, h("td", { key: '59093cbb994ec63ce8e0d607fd02d5e366715508' }, "Data"), h("td", { key: '84c8166bfc4903366ad61fe2a0a25d46d8f04ce4' }, "Data"), h("td", { key: '8dc4f2fbd552fb9916ce2376aea7d03299120096' }, "Data"), h("td", { key: '137ee8a8c39d3c7575de7c8011d0f076b895bcb1' }, "Data")), h("tr", { key: '8a22807b791197c6c616ab40ad6f2ee45888f70c' }, h("td", { key: 'cf2b6588bf15e874fff62a05306b355b36aa8325' }, "Data"), h("td", { key: '110d9544f097a6574aa790d996bd116a5c5433e0' }, "Data"), h("td", { key: 'ffbe7dd5a8c391ac19353e65146e8aafa1cff66d' }, "Data"), h("td", { key: '756f76d05ae146e0edb390767a66f53a3c3f9bbe' }, "Data")))))));
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
