import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '51e9e9f6bc98d6f51e978b0961888b7b52ce544a', style: { background: 'white' } }, h("ir-custom-button", { key: '0ec923f7ba76d5dc6d8fad2ede6854fa1b435532', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'e732e94185cfebc5b4462920f978e08b3ba457db', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '223bfe25f68f0eab91518e9a311510f2a092ebd7', style: { background: 'white' } }, h("table", { key: 'f61fd2f9e8f3efd1e26516d31bd561a4f3336e1c', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'e27cc4f6db5fa54f9345935ee16ab67d98173f9e' }, "This", h("code", { key: '01c504a53863e6ec22d5087fe3c659eecc152dcd' }, "<caption>"), "describes the table"), h("thead", { key: 'd6b230714654514d6715a70caf01db4f4c41e538' }, h("tr", { key: '84faac7b3f06f492192d6328791d46906268a08a' }, h("th", { key: 'e9e97479fef2dbf3fdeae8eed7f5e5d4f5e01c4a' }, "First column"), h("th", { key: '28a81f5ba8c5b5550fb2bf904e42a8051d16a071' }, "Second column"), h("th", { key: '01fc61a64bf478bb5918cc87aeabb4cda9944e10' }, "Third column"), h("th", { key: 'b28b68b31ad8958ffc9703284bfc4ca9eb3d2ead' }, "Final column"))), h("tbody", { key: '018bbe58641ef9c2f34a32cc1afbbafe64ec3ab6' }, h("tr", { key: 'f46016c8fb495254d29562b459eef0a2a7726fd4' }, h("td", { key: '2128f4faca75cd51e1f9a0723a41766a22f65f54' }, "Data"), h("td", { key: 'dedf285957846f34c599e4f90220444376564ccd' }, "Data"), h("td", { key: 'ac67f981c40aa8ace8716b86f2e82b14ad8c5aaf' }, "Data"), h("td", { key: '1882f8d8d00d5610d290aab0a1d1187b18de2098' }, "Data")), h("tr", { key: 'a4c31cedcce52da039d5b1f682c37d197d2f4809' }, h("td", { key: 'b69458293fa63a83e02f98bf5b1ea1a5530ab93c' }, "Data"), h("td", { key: '236766cfc3027974b3c358cac5b2a2d11e94d4fd' }, "Data"), h("td", { key: '7b7e8eee929c86e62fee4a1c8833aaedec31da1f' }, "Data"), h("td", { key: 'fdfc54f1e65faad75484bd085bcbf73eaadc8225' }, "Data")), h("tr", { key: '94822e04250251f8dad270ebab176aaf2ed2c65a' }, h("td", { key: '48e8e3086a0f6c6bcc088f6229c73e311b8b094f' }, "Data"), h("td", { key: '4b228b351e62a00b3ea45ab55409173f2eb8c32b' }, "Data"), h("td", { key: 'f0b7fddc6503eef1a423b5697b292e28495b6b80' }, "Data"), h("td", { key: '23717d2dfee8388c8c9f8d91702469e705e178f9' }, "Data")), h("tr", { key: 'a15e1740503e4a2ad39393c4e7bff7f152f01be1' }, h("td", { key: '90ac95bad52f1185dd349b280e90a5d42301e6b7' }, "Data"), h("td", { key: 'e46ebaee597e785f642d815444c06d5821382994' }, "Data"), h("td", { key: '89cb4222c695057dc5b77308ce3e8a3c23593b48' }, "Data"), h("td", { key: '0d07eb406e0142991a5ba67666c3e3e743ff1077' }, "Data")))))));
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
