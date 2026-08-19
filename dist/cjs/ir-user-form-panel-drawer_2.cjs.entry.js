'use strict';

var index = require('./index-DgHWBwDV.js');
var locales_store = require('./locales.store-CqlNSy6z.js');
var irInterceptor_store = require('./ir-interceptor.store-Xl3b3GY8.js');
var moment = require('./moment-CdViwxPQ.js');
var user_service = require('./user.service-eE0dmpkb.js');
var functions = require('./functions-mvRDRfzA.js');
var system_service = require('./system.service-q3G6_5Tb.js');
var utils = require('./utils-BHTfkyQu.js');
require('./index-daCuTVuG.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-CgquPLci.js');
require('./type-Dy9pVS4V.js');

const irUserFormPanelDrawerCss = () => `.sc-ir-user-form-panel-drawer-h{display:block}`;

const IrUserFormPanelDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar");
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
        return (index.h("ir-drawer", { key: '330797137ccae69b0ef165a715ea14441bbdd600', onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!e.detail) {
                    return;
                }
                this.closeSideBar.emit(null);
            }, label: this.isEdit ? this.user.username : 'Create New User', open: this.open }, this.open && (index.h("ir-user-form-panel", { key: '02b49b75c7f54972cfb57a69b4b1601250cc0300', user: this.user, userTypes: this.userTypes, isEdit: this.isEdit, language: this.language, property_id: this.property_id, haveAdminPrivileges: this.haveAdminPrivileges, superAdminId: this.superAdminId, userTypeCode: this.userTypeCode, allowedUsersTypes: this.allowedUsersTypes, baseUserTypeCode: this.baseUserTypeCode, formId: formId })), index.h("div", { key: '160d7ab8d6f77286f0c7b3769da4cb33286166f2', slot: "footer", class: 'ir__drawer-footer' }, index.h("ir-custom-button", { key: 'f188ab88204d328e147dce8374a1ab1ec36504d4', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", appearance: "filled", variant: "neutral", size: "m" }, locales_store.locales?.entries?.Lcz_Cancel), index.h("ir-custom-button", { key: '2878bc744bad1e6f2315c73e4ac1335a8e3f167e', form: formId, loading: irInterceptor_store.isRequestPending('/Handle_Exposed_User'), "data-testid": "save", size: "m", class: "flex-fill", type: "submit", variant: "brand" }, locales_store.locales?.entries?.Lcz_Save))));
    }
};
IrUserFormPanelDrawer.style = irUserFormPanelDrawerCss();

const irUserManagementTableCss = () => `.sc-ir-user-management-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.sc-ir-user-management-table-h{box-sizing:border-box !important}.sc-ir-user-management-table-h *.sc-ir-user-management-table,.sc-ir-user-management-table-h *.sc-ir-user-management-table::before,.sc-ir-user-management-table-h *.sc-ir-user-management-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-user-management-table{display:none !important}.badge.sc-ir-user-management-table{border:none;padding:0.2rem 0.3rem}.badge.sc-ir-user-management-table:disabled{cursor:default}`;

const tableCss = () => `.sc-ir-user-management-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-user-management-table{overflow-x:auto}.table--container.sc-ir-user-management-table,.data-table.sc-ir-user-management-table{height:100%}.ir-table-row.sc-ir-user-management-table td.sc-ir-user-management-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-user-management-table td.sc-ir-user-management-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-user-management-table tbody.sc-ir-user-management-table tr.sc-ir-user-management-table:last-child>td.sc-ir-user-management-table{border-bottom:0 !important}.cell--align-start.sc-ir-user-management-table{text-align:start !important}.cell--align-center.sc-ir-user-management-table{text-align:center !important}.cell--align-end.sc-ir-user-management-table{text-align:end !important}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sc-ir-user-management-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sc-ir-user-management-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-user-management-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-user-management-table,.ir-table-row.sc-ir-user-management-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-user-management-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sortable.sc-ir-user-management-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sortable.sc-ir-user-management-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sortable.sc-ir-user-management-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-user-management-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-user-management-table svg.sc-ir-user-management-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-user-management-table:hover td.sc-ir-user-management-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-user-management-table:hover td.sc-ir-user-management-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-user-management-table:active td.sc-ir-user-management-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-user-management-table td.sc-ir-user-management-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-user-management-table:hover td.sc-ir-user-management-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-user-management-table:active td.sc-ir-user-management-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-user-management-table .empty-row.sc-ir-user-management-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-user-management-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-user-management-table{position:sticky !important;right:0;background-color:white}`;

const IrUserManagementTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetData = index.createEvent(this, "resetData");
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
    resetData;
    dialogRef;
    userService = new user_service.UserService();
    systemService = new system_service.SystemService();
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
        utils.showToast({
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
    //     showToast({
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
        return (index.h(index.Host, { key: '54e455a7fbf811b61162f9dc45279dc5a5338b10' }, index.h("section", { key: 'ac98f8c1f956d8d05d73f3fb173730ae0b851042', class: "table-container h-100  w-100 m-0 table-responsive" }, index.h("table", { key: 'cabdbed89dd56c819cde1372b32bb41c39228b02', class: "table" }, index.h("thead", { key: '80873dc377f406434cee0338bfd21d7dddf56f56' }, index.h("tr", { key: 'addb6341d29a8b208bc951fa622cabaf110c5a58' }, index.h("th", { key: 'eb01fe3c4d25ec9c450fa6733fbc4de8073f8f68', class: "text-left" }, locales_store.locales.entries.Lcz_Username ?? 'Username'), index.h("th", { key: 'f1e30ca8cdebfaa3c523570d1ba3ec1b3d2c7544', class: "text-left" }, locales_store.locales.entries.Lcz_Email), index.h("th", { key: '4d868f80e09e88c474179327c740cac59b17c22c', class: "text-left" }, locales_store.locales.entries.Lcz_Mobile ?? 'Mobile'), index.h("th", { key: 'c1a1f9662572ec0605d05965ccea8eca26f4fffc', class: "text-left" }, locales_store.locales.entries.Lcz_Role), index.h("th", { key: '26c0855414602bad3d04e3c4589e0e0aaaf85b90', class: "text-left small", style: { fontWeight: 'bold' } }, index.h("p", { key: 'd6de82f0cfd4cfa616cb4489a4d115976b5768bb', class: "m-0 p-0 " }, locales_store.locales.entries.Lcz_CreatedAt), index.h("p", { key: '381693f29a226674bdd5e5747b8e6c58d9180edb', class: "m-0 p-0" }, locales_store.locales.entries.Lcz_LastSignedIn)), this.haveAdminPrivileges && index.h("th", { key: '33bd0cf9f0c20984074b56b310b9532f97153fac' }, locales_store.locales.entries.Lcz_Active), index.h("th", { key: '0b9846c3796a6f78c07e959d0d8cf1f28768e08f', class: 'action-row' }, this.canCreate && (index.h(index.Fragment, { key: '5073a6d1d867d3f43690461b9f4de311491f1701' }, index.h("ir-custom-button", { key: '693e7aa29f617c4eb7b5a5835d12ca64b063dbb3', appearance: "plain", variant: "neutral", id: "new-user-btn", onClickHandler: () => {
                this.verifyAdminAction({
                    type: 'user',
                    mode: 'create',
                    user: null,
                });
            } }, index.h("wa-icon", { key: 'b36086659ab4606698a4e69c7f206be9762fbc7b', name: "plus", style: { fontSize: '1.2rem' } })), index.h("wa-tooltip", { key: '54a0a9807ffcd28e09a2d00c1077dbad030a4765', for: "new-user-btn" }, locales_store.locales.entries.Lcz_CreateUser)))))), index.h("tbody", { key: '5a99f1ff54db5295d9a7e3b88f5749282c0a2780' }, this.users.map(user => {
            const isUserSuperAdmin = user.type.toString() === this.superAdminId;
            const latestSignIn = user.sign_ins ? user.sign_ins[0] : null;
            const latestSignInDate = latestSignIn ? moment.hooks(latestSignIn.date, 'YYYY-MM-DD') : null;
            const isLastSignInOld = latestSignInDate ? moment.hooks().diff(latestSignInDate, 'days') > 30 : false;
            return (index.h("tr", { key: user.id, class: "ir-table-row" }, index.h("td", null, user.username), index.h("td", null, user.email, this.haveAdminPrivileges && (index.h("span", { style: { marginLeft: '0.5rem', color: `var(--wa-color-${user.is_email_verified ? 'success' : 'danger'}-fill-loud)` }, class: `small` }, user.is_email_verified ? locales_store.locales.entries.Lcz_Verified : locales_store.locales.entries.Lcz_NotVerified))), index.h("td", null, user.mobile ?? 'N/A'), index.h("td", null, user.type.toString() === this.superAdminId ? locales_store.locales.entries.Lcz_SuperAdmin : this.userTypes.get(user.type.toString())), index.h("td", { class: "small" }, index.h("p", { class: "m-0 p-0" }, new Date(user.created_on).getFullYear() === 1900 || !user.created_on ? 'N/A' : moment.hooks(user.created_on, 'YYYY-MM-DD').format('DD-MMM-YYYY')), index.h("p", { class: `m-0 p-0`, style: { color: isLastSignInOld ? 'var(--wa-color-danger-fill-loud)' : '' } }, latestSignIn && new Date(latestSignIn.date).getFullYear() > 1900
                ? moment.hooks(latestSignIn.date, 'YYYY-MM-DD').format('DD-MMM-YYYY') + ' ' + functions._formatTime(latestSignIn.hour.toString(), latestSignIn.minute.toString())
                : 'N/A')), this.haveAdminPrivileges && (index.h("td", null, this.haveAdminPrivileges && !this.isSuperAdmin && user.type.toString() === '17'
                ? null
                : !isUserSuperAdmin && (index.h("wa-switch", { onchange: e => this.handleUserActiveChange(e, user), defaultChecked: user.is_active, checked: user.is_active })))), index.h("td", { class: 'action-row' }, (this.canEdit || this.canDelete) && ((!this.isSuperAdmin && !isUserSuperAdmin) || this.isSuperAdmin) && (index.h("div", { class: "icons-container  d-flex align-items-center" }, this.canEdit && (index.h(index.Fragment, null, index.h("ir-custom-button", { "data-testid": "edit", onClickHandler: () => {
                    this.verifyAdminAction({
                        type: 'user',
                        mode: 'edit',
                        user,
                    });
                }, appearance: "plain", variant: "neutral", id: `edit-user-${user.id}` }, index.h("wa-icon", { name: "edit", style: { fontSize: '1.2rem' } })), index.h("wa-tooltip", { for: `edit-user-${user.id}` }, locales_store.locales.entries.Lcz_EditUser))), this.canDelete && !isUserSuperAdmin && (this.isSuperAdmin || user.type.toString() !== '17') && (index.h(index.Fragment, null, index.h("ir-custom-button", { onClickHandler: async () => {
                    const res = await this.verifyAdminAction({
                        type: 'user',
                        mode: 'delete',
                        user,
                    });
                    if (res === 'cancelled') {
                        return;
                    }
                    this.openModal(user, 'delete');
                }, "data-testid": "delete", variant: "danger", appearance: "plain", id: `delete-user-${user.id}` }, index.h("wa-icon", { name: "trash-can", style: { fontSize: '1.2rem' } })), index.h("wa-tooltip", { for: `delete-user-${user.id}` }, locales_store.locales.entries.Lcz_DeleteUser))))))));
        })))), index.h("ir-user-form-panel-drawer", { key: '9905814cace5b37774e8244e4b7501ffbaf24581', open: this.currentTrigger !== null && this.currentTrigger?.type !== 'delete', property_id: this.property_id, baseUserTypeCode: this.baseUserTypeCode, superAdminId: this.superAdminId, allowedUsersTypes: this.allowedUsersTypes, userTypeCode: this.userTypeCode, haveAdminPrivileges: this.haveAdminPrivileges, onCloseSideBar: () => (this.currentTrigger = null), slot: "sidebar-body", user: this.currentTrigger?.user, isEdit: this.currentTrigger?.isEdit }), index.h("ir-dialog", { key: '2cfeff2f4fb0917d5c091762323b37b11ba5ed01', label: 'Alert', onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.user = null;
                this.modalType = null;
            }, ref: el => (this.dialogRef = el) }, index.h("span", { key: '07f02ef9ff2b57a1c7f45e78c78adb2721b5899a' }, this.modalType === 'delete'
            ? `${locales_store.locales.entries.Lcz_AreYouSureToDelete} ${this.user?.username}?`
            : `${locales_store.locales.entries.Lcz_AreYouSureToUnverify} ${this.maskEmail(this.user?.email)}`), index.h("div", { key: 'd4301d5b5adc4363fc9255ca3c5d0de934423046', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: 'fd819782bb5b6e81a9118635db5ac9b9c1cc38fc', "data-dialog": "close", size: "m", appearance: "filled" }, "Cancel"), index.h("ir-custom-button", { key: 'beadec10963061f7cc7875af0352d32e7631f71a', size: "m", loading: irInterceptor_store.isRequestPending('/Handle_Exposed_User'), appearance: "accent", variant: this.modalType === 'verify' ? 'brand' : 'danger', onClickHandler: this.executeUserAction.bind(this) }, this.modalType === 'verify' ? locales_store.locales.entries.Lcz_Confirm : locales_store.locales.entries.Lcz_Delete)))));
    }
    static get watchers() { return {
        "haveAdminPrivileges": [{
                "handleChange": 0
            }]
    }; }
};
IrUserManagementTable.style = irUserManagementTableCss() + tableCss();

exports.ir_user_form_panel_drawer = IrUserFormPanelDrawer;
exports.ir_user_management_table = IrUserManagementTable;
