import { Host, h } from "@stencil/core";
export class IrNewBadge {
    render() {
        return (h(Host, { key: 'be7e76b51f3efb2868b281ec9f06929eef102dd8' }, h("span", { key: 'ccf87ed94558fea2288c974902df92723d894ab9', class: "new-badge" }, "new")));
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
