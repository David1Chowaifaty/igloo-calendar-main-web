import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { h as hooks } from './moment.js';
import { U as UserService } from './user.service.js';
import { a as _formatTime } from './functions.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { S as SystemService, d as defineCustomElement$a } from './ir-otp-modal2.js';
import { d as defineCustomElement$h } from './ir-button2.js';
import { d as defineCustomElement$g } from './ir-icon2.js';
import { d as defineCustomElement$f } from './ir-icons2.js';
import { d as defineCustomElement$e } from './ir-input-text2.js';
import { d as defineCustomElement$d } from './ir-interceptor2.js';
import { d as defineCustomElement$c } from './ir-modal2.js';
import { d as defineCustomElement$b } from './ir-otp2.js';
import { d as defineCustomElement$9 } from './ir-password-validator2.js';
import { d as defineCustomElement$8 } from './ir-reset-password2.js';
import { d as defineCustomElement$7 } from './ir-select2.js';
import { d as defineCustomElement$6 } from './ir-sidebar2.js';
import { d as defineCustomElement$5 } from './ir-switch2.js';
import { d as defineCustomElement$4 } from './ir-title2.js';
import { d as defineCustomElement$3 } from './ir-toast2.js';
import { d as defineCustomElement$2 } from './ir-user-form-panel2.js';
import { d as defineCustomElement$1 } from './requirement-check2.js';

