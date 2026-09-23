import { HouseKeepingService } from "../../../services/housekeeping/index";
import { UserService } from "../../../services/user.service";
import calendar_data from "../../../stores/calendar-data";
import { getDefaultProperties } from "../../../stores/housekeeping.store";
import { CONSTANTS } from "../../../utils/constants";
import { h } from "@stencil/core";
import { z, ZodError } from "zod";
import { t } from "../../../services/locale/t";
export class IrHkUser {
    user = null;
    isEdit = false;
    isLoading = false;
    autoValidate = false;
    userInfo = {
        id: -1,
        mobile: '',
        name: '',
        note: '',
        password: '',
        property_id: null,
        username: null,
        phone_prefix: null,
    };
    errors = null;
    showPasswordValidation = false;
    isUsernameTaken;
    resetData;
    closeSideBar;
    housekeepingService = new HouseKeepingService();
    default_properties = {
        ApiClient: '',
        language: '',
    };
    housekeeperSchema = z.object({
        name: z.string().min(2),
        mobile: z.string().min(1).max(14),
        password: z
            .string()
            .nullable()
            // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/)
            .refine(password => {
            if (this.user && !this.userInfo?.password) {
                return true;
            }
            return CONSTANTS.PASSWORD.test(password);
        }, { message: t('Lcz_PasswordMinLength', { fallback: 'Password must be at least 8 characters long.' }) }),
        username: z
            .string()
            .min(3)
            .refine(async (name) => {
            if (this.user && this.user.username === name) {
                return true;
            }
            if (name.length >= 3) {
                return !(await new UserService().checkUserExistence({ UserName: name }));
            }
            return true;
        }, { message: t('Lcz_UsernameAlreadyExists', { fallback: 'Username already exists.' }) }),
    });
    async componentWillLoad() {
        const { ApiClient, language, property_id } = getDefaultProperties();
        this.default_properties = { ApiClient, language };
        if (!this.user) {
            this.userInfo['property_id'] = property_id;
            // this.showPasswordValidation = true;
        }
        if (this.user) {
            this.autoValidate = true;
            this.userInfo = { ...this.user, password: '' };
        }
    }
    updateUserField(key, value) {
        this.userInfo = { ...this.userInfo, [key]: value };
    }
    async addUser() {
        try {
            this.isLoading = true;
            if (!this.autoValidate) {
                this.autoValidate = true;
            }
            const toValidateUserInfo = { ...this.userInfo, password: this.user && this.userInfo.password === '' ? this.user.password : this.userInfo.password };
            console.log('toValidateUserInfo', toValidateUserInfo);
            await this.housekeeperSchema.parseAsync(toValidateUserInfo);
            if (this.errors) {
                this.errors = null;
            }
            await this.housekeepingService.editExposedHKM(toValidateUserInfo);
            this.resetData.emit(null);
            this.closeSideBar.emit(null);
        }
        catch (error) {
            const e = {};
            if (error instanceof ZodError) {
                error.issues.map(err => {
                    e[err.path[0]] = true;
                });
                this.errors = e;
            }
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleBlur(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.user || !this.userInfo.name) {
            return;
        }
        const usermame = await this.housekeepingService.generateUserName(this.userInfo.name);
        this.updateUserField('username', usermame);
    }
    render() {
        return (h("div", { key: '746eb08b6dc340bec22f1c450d8db7f2501135e1', class: "sheet-container" }, h("ir-title", { key: '43d154f161561d4ef8d9d933c2ee539c51b7cc17', class: "px-1 sheet-header", displayContext: "sidebar", label: this.isEdit ? t('Lcz_EditHousekeeperProfile', { fallback: 'Edit Housekeeper Profile' }) : t('Lcz_CreateHousekeeperProfile', { fallback: 'Create housekeeper profile' }) }), h("section", { key: 'f7da116be35cd2c5d80eee305101df718455946c', class: "px-1 sheet-body" }, h("ir-input-text", { key: '6ca7b6408ed099f4342975b2bc3e877d507633fb', testId: "name", zod: this.housekeeperSchema.pick({ name: true }), wrapKey: "name", autoValidate: this.autoValidate, error: this.errors?.name, label: t('Lcz_Name', { fallback: 'Name' }), placeholder: t('Lcz_Name', { fallback: 'Name' }), onTextChange: e => this.updateUserField('name', e.detail), value: this.userInfo.name, onInputBlur: this.handleBlur.bind(this), maxLength: 40 }), h("ir-phone-input", { key: 'd36410526054918612c7e32a8a0f61ffa4031417', testId: "phone", placeholder: t('Lcz_Mobile', { fallback: 'Mobile' }), error: this.errors?.mobile && !this.userInfo?.mobile, language: this.default_properties.language, ApiClient: this.default_properties.ApiClient, default_country: calendar_data.country.id, phone_prefix: this.user?.phone_prefix, label: t('Lcz_Mobile', { fallback: 'Mobile' }), value: this.userInfo.mobile, onTextChange: e => {
                this.updateUserField('phone_prefix', e.detail.phone_prefix);
                this.updateUserField('mobile', e.detail.mobile);
            } }), h("div", { key: '4a503d6b85b9a7a3456461e57877a7ba2c9d3c99', class: "mb-1" }, h("ir-textarea", { key: 'eb624a2aecd5bb0f75a61099daf1c7b27e4dc4cc', testId: "note", variant: "prepend", maxLength: 250, label: t('Lcz_Note', { fallback: 'Note' }), placeholder: t('Lcz_Note', { fallback: 'Note' }), value: this.userInfo.note, onTextChange: e => this.updateUserField('note', e.detail) })), h("ir-input-text", { key: 'cb3cdf0d6db0c194b9b820e85697f98fbacfec58', testId: "username", zod: this.housekeeperSchema.pick({ username: true }), wrapKey: "username", error: this.errors?.username, asyncParse: true, autoValidate: this.user ? (this.userInfo?.username !== this.user.username ? true : false) : this.autoValidate, errorMessage: this.errors?.username && this.userInfo?.username?.length >= 3 ? t('Lcz_UsernameAlreadyExists', { fallback: 'Username already exists.' }) : undefined, label: t('Lcz_Username', { fallback: 'Username' }), placeholder: t('Lcz_Username', { fallback: 'Username' }), value: this.userInfo.username, onTextChange: e => this.updateUserField('username', e.detail) }), h("ir-input-text", { key: '585550999a14c5eb56d955cd4b7aaf46cfbc9b45', testId: "password", autoValidate: this.user ? (!this.userInfo?.password ? false : true) : this.autoValidate, label: t('Lcz_Password', { fallback: 'Password' }), value: this.userInfo.password, type: "password", maxLength: 16, zod: this.housekeeperSchema.pick({ password: true }), wrapKey: "password", error: this.errors?.password, onInputFocus: () => (this.showPasswordValidation = true), onInputBlur: () => {
                // if (this.user) this.showPasswordValidation = false;
            }, onTextChange: e => this.updateUserField('password', e.detail) }), this.showPasswordValidation && h("ir-password-validator", { key: '7993b82b32c5764e078287173032dad4cba0adfd', password: this.userInfo.password })), h("div", { key: 'a90ffd05c0b00bbdc01447e27cbb5c7017608c42', class: "sheet-footer" }, h("ir-button", { key: '03d4f2648dae0f5b2184acf16429d17459e6607e', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: t('Lcz_Cancel', { fallback: 'Cancel' }) }), h("ir-button", { key: 'cf9d8f094adf87d8696285fa42f11cab4c42f2cf', "data-testid": "save", isLoading: this.isLoading, onClickHandler: this.addUser.bind(this), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", text: t('Lcz_Save', { fallback: 'Save' }) }))));
    }
    static get is() { return "ir-hk-user"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hk-user.css", "../../../common/sheet.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hk-user.css", "../../../common/sheet.css"]
        };
    }
    static get properties() {
        return {
            "user": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "THKUser | null",
                    "resolved": "{ name: string; id: number; note: string; property_id: number; mobile: string; password: string; phone_prefix: string; username: string; }",
                    "references": {
                        "THKUser": {
                            "location": "import",
                            "path": "@/models/housekeeping",
                            "id": "src/models/housekeeping.ts::THKUser",
                            "referenceLocation": "THKUser"
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
                "defaultValue": "null"
            },
            "isEdit": {
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
                "reflect": false,
                "attribute": "is-edit",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "autoValidate": {},
            "userInfo": {},
            "errors": {},
            "showPasswordValidation": {},
            "isUsernameTaken": {}
        };
    }
    static get events() {
        return [{
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
            }, {
                "method": "closeSideBar",
                "name": "closeSideBar",
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
}
