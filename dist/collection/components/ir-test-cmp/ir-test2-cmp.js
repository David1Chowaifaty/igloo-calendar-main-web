import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '8a35d73a3d46b1b28a40b1ff16704da04861a74f', style: { background: 'white' } }, h("ir-custom-button", { key: '2780d529e9abffe631325a54c7ca75de8b048a0b', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '6516b6c06f338759ac724b7ac3161799b5083f3b', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'f2cea20a6c72f66c740c95f081f348d0c2e024b0', style: { background: 'white' } }, h("table", { key: 'c43b4a63d2bec789a7a4eaf5764a5fff04c0da62', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'a60f783287ed8c2fb27fbd470a2819a653823734' }, "This", h("code", { key: 'ce32b9050f78ffa324b1b9ec803adc26367a74f1' }, "<caption>"), "describes the table"), h("thead", { key: 'c347bfd80b74e58ae4f934989d504892247b7121' }, h("tr", { key: 'd3f825f41c9e01f8a070456955e0f10b5922f170' }, h("th", { key: '4d9d412da6a354affdfd544055653303330a6231' }, "First column"), h("th", { key: '0e85c1dd91ff52057757993290124a1921fa82b7' }, "Second column"), h("th", { key: '3e900dc8bc6e87155684e40c6e2b815c1280dafc' }, "Third column"), h("th", { key: '4200fb0de059f2a7cf065c1cd3427c674bf2a198' }, "Final column"))), h("tbody", { key: '35c41d2063947f0242f7105b66212799d185a255' }, h("tr", { key: '83c69638febc8d91c121999dcfcabedd0995ab9b' }, h("td", { key: '29d2aafc945850bd6a8a9d4cbdecb6afd6272751' }, "Data"), h("td", { key: 'f349f9a383fbfb759bea31f6c5fcbb3d70deb2c7' }, "Data"), h("td", { key: '81d169b9ae395fcb56569efdfb26251a823e6c68' }, "Data"), h("td", { key: '035077266968d7f69a73718ef08ef8ce7ccef667' }, "Data")), h("tr", { key: 'f5a18d8485be30590f90ffe70e5f7dfec1acef9b' }, h("td", { key: '6c9a3c783d5a07c23a04c9d9668303f9bcf965d1' }, "Data"), h("td", { key: '0464680e4b7c2dfe0271a9a011b24b8f585b6616' }, "Data"), h("td", { key: '3d67bd7457305321f2d16af24448513eba543b23' }, "Data"), h("td", { key: '8599e70b1140b49a8095de2d3b6224e79e0fe9f7' }, "Data")), h("tr", { key: '43c153c49d6eb04f8a183e9fafb1ef2f0dfb63f3' }, h("td", { key: '1977f4c009eccd8c269ae00c77db7a7941cfa24e' }, "Data"), h("td", { key: '52655d5de8aa867199ed1204a1c06bb149c6a96f' }, "Data"), h("td", { key: 'a6ec1e13c96f69f69983645819d56c1e8b92f9c9' }, "Data"), h("td", { key: '899d0171d6c5c7c2e57c3078f9fda6cf2c8a97bd' }, "Data")), h("tr", { key: 'be32df22586485d32a84898c9aecfec189901d0b' }, h("td", { key: '75e6ced5384d4a3c2b39792ab81291f5524ac586' }, "Data"), h("td", { key: '6152262be2dfcf740ad7ba6068cf54ff035b6467' }, "Data"), h("td", { key: '32bdf218b5ee320c7c0528d2649bd4e37f85baa5' }, "Data"), h("td", { key: '291144b44752922f14ec525c9453421eb70d5042' }, "Data")))))));
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