const irUserManagementTableCss = ".sc-ir-user-management-table-h{display:block}.badge.sc-ir-user-management-table{border:none;padding:0.2rem 0.3rem}.badge.sc-ir-user-management-table:disabled{cursor:default}";
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
        this.superAdminId = '5';
        this.allowedUsersTypes = [];
        this.currentTrigger = null;
        this.user = null;
        this.userService = new UserService();
        this.systemService = new SystemService();
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
            is_active: e.detail,
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
    async executeUserAction(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            await this.userService.handleExposedUser({
                email: this.user.email,
                id: this.user.id,
                is_active: this.user.is_active,
                is_email_verified: this.modalType === 'verify' ? false : this.user.is_email_verified,
                mobile: this.user.mobile,
                password: this.user.password,
                type: this.user.type,
                username: this.user.username,
                is_to_remove: this.modalType === 'delete',
            });
            this.resetData.emit(null);
        }
        finally {
            this.resetModalState();
            this.modalRef.closeModal();
        }
    }
    // private async sendVerificationEmail(user: User) {
    //   try {
    //     console.log(user);
    //     await this.userService.sendVerificationEmail();
    //     this.toast.emit({
    //       position: 'top-right',
    //       title: `We've sent a verification email to ${this.maskEmail(user.email)}.`,
    //       description: '',
    //       type: 'success',
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    renderCurrentTrigger() {
        var _a, _b;
        if (!this.currentTrigger) {
            return null;
        }
        return (h("ir-user-form-panel", { superAdminId: this.superAdminId, allowedUsersTypes: this.allowedUsersTypes, userTypeCode: this.userTypeCode, haveAdminPrivileges: this.haveAdminPrivileges, onCloseSideBar: () => (this.currentTrigger = null), slot: "sidebar-body", user: (_a = this.currentTrigger) === null || _a === void 0 ? void 0 : _a.user, isEdit: (_b = this.currentTrigger) === null || _b === void 0 ? void 0 : _b.isEdit }));
    }
    openModal(user, type) {
        if (!this.modalRef || !user) {
            return;
        }
        this.user = user;
        this.modalType = type;
        this.modalRef.openModal();
    }
    maskEmail(email) {
        if (!email || !email.includes('@'))
            return '';
        const [localPart, domain] = email.split('@');
        const visible = localPart.slice(0, 1); // show only the first letter
        const masked = '*'.repeat(Math.max(localPart.length - 1, 1)); // mask rest
        return `${visible}${masked}@${domain}`;
    }
    resetModalState() {
        this.user = null;
        this.modalType = null;
    }
    async verifyAdminAction(params) {
        await this.systemService.checkOTPNecessity({
            METHOD_NAME: 'Handle_Exposed_User',
        });
        this.currentTrigger = Object.assign({}, params);
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        return (h(Host, { key: '37c2152578194c991fc241f60a91ceed2ffc7902' }, h("section", { key: '6681d9b8026de9eee83bb50d38cc56dcb0e1ab04', class: "table-container h-100 p-1 w-100 m-0 table-responsive" }, h("table", { key: '51c844c30de53b7d35aea04ea2061497a81e8048', class: "table" }, h("thead", { key: 'a1ab6ac119c09feb9f723302855eeea0485eb85a' }, h("tr", { key: '8ecc0b262264d7125cd8a045cc576c673a1911ca' }, h("th", { key: '84ba1032677f6a7e2256c9080e090027f408ee23', class: "text-left" }, (_a = locales.entries.Lcz_Username) !== null && _a !== void 0 ? _a : 'Username'), h("th", { key: '2ee56b7fd08751b6f1839553165a48b03faa4dad', class: "text-left" }, locales.entries.Lcz_Email), h("th", { key: '63c06631ff6500ba7c5a5872af5a0ebb24c981c3', class: "text-left" }, (_b = locales.entries.Lcz_Mobile) !== null && _b !== void 0 ? _b : 'Mobile'), h("th", { key: 'db1843656f2a6461ee1e11c7eca6da5019ada951', class: "text-left" }, "Role"), h("th", { key: '010c4648f5ba1802a42971a2e0a369bfc185a678', class: "text-left" }, "Last signed in"), h("th", { key: 'f7dfa65457d51d9f2947777dec79d0110a413139', class: "text-left" }, "Created at"), this.haveAdminPrivileges && h("th", { key: '6ba737159a7c939424dbd20c349a6613ee65915b' }, "Active"), h("th", { key: '682497fb85b4165020e2259cc5867b0849c9c5fa', class: 'action-row' }, this.canCreate && (h("ir-icon", { key: 'fe343d4460ffe59d4d2e3b39f8653c196d90f2ed', style: { paddingLeft: '0.875rem' }, "data-testid": "new_user", title: locales.entries.Lcz_CreateHousekeeper, onIconClickHandler: () => {
                this.verifyAdminAction({
                    type: 'user',
                    isEdit: false,
                    user: null,
                });
            } }, h("svg", { key: '9391c6332e02c3b0676612a46888622a8a4f3605', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { key: '7127b497b75d1045331b673096fe54aa403fd212', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" }))))))), h("tbody", { key: '4b9143e0766c516a9a4122d6675daec87a4a8ed8' }, this.users.map(user => {
            var _a;
            const isUserSuperAdmin = user.type.toString() === this.superAdminId;
            const latestSignIn = user.sign_ins ? user.sign_ins[0] : null;
            return (h("tr", { key: user.id, class: "ir-table-row" }, h("td", null, user.username), h("td", null, user.email, this.haveAdminPrivileges && (h("span", { style: { marginLeft: '0.5rem' }, class: "small" }, user.is_email_verified ? 'Verified' : 'Not verified'))), h("td", null, (_a = user.mobile) !== null && _a !== void 0 ? _a : 'N/A'), h("td", null, user.type.toString() === this.superAdminId ? 'Super admin' : this.userTypes.get(user.type.toString())), h("td", null, latestSignIn && new Date(latestSignIn.date).getFullYear() > 1900
                ? hooks(latestSignIn.date, 'YYYY-MM-DD').format('DD-MMM-YYYY') + ' ' + _formatTime(latestSignIn.hour.toString(), latestSignIn.minute.toString())
                : 'N/A'), h("td", null, new Date(user.created_on).getFullYear() === 1900 || !user.created_on ? 'N/A' : hooks(user.created_on, 'YYYY-MM-DD').format('DD-MMM-YYYY')), this.haveAdminPrivileges && (h("td", null, this.haveAdminPrivileges && !this.isSuperAdmin && user.type.toString() === '17'
                ? null
                : !isUserSuperAdmin && h("ir-switch", { onCheckChange: e => this.handleUserActiveChange(e, user), checked: user.is_active }))), h("td", { class: 'action-row' }, (this.canEdit || this.canDelete) && ((!this.isSuperAdmin && !isUserSuperAdmin) || this.isSuperAdmin) && (h("div", { class: "icons-container  d-flex align-items-center", style: { gap: '0.5rem' } }, this.canEdit && (h("ir-icon", { "data-testid": "edit", title: locales.entries.Lcz_EditHousekeeper, onIconClickHandler: () => {
                    this.verifyAdminAction({
                        type: 'user',
                        isEdit: true,
                        user,
                    });
                }, icon: "ft-save color-ir-light-blue-hover h5 pointer sm-margin-right" }, h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { fill: "#6b6f82", d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" })))), this.canDelete && !isUserSuperAdmin && (this.isSuperAdmin || user.type.toString() !== '17') && (h("ir-icon", { "data-testid": "delete", title: locales.entries.Lcz_DeleteHousekeeper, icon: "ft-trash-2 danger h5 pointer", onIconClickHandler: () => {
                    this.openModal(user, 'delete');
                } }, h("svg", { slot: "icon", fill: "#ff2441", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "14.25", viewBox: "0 0 448 512" }, h("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" })))))))));
        })))), h("ir-sidebar", { key: '4bf796afe50525db0a2aa68e9f11f8b5d66767c7', open: this.currentTrigger !== null && ((_c = this.currentTrigger) === null || _c === void 0 ? void 0 : _c.type) !== 'delete', onIrSidebarToggle: () => (this.currentTrigger = null), showCloseButton: false, style: {
                '--sidebar-block-padding': '0',
                '--sidebar-width': this.currentTrigger ? (((_d = this.currentTrigger) === null || _d === void 0 ? void 0 : _d.type) === 'unassigned_units' ? 'max-content' : '40rem') : 'max-content',
            } }, this.renderCurrentTrigger()), h("ir-modal", { key: '7b7483973d8324f8a73d3c76da5b8390ee4eacb9', autoClose: false, modalBody: this.modalType === 'delete' ? `Are you sure you want to delete ${(_e = this.user) === null || _e === void 0 ? void 0 : _e.username}?` : `Are you sure you want to unverify ${this.maskEmail((_f = this.user) === null || _f === void 0 ? void 0 : _f.email)}`, rightBtnColor: "danger", isLoading: isRequestPending('/Handle_Exposed_User'), onCancelModal: this.resetModalState.bind(this), rightBtnText: this.modalType === 'verify' ? locales.entries.Lcz_Confirm : locales.entries.Lcz_Delete, onConfirmModal: this.executeUserAction.bind(this), ref: el => (this.modalRef = el) })));
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
        "superAdminId": [1, "super-admin-id"],
        "allowedUsersTypes": [16],
        "currentTrigger": [32],
        "user": [32],
        "modalType": [32],
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
    const components = ["ir-user-management-table", "ir-button", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-modal", "ir-otp", "ir-otp-modal", "ir-password-validator", "ir-reset-password", "ir-select", "ir-sidebar", "ir-switch", "ir-title", "ir-toast", "ir-user-form-panel", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-user-management-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrUserManagementTable);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-otp-modal":
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