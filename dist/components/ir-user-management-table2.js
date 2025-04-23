import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { h as hooks } from './moment.js';
import { U as UserService } from './user.service.js';
import { a as _formatTime } from './functions.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$f } from './ir-button2.js';
import { d as defineCustomElement$e } from './ir-icon2.js';
import { d as defineCustomElement$d } from './ir-icons2.js';
import { d as defineCustomElement$c } from './ir-input-text2.js';
import { d as defineCustomElement$b } from './ir-interceptor2.js';
import { d as defineCustomElement$a } from './ir-modal2.js';
import { d as defineCustomElement$9 } from './ir-password-validator2.js';
import { d as defineCustomElement$8 } from './ir-reset-password2.js';
import { d as defineCustomElement$7 } from './ir-select2.js';
import { d as defineCustomElement$6 } from './ir-sidebar2.js';
import { d as defineCustomElement$5 } from './ir-switch2.js';
import { d as defineCustomElement$4 } from './ir-title2.js';
import { d as defineCustomElement$3 } from './ir-toast2.js';
import { d as defineCustomElement$2 } from './ir-user-form-panel2.js';
import { d as defineCustomElement$1 } from './requirement-check2.js';

const irUserManagementTableCss = ".sc-ir-user-management-table-h{display:block}";
const IrUserManagementTableStyle0 = irUserManagementTableCss;

const tableCss = ".ir-table-row.sc-ir-user-management-table td.sc-ir-user-management-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap;width:max-content;max-width:max-content}.ir-table-row.sc-ir-user-management-table td.sc-ir-user-management-table:last-child{width:100%}.table.sc-ir-user-management-table td.sc-ir-user-management-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sc-ir-user-management-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-user-management-table td.sc-ir-user-management-table{background:#e3f3fa !important}.selected.sc-ir-user-management-table td.sc-ir-user-management-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-user-management-table{text-transform:capitalize;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-user-management-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.sortable.sc-ir-user-management-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-user-management-table svg.sc-ir-user-management-table{color:var(--blue)}";
const IrUserManagementTableStyle1 = tableCss;

