import { Host, h } from "@stencil/core";
import { SignUpValidtor } from "../../validators/auth.validator";
import { ZodError } from "zod";
import IntegrationIcons from "../../assets/integration_icons";
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
        return (h(Host, { key: '6bc39ff21f32576a52f53212042cb94ec8004e03' }, h("h1", { key: '935c5e18f588ece355948bc06ea6d33f0f25a901', class: "title mb-6" }, "Create an account"), h("form", { key: '75135f46275614335206841b3c9eb7b8408f7924', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: '619f880272a4a709e8b81e87875a0d9fa07924f1' }, h("ir-input", { key: 'c2e18bb9162d39255793a31481f3aa2bf9993167', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: '69748d70e6980486d77fd16488471b0ade3ee4c6' }, h("ir-input", { key: 'ba5e6e5be4cc484867c92f235f57b920f30a129e', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: '69c5ac3ca95cf3ffbe6699fffceab3863f18d888' }, h("ir-input", { key: '14545fcb427caf7e198c012e36c64cad8324f5b7', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: 'a35053f16d1f7026d3d79717120f000690e23701' }, h("ir-input", { key: '64f77c1e8f2e7a419343f36ef77b3c224e0c97db', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: 'aef9da15644e0f81dc8b25c8db2323c3f12b65f3', type: "submit", class: "w-full mt-4", label: "Sign up", size: "md" })), h("div", { key: '1045b54c2f66efb1557fd92dd889c661ba56e915', class: "flex items-center justify-center gap-4 mb-4" }, h("div", { key: '008340c94c773422447fb5bc5e217af6de5400bb', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: 'a4be2562ad06a960cac14ea7b85f143d6bf6a904', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '8400ea135198ea69c951fd993640c7da3a7bd230', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: '98dd0dc9c6ec6974eac26a0f4816712e58a4b214', class: "w-full mb-2.5", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Sign up with Google", haveLeftIcon: true }, h("span", { key: 'bd67c1ecd4f73ace8fb854dca5116e73334a5d50', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: 'fb76d8bde67cc67b0bfcd093ec117072ddaf614f', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Sign up with Facebook", haveLeftIcon: true }, h("svg", { key: '36fd7f8f0d23531e296ff2cef1f349b412e9b60c', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'df8296bb16636c20e423f2612cfe3b87a35db3da', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: 'ad9ea31f89df4770cd1efd11d7f3b860b677ee6a', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: '40e00654a0fd4a3bec509835266364476ebc8af5', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: 'fe7ef19cc031b77e7b486e3a637f03dbbb5d52d9' }, h("clipPath", { key: 'ab2bfd477d497abb149b47dfb779013f2ba085d6', id: "clip0_1256_132001" }, h("rect", { key: 'e246a1af70c87d6e601c5c3a428eec4fd6dd1fb2', width: "24", height: "24", fill: "white" }))))), h("div", { key: '1ecdc30272c9f010a778a45c5b722027a9be38f7', class: "flex items-center justify-center mt-4" }, h("p", { key: '35fa781bf9dfeccbee019efc546bab54dedd80c9', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: '2951dd13a29518f2ce9bb3240c49bc8f59629ee4', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
                            "path": "../ir-auth/auth.types",
                            "id": "src/components/ir-auth/auth.types.ts::TAuthNavigation"
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
