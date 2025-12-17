import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irGuestNameCellCss = ".sc-ir-guest-name-cell-h{box-sizing:border-box !important}.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell,.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell::before,.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-guest-name-cell{display:none !important}.sc-ir-guest-name-cell-h{display:block;font-size:0.93rem}";
const IrGuestNameCellStyle0 = irGuestNameCellCss;

const IrGuestNameCell = /*@__PURE__*/ proxyCustomElement(class IrGuestNameCell extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    name;
    render() {
        return (h(Host, { key: '59b09358ccdd86a4904973dc657b5385253e6953' }, this.name.first_name, " ", this.name.last_name));
    }
    static get style() { return IrGuestNameCellStyle0; }
}, [2, "ir-guest-name-cell", {
        "name": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-guest-name-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-guest-name-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrGuestNameCell);
            }
            break;
    } });
}

export { IrGuestNameCell as I, defineCustomElement as d };

//# sourceMappingURL=ir-guest-name-cell2.js.map