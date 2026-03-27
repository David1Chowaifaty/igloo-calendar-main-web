'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const locales_store = require('./locales.store-32782582.js');
const irInterceptor_store = require('./ir-interceptor.store-d60f5a34.js');
const moment = require('./moment-1780b03a.js');
const user_service = require('./user.service-b974cc8b.js');
const functions = require('./functions-337ee2a2.js');
const system_service = require('./system.service-101141de.js');
require('./index-fbf1fe1d.js');
require('./utils-dc8cc4b1.js');
require('./index-8bb117a0.js');
require('./calendar-data-0598de26.js');
require('./type-393ac773.js');
require('./axios-6e678d52.js');

const irUserFormPanelDrawerCss = ".sc-ir-user-form-panel-drawer-h{display:block}";
const IrUserFormPanelDrawerStyle0 = irUserFormPanelDrawerCss;

const IrUserFormPanelDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
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
        return (index.h("ir-drawer", { key: '6d10e8ac93e05675e4b3d010dd565842b6a24c87', onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!e.detail) {
                    return;
                }
                this.closeSideBar.emit(null);
            }, label: this.isEdit ? this.user.username : 'Create New User', open: this.open }, this.open && (index.h("ir-user-form-panel", { key: '0c55f7f7c3cfc38e80d91934898bf9759858eab2', user: this.user, userTypes: this.userTypes, isEdit: this.isEdit, language: this.language, property_id: this.property_id, haveAdminPrivileges: this.haveAdminPrivileges, superAdminId: this.superAdminId, userTypeCode: this.userTypeCode, allowedUsersTypes: this.allowedUsersTypes, baseUserTypeCode: this.baseUserTypeCode, formId: formId })), index.h("div", { key: '71787fd23d824ff5315c27efdafc3d274fbbb4f1', slot: "footer", class: 'ir__drawer-footer' }, index.h("ir-custom-button", { key: '733b0555e6258ea677f6e5321e91acdfb393aad9', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", appearance: "filled", variant: "neutral", size: "medium" }, locales_store.locales?.entries?.Lcz_Cancel), index.h("ir-custom-button", { key: '1d69543687f2ba23f79428b169da043a286e17a9', form: formId, loading: irInterceptor_store.isRequestPending('/Handle_Exposed_User'), "data-testid": "save", size: "medium", class: "flex-fill", type: "submit", variant: "brand" }, locales_store.locales?.entries?.Lcz_Save))));
    }
};
IrUserFormPanelDrawer.style = IrUserFormPanelDrawerStyle0;

const irUserManagementTableCss = ".sc-ir-user-management-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.sc-ir-user-management-table-h{box-sizing:border-box !important}.sc-ir-user-management-table-h *.sc-ir-user-management-table,.sc-ir-user-management-table-h *.sc-ir-user-management-table::before,.sc-ir-user-management-table-h *.sc-ir-user-management-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-user-management-table{display:none !important}.badge.sc-ir-user-management-table{border:none;padding:0.2rem 0.3rem}.badge.sc-ir-user-management-table:disabled{cursor:default}";
const IrUserManagementTableStyle0 = irUserManagementTableCss;

const tableCss = ".sc-ir-user-management-table-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-user-management-table td.sc-ir-user-management-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-user-management-table{overflow-x:auto}.table.sc-ir-user-management-table td.sc-ir-user-management-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-user-management-table tbody.sc-ir-user-management-table tr.sc-ir-user-management-table:last-child>td.sc-ir-user-management-table{border-bottom:0 !important}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sc-ir-user-management-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sc-ir-user-management-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-user-management-table .empty-row.sc-ir-user-management-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-user-management-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-user-management-table td.sc-ir-user-management-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-user-management-table td.sc-ir-user-management-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-user-management-table,.ir-table-row.sc-ir-user-management-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-user-management-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-user-management-table td.sc-ir-user-management-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sortable.sc-ir-user-management-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sortable.sc-ir-user-management-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sortable.sc-ir-user-management-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-user-management-table:hover td.sc-ir-user-management-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-user-management-table:hover td.sc-ir-user-management-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-user-management-table:active td.sc-ir-user-management-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-user-management-table:hover td.sc-ir-user-management-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-user-management-table:active td.sc-ir-user-management-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-user-management-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-user-management-table svg.sc-ir-user-management-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-user-management-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-user-management-table,.data-table.sc-ir-user-management-table{height:100%}";
const IrUserManagementTableStyle1 = tableCss;

const IrUserManagementTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toast = index.createEvent(this, "toast", 7);
        this.resetData = index.createEvent(this, "resetData", 7);
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
        return (index.h(index.Host, { key: 'a638d580af0673d3a40756fc6fe4f00f1c41892c' }, index.h("section", { key: 'b6a729ce3ce4b2ea231baad558aaf8ff66f5defd', class: "table-container h-100  w-100 m-0 table-responsive" }, index.h("table", { key: 'c25925c39d0b6f88eda67afb68129311631cfd60', class: "table" }, index.h("thead", { key: 'a56005d1cff0a0f92f0788ad98a3f9cb63ed5649' }, index.h("tr", { key: 'cfb45fcb097ea5ab11b5c073a687f850eac40df6' }, index.h("th", { key: '173d9ad8a02219a1acf8e4a19541a47419788372', class: "text-left" }, locales_store.locales.entries.Lcz_Username ?? 'Username'), index.h("th", { key: 'b572c96db042b563de6eafc3f0f6b5a3cb6eeb55', class: "text-left" }, locales_store.locales.entries.Lcz_Email), index.h("th", { key: '733597371a4a24a0a22d554b4127221725c52b18', class: "text-left" }, locales_store.locales.entries.Lcz_Mobile ?? 'Mobile'), index.h("th", { key: '8946c7da5a6456cd364035c601caf8fee6d26e47', class: "text-left" }, locales_store.locales.entries.Lcz_Role), index.h("th", { key: '4dc598578e39c9b4e2b3476bf6e1e9019048efa3', class: "text-left small", style: { fontWeight: 'bold' } }, index.h("p", { key: '3dd681dc4226f42031080cce857c29dc536b2028', class: "m-0 p-0 " }, locales_store.locales.entries.Lcz_CreatedAt), index.h("p", { key: 'a5a834f49513ace4fcbad06af5fd366358d17ab9', class: "m-0 p-0" }, locales_store.locales.entries.Lcz_LastSignedIn)), this.haveAdminPrivileges && index.h("th", { key: 'f3078a8d4781c08d3934d31afec3798a8ae2ae3b' }, locales_store.locales.entries.Lcz_Active), index.h("th", { key: '9098cb0ea6efd893538452d4bd7ae1852215f17e', class: 'action-row' }, this.canCreate && (index.h(index.Fragment, { key: 'c407d4e3ffc33885c86bb5954299555ef4cace08' }, index.h("ir-custom-button", { key: '2c240ba49e58185433b8dc6657582f4fe3988786', appearance: "plain", variant: "neutral", id: "new-user-btn", onClickHandler: () => {
                this.verifyAdminAction({
                    type: 'user',
                    mode: 'create',
                    user: null,
                });
            } }, index.h("wa-icon", { key: '81679e3dd48b8d2a9a9ab3d6f51e61b6dab0ba6a', name: "plus", style: { fontSize: '1.2rem' } })), index.h("wa-tooltip", { key: '19f7bfdd1e0f6bdab74351d4db747f68009fc778', for: "new-user-btn" }, locales_store.locales.entries.Lcz_CreateUser)))))), index.h("tbody", { key: '557812587c72e96b0616afa700d1f7dc73876ba3' }, this.users.map(user => {
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
        })))), index.h("ir-user-form-panel-drawer", { key: '2dab7745e0acfa18ca33033930e058bd8d41388d', open: this.currentTrigger !== null && this.currentTrigger?.type !== 'delete', property_id: this.property_id, baseUserTypeCode: this.baseUserTypeCode, superAdminId: this.superAdminId, allowedUsersTypes: this.allowedUsersTypes, userTypeCode: this.userTypeCode, haveAdminPrivileges: this.haveAdminPrivileges, onCloseSideBar: () => (this.currentTrigger = null), slot: "sidebar-body", user: this.currentTrigger?.user, isEdit: this.currentTrigger?.isEdit }), index.h("ir-dialog", { key: '639b9d5d332e5b332b6bada31c07c8eb14542eab', label: 'Alert', onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.user = null;
                this.modalType = null;
            }, ref: el => (this.dialogRef = el) }, index.h("span", { key: 'ebed7ed519bf20a319a044a084ffddd614cf69f8' }, this.modalType === 'delete'
            ? `${locales_store.locales.entries.Lcz_AreYouSureToDelete} ${this.user?.username}?`
            : `${locales_store.locales.entries.Lcz_AreYouSureToUnverify} ${this.maskEmail(this.user?.email)}`), index.h("div", { key: '2713b320333b788b00f124435b21627ffa3c582e', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '5374873ca496022d9ee15bc45849b35e43b50ab6', "data-dialog": "close", size: "medium", appearance: "filled" }, "Cancel"), index.h("ir-custom-button", { key: '48678dd191264d2cdc9183d4b76c1046384114db', size: "medium", loading: irInterceptor_store.isRequestPending('/Handle_Exposed_User'), appearance: "accent", variant: this.modalType === 'verify' ? 'brand' : 'danger', onClickHandler: this.executeUserAction.bind(this) }, this.modalType === 'verify' ? locales_store.locales.entries.Lcz_Confirm : locales_store.locales.entries.Lcz_Delete)))));
    }
    static get watchers() { return {
        "haveAdminPrivileges": ["handleChange"]
    }; }
};
IrUserManagementTable.style = IrUserManagementTableStyle0 + IrUserManagementTableStyle1;

exports.ir_user_form_panel_drawer = IrUserFormPanelDrawer;
exports.ir_user_management_table = IrUserManagementTable;

//# sourceMappingURL=ir-user-form-panel-drawer_2.cjs.entry.js.map