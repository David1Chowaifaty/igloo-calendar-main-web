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
        return (h(Host, { key: '3d966ca36ed6126f53b3bd033fc9f36424ae5f8d' }, h("h1", { key: 'ab2b2820a6f8e7a29ab14d35479494148f282461', class: "title mb-6" }, "Create an account"), h("form", { key: '88884ea4395b061f43553a7aac9d5b1d59669b0d', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: 'f98b0dcb3ad86ec7f9657858f33c4a58b3f0cfaa' }, h("ir-input", { key: '2efd1a5c775c5f94d7d2fb4dc3c8c5c40b851998', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: '9b0bc686d0e65c82a57f6364ee4df9c740ea2e7e' }, h("ir-input", { key: 'cf09888bfacad5e65effc3c0eb7a7f1cbacf971f', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: '089357730232768f7dfad91aa628587075d76ac8' }, h("ir-input", { key: '5ab7938d8f91e28efb6c1e94fcae0cb06d42bbd0', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: '46b63a3c3d97bec27609be2069f8c7c01a1f3e25' }, h("ir-input", { key: '94a7c853931ca42ba326b317c1572f7e48a9ab69', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: '6dbab9d9ec7329b33c761648c7626387990c92ef', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: '0f31b5f4c7ccd580f1537e0e9733aaf84e2fa8c2', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: '659b2f231d91acb468ea50b230ce358cdc5fc2a3', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: 'f6cf10ba86cdf13de9d887eecdd39db4988d5e12', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: 'bd6813b00e13655e6b7f54f4e358f64ea7aac986', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: '514cb893b4ccbb6d34a297b70dcc1a68a3888a65', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: 'a1d362b5fef980ad098805c57668b75052c4bce2', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: '83065d621b01f507a40661b8673e1d6085276774', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '681015acb3b25205ccc49f4a6ced226cdecb70ed', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'bbb50926297b7f390fe40785cf69746c598e8212', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: '56e96462b4a214bd4e31fdfff2cde87b3933efca', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'c1fcc0a833c9be7cf2b56137507617a2bd32653c', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '455cd34f44647bef2dc57e7fc5be142d73416fd7' }, h("clipPath", { key: '443324a451e9fd50a6a5eb9867846318161bb3bf', id: "clip0_1256_132001" }, h("rect", { key: '893b8b00a1e7c8ed604cad7a9c4634518696733c', width: "24", height: "24", fill: "white" }))))), h("div", { key: 'f45d75d55f8b5202ebff5d70c3e64747d1797abf', class: "mt-4 flex items-center justify-center" }, h("p", { key: '9863cf7bf5e077675f8e0c6b525da98a91d69aa6', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: 'b95e4f0af066a745dcb5ca1b242c0cd23547c118', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
