import { Host, h } from "@stencil/core";
export class IrPropertySwitcher {
    render() {
        return h(Host, { key: 'f19e7ea6b67b2c4687e477808a7353beda75ae99' }, "hello");
    }
    static get is() { return "ir-property-switcher"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-property-switcher.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-property-switcher.css"]
        };
    }
}
//# sourceMappingURL=ir-property-switcher.js.map
