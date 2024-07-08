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
        return (h(Host, { key: 'ac1ae8a2f597b8ef7df0510b0a717d4ab1e97d02' }, h("h1", { key: '3f6cada8a19261046f3f10079c5435b07ceba9cd', class: "title mb-6" }, "Create an account"), h("form", { key: 'e8bc6e3e6bc13655dc34c806415609ba6eed3041', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: 'aae561a777321e09ae9a72aabc3398ccbeb5e632' }, h("ir-input", { key: 'c700bd0ae71420eb0ebc0be24338e54e93782e53', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: '513a40db7fd31b23fb2956485e7a2a835e7cdfdb' }, h("ir-input", { key: 'f6754c2727f9e5415a6c7d2262021a1b0a3c250a', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: '84ca57746154ceb2d6ba6103b802f10d43029f8f' }, h("ir-input", { key: '4b2f6d94eeeeb1a4de96d739f9c6d9189008f60c', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: '83541cbd5628c294796b477b9a694eaef70454af' }, h("ir-input", { key: 'd38de0882be4e5afaee6ff0c16b3c95685c7e49c', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: 'f4699ab2055e86b43eefe6cfa7eee307c5189da4', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: '8fba5d73b2a906384ab23c6cc0d8fb5866e10170', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: '7218658f8d6677a929d311204c66d109b454fc11', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: 'aea79f7981d0e293c12a7df409bc865b0e66fe0d', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '881884660e35d80f32e245ebe4b9fe10a7243f88', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: 'b5379e73be07180ac7a79e253e780fe19dc01546', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: '58260c3891ba79bfb5f29251bb4f6aa22ae4c239', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: 'd3885f511e12c7e95fa922e3054fe3e4928ff122', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: 'ddff90b2c8ace5af6b40c59ab60cd8a88a66eebf', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '319339299526ecc227a8f2ccbf068579f8d255c7', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: 'c9f1d64577d7be78a819a717942754428664565d', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'd8954ce39cc107f62d30593d23c413d5034c4085', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '72a1033ad5343f47c19f34d25c6d478b58b92e51' }, h("clipPath", { key: 'c91244af54ad4a4d69aea3686940d1e8f0f725ff', id: "clip0_1256_132001" }, h("rect", { key: '5e3b4045396d5d7bd74786d82f47dd5a7d0b9900', width: "24", height: "24", fill: "white" }))))), h("div", { key: '9afd85be06453f509e7f5cede5049740f67de971', class: "mt-4 flex items-center justify-center" }, h("p", { key: '4359855706209a84f11f82e8f4c5ed8fa3d8798e', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: '09b2e448516dc7fa2d12eb71238489d506b5df7e', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
