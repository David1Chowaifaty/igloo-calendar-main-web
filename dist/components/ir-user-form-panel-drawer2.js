import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$k } from './ir-button2.js';
import { d as defineCustomElement$j } from './ir-custom-button2.js';
import { d as defineCustomElement$i } from './ir-drawer2.js';
import { d as defineCustomElement$h } from './ir-icon2.js';
import { d as defineCustomElement$g } from './ir-icons2.js';
import { d as defineCustomElement$f } from './ir-input2.js';
import { d as defineCustomElement$e } from './ir-interceptor2.js';
import { d as defineCustomElement$d } from './ir-otp2.js';
import { d as defineCustomElement$c } from './ir-otp-modal2.js';
import { d as defineCustomElement$b } from './ir-password-validator2.js';
import { d as defineCustomElement$a } from './ir-reset-password2.js';
import { d as defineCustomElement$9 } from './ir-sidebar2.js';
import { d as defineCustomElement$8 } from './ir-spinner2.js';
import { d as defineCustomElement$7 } from './ir-title2.js';
import { d as defineCustomElement$6 } from './ir-toast2.js';
import { d as defineCustomElement$5 } from './ir-toast-alert2.js';
import { d as defineCustomElement$4 } from './ir-toast-provider2.js';
import { d as defineCustomElement$3 } from './ir-user-form-panel2.js';
import { d as defineCustomElement$2 } from './ir-validator2.js';
import { d as defineCustomElement$1 } from './requirement-check2.js';

const irUserFormPanelDrawerCss = ".sc-ir-user-form-panel-drawer-h{display:block}";
const IrUserFormPanelDrawerStyle0 = irUserFormPanelDrawerCss;

const IrUserFormPanelDrawer = /*@__PURE__*/ proxyCustomElement(class IrUserFormPanelDrawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
    }
    open;
    user;
    userTypes = (Map);
    isEdit = false;
    language = 'en';
    property_id;
    haveAdminPrivileges;
    superAdminId = '5';
    userTypeCode;
    allowedUsersTypes = [];
    baseUserTypeCode;
    closeSideBar;
    render() {
        const formId = `user-form-${this.user?.id}`;
        return (h("ir-drawer", { key: 'be8447893cee0ab8a2de83350482e3a177e70a25', onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!e.detail) {
                    return;
                }
                this.closeSideBar.emit(null);
            }, label: this.isEdit ? this.user.username : 'Create New User', open: this.open }, this.open && (h("ir-user-form-panel", { key: 'b1973196379b1cd66370c232d34376bc3740dba0', user: this.user, userTypes: this.userTypes, isEdit: this.isEdit, language: this.language, property_id: this.property_id, haveAdminPrivileges: this.haveAdminPrivileges, superAdminId: this.superAdminId, userTypeCode: this.userTypeCode, allowedUsersTypes: this.allowedUsersTypes, baseUserTypeCode: this.baseUserTypeCode, formId: formId })), h("div", { key: '39d625356dc07d4bae8dfc8deffa47eaf15771fe', slot: "footer", class: 'ir__drawer-footer' }, h("ir-custom-button", { key: '1414c6bdb64257201443dce66fd631c63b591bea', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", appearance: "filled", variant: "neutral", size: "medium" }, locales?.entries?.Lcz_Cancel), h("ir-custom-button", { key: 'ed2eff42124d402b9b27b568ba39849913cf9059', form: formId, loading: isRequestPending('/Handle_Exposed_User'), "data-testid": "save", size: "medium", class: "flex-fill", type: "submit", variant: "brand" }, locales?.entries?.Lcz_Save))));
    }
    static get style() { return IrUserFormPanelDrawerStyle0; }
}, [2, "ir-user-form-panel-drawer", {
        "open": [516],
        "user": [16],
        "userTypes": [16],
        "isEdit": [4, "is-edit"],
        "language": [1],
        "property_id": [2],
        "haveAdminPrivileges": [4, "have-admin-privileges"],
        "superAdminId": [1, "super-admin-id"],
        "userTypeCode": [8, "user-type-code"],
        "allowedUsersTypes": [16],
        "baseUserTypeCode": [8, "base-user-type-code"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-user-form-panel-drawer", "ir-button", "ir-custom-button", "ir-drawer", "ir-icon", "ir-icons", "ir-input", "ir-interceptor", "ir-otp", "ir-otp-modal", "ir-password-validator", "ir-reset-password", "ir-sidebar", "ir-spinner", "ir-title", "ir-toast", "ir-toast-alert", "ir-toast-provider", "ir-user-form-panel", "ir-validator", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-user-form-panel-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrUserFormPanelDrawer);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-password-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-reset-password":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-toast-provider":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-user-form-panel":
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

export { IrUserFormPanelDrawer as I, defineCustomElement as d };

//# sourceMappingURL=ir-user-form-panel-drawer2.js.map