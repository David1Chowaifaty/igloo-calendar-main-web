import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { h as hooks } from './moment.js';
import { K as sleep } from './utils.js';
import { d as defineCustomElement$c } from './ir-button2.js';
import { d as defineCustomElement$b } from './ir-icon2.js';
import { d as defineCustomElement$a } from './ir-icons2.js';
import { d as defineCustomElement$9 } from './ir-input-text2.js';
import { d as defineCustomElement$8 } from './ir-modal2.js';
import { d as defineCustomElement$7 } from './ir-password-validator2.js';
import { d as defineCustomElement$6 } from './ir-select2.js';
import { d as defineCustomElement$5 } from './ir-sidebar2.js';
import { d as defineCustomElement$4 } from './ir-switch2.js';
import { d as defineCustomElement$3 } from './ir-title2.js';
import { d as defineCustomElement$2 } from './ir-user-form-panel2.js';
import { d as defineCustomElement$1 } from './requirement-check2.js';

const irUserManagementTableCss = ".sc-ir-user-management-table-h{display:block}.table.sc-ir-user-management-table th.sc-ir-user-management-table,.table.sc-ir-user-management-table td.sc-ir-user-management-table{white-space:nowrap;width:max-content !important;background:white;padding:0.25rem 1rem !important}";
const IrUserManagementTableStyle0 = irUserManagementTableCss;

