import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'e7c348b74611582a78fe795315f82d5b7bb6e536', style: { background: 'white' } }, h("ir-custom-button", { key: 'd7f29082e9cd1b627946a4656772eedfe1fbf014', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'c446db88193f1d6850325940c78752e759624b61', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'c6b4ea60574be8b5e580103f3596ab74dc6bd4ac', style: { background: 'white' } }, h("table", { key: '1da12fc91304851c2912e791bd7971911e2e48f0', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '6fdd5485c79be42754308b8505dc2f433cbbb6f6' }, "This", h("code", { key: 'aa28b1f17ed8a145a79b081cd0130375455d5109' }, "<caption>"), "describes the table"), h("thead", { key: '0704a382614d2ec0377dd3e31859c15f08897a37' }, h("tr", { key: '4ca072199f727c103237de9b9bd681782f24f9bc' }, h("th", { key: 'e2f85cc6ee4a1598930bf36f07602d7599c442ec' }, "First column"), h("th", { key: '339b848c1b62439f0d0158539355982933c46222' }, "Second column"), h("th", { key: 'f84bf72f8dfea0e7065014c1a8e022b5ae997ca3' }, "Third column"), h("th", { key: '76ecd94897c314cd286de315133c9fbbd7e093fa' }, "Final column"))), h("tbody", { key: 'e58f79daf1f75fe53ad6fb6075a8a68c37b79c85' }, h("tr", { key: '240f38ad1e79cc549b3d864c12d53a227b506d1f' }, h("td", { key: 'd7507714fd5ba3df56b35ba4ff8bb5db83c64f30' }, "Data"), h("td", { key: '52ba6352f3974e6d4a3d7f96bea22b0bb533b9fe' }, "Data"), h("td", { key: '3f9e5d15d2b94e9e3bf91fdd61ca418859e10990' }, "Data"), h("td", { key: '703d79f2d36432095c3013951eb79c565efbadcd' }, "Data")), h("tr", { key: '7fd156ae3674850ab4facfd7342e34ed04047d5a' }, h("td", { key: 'e86e585f8c472617d6db0c55b1575690a8ddbc46' }, "Data"), h("td", { key: 'a5c151eaf8b587776ac76db02871696e8f2d8445' }, "Data"), h("td", { key: 'a8ebe15174078e37ee27699d18cbc867b2eb89d1' }, "Data"), h("td", { key: 'a671372a9afbb433623f5e233fb2feb92b239689' }, "Data")), h("tr", { key: 'a9e69625f6c35d3801d20555fcde2b1b2ee7ce41' }, h("td", { key: '0e9571e98e1e6f83ca7bd45d08b3b1b5449fb0ef' }, "Data"), h("td", { key: '0173dc24048b3830e9e7d3388cfec732d0660515' }, "Data"), h("td", { key: 'c131c9eb160278fbb6d886c93c4e0ba2818c5295' }, "Data"), h("td", { key: 'f7bd27c0d0a2a699734016b295f38a7f385d2bbd' }, "Data")), h("tr", { key: '9529187321c0fb70d3c3a36913f30e99b87d2ea2' }, h("td", { key: 'c68128ee31b38517307aed8d6e8070aea0c4047a' }, "Data"), h("td", { key: '1afb64d8b08e959e4c336954a7afeb15099a0e1b' }, "Data"), h("td", { key: 'd18276ebb0023fe09f729cbe4c66886333f54fa3' }, "Data"), h("td", { key: 'c33cfa2f006a03a57334712cccbcc248ad008d3a' }, "Data")))))));
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
