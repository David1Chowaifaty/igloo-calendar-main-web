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
        return (h(Host, { key: '7f5d1d30f25c5d4e8956de895d91791857796edd' }, h("h1", { key: 'd980b542fa98d0eb53318ff2d85d1d938738a048', class: "title mb-4" }, "Sign in to your account"), h("form", { key: 'cf5bd3b7c9ae12bbcf193eb9ce1e7ecde8067a0c', onSubmit: this.handleSignIn.bind(this), class: "mb-8 space-y-4 " }, ((_a = this.formState) === null || _a === void 0 ? void 0 : _a.cause) === 'auth' && ((_b = this.formState) === null || _b === void 0 ? void 0 : _b.errors) && (h("div", { class: "mx-auto" }, h("ir-badge-group", { variant: "error", badge: "Error", message: (_e = (_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.email) !== null && _e !== void 0 ? _e : '' }))), h("fieldset", { key: '9f111d3eac30c0eff65e30f10d5d0e3d1be77ae6', class: "mb-5" }, h("ir-input", { key: 'aa889060970959cc06e82f2dd4c6398d2f9e58ab', error: !!((_g = (_f = this.formState) === null || _f === void 0 ? void 0 : _f.errors) === null || _g === void 0 ? void 0 : _g.email), onTextChanged: e => this.modifySignInParams({ email: e.detail }), autofocus: true, inputId: "email", label: "Enter your email" })), h("fieldset", { key: 'f2464833d0923f33fa42a9b03255c3f9a55631d6' }, h("ir-input", { key: '487f9b476e5bfe190189952ac3289d7191bb3087', error: !!((_j = (_h = this.formState) === null || _h === void 0 ? void 0 : _h.errors) === null || _j === void 0 ? void 0 : _j.password), onTextChanged: e => this.modifySignInParams({ password: e.detail }), inputId: "password", type: "password", label: "Enter your password " })), h("div", { key: 'd9378e007af418fe9d782581c422a3ee603f09ce', class: "my-6 flex justify-end" }, h("ir-button", { key: 'a2298d27121bcacbf0dba7b05866359baed230f6', type: "button", variants: "ghost-primary", label: "Forgot password" })), h("ir-button", { key: '318c584bf6fa43761ffbce271d6c24c15e1d701d', type: "submit", class: "w-full", label: "Sign in", size: "md" }), h("div", { key: 'ca83e5f4f37303e0d542e8b44f8c677e464be202', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: '8d6edc0b3285ed2029a876be1b9af5282097b62a', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '22b6bed2909016a37577cba877e6f96892d71bdf', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '76281fb64e0c3ba00b4f7f0753aa64afc22ecf2b', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: '2defda935730d9dec0d7e7b2413ee8de346282c1', class: "w-full", onButtonClick: () => this.signIn.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: 'ab680d384999b416576a121f2bffbc81f65dd19c', slot: "left-icon" }, h("svg", { key: 'a92a3bd979264eb84821a071d174ae1a3a230379', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '4c9e8c6e35f5c34c0ebb8c13ab659af48c0930d9', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '9c20156d774e92c562b8c39ac02b0f02c7e2e8f9', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: 'b754c854bfe284aa4d8e1f24bc56e3a4ccacedae', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '9a49e75a7c399e01de1d8d0ad649364e78623fc7', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '29c32fe516795c4b76069c0ebd65ca2f2bd60cf5', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: '7958fbb1b2362864032b3ff009ae22f4e52694ae' }, h("clipPath", { key: '11241964df6b016ab81f76515cdf1c41e3475860', id: "clip0_6707_5591" }, h("rect", { key: 'f48de7872b197eda507a1df0b9187546778f8d72', width: "24", height: "24", fill: "white", transform: "translate(0.5)" })))))), h("ir-button", { key: '2274f5051118cabd44e706b6022f0e917f264749', type: "button", onButtonClick: () => this.signIn.emit({ trigger: 'fb' }), class: "w-full", variants: "outline", label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '47a9b5949f3cdafece452d3948bb3cbdef6059c0', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '3130a7ca58dbb67e513ccf726b51280d2045adef', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: '04cf6293e86585467e5ba6837f1f307d0954928b', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'b88a6bf2753d4508cc3e94d6b233165512a9b02d', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '3a672fbd299d76b9ede8bd4cd92e66ea015dbb7e' }, h("clipPath", { key: 'f7914ecf366d373d7fc217931d65e5406e4a3e02', id: "clip0_1256_132001" }, h("rect", { key: 'ea562eee58e85c40a2d221005e9789e3063fd155', width: "24", height: "24", fill: "white" })))))), this.enableSignUp && (h("div", { class: "flex items-center justify-center" }, h("p", { class: "dont-have-an-account" }, "Don't have an account?"), h("ir-button", { label: "Sign up", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('register') })))));
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
