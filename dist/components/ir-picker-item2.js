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
        return (h(Host, { key: '2e6ab804cc9fd60608e10cd748e219c73f66d990', role: "option", "aria-selected": this.selected ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false' }, h("button", { key: '92c41c1e5fd2dca2dd41ac87f810a018e0f3502f', class: `picker-item__container`, type: "button", tabindex: "-1", disabled: this.disabled, part: "base" }, h("wa-icon", { key: '4a548cc1f4dcbbeb961adbb36094c0b17a1dcf49', class: "picker-item__check", name: "check" }), h("div", { key: '991c93dd129a0ecd267ff4de073f51575d670541', class: "picker-item__content", part: "content" }, h("slot", { key: '29b744be33d4451ab9fb8ee7895f518510fca520' })))));
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