import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '39f82f9398fa3ace6bef121608528e536886dc14', style: { background: 'white' } }, h("ir-custom-button", { key: '4044ece7386a253744545dc9c838d97328b5543d', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'f25b1eeb3bf46605ab372897a6565ee33909854f', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '34d52e8626b709e8441d0f89603542e4a962b433', style: { background: 'white' } }, h("table", { key: '7180127af7f9609cfad2956c2c3d462b3d4ed7bb', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '93fe49bd73b786f046e6b3fca0d10d96a81fd7b9' }, "This", h("code", { key: '3586d40c0510be4c52b11e6163514a55df4f5a93' }, "<caption>"), "describes the table"), h("thead", { key: '431d9916d440d83448ee9752ce4f8d26607d6a0d' }, h("tr", { key: '61cf044011aa7388fb25dfd0e782f64e026426c9' }, h("th", { key: '534b274579db2b6d55327534a7c6573c0ba77361' }, "First column"), h("th", { key: '1fc173f6c7b7b376b28661520ef5fb8f9f48e4e3' }, "Second column"), h("th", { key: '71280f842dd945c742793be6ff8af0a76f3f6556' }, "Third column"), h("th", { key: '65af5df421efb70585b2bd0b04118147007a5b62' }, "Final column"))), h("tbody", { key: '7f1e582b723a406561ba2ed6a2bc7c055f7065fb' }, h("tr", { key: 'cb96e975af39d4817ed37ff9dfc29b1204d7271f' }, h("td", { key: '2249f4783bc257f365fdc6d975d4d939000bf508' }, "Data"), h("td", { key: 'de57eba9c645df5aff6b8f414a79e059144ab4c1' }, "Data"), h("td", { key: 'ea084028fcfe01428b307341b8b83c993c2ad89f' }, "Data"), h("td", { key: 'e8fda995b0fcbc9e47148b66d98aac9d03623046' }, "Data")), h("tr", { key: '03f7867f2eb7fdef13bae64511a3153259489c4b' }, h("td", { key: '5cb4f5e673a1c98c03cc517cd7b0e8bebe22611b' }, "Data"), h("td", { key: '2d2ca9232fbaa6a3d0ad2699357b18593b646439' }, "Data"), h("td", { key: '19f8e828063b7d9c81f2ce327adba616aacf26c5' }, "Data"), h("td", { key: '10ac307a739b476cb7f5d962ccd8bdb8c0179ced' }, "Data")), h("tr", { key: '99d1a2081603ddc40d7e0d420a48ec95763af87b' }, h("td", { key: 'c7a0201f867770c5127841fce4a9deca9f4d9343' }, "Data"), h("td", { key: 'ac6b161e0b2660e9c8c15cf4377abc5bf5180a0b' }, "Data"), h("td", { key: '45ea876f43c06f65238fe5595cd17a12ebcd6e85' }, "Data"), h("td", { key: '2c1b54d53bce11eabc62707d3834b30974b4fac2' }, "Data")), h("tr", { key: '4a4977073af2654e438d0a80c6c30fa87b16f9bd' }, h("td", { key: '95b40c20c5ab67a7d3999fe1ead728caa8e3fcde' }, "Data"), h("td", { key: '69567ee7805b71238fa19cd842efc43291ec103a' }, "Data"), h("td", { key: '9b40a4013173c2085a0a3d9f4b089fbda2468707' }, "Data"), h("td", { key: '04284a72bb3a1ab0da1f98b72b700e3094895358' }, "Data")))))));
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
