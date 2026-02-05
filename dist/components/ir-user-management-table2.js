import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { h as hooks } from './moment.js';
import { U as UserService } from './user.service.js';
import { _ as _formatTime } from './functions.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { S as SystemService, d as defineCustomElement$d } from './ir-otp-modal2.js';
import { d as defineCustomElement$m } from './ir-button2.js';
import { d as defineCustomElement$l } from './ir-custom-button2.js';
import { d as defineCustomElement$k } from './ir-dialog2.js';
import { d as defineCustomElement$j } from './ir-drawer2.js';
import { d as defineCustomElement$i } from './ir-icon2.js';
import { d as defineCustomElement$h } from './ir-icons2.js';
import { d as defineCustomElement$g } from './ir-input2.js';
import { d as defineCustomElement$f } from './ir-interceptor2.js';
import { d as defineCustomElement$e } from './ir-otp2.js';
import { d as defineCustomElement$c } from './ir-password-validator2.js';
import { d as defineCustomElement$b } from './ir-reset-password2.js';
import { d as defineCustomElement$a } from './ir-sidebar2.js';
import { d as defineCustomElement$9 } from './ir-spinner2.js';
import { d as defineCustomElement$8 } from './ir-title2.js';
import { d as defineCustomElement$7 } from './ir-toast2.js';
import { d as defineCustomElement$6 } from './ir-toast-alert2.js';
import { d as defineCustomElement$5 } from './ir-toast-provider2.js';
import { d as defineCustomElement$4 } from './ir-user-form-panel2.js';
import { d as defineCustomElement$3 } from './ir-user-form-panel-drawer2.js';
import { d as defineCustomElement$2 } from './ir-validator2.js';
import { d as defineCustomElement$1 } from './requirement-check2.js';

const irUserManagementTableCss = ".sc-ir-user-management-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.sc-ir-user-management-table-h{box-sizing:border-box !important}.sc-ir-user-management-table-h *.sc-ir-user-management-table,.sc-ir-user-management-table-h *.sc-ir-user-management-table::before,.sc-ir-user-management-table-h *.sc-ir-user-management-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-user-management-table{display:none !important}.badge.sc-ir-user-management-table{border:none;padding:0.2rem 0.3rem}.badge.sc-ir-user-management-table:disabled{cursor:default}";
const IrUserManagementTableStyle0 = irUserManagementTableCss;

const tableCss = ".ir-table-row.sc-ir-user-management-table td.sc-ir-user-management-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-user-management-table{overflow-x:auto}.table.sc-ir-user-management-table td.sc-ir-user-management-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-user-management-table tbody.sc-ir-user-management-table tr.sc-ir-user-management-table:last-child>td.sc-ir-user-management-table{border-bottom:0 !important}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sc-ir-user-management-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sc-ir-user-management-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-user-management-table .empty-row.sc-ir-user-management-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-user-management-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-user-management-table td.sc-ir-user-management-table{background:#e3f3fa !important}.selected.sc-ir-user-management-table td.sc-ir-user-management-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-user-management-table,.ir-table-row.sc-ir-user-management-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-user-management-table{text-transform:capitalize}.sortable.sc-ir-user-management-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-user-management-table:hover td.sc-ir-user-management-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-user-management-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-user-management-table svg.sc-ir-user-management-table{color:var(--blue)}.sticky-column.sc-ir-user-management-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-user-management-table,.data-table.sc-ir-user-management-table{height:100%}";
const IrUserManagementTableStyle1 = tableCss;

