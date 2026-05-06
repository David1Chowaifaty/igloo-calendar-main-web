import { Host, h } from "@stencil/core";
export class IrNewBadge {
    render() {
        return (h(Host, { key: '2f2fdb6e7ad9622ed6569e11cceffb7815378c58' }, h("span", { key: '5109b25161204c177e7942c926e715363078bc56', class: "new-badge" }, "new")));
    }
    static get is() { return "ir-new-badge"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-new-badge.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-new-badge.css"]
        };
    }
}
//# sourceMappingURL=ir-new-badge.js.map
