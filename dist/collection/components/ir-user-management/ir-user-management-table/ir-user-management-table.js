import locales from "../../../stores/locales.store";
import { Fragment, Host, h } from "@stencil/core";
import moment from "moment";
import { UserService } from "../../../services/user.service";
import { _formatTime } from "../../ir-booking-details/functions";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { SystemService } from "../../../services/system.service";
export class IrUserManagementTable {
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
        return (h(Host, { key: 'f4cc28d5bfa00a83df5bd150065ab584ceb88d05' }, h("section", { key: '1c223cae36d798397e34f34f042f1f97a19c10aa', class: "table-container h-100  w-100 m-0 table-responsive" }, h("table", { key: '208520b29c22e8ff9de9c67b00530d9a96a74942', class: "table" }, h("thead", { key: '88c2fbf0568555ad2e18d7eff41a16db03159f18' }, h("tr", { key: 'e67e9e8fc462c6788a9209b14fb6d8184d49b02b' }, h("th", { key: 'ab311f47f068128e53c2bd69dfd0d88b1f5d80c6', class: "text-left" }, locales.entries.Lcz_Username ?? 'Username'), h("th", { key: 'f29ba8415aaaee63e44f5948d0f1e0f715036486', class: "text-left" }, locales.entries.Lcz_Email), h("th", { key: '8b9e7126ac8026b66d3033973c4198e368d49ba0', class: "text-left" }, locales.entries.Lcz_Mobile ?? 'Mobile'), h("th", { key: '6951849fd43a8c6e9903f250f0463db05bbd0ea0', class: "text-left" }, locales.entries.Lcz_Role), h("th", { key: '1539327174d0e7802017a66b8dedbb0d0bb9d403', class: "text-left small", style: { fontWeight: 'bold' } }, h("p", { key: 'daeee5046628966a7c28f1c559100395645530f4', class: "m-0 p-0 " }, locales.entries.Lcz_CreatedAt), h("p", { key: '969403e77dbf67ab2c6275ff657af9a941b41a77', class: "m-0 p-0" }, locales.entries.Lcz_LastSignedIn)), this.haveAdminPrivileges && h("th", { key: '4ee1d93c351be6412b311f6dc60674ca73346765' }, locales.entries.Lcz_Active), h("th", { key: '39e442849cdc6e0e557011b6ae73022c61ee8b59', class: 'action-row' }, this.canCreate && (h(Fragment, { key: 'e4fc2bc0ecf85de3f005f993dfe9a25b1b9ae8f0' }, h("ir-custom-button", { key: '40788a8116b607957ff6f787a38251d762ce78e3', appearance: "plain", variant: "neutral", id: "new-user-btn", onClickHandler: () => {
                this.verifyAdminAction({
                    type: 'user',
                    mode: 'create',
                    user: null,
                });
            } }, h("wa-icon", { key: 'b21a74bad1ef86c6b4fb1cd8874ec3b22665f231', name: "plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '7f02428bded66d5d24d79e1e2d0e0c97f03307db', for: "new-user-btn" }, locales.entries.Lcz_CreateUser)))))), h("tbody", { key: '10d1c8e75e89025dc08d6e5708155ca7474cf1f0' }, this.users.map(user => {
            const isUserSuperAdmin = user.type.toString() === this.superAdminId;
            const latestSignIn = user.sign_ins ? user.sign_ins[0] : null;
            const latestSignInDate = latestSignIn ? moment(latestSignIn.date, 'YYYY-MM-DD') : null;
            const isLastSignInOld = latestSignInDate ? moment().diff(latestSignInDate, 'days') > 30 : false;
            return (h("tr", { key: user.id, class: "ir-table-row" }, h("td", null, user.username), h("td", null, user.email, this.haveAdminPrivileges && (h("span", { style: { marginLeft: '0.5rem', color: `var(--wa-color-${user.is_email_verified ? 'success' : 'danger'}-fill-loud)` }, class: `small` }, user.is_email_verified ? locales.entries.Lcz_Verified : locales.entries.Lcz_NotVerified))), h("td", null, user.mobile ?? 'N/A'), h("td", null, user.type.toString() === this.superAdminId ? locales.entries.Lcz_SuperAdmin : this.userTypes.get(user.type.toString())), h("td", { class: "small" }, h("p", { class: "m-0 p-0" }, new Date(user.created_on).getFullYear() === 1900 || !user.created_on ? 'N/A' : moment(user.created_on, 'YYYY-MM-DD').format('DD-MMM-YYYY')), h("p", { class: `m-0 p-0`, style: { color: isLastSignInOld ? 'var(--wa-color-danger-fill-loud)' : '' } }, latestSignIn && new Date(latestSignIn.date).getFullYear() > 1900
                ? moment(latestSignIn.date, 'YYYY-MM-DD').format('DD-MMM-YYYY') + ' ' + _formatTime(latestSignIn.hour.toString(), latestSignIn.minute.toString())
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
        })))), h("ir-user-form-panel-drawer", { key: '0f688f14defe0e7de10380bdd857b21a348db2d3', open: this.currentTrigger !== null && this.currentTrigger?.type !== 'delete', property_id: this.property_id, baseUserTypeCode: this.baseUserTypeCode, superAdminId: this.superAdminId, allowedUsersTypes: this.allowedUsersTypes, userTypeCode: this.userTypeCode, haveAdminPrivileges: this.haveAdminPrivileges, onCloseSideBar: () => (this.currentTrigger = null), slot: "sidebar-body", user: this.currentTrigger?.user, isEdit: this.currentTrigger?.isEdit }), h("ir-dialog", { key: '92f88aaef96f029bd652ac4317e91f0f5c3f8e75', label: 'Alert', onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.user = null;
                this.modalType = null;
            }, ref: el => (this.dialogRef = el) }, h("span", { key: 'fbc7442f29dd57a10866c8be75ab8b8519a24a67' }, this.modalType === 'delete'
            ? `${locales.entries.Lcz_AreYouSureToDelete} ${this.user?.username}?`
            : `${locales.entries.Lcz_AreYouSureToUnverify} ${this.maskEmail(this.user?.email)}`), h("div", { key: 'b42f496fbb46e194abbe3cbf898cea7397cc5934', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '76827f1b8ea1b452c09de03cff3102a90c7c8675', "data-dialog": "close", size: "medium", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: '9db94368eb1fddbd8f541c61dcbf7d027dad9ae3', size: "medium", loading: isRequestPending('/Handle_Exposed_User'), appearance: "accent", variant: this.modalType === 'verify' ? 'brand' : 'danger', onClickHandler: this.executeUserAction.bind(this) }, this.modalType === 'verify' ? locales.entries.Lcz_Confirm : locales.entries.Lcz_Delete)))));
    }
    static get is() { return "ir-user-management-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-user-management-table.css", "../../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-user-management-table.css", "../../../common/table.css"]
        };
    }
    static get properties() {
        return {
            "users": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "User[]",
                    "resolved": "User[]",
                    "references": {
                        "User": {
                            "location": "import",
                            "path": "@/models/Users",
                            "id": "src/models/Users.ts::User"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "isSuperAdmin": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "is-super-admin",
                "reflect": false
            },
            "userTypes": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Map<string | number, string>",
                    "resolved": "Map<string | number, string>",
                    "references": {
                        "Map": {
                            "location": "global",
                            "id": "global::Map"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "new Map()"
            },
            "userTypeCode": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "string | number",
                    "resolved": "number | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "user-type-code",
                "reflect": false
            },
            "haveAdminPrivileges": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "have-admin-privileges",
                "reflect": false
            },
            "superAdminId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "super-admin-id",
                "reflect": false,
                "defaultValue": "'5'"
            },
            "allowedUsersTypes": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AllowedUser[]",
                    "resolved": "AllowedUser[]",
                    "references": {
                        "AllowedUser": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-user-management/types.ts::AllowedUser"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "baseUserTypeCode": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "string | number",
                    "resolved": "number | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "base-user-type-code",
                "reflect": false
            },
            "property_id": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "property_id",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "currentTrigger": {},
            "user": {},
            "modalType": {},
            "canDelete": {},
            "canEdit": {},
            "canCreate": {}
        };
    }
    static get events() {
        return [{
                "method": "toast",
                "name": "toast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IToast",
                    "resolved": "ICustomToast & Partial<IToastWithButton> | IDefaultToast & Partial<IToastWithButton>",
                    "references": {
                        "IToast": {
                            "location": "import",
                            "path": "@components/ui/ir-toast/toast",
                            "id": "src/components/ui/ir-toast/toast.ts::IToast"
                        }
                    }
                }
            }, {
                "method": "resetData",
                "name": "resetData",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "haveAdminPrivileges",
                "methodName": "handleChange"
            }];
    }
}
//# sourceMappingURL=ir-user-management-table.js.map
