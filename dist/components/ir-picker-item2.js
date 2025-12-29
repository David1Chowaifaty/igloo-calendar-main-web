import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irPickerItemCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{box-sizing:border-box;display:block}:host([hidden]){display:none !important}.picker-item__container{all:unset;box-sizing:border-box;width:100%;color:var(--wa-color-text-normal);user-select:none;position:relative;display:flex;align-items:center;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch:inherit;font-size:inherit;font-family:inherit;font-optical-sizing:inherit;font-size-adjust:inherit;font-kerning:inherit;font-feature-settings:inherit;font-variation-settings:inherit;padding:0;padding:0.5em 1em 0.5em 0.25em !important;line-height:var(--wa-line-height-condensed);transition:fill var(--wa-transition-normal) var(--wa-transition-easing);cursor:pointer;gap:0.5rem;scroll-margin:0.25rem}.picker-item__content{display:flex;align-items:center;gap:0.5rem}.picker-item__container:hover{background-color:var(--wa-color-neutral-fill-normal);color:var(--wa-color-neutral-on-normal)}.picker-item__check{opacity:0}:host([active]) .picker-item__container{background-color:var(--wa-color-brand-fill-loud);color:var(--wa-color-brand-on-loud);opacity:1}:host([selected]) .picker-item__container{font-weight:600}:host([selected]) .picker-item__check{opacity:1}:host([aria-disabled='true']) .picker-item__container,.picker-item__container:disabled{cursor:not-allowed;opacity:0.5}";
const IrPickerItemStyle0 = irPickerItemCss;

const IrPickerItem = /*@__PURE__*/ proxyCustomElement(class IrPickerItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    value;
    label;
    disabled = false;
    active = false;
    selected = false;
    render() {
        return (h(Host, { key: '54e0dd711aee3ac78e7bd640a530b052074b1d89', role: "option", "aria-selected": this.selected ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false' }, h("button", { key: 'fa3c2bcff37f21f5dd66171c044f57972732b96c', class: `picker-item__container`, type: "button", tabindex: "-1", disabled: this.disabled, part: "base" }, h("wa-icon", { key: '4ed6450cb8b93ad250a2021aa399dbb9cf3d92f1', class: "picker-item__check", name: "check" }), h("div", { key: 'c54031ecbcd811500a91ab915162f8b1d12f17fb', class: "picker-item__content", part: "content" }, h("slot", { key: '96f6ee268382133dfda9192b7054e05f0c7cb6ef' })))));
    }
    static get style() { return IrPickerItemStyle0; }
}, [1, "ir-picker-item", {
        "value": [513],
        "label": [513],
        "disabled": [516],
        "active": [1540],
        "selected": [1540]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-picker-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPickerItem);
            }
            break;
    } });
}

export { IrPickerItem as I, defineCustomElement as d };

//# sourceMappingURL=ir-picker-item2.js.map