import { Host, h } from "@stencil/core";
export class IrNewBadge {
    render() {
        return (h(Host, { key: '4a2a3441fcdcd402efb682c1d9001bff73dc4068' }, h("span", { key: 'f0dfb296b46fa4ad9024ee2fb2457cc4688df61d', class: "new-badge" }, "new")));
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
