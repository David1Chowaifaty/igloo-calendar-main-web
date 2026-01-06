import { Host, h } from "@stencil/core";
export class IrNewBadge {
    render() {
        return (h(Host, { key: 'd6afaa30ac934a44de7d7a8e44762955a3a3052e' }, h("span", { key: '3e6b63741ec5c2b05c3fc38614a8f57b87fb2659', class: "new-badge" }, "new")));
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
