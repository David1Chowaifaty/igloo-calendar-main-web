import { Host, h } from "@stencil/core";
import { SignInValidtor } from "../../../../../validators/auth.validator";
import { ZodError } from "zod";
import { AuthService } from "../../../../../services/api/auth.service";
import app_store, { onAppDataChange } from "../../../../../stores/app.store";
import localizedWords from "../../../../../stores/localization.store";
export class IrSignin {
    constructor() {
        this.authService = new AuthService();
        this.enableSignUp = false;
        this.signInParams = {};
        this.formState = { cause: null, errors: null, status: 'empty' };
        this.isLoading = false;
    }
    componentWillLoad() {
        this.authService.setToken(app_store.app_data.token);
        onAppDataChange('app_data', newValue => {
            this.authService.setToken(newValue.token);
        });
    }
    modifySignInParams(params) {
        if (!this.signInParams) {
            this.signInParams = {};
        }
        this.signInParams = Object.assign(Object.assign({}, this.signInParams), params);
    }
    async login(params) {
        try {
            this.isLoading = true;
            const token = await this.authService.login({ option: 'direct', params });
            this.authFinish.emit({
                state: 'success',
                token,
                payload: Object.assign({ method: 'direct' }, params),
            });
        }
        catch (error) {
            this.authFinish.emit({
                state: 'failed',
                token: null,
                payload: Object.assign({ method: 'direct' }, params),
            });
            this.formState = {
                cause: 'auth',
                status: 'invalid',
                errors: { email: error.message, booking_nbr: error.message },
            };
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleSignIn(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        try {
            this.formState.errors = null;
            const params = SignInValidtor.parse(this.signInParams);
            this.signIn.emit({ trigger: 'be', params });
            await this.login(params);
        }
        catch (error) {
            let newErrors = {
                email: null,
                booking_nbr: null,
            };
            if (error instanceof ZodError) {
                error.issues.map(e => {
                    newErrors[e.path[0]] = e.message;
                });
                this.formState = {
                    cause: 'zod',
                    status: 'invalid',
                    errors: Object.assign({}, newErrors),
                };
            }
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return (h(Host, { key: '4086d1dbfc04b7c3d3c0463aab2b4ecf0b292503' }, h("h1", { key: 'fc9c44f9bcce40efdf7df7595ec41a51c90c06ce', class: "title" }, localizedWords.entries.Lcz_SignInToYourBooking), h("form", { key: '54e253c6e2b52f848fbb60a8a33a71fe39779f52', onSubmit: this.handleSignIn.bind(this) }, ((_a = this.formState) === null || _a === void 0 ? void 0 : _a.cause) === 'auth' && ((_b = this.formState) === null || _b === void 0 ? void 0 : _b.errors) && (h("div", { key: '016aaa94b17d5e384141dcfc04dca89ed9d3cb3b', class: "error" }, h("ir-badge-group", { key: '96964a31e1b548e131e81d944f7ec99311faa0ea', variant: "error", badge: "Error", message: (_e = (_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.email) !== null && _e !== void 0 ? _e : '' }))), h("fieldset", { key: '3e8563a6e39985b6795a95a09cc9c9db96e0ba0c' }, h("ir-input", { key: '9cf2ef96d10ed3cbe9d280fc1bde710e2a2065a5', error: !!((_g = (_f = this.formState) === null || _f === void 0 ? void 0 : _f.errors) === null || _g === void 0 ? void 0 : _g.email), onTextChanged: e => this.modifySignInParams({ email: e.detail }), autofocus: true, inputId: "email", label: localizedWords.entries.Lcz_EnterYourEmail, onInputBlur: e => {
                const firstNameSchema = SignInValidtor.pick({ email: true });
                const firstNameValidation = firstNameSchema.safeParse({ email: this.signInParams.email });
                const target = e.target;
                if (!firstNameValidation.success) {
                    target.setAttribute('data-state', 'error');
                    target.setAttribute('aria-invalid', 'true');
                }
                else {
                    if (target.hasAttribute('aria-invalid')) {
                        target.setAttribute('aria-invalid', 'false');
                    }
                }
            }, onInputFocus: e => {
                const target = e.target;
                if (target.hasAttribute('data-state'))
                    target.removeAttribute('data-state');
            } })), h("fieldset", { key: '199fbd6e3c8f85578637d5ba30ae2e3904c4b81a' }, h("ir-input", { key: 'a1b3679e93cbcec383a892306814a9733d0a3a9b', error: !!((_j = (_h = this.formState) === null || _h === void 0 ? void 0 : _h.errors) === null || _j === void 0 ? void 0 : _j.booking_nbr), onTextChanged: e => this.modifySignInParams({ booking_nbr: e.detail }), inputId: "booking_nbr", type: "number", label: localizedWords.entries.Lcz_EnterYourBookingBumber, onInputBlur: e => {
                const firstNameSchema = SignInValidtor.pick({ booking_nbr: true });
                const firstNameValidation = firstNameSchema.safeParse({ booking_nbr: this.signInParams.booking_nbr });
                const target = e.target;
                if (!firstNameValidation.success) {
                    target.setAttribute('data-state', 'error');
                    target.setAttribute('aria-invalid', 'true');
                }
                else {
                    if (target.hasAttribute('aria-invalid')) {
                        target.setAttribute('aria-invalid', 'false');
                    }
                }
            }, onInputFocus: e => {
                const target = e.target;
                if (target.hasAttribute('data-state'))
                    target.removeAttribute('data-state');
            } })), h("button", { key: 'c4178a5c2f533bfb59f21cbd99bf93f1661c0de7', type: "submit", class: "button-default ir-button", "data-size": 'md' }, this.isLoading && h("span", { key: '957900aafe148c12b053c465bfaa3b616eca89cc', class: "loader" }), localizedWords.entries.Lcz_SignIn), !app_store.app_data.hideGoogleSignIn && (h("div", { key: 'aa5b5b0edb492518d005174f7b766765e4f0197f', class: "divider" }, h("div", { key: '8fb7827d7c7ffea0a6230f81dde5cd26d1c42a36', class: "divider-line" }), h("span", { key: 'cdbf27cd1fa83db436b883b1c61984571f4a84bb', class: "divider-text" }, localizedWords.entries.Lcz_Or), h("div", { key: '746b80eb51573181a689cfa5b69c282040ce0d67', class: "divider-line" }))))));
    }
    static get is() { return "ir-signin"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-signin.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-signin.css"]
        };
    }
    static get properties() {
        return {
            "enableSignUp": {
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
                "attribute": "enable-sign-up",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "signInParams": {},
            "formState": {},
            "isLoading": {}
        };
    }
    static get events() {
        return [{
                "method": "authFinish",
                "name": "authFinish",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{\r\n    state: 'success' | 'failed';\r\n    token: string;\r\n    payload: {\r\n      method: 'direct' | 'google';\r\n      email?: string;\r\n      booking_nbr?: string;\r\n    };\r\n  }",
                    "resolved": "{ state: \"success\" | \"failed\"; token: string; payload: { method: \"google\" | \"direct\"; email?: string; booking_nbr?: string; }; }",
                    "references": {}
                }
            }, {
                "method": "navigate",
                "name": "navigate",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "TAuthNavigation",
                    "resolved": "\"login\" | \"register\"",
                    "references": {
                        "TAuthNavigation": {
                            "location": "import",
                            "path": "../auth.types",
                            "id": "src/components/ir-booking-engine/ir-nav/ir-auth/auth.types.ts::TAuthNavigation"
                        }
                    }
                }
            }, {
                "method": "signIn",
                "name": "signIn",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "TSignInAuthTrigger",
                    "resolved": "BeSignInTrigger | FBTrigger | GoogleTrigger",
                    "references": {
                        "TSignInAuthTrigger": {
                            "location": "import",
                            "path": "@/validators/auth.validator",
                            "id": "src/validators/auth.validator.ts::TSignInAuthTrigger"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-signin.js.map
