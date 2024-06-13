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
        return (h(Host, { key: 'e555210db87bdf90add5785245e9fdf67bc6a9a9' }, h("h1", { key: 'bf99537b9b73377e015aaef6edc0b076f30e25f6', class: "title mb-6" }, "Create an account"), h("form", { key: '76085b1087240e02b368bd85aeb1ed7b81b9c0dd', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: '99ae6898637553b2657c8b1bf670b4412059b478' }, h("ir-input", { key: 'f7ac518f3667a23d1e5dbd0b12d263dceb16e4f3', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: 'ad3d56244a5832744143e06bb259a36ce931a084' }, h("ir-input", { key: '9a703efcf87f49cb6e17c71e786b02a3f6a72243', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: 'f91fcc534311bd8b5a816b9aa0b4fce0a0206ad0' }, h("ir-input", { key: '4085ab549db6da22350897539aaa7a7f2c4ae4be', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: '1be41b0b720fa485b8a83d8014e08a8b27017ed1' }, h("ir-input", { key: 'fada9a7fa558ba5940c1b3e5cb0350ce0f51e877', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: 'e8f62c35a898adbf96d3ad774d396950bdca1632', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: '1b8a379dfc747a140de5a7f176249907f645d453', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: '575ba5ec8263d530aba0902fc270280bc93fda70', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '66cd69029d2985c1bcb4558f37eab5bd9764c285', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '88bc2a97863d8aded5bcef74991ca8a729bea3b4', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: 'a5f5d79ef78c78e24d55ea52880651b70e323b25', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: '3645db80963568d0cc3625b99610294bc9702119', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: 'b64a732926ca469a5f7d9c6ea27682803e763c88', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '683ed2eff907b4c3e52ad22e5432f168a2eb4e0a', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '343cbd9b65fa884e6eb9795a25a35a0facfcbcc8', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: '469e4c5d0ce89a5289d14bf7536f76d968417090', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: '39fa63b3c176468ad91fe015f175e37e9f40d4c6', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '74043119c58b51b978112ca4eb281e924ffc81b7' }, h("clipPath", { key: '436bd39aed3229bb7ad55a0c46348020d45b3621', id: "clip0_1256_132001" }, h("rect", { key: '7f15bd630ce2b5a80abc247345bd04a06c6425f9', width: "24", height: "24", fill: "white" }))))), h("div", { key: '26402bf9aa74904256216ca31ac9b86f90c5d929', class: "mt-4 flex items-center justify-center" }, h("p", { key: '3cadef05bc5d748467a7195551b4f20f53799e42', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: '556d9fcf29993dc7daeb04a796d9c5f5a4269d1e', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
