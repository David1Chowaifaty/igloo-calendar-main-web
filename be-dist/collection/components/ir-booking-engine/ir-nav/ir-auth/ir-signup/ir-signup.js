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
        return (h(Host, { key: '07d73186f995bb994713581281ea67c92164ab3b' }, h("h1", { key: '9c6b63b32d7c9659385935491ef14ec6dd3e1fae', class: "title mb-6" }, "Create an account"), h("form", { key: 'cc562c956c29a08657f58c96ce8ef8347c2e5b48', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: '82c2a54f8a12130a97002701dabe636841f8ced3' }, h("ir-input", { key: 'cde574d7d28450fa20aebf5a7e897213f902a90d', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: localizedWords.entries.Lcz_EnterYourFirstName })), h("fieldset", { key: 'b34a241b347be9554ff0b8804bfae3a8ecdf97ce' }, h("ir-input", { key: '01948c8a8050fc3b4f3591dacd22ad886d28c8a6', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: localizedWords.entries.Lcz_EnterYourLastName })), h("fieldset", { key: '96e49a83e03b6dff042e84156a7a6c5614e8c20a' }, h("ir-input", { key: '74ed6767202ba1126b3f23bdea0fd3b2fce26229', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: '2656c934db7f0e3374be23cc8752d3f4188b42f2' }, h("ir-input", { key: 'f8777d585d1d69b70cd77c31691fe9da2cd5c506', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: localizedWords.entries.Lcz_EnterYourPassword })), h("ir-button", { key: '2a8b5a44544bc91a8a3854dba758d63477f2a01f', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: '49d6f1b508b42652ef426545e95274e68b22a3ac', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: 'fccdedf692fbc37dbafe6bd325d9c093f234c0f5', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: 'b62f1a1cee497c7cfa679226007ecb71147c296f', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '82b9e802f27629e2d410e68d14c7711be017f82a', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: 'c841db35949ef9ea04615930759d29abc94ceeda', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: '16990a1384e39b3a6bb2f3e3af2a14af2ae1e502', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: '60f7c8ba2d09a97927fd08aede98baf079989889', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '45c84469d130333d6a83405c5dfa52d200f9b9f6', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'b0dc7a5edc43442b1fe4e2e6a2532138c7d2819d', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: '477e73789b8f7631f28996095c06c18e99c8d9d9', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'ac60b0daf601c050eb8725269a37f531b94b428a', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: 'c3e6edc56bab72ceaf257910a2e0c6a9358016fd' }, h("clipPath", { key: 'c0876a3cae19be601b6b4854a2c440fc7889557a', id: "clip0_1256_132001" }, h("rect", { key: 'b0d7bed99e9b8458d4ece18b2f7f1872cc711c9e', width: "24", height: "24", fill: "white" }))))), h("div", { key: '1cfe822873b06678cb140e16fdcda8abdfe00535', class: "mt-4 flex items-center justify-center" }, h("p", { key: '0fc4c4d4758d3d5a02a8ce9bbbaf1ff2bb3e779f', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: '1724533bb05401751d5fb54d6a00d91ad3d8861b', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
