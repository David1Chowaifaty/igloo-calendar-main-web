import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '47c542da8c63e08727bb78377532e3f414eb59ab', style: { background: 'white' } }, h("ir-custom-button", { key: '3f5eb3e6bed47ff37bfacd17d0818c06d750b030', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '39311aa7fb919cd608439698164535e9c91d1e34', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'a9be0b2b43b2f589abdea910e193759addc94627', style: { background: 'white' } }, h("table", { key: '3868900f0f31e9ba4ec23f512d3f28fd47e82157', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '67e66dca7e96053946dedfe4718cd1f4aaf6481c' }, "This", h("code", { key: 'b975a7ad25bd9798092fc1fdce92285cb088b471' }, "<caption>"), "describes the table"), h("thead", { key: '71deb378be4e2a3bed38e1710ad42be34b9159dd' }, h("tr", { key: '39b7ca049a18f486759d80eb5d1d3a9165a5630b' }, h("th", { key: 'ac57babc3e340fab3c4e91ca8268c2c624f96775' }, "First column"), h("th", { key: '8f518aa02f0e0c94eaeadc0ab372f110940a1aac' }, "Second column"), h("th", { key: '0799ae809c72cf28691e053aca11f477e1fdd720' }, "Third column"), h("th", { key: '6b3553cd1244f406ca0586b2bff559ee2e94da11' }, "Final column"))), h("tbody", { key: '0531318874a2ea0a979b6da1c524c811fb02823e' }, h("tr", { key: '9ffb1ba0d01e63bb1149389eca7c2225e5549b45' }, h("td", { key: '2c95d58efa1d19c48ad18244b45d0a7a9f362d30' }, "Data"), h("td", { key: 'b1111504f1301b06d1d2b8fde589a07080527d3c' }, "Data"), h("td", { key: '9c14be68f9506c222cc36e4633cda359777dae42' }, "Data"), h("td", { key: 'f1281fdd650148a4b87b68e5f9762ebca96078a8' }, "Data")), h("tr", { key: '244cf96b2c1f1f07df9dd6a149dea8c18488ff42' }, h("td", { key: '2a15f5af74da970412121f3a1e70c4043834ab33' }, "Data"), h("td", { key: '359e58d5d44a09255514adf4be273689347c83a8' }, "Data"), h("td", { key: '0ad8eb3992917baf488f14024f380a0c96ec2a05' }, "Data"), h("td", { key: 'd4f475875f6eac55c999019e313489c6529ebaef' }, "Data")), h("tr", { key: 'f2c99368ca05d2b0ca479ef6d62e8307953679b1' }, h("td", { key: 'beeadaf9594d7f8170aa5a14d9484832dc48572c' }, "Data"), h("td", { key: '013b5c661bef0781a446bb05e8b4ef1a98155314' }, "Data"), h("td", { key: 'b098725c81fd1e059970a9ba3d5b072d3817d484' }, "Data"), h("td", { key: '3456bc59f5343a8c59889f48fa4987a3fcb4950f' }, "Data")), h("tr", { key: 'a2f61d3fbbf2969fdc840d00656d8865e31f7412' }, h("td", { key: 'd552cb6437f9fddedff0bc153e1135aa1b50b92f' }, "Data"), h("td", { key: '42ce2b846e5d9e119242b40f2f64a28789d9d1ba' }, "Data"), h("td", { key: 'b2867cab4a95301fc1bc8832977ae79f94c9544d' }, "Data"), h("td", { key: 'af748a554cf931113a218f6e325b0441f74767ef' }, "Data")))))));
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