const IrUserManagementTable = /*@__PURE__*/ proxyCustomElement(class IrUserManagementTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.toast = createEvent(this, "toast", 7);
        this.resetData = createEvent(this, "resetData", 7);
    }
    users = [];
    isSuperAdmin;
    userTypes = new Map();
    userTypeCode;
    haveAdminPrivileges;
    superAdminId = '5';
    allowedUsersTypes = [];
    baseUserTypeCode;
    property_id;
    currentTrigger = null;
    user = null;
    modalType;
    //Permissions
    canDelete;
    canEdit;
    canCreate;
    toast;
    resetData;
    dialogRef;
    userService = new UserService();
    systemService = new SystemService();
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
        const res = await this.verifyAdminAction({ type: 'user', mode: 'update', user });
        if (res === 'cancelled') {
            return;
        }
        await this.userService.handleExposedUser({
            email: user.email,
            id: user.id,
            is_active: e.target.checked,
            mobile: user.mobile,
            password: user.password,
            type: user.type,
            username: user.username,
            base_user_type_code: this.baseUserTypeCode,
            property_id: this.property_id,
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
            this.dialogRef.closeModal();
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
    openModal(user, type) {
        if (!this.dialogRef || !user) {
            return;
        }
        this.user = user;
        this.modalType = type;
        this.dialogRef.openModal();
    }
    maskEmail(email) {
        if (!email || !email.includes('@'))
            return '';
        const [localPart, domain] = email.split('@');
        const visible = localPart.slice(0, 1); // show only the first letter
        const masked = '*'.repeat(Math.max(localPart.length - 1, 1)); // mask rest
        return `${visible}${masked}@${domain}`;
    }
    async verifyAdminAction(params) {
        const res = await this.systemService.checkOTPNecessity({
            METHOD_NAME: 'Handle_Exposed_User',
        });
        if (res?.cancelled) {
            return 'cancelled';
        }
        const { mode, ...rest } = params;
        if (mode === 'edit' || mode === 'create') {
            this.currentTrigger = {
                ...rest,
                isEdit: mode === 'edit',
            };
        }
        return 'ok';
    }
    render() {
        return (h(Host, { key: 'fee0666b0461c674f57f4094f0e85215db3b6613' }, h("section", { key: '562962e0474f94b4f0083c6af20c2f19f9482657', class: "table-container h-100  w-100 m-0 table-responsive" }, h("table", { key: '5bb1091e4cbfbd62b11b153d028fb8bf16bba22d', class: "table" }, h("thead", { key: '33c8f868cc1adb786ec0666a396dd4f4b9ca6766' }, h("tr", { key: '9fa91dc3f186299903e702bbed4d4e22830a8ad4' }, h("th", { key: '7288a5101c98093b4c7bca81b1e1c7c78809b249', class: "text-left" }, locales.entries.Lcz_Username ?? 'Username'), h("th", { key: '8e1b2fc21f60a7b658078b261b00205a210e5ebe', class: "text-left" }, locales.entries.Lcz_Email), h("th", { key: '2337ae78daf1ec907b965783416136b60a07b6e8', class: "text-left" }, locales.entries.Lcz_Mobile ?? 'Mobile'), h("th", { key: '0f325c149cb01e42d0e2272bd0ff540159df1c6e', class: "text-left" }, locales.entries.Lcz_Role), h("th", { key: 'a4200cd4efa9aaed8e77cbebe63b23117b91af7a', class: "text-left small", style: { fontWeight: 'bold' } }, h("p", { key: 'bf1c807872c6262070263e7d3807e9fe924d4b7e', class: "m-0 p-0 " }, locales.entries.Lcz_CreatedAt), h("p", { key: 'e4b5443fda4f03f9f50486b3f31651c1ac19bc3f', class: "m-0 p-0" }, locales.entries.Lcz_LastSignedIn)), this.haveAdminPrivileges && h("th", { key: '8cf355c889ed0ead5f4fc98d515674258cd67ecf' }, locales.entries.Lcz_Active), h("th", { key: '8993f2b5d2c0d1f7853eed5afa54b239fd1502b1', class: 'action-row' }, this.canCreate && (h(Fragment, { key: 'e8f7f25ff446b0847bc89cbd0ebc330c44b1d48f' }, h("ir-custom-button", { key: 'fa3df4f1df88b2920384703b321512d6bca856c2', appearance: "plain", variant: "neutral", id: "new-user-btn", onClickHandler: () => {
                this.verifyAdminAction({
                    type: 'user',
                    mode: 'create',
                    user: null,
                });
            } }, h("wa-icon", { key: '111e71d4ec7b9424024194aad8cdd56250191d03', name: "plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '885e6d8fe71a19b3fb891570db7754d623c134a5', for: "new-user-btn" }, locales.entries.Lcz_CreateUser)))))), h("tbody", { key: '5b773206a0f39aaa5591bb032a9939c042837d00' }, this.users.map(user => {
            const isUserSuperAdmin = user.type.toString() === this.superAdminId;
            const latestSignIn = user.sign_ins ? user.sign_ins[0] : null;
            const latestSignInDate = latestSignIn ? hooks(latestSignIn.date, 'YYYY-MM-DD') : null;
            const isLastSignInOld = latestSignInDate ? hooks().diff(latestSignInDate, 'days') > 30 : false;
            return (h("tr", { key: user.id, class: "ir-table-row" }, h("td", null, user.username), h("td", null, user.email, this.haveAdminPrivileges && (h("span", { style: { marginLeft: '0.5rem', color: `var(--wa-color-${user.is_email_verified ? 'success' : 'danger'}-fill-loud)` }, class: `small` }, user.is_email_verified ? locales.entries.Lcz_Verified : locales.entries.Lcz_NotVerified))), h("td", null, user.mobile ?? 'N/A'), h("td", null, user.type.toString() === this.superAdminId ? locales.entries.Lcz_SuperAdmin : this.userTypes.get(user.type.toString())), h("td", { class: "small" }, h("p", { class: "m-0 p-0" }, new Date(user.created_on).getFullYear() === 1900 || !user.created_on ? 'N/A' : hooks(user.created_on, 'YYYY-MM-DD').format('DD-MMM-YYYY')), h("p", { class: `m-0 p-0`, style: { color: isLastSignInOld ? 'var(--wa-color-danger-fill-loud)' : '' } }, latestSignIn && new Date(latestSignIn.date).getFullYear() > 1900
                ? hooks(latestSignIn.date, 'YYYY-MM-DD').format('DD-MMM-YYYY') + ' ' + _formatTime(latestSignIn.hour.toString(), latestSignIn.minute.toString())
                : 'N/A')), this.haveAdminPrivileges && (h("td", null, this.haveAdminPrivileges && !this.isSuperAdmin && user.type.toString() === '17'
                ? null
                : !isUserSuperAdmin && (h("wa-switch", { onchange: e => this.handleUserActiveChange(e, user), defaultChecked: user.is_active, checked: user.is_active })))), h("td", { class: 'action-row' }, (this.canEdit || this.canDelete) && ((!this.isSuperAdmin && !isUserSuperAdmin) || this.isSuperAdmin) && (h("div", { class: "icons-container  d-flex align-items-center" }, this.canEdit && (h(Fragment, null, h("ir-custom-button", { "data-testid": "edit", onClickHandler: () => {
                    this.verifyAdminAction({
                        type: 'user',
                        mode: 'edit',
                        user,
                    });
                }, appearance: "plain", variant: "neutral", id: `edit-user-${user.id}` }, h("wa-icon", { name: "edit", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { for: `edit-user-${user.id}` }, locales.entries.Lcz_EditUser))), this.canDelete && !isUserSuperAdmin && (this.isSuperAdmin || user.type.toString() !== '17') && (h(Fragment, null, h("ir-custom-button", { onClickHandler: async () => {
                    const res = await this.verifyAdminAction({
                        type: 'user',
                        mode: 'delete',
                        user,
                    });
                    if (res === 'cancelled') {
                        return;
                    }
                    this.openModal(user, 'delete');
                }, "data-testid": "delete", variant: "danger", appearance: "plain", id: `delete-user-${user.id}` }, h("wa-icon", { name: "trash-can", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { for: `delete-user-${user.id}` }, locales.entries.Lcz_DeleteUser))))))));
        })))), h("ir-user-form-panel-drawer", { key: '490b3dc0f781e78301e199b08e74a306f77d34c7', open: this.currentTrigger !== null && this.currentTrigger?.type !== 'delete', property_id: this.property_id, baseUserTypeCode: this.baseUserTypeCode, superAdminId: this.superAdminId, allowedUsersTypes: this.allowedUsersTypes, userTypeCode: this.userTypeCode, haveAdminPrivileges: this.haveAdminPrivileges, onCloseSideBar: () => (this.currentTrigger = null), slot: "sidebar-body", user: this.currentTrigger?.user, isEdit: this.currentTrigger?.isEdit }), h("ir-dialog", { key: '5abb8ff2b1e5a9ec03c51dcb1e82842bd7ecccf9', label: 'Alert', onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.user = null;
                this.modalType = null;
            }, ref: el => (this.dialogRef = el) }, h("span", { key: 'e76a069351d5ac65886a2f5796aa97358c451596' }, this.modalType === 'delete'
            ? `${locales.entries.Lcz_AreYouSureToDelete} ${this.user?.username}?`
            : `${locales.entries.Lcz_AreYouSureToUnverify} ${this.maskEmail(this.user?.email)}`), h("div", { key: '7fa4a105fe1ecdfce3ab96d98f825ed484d5aad7', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'bd48a0a5516d98befcc476ddabd156b728c2cc0d', "data-dialog": "close", size: "medium", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: 'b656b7a76bd6d02b3c69225b48578bb7237f90a2', size: "medium", loading: isRequestPending('/Handle_Exposed_User'), appearance: "accent", variant: this.modalType === 'verify' ? 'brand' : 'danger', onClickHandler: this.executeUserAction.bind(this) }, this.modalType === 'verify' ? locales.entries.Lcz_Confirm : locales.entries.Lcz_Delete)))));
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
        "baseUserTypeCode": [8, "base-user-type-code"],
        "property_id": [2],
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
    const components = ["ir-user-management-table", "ir-button", "ir-custom-button", "ir-dialog", "ir-drawer", "ir-icon", "ir-icons", "ir-input", "ir-interceptor", "ir-otp", "ir-otp-modal", "ir-password-validator", "ir-reset-password", "ir-sidebar", "ir-spinner", "ir-title", "ir-toast", "ir-toast-alert", "ir-toast-provider", "ir-user-form-panel", "ir-user-form-panel-drawer", "ir-validator", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-user-management-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrUserManagementTable);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-password-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-reset-password":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-toast-provider":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-user-form-panel":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-user-form-panel-drawer":
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

export { IrUserManagementTable as I, defineCustomElement as d };

//# sourceMappingURL=ir-user-management-table2.js.map