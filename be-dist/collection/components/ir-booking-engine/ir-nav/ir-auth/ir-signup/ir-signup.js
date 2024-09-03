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
        return (h(Host, { key: 'c6695d7ee8c73fbcabd6d1eb93a4759b97ab15f6' }, h("h1", { key: '8b3b94c01abee2438577fb078c21fe2167ab5e18', class: "title mb-6" }, "Create an account"), h("form", { key: 'c3f3adb56864252c64b12223f3752dafbfb9118c', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: 'd4ca77faf427be734ffe7a515f325cd4a437f237' }, h("ir-input", { key: '22437c9ff9f8c5edddef8ed4ff1b8e68c2bd2a79', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: localizedWords.entries.Lcz_EnterYourFirstName })), h("fieldset", { key: '84c8824972caf5c73bb4e39013c6d4dffcb13b52' }, h("ir-input", { key: 'df9f3ab33a1f5173dd45bcf96d5f52c706309da8', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: localizedWords.entries.Lcz_EnterYourLastName })), h("fieldset", { key: '4cb464491e32284884b7dd6d838f0be52fad0485' }, h("ir-input", { key: 'c08a5fd10a6035087fa7aea9a06474dd5c1373b5', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: 'f5763632c6e140783d40eb24a215e27edc2657d2' }, h("ir-input", { key: '5cbe5524a1d037500ed9bb888c8178969a7836ba', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: localizedWords.entries.Lcz_EnterYourPassword })), h("ir-button", { key: '8d2cada2541fd144fbc2437f86d02a58d5bd8da3', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: '214e26752e3486243c2c0100c3806125d0768d4b', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: '5c48950909824bbb955a7f954d3287b0891936f4', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '37e2d42e329e416aa2a002e27b88985c1bc8dfc1', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '5775a8e2d14fc67fa8b17693a0af8b8455ebeacf', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: 'ea7461061aa1ed0f870973d67259f8c8f9d3c42a', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: '3abb905f6dd13a83daf8c2a2dff9e990c10c6007', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: 'ccb21acf3c6ada8dc0e148f3c369db74bd7730c9', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '1a690b4ba7bd0529dbb2bb4676a064d90d7a4499', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '02f8be2872b9f4e8d9e2bf2cfa04680ccd6b0a87', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: '754ec5c2a6a5936384358b57be769230e12b978e', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: '3945f680bbd88374ffa6c465aeb42e2124887504', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '0b72220a953e53439e24fc38212b78bcbc7231a8' }, h("clipPath", { key: 'c178f0665f199ef922e7509194f4db4296048927', id: "clip0_1256_132001" }, h("rect", { key: '9e4c22eea40284c41c232089a6be36b7107cd3ed', width: "24", height: "24", fill: "white" }))))), h("div", { key: '24abc331bec05255f8c93246589fbeef432c5086', class: "mt-4 flex items-center justify-center" }, h("p", { key: '95719300527d2309453dfbd0f68a8b5d46fb3514', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: 'ade9ce567a701a091b5ebdc68e9ed9d0da078341', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
