import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '0782f8c4dfa20828ce671819c1ad985643b8c7c1', style: { background: 'white' } }, h("ir-custom-button", { key: '70e21a4794700663fac16ae28be041ec39b835cc', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '7bb3b6620d1813d6550783d39d63525db8ade904', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '921a7f44e15f524823a60273b0644d1010621285', style: { background: 'white' } }, h("table", { key: '52531ab7d6a93665c887fd07e4e8b27172b9d1d7', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'b1825b488677964b634445406916fa769abf24d8' }, "This", h("code", { key: '8ca7764ffdf7cd16f5a2146a3681e81cc4354ebb' }, "<caption>"), "describes the table"), h("thead", { key: 'c06ceb31a08763d40f15d7ba32eb116be7812c78' }, h("tr", { key: '52873d817d02b79c7584472caef6dea6e70a08c3' }, h("th", { key: '64803f335f31abcf68ebc70fd521742a6bc2dcf5' }, "First column"), h("th", { key: 'd10d7d30ee695f883bef5199fc2abf35fa875314' }, "Second column"), h("th", { key: '1b279572c1417d00493335ea5295a01c6c1a9f6f' }, "Third column"), h("th", { key: 'f3749e5c91eb6877b7a9349c036adb937325bda8' }, "Final column"))), h("tbody", { key: '27d7a288f155e9ec1da585f6ce582c16290e3db1' }, h("tr", { key: 'ac50346d27463678299ac811eeb9943b65504f97' }, h("td", { key: 'b78acb27472b808b1157ce8a7b83e4c6ee37b06d' }, "Data"), h("td", { key: '4f4f6cc67d469df746fdb566209bcff2f97c128d' }, "Data"), h("td", { key: '96728398be983cf1c7c05683bb5e55c6b8172880' }, "Data"), h("td", { key: '62d433bc232e9bc9264c3ca60cfb3f08785965d2' }, "Data")), h("tr", { key: 'bebdff7a613260f0809db5f90b5247987aaa8016' }, h("td", { key: '272978f77f77dd4584d6b5d98d08a5beda434b77' }, "Data"), h("td", { key: 'dee6114ccb4d3a7c6cf668d305084bc2ab8da9eb' }, "Data"), h("td", { key: '693e60cddc8e74d1398287b4451bc7f36805cf41' }, "Data"), h("td", { key: '4c4b10479e1d9d3a595e7042109728e9c8a01164' }, "Data")), h("tr", { key: 'ffd733dfb2d2a4bf8f0b76f67106804c59e9cf76' }, h("td", { key: 'cfd66ac5e2357faea2d708a893c868d6ee48b4e2' }, "Data"), h("td", { key: '1b0429c45044c9aaa43dc73f953d9b578c714f6a' }, "Data"), h("td", { key: 'a49c928d9429a645892f9fbcf89f99344fc834ff' }, "Data"), h("td", { key: '4cf12a58ef07d0420395cbae1f741bf16a4fca63' }, "Data")), h("tr", { key: 'de46d83ef94cd28406a968d537c5ddda2730bfb0' }, h("td", { key: 'd47e5644141ea1d2ca3ca15273f098839af8dca9' }, "Data"), h("td", { key: '1152e0c0f47afec09f401b1311bda82d76d429e7' }, "Data"), h("td", { key: '06ff60e873e09e22b88b72a4e6f63e1550228480' }, "Data"), h("td", { key: '94da6033714adb683a1e36cdef7593a5043f9f43' }, "Data")))))));
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
