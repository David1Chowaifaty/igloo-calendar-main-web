import { Host, h } from "@stencil/core";
export class IrPropertySwitcher {
    render() {
        return h(Host, { key: '21dfdf86f05a255c61d11459f22ae6ad5ea2c580' }, "hello");
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
