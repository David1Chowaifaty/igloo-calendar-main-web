import { Host, h } from "@stencil/core";
export class IrNewBadge {
    render() {
        return (h(Host, { key: 'e8814838b48336131e24d27a597322dd57a8d321' }, h("span", { key: 'b5bef436c178ee58b92cde0412f2a8165af6c468', class: "new-badge" }, "new")));
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
