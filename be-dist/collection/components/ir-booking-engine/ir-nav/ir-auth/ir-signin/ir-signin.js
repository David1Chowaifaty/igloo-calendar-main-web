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
        return (h(Host, { key: '2d7e9dd74c278f3e633207c7e788dc939b463fb9' }, h("h1", { key: '71dc8932f6f16760fa6fb31966bf7a3a89b0ce71', class: "title" }, "Sign in to your booking"), h("form", { key: 'be38d14ee4dacaee817befd18476df96d0dd8462', onSubmit: this.handleSignIn.bind(this) }, ((_a = this.formState) === null || _a === void 0 ? void 0 : _a.cause) === 'auth' && ((_b = this.formState) === null || _b === void 0 ? void 0 : _b.errors) && (h("div", { key: '106cdb6dff4358e3ed1b1b62acc72307a6605d24', class: "error" }, h("ir-badge-group", { key: 'ef9b21cdafba6582aacb54c50c38eb4dc4f6f03d', variant: "error", badge: "Error", message: (_e = (_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.email) !== null && _e !== void 0 ? _e : '' }))), h("fieldset", { key: 'a3452146e4bbbdca755f30f45b1ee0701b360564' }, h("ir-input", { key: '38f369f3a417d90ab731145730eff00f47bb4f5a', error: !!((_g = (_f = this.formState) === null || _f === void 0 ? void 0 : _f.errors) === null || _g === void 0 ? void 0 : _g.email), onTextChanged: e => this.modifySignInParams({ email: e.detail }), autofocus: true, inputId: "email", label: "Enter your email", onInputBlur: e => {
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
            } })), h("fieldset", { key: 'cbd96053b18195b7e5f30b79d8bca60857ecbc90' }, h("ir-input", { key: 'f003b0e1752baacfe9ef98dc91c0afffe6e81ce6', error: !!((_j = (_h = this.formState) === null || _h === void 0 ? void 0 : _h.errors) === null || _j === void 0 ? void 0 : _j.booking_nbr), onTextChanged: e => this.modifySignInParams({ booking_nbr: e.detail }), inputId: "booking_nbr", type: "number", label: "Enter your booking number", onInputBlur: e => {
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
            } })), h("button", { key: '0c375ddb31463f0cb07a277ed988dbf9f06b9c24', type: "submit", class: "button-default ir-button", "data-size": 'md' }, this.isLoading && h("span", { key: 'f74de4865201a382f4c1892ab94795dd722c7fea', class: "loader" }), "Sign in"), !app_store.app_data.hideGoogleSignIn && (h("div", { key: 'fc5b072404d73152c97eea2d6028013a97e8be13', class: "divider" }, h("div", { key: '5379a39db0d3af2621be832b0eae81ed00d73501', class: "divider-line" }), h("span", { key: '5760f4755b282e2cf8253fb65bba8ba240bed1e8', class: "divider-text" }, "OR"), h("div", { key: 'd9c3ab26ccca0b6eb430a470f91ca2cd5354d154', class: "divider-line" }))))));
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
