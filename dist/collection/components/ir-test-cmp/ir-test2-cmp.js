import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '4d722dfd87dbeae7633bca27bf5cc982c5f7c4bc', style: { background: 'white' } }, h("ir-custom-button", { key: 'fd19514a0f53cbef03fdc17f9f3af92c4df80400', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '5267c0f1640579f93891d139e0a4394cdcd6a20e', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '539a59276efe9515df6fe2d8fd9e09d21cfb4d50', style: { background: 'white' } }, h("table", { key: '043267e8b253ff933f3fe5f911cee676a9d5f17c', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'a493d3465b104fd12db8d3c4c13ff9a704465fc5' }, "This", h("code", { key: 'be2be239fbdd040e1795c53b1dae4f5147649b7d' }, "<caption>"), "describes the table"), h("thead", { key: '6eb4d4a124aada38bee3ed218f392c47e7c3bdd6' }, h("tr", { key: 'd2becb94ef351b0fa4291bb766ef44795dc4656c' }, h("th", { key: 'df835843bb2ad905e3542e53f4d4c10f31087157' }, "First column"), h("th", { key: 'da888d025765f2448aff98c1550db084fc541bfc' }, "Second column"), h("th", { key: 'e66fc2730816809ffc9f32c89aad7c412c87c784' }, "Third column"), h("th", { key: '622181c07f3b53472774e29508e24845a511cd9a' }, "Final column"))), h("tbody", { key: 'fb04260d4216e6d42b19ff590d4bf139f9171a5a' }, h("tr", { key: '00040be0dd562a83e7899fc3b2c934b0d5ccba42' }, h("td", { key: 'ea203155915275ca243e86f7ab5a26399c1b6ca1' }, "Data"), h("td", { key: '5a2b617e77010c44d4bf7c07ae974c9a4ecfcff6' }, "Data"), h("td", { key: '756b31bee365136493071bd16ec390c0cb62f23b' }, "Data"), h("td", { key: 'e895ef3b9f15a69bdd1410d71a409b7d89f972f2' }, "Data")), h("tr", { key: '83a0cb3c8da8bd6239bdf8fcc64f9ab0874f0f69' }, h("td", { key: 'd3608f5b8bc4b084fbe12cf43dce61c38566c56a' }, "Data"), h("td", { key: '42f6599275f215bb2e74bd523f786da2782e77ad' }, "Data"), h("td", { key: '5ce09ef157b1a25ec6851ba3050c7ae40da48f91' }, "Data"), h("td", { key: '071c68c3ae0caed5d9be9d6b92bb2153f86b0f8c' }, "Data")), h("tr", { key: 'e40193646fd84252619de8c3f1349681ae5bf02c' }, h("td", { key: '386fe451521db44b0945c07e20caf6c4004e71fc' }, "Data"), h("td", { key: '1d7375f4dfbfa8514a934e8ffd0269d48c9e9060' }, "Data"), h("td", { key: '0c9e2b056545fd2d5faec19f986ee15d4f718b4b' }, "Data"), h("td", { key: '7e4a9d37b21af941eea693aa005fa70d72c02a22' }, "Data")), h("tr", { key: '6e9244d549b5a72308bbb3713c3eb080ff76024c' }, h("td", { key: 'e481756ab40f98a67a39547b26b66eeacf9dd63b' }, "Data"), h("td", { key: 'a7505c128aecc8043f80227528568d15c2769ce2' }, "Data"), h("td", { key: '1673569414d4422d640caf9ea4938814594471c1' }, "Data"), h("td", { key: '11e65e5fc52f465dd721093272e3518c11176d5f' }, "Data")))))));
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
