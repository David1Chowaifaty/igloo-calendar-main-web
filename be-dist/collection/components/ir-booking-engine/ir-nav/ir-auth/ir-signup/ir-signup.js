import { Host, h } from "@stencil/core";
import { SignUpValidtor } from "../../../../../validators/auth.validator";
import { ZodError } from "zod";
import IntegrationIcons from "../../../../../assets/integration_icons";
import localizedWords from "../../../../../stores/localization.store";
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
        return (h(Host, { key: '74a0db60428d157cc8483b9f6a77c4304883c33e' }, h("h1", { key: '18dfcb7a3f1463374d76c66125602c8c1a87038f', class: "title mb-6" }, "Create an account"), h("form", { key: '009df7cc46c31055fdfbb2c097f9696f31ebda0b', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: 'b40dfa88f5986ee663df649f4b4e3f0800658fa3' }, h("ir-input", { key: '57bd5bf78ac1acfa567c4fe9a389612136fcc4a4', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: localizedWords.entries.Lcz_EnterYourFirstName })), h("fieldset", { key: '001835bed3a4df4d4a1aa734806b44308a582410' }, h("ir-input", { key: 'd1339ab76b285fd04711901c15957bcc2341ce4c', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: localizedWords.entries.Lcz_EnterYourLastName })), h("fieldset", { key: 'd8f8c13648d65acfbffdecd8308373513b7ce97e' }, h("ir-input", { key: '3cfa1cc474974b1396d76e4244cd234a4d5602ca', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: '1e6516bbe37dba15f1f5a199958f946665119fc7' }, h("ir-input", { key: '52fc3c7685ec72e0eab5c65e080d4b4319e8b146', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: localizedWords.entries.Lcz_EnterYourPassword })), h("ir-button", { key: '0816939164dae9fdba09cf7572ec5be1c3dd5fdc', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: '34e9c62a93d7c350ec3f10ad9fd43e12ce720356', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: '55c47b6d44d58bc734e88b03742ac3c3823caf7d', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '8db45e0ef696182c62acc24b60ac4d7093c82219', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '7f05ddcb65fef5a1cb86a10b7707d0004258ab10', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: '7a72b54ff596ff867a0ef363d4551afe809db90d', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: '4554610a23ea9003e4a7d9074af5e3dde8932b9c', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: 'f2e108b25d7b9750d3cebae1e92df33864daf647', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '1ff7b2a1774055155a29ac61e7737eb6230067ed', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '54e859ac06523159467d34268bd400fd0f9f5ae4', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: '02fb95cbb12b563ec6712e6f2138b0b026f9acb1', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: '9601b82a28ef06d37c69a817fd2579b7dc4d2267', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '21036a03ba146e460ff43e3035e9dbf67f759893' }, h("clipPath", { key: 'fb07b50521744227b0b554bcc4b36858f722ee79', id: "clip0_1256_132001" }, h("rect", { key: '1cda781cb86a1810a08f3b935804ba31c1923a64', width: "24", height: "24", fill: "white" }))))), h("div", { key: '6f043cf9a3c6f599eb31ed18d74fcb74ea5c46d9', class: "mt-4 flex items-center justify-center" }, h("p", { key: '13c7601a8ad2a17255595b3fd15119ba704611a1', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: '5d4dbb5a4d1750c65ecebffd567ae3e021212f27', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
