import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-custom-button2.js';

const irHkStaffTasksHeaderCss = ".sc-ir-hk-staff-tasks-header-h{display:block}.tasks-header.sc-ir-hk-staff-tasks-header{position:sticky;top:0;z-index:10;background-color:var(--wa-color-surface-default);border-bottom:1px solid var(--wa-color-surface-border)}.tasks-header__inner.sc-ir-hk-staff-tasks-header{display:flex;align-items:center;justify-content:space-between;gap:0.75rem;height:3.5rem;padding:0 1rem}.tasks-header__brand.sc-ir-hk-staff-tasks-header{display:flex;flex-direction:column;gap:0.125rem;min-width:0}.tasks-header__logo.sc-ir-hk-staff-tasks-header{height:1.25rem;width:auto}.tasks-header__name.sc-ir-hk-staff-tasks-header{font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tasks-header__actions.sc-ir-hk-staff-tasks-header{display:flex;align-items:center;gap:1rem;flex-shrink:0}.tasks-header__actions.sc-ir-hk-staff-tasks-header wa-select.sc-ir-hk-staff-tasks-header{max-width:65px}.tasks-header__actions.sc-ir-hk-staff-tasks-header ir-custom-button.sc-ir-hk-staff-tasks-header{font-size:1rem}@media (min-width: 640px){.tasks-header__inner.sc-ir-hk-staff-tasks-header{height:4rem;padding:0 1.5rem}.tasks-header__logo.sc-ir-hk-staff-tasks-header{height:1.5rem}.tasks-header__name.sc-ir-hk-staff-tasks-header{font-size:var(--wa-font-size-s)}}@media (min-width: 1024px){.tasks-header__inner.sc-ir-hk-staff-tasks-header{padding:0 2rem}}";
const IrHkStaffTasksHeaderStyle0 = irHkStaffTasksHeaderCss;

const IrHkStaffTasksHeader = /*@__PURE__*/ proxyCustomElement(class IrHkStaffTasksHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    connectedHK;
    render() {
        return (h("header", { key: '4eae48d5f279b6f439c06c682df7df8061cb0775', class: "tasks-header" }, h("div", { key: '42234194ebfd760eb28babe877c53b09d2dca093', class: "tasks-header__inner" }, h("div", { key: '591a1b0db09b7f1abf2f2018c255959e5959af5e', class: "tasks-header__brand" }, h("img", { key: '815cb2e0c9e7b0428681eea6579a3f33cbe88577', class: "tasks-header__logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "IglooRooms logo" }), h("span", { key: '21c0196364f3afd64d4785cbf50f94a2226f1381', class: "tasks-header__name" }, this.connectedHK.NAME)), h("div", { key: 'f143f220cb698fe5db6d6d2c11b4e976d3c03283', class: "tasks-header__actions" }, h("wa-select", { key: '21b28afe252ef16a71a9165c652657a5bd760e57', size: "small", defaultValue: 'en' }, h("wa-option", { key: 'c192258623daefe3ad139f23fabaff0c92dcc666', value: "en" }, "En"), h("wa-option", { key: '86302416d76bde930a15fc9e36c0af90910df841', value: "ar" }, "Ar"), h("wa-option", { key: '6c2fa72fabd886e5347517fb353b5e2deadc0fe5', value: "el" }, "El")), h("ir-custom-button", { key: 'cf2cf6112e0db0e5bdea5d1e700ea43b11b973cc', variant: "danger", appearance: "plain" }, h("wa-icon", { key: 'a1821eeca9a79180087f309acf46b0b625232341', name: "arrow-right-from-bracket", style: { fontSize: '1.2rem' } }))))));
    }
    static get style() { return IrHkStaffTasksHeaderStyle0; }
}, [2, "ir-hk-staff-tasks-header", {
        "connectedHK": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-hk-staff-tasks-header", "ir-custom-button"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-hk-staff-tasks-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrHkStaffTasksHeader);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrHkStaffTasksHeader as I, defineCustomElement as d };

//# sourceMappingURL=ir-hk-staff-tasks-header2.js.map