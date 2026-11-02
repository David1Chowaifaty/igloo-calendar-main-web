import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '2c0ebb91550cf96eb3039165bfa169942083c1b2', style: { background: 'white' } }, h("ir-custom-button", { key: '262e87fdd88226a02bd4461f61d1987434905aeb', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '0d1135cd6d9bb8507044d12a75e73bd378659cd7', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '8f5871dd3a75dd78157e9a62fd9322de45b6ef43', style: { background: 'white' } }, h("table", { key: 'd47fee82a6405e3b194357eea97253c150a541aa', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '0d1d53612bc1e019bcc845b8831966733a4ceeb8' }, "This", h("code", { key: '15b2fd4629259674f61c840cfcd932c74fe67500' }, "<caption>"), "describes the table"), h("thead", { key: '58f8d3b53135f0799ffa78161bfb2a0a6486f871' }, h("tr", { key: '77c94dd5e1438513ee33896aeaf4416cd966a591' }, h("th", { key: '0bb577fa0b3731530c8060e086edc1df533a3df8' }, "First column"), h("th", { key: 'ff0ac6523e020a122bf63aafbd9cd34380f98e24' }, "Second column"), h("th", { key: '9bcf1a42e280348617468c13c8592dd34666fdd1' }, "Third column"), h("th", { key: '9b5853b6a05668741421d5982bf9a4714d8a7c6b' }, "Final column"))), h("tbody", { key: '34e3ea98918f69bfd578a6eb91dc238bccfd199d' }, h("tr", { key: '425a5cab7e574dc156b020095f6d19d2b877bbba' }, h("td", { key: '942b84c6f5e40f6ee3af07b5a96276ad749ddc00' }, "Data"), h("td", { key: 'c94b37ffd674d0957630d088719dce50f02bab6b' }, "Data"), h("td", { key: 'b6785c9ba56905c08df068c107bbf200d4509e60' }, "Data"), h("td", { key: 'e03f82f45a440abc810f656e7c06db8d09649226' }, "Data")), h("tr", { key: 'b052e7fd7022846ec35c70020baafa192a4ceb94' }, h("td", { key: 'ff59f55c57541f6449d5ae1c7aa281e50a052179' }, "Data"), h("td", { key: 'a66b688ef9d4e3dd25d6a9f73efd9947ec7d58d9' }, "Data"), h("td", { key: '8453ad362f52dc4c0dc98cef0c8fd73b0f9e86e0' }, "Data"), h("td", { key: '7cec030d76f75cdf10938bb9ca91549ba337fac9' }, "Data")), h("tr", { key: '666b73602e0b3faa3edb3ae22b7a02e45d0b74bd' }, h("td", { key: '11dfdc734b98359c6c0c7b2b163d0bf2b48650d2' }, "Data"), h("td", { key: 'c25119bbc6b00c7d24890c2e84c2d1f7ef8b0bae' }, "Data"), h("td", { key: '392a9950187cc99e15fff2a75ed885347a07b317' }, "Data"), h("td", { key: '3276f65ec2a4d1c30fce55879b94ddfc0f044bc8' }, "Data")), h("tr", { key: 'd8bd7c3e557b04584abc6e274a07e95305123e5f' }, h("td", { key: '06a13749801b1212d90713b563e503c0cba35d39' }, "Data"), h("td", { key: '9d7c137e08f68df389e53f32868bc1a55d26b99c' }, "Data"), h("td", { key: '6a95deb4cefe2174348ee0fe7b9afbdb1453fbff' }, "Data"), h("td", { key: 'dfd9a982e13f400693891a20bc85d2ce23cf002b' }, "Data")))))));
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
