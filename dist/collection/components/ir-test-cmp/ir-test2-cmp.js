import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '3dc1c8a7409b1688e06e3c4932485e6786b078c3', style: { background: 'white' } }, h("ir-custom-button", { key: 'a1dc4327b997a20acac7ff2d9f8bbb38ef000166', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '4f90891099e066132eb941711fdbdc02a48cc8bb', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '915ad5fe0d9035cad4a8360036e7db8389b8ef11', style: { background: 'white' } }, h("table", { key: '2dcb5a9157556db935e7fe11f10195c545e68c57', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'c6feab791cc7192189a461a12ac2350877a77122' }, "This", h("code", { key: '8ef034c06112adef348845f39ed18f1deddaefde' }, "<caption>"), "describes the table"), h("thead", { key: '0d2fab39e4e29832f58eff3c9b516960628c4c5f' }, h("tr", { key: 'aa43d312eb5921d0ec0638abcccaa84691654dae' }, h("th", { key: '91dbc4ba03fc7b51f378ce4dcab2592ccacbb892' }, "First column"), h("th", { key: '2a6710c89c020a0536218cfa48ae6e7fcd16fba6' }, "Second column"), h("th", { key: 'b616294611c27a114459f875033c97f0265bf536' }, "Third column"), h("th", { key: '8fc9d8d9a5fbad61bb619de6522fe88b2faac0b3' }, "Final column"))), h("tbody", { key: '981283c4494e6ae5f3d3716dc272c12f71b14ddb' }, h("tr", { key: '8c3f857f015e2b0026b75d069fdf35aa0dea0ec2' }, h("td", { key: '6c7f1f1273eb8d414b202d57d77276029e367fef' }, "Data"), h("td", { key: 'fe6e6b653297b5045db466027b0258788954635d' }, "Data"), h("td", { key: '4e3ff454ea60bfb4d54d12da11836603a943e0d9' }, "Data"), h("td", { key: '13207c6cfd390c7da39c14a010c2920e94081c3e' }, "Data")), h("tr", { key: '2f54bcc104c952dbb30d82806f77e2e757731dc3' }, h("td", { key: 'bca6a5ed6c544dc1ed2a4738b3d52e8387b49a25' }, "Data"), h("td", { key: 'e0f739395de8094b7524c694f3ec9dc84502b2c8' }, "Data"), h("td", { key: '7e97b5d7fd134d0e3ff3bbe564872793395b5c89' }, "Data"), h("td", { key: 'aa6a7e857aefe0dadbc576e5be5a350a29a916ea' }, "Data")), h("tr", { key: 'c3cb51f78663b1379a1c970a4b9485634ff84355' }, h("td", { key: 'e88a59c59a70156911906bb75103c45b835b8c47' }, "Data"), h("td", { key: '0411167d07a3b64b1cb07c9904acecff5af8fb8f' }, "Data"), h("td", { key: '2833ed8579bbec1519f5ec9cd98df8b6af0a76a2' }, "Data"), h("td", { key: '029501a4d70853dc596b3dcf2fd9c582f0a7fb94' }, "Data")), h("tr", { key: '4e176d60f858d75743d8e3c212a187caf48a5c59' }, h("td", { key: 'f9bc7279ebedf4fbcb3ceaaf76042bb4c06d1515' }, "Data"), h("td", { key: 'd4b6a25c5d0cf0ff52c972ae8c32aa8952e12c20' }, "Data"), h("td", { key: '80a8a65210b8627314c38b20bdc8615aabba4537' }, "Data"), h("td", { key: '0d160482252e5166112c08cb0026393ac5cc71a0' }, "Data")))))));
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
