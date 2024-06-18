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
                console.log(this.formState);
            }
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return (h(Host, { key: '20d34ed81360282c96ed859b9bb0d9283dec255b' }, h("h1", { key: '0c175b2378737f6da20d9edc9effa000f67c0291', class: "title" }, "Sign in to your booking"), h("form", { key: '0c7de4d9f7638de90aab08b0328f61f5339412eb', onSubmit: this.handleSignIn.bind(this) }, ((_a = this.formState) === null || _a === void 0 ? void 0 : _a.cause) === 'auth' && ((_b = this.formState) === null || _b === void 0 ? void 0 : _b.errors) && (h("div", { class: "error" }, h("ir-badge-group", { variant: "error", badge: "Error", message: (_e = (_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.email) !== null && _e !== void 0 ? _e : '' }))), h("fieldset", { key: '3be2802df239e993325aa3d2f6233de9076fb68b' }, h("ir-input", { key: 'b1a33091d0191a9dc299d2260a234ae2dcedba0c', error: !!((_g = (_f = this.formState) === null || _f === void 0 ? void 0 : _f.errors) === null || _g === void 0 ? void 0 : _g.email), onTextChanged: e => this.modifySignInParams({ email: e.detail }), autofocus: true, inputId: "email", label: "Enter your email", onInputBlur: e => {
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
            } })), h("fieldset", { key: '45d62ced83ddcbb61de752c6c5d8ff90664ea343' }, h("ir-input", { key: 'c7e522a0fb4a5618ce08aef9280488c668138e9b', error: !!((_j = (_h = this.formState) === null || _h === void 0 ? void 0 : _h.errors) === null || _j === void 0 ? void 0 : _j.booking_nbr), onTextChanged: e => this.modifySignInParams({ booking_nbr: e.detail }), inputId: "booking_nbr", type: "number", label: "Enter your booking number", onInputBlur: e => {
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
            } })), h("ir-button", { key: '42f1c8d395b90727a42a928abf3979123693c5a3', isLoading: this.isLoading, type: "submit", class: "ir-button", label: "Sign in", size: "md" }), h("div", { key: '933d47bfc464b0bfaf9d837f46cc8be682d6016d', class: "divider" }, h("div", { key: '959901921f31097f1149c8a381336612423ca530', class: "divider-line" }), h("span", { key: 'edbeb4211e7f0c9e87ecf0e6d6a22a2490ab7655', class: "divider-text" }, "OR"), h("div", { key: 'f66bf872e1b1b50ce4ee7e1858f6e3411ad799ba', class: "divider-line" })))));
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
