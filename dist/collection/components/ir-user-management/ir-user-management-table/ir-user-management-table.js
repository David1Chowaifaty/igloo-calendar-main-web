var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
import moment from "moment";
import { UserService } from "../../../services/user.service";
import { _formatTime } from "../../ir-booking-details/functions";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { SystemService } from "../../../services/system.service";
export class IrUserManagementTable {
    constructor() {
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
        const res = await this.verifyAdminAction({ type: 'user', mode: 'update', user });
        if (res === 'cancelled') {
            return;
        }
        await this.userService.handleExposedUser({
            email: user.email,
            id: user.id,
            is_active: e.detail,
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
        return (h("ir-user-form-panel", { property_id: this.property_id, baseUserTypeCode: this.baseUserTypeCode, superAdminId: this.superAdminId, allowedUsersTypes: this.allowedUsersTypes, userTypeCode: this.userTypeCode, haveAdminPrivileges: this.haveAdminPrivileges, onCloseSideBar: () => (this.currentTrigger = null), slot: "sidebar-body", user: (_a = this.currentTrigger) === null || _a === void 0 ? void 0 : _a.user, isEdit: (_b = this.currentTrigger) === null || _b === void 0 ? void 0 : _b.isEdit }));
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
        const res = await this.systemService.checkOTPNecessity({
            METHOD_NAME: 'Handle_Exposed_User',
        });
        if (res === null || res === void 0 ? void 0 : res.cancelled) {
            return 'cancelled';
        }
        const { mode } = params, rest = __rest(params, ["mode"]);
        if (mode === 'edit' || mode === 'create') {
            this.currentTrigger = Object.assign(Object.assign({}, rest), { isEdit: mode === 'edit' });
        }
        return 'ok';
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        return (h(Host, { key: '5c30a546354de1d0b5e39c055eaf981d9db0bfc0' }, h("section", { key: '55261cad00dbedc3e377478c27c87682cafb3623', class: "table-container h-100 p-1 w-100 m-0 table-responsive" }, h("table", { key: '655014e86c99109a11e58602590ca2534065a42e', class: "table" }, h("thead", { key: '0ad47d9b5248dfeac23e49acc8f94f577ea5c175' }, h("tr", { key: '469e2e8f2573127067c58d6e95271a9aacc6406e' }, h("th", { key: '7306e82983ef8f8483f22ac1fbae76b3ec38f934', class: "text-left" }, (_a = locales.entries.Lcz_Username) !== null && _a !== void 0 ? _a : 'Username'), h("th", { key: '8a9b6ac8a264bcebf46506f31a72d24534bd2b10', class: "text-left" }, locales.entries.Lcz_Email), h("th", { key: '950f5107a18c678c5a776459af2a2a891c833494', class: "text-left" }, (_b = locales.entries.Lcz_Mobile) !== null && _b !== void 0 ? _b : 'Mobile'), h("th", { key: '0cefae000364c97eb8a895f815d93ad17e69bc03', class: "text-left" }, locales.entries.Lcz_Role), h("th", { key: 'c9c5f9a90cdbd46ef35fd695da174a0b3905f465', class: "text-left small", style: { fontWeight: 'bold' } }, h("p", { key: 'b36f9f41f806ab51c1fe8d901994ffa89c93e1af', class: "m-0 p-0 " }, locales.entries.Lcz_CreatedAt), h("p", { key: '8836a9bf92f79277f56a9f7c65d44a1c9167abc6', class: "m-0 p-0" }, locales.entries.Lcz_LastSignedIn)), this.haveAdminPrivileges && h("th", { key: '26c21205869f7dab5f59a38b2d47f03f14eef4e0' }, locales.entries.Lcz_Active), h("th", { key: 'b38ebe43d59b95f6aa8cda46dac02b7dace1f447', class: 'action-row' }, this.canCreate && (h("ir-icon", { key: 'a65043672f9d099301d1c2eb40b30a33bdbb024e', style: { paddingLeft: '0.875rem' }, "data-testid": "new_user", title: locales.entries.Lcz_CreateUser, onIconClickHandler: () => {
                this.verifyAdminAction({
                    type: 'user',
                    mode: 'create',
                    user: null,
                });
            } }, h("svg", { key: '5ae38ac69923d8f47389d4e402516465360b02a3', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { key: 'd9d133cbcafe7a78e0c550400ad12b306f0b3853', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" }))))))), h("tbody", { key: '781d97eef2159ef4092857f32cec4676eb547157' }, this.users.map(user => {
            var _a;
            const isUserSuperAdmin = user.type.toString() === this.superAdminId;
            const latestSignIn = user.sign_ins ? user.sign_ins[0] : null;
            const latestSignInDate = latestSignIn ? moment(latestSignIn.date, 'YYYY-MM-DD') : null;
            const isLastSignInOld = latestSignInDate ? moment().diff(latestSignInDate, 'days') > 30 : false;
            return (h("tr", { key: user.id, class: "ir-table-row" }, h("td", null, user.username), h("td", null, user.email, this.haveAdminPrivileges && (h("span", { style: { marginLeft: '0.5rem' }, class: `small ${user.is_email_verified ? 'text-success' : 'text-danger'}` }, user.is_email_verified ? locales.entries.Lcz_Verified : locales.entries.Lcz_NotVerified))), h("td", null, (_a = user.mobile) !== null && _a !== void 0 ? _a : 'N/A'), h("td", null, user.type.toString() === this.superAdminId ? locales.entries.Lcz_SuperAdmin : this.userTypes.get(user.type.toString())), h("td", { class: "small" }, h("p", { class: "m-0 p-0" }, new Date(user.created_on).getFullYear() === 1900 || !user.created_on ? 'N/A' : moment(user.created_on, 'YYYY-MM-DD').format('DD-MMM-YYYY')), h("p", { class: `m-0 p-0 ${isLastSignInOld ? 'text-danger' : ''}` }, latestSignIn && new Date(latestSignIn.date).getFullYear() > 1900
                ? moment(latestSignIn.date, 'YYYY-MM-DD').format('DD-MMM-YYYY') + ' ' + _formatTime(latestSignIn.hour.toString(), latestSignIn.minute.toString())
                : 'N/A')), this.haveAdminPrivileges && (h("td", null, this.haveAdminPrivileges && !this.isSuperAdmin && user.type.toString() === '17'
                ? null
                : !isUserSuperAdmin && h("ir-switch", { onCheckChange: e => this.handleUserActiveChange(e, user), checked: user.is_active }))), h("td", { class: 'action-row' }, (this.canEdit || this.canDelete) && ((!this.isSuperAdmin && !isUserSuperAdmin) || this.isSuperAdmin) && (h("div", { class: "icons-container  d-flex align-items-center", style: { gap: '0.5rem' } }, this.canEdit && (h("ir-icon", { "data-testid": "edit", title: locales.entries.Lcz_EditUser, onIconClickHandler: () => {
                    this.verifyAdminAction({
                        type: 'user',
                        mode: 'edit',
                        user,
                    });
                }, icon: "ft-save color-ir-light-blue-hover h5 pointer sm-margin-right" }, h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { fill: "#6b6f82", d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" })))), this.canDelete && !isUserSuperAdmin && (this.isSuperAdmin || user.type.toString() !== '17') && (h("ir-icon", { "data-testid": "delete", title: locales.entries.Lcz_DeleteUser, icon: "ft-trash-2 danger h5 pointer", onIconClickHandler: async () => {
                    const res = await this.verifyAdminAction({
                        type: 'user',
                        mode: 'delete',
                        user,
                    });
                    if (res === 'cancelled') {
                        return;
                    }
                    this.openModal(user, 'delete');
                } }, h("svg", { slot: "icon", fill: "#ff2441", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "14.25", viewBox: "0 0 448 512" }, h("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" })))))))));
        })))), h("ir-sidebar", { key: '6e1d5fd64b2812da4225675e0af51ce9c27020f1', open: this.currentTrigger !== null && ((_c = this.currentTrigger) === null || _c === void 0 ? void 0 : _c.type) !== 'delete', onIrSidebarToggle: () => (this.currentTrigger = null), showCloseButton: false, style: {
                '--sidebar-block-padding': '0',
                '--sidebar-width': this.currentTrigger ? (((_d = this.currentTrigger) === null || _d === void 0 ? void 0 : _d.type) === 'unassigned_units' ? 'max-content' : '40rem') : 'max-content',
            } }, this.renderCurrentTrigger()), h("ir-modal", { key: '5d09f1d04e076e784e0fe5e3495c87c06f968a2c', autoClose: false, modalBody: this.modalType === 'delete'
                ? `${locales.entries.Lcz_AreYouSureToDelete} ${(_e = this.user) === null || _e === void 0 ? void 0 : _e.username}?`
                : `${locales.entries.Lcz_AreYouSureToUnverify} ${this.maskEmail((_f = this.user) === null || _f === void 0 ? void 0 : _f.email)}`, rightBtnColor: "danger", isLoading: isRequestPending('/Handle_Exposed_User'), onCancelModal: this.resetModalState.bind(this), rightBtnText: this.modalType === 'verify' ? locales.entries.Lcz_Confirm : locales.entries.Lcz_Delete, onConfirmModal: this.executeUserAction.bind(this), ref: el => (this.modalRef = el) })));
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
