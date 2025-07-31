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
        return (h(Host, { key: 'f265987fe2305e942cfffaec94fce16a28a214b6' }, h("h1", { key: 'b13eb494f896e29be961a9715448cbc97594fc42', class: "title mb-6" }, "Create an account"), h("form", { key: '84fac973f581e9c217124c4b2ed942f6387480dd', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: 'ee0f9f5e62676f6dc99b010904b0a411b1fb1bb2' }, h("ir-input", { key: '250ab0cb0300d8c344d0f760766f6d47d420305a', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: localizedWords.entries.Lcz_EnterYourFirstName })), h("fieldset", { key: '23c450bc17f64d4a10c295aa1ecdebee6feaec97' }, h("ir-input", { key: '0caacec07aa61909ae5f7a353ea588bf00bc3c9c', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: localizedWords.entries.Lcz_EnterYourLastName })), h("fieldset", { key: 'fea47f7cb0226b857322e0bfbf6e1279feeba81f' }, h("ir-input", { key: '0c05f44ae602daee9f49d25e3eafa7e63ead303e', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: '818f04384b93c512e9fdec704be59c5b59357691' }, h("ir-input", { key: 'b06b781a7d84ed7509ab57f4e14834c2d9f62aa0', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: localizedWords.entries.Lcz_EnterYourPassword })), h("ir-button", { key: 'cc8698d4270031c3cd0b3ace1b12d16ac6f61cd1', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: '85978b1cb4768ea37836d57249f0921423552625', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: '7d321b65c095325d991687a8649563761d3cb42d', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: 'ff13ba33a719bce80ab69d38182b95ff2e39bf32', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '49cd918fe3662eb1e91f776677e59d9f6009967a', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: '9cdbf0526813afdbfe30f8770766043fcc77a7bd', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: '6b6ae248d1dea4d6981b9ff9b3d56c3842221dd4', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: '52317490103a2b4e5720947dce43f717de95db63', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '6d37f38d159b08e22deb25656858990f5aec20b5', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '185b6a22442522f680bcc4150aa1892fc52a4309', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: '6af154ce89ba59b83b1edbc3b18b47c367454114', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: '9101444428a897353fcd0572cf69ed1074254440', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: 'd71a8cd3a6cc6cb92f79bf88bbaea2c62ddc369f' }, h("clipPath", { key: 'de8e36257a952c20e79bd0480b6604442994a9b2', id: "clip0_1256_132001" }, h("rect", { key: '465d8806e0a83fa62addc4a8d0c4952b5a23d2e7', width: "24", height: "24", fill: "white" }))))), h("div", { key: '33d9f3d8a16b24d21cc2f39efa1a963acea087f2', class: "mt-4 flex items-center justify-center" }, h("p", { key: 'da3f391ef8cb00a099eb18e91af55ac17e28f566', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: '581706cb3a6d36ba15f82814ca1f159493666e2a', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
