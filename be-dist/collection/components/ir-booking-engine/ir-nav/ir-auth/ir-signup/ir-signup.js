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
        return (h(Host, { key: '40493f336fd980a8e7bdb5d1588f52d5caba5f14' }, h("h1", { key: '83e5a0137232a7c66d223a2c4731e90ad73c4b62', class: "title mb-6" }, "Create an account"), h("form", { key: 'a36cb7eade0cc8466974e44b7bd711014f820c06', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: 'cb6ee6245a83b48d3e62df4e065454f53f4a0c72' }, h("ir-input", { key: 'cddd69758fd8a19e1f3c2277a92972ef35db826f', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: 'da74745d2b04855f2080425148bad0f2c382016d' }, h("ir-input", { key: '52db16f44a582f48a66b1c5ae2273c508141347f', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: '10c303e907945f5709b1c7ec9c5eef4bebc478e1' }, h("ir-input", { key: 'ea35ab90005bb6169c1053bbf1d3d13088ca5386', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: 'ede4de1318fd60e659a6cf5784bcfa3e3ffca834' }, h("ir-input", { key: 'df79d38aa57f9d60d86870017905c65bf70a3c13', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: '768b8011f60a35e988112335cd2ea2dbbaf0920e', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: 'bc6566f5323f28ea0c9d0d82ca2b1f4185503bcc', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: 'd25213741b3c08dd144db92ee06009484ab6267e', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '1c0457a4bf3657f86e3661a799a31eff08569385', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: 'c3c72ed799774e8e3d4228a2fde1601ab20f9653', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: 'e549a57fe4caf8a7a344ddaa700737b3cdfae57f', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: 'f805aaa319d1ca6971ee525ecf1592336a67a1e1', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: '8fd3df5b1ba80820e1ed83eb32685355dd2eb787', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: 'e05ef948395b2f03d543b9281261cfb95c542a6a', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '59ea31c89b342aa940fab517d275e251756feb10', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: 'e6ad01d9a4dd87f691688b58e2dcd5afb020fd8c', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'c803f6316c7c5ca3450bb8106d66281a209aad05', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '6e9623271dd95339695676f96e40f6b24766550c' }, h("clipPath", { key: '9bb5d6150e21d395731d569ff3d6080b70ef4f02', id: "clip0_1256_132001" }, h("rect", { key: 'a3ef1c7b87d543fbb7fb3d6a807bab57aa8e54a5', width: "24", height: "24", fill: "white" }))))), h("div", { key: '1b9bb538c99cdd36da6fbf92307c03c975280c0c', class: "mt-4 flex items-center justify-center" }, h("p", { key: 'dd6f504c70f561691759aa949e97a3d07e8dcebf', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: '263b50c0121e9a501314d2ce824d1f969aa3fc5e', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
