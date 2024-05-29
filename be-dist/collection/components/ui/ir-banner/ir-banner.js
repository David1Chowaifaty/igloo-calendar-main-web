import { h } from "@stencil/core";
export class IrBanner {
    render() {
        return h("div", { key: '4b71aff85eaac81ecdcf414da786f06f06abaa8e', class: "banner" });
    }
    static get is() { return "ir-banner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-banner.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-banner.css"]
        };
    }
}
//# sourceMappingURL=ir-banner.js.map
