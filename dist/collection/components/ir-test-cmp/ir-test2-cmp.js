import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '4a9f1da50257bfd3ca5a52cb9876954e140c65b8', style: { background: 'white' } }, h("ir-custom-button", { key: '0b9fb9f55d25e414e0fcae8812b3ddfc9e12f1ca', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'f5365ce39dbbc4fb0b26325e84094c31b7735e18', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '75fc6c59b73516bf259181b4a3c773abe25132d0', style: { background: 'white' } }, h("table", { key: '81a24d1210fe791937a59b8c2f24362aeb31d382', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'ce06576e02336786f4dd1f3cd0c2e317fae6e169' }, "This", h("code", { key: 'e36115e091b2e2c33b1d04a1320833bf2365443c' }, "<caption>"), "describes the table"), h("thead", { key: 'b73dfe763070be2c32c394baf9a5087706a62109' }, h("tr", { key: 'ffdb897a8335f714890235a473cd8dbb3148a8de' }, h("th", { key: '2e670b4555ccd8ca12483ff621973f3597d3106e' }, "First column"), h("th", { key: '0e1e4345c4d5f18b82368a0f4def0a0057bb2725' }, "Second column"), h("th", { key: 'c9ca523d00112fde17e27f42f6b2966642bcbe67' }, "Third column"), h("th", { key: 'e7b01611d0ffb45f0b9468e2d0087f975a2fbf0a' }, "Final column"))), h("tbody", { key: '2b5f965d058c52206c5d4e6deb1da8eb21ba6653' }, h("tr", { key: '2d543f58af96cdfd0c9345c178c990e52b3e3a61' }, h("td", { key: 'b6f854f81bdf063e57b167587f94b1f9a171e814' }, "Data"), h("td", { key: '50b8688bea9a721c73de80d629b9b017f5055d62' }, "Data"), h("td", { key: '23de8fd833821ee9505831478ff9e8c0d49a7485' }, "Data"), h("td", { key: 'fa71583720e82bf8b728c92dae50bd2fe5a65f23' }, "Data")), h("tr", { key: '80f0bf9eefa94d68fe9ca8acfbb8112f8464c843' }, h("td", { key: '431e295af359047ac5e75c5882892317a374cf7b' }, "Data"), h("td", { key: '6ea95bbb3291db33de8c96cdac616a78038928d9' }, "Data"), h("td", { key: '44d33ab01f759c75046adbe7e973f91a017c4aa0' }, "Data"), h("td", { key: '55d5c120dcd9f5880e07515be9085b903b802bb5' }, "Data")), h("tr", { key: 'b399f4a90b68a2e2e86cf941feb26509d78bfa90' }, h("td", { key: '86fe7257f8a1a0529d660e050d08524e441c8172' }, "Data"), h("td", { key: '48f18c7b52d9aeb1714138d7806b9fb0b2a01696' }, "Data"), h("td", { key: '82eb3d8f65c4641be795873779b0c02027473bd4' }, "Data"), h("td", { key: '8ebbe6b6e3223cc69d0930c9b3b107c917a459b5' }, "Data")), h("tr", { key: '8c2e4ab1185b62603fedecffe9e22c3af6af32fa' }, h("td", { key: '0a6eef459fc4ddfbe0a0145de4f8fae70b5dbfd6' }, "Data"), h("td", { key: 'aa44cdd2a5f61df04ba370c932a65f78de8fcf3f' }, "Data"), h("td", { key: '739617bc3b45901351268ba30c68492b39a8c196' }, "Data"), h("td", { key: '5466db8bd32c3e3d7a04524ca071994eb8e097e5' }, "Data")))))));
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
