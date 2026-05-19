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
        return (h("header", { key: '391d9b6efbdc02561590a69ba6b5ce7c2abb5871', class: "tasks-header" }, h("div", { key: '3f628109388c260c9a93eb60c7189c99592ad0fc', class: "tasks-header__inner" }, h("div", { key: '16dcc9dd5f67bbc2ab46c87ce2fa5ab9ed81d68e', class: "tasks-header__brand" }, h("img", { key: '83393c1a6ba7238f324284029ac5dc32da897494', class: "tasks-header__logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "IglooRooms logo" }), h("span", { key: '0aaf1e1f7421db2751cebe66d5c3012033f17c26', class: "tasks-header__name" }, this.connectedHK.NAME)), h("div", { key: '1a925e0adb4e0f3c235d4566b06f0758440dcc29', class: "tasks-header__actions" }, h("wa-select", { key: 'b398b8f5dc10ac2d4bf47a73a4bd895ee16bd073', onchange: this.handleWaChange, defaultValue: this.language, value: this.language, size: "small" }, LANGUAGE_OPTIONS.map(opt => (h("wa-option", { key: opt.value, value: opt.value }, opt.label)))), h("ir-custom-button", { key: 'feace3565ab8bc485632ff648487c4c447e56bce', onClick: () => (window.location.href = 'Logout.aspx'), variant: "danger", appearance: "plain" }, h("wa-icon", { key: '0f2dd8acb643fda69c5c479c2ab536a1b3589425', name: "arrow-right-from-bracket", style: { fontSize: '1.2rem' } }))))));
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