const IrUserManagementTable = /*@__PURE__*/ proxyCustomElement(class IrUserManagementTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.toast = createEvent(this, "toast", 7);
        this.resetData = createEvent(this, "resetData", 7);
        this.users = [];
        this.userTypes = new Map();
        this.currentTrigger = null;
        this.user = null;
        this.userService = new UserService();
    }
    componentWillLoad() {
        this.assignPermissions();
    }
    handleChange(n, o) {
        if (n !== o) {
            this.assignPermissions();
        }
    }
    assignPermissions() {
        this.canCreate = this.haveAdminPrivileges;
        this.canDelete = this.haveAdminPrivileges;
        this.canEdit = true;
    }
    async handleUserActiveChange(e, user) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.userService.handleExposedUser({
            email: user.email,
            id: user.id,
            is_active: user.is_active,
            mobile: user.mobile,
            password: user.password,
            type: user.type,
            username: user.username,
        });
        this.toast.emit({
            position: 'top-right',
            title: 'Saved Successfully',
            description: '',
            type: 'success',
        });
    }
    async removeUser(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            await this.userService.handleExposedUser({
                email: this.user.email,
                id: this.user.id,
                is_active: this.user.is_active,
                mobile: this.user.mobile,
                password: this.user.password,
                type: this.user.type,
                username: this.user.username,
                is_to_remove: true,
            });
            this.resetData.emit(null);
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
        return (h("ir-user-form-panel", { userTypeCode: this.userTypeCode, haveAdminPrivileges: this.haveAdminPrivileges, onCloseSideBar: () => (this.currentTrigger = null), slot: "sidebar-body", user: (_a = this.currentTrigger) === null || _a === void 0 ? void 0 : _a.user, isEdit: (_b = this.currentTrigger) === null || _b === void 0 ? void 0 : _b.isEdit }));
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (h(Host, { key: '2e45e166da781d94f8a9dbe8dfc367d23a30cebe' }, h("section", { key: '4854235577b83aecd7aa339ddd765bf7439444b1', class: "table-container h-100 p-1 w-100 m-0 table-responsive" }, h("table", { key: '1484cb44cd6eb8b62af5482166882d2ad375b27c', class: "table" }, h("thead", { key: '223c42a18ff250e707edd480b33b542d6f89ddf7' }, h("tr", { key: 'a89e442d8f7d5876acbbd89113478c8fb34c9a53' }, h("th", { key: '12b5286ed9d2b5eb2c35ed4775e06ab0b59ab278', class: "text-left" }, (_a = locales.entries.Lcz_Username) !== null && _a !== void 0 ? _a : 'Username'), h("th", { key: '8448693278c8af9dfe61bfcbc854031c3d6e0683', class: "text-left" }, locales.entries.Lcz_Email), h("th", { key: '6c5a1279cfdcd72749d2dd2c1f0b241228f58d1d', class: "text-left" }, (_b = locales.entries.Lcz_Mobile) !== null && _b !== void 0 ? _b : 'Mobile'), h("th", { key: '1afa9c2da508b5fbeb5416bd16fea0bfcc2b94c4', class: "text-left" }, "Role"), h("th", { key: 'd8bf37384028688aa2ac0eb451615ea2c1844473', class: "text-left" }, "Last signed in"), h("th", { key: 'bc3a89ab89790d08b1b2fe7bc072ea7e74f24e9b', class: "text-left" }, "Created at"), this.haveAdminPrivileges && h("th", { key: '1abace3ac5ab10c32234bba1a3b6e8ea7d3477a4' }, "Active"), h("th", { key: '3d5c68aafc498fa455aaa412c4a883b853117196', class: 'action-row' }, this.canCreate && (h("ir-icon", { key: '7b46db5b3663492b298ef79d646d0ad85f312f8b', style: { paddingLeft: '0.875rem' }, "data-testid": "new_user", title: locales.entries.Lcz_CreateHousekeeper, onIconClickHandler: () => {
                this.currentTrigger = {
                    type: 'user',
                    isEdit: false,
                    user: null,
                };
            } }, h("svg", { key: 'fbe512a33f0f96871017b9bbbb890f8d203fdc97', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { key: 'd3b4ee897389db16a237c7f6c7d419f3f0efd9d0', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" }))))))), h("tbody", { key: 'e3f6ce4edaa193e2b5eab6e73b5fac787d560b20' }, this.users.map(user => {
            var _a;
            const isUserSuperAdmin = user.type.toString() === '1';
            const latestSignIn = user.sign_ins ? user.sign_ins[0] : null;
            return (h("tr", { key: user.id, class: "ir-table-row" }, h("td", null, user.username), h("td", null, user.email), h("td", null, (_a = user.mobile) !== null && _a !== void 0 ? _a : 'N/A'), h("td", null, this.userTypes.get(user.type.toString())), h("td", null, latestSignIn && new Date(latestSignIn.date).getFullYear() > 1900
                ? hooks(latestSignIn.date, 'YYYY-MM-DD').format('DD-MMM-YYYY') + ' ' + _formatTime(latestSignIn.hour.toString(), latestSignIn.minute.toString())
                : 'N/A'), h("td", null, new Date(user.created_on).getFullYear() === 1900 || !user.created_on ? 'N/A' : hooks(user.created_on, 'YYYY-MM-DD').format('DD-MMM-YYYY')), this.haveAdminPrivileges && (h("td", null, this.haveAdminPrivileges && !this.isSuperAdmin && user.type.toString() === '17'
                ? null
                : !isUserSuperAdmin && h("ir-switch", { onCheckChange: e => this.handleUserActiveChange(e, user), checked: user.is_active }))), h("td", { class: 'action-row' }, (this.canEdit || this.canDelete) && ((!this.isSuperAdmin && !isUserSuperAdmin) || this.isSuperAdmin) && (h("div", { class: "icons-container  d-flex align-items-center", style: { gap: '0.5rem' } }, this.canEdit && (h("ir-icon", { "data-testid": "edit", title: locales.entries.Lcz_EditHousekeeper, onIconClickHandler: () => {
                    this.currentTrigger = {
                        type: 'user',
                        isEdit: true,
                        user,
                    };
                }, icon: "ft-save color-ir-light-blue-hover h5 pointer sm-margin-right" }, h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { fill: "#6b6f82", d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" })))), this.canDelete && !isUserSuperAdmin && (this.isSuperAdmin || user.type.toString() !== '17') && (h("ir-icon", { "data-testid": "delete", title: locales.entries.Lcz_DeleteHousekeeper, icon: "ft-trash-2 danger h5 pointer", onIconClickHandler: () => {
                    this.user = user;
                    this.modalRef.openModal();
                } }, h("svg", { slot: "icon", fill: "#ff2441", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "14.25", viewBox: "0 0 448 512" }, h("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" })))))))));
        })))), h("ir-sidebar", { key: '83b70eefcda9d13ad80818c073ae42beb32c883c', open: this.currentTrigger !== null && ((_c = this.currentTrigger) === null || _c === void 0 ? void 0 : _c.type) !== 'delete', onIrSidebarToggle: () => (this.currentTrigger = null), showCloseButton: false, style: {
                '--sidebar-block-padding': '0',
                '--sidebar-width': this.currentTrigger ? (((_d = this.currentTrigger) === null || _d === void 0 ? void 0 : _d.type) === 'unassigned_units' ? 'max-content' : '40rem') : 'max-content',
            } }, this.renderCurrentTrigger()), h("ir-modal", { key: 'ae1ec741daf784ba104ff5794b3e6b5bda340438', autoClose: false, modalBody: `Are you sure you want to delete ${(_e = this.user) === null || _e === void 0 ? void 0 : _e.username}?`, rightBtnColor: "danger", isLoading: isRequestPending('/Handle_Exposed_User'), rightBtnText: locales.entries.Lcz_Delete, onConfirmModal: this.removeUser.bind(this), ref: el => (this.modalRef = el) })));
    }
    static get watchers() { return {
        "haveAdminPrivileges": ["handleChange"]
    }; }
    static get style() { return IrUserManagementTableStyle0 + IrUserManagementTableStyle1; }
}, [2, "ir-user-management-table", {
        "users": [16],
        "isSuperAdmin": [4, "is-super-admin"],
        "userTypes": [16],
        "userTypeCode": [8, "user-type-code"],
        "haveAdminPrivileges": [4, "have-admin-privileges"],
        "currentTrigger": [32],
        "user": [32],
        "canDelete": [32],
        "canEdit": [32],
        "canCreate": [32]
    }, undefined, {
        "haveAdminPrivileges": ["handleChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-user-management-table", "ir-button", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-modal", "ir-password-validator", "ir-reset-password", "ir-select", "ir-sidebar", "ir-switch", "ir-title", "ir-toast", "ir-user-form-panel", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-user-management-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrUserManagementTable);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-password-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-reset-password":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-switch":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-toast":
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