import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '4efd9350ae96b39d7c17b626ff0f515d2dc7bd0c', style: { background: 'white' } }, h("ir-custom-button", { key: '0deb1c2ad259256a2a7938c9dd28f2935b984394', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '3172adbc16692ae5c220d3d34b0b7db1e312eaf5', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '6f7ed48a66b758638a51a7bd58f5633db437a982', style: { background: 'white' } }, h("table", { key: '534678f4f79ce8a9e2b15b402805c195e2f5f22b', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '33f238b71ef5f98016a2cce7148553f6587b9f20' }, "This", h("code", { key: '9ca90ac4005a5b8ad82b5574c836c10e9dee70cf' }, "<caption>"), "describes the table"), h("thead", { key: '0bc6117f3b40b1a4e141d0f49bb3f92ea1127e00' }, h("tr", { key: 'a44d0a76975a41b2e431de097277f82993fa2e0e' }, h("th", { key: '466771a2bdb54e65938718b6d5439f804e71a13f' }, "First column"), h("th", { key: '9f382bd79015c852544991b6bddf81c1e3041b2a' }, "Second column"), h("th", { key: 'b0c1def75ee9d349f8b7fc674f448e347e4403f0' }, "Third column"), h("th", { key: 'f872359980d615278028596b7920dc315f6df4c4' }, "Final column"))), h("tbody", { key: '4aa3fdc2fe5445cbba1e04d219de732d8aa53712' }, h("tr", { key: 'e3a8809263306984131b3fc913fb147a4c99ce1c' }, h("td", { key: '8d1a633d34baf26e14937843123cfbbdf10b5054' }, "Data"), h("td", { key: 'dbe73c7f3e516b4dc7e64c015f36927f0459cb62' }, "Data"), h("td", { key: 'ab9f41fc4e00ff89cb47de03eb6dffb639b077cb' }, "Data"), h("td", { key: '874e0fc645648e9b765c21337094e98448baa9f0' }, "Data")), h("tr", { key: '8f7c6c9c870ff77dd19680936b3540bb973bf49b' }, h("td", { key: '5db0ed5225eabe3a158d8d3df47ce8d0629d1ef8' }, "Data"), h("td", { key: '53116e3051c6ab68f9130d7d70461b18d4826b0a' }, "Data"), h("td", { key: '874b761a04eb23d39e1ea208d3a05723eb5c6015' }, "Data"), h("td", { key: 'cf16e046b8e6de0804ef11de36c4640d8d714afd' }, "Data")), h("tr", { key: '1c0ba8e89e48537a111727bbead1e4bc6fac67e6' }, h("td", { key: '8ea3f37d556a739f795c54843a25c124d7a8ec00' }, "Data"), h("td", { key: 'e6f52ed3705d2c7ef8c478254008300db9f52f65' }, "Data"), h("td", { key: '8d5ebe7185d7a5d2f0545739fae3d22b63270d5a' }, "Data"), h("td", { key: 'b5ceeaddba92b056bf5cf4bf1ab67d02b75b708f' }, "Data")), h("tr", { key: 'd507e3feb40db06da688135035f60424d56c3765' }, h("td", { key: '4b8726d2eb56d5113e97d2ecbd834ecf0dbe5c31' }, "Data"), h("td", { key: '06f3084c7a1527873e676263a6a6bd2e4c037282' }, "Data"), h("td", { key: '15aadb3116e147297781cf95114a61c2f3fc24c1' }, "Data"), h("td", { key: '750121dd2881942bacc4eca1db82f03a5aae63a4' }, "Data")))))));
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
