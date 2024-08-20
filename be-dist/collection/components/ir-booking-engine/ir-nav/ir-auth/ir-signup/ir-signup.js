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
        return (h(Host, { key: '00f71131d7dd9c98472a1f76fee1a1ce2d65125a' }, h("h1", { key: 'ad0fa3211d790a3089b4cc39598b3987bc1895a1', class: "title mb-6" }, "Create an account"), h("form", { key: '6e619b0a54b3cacd290cc868df54dd82c97dbb96', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: '2097adc164f75a60e0ed35204b1a3d383cab0e88' }, h("ir-input", { key: '1b8502115002be7e0dd6db2270c196df61d1bd43', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: '9fa3a34d7bf973b31c9b42ccc3f9df90522c7575' }, h("ir-input", { key: 'b24c83adb0cbee0fe878dfeedd03ce8658f51f27', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: '6a756b0aecc9229b82b68da0f04ffc17cd0a9986' }, h("ir-input", { key: 'd09cdd01086603a4cabb83c898542c7602e78da7', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: '385ed7baacd47ee973268779b6e8ba8bf5f70c91' }, h("ir-input", { key: 'b7f589cda029f470840575e3cf3c03e472c3e979', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: 'f1da16cc138eb1a2f1113f6a1a8380bd3977498a', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: '3986b6bf6cba51ab7f61ab0b9289227be975c746', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: 'a2992ecfbb0a122c838580eac6694bd346638b82', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: 'b19b0a1b3b21300267b1a19cfc4905f6b10a144f', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '108b5386e3555ed895be6ab17bc7b006cba1b4dd', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: '2759518e17de89bf7a292a4b760403a828e00d07', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: 'c25fb607427bc006cfaa36653b101534fe6c1532', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: '9ca9ec418d17b057eaceb13be5d48c72756bb932', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '4876b3e7c6a7762d7a2308263ac6430f605c3e9a', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'c02a04bd805b901f4315b509304802ecc0524fe9', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: 'f95596be13c5c83fe109609567161658c68df14f', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: '50d46648aa94e4c65e330791ce53d06f73b263b3', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: 'bc95e37c1283274cfcc3d922084d471a5d6c1ef2' }, h("clipPath", { key: 'e26f74f65852b25a758a05ebed50827558be1f50', id: "clip0_1256_132001" }, h("rect", { key: 'ce257dc41f921533afab18affe4d7648430caf48', width: "24", height: "24", fill: "white" }))))), h("div", { key: 'a06b8ac54b117b3b35a08a6c1ce458ff88e95b9f', class: "mt-4 flex items-center justify-center" }, h("p", { key: 'a00516d8868a15186521a7903fe90230f58d8d20', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: 'd8753aa8abe6919a3368a8d7a802a55a5b7ee044', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
