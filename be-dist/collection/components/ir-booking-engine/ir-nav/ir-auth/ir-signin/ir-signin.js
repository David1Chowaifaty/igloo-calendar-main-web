import { Host, h } from "@stencil/core";
import { SignInValidtor } from "../../../../../validators/auth.validator";
import { ZodError } from "zod";
import { AuthService } from "../../../../../services/api/auth.service";
import app_store from "../../../../../stores/app.store";
export class IrSignin {
    constructor() {
        this.authService = new AuthService();
        this.enableSignUp = true;
        this.signInParams = {};
        this.formState = { cause: null, errors: null, status: 'empty' };
    }
    componentWillLoad() {
        this.authService.setToken(app_store.app_data.token);
    }
    modifySignInParams(params) {
        if (!this.signInParams) {
            this.signInParams = {};
        }
        this.signInParams = Object.assign(Object.assign({}, this.signInParams), params);
    }
    async login(params) {
        try {
            const token = await this.authService.login(Object.assign(Object.assign({}, params), { password: '' }), params.password);
            this.authFinish.emit({ state: 'success', token });
        }
        catch (error) {
            this.authFinish.emit({ state: 'failed', token: null });
            this.formState = {
                cause: 'auth',
                status: 'invalid',
                errors: { email: error.message, password: error.message },
            };
        }
    }
    async handleSignIn(e) {
        e.preventDefault();
        try {
            this.formState.errors = null;
            const params = SignInValidtor.parse(this.signInParams);
            this.signIn.emit({ trigger: 'be', params });
            await this.login(params);
        }
        catch (error) {
            let newErrors = {
                email: null,
                password: null,
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
        return (h(Host, { key: 'ef43174f52e74d0810d1c4b52dd9a2ff5a75429e' }, h("h1", { key: '64a7626adbea1e07a34a3ddb312ed8a60487e0f8', class: "title mb-4" }, "Sign in to your booking"), h("form", { key: '901eb79974e9938b6174055db11d8c0d6222782d', onSubmit: this.handleSignIn.bind(this), class: "space-y-4 " }, ((_a = this.formState) === null || _a === void 0 ? void 0 : _a.cause) === 'auth' && ((_b = this.formState) === null || _b === void 0 ? void 0 : _b.errors) && (h("div", { class: "mx-auto" }, h("ir-badge-group", { variant: "error", badge: "Error", message: (_e = (_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.email) !== null && _e !== void 0 ? _e : '' }))), h("fieldset", { key: '3accb1432ac6e4e0b033386a1a891b7587b5e44e', class: "mb-5" }, h("ir-input", { key: '26ebc1455cca81e4d9cc6e4c25bbbd062a2eaf54', error: !!((_g = (_f = this.formState) === null || _f === void 0 ? void 0 : _f.errors) === null || _g === void 0 ? void 0 : _g.email), onTextChanged: e => this.modifySignInParams({ email: e.detail }), autofocus: true, inputId: "email", label: "Enter your email" })), h("fieldset", { key: 'c47375b561df75c2effeca5c8775ce71cc03ad21' }, h("ir-input", { key: '55e7da3654dda087632cd46429342393521213ac', error: !!((_j = (_h = this.formState) === null || _h === void 0 ? void 0 : _h.errors) === null || _j === void 0 ? void 0 : _j.password), onTextChanged: e => this.modifySignInParams({ password: e.detail }), inputId: "password", type: "password", label: "Enter your booking number " })), h("ir-button", { key: '1a4474e4abdab9a72ee595e67eeb9d58e8f7a062', type: "submit", class: "w-full", label: "Sign in", size: "md" }), h("div", { key: '87970908f9136e8c7b6f11408151dc0ebf608492', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: 'b32ff8f1c1f0f00433a6d861771d36d751086771', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: 'e613f4c77bd01e4c05a4f9f53f2bdb635be2f414', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '6262e80138b7a93ec4d0c7ac2fbbe5b644fb1de7', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })))));
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
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "signInParams": {},
            "formState": {}
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
                    "original": "{ state: 'success' | 'failed'; token: string }",
                    "resolved": "{ state: \"success\" | \"failed\"; token: string; }",
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
