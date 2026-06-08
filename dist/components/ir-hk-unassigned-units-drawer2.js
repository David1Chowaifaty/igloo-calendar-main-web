import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$4 } from './ir-custom-button2.js';
import { d as defineCustomElement$3 } from './ir-drawer2.js';
import { d as defineCustomElement$2 } from './ir-hk-unassigned-units-drawer-form2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irHkUnassignedUnitsDrawerCss = ".sc-ir-hk-unassigned-units-drawer-h{display:block}";
const IrHkUnassignedUnitsDrawerStyle0 = irHkUnassignedUnitsDrawerCss;

const IrHkUnassignedUnitsDrawer = /*@__PURE__*/ proxyCustomElement(class IrHkUnassignedUnitsDrawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
    }
    open = false;
    user = null;
    closeSideBar;
    formId = 'hk-unassigned-units-drawer-form';
    render() {
        return (h("ir-drawer", { key: '781c1b1c92985b926f7ea060e39e9929572180b2', label: !this.user ? 'Assingn Units' : `Assignment for ${this.user.name}`, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeSideBar.emit(null);
            }, style: { '--ir-drawer-width': 'max-content' }, open: this.open }, this.open && h("ir-hk-unassigned-units-drawer-form", { key: '120bf493aae9e1aa71674b59d92f3d8c7583e35a', formId: this.formId, user: this.user }), h("div", { key: '50c4f1b4a643586548b71d9fe89a14fc66fcf011', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '98cbb97e8e92477d53c334fbc579ebf346007b1a', "data-drawer": "close", variant: "neutral", size: "medium", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: '61d51dbc58da9c42fb5480b1a7e89e67ef2fefb7', loading: isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), variant: "brand", type: "submit", form: this.formId, appearance: "accent", size: "medium" }, "Save"))));
    }
    static get style() { return IrHkUnassignedUnitsDrawerStyle0; }
}, [2, "ir-hk-unassigned-units-drawer", {
        "open": [4],
        "user": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-hk-unassigned-units-drawer", "ir-custom-button", "ir-drawer", "ir-hk-unassigned-units-drawer-form", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-hk-unassigned-units-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrHkUnassignedUnitsDrawer);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-hk-unassigned-units-drawer-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrHkUnassignedUnitsDrawer as I, defineCustomElement as d };

//# sourceMappingURL=ir-hk-unassigned-units-drawer2.js.map