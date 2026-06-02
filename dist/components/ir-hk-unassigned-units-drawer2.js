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
        return (h("ir-drawer", { key: '889b99dc8198452a157139820c495ac5a23e60e1', label: !this.user ? 'Assingn Units' : `Assignment for ${this.user.name}`, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeSideBar.emit(null);
            }, style: { '--ir-drawer-width': 'max-content' }, open: this.open }, this.open && h("ir-hk-unassigned-units-drawer-form", { key: '4f5a6817a8e79b004bf7a358e978998c67aa6344', formId: this.formId, user: this.user }), h("div", { key: 'e0df2f707e4d5d8149638bb445fd0007c0bb8724', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'b8e432f5ac8425ffdb8f4bdac0f2fc73ad2efe54', "data-drawer": "close", variant: "neutral", size: "medium", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: 'bb77436bb27f18b672362974378dc5878b0b2a30', loading: isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), variant: "brand", type: "submit", form: this.formId, appearance: "accent", size: "medium" }, "Save"))));
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