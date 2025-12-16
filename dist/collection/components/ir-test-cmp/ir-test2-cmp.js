import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '85c3ef03f9389bdd96e5ab8922b07089f5d77827', style: { background: 'white' } }, h("ir-custom-button", { key: 'a37467c23a3420084384e6c8fa58dba2367b19e4', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'f1dc9dc6eaadd08a8c0004aa4b987e9d20db6237', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '09c125a598b4b51ae6499858140babe8be278979', style: { background: 'white' } }, h("table", { key: '78b49c1b301f82d1a753efddc74235987d83da43', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: '38fbe95c05ac0e95b01fd581ea4585236ce4e184' }, "This", h("code", { key: 'b996156dbaaed9609df9f2d83cdf8b04d777de3d' }, "<caption>"), "describes the table"), h("thead", { key: 'ca1028da9e1c34d27176b3976947cde250c06479' }, h("tr", { key: '6a981fb9089afad007c0c562d549df220c5abb27' }, h("th", { key: '0741d1ac12d398a2e200fedd4011d149650394a6' }, "First column"), h("th", { key: '2b31c4dc5487aca02f4673876a841b3c74b038f7' }, "Second column"), h("th", { key: '0bda214e47ea43403c6342f9eb61c0321cfcec60' }, "Third column"), h("th", { key: '6e181d845aaffcf8bdf25c3d5dc3a60edcd18ad7' }, "Final column"))), h("tbody", { key: '752e448869801f7b82d28ab14bcf20c774ea3a1e' }, h("tr", { key: '057e4ee72666b5a0d2a7683eda28cc7053d4ab5d' }, h("td", { key: '829254a6862d0012700196f92ed75f85bb5031d6' }, "Data"), h("td", { key: '0901a12d93428ff61c003ad6dc65aaf22c6c5540' }, "Data"), h("td", { key: '3aa90e1694826ec762c36c12cc81fa50925418ed' }, "Data"), h("td", { key: '177266378b749a36b24b5041dd43ac265c8a7b4a' }, "Data")), h("tr", { key: '3527ac08836899df8c1836c146a3c82e676d7c24' }, h("td", { key: '0ac7e807f378cb63c0cbbf280275d14fd045a515' }, "Data"), h("td", { key: '994a36699b582fc2f246ffe0f3c27811a03de5b0' }, "Data"), h("td", { key: '6a8b601c30544d6f008aad1b6fa772883c9fe9b5' }, "Data"), h("td", { key: '94a67532a9a841f02788504a8e423e3f86957d50' }, "Data")), h("tr", { key: 'b8ddcc7b92875bf23654735b9a190d9ebcaac07b' }, h("td", { key: 'dd8f04b08bb9b018fd07e27382f59184d5bc51be' }, "Data"), h("td", { key: 'f171ca3ba033b836d64769dacc80d7ec7fcabc44' }, "Data"), h("td", { key: '4099ce80a7f4a0cb854fa0c104b3322fdb29016a' }, "Data"), h("td", { key: 'fa04913eb5f4adef8d4683b78d532abf9535ec61' }, "Data")), h("tr", { key: '7c6a46192a9f02bea2fe3ec45e6cb5d154fb11fa' }, h("td", { key: '1b1bb9efbb1e8d02440c55d5813f10b3ee45fa3f' }, "Data"), h("td", { key: '3b5bee41078818a53e82aaf651202c80884d9198' }, "Data"), h("td", { key: '8cd91d8e95890a395b28599e8c111342e500dd35' }, "Data"), h("td", { key: 'dc5037f810c485920d4983f2df699675452fa325' }, "Data")))))));
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
