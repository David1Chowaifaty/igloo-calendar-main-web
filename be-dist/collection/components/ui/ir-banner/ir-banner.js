import { h } from "@stencil/core";
export class IrBanner {
    render() {
        return h("div", { key: '2a7435ed71ec1cf441819e0cdbfcaeea00bebf57', class: "banner" });
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
