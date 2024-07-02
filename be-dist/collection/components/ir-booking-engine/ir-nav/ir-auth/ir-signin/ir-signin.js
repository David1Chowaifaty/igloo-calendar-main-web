import { Host, h } from "@stencil/core";
import { SignInValidtor } from "../../../../../validators/auth.validator";
import { ZodError } from "zod";
import { AuthService } from "../../../../../services/api/auth.service";
import app_store, { onAppDataChange } from "../../../../../stores/app.store";
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
        return (h(Host, { key: '24b6225c6363fecdd4033a417cdeda4ef8ac6705' }, h("h1", { key: '4d156dc8ee0240b452812a0bff85fb5cca5aae27', class: "title" }, "Sign in to your booking"), h("form", { key: '883bae418f51d3fc2e3c85be8e54243d1c745f33', onSubmit: this.handleSignIn.bind(this) }, ((_a = this.formState) === null || _a === void 0 ? void 0 : _a.cause) === 'auth' && ((_b = this.formState) === null || _b === void 0 ? void 0 : _b.errors) && (h("div", { key: '4ef42eb7dd4c3c0d99c5913d241ad3e3904bdc35', class: "error" }, h("ir-badge-group", { key: '37620124453c67c88c8d66b6069eb909910efb53', variant: "error", badge: "Error", message: (_e = (_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.email) !== null && _e !== void 0 ? _e : '' }))), h("fieldset", { key: '9799c1bb4347891217eb857d51364ce96e8943c2' }, h("ir-input", { key: '792e0eab7ef4b855186b594db9643ae8fe0cc45b', error: !!((_g = (_f = this.formState) === null || _f === void 0 ? void 0 : _f.errors) === null || _g === void 0 ? void 0 : _g.email), onTextChanged: e => this.modifySignInParams({ email: e.detail }), autofocus: true, inputId: "email", label: "Enter your email", onInputBlur: e => {
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
            } })), h("fieldset", { key: '3bb301b174581a0b74b27888cd552f61bead91ee' }, h("ir-input", { key: '1cba89c7e04ae1419bcde2baede21ad6bd20b3c3', error: !!((_j = (_h = this.formState) === null || _h === void 0 ? void 0 : _h.errors) === null || _j === void 0 ? void 0 : _j.booking_nbr), onTextChanged: e => this.modifySignInParams({ booking_nbr: e.detail }), inputId: "booking_nbr", type: "number", label: "Enter your booking number", onInputBlur: e => {
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
            } })), h("ir-button", { key: 'edbac9c240cbdb61577499cabd9c1190cfdb7f29', isLoading: this.isLoading, type: "submit", class: "ir-button", label: "Sign in", size: "md" }), h("div", { key: '9abbc6772458a7f0c6e553381a3549abfa6ef8b3', class: "divider" }, h("div", { key: '36ebc02e6fae5ce7e355fec5d9fbf09b9329fd98', class: "divider-line" }), h("span", { key: '253f61f0ca32161c2dc398bec56d4582324af69b', class: "divider-text" }, "OR"), h("div", { key: 'fddc246f2edb8caedac57948a068ae560c1bd186', class: "divider-line" })))));
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
