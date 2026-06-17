import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '004cca33631c77f085f74eb3954d807f569f9dff', style: { background: 'white' } }, h("ir-custom-button", { key: 'cbc07a9d9c8cb93d6545c9c839dc00cc70a77f70', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'ec1adb90811b62747f84b3b28865d9e3595bc2d9', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '06ebd2d1ba78273f0a5c56037d83b551ea431883', style: { background: 'white' } }, h("table", { key: '332f01fa293275d3df68047764f8f01e36764c2d', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'dfd2db65365bfe2cd716b764d9692d17ca9813ad' }, "This", h("code", { key: '535f12b406332e85e22dda2372a452d3cf8ea295' }, "<caption>"), "describes the table"), h("thead", { key: '12ae473cad3c12b83560ca95fac48d815b532891' }, h("tr", { key: '4647d222e3cd91465a55784d3103988e2bd36eaf' }, h("th", { key: '5a3215ead594a3a970c703e061b8a5fcf175fd74' }, "First column"), h("th", { key: '121e7485db10b7abb2282e7d2066b751d380594d' }, "Second column"), h("th", { key: 'fc9d730e434fbb960e831cd12a9d30950f091028' }, "Third column"), h("th", { key: '6415b256c3d70675c4b8572f8bf2aa920662ea93' }, "Final column"))), h("tbody", { key: '303eca8d6c284b8bd7013d8e6e3b4f2720b3fdeb' }, h("tr", { key: '4b7616880f51c8e90e131bcb65c5b2ef27240141' }, h("td", { key: '34e0930018e4a6c0cd91bd44c4cb9de133cbc01a' }, "Data"), h("td", { key: 'e456cf52ea785e844d9185c7624702d8f089b0cb' }, "Data"), h("td", { key: '4b97b31ba09f4843690b18503c1f1a645559b71b' }, "Data"), h("td", { key: 'f6847eb368d53b6107bd215312dd021ea4edbb84' }, "Data")), h("tr", { key: 'cdf8dffa2bbbe066b1f8832e83152ff8a64d645f' }, h("td", { key: 'b09e5c961fb4207cd79b5248af70318232e0efac' }, "Data"), h("td", { key: '66d25bc89c1c09c2b12d6dc6dc4c4aba3b707ee9' }, "Data"), h("td", { key: '370bc29ba70c653266e4d2fd9e60a3459d6ee683' }, "Data"), h("td", { key: '00be6a55069ddfcb8d3b3fb67196c5dcfa3d16a7' }, "Data")), h("tr", { key: '3922c55fdfd8b9f92b8f36dc99a247fdde29c5ab' }, h("td", { key: '18c486ba0909d9104b79435a8dab0f5fd6271188' }, "Data"), h("td", { key: '04b1f8f5c708fa80dcefa767181d418da76a9a4f' }, "Data"), h("td", { key: 'e89e2b25162ecf32b75fdc8e4789a0471540495e' }, "Data"), h("td", { key: '28ed9e3f9f8b78c22022c7c76926c07992077dbc' }, "Data")), h("tr", { key: 'fa30a5cfbd7abc2a6eff86f7dbbd4d2fe5bb2e84' }, h("td", { key: '96db41e3804b83e3790b54f6eb9b8a979d9e641d' }, "Data"), h("td", { key: '5c8bc3365b9498498061d533f46f3b374f0c06f2' }, "Data"), h("td", { key: '9f75e2e49da4eae0bded46240adec4177156a4a1' }, "Data"), h("td", { key: 'bb17472bedcc1aaedcdaaddcd4a25a0d9407c9b0' }, "Data")))))));
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
