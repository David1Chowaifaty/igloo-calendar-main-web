import { BookingService } from "../../../../../services/booking-service/booking.service";
import { HouseKeepingService } from "../../../../../services/housekeeping.service";
import { UserService } from "../../../../../services/user.service";
import calendar_data from "../../../../../stores/calendar-data";
import { getDefaultProperties } from "../../../../../stores/housekeeping.store";
import locales from "../../../../../stores/locales.store";
import { CONSTANTS } from "../../../../../utils/constants";
import { Fragment, h } from "@stencil/core";
import { z } from "zod";
const nameSchema = z.string().min(2, 'Name must be at least 2 characters.');
const mobileSchema = z.string().min(1, 'Mobile is required.').max(14, 'Mobile must be at most 14 characters.');
const usernameBaseSchema = z.string().min(3, 'Username must be at least 3 characters.');
export class IrHkUserDrawerForm {
    isEdit = false;
    user = null;
    formId;
    isPageLoading = false;
    autoValidate = false;
    showPasswordValidation = false;
    isChangingPassword = false;
    confirmPassword = '';
    countries = [];
    countryCode = '';
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
    resetData;
    closeSideBar;
    loadingChanged;
    housekeepingService = new HouseKeepingService();
    bookingService = new BookingService();
    // Stable schema references — closures read current `this` state at validation time.
    usernameSchema;
    passwordSchema;
    fullSchema;
    componentWillLoad() {
        this.init();
    }
    async init() {
        try {
            this.isPageLoading = true;
            const { language, property_id } = getDefaultProperties();
            if (!this.user) {
                this.userInfo['property_id'] = property_id;
            }
            if (this.user) {
                this.autoValidate = true;
                this.userInfo = { ...this.user, password: '' };
            }
            this.buildSchemas();
            const countries = await this.bookingService.getCountries(language);
            this.countries = countries;
            const propertyCountry = this.countries.find(c => c.id === calendar_data.country.id);
            if (!this.user) {
                this.countryCode = propertyCountry?.code ?? '';
                this.updateUserField('phone_prefix', propertyCountry.phone_prefix);
            }
            else if (this.user.phone_prefix) {
                const match = countries.find(c => c.phone_prefix === this.user.phone_prefix);
                this.countryCode = match?.code ?? calendar_data.country?.code ?? '';
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    buildSchemas() {
        this.usernameSchema = usernameBaseSchema.refine(async (name) => {
            if (this.user && this.user.username === name)
                return true;
            if (name.length >= 3) {
                return !(await new UserService().checkUserExistence({ UserName: name }));
            }
            return true;
        }, { message: locales.entries.Lcz_UsernameAlreadyExists ?? 'Username already exists.' });
        this.passwordSchema = z
            .string()
            .nullable()
            .refine(password => {
            if (this.user && !this.userInfo?.password)
                return true;
            return CONSTANTS.PASSWORD.test(password);
        }, { message: 'Password must be at least 8 characters long.' });
        this.fullSchema = z.object({
            name: nameSchema,
            mobile: mobileSchema,
            password: this.passwordSchema,
            username: this.usernameSchema,
        });
    }
    updateUserField(key, value) {
        this.userInfo = { ...this.userInfo, [key]: value };
    }
    async addUser() {
        try {
            this.loadingChanged.emit(true);
            if (!this.autoValidate) {
                this.autoValidate = true;
            }
            if (this.isChangingPassword && this.confirmPassword !== this.userInfo.password)
                return;
            const toValidate = {
                ...this.userInfo,
                password: this.user && !this.isChangingPassword ? this.user.password : this.userInfo.password,
            };
            const result = await this.fullSchema.safeParseAsync(toValidate);
            if (!result.success)
                return;
            await this.housekeepingService.editExposedHKM(toValidate);
            this.resetData.emit(null);
            this.closeSideBar.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.loadingChanged.emit(false);
        }
    }
    cancelPasswordChange() {
        this.isChangingPassword = false;
        this.updateUserField('password', '');
        this.confirmPassword = '';
        this.showPasswordValidation = false;
    }
    async handleNameBlur(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.user || !this.userInfo.name)
            return;
        const username = await this.housekeepingService.generateUserName(this.userInfo.name);
        this.updateUserField('username', username);
    }
    renderPasswordChangeView() {
        return (h("form", { id: this.formId, class: "hk-user-form hk-user-form--password-change", onSubmit: e => {
                e.preventDefault();
                this.addUser();
            } }, h("ir-custom-button", { type: "button", class: "hk-user-form__back-btn", appearance: "plain", variant: "neutral", size: "small", onClickHandler: () => this.cancelPasswordChange() }, h("wa-icon", { name: "arrow-left", "aria-hidden": "true", style: { fontSize: '1rem' } })), h("div", { class: "hk-user-form__password-fields" }, h("div", { class: "hk-user-form__password-header" }, h("wa-icon", { name: "lock", class: "hk-user-form__password-icon" }), h("h4", { class: "hk-user-form__password-title" }, "Set New Password"), h("p", { class: "hk-user-form__password-hint" }, "Your new password must be different to previously used password")), h("ir-validator", { schema: this.passwordSchema, value: this.userInfo.password, valueEvent: "text-change", showErrorMessage: true }, h("ir-input", { placeholder: "New password", value: this.userInfo.password, type: "password", maxlength: 16, passwordToggle: true, "onText-change": (e) => this.updateUserField('password', e.detail), onInputFocus: () => (this.showPasswordValidation = true) })), this.showPasswordValidation && h("ir-password-validator", { password: this.userInfo.password }), h("ir-validator", { schema: z.string().refine(v => v === this.userInfo.password, { message: 'Passwords do not match.' }), value: this.confirmPassword, valueEvent: "text-change", showErrorMessage: true }, h("ir-input", { placeholder: "Confirm password", value: this.confirmPassword, type: "password", maxlength: 16, passwordToggle: true, "onText-change": (e) => (this.confirmPassword = e.detail) })))));
    }
    render() {
        if (this.isPageLoading) {
            return (h("div", { class: "drawer__loader-container" }, h("ir-spinner", null)));
        }
        if (this.user && this.isChangingPassword) {
            return this.renderPasswordChangeView();
        }
        return (h("form", { id: this.formId, class: "hk-user-form", onSubmit: e => {
                e.preventDefault();
                this.addUser();
            } }, h("ir-validator", { schema: nameSchema, value: this.userInfo.name, valueEvent: "text-change", showErrorMessage: true }, h("ir-input", { label: locales.entries.Lcz_Name, value: this.userInfo.name, maxlength: 40, "onText-change": (e) => this.updateUserField('name', e.detail), "onInput-blur": this.handleNameBlur.bind(this) })), h("ir-validator", { schema: mobileSchema, value: this.userInfo.mobile, valueEvent: "mobile-input-change", showErrorMessage: true }, h("ir-mobile-input", { label: locales.entries.Lcz_Mobile, value: this.userInfo.mobile, countryCode: this.countryCode, countries: this.countries, "onMobile-input-change": e => {
                this.updateUserField('phone_prefix', e.detail.country.phone_prefix);
                this.updateUserField('mobile', e.detail.value);
            } })), h("wa-textarea", { "data-testid": "note", maxlength: 250, size: "small", label: locales.entries.Lcz_Note, value: this.userInfo.note, defaultValue: this.userInfo.note, onchange: e => this.updateUserField('note', e.target.value) }), h("ir-validator", { schema: this.usernameSchema, value: this.userInfo.username, valueEvent: "text-change", asyncValidation: true, showErrorMessage: true }, h("ir-input", { label: locales.entries.Lcz_Username, value: this.userInfo.username, "onText-change": (e) => this.updateUserField('username', e.detail) })), !this.user ? (h(Fragment, null, h("ir-validator", { schema: this.passwordSchema, value: this.userInfo.password, valueEvent: "text-change", showErrorMessage: true }, h("ir-input", { label: locales.entries.Lcz_Password, value: this.userInfo.password, type: "password", maxlength: 16, passwordToggle: true, "onText-change": (e) => this.updateUserField('password', e.detail), onInputFocus: () => (this.showPasswordValidation = true) })), this.showPasswordValidation && h("ir-password-validator", { password: this.userInfo.password }))) : (h("wa-button", { size: "small", appearance: "plain", variant: "brand", type: "button", class: "hk-user-form__change-password-btn", onClick: () => (this.isChangingPassword = true) }, "Change Password"))));
    }
    static get is() { return "ir-hk-user-drawer-form"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hk-user-drawer-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hk-user-drawer-form.css"]
        };
    }
    static get properties() {
        return {
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
            },
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
            "formId": {
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
                "reflect": false,
                "attribute": "form-id"
            }
        };
    }
    static get states() {
        return {
            "isPageLoading": {},
            "autoValidate": {},
            "showPasswordValidation": {},
            "isChangingPassword": {},
            "confirmPassword": {},
            "countries": {},
            "countryCode": {},
            "userInfo": {}
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
            }, {
                "method": "loadingChanged",
                "name": "loadingChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
}
