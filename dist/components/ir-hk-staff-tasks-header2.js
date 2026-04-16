import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-custom-button2.js';

const irHkStaffTasksHeaderCss = ".sc-ir-hk-staff-tasks-header-h{display:block}.tasks-header.sc-ir-hk-staff-tasks-header{position:sticky;top:0;z-index:10;background-color:var(--wa-color-surface-default);border-bottom:1px solid var(--wa-color-surface-border)}.tasks-header__inner.sc-ir-hk-staff-tasks-header{display:flex;align-items:center;justify-content:space-between;gap:0.75rem;height:3.5rem;padding:0 1rem}.tasks-header__brand.sc-ir-hk-staff-tasks-header{display:flex;flex-direction:column;gap:0.125rem;min-width:0}.tasks-header__logo.sc-ir-hk-staff-tasks-header{height:1.25rem;width:auto}.tasks-header__name.sc-ir-hk-staff-tasks-header{font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tasks-header__actions.sc-ir-hk-staff-tasks-header{display:flex;align-items:center;gap:1rem;flex-shrink:0}.tasks-header__actions.sc-ir-hk-staff-tasks-header wa-select.sc-ir-hk-staff-tasks-header{max-width:70px}.tasks-header__actions.sc-ir-hk-staff-tasks-header ir-custom-button.sc-ir-hk-staff-tasks-header{font-size:1rem}@media (min-width: 640px){.tasks-header__inner.sc-ir-hk-staff-tasks-header{height:4rem;padding:0 1.5rem}.tasks-header__logo.sc-ir-hk-staff-tasks-header{height:1.5rem}.tasks-header__name.sc-ir-hk-staff-tasks-header{font-size:var(--wa-font-size-s)}}@media (min-width: 1024px){.tasks-header__inner.sc-ir-hk-staff-tasks-header{padding:0 2rem}}";
const IrHkStaffTasksHeaderStyle0 = irHkStaffTasksHeaderCss;

const LANGUAGE_OPTIONS = [
    { value: 'en', label: 'EN' },
    { value: 'ar', label: 'AR' },
    { value: 'el', label: 'EL' },
];
const IrHkStaffTasksHeader = /*@__PURE__*/ proxyCustomElement(class IrHkStaffTasksHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.languageChanged = createEvent(this, "languageChanged", 7);
    }
    connectedHK;
    language = 'en';
    languageChanged;
    handleWaChange = (e) => {
        const lang = e.target.value;
        this.languageChanged.emit(lang);
    };
    render() {
        return (h("header", { key: '27f962aa9dd115f220de74c0c6871d53794add6a', class: "tasks-header" }, h("div", { key: 'a6d2efa9fd358ef1a77be1df9b18d446f336747b', class: "tasks-header__inner" }, h("div", { key: 'd62c5d6591a76cb4a68b6b7af1e6798d41b85db9', class: "tasks-header__brand" }, h("img", { key: '31bb4f0de290c724f472fcdfcafff9e2a6c78672', class: "tasks-header__logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "IglooRooms logo" }), h("span", { key: '8d2a28eebf143621ef1b9aa75294bf0960f330c1', class: "tasks-header__name" }, this.connectedHK.NAME)), h("div", { key: '836630a77324f22701cba9d1b9ec3b3f9254430a', class: "tasks-header__actions" }, h("wa-select", { key: '50603aa01540e05d8c1975d0ba5f0df61b72d76d', onchange: this.handleWaChange, defaultValue: this.language, value: this.language, size: "small" }, LANGUAGE_OPTIONS.map(opt => (h("wa-option", { key: opt.value, value: opt.value }, opt.label)))), h("ir-custom-button", { key: 'e7cdae14e17a581ddb3ad5c81cda56b3b07a4502', onClick: () => (window.location.href = 'Logout.aspx'), variant: "danger", appearance: "plain" }, h("wa-icon", { key: 'd7e98396ed2e0d3c5978289153ed8cdf4472662f', name: "arrow-right-from-bracket", style: { fontSize: '1.2rem' } }))))));
    }
    static get style() { return IrHkStaffTasksHeaderStyle0; }
}, [2, "ir-hk-staff-tasks-header", {
        "connectedHK": [16],
        "language": [1]
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