import { Host, h } from "@stencil/core";
import { SignUpValidtor } from "../../../../../validators/auth.validator";
import { ZodError } from "zod";
import IntegrationIcons from "../../../../../assets/integration_icons";
export class IrSignup {
    constructor() {
        this.signUpParams = {};
        this.formState = { errors: null, status: 'empty' };
    }
    modifySignUpParams(params) {
        if (!this.signUpParams) {
            this.signUpParams = {};
        }
        this.signUpParams = Object.assign(Object.assign({}, this.signUpParams), params);
    }
    handleSignUp(e) {
        e.preventDefault();
        try {
            this.formState.errors = null;
            const params = SignUpValidtor.parse(this.signUpParams);
            this.signUp.emit({ trigger: 'be', params });
        }
        catch (error) {
            if (error instanceof ZodError) {
                let newErrors = {
                    email: undefined,
                    password: undefined,
                    first_name: undefined,
                    last_name: undefined,
                };
                error.issues.map(e => {
                    newErrors[e.path[0]] = e.message;
                });
                this.formState = {
                    status: 'invalid',
                    errors: Object.assign({}, newErrors),
                };
            }
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return (h(Host, { key: 'c13cfe51a213eab721fd4d3494c6767ac526e369' }, h("h1", { key: '4ed47742473fdd2b4bbf696d1969aaef3d03ed3a', class: "title mb-6" }, "Create an account"), h("form", { key: '67111283cb8ee7e1ddaeac29e58f08da314842fb', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: '47b78424bad14b5e8b3dcd42e8ed4bf621fa0ab5' }, h("ir-input", { key: '107419555b97bb995c964143f3a6d9cad6430207', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: 'b7e5a91701656e8720549946d7b6ea2e6c840270' }, h("ir-input", { key: '1cf247750d1bdb5f32ec1af72c3200fe009ff6f9', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: '0f08bf700d326a98edbd0baac2b91d8ef64de5e5' }, h("ir-input", { key: '3680e58130c23685fea35ef1393f587a2a1e86fc', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: '649ac70b7fe2ad8cd238699343b234783129759d' }, h("ir-input", { key: 'c488fb6a0d813f40d923ca9c1e186fb094c20e93', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: '60a1611d59ad229630d24b05e0bcb58ba2bf51af', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: '86e43eb54bace80fbb4d494a60d3d096c204b242', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: 'bee359e9aa7ffa8a9d77ee8341cafeb5e0d9b0ed', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '04bf4b0006f7b8bb85f7cb449c31627a4fdf299e', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: 'b1366772d323a1a8b9d6a189c4f977b8307d8917', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: 'f2ff59befaa28ac87656a37af869a8c018b7a33a', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: 'a5a95eefab7e10edd083dc4f0a0d181f57a87aa2', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: 'befad4b48499368ed6967ecce7dba42fc01fdaba', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '79bde71e25a14f8e476477c51a59cd68850a8948', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'eac00483d8d91ad46d50086f561459ad6eabb9b2', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: '16288d4d238b49160da1250cf460d1e5f59b969e', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: '96b8cd8dbafca87779cdace8968ca791c8e99f82', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '8cb11da4dfb1d036cef34fa4fde22dc88b8a2909' }, h("clipPath", { key: 'b7b3722e8c9a831e8f0732394d5330fb4c24c013', id: "clip0_1256_132001" }, h("rect", { key: 'dbbb16a5988aa30c6555428e2f1fe1321f2159c8', width: "24", height: "24", fill: "white" }))))), h("div", { key: 'ed93fd468bdcee3d24204a77a39605559860396d', class: "mt-4 flex items-center justify-center" }, h("p", { key: 'dce7743f0157508fb74116f4128a11215065331e', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: 'd05e9d00dc1d4cc3267202fa42baf666533dd870', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
    }
    static get is() { return "ir-signup"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-signup.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-signup.css"]
        };
    }
    static get states() {
        return {
            "signUpParams": {},
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
                "method": "signUp",
                "name": "signUp",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "TSignUpAuthTrigger",
                    "resolved": "BeSignUpTrigger | FBTrigger | GoogleTrigger",
                    "references": {
                        "TSignUpAuthTrigger": {
                            "location": "import",
                            "path": "@/validators/auth.validator",
                            "id": "src/validators/auth.validator.ts::TSignUpAuthTrigger"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-signup.js.map
