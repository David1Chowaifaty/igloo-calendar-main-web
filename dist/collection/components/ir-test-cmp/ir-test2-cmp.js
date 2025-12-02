import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: '1751c1bd38aaf52e3d1c3d9ae20e9f5bd38956a9', style: { background: 'white' } }, h("ir-custom-button", { key: '9122e12a3276e8b614e75d85da711585dc9cbd31', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '601e7c718d4967910fd6ff6cf3d980bf9d76de21', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: 'c917288811a768fd04d0fdacd7a1a3afe5ddd789', style: { background: 'white' } }, h("table", { key: '6063fc5d37bfe6c1660c3436837c1d98975f0f7a', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'e47caeff89fded4cc99ac8be93133d0c1114298d' }, "This", h("code", { key: '5a83547bb9fe287779e321cf34cca0e87fe6ee88' }, "<caption>"), "describes the table"), h("thead", { key: '4048a3ace22c97b865cc49400c842e498a30dc46' }, h("tr", { key: '440dae71f77b13082c55ffa17578acd65a391cef' }, h("th", { key: '287c88018e3e1f6db3ee15f8f43554d4ae6e29cb' }, "First column"), h("th", { key: '2864c8a0eac5a997d2eaab353162ee6c9114d7b1' }, "Second column"), h("th", { key: '4affe4ebfa447d995e060f6e177723f9021799f3' }, "Third column"), h("th", { key: '6a645de48ed44cc627517e7745497d91ce4b6a8b' }, "Final column"))), h("tbody", { key: '4f92189cda34485f24ec3dd23367efced34aaeeb' }, h("tr", { key: '5175bac1c3bc92ecb9ff9faac556ce3fd1ab8107' }, h("td", { key: '833b1da811085dd1d362253e81ba7c30e1f4b088' }, "Data"), h("td", { key: '198be26fab464dd1c962ccc38b385f949eb8b128' }, "Data"), h("td", { key: 'f1d2889b953069c2a57d4ad34bca375bc44e761a' }, "Data"), h("td", { key: '67e000fc56097840fb4500405c9e55c30da96bd3' }, "Data")), h("tr", { key: '2ff5f865a0b73ed24bf09f08cea52d80d64ab6fa' }, h("td", { key: '6d42997a32bfe8cc6be30cb316c1d4203bc69c29' }, "Data"), h("td", { key: '39d6ba8a7d599adf76666a278aab4fd7ee86c5ca' }, "Data"), h("td", { key: '3980c874ee2566bafa0b2e20b86587de9d376982' }, "Data"), h("td", { key: 'be12fa9d0b81d21124eb355a366f034bf29f3e57' }, "Data")), h("tr", { key: '98ca5e2e35adfa302f8da56b4e85efcb790c8e5d' }, h("td", { key: 'e3827cccc606c3d1b5007455fe160f55efd995c4' }, "Data"), h("td", { key: '5ba0bf854bfdaeafef4f47e85ed0c74103a13a20' }, "Data"), h("td", { key: '73ecfddb3eba009fed9f1140aee07f1c1dd06396' }, "Data"), h("td", { key: 'e09d516aae43f482f2a6b4dedf504983cd0811b6' }, "Data")), h("tr", { key: 'c125e7e3221e0526c7b11e112594fb83d35fdc46' }, h("td", { key: '1604d1313f3c5938c84ac0c330f0d5c616bdc226' }, "Data"), h("td", { key: '5aec7e66697719fd5ce472abab51284808ca1527' }, "Data"), h("td", { key: 'd4aec18fe65ce75ec4231c0b53c2d455402069e0' }, "Data"), h("td", { key: 'f3602c3f19b0ff554e65d2503eda9b974f87b495' }, "Data")))))));
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
