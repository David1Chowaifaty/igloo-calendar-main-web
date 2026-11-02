import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host } from './index-DKZeCK8T.js';
import { i as isRequestPending } from './ir-interceptor.store-DjDNm9TC.js';
import { t } from './t-Bvz1wS_D.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { U as UserService } from './user.service-cbn8DdPC.js';
import { _ as _formatTime } from './functions-Ebyqqazo.js';
import { S as SystemService } from './system.service-BqMFLSUd.js';
import { h as showToast } from './utils-BQHfpbFq.js';
import { f as formatDate } from './ir-date-XXNYhmSL.js';
import './locale-scope-Jre4lb6k.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './calendar-data-DWzivSW-.js';
import './booking.dto-DGwE7ON6.js';
import './type-9FR4Ndkd.js';
import './types-CB66a07H.js';
import './calendar-dates-D3hVfsrC.js';
import './language-observer-CHgzsZkY.js';

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
        return (h("ir-drawer", { key: '8dce51ad477178145afc0ff954becc96b93cb77a', onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!e.detail) {
                    return;
                }
                this.closeSideBar.emit(null);
            }, label: this.isEdit ? this.user.username : t('Lcz_CreateNewUser', { fallback: 'Create New User' }), open: this.open }, this.open && (h("ir-user-form-panel", { key: '2fa221218612692aaceb37c5440b40eb71d4b782', user: this.user, userTypes: this.userTypes, isEdit: this.isEdit, language: this.language, property_id: this.property_id, haveAdminPrivileges: this.haveAdminPrivileges, superAdminId: this.superAdminId, userTypeCode: this.userTypeCode, allowedUsersTypes: this.allowedUsersTypes, baseUserTypeCode: this.baseUserTypeCode, formId: formId })), h("div", { key: 'bf460782c33854aafdcbcda1016736f23e3f87ae', slot: "footer", class: 'ir__drawer-footer' }, h("ir-custom-button", { key: 'b9fa13ce329858b7a212a1d1ed80e7b7e8f9d60d', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", appearance: "filled", variant: "neutral", size: "m" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '3b1080477e0ee28d8307c195377d03f52372de7f', form: formId, loading: isRequestPending('/Handle_Exposed_User'), "data-testid": "save", size: "m", class: "flex-fill", type: "submit", variant: "brand" }, t('Lcz_Save', { fallback: 'Save' })))));
    }
};
IrUserFormPanelDrawer.style = irUserFormPanelDrawerCss();

const irUserManagementTableCss = () => `.sc-ir-user-management-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.sc-ir-user-management-table-h{box-sizing:border-box !important}.sc-ir-user-management-table-h *.sc-ir-user-management-table,.sc-ir-user-management-table-h *.sc-ir-user-management-table::before,.sc-ir-user-management-table-h *.sc-ir-user-management-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-user-management-table{display:none !important}.badge.sc-ir-user-management-table{border:none;padding:0.2rem 0.3rem}.badge.sc-ir-user-management-table:disabled{cursor:default}.ir-text-start.sc-ir-user-management-table{text-align:start}`;

const tableCss = () => `.sc-ir-user-management-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-user-management-table{overflow-x:auto}.table--container.sc-ir-user-management-table,.data-table.sc-ir-user-management-table{height:100%}.ir-table-row.sc-ir-user-management-table td.sc-ir-user-management-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-user-management-table td.sc-ir-user-management-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-user-management-table tbody.sc-ir-user-management-table tr.sc-ir-user-management-table:last-child>td.sc-ir-user-management-table{border-bottom:0 !important}.cell--align-start.sc-ir-user-management-table{text-align:start !important}.cell--align-center.sc-ir-user-management-table{text-align:center !important}.cell--align-end.sc-ir-user-management-table{text-align:end !important}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sc-ir-user-management-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sc-ir-user-management-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-user-management-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-user-management-table,.ir-table-row.sc-ir-user-management-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-user-management-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sortable.sc-ir-user-management-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sortable.sc-ir-user-management-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sortable.sc-ir-user-management-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-user-management-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-user-management-table svg.sc-ir-user-management-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-user-management-table:hover td.sc-ir-user-management-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-user-management-table:hover td.sc-ir-user-management-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-user-management-table:active td.sc-ir-user-management-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-user-management-table td.sc-ir-user-management-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-user-management-table:hover td.sc-ir-user-management-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-user-management-table:active td.sc-ir-user-management-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-user-management-table .empty-row.sc-ir-user-management-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-user-management-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-user-management-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

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
            title: t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }),
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
        return (h(Host, { key: 'f036741b85d1158554f77c27925a4d1200ee5a3a' }, h("section", { key: 'b037211b6e8d27dbd54dcddeac9953e8e6dd5c75', class: "table-container h-100  w-100 m-0 table-responsive" }, h("table", { key: '29dc145d619fce8f9b58d5d883c4e83b78cbfa61', class: "table" }, h("thead", { key: '0d109ad1c75c64bdd5199192bd1c3bbe0d516fdf' }, h("tr", { key: 'cd5c220dd9efb5405b1e2b23a446cde9a9576507' }, h("th", { key: 'e274b845d75ade8db97da12b62c712b812251b0d', class: "ir-text-start" }, t('Lcz_Username', { fallback: 'Username' })), h("th", { key: '5952c33b4bdc0f307f2d055648b8682504fe57df', class: "ir-text-start" }, t('Lcz_Email', { fallback: 'Email' })), h("th", { key: '6cf16746366ec39bb3387ef156a5f0e9b5a2d5c9', class: "ir-text-start" }, t('Lcz_Mobile', { fallback: 'Mobile' })), h("th", { key: '593f39b2f1d8ec356d19cd86b3bb58543d7ee7a6', class: "ir-text-start" }, t('Lcz_Role', { fallback: 'Role' })), h("th", { key: 'e895c8601b5eed8890504a9df45a9660e98d126b', class: "ir-text-start small", style: { fontWeight: 'bold' } }, h("p", { key: '4753eee73be6b5517f46577936fb2a22db0a7f04', class: "m-0 p-0 " }, t('Lcz_CreatedAt', { fallback: 'Created at' })), h("p", { key: '42bed589aa222bdd449eb6a744e6ad06022b28ad', class: "m-0 p-0" }, t('Lcz_LastSignedIn', { fallback: 'Last signed in' }))), this.haveAdminPrivileges && h("th", { key: '9914f75a9f346fccd5c9253536cd83ff3378c283' }, t('Lcz_Active', { fallback: 'Active' })), h("th", { key: '7e2f418f7931f0a16e5b12cb2398522a62727125', class: 'action-row' }, this.canCreate && (h(Fragment, { key: '14f496eedf3ed06213cebb68a57f3ce1200dfb4a' }, h("ir-custom-button", { key: '3c595ec9fa0cfb823144298c97d58127ed57d3c9', appearance: "plain", variant: "neutral", id: "new-user-btn", onClickHandler: () => {
                this.verifyAdminAction({
                    type: 'user',
                    mode: 'create',
                    user: null,
                });
            } }, h("wa-icon", { key: '490a35590332651da274825438b75825a065f168', name: "plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '214fd0355f07f7c953bd8c6deeefad324757255b', for: "new-user-btn" }, t('Lcz_CreateUser', { fallback: 'Create user' }))))))), h("tbody", { key: '35f7d58af3b1599b8f35579a76762af602729278' }, this.users.map(user => {
            const isUserSuperAdmin = user.type.toString() === this.superAdminId;
            const latestSignIn = user.sign_ins ? user.sign_ins[0] : null;
            const latestSignInDate = latestSignIn ? hooks(latestSignIn.date, 'YYYY-MM-DD') : null;
            const isLastSignInOld = latestSignInDate ? hooks().diff(latestSignInDate, 'days') > 30 : false;
            return (h("tr", { key: user.id, class: "ir-table-row" }, h("td", null, user.username), h("td", null, user.email, this.haveAdminPrivileges && (h("span", { style: { marginInlineStart: '0.5rem', color: `var(--wa-color-${user.is_email_verified ? 'success' : 'danger'}-fill-loud)` }, class: `small` }, user.is_email_verified ? t('Lcz_Verified', { fallback: 'Verified' }) : t('Lcz_NotVerified', { fallback: 'Not verified' })))), h("td", null, user.mobile ?? t('Lcz_NotAvailable', { fallback: 'N/A' })), h("td", null, user.type.toString() === this.superAdminId ? t('Lcz_SuperAdmin', { fallback: 'Super admin' }) : this.userTypes.get(user.type.toString())), h("td", { class: "small" }, h("p", { class: "m-0 p-0" }, new Date(user.created_on).getFullYear() === 1900 || !user.created_on
                ? t('Lcz_NotAvailable', { fallback: 'N/A' })
                : formatDate(user.created_on, 'DD-MMM-YYYY')), h("p", { class: `m-0 p-0`, style: { color: isLastSignInOld ? 'var(--wa-color-danger-fill-loud)' : '' } }, latestSignIn && new Date(latestSignIn.date).getFullYear() > 1900
                ? formatDate(latestSignIn.date, 'DD-MMM-YYYY') + ' ' + _formatTime(latestSignIn.hour.toString(), latestSignIn.minute.toString())
                : t('Lcz_NotAvailable', { fallback: 'N/A' }))), this.haveAdminPrivileges && (h("td", null, this.haveAdminPrivileges && !this.isSuperAdmin && user.type.toString() === '17'
                ? null
                : !isUserSuperAdmin && (h("wa-switch", { onchange: e => this.handleUserActiveChange(e, user), defaultChecked: user.is_active, checked: user.is_active })))), h("td", { class: 'action-row' }, (this.canEdit || this.canDelete) && ((!this.isSuperAdmin && !isUserSuperAdmin) || this.isSuperAdmin) && (h("div", { class: "icons-container  d-flex align-items-center" }, this.canEdit && (h(Fragment, null, h("ir-custom-button", { "data-testid": "edit", onClickHandler: () => {
                    this.verifyAdminAction({
                        type: 'user',
                        mode: 'edit',
                        user,
                    });
                }, appearance: "plain", variant: "neutral", id: `edit-user-${user.id}` }, h("wa-icon", { name: "edit", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { for: `edit-user-${user.id}` }, t('Lcz_EditUser', { fallback: 'Edit user' })))), this.canDelete && !isUserSuperAdmin && (this.isSuperAdmin || user.type.toString() !== '17') && (h(Fragment, null, h("ir-custom-button", { onClickHandler: async () => {
                    const res = await this.verifyAdminAction({
                        type: 'user',
                        mode: 'delete',
                        user,
                    });
                    if (res === 'cancelled') {
                        return;
                    }
                    this.openModal(user, 'delete');
                }, "data-testid": "delete", variant: "danger", appearance: "plain", id: `delete-user-${user.id}` }, h("wa-icon", { name: "trash-can", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { for: `delete-user-${user.id}` }, t('Lcz_DeleteUser', { fallback: 'Delete user' })))))))));
        })))), h("ir-user-form-panel-drawer", { key: '97e6aba278c9e511cbfcc0f4ad20e46806505c3e', open: this.currentTrigger !== null && this.currentTrigger?.type !== 'delete', property_id: this.property_id, baseUserTypeCode: this.baseUserTypeCode, superAdminId: this.superAdminId, allowedUsersTypes: this.allowedUsersTypes, userTypeCode: this.userTypeCode, haveAdminPrivileges: this.haveAdminPrivileges, onCloseSideBar: () => (this.currentTrigger = null), slot: "sidebar-body", user: this.currentTrigger?.user, isEdit: this.currentTrigger?.isEdit }), h("ir-dialog", { key: 'c5346e9ab19f88966393e678e3f839a8514df3b0', label: t('Lcz_Alert', { fallback: 'Alert' }), onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.user = null;
                this.modalType = null;
            }, ref: el => (this.dialogRef = el) }, h("span", { key: '6263eaf88c25b6ce686c20784c161527a354e711' }, this.modalType === 'delete'
            ? t('Lcz_AreYouSureDeleteUser', { params: [this.user?.username ?? ''], fallback: 'Are you sure you want to delete %1?' })
            : t('Lcz_AreYouSureUnverifyEmail', { params: [this.maskEmail(this.user?.email)], fallback: 'Are you sure you want to unverify %1?' })), h("div", { key: '6cd943cd0fb88c5d53d634d80100ae1a4c52bb27', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'c5e7c4aadcea46fdf51e02ca26fac7b9b355d30f', "data-dialog": "close", size: "m", appearance: "filled" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '1f65e9185dc583717ae0d16804ab432527abd7dd', size: "m", loading: isRequestPending('/Handle_Exposed_User'), appearance: "accent", variant: this.modalType === 'verify' ? 'brand' : 'danger', onClickHandler: this.executeUserAction.bind(this) }, this.modalType === 'verify' ? t('Lcz_Confirm', { fallback: 'Confirm' }) : t('Lcz_Delete', { fallback: 'Delete' }))))));
    }
    static get watchers() { return {
        "haveAdminPrivileges": [{
                "handleChange": 0
            }]
    }; }
};
IrUserManagementTable.style = irUserManagementTableCss() + tableCss();

export { IrUserFormPanelDrawer as ir_user_form_panel_drawer, IrUserManagementTable as ir_user_management_table };