const IrUserManagementTable = /*@__PURE__*/ proxyCustomElement(class IrUserManagementTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.toast = createEvent(this, "toast", 7);
        this.users = [];
        this.currentTrigger = null;
        this.user = null;
    }
    async handleUserActiveChange(e, user) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await sleep(300);
        console.log(user);
        this.toast.emit({
            position: 'top-right',
            title: 'Saved Successfully',
            description: '',
            type: 'success',
        });
    }
    render() {
        var _a, _b, _c, _d;
        return (h(Host, { key: '88292857cc7af46d6afbb79117965afadc5801b7' }, h("section", { key: 'f0e8da783738cd25bfded3e12f7b885bd13acafc', class: "card table-container h-100 p-1 w-100 m-0 table-responsive" }, h("table", { key: '8c15517949f4fef2ef07de8bfca57d76f015c39d', class: "table" }, h("thead", { key: '767c044b8a503c813a0f88c759e46f30a666cc67' }, h("tr", { key: '6f9e176b76c92d1d2ac1255e6325ccf0cbf50791' }, h("th", { key: '42169d4c5fd462542413063156d6eb56250c201a', class: "text-left" }, (_a = locales.entries.Lcz_Username) !== null && _a !== void 0 ? _a : 'Username'), h("th", { key: '61b51f368c59c55c24d1192c4eb9969fbbe7bfeb', class: "text-left" }, locales.entries.Lcz_Email), h("th", { key: 'a7675db30baf75f57ed3d0925cfa44a46ec4c885', class: "text-left" }, (_b = locales.entries.Lcz_Mobile) !== null && _b !== void 0 ? _b : 'Mobile'), h("th", { key: 'da5c28c0592c3a9801fe61be91b79822ce835fc7', class: "text-left" }, "Role"), h("th", { key: '307c80ab284af0231dacabb47c125059086ea31e', class: "text-left" }, "Last signed in"), h("th", { key: '98f6323fe519215f9d91721525b3504bddcdd173', class: "text-left" }, "Created at"), h("th", { key: 'f7278fc2642573244ad92c8605de4de4d3a82db2' }, "Active"), h("th", { key: '2292ee9eb8af8175092a298ea396401caa2bfb4a', class: "text-center" }, h("ir-icon", { key: '8841a41fc4c29963d8d1fed0f1e857aa680e426f', "data-testid": "new_user", title: locales.entries.Lcz_CreateHousekeeper, onIconClickHandler: () => {
                this.currentTrigger = {
                    type: 'user',
                    isEdit: false,
                    user: null,
                };
            } }, h("svg", { key: 'a67464d9f21f5d2c4ef462c2d01ebf7d2e39ec14', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { key: '7b6ee10bf00ead142eac5e9417c8c561bd689848', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })))))), h("tbody", { key: 'fdbf0cbceed4a02798e81b4ae519a981c4cabd7f' }, this.users.map((user, i) => (h("tr", { key: user.id }, h("td", { class: "text-left" }, user.username), h("td", { class: "text-left w-full" }, user.email), h("td", { class: "text-left" }, user.phone_prefix, " ", user.mobile), h("td", { class: "text-left" }, user.role), h("td", { class: "text-left" }, hooks(user.last_signed_in, 'YYYY-MM-DD').format('MMM, DD YYYY')), h("td", { class: "text-left" }, hooks(user.created_at, 'YYYY-MM-DD').format('MMM, DD YYYY')), h("td", null, i > 0 && h("ir-switch", { onCheckChange: e => this.handleUserActiveChange(e, user), checked: user.is_active })), h("td", { class: "text-center" }, h("div", { class: "icons-container d-flex align-items-center justify-content-center", style: { gap: '0.5rem' } }, h("ir-icon", { "data-testid": "edit", title: locales.entries.Lcz_EditHousekeeper, onIconClickHandler: () => {
                this.currentTrigger = {
                    type: 'user',
                    isEdit: true,
                    user,
                };
            }, icon: "ft-save color-ir-light-blue-hover h5 pointer sm-margin-right" }, h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { fill: "#6b6f82", d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" }))), i > 0 && (h("ir-icon", { "data-testid": "delete", title: locales.entries.Lcz_DeleteHousekeeper, icon: "ft-trash-2 danger h5 pointer", onIconClickHandler: () => {
                this.user = user;
                this.modalRef.openModal();
            } }, h("svg", { slot: "icon", fill: "#ff2441", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "14.25", viewBox: "0 0 448 512" }, h("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" })))))))))))), h("ir-sidebar", { key: '52f4cc21d2497f17980b126aeba20bbbb7210e1d', showCloseButton: false, open: this.currentTrigger !== null && ((_c = this.currentTrigger) === null || _c === void 0 ? void 0 : _c.type) !== 'delete', onIrSidebarToggle: () => (this.currentTrigger = null), style: {
                '--sidebar-block-padding': '0',
                '--sidebar-width': this.currentTrigger ? (((_d = this.currentTrigger) === null || _d === void 0 ? void 0 : _d.type) === 'unassigned_units' ? 'max-content' : '40rem') : 'max-content',
            } }, this.renderCurrentTrigger()), h("ir-modal", { key: 'a03103837ad88ce459b6b7b3558aab8e6a0c4da1', autoClose: false, modalBody: "Are you sure you want to delete this user?", rightBtnColor: "danger", rightBtnText: locales.entries.Lcz_Delete, onConfirmModal: this.removeUser.bind(this), ref: el => (this.modalRef = el) })));
    }
    async removeUser(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
        }
        finally {
            this.user = null;
            this.modalRef.closeModal();
        }
    }
    renderCurrentTrigger() {
        var _a, _b;
        if (!this.currentTrigger) {
            return null;
        }
        return (h("ir-user-form-panel", { isSuperAdmin: this.isSuperAdmin, onCloseSideBar: () => (this.currentTrigger = null), slot: "sidebar-body", user: (_a = this.currentTrigger) === null || _a === void 0 ? void 0 : _a.user, isEdit: (_b = this.currentTrigger) === null || _b === void 0 ? void 0 : _b.isEdit }));
    }
    static get style() { return IrUserManagementTableStyle0; }
}, [2, "ir-user-management-table", {
        "users": [16],
        "isSuperAdmin": [4, "is-super-admin"],
        "currentTrigger": [32],
        "user": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-user-management-table", "ir-button", "ir-icon", "ir-icons", "ir-input-text", "ir-modal", "ir-password-validator", "ir-select", "ir-sidebar", "ir-switch", "ir-title", "ir-user-form-panel", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-user-management-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrUserManagementTable);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-password-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-switch":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-user-form-panel":
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

export { IrUserManagementTable as I, defineCustomElement as d };

//# sourceMappingURL=ir-user-management-table2.js.map