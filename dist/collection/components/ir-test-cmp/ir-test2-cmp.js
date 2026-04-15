import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '5f8f990deb585052afd324e62c647e9aa10491d9', style: { background: 'white' } }, h("ir-custom-button", { key: '85f1397735d94418a9d2e66ac66a2e8118019026', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'fb1faf8c3ea89deb2c6e2977fbb113e31930d9dd', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'd3be962de8c464747113121580fb36780adc41d4', style: { background: 'white' } }, h("table", { key: 'ec4d3cbfa880a97e9a8530dabe58e7fa620f203f', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '85022f59858d99eb48b2ff134076fd708944e53e' }, "This", h("code", { key: '22bc26464ad0e1e5bce838fe17f304234f94c741' }, "<caption>"), "describes the table"), h("thead", { key: '00de6d5f46ae216dcdf1ab9fedb0d26a810c9af6' }, h("tr", { key: '85a6ade712fab833a92c1e8a6d6f84d4bcc66f01' }, h("th", { key: 'f1a7ceb059d7113fb47a44de9b757fb86a826640' }, "First column"), h("th", { key: '882cda877cf5f823ccece6d4190d1b59ba2b9776' }, "Second column"), h("th", { key: '14dd5d7c922b3910988e3a004ff97bb21c4c37b6' }, "Third column"), h("th", { key: '624b7b9e0623d50f5789e679db16714d25e64a61' }, "Final column"))), h("tbody", { key: '6ac435a2242378d6f32c69f4c3200b47a3731d71' }, h("tr", { key: 'b8682e9429491837599b7609270b6da603c9e303' }, h("td", { key: '64224af3e4f001c605a78ac7302d7cc90c782749' }, "Data"), h("td", { key: 'a26b605c7209462872c7c0f0a6f3ccedaaec7ccf' }, "Data"), h("td", { key: 'a43d658e803b919fdfc99eaec8644957a445767a' }, "Data"), h("td", { key: '92e13c91aa4d06d0204b197664777c1315961b5b' }, "Data")), h("tr", { key: '82e3bcabb32cb149b7ec7950cf505ad5f48a9bf7' }, h("td", { key: '21c7dbb6fafc0367051e36e993974d8658de1483' }, "Data"), h("td", { key: 'f1f5d5a4cc1d02027824ba6622f89f873c46dcd9' }, "Data"), h("td", { key: '16e376c6a4ab67e288d78f5ac15031f5a2329da4' }, "Data"), h("td", { key: 'c76e0cc1b260a591bdd7bc9a3709759e9265e54f' }, "Data")), h("tr", { key: 'a51d1db76ab900b3922521ec80a50805f97c2311' }, h("td", { key: 'b85dbb8af0f21db959da607f0f02214545d8fff5' }, "Data"), h("td", { key: '2b207b79210c7da1b483a9dc59fc26b755d41d80' }, "Data"), h("td", { key: '5834b806de0e7812668cb9ba1cc6c28faf4d8f1d' }, "Data"), h("td", { key: '502683fbd1e7d3146a5af22c81646cde11bbedb5' }, "Data")), h("tr", { key: '39215ca6427390378d89fe06decd0b2955b65e8b' }, h("td", { key: 'e4c55e9dcbefd09f39b90d27efe5505c83862a64' }, "Data"), h("td", { key: '71eb7a81bda1f26f01ee8bf3a2d3ebb7d56f3ecd' }, "Data"), h("td", { key: '0038c232e993fd4c96081f20b81b6667bda122e4' }, "Data"), h("td", { key: '79bd79b4fe0065ab8f5b01b1b26ff08712e277dc' }, "Data")))))));
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
