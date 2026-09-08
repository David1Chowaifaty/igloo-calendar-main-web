import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '3addb450d1c584128e1895eccac83c9b9eb85945', style: { background: 'white' } }, h("ir-custom-button", { key: '5e64370a2aa80293f1913fbc411d563d482c8b78', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '1c1de07fa28ea2261ef69990a2170740f199698b', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'a24a041398f18bb5388e89ca2f23ecac20e95d51', style: { background: 'white' } }, h("table", { key: 'caa5ed392fb7a5ce4b2eda4531129ac368449c1f', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'bcb2a81e8aaacc90c7c7643d20461657fcdc0d7a' }, "This", h("code", { key: '9d47f50f2d7665c1da18f6728e942c0d6f32f26e' }, "<caption>"), "describes the table"), h("thead", { key: '17b75ce05feb0771eb471bbf3deca21ab5ccbe1d' }, h("tr", { key: 'bec2cd9563880a78996b7ff87d9424bcf88dcd03' }, h("th", { key: 'd9efe2d1506f82efdc9a2c8d3606e006c59e47a6' }, "First column"), h("th", { key: '4a48eeb47464d5293fe949bbbd608398b603f446' }, "Second column"), h("th", { key: '9a8fe244e8f74728eaa84a67e7d64bc8255419f7' }, "Third column"), h("th", { key: '4e7196d1f20961fdb16096abf8241406069a0be8' }, "Final column"))), h("tbody", { key: 'c4ffbc310d1e7e3ed45ab237f4c7316b8c7b5706' }, h("tr", { key: '318791d5de3cef4b06be68e00cd69ff92b7a309c' }, h("td", { key: 'f02af8feeb10bb35e224921a1d6f98950291aa33' }, "Data"), h("td", { key: '2edb14e8cbdd27858d7a65a4eb60c8d69481dbfa' }, "Data"), h("td", { key: '15702b9ec48f76dac545710fadcb6c506bf7c5c5' }, "Data"), h("td", { key: '8e71b993191920deecd0de5559f9902bb758dec2' }, "Data")), h("tr", { key: '01357eb22f7a811714416e6d847aa3dc0ec63b8d' }, h("td", { key: 'bb0395090b21d90250ee83cbbe6ddf0b7b8f2037' }, "Data"), h("td", { key: 'bc88b624322b2c53d96549cac009f0a673b3bbb2' }, "Data"), h("td", { key: '1b3d4580aa805a0da1392e83d6fcac2e42425f88' }, "Data"), h("td", { key: '7c8a65d739d66ae4e6400f13b8c2c0196ca450f5' }, "Data")), h("tr", { key: '0dcd3d07cd96829c1fa219052e7471067e3638af' }, h("td", { key: '7d1cacf5deed108024b39b407bbb41e3645cf350' }, "Data"), h("td", { key: '666c8ab48c422ac241fe1e8eb7f6a64fb812d3b5' }, "Data"), h("td", { key: 'bd4ac948a4c3e9d3b4a6af69a1e79e644d567fe7' }, "Data"), h("td", { key: '04081ffb4de15ff9b45ead8be02b18037a9e8fc4' }, "Data")), h("tr", { key: '73afb6e213dc2806a963d7ef9a4f68a7eac6256e' }, h("td", { key: 'bacc0a7c0ffbaee0647b9fc6a4b4bae5811d1df5' }, "Data"), h("td", { key: '39c7ecd18065fec70c6c66bb8f0bac2fa7b1ae19' }, "Data"), h("td", { key: '4aca3d6d394bd8f90331c58985a504650bd1c866' }, "Data"), h("td", { key: 'ede000a17d646a56619eb5322a07c923effded6c' }, "Data")))))));
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
