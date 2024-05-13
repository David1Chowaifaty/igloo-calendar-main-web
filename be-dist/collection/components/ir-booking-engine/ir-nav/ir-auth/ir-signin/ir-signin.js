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
        return (h(Host, { key: '14f3e3b3ad7e6a2a2f74dd2aa34aed7f604604bc' }, h("h1", { key: '855020b9ca74e96e1812e5b496383c6b6ac7f33b', class: "title mb-4" }, "Sign in to your account"), h("form", { key: 'f940ca35d74abf72867e7f3936777b14d4d8c712', onSubmit: this.handleSignIn.bind(this), class: "mb-8 space-y-4 " }, ((_a = this.formState) === null || _a === void 0 ? void 0 : _a.cause) === 'auth' && ((_b = this.formState) === null || _b === void 0 ? void 0 : _b.errors) && (h("div", { class: "mx-auto" }, h("ir-badge-group", { variant: "error", badge: "Error", message: (_e = (_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.email) !== null && _e !== void 0 ? _e : '' }))), h("fieldset", { key: '6e4492daa5e6e5ad9fcbae470f9de25ed12d2f20', class: "mb-5" }, h("ir-input", { key: 'bd280a1419b87268e29e5d776d2b6f100acd0b58', error: !!((_g = (_f = this.formState) === null || _f === void 0 ? void 0 : _f.errors) === null || _g === void 0 ? void 0 : _g.email), onTextChanged: e => this.modifySignInParams({ email: e.detail }), autofocus: true, inputId: "email", label: "Enter your email" })), h("fieldset", { key: '36e7d02f152721eb42c8ea12c8ef2bd4054a2302' }, h("ir-input", { key: 'ed1ca0669694e1d29104550562dd9056f5841adb', error: !!((_j = (_h = this.formState) === null || _h === void 0 ? void 0 : _h.errors) === null || _j === void 0 ? void 0 : _j.password), onTextChanged: e => this.modifySignInParams({ password: e.detail }), inputId: "password", type: "password", label: "Enter your password " })), h("div", { key: '0a4eefbbfc022a8e8e315b73059ee69c1f3ff1e9', class: "my-6 flex justify-end" }, h("ir-button", { key: 'b589229e8b047bb35e7906ef7233436969274efb', type: "button", variants: "ghost-primary", label: "Forgot password" })), h("ir-button", { key: '46c0df7ad6db5c5bf1acdc0e4975de705df24698', type: "submit", class: "w-full", label: "Sign in", size: "md" }), h("div", { key: '8a18fe961b08c7c3d61390fa8bfb36b86a6f1e1b', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: '6f4156748f987d885ad2b68c1afd54dbe4c38cb5', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '583fa37751ed0b1cb4376da0a986b214a5da8f22', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: 'c6d8dac4cd13511bde50865594c9b5bf9acf3252', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-social-button", { key: '9d95d163f499ad42bdf1713ae0ad5d32622151c2', class: "w-full", onSocialButtonClick: () => this.signIn.emit({ trigger: 'google' }), label: "Continue with Google" }, h("span", { key: 'ad0bf8e5bd1b249c08235c16524f3964cd465a0a', slot: "icon" }, h("svg", { key: 'fef2621a2a01ada481474a64493ca61e9972a581', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '96b74a461f864c479058af708b205b2750b1b776', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: 'aedabb2135f6922cc1cf0546511c513c0033f754', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: '15dd2cbd8e992453d1c3f2aba1afa4b11abb3c19', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: 'bb6a8960881b92e97147a35024312a18bb12ee0c', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '2dcc3419eb662bf2c64685ef66c914a550febdad', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: '6e2b8bdfb21d781daa92d2b252a70965a88fff24' }, h("clipPath", { key: 'd830af6b519bfd0d44c8e4412ff0f9d862cb9b03', id: "clip0_6707_5591" }, h("rect", { key: '9d8e5a68761b4c83e25c056fdbea624a87f46d4b', width: "24", height: "24", fill: "white", transform: "translate(0.5)" })))))), h("ir-social-button", { key: '4550e6ee8219f0d34baf56f69b60957709b16d78', onSocialButtonClick: () => this.signIn.emit({ trigger: 'fb' }), class: "w-full outline", label: "Continue with Facebook" }, h("svg", { key: 'e6b6df6e6c90909cdd1a208fe9e9dc2e055257a7', slot: "icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '07a5b5d38b29106a255b154f272b070264f10572', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: '716a975bebc442678f2728b8e1e0fb467e30d9d6', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: '5b075119f6e32344b0e282cb385c20427c69a904', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '96e223cdd54ad96f04d1518b5081b0346450b330' }, h("clipPath", { key: '723381025033166b9c065c9fc5ad1777725b7ce2', id: "clip0_1256_132001" }, h("rect", { key: '6c68a5eaaa2cb77be6e815bf26f09243e7189506', width: "24", height: "24", fill: "white" })))))), this.enableSignUp && (h("div", { class: "flex items-center justify-center" }, h("p", { class: "dont-have-an-account" }, "Don't have an account?"), h("ir-button", { label: "Sign up", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('register') })))));
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
