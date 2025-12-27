import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '7e3835c536df8442ab35c1e083ecd8c13a7c614b', style: { background: 'white' } }, h("ir-custom-button", { key: 'e7201bd5a4691ed492461a6b1f9c53f56f2ec3ab', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'acd7d66ed4035e8259c7625f7148c52c18cc5a88', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '4a350132091a57105d1f32fc3ccc77fc2e14bf37', style: { background: 'white' } }, h("table", { key: 'f70a7cf6c59311ebe5c20a25147e483ef05fcc79', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'eb67d277ecd1031d523857be60c88b32526615ff' }, "This", h("code", { key: 'fc9207321af6f73583df40496a7f01f1bee82b48' }, "<caption>"), "describes the table"), h("thead", { key: '84916e45804eb7ca7b60e19bcb08f98397c505ab' }, h("tr", { key: '3837b2ef55b95a6204a1a3a041d001f56974b6f8' }, h("th", { key: '4f601b6eca02dd565ed20b042d3715eac83b803f' }, "First column"), h("th", { key: '4075c066e632ab21f12d377df94d9d8b78433530' }, "Second column"), h("th", { key: '7f631ad66e09673c405ffcc3194f76817c40f030' }, "Third column"), h("th", { key: 'b3686ee9125d284e38aa2cb8b85ea072e0927be5' }, "Final column"))), h("tbody", { key: 'a41387fd13a33112c152e8804ee1c10c60d8982b' }, h("tr", { key: '49def2f04b2835fb2ae02b505f96b292ac413981' }, h("td", { key: '669de79a73fc53f464e3c82b33a54484435b0451' }, "Data"), h("td", { key: 'e9e6abef1770c9374daa1f45eace3f05cb339833' }, "Data"), h("td", { key: '4a78ebf465cc47ae5287c164dfebb6104d8b5744' }, "Data"), h("td", { key: '076dec2e100a664b871b6d3523a5863f1a6ac62c' }, "Data")), h("tr", { key: '826789b1321458cc4ab140fcfa07a6838c101c0a' }, h("td", { key: 'db126804cb1d4ead916f02e3710dc4f7681fdb7d' }, "Data"), h("td", { key: 'ad929b3c62bc2a5f987015d5f89a649bd76d463c' }, "Data"), h("td", { key: '977d35fd99f59bb6c7fef3181f08a89a7365a84d' }, "Data"), h("td", { key: 'ef515df6b1ad1174f988dbb0a38ff82bc61141e4' }, "Data")), h("tr", { key: '75afc5119cb83ca43ab16dfac8102f2e247699cf' }, h("td", { key: '77f98a350b57ba83c7e4531a13099dbbf47d8bfa' }, "Data"), h("td", { key: '361eaa07920fa87f076e8bd771e84076caec6a3b' }, "Data"), h("td", { key: '7096788fe22d8ee53cb463b9d2e6ce730fbaeadb' }, "Data"), h("td", { key: '787b7025e549e16ec39d80849a0297aa826c4b8a' }, "Data")), h("tr", { key: '58aa5fbf271f1927c123c63e947300e764ba146a' }, h("td", { key: '0e11e8fbb1c238a30d1a4fac8a25c8c2232d73f1' }, "Data"), h("td", { key: '8d56bfc675be131b6f843a1c4d8a4f4893f034b4' }, "Data"), h("td", { key: '43fa24002945e1f99855103cf15a3aa28a1c866b' }, "Data"), h("td", { key: '8db1f1006c36a456866eac1ad279464dc5ae53be' }, "Data")))))));
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
