import { Host, h } from "@stencil/core";
import { booking } from "./_data";
export class IrTest2Cmp {
    invoiceRef;
    render() {
        return (h(Host, { key: 'e8b5db6ebc7dd3ef138a1ffead0e359318885ef9', style: { background: 'white' } }, h("ir-custom-button", { key: 'e7ea31e3257086e4dc9def2822ef638cb88cb86b', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: '81ffd28e3eab3ccd60e4e5e72f5923d11524a1b4', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '5ed0e5f4ed3ca510788fb5de5d691a41e813c392', style: { background: 'white' } }, h("table", { key: '2c5f4c27e70ac2fbb768da769d6e0a7de6a2c0f6', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'e7d64ed61197f4aafaa6f2cf19cd7f27f1878717' }, "This", h("code", { key: '29e3a95971ea50f8c97abbf876c9f7ad83a71ecb' }, "<caption>"), "describes the table"), h("thead", { key: 'f51cb5a402e9f4a7606552f240951954e7adebcb' }, h("tr", { key: '8d5782234f7daa9158bd6a9fe3b475800ac0510d' }, h("th", { key: 'cd85b3347924a3ed4e25eb8f19b93c65cb1dd29a' }, "First column"), h("th", { key: '0529a6f67bcb39ce7e05a1c583f644bf4eac2229' }, "Second column"), h("th", { key: '0b7d274a3a0af5e5fe159f2d2fc282e2113773c6' }, "Third column"), h("th", { key: 'a163ecc6fff50f2fcfc4329429d78492a47549d0' }, "Final column"))), h("tbody", { key: '4a20a47e32879cb4ff5e6d6b542eb5d1efecf779' }, h("tr", { key: 'c5880176a36294d5a05fde94526fd0e45fe22d13' }, h("td", { key: '647da60a4474498baf8a1bc25dd850ffea1f0760' }, "Data"), h("td", { key: '8cbbcc7e3873791ae6f4910ae25d209518c59294' }, "Data"), h("td", { key: '627d80ccc1b44db6b138cf3ec54ce8270b1020db' }, "Data"), h("td", { key: 'cc84ce0f63d780a3176f7768c83406240d787db5' }, "Data")), h("tr", { key: '77aeeb1d78195c83e1be2c4aaeb00384148d0d02' }, h("td", { key: '6563a383fddabc70eb7232d6e5fe7dc0ee207ddb' }, "Data"), h("td", { key: '413543c56ab99fa13f7b6d9f2d21b2e2b7ced7c4' }, "Data"), h("td", { key: '818b614f5c82e6ed350e521a6ab316e9546c1600' }, "Data"), h("td", { key: '81cc18d86788f8d6da00d572ad961ba6e51fad10' }, "Data")), h("tr", { key: 'b9ea037552957820e31d3f63cfc750b867d1a6b1' }, h("td", { key: '781d83326364706dda1072853e89d6b3e3c5ae19' }, "Data"), h("td", { key: 'da6c55a7e8f1dea31d8429aa7910fcfd877f1f29' }, "Data"), h("td", { key: 'ffceb8eaa51cf954f66f39ecdd05ebbd35e7464f' }, "Data"), h("td", { key: 'cbd57f99c49c753705532511219aea8c29dfe69f' }, "Data")), h("tr", { key: 'c431bb182efb595c3da5cf010042814b4bf5a95f' }, h("td", { key: '24c15fdafc891e63b9588a59afeb724a5c94fbcb' }, "Data"), h("td", { key: '8d2e5d879eac11e49e8bea03423552a406afa05a' }, "Data"), h("td", { key: '35cb3da2772fd9b3fbfdac8d8a3a87f8f2a147d8' }, "Data"), h("td", { key: 'f308c20e79bc733662d3408c1d49b263d7028f32' }, "Data")))))));
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
