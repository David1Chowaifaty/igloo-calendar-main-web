import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$a } from './ir-custom-button2.js';
import { d as defineCustomElement$9 } from './ir-drawer2.js';
import { d as defineCustomElement$8 } from './ir-hk-user-drawer-form2.js';
import { d as defineCustomElement$7 } from './ir-icons2.js';
import { d as defineCustomElement$6 } from './ir-input2.js';
import { d as defineCustomElement$5 } from './ir-mobile-input2.js';
import { d as defineCustomElement$4 } from './ir-password-validator2.js';
import { d as defineCustomElement$3 } from './ir-spinner2.js';
import { d as defineCustomElement$2 } from './ir-validator2.js';
import { d as defineCustomElement$1 } from './requirement-check2.js';

const irHkUserDrawerCss = ".sc-ir-hk-user-drawer-h{display:block}";
const IrHkUserDrawerStyle0 = irHkUserDrawerCss;

const IrHkUserDrawer = /*@__PURE__*/ proxyCustomElement(class IrHkUserDrawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
    }
    isLoading = false;
    open = false;
    isEdit = false;
    user = null;
    closeSideBar;
    formId = 'hk-user-drawer-form';
    render() {
        return (h("ir-drawer", { key: '4980cf93478c4204df4696e50f0875ad8b8c805c', open: this.open, onDrawerHide: () => {
                this.closeSideBar.emit(null);
            }, label: this.isEdit ? locales.entries.Lcz_EditHousekeeperProfile : locales.entries.Lcz_CreateHousekeeperProfile }, this.open && (h("ir-hk-user-drawer-form", { key: 'ed51bfa0447ab2498aa825c04853df038bba694d', onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail;
            }, isEdit: this.isEdit, user: this.user, formId: this.formId })), h("div", { key: '69dbf733455443ad8b4672d9c6165c20dac032d5', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '85a391d3dc21b17dfefe8bb55aa002f63077ce60', "data-drawer": "close", variant: "neutral", size: "medium", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: '949a5d8f09ec6bfaa588f87fc72db2e48358f596', loading: this.isLoading, variant: "brand", type: "submit", form: this.formId, appearance: "accent", size: "medium" }, "Save"))));
    }
    static get style() { return IrHkUserDrawerStyle0; }
}, [2, "ir-hk-user-drawer", {
        "open": [4],
        "isEdit": [4, "is-edit"],
        "user": [16],
        "isLoading": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-hk-user-drawer", "ir-custom-button", "ir-drawer", "ir-hk-user-drawer-form", "ir-icons", "ir-input", "ir-mobile-input", "ir-password-validator", "ir-spinner", "ir-validator", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-hk-user-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrHkUserDrawer);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-hk-user-drawer-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-password-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "requirement-check":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrHkUserDrawer as I, defineCustomElement as d };

//# sourceMappingURL=ir-hk-user-drawer2.js.map