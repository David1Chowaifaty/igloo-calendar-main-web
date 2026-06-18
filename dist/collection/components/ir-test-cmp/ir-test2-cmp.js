import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '7c6359eacd643dda8bf874b0f00afeb904d3e0f0', style: { background: 'white' } }, h("ir-custom-button", { key: 'e0a677336165ba7b4e33164ad48c9f7561723364', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '4c36c948515666cb73bde7c2bf7b96db09a04205', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'f1ff068d76a89806c1b4ec85d9a73d7c385ef02f', style: { background: 'white' } }, h("table", { key: '686bde6e24588fce875d6d26ece774e31f7f9a42', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'e967b05f0ce8b4baa78171c3ba2e91b18264afc1' }, "This", h("code", { key: '32e78649bb7f1dc0b6903d87209d3d988e84a920' }, "<caption>"), "describes the table"), h("thead", { key: '369e64a316e9b74aa978bcf032f5e0e270bf8f5d' }, h("tr", { key: '0fe7664d04c27dde6cf062db4b4ad68880fba7a2' }, h("th", { key: '3b34efab87ecdccd8f2cc06c1136a8114ecf8d4a' }, "First column"), h("th", { key: 'd78d93fb1136c0f83a04f1643a26860138a39169' }, "Second column"), h("th", { key: 'e22310513623eeed1b280e4fe037ad3c8e9262e2' }, "Third column"), h("th", { key: 'a493a1e2cd934dfb0a24c44cf3c09b060000e1f6' }, "Final column"))), h("tbody", { key: 'ace6aaea1f792a15598b058f72cbe64612860c74' }, h("tr", { key: '404b84eb1608941d6a856bc0309317381e782c73' }, h("td", { key: '3f59cf25fa455696cd5efa687beb82411396124e' }, "Data"), h("td", { key: '37a5fa53a2d0f465af1cc57669be2260194c3c93' }, "Data"), h("td", { key: '9c977f757fd8a4f81d89862f696c67c77806bb2f' }, "Data"), h("td", { key: 'c2a2be1f210cfec23488edc8380fb42812280088' }, "Data")), h("tr", { key: '5dee259d3fa0f791cced8045f1da9c33156ba860' }, h("td", { key: '01d0f7b7fb2da8fc87809952d6a8ec38e3980ef3' }, "Data"), h("td", { key: '654925e4270205611325cb54c7bda0103abfa3b2' }, "Data"), h("td", { key: '4ede4e2e9d26079b359dbf6cea6bb052c61269bc' }, "Data"), h("td", { key: '98e68b8c597e10427eec2d9197017cf76d9c7c33' }, "Data")), h("tr", { key: 'e504558ff878e17a0f8060d3f21b3879d46da95e' }, h("td", { key: '70c3da29e5531deb818335254fe4a67708f3270b' }, "Data"), h("td", { key: 'eb31aa305a6a4641474792b99a6755fc1c2ac841' }, "Data"), h("td", { key: '52f590958f6545b73349bb581e5494dc4e65b5b3' }, "Data"), h("td", { key: '8ef03bb8bc384c1afbd3c77bd8bf825fdea9ec5f' }, "Data")), h("tr", { key: '7e24cc9688a32beb6a0e0556ca7432b56145815a' }, h("td", { key: '88b5cc785538e66c64ff5ce70a2ce6b905cbc074' }, "Data"), h("td", { key: '84140243866046c919253746ce1e6d9c63e1f718' }, "Data"), h("td", { key: '82757ba9656fda0e06c876683843bcecbaeb28bc' }, "Data"), h("td", { key: 'e73148bfae8609255baa6630984b6f28c1f7a1d9' }, "Data")))))));
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
