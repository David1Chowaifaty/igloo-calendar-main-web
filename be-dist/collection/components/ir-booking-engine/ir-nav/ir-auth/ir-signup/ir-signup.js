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
        return (h(Host, { key: 'be634a3ee315501f0db0190c2abe20da4a75d577' }, h("h1", { key: 'eb49ce9d8602dc8f18c9806e2b3cd11fd8978e51', class: "title mb-6" }, "Create an account"), h("form", { key: 'e84bd806180d386ad72bd80dec75f0d8ad05f469', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: '1226aec4f5a20f83a88ef4c77af515479a748439' }, h("ir-input", { key: 'ae4f7b8472bec978ff0f563c179953b40ccb4db9', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: localizedWords.entries.Lcz_EnterYourFirstName })), h("fieldset", { key: '0962704cb297c665486a9651108b978f7abe0fb4' }, h("ir-input", { key: '5ca328c1aa99f6783ae5be12a9da47d095db56b8', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: localizedWords.entries.Lcz_EnterYourLastName })), h("fieldset", { key: '0adb0aa666c4bf43789f860560436e2c7079d313' }, h("ir-input", { key: 'fd99e58deac9b8c13b4dbf31c3b3086a6c13a417', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: 'a53be7d346ec77f1fbf2ae2faeb9833ca33428e8' }, h("ir-input", { key: 'df2bfe935740c122fe4414283987245deb440239', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: localizedWords.entries.Lcz_EnterYourPassword })), h("ir-button", { key: 'f5affdde30380a1811f81a8e2100a3a94eac724d', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: 'd9226aba9483aeeeb01ba4bbb6ab91ded28348c2', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: '1791101fc83814ae8f962904a48bfc626fb986b1', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '21381934814fbd052d07b3e8afcefaca317e5184', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '61390e976270253d7ba8c37e0d4599ba172bac26', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: 'd6973d49fcef9e540a8bde3451da20d0edf582c2', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: '7f102b1a5c9080e7b431c6ad5628d27e9af6a5b8', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: '0802f42b1d9e79dd3e3d8ee2448bf7dce3285fb4', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '632a742f4943b155098eadda87b0d40a2894bc2f', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'e8406c21c1db67cc16c5972442c3156fbb1e47d7', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: '292534b4e4713588dc5aed06079ef1940bdc04c8', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'b825a9a139a9d1b7e022601a028be97f95239c91', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '464263efb8fe12aeaff0af5f42fc72a744996497' }, h("clipPath", { key: '51dbc2d6e3d501c877026eb40720260b12af1c8d', id: "clip0_1256_132001" }, h("rect", { key: 'e596cfe4ff5f7ecdf5eed6fbe1104c0c35a44195', width: "24", height: "24", fill: "white" }))))), h("div", { key: 'b82ded2221730268cc75d9b70223a5ae54a0e1f2', class: "mt-4 flex items-center justify-center" }, h("p", { key: '76d7560b578e331841fc88878550b8d1f6257e7f', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: 'f7ee8065e293d4752bbb79d44266e0db90e375c2', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
