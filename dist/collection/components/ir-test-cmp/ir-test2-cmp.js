import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'a30f349b178fe7d57d933d82e364ad7be4cc2c0e', style: { background: 'white' } }, h("ir-custom-button", { key: '7bde284682f5a78201c7f00b2c8b48990d37763c', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '7efef102bd69d1f147485c8cb201c886b7188976', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '222994c1df6287980f6d42470c7e58f33534533d', style: { background: 'white' } }, h("table", { key: '8e4e22009ac8c63cfaea011fbaff74d5ad457a6b', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '1b9072ab568ea9da1553a3f8192a33bfd7248731' }, "This", h("code", { key: '789e9f5c8c1708cca9aa9e4e3af583826dd2832e' }, "<caption>"), "describes the table"), h("thead", { key: '6d7f63501ad87a312163e6520fec29c13a8faa16' }, h("tr", { key: '2dd73b6507df930a25af24bed8d7a2dfe084ba31' }, h("th", { key: 'ec61da6f465073904a3ddaaa846a2d94cf0bde7f' }, "First column"), h("th", { key: 'f048e2b4257021190d683f1d14ff6579b3903b86' }, "Second column"), h("th", { key: '47cf55ce9c4cd97d5254b083381039b37bf63419' }, "Third column"), h("th", { key: '8a4424541320669f2b1e59079135af99dc291d77' }, "Final column"))), h("tbody", { key: '57eb1ce41d7028abcfad71768b50689dd6f48953' }, h("tr", { key: 'b320510f4a826c8a50482b5fb92a5f171fca5d6a' }, h("td", { key: 'bfb01320eee351cdd5a329ac62dcbe6a9ee6cee2' }, "Data"), h("td", { key: 'dc4a6431040a21da554e1f6451010b56221895ad' }, "Data"), h("td", { key: '2d76b93ac0012de2f228d54a10054d7243e81baa' }, "Data"), h("td", { key: '3b4394c58d0ae2e2518a5e189f745df8ba66c935' }, "Data")), h("tr", { key: '0a0e1e465209da696f03b8ed2a60f6dfb919aabc' }, h("td", { key: '9617a19a3238d9604140061bb9599bcd46e0cc09' }, "Data"), h("td", { key: 'f99fff4222bf301e0a0f2b52f48b9c970a8898d3' }, "Data"), h("td", { key: '4bdd2dd74c9f1b821bfeddd36c1275561d2ae754' }, "Data"), h("td", { key: 'a95f0c0760ab970c992962a82297c48dc03ba7ec' }, "Data")), h("tr", { key: 'c9ee57448f1ea2b450429b2fe3419e0cd33a7851' }, h("td", { key: 'eb176b620f457459e6891ae3c94c6c4e14f8192a' }, "Data"), h("td", { key: '8bf7fdd1be3747f693719d7c84cdf137c88a6e2b' }, "Data"), h("td", { key: '92cdc98dd9354e33db9d587f7acfed54a4fd4ede' }, "Data"), h("td", { key: 'db101e0596790172be47adc8a162af58fc15ca81' }, "Data")), h("tr", { key: '416150c51b79d532589b0e5eb4442680137c3002' }, h("td", { key: 'd8526e4922ad8e007b584d382ae942886d51b9ed' }, "Data"), h("td", { key: 'e56662582e94c08460b98a79bb141999bcb8fcac' }, "Data"), h("td", { key: 'eb273e7a4cd5540298a6946a5fbe501908b877e7' }, "Data"), h("td", { key: 'dec546f50a40e26362e3ebe9950d78aa72bbad21' }, "Data")))))));
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
