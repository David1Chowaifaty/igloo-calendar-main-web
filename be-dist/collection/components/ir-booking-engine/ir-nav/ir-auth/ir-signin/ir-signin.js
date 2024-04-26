import { Host, h } from "@stencil/core";
import { SignInValidtor } from "../../../../../validators/auth.validator";
import { ZodError } from "zod";
import { AuthService } from "../../../../../services/api/auth.service";
import app_store from "../../../../../stores/app.store";
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
        return (h(Host, { key: 'ed4f8dca5588cc36dcd4df40ad3ca3faa1a067bc' }, h("h1", { key: '9dacdfa3d17e16c19307a6d567c91014e8993028', class: "title mb-4" }, "Sign in to your account"), h("form", { key: 'f85757ef72a70637f040a443cd1d90e115be8fda', onSubmit: this.handleSignIn.bind(this), class: "space-y-4 mb-8 " }, ((_a = this.formState) === null || _a === void 0 ? void 0 : _a.cause) === 'auth' && ((_b = this.formState) === null || _b === void 0 ? void 0 : _b.errors) && (h("div", { class: "mx-auto" }, h("ir-badge-group", { variant: "error", badge: "Error", message: (_e = (_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.email) !== null && _e !== void 0 ? _e : '' }))), h("fieldset", { key: '3056e096cd36767f201416abdbda14e640e172d8', class: "mb-5" }, h("ir-input", { key: 'df28779418fb9dcf8440d1fbbf6b4f371022c58a', error: !!((_g = (_f = this.formState) === null || _f === void 0 ? void 0 : _f.errors) === null || _g === void 0 ? void 0 : _g.email), onTextChanged: e => this.modifySignInParams({ email: e.detail }), autofocus: true, inputId: "email", label: "Enter your email" })), h("fieldset", { key: 'f5d7112bbdec3de2c71228394e11af2b2a2362a9' }, h("ir-input", { key: '9c28a3c4d19850f3230361a72e364e2991bed232', error: !!((_j = (_h = this.formState) === null || _h === void 0 ? void 0 : _h.errors) === null || _j === void 0 ? void 0 : _j.password), onTextChanged: e => this.modifySignInParams({ password: e.detail }), inputId: "password", type: "password", label: "Enter your password " })), h("div", { key: '59ea22262905d065863199241dfcf64944257ace', class: "my-6 flex justify-end" }, h("ir-button", { key: '432b54a27ce3bc5ef7cdffedfa9780a58d13d008', type: "button", variants: "ghost-primary", label: "Forgot password" })), h("ir-button", { key: 'cc6721c71cf821243d56dafa0123516adeb55398', type: "submit", class: "w-full", label: "Sign in", size: "md" }), h("div", { key: '20bc40b143036adafe6f4a5e2f2f9ece9cab2d0c', class: "flex items-center justify-center gap-4 mb-4" }, h("div", { key: 'f06347160915db681ebcb692ea0b70b27e2538ee', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '148eb69c2d68f96621e32399d444a80cc19ef19c', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '3fa3985cbb9eda2ce532220c2e46560a1fb67410', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: '31f9c35f6b5b9edabde979d5c896d66e73945946', class: "w-full", onButtonClick: () => this.signIn.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: 'fb6fcddf2be743f9a59e7f07e59816b202aa6434', slot: "left-icon" }, h("svg", { key: 'bc3d1417055c779bb262c01c96e62ae0dcc1f92b', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'f1283f3e9c7c9fed12d06fc3fe13fa176eddf3f1', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '512ef3c431c64d0b8bfdc354dbbb9c06cb0d9cad', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: 'ceee3c90c2ad706f40225fea7d07358e1261bf0e', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '4b3006ac70b3cfc95f6a6e8ab4347c5cb1ab92dd', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '40c2fb4332f62219ca12c5d87278b0c362c53c3b', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: 'c7712db04e83fe7b560af03e0557e5de87e96a09' }, h("clipPath", { key: '19eb63bd5264e04d74747f539e78888899eca57b', id: "clip0_6707_5591" }, h("rect", { key: '4f8f21af917c3e166bc65cd4bd765ac59e6bf0e9', width: "24", height: "24", fill: "white", transform: "translate(0.5)" })))))), h("ir-button", { key: 'f053595cb53a786baeb056eff0dcb96caf859ee7', type: "button", onButtonClick: () => this.signIn.emit({ trigger: 'fb' }), class: "w-full", variants: "outline", label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: 'dd544ae902b618d82a2a8db542dc2d02cbe8bd30', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '343cfd0e3ae254999a31bfcf766c6223e7bd430d', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: 'c947f7be924626968e2670a6ed29e2e5337eec05', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'f869f50f7dfd282a59367ddad514cde8385401a3', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: 'ddb6356bf56dadf961a249922cb011074692f011' }, h("clipPath", { key: 'cd1e69192e041125949dbd3bf9001199743d4dd9', id: "clip0_1256_132001" }, h("rect", { key: '7e9d81b71c77d32aa1aab89ffe184c44cbee11a8', width: "24", height: "24", fill: "white" })))))), h("div", { key: 'fee7ab0443be51c040f3f4ff8c83c1c16f6fa72c', class: "flex items-center justify-center" }, h("p", { key: 'b4645a15c10fcc6e558bc510c4d0d0ab4274b60c', class: "dont-have-an-account" }, "Don't have an account?"), h("ir-button", { key: '6d68aebe88ce899c79e7259432204aa18d3f0d48', label: "Sign up", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('register') }))));
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
