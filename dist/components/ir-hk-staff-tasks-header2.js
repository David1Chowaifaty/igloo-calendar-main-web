import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-custom-button2.js';

const irHkStaffTasksHeaderCss = ".sc-ir-hk-staff-tasks-header-h{display:block}.tasks-header.sc-ir-hk-staff-tasks-header{position:sticky;top:0;z-index:10;background-color:var(--wa-color-surface-default);border-bottom:1px solid var(--wa-color-surface-border)}.tasks-header__inner.sc-ir-hk-staff-tasks-header{display:flex;align-items:center;justify-content:space-between;gap:0.75rem;height:3.5rem;padding:0 1rem}.tasks-header__brand.sc-ir-hk-staff-tasks-header{display:flex;flex-direction:column;gap:0.125rem;min-width:0}.tasks-header__logo.sc-ir-hk-staff-tasks-header{height:1.25rem;width:auto}.tasks-header__name.sc-ir-hk-staff-tasks-header{font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tasks-header__actions.sc-ir-hk-staff-tasks-header{display:flex;align-items:center;gap:1rem;flex-shrink:0}.tasks-header__actions.sc-ir-hk-staff-tasks-header wa-select.sc-ir-hk-staff-tasks-header{max-width:65px}.tasks-header__actions.sc-ir-hk-staff-tasks-header ir-custom-button.sc-ir-hk-staff-tasks-header{font-size:1rem}@media (min-width: 640px){.tasks-header__inner.sc-ir-hk-staff-tasks-header{height:4rem;padding:0 1.5rem}.tasks-header__logo.sc-ir-hk-staff-tasks-header{height:1.5rem}.tasks-header__name.sc-ir-hk-staff-tasks-header{font-size:var(--wa-font-size-s)}}@media (min-width: 1024px){.tasks-header__inner.sc-ir-hk-staff-tasks-header{padding:0 2rem}}";
const IrHkStaffTasksHeaderStyle0 = irHkStaffTasksHeaderCss;

const IrHkStaffTasksHeader = /*@__PURE__*/ proxyCustomElement(class IrHkStaffTasksHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h("header", { key: '6f794243f3a4059a6ffca74e013ebeee2576b555', class: "tasks-header" }, h("div", { key: '6a387035abbe98582544653d7205ab80ac0921dd', class: "tasks-header__inner" }, h("div", { key: '7212635be5127bf02bb6ca53307f0d4e730b0028', class: "tasks-header__brand" }, h("img", { key: '94c2a21ac4db85a7fb0020e5c3eed38d48086474', class: "tasks-header__logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "IglooRooms logo" }), h("span", { key: 'f3a4bf539992a120fae054e0c66e781f8f1e38f7', class: "tasks-header__name" }, "Housekeeper name")), h("div", { key: '0c71b0320a024d9c8be7f144c7ea52fe6a5919e5', class: "tasks-header__actions" }, h("wa-select", { key: 'ac21bd6ca75ea9624fd8e804029bde08eec059f6', size: "small", defaultValue: 'en' }, h("wa-option", { key: 'd245d7f5c615966f7265ebdebf2322025af20fbd', value: "en" }, "En"), h("wa-option", { key: '6bc6c99b8cea81b186c0a81e4bee076ff371ae53', value: "ar" }, "Ar"), h("wa-option", { key: '19079faca2a603dcb6f1fee692627d8ae37f641f', value: "el" }, "El")), h("ir-custom-button", { key: '8606ef6ddc4e037243e3cebf8f4d7b32bd0e402e', variant: "danger", appearance: "plain" }, h("wa-icon", { key: '7732bf3ba12b0ef9d5dd2a6e32cf09ac2420341f', name: "arrow-right-from-bracket", style: { fontSize: '1.2rem' } }))))));
    }
    static get style() { return IrHkStaffTasksHeaderStyle0; }
}, [2, "ir-hk-staff-tasks-header"]);
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