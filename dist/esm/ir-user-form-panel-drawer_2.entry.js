import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host } from './index-0Di74WDd.js';
import { l as locales } from './locales.store-CPGnSUGJ.js';
import { i as isRequestPending } from './ir-interceptor.store-OTZhOdOP.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { U as UserService } from './user.service-CzTuCSyS.js';
import { _ as _formatTime } from './functions-CnLmIxRD.js';
import { S as SystemService } from './system.service-C5w04dmE.js';
import { h as showToast } from './utils-BeklM4gy.js';
import './index-D9zfa7Bx.js';
import './axios-CleaxLzD.js';
import './index-DeW5X45W.js';
import './calendar-data-wrvThdm8.js';
import './booking.dto-DWti87Wx.js';
import './type-CBqEYOkK.js';

const irUserFormPanelDrawerCss = () => `.sc-ir-user-form-panel-drawer-h{display:block}`;

const IrUserFormPanelDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeSideBar = createEvent(this, "closeSideBar");
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
        return (h("ir-drawer", { key: '2d79ae3e26a349130d962fc2d8d4d0014a9be8b0', onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!e.detail) {
                    return;
                }
                this.closeSideBar.emit(null);
            }, label: this.isEdit ? this.user.username : 'Create New User', open: this.open }, this.open && (h("ir-user-form-panel", { key: 'f7627068d09eb3782b749ddd78da502d634e30b8', user: this.user, userTypes: this.userTypes, isEdit: this.isEdit, language: this.language, property_id: this.property_id, haveAdminPrivileges: this.haveAdminPrivileges, superAdminId: this.superAdminId, userTypeCode: this.userTypeCode, allowedUsersTypes: this.allowedUsersTypes, baseUserTypeCode: this.baseUserTypeCode, formId: formId })), h("div", { key: '030b07bb14cbea33d61a7fae96bdb892d8dad7b9', slot: "footer", class: 'ir__drawer-footer' }, h("ir-custom-button", { key: 'b41838a7a199bf79a1afc36a1fee018ddf5d0306', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", appearance: "filled", variant: "neutral", size: "medium" }, locales?.entries?.Lcz_Cancel), h("ir-custom-button", { key: '7fce90078c8333d1f89f04d1e48d351523f90b6f', form: formId, loading: isRequestPending('/Handle_Exposed_User'), "data-testid": "save", size: "medium", class: "flex-fill", type: "submit", variant: "brand" }, locales?.entries?.Lcz_Save))));
    }
};
IrUserFormPanelDrawer.style = irUserFormPanelDrawerCss();

const irUserManagementTableCss = () => `.sc-ir-user-management-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.sc-ir-user-management-table-h{box-sizing:border-box !important}.sc-ir-user-management-table-h *.sc-ir-user-management-table,.sc-ir-user-management-table-h *.sc-ir-user-management-table::before,.sc-ir-user-management-table-h *.sc-ir-user-management-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-user-management-table{display:none !important}.badge.sc-ir-user-management-table{border:none;padding:0.2rem 0.3rem}.badge.sc-ir-user-management-table:disabled{cursor:default}`;

const tableCss = () => `.sc-ir-user-management-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-user-management-table{overflow-x:auto}.table--container.sc-ir-user-management-table,.data-table.sc-ir-user-management-table{height:100%}.ir-table-row.sc-ir-user-management-table td.sc-ir-user-management-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-user-management-table td.sc-ir-user-management-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,      background-color 0.15s ease-in-out,      border-color 0.15s ease-in-out,      box-shadow 0.15s ease-in-out}.table.sc-ir-user-management-table tbody.sc-ir-user-management-table tr.sc-ir-user-management-table:last-child>td.sc-ir-user-management-table{border-bottom:0 !important}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sc-ir-user-management-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sc-ir-user-management-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-user-management-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-user-management-table,.ir-table-row.sc-ir-user-management-table{transition:color 0.15s ease-in-out,      background-color 0.15s ease-in-out,      border-color 0.15s ease-in-out,      box-shadow 0.15s ease-in-out}.sortable.sc-ir-user-management-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sortable.sc-ir-user-management-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sortable.sc-ir-user-management-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sortable.sc-ir-user-management-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-user-management-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-user-management-table svg.sc-ir-user-management-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-user-management-table:hover td.sc-ir-user-management-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-user-management-table:hover td.sc-ir-user-management-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-user-management-table:active td.sc-ir-user-management-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-user-management-table td.sc-ir-user-management-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,      background-color 0.15s ease-in-out,      border-color 0.15s ease-in-out,      box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-user-management-table:hover td.sc-ir-user-management-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-user-management-table:active td.sc-ir-user-management-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-user-management-table .empty-row.sc-ir-user-management-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-user-management-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-user-management-table{position:sticky !important;right:0;background-color:white}`;

const IrUserManagementTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resetData = createEvent(this, "resetData");
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
        showToast({
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
        return (h(Host, { key: '7f5262a523a33915c69c28e27434653ab30229c7' }, h("section", { key: '9254d860304d067765f6bea551699ad56262a87d', class: "table-container h-100  w-100 m-0 table-responsive" }, h("table", { key: 'e2c6a9a1c6336426cea5440fdc6f46e983f58ffb', class: "table" }, h("thead", { key: '82f7c82d7afcfc569849cf04dd14ab1487624193' }, h("tr", { key: 'c58be2ffbec5bcd4ba2003ba6f07a350d58ab591' }, h("th", { key: '3928a1abc2baf58c352df27317cbeefbaba4202e', class: "text-left" }, locales.entries.Lcz_Username ?? 'Username'), h("th", { key: 'af094ad69eeebaa9b123a4db1ca1304331748db8', class: "text-left" }, locales.entries.Lcz_Email), h("th", { key: 'a210be560809f9e8f534867ed27b68261f60743f', class: "text-left" }, locales.entries.Lcz_Mobile ?? 'Mobile'), h("th", { key: '854bd03cdc724a0803b42f5230f64afaef289b12', class: "text-left" }, locales.entries.Lcz_Role), h("th", { key: 'bbb802b784b3b6f3e89a58d95915295c78671e79', class: "text-left small", style: { fontWeight: 'bold' } }, h("p", { key: '4a204bcb1a5a61576f84d2e7aaecb6309e8ad37e', class: "m-0 p-0 " }, locales.entries.Lcz_CreatedAt), h("p", { key: '1f28489642c6ca40603d40f629840c0730c2eae5', class: "m-0 p-0" }, locales.entries.Lcz_LastSignedIn)), this.haveAdminPrivileges && h("th", { key: '1d676a06f19fc56512bc182c8aca5c31ce3cfc9a' }, locales.entries.Lcz_Active), h("th", { key: 'f33543d661534002adde19528e291644bf49c354', class: 'action-row' }, this.canCreate && (h(Fragment, { key: '80c0eb90d162175af4274a950993f86524100934' }, h("ir-custom-button", { key: 'bf980ffd5ee137087bbb18563ae4656b08906b6c', appearance: "plain", variant: "neutral", id: "new-user-btn", onClickHandler: () => {
                this.verifyAdminAction({
                    type: 'user',
                    mode: 'create',
                    user: null,
                });
            } }, h("wa-icon", { key: '740b5232938044a2e4fcc23ea1b62ab77598003a', name: "plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'e9fafab53b86f95625d3fbf5c81030c4ebdaa0b6', for: "new-user-btn" }, locales.entries.Lcz_CreateUser)))))), h("tbody", { key: '97040d64488e37f76c057b8e2f607d285ba42f10' }, this.users.map(user => {
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
        })))), h("ir-user-form-panel-drawer", { key: '9c8752e388faf1c06c146c2a06bc657d8adbbcb4', open: this.currentTrigger !== null && this.currentTrigger?.type !== 'delete', property_id: this.property_id, baseUserTypeCode: this.baseUserTypeCode, superAdminId: this.superAdminId, allowedUsersTypes: this.allowedUsersTypes, userTypeCode: this.userTypeCode, haveAdminPrivileges: this.haveAdminPrivileges, onCloseSideBar: () => (this.currentTrigger = null), slot: "sidebar-body", user: this.currentTrigger?.user, isEdit: this.currentTrigger?.isEdit }), h("ir-dialog", { key: '4b8b778eb1c1ae890aa7824a59e757a0a5b6efa2', label: 'Alert', onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.user = null;
                this.modalType = null;
            }, ref: el => (this.dialogRef = el) }, h("span", { key: '5443c6eef3ee663ec7c7c1673888d197620216b4' }, this.modalType === 'delete'
            ? `${locales.entries.Lcz_AreYouSureToDelete} ${this.user?.username}?`
            : `${locales.entries.Lcz_AreYouSureToUnverify} ${this.maskEmail(this.user?.email)}`), h("div", { key: '33cc68644fae183e30c7bcf2c3c19377f5656bf7', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'e6b4b6b2d5a019769ad6baa01cfd19f03f6172bf', "data-dialog": "close", size: "medium", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: '97bbd91da0e81437e1a457f978ebc7efb81b1323', size: "medium", loading: isRequestPending('/Handle_Exposed_User'), appearance: "accent", variant: this.modalType === 'verify' ? 'brand' : 'danger', onClickHandler: this.executeUserAction.bind(this) }, this.modalType === 'verify' ? locales.entries.Lcz_Confirm : locales.entries.Lcz_Delete)))));
    }
    static get watchers() { return {
        "haveAdminPrivileges": [{
                "handleChange": 0
            }]
    }; }
};
IrUserManagementTable.style = irUserManagementTableCss() + tableCss();

export { IrUserFormPanelDrawer as ir_user_form_panel_drawer, IrUserManagementTable as ir_user_management_table };
