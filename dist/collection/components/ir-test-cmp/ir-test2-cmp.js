import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'f84d27f6b4880707103a7ff38f1b475276c7661f', style: { background: 'white' } }, h("ir-custom-button", { key: 'e0a480431b70c9579d2941ea14bf58f63909b858', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'a1f9342187ef65ce7d62a5a2c83ede2512a25382', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'c95cc7ff77a68b30cf542255d4962daa14b30f78', style: { background: 'white' } }, h("table", { key: 'd6d4ead745b2b7d5b63971985ca9cb3b739009e2', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '0cdd133b6c52aea0832bb48b21c9abc1db37b91f' }, "This", h("code", { key: 'adf9a9bd885537aa04077870680d9a5715f9570e' }, "<caption>"), "describes the table"), h("thead", { key: '9025246fa88413b36f24e3d516b7a258943e6efc' }, h("tr", { key: '970e2e9d625ae8ce4d6d8eab88ab78f5a8f2dc6b' }, h("th", { key: '81ca58895f8c07819c81d62b5a850cfd18988193' }, "First column"), h("th", { key: '0fffd5831a9ebbfea69d4f1a93e0557e5ffa1ef0' }, "Second column"), h("th", { key: '4fcae1cccfe4ac3e042d34d7e6c4b0f4f003ad7d' }, "Third column"), h("th", { key: 'c5256fda94cac3892faa192a911b8757cf31731c' }, "Final column"))), h("tbody", { key: '5593b63a42fd50f2bc0ebf6967397d9534e46bcc' }, h("tr", { key: '78acb8bd16fdee52eea12f6a52bb47ee35429222' }, h("td", { key: 'e5885e7b36c0368d0365ce5a948b98c73a353490' }, "Data"), h("td", { key: 'e2eb4d1daac52b7b9a0e1645fe3ecd3c92ecae22' }, "Data"), h("td", { key: '7461fa50e77cf1d2bee47a36f51d2c50316e7e68' }, "Data"), h("td", { key: 'b54dbb32ba0b5dee3bc2f408d83915a862aca15b' }, "Data")), h("tr", { key: 'f03f80d5d793d997ffb067b0006744affaf1f041' }, h("td", { key: '3b5af2e2939a17b2d343f8b549a9acf918fa1b2a' }, "Data"), h("td", { key: '9985b1cec54cde3075c002877af5b40b92d7576e' }, "Data"), h("td", { key: '6fda59e883034d3a3f54030fae7f653346dd10f6' }, "Data"), h("td", { key: 'e0c974a91408165f1944c3d760a3ff47616064a9' }, "Data")), h("tr", { key: '6f74f49a1565f5b4079f6a70b1b94a05d3412d4e' }, h("td", { key: '2ad4d3e2380c4c10ee2a0e95e118b29de39146a3' }, "Data"), h("td", { key: '1a3e8cd96ea688d932af28f0c3e64dfb27b19aa4' }, "Data"), h("td", { key: '5098a70ebdfb2c94729e7c52b30250fe20a1a444' }, "Data"), h("td", { key: '7288a9e16eba1323cefa90214781318ae24d12fb' }, "Data")), h("tr", { key: 'dcc1a86fd7cba94a6e4c18428dd4cce954fe0cec' }, h("td", { key: 'ae9836ecd8b3b745521c18fd3423b067f74c2652' }, "Data"), h("td", { key: 'b8ae22803795f5023fdaa9e7dae3a3bee6ee1f43' }, "Data"), h("td", { key: 'a4cb9f55c80263589f7cdabb1ca311195a0d4a82' }, "Data"), h("td", { key: 'e1ed232f942042e92e71013c3c27a43cdeb1c069' }, "Data")))))));
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
