import { Host, h } from "@stencil/core";
import { SignInValidtor } from "../../validators/auth.validator";
import { ZodError } from "zod";
import { AuthService } from "../../services/api/auth.service";
import app_store from "../../stores/app.store";
export class IrSignin {
    constructor() {
        this.authService = new AuthService();
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
            await this.authService.login(params);
        }
        catch (error) {
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
        return (h(Host, { key: 'd88351d4990552cf04c2acec39e09da56bc6f8a6' }, h("h1", { key: 'f6cf45995da7c4e3d8ec056d8213912bfab7608e', class: "title" }, "Sign in to your account"), h("p", { key: '4ffcb2232a7a0cbd2c049c36bc5cf01289ca5acc', class: "Supporting-text mb-8 " }, "Welcome back! Please enter your details."), h("form", { key: 'd92b2e57d8e71413f8192337f9c2b48cef396714', onSubmit: this.handleSignIn.bind(this), class: "space-y-4 mb-8 " }, ((_a = this.formState) === null || _a === void 0 ? void 0 : _a.cause) === 'auth' && ((_b = this.formState) === null || _b === void 0 ? void 0 : _b.errors) && (h("div", { class: "mx-auto" }, h("ir-badge-group", { variant: "error", badge: "Error", message: (_e = (_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.email) !== null && _e !== void 0 ? _e : '' }))), h("fieldset", { key: 'c196dfc581ff6fbea33564f72b660ae2d497bf68', class: "mb-5" }, h("ir-input", { key: '2a29ddaf1f3df4f0352867c5c097d1ebf9caa8a0', error: !!((_g = (_f = this.formState) === null || _f === void 0 ? void 0 : _f.errors) === null || _g === void 0 ? void 0 : _g.email), onTextChanged: e => this.modifySignInParams({ email: e.detail }), autofocus: true, inputId: "email", label: "Enter your email" })), h("fieldset", { key: '44db6f913a9a6e6fc525bb7045bc970b9ea70202' }, h("ir-input", { key: 'fa5825b140666be53932ed7021e68da353652653', error: !!((_j = (_h = this.formState) === null || _h === void 0 ? void 0 : _h.errors) === null || _j === void 0 ? void 0 : _j.password), onTextChanged: e => this.modifySignInParams({ password: e.detail }), inputId: "password", type: "password", label: "Enter your password " })), h("div", { key: '5f33b12efbe3ab04b85092147319aab64cedd71c', class: "my-6 flex justify-end" }, h("ir-button", { key: '725b3439a0c545fe6ef26582d59b1deb370bbb03', type: "button", variants: "ghost-primary", label: "Forgot password" })), h("ir-button", { key: '5afdd51f00739f9184914b719de12f680deabcfb', type: "submit", class: "w-full", label: "Sign in", size: "md" }), h("div", { key: '4e7a1417565191feb2112dd591be36fa0a97e76c', class: "flex items-center justify-center gap-4 mb-4" }, h("div", { key: '83b66c3c2ddaa78e7d9758e0b829c0a0c22b4e4e', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '0f4f1e3c12e1779ab37d0e9e1b2dbb1776b952f9', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '8ce99350894b2397d206006bb1573327983f164f', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: 'f5ba7876ffb74b4b19c1d47ed70555173a0642fd', class: "w-full", onButtonClick: () => this.signIn.emit({ trigger: 'google' }), variants: "outline", label: "Sign in with Google", haveLeftIcon: true }, h("span", { key: 'c573c2e66a77f34e6ba89b8cf5f8eda465712e90', slot: "left-icon" }, h("svg", { key: '6a492fc7744011740632e06d32486ca09bb31722', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '42aa6e65dc424d7694045bdd55c84fb907feaff3', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: 'd7473c6ba6a6fff18a876f311a283427912bf4e1', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: '84fb5db261de58d778c6e95f7392cbe38a9711f9', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '7a2a86570fb2192f05a3ed149977b170a37a78e7', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '2956d5bc47a9f75a2b70abf128f1db1f2f0774a8', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: '871a7d0a746c78220be330abea741aa7c06b06a5' }, h("clipPath", { key: 'cead54c6461d2a884fc9b41a574bc5605c099f0d', id: "clip0_6707_5591" }, h("rect", { key: 'b56e056637c29fd3ecdf83b02c9b8d0f1cf4e924', width: "24", height: "24", fill: "white", transform: "translate(0.5)" })))))), h("ir-button", { key: '9021f4af9a7bbc31043072acd40bfa61b533fa89', type: "button", onButtonClick: () => this.signIn.emit({ trigger: 'fb' }), class: "w-full", variants: "outline", label: "Sign in with Facebook", haveLeftIcon: true }, h("svg", { key: '01817c6d09dd6d5c8762e3f0c7392eeadafa4a4a', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '494c2cbe66bf4dbc1dc8c889d4d9c5b28a1a20bd', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: 'eb78869decf23944df6c2c77f21d1b4cd9b76969', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'defd54d4d12f4c0e5a467c1409e43d79b946cb5c', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: 'e19bf61d50638bcdfb925cde6f958f624792584c' }, h("clipPath", { key: '6cd8f96295b657d003fe590aabc3d5e8db50a0e3', id: "clip0_1256_132001" }, h("rect", { key: 'e6d7b74bddd2f93de7c75c18a7a36f6d924b381a', width: "24", height: "24", fill: "white" })))))), h("div", { key: '04f8ad4ac6d821c410cf1c601178366b9f6e2a90', class: "flex items-center justify-center" }, h("p", { key: '832929abd621d85a5099796013ab81a76bb1b0e8', class: "dont-have-an-account" }, "Don't have an account?"), h("ir-button", { key: '075176e50d8bf8481fc26fe067751d37c69eedc9', label: "Sign up", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('register') }))));
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
    static get states() {
        return {
            "signInParams": {},
            "formState": {}
        };
    }
    static get events() {
        return [{
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
                            "path": "../ir-auth/auth.types",
                            "id": "src/components/ir-auth/auth.types.ts::TAuthNavigation"
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
