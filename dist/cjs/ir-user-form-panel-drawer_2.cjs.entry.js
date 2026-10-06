'use strict';

var index = require('./index-CQkpA5n3.js');
var irInterceptor_store = require('./ir-interceptor.store-B6XUQQuI.js');
var t = require('./t-wyGILxEL.js');
var moment = require('./moment-CdViwxPQ.js');
var user_service = require('./user.service-BhF_5jpL.js');
var functions = require('./functions-C5raR8yq.js');
var system_service = require('./system.service-q3G6_5Tb.js');
var utils = require('./utils-B_P0SLOr.js');
var irDate = require('./ir-date-SZW0yc7z.js');
require('./locale-scope-C7rmpwuA.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./calendar-data-Br2L_0sg.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
require('./types-BVJQZ50e.js');
require('./language-observer-DKp37LIu.js');

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
        return (index.h("ir-drawer", { key: '989c00af69b6e0360bad8a9e36ab079942930142', onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!e.detail) {
                    return;
                }
                this.closeSideBar.emit(null);
            }, label: this.isEdit ? this.user.username : t.t('Lcz_CreateNewUser', { fallback: 'Create New User' }), open: this.open }, this.open && (index.h("ir-user-form-panel", { key: 'f23555a94e42c2dda9aaf3dc77ddcfd366a729e8', user: this.user, userTypes: this.userTypes, isEdit: this.isEdit, language: this.language, property_id: this.property_id, haveAdminPrivileges: this.haveAdminPrivileges, superAdminId: this.superAdminId, userTypeCode: this.userTypeCode, allowedUsersTypes: this.allowedUsersTypes, baseUserTypeCode: this.baseUserTypeCode, formId: formId })), index.h("div", { key: 'e0b9ce54f523d7fd9a4369b677e1b0482c1bc5cd', slot: "footer", class: 'ir__drawer-footer' }, index.h("ir-custom-button", { key: '0c170830da79620a1c42158c169650062233ae71', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", appearance: "filled", variant: "neutral", size: "m" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '238b1b2a38d6a3b801c430b53f776da368984084', form: formId, loading: irInterceptor_store.isRequestPending('/Handle_Exposed_User'), "data-testid": "save", size: "m", class: "flex-fill", type: "submit", variant: "brand" }, t.t('Lcz_Save', { fallback: 'Save' })))));
    }
};
IrUserFormPanelDrawer.style = irUserFormPanelDrawerCss();

const irUserManagementTableCss = () => `.sc-ir-user-management-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.sc-ir-user-management-table-h{box-sizing:border-box !important}.sc-ir-user-management-table-h *.sc-ir-user-management-table,.sc-ir-user-management-table-h *.sc-ir-user-management-table::before,.sc-ir-user-management-table-h *.sc-ir-user-management-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-user-management-table{display:none !important}.badge.sc-ir-user-management-table{border:none;padding:0.2rem 0.3rem}.badge.sc-ir-user-management-table:disabled{cursor:default}.ir-text-start.sc-ir-user-management-table{text-align:start}`;

const tableCss = () => `.sc-ir-user-management-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-user-management-table{overflow-x:auto}.table--container.sc-ir-user-management-table,.data-table.sc-ir-user-management-table{height:100%}.ir-table-row.sc-ir-user-management-table td.sc-ir-user-management-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-user-management-table td.sc-ir-user-management-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-user-management-table tbody.sc-ir-user-management-table tr.sc-ir-user-management-table:last-child>td.sc-ir-user-management-table{border-bottom:0 !important}.cell--align-start.sc-ir-user-management-table{text-align:start !important}.cell--align-center.sc-ir-user-management-table{text-align:center !important}.cell--align-end.sc-ir-user-management-table{text-align:end !important}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sc-ir-user-management-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sc-ir-user-management-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-user-management-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-user-management-table,.ir-table-row.sc-ir-user-management-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-user-management-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sortable.sc-ir-user-management-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sortable.sc-ir-user-management-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sortable.sc-ir-user-management-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-user-management-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-user-management-table svg.sc-ir-user-management-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-user-management-table:hover td.sc-ir-user-management-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-user-management-table:hover td.sc-ir-user-management-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-user-management-table:active td.sc-ir-user-management-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-user-management-table td.sc-ir-user-management-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-user-management-table:hover td.sc-ir-user-management-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-user-management-table:active td.sc-ir-user-management-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-user-management-table .empty-row.sc-ir-user-management-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-user-management-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-user-management-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

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
            title: t.t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }),
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
        return (index.h(index.Host, { key: '32225969dd253bec985e74ecdd6d44b9b94fbb3b' }, index.h("section", { key: '25ad6741ce2effbede2fdba582b78ba3b3d210e6', class: "table-container h-100  w-100 m-0 table-responsive" }, index.h("table", { key: 'b9f2e1fadde5e197671437af10d48d283c3b6b19', class: "table" }, index.h("thead", { key: 'c917a7e68dce1fe8c18cbaad39de03978042660f' }, index.h("tr", { key: 'aef66ef1baa068dec4401216dd7a74e8758ce0a2' }, index.h("th", { key: 'eb4e66406260008c792901bc4c50b8ed2f9d3e72', class: "ir-text-start" }, t.t('Lcz_Username', { fallback: 'Username' })), index.h("th", { key: '5c538761118ff6d11aece8e55792e86d40a480cb', class: "ir-text-start" }, t.t('Lcz_Email', { fallback: 'Email' })), index.h("th", { key: '5fed478917687f17e863e42c8aa0d859c5821336', class: "ir-text-start" }, t.t('Lcz_Mobile', { fallback: 'Mobile' })), index.h("th", { key: '391f416821a9de03bb68777afb26e5a94b0036cf', class: "ir-text-start" }, t.t('Lcz_Role')), index.h("th", { key: '6e16d74e429de0a243c2d332a63ee007fd631a84', class: "ir-text-start small", style: { fontWeight: 'bold' } }, index.h("p", { key: '0dfb0bd4ca7fb6adc50132c820903fc9087877b0', class: "m-0 p-0 " }, t.t('Lcz_CreatedAt')), index.h("p", { key: '2844603f3c88c3e8262d4af9a1aa073bca2b6c72', class: "m-0 p-0" }, t.t('Lcz_LastSignedIn'))), this.haveAdminPrivileges && index.h("th", { key: '46fd0578c5382bd74c4d7d20df9e4321848dcb91' }, t.t('Lcz_Active', { fallback: 'Active' })), index.h("th", { key: 'aa467c14e7236bb7b32fea0e0733dd61f4b2203d', class: 'action-row' }, this.canCreate && (index.h(index.Fragment, { key: 'd725d55a25cc529d3df8c5a155e2a6184c738f00' }, index.h("ir-custom-button", { key: 'efb0495f48d1b4843c69bb1f1a7b9210f9f20b0c', appearance: "plain", variant: "neutral", id: "new-user-btn", onClickHandler: () => {
                this.verifyAdminAction({
                    type: 'user',
                    mode: 'create',
                    user: null,
                });
            } }, index.h("wa-icon", { key: '60d71c52d56efbaae21348bc81d1bc3e7355854d', name: "plus", style: { fontSize: '1.2rem' } })), index.h("wa-tooltip", { key: '9c5a6618fcb469aecf0e9f92fa3780ef5b571440', for: "new-user-btn" }, t.t('Lcz_CreateUser'))))))), index.h("tbody", { key: '3e23f978efeeae066dadd7d3e0b79f6157447d74' }, this.users.map(user => {
            const isUserSuperAdmin = user.type.toString() === this.superAdminId;
            const latestSignIn = user.sign_ins ? user.sign_ins[0] : null;
            const latestSignInDate = latestSignIn ? moment.hooks(latestSignIn.date, 'YYYY-MM-DD') : null;
            const isLastSignInOld = latestSignInDate ? moment.hooks().diff(latestSignInDate, 'days') > 30 : false;
            return (index.h("tr", { key: user.id, class: "ir-table-row" }, index.h("td", null, user.username), index.h("td", null, user.email, this.haveAdminPrivileges && (index.h("span", { style: { marginInlineStart: '0.5rem', color: `var(--wa-color-${user.is_email_verified ? 'success' : 'danger'}-fill-loud)` }, class: `small` }, user.is_email_verified ? t.t('Lcz_Verified') : t.t('Lcz_NotVerified')))), index.h("td", null, user.mobile ?? t.t('Lcz_NotAvailable', { fallback: 'N/A' })), index.h("td", null, user.type.toString() === this.superAdminId ? t.t('Lcz_SuperAdmin') : this.userTypes.get(user.type.toString())), index.h("td", { class: "small" }, index.h("p", { class: "m-0 p-0" }, new Date(user.created_on).getFullYear() === 1900 || !user.created_on
                ? t.t('Lcz_NotAvailable', { fallback: 'N/A' })
                : irDate.formatDate(user.created_on, 'DD-MMM-YYYY')), index.h("p", { class: `m-0 p-0`, style: { color: isLastSignInOld ? 'var(--wa-color-danger-fill-loud)' : '' } }, latestSignIn && new Date(latestSignIn.date).getFullYear() > 1900
                ? irDate.formatDate(latestSignIn.date, 'DD-MMM-YYYY') + ' ' + functions._formatTime(latestSignIn.hour.toString(), latestSignIn.minute.toString())
                : t.t('Lcz_NotAvailable', { fallback: 'N/A' }))), this.haveAdminPrivileges && (index.h("td", null, this.haveAdminPrivileges && !this.isSuperAdmin && user.type.toString() === '17'
                ? null
                : !isUserSuperAdmin && (index.h("wa-switch", { onchange: e => this.handleUserActiveChange(e, user), defaultChecked: user.is_active, checked: user.is_active })))), index.h("td", { class: 'action-row' }, (this.canEdit || this.canDelete) && ((!this.isSuperAdmin && !isUserSuperAdmin) || this.isSuperAdmin) && (index.h("div", { class: "icons-container  d-flex align-items-center" }, this.canEdit && (index.h(index.Fragment, null, index.h("ir-custom-button", { "data-testid": "edit", onClickHandler: () => {
                    this.verifyAdminAction({
                        type: 'user',
                        mode: 'edit',
                        user,
                    });
                }, appearance: "plain", variant: "neutral", id: `edit-user-${user.id}` }, index.h("wa-icon", { name: "edit", style: { fontSize: '1.2rem' } })), index.h("wa-tooltip", { for: `edit-user-${user.id}` }, t.t('Lcz_EditUser')))), this.canDelete && !isUserSuperAdmin && (this.isSuperAdmin || user.type.toString() !== '17') && (index.h(index.Fragment, null, index.h("ir-custom-button", { onClickHandler: async () => {
                    const res = await this.verifyAdminAction({
                        type: 'user',
                        mode: 'delete',
                        user,
                    });
                    if (res === 'cancelled') {
                        return;
                    }
                    this.openModal(user, 'delete');
                }, "data-testid": "delete", variant: "danger", appearance: "plain", id: `delete-user-${user.id}` }, index.h("wa-icon", { name: "trash-can", style: { fontSize: '1.2rem' } })), index.h("wa-tooltip", { for: `delete-user-${user.id}` }, t.t('Lcz_DeleteUser')))))))));
        })))), index.h("ir-user-form-panel-drawer", { key: '97005acdb858246eea3a56e87e1e2c00b283bd9f', open: this.currentTrigger !== null && this.currentTrigger?.type !== 'delete', property_id: this.property_id, baseUserTypeCode: this.baseUserTypeCode, superAdminId: this.superAdminId, allowedUsersTypes: this.allowedUsersTypes, userTypeCode: this.userTypeCode, haveAdminPrivileges: this.haveAdminPrivileges, onCloseSideBar: () => (this.currentTrigger = null), slot: "sidebar-body", user: this.currentTrigger?.user, isEdit: this.currentTrigger?.isEdit }), index.h("ir-dialog", { key: '3687691782688523e1edc6eb81d29e5d439a757f', label: t.t('Lcz_Alert', { fallback: 'Alert' }), onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.user = null;
                this.modalType = null;
            }, ref: el => (this.dialogRef = el) }, index.h("span", { key: 'd4c996228f45f1e2aee43fddd39475b1c786650f' }, this.modalType === 'delete' ? `${t.t('Lcz_AreYouSureToDelete')} ${this.user?.username}?` : `${t.t('Lcz_AreYouSureToUnverify')} ${this.maskEmail(this.user?.email)}`), index.h("div", { key: '7ef7d46f7075f5decbffd0d737241be0120365d5', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '1bf847ff39bd91de47a80228ea77e704bc9e2821', "data-dialog": "close", size: "m", appearance: "filled" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '3e5d649afe654205899adde827d7fbb57f3550ec', size: "m", loading: irInterceptor_store.isRequestPending('/Handle_Exposed_User'), appearance: "accent", variant: this.modalType === 'verify' ? 'brand' : 'danger', onClickHandler: this.executeUserAction.bind(this) }, this.modalType === 'verify' ? t.t('Lcz_Confirm', { fallback: 'Confirm' }) : t.t('Lcz_Delete', { fallback: 'Delete' }))))));
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
