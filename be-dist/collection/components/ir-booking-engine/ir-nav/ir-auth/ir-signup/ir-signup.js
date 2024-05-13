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
        return (h(Host, { key: '1b027f85c7e1b24ce43f15cde78e3245d4b08023' }, h("h1", { key: 'f78ce61cd114ca2132a6d63156996125909b9628', class: "title mb-6" }, "Create an account"), h("form", { key: '6a725bc780e248d2b5c30a0aa48aec88bf0d2b9c', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: '295d978e7c6d42e4b84900162ad1808ea98afdbd' }, h("ir-input", { key: 'b8096e4654579a5fa4c7153beeadca521893d92f', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: 'ec1953483fdb82c3c453ca2782c4f27a98b8334f' }, h("ir-input", { key: '9adeb3e7566c4b1b3b66814e351095813527de8a', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: '3ea02c3411876f0aea2ff6983a37771d86700ed5' }, h("ir-input", { key: '1a10ff0afd6c78f92b309e66cad2bef92cc1d07b', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: '3a1cf7868de2a6528135f6d75668577d4eb3cc41' }, h("ir-input", { key: '7d137b8635fd292568bdfb8dcb2aa97f28497461', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: 'ba3cd016c70b29eed3379ba748efc87efe043f35', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: '7c84c470e0cf571eb611d8a7179bd1573b003201', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: '69d020bfa7f5620ad22030d2e756a37cfbfc00b7', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '6d55836839ae0a8a28f34f730d302ae1677739a6', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '5cf7d28b7cf61f8321e8dd650b657c65d052ffb1', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: 'f78ce0e0e0ad91538e744b4f7972f2ff81a353b5', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: '3a13c4d90ec8925d1f50993f10ff40efcbc0319e', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: 'f581d3766153bea76204ba61f95445bce8fe9a89', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '9c64a5ec572752bd3c179b0dc592cf9b39c89d67', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '4a763d4c5dd6dedf1a526be356a1c8161bfac204', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: '68645b5cfca448e2a14c732df45c47cfacf15e3d', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'e75bcc617e70d43dc1e6d389f1de9d3677ba8ff2', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: 'c840b762f6fec9a25206474c97b1708472658994' }, h("clipPath", { key: 'e79e4c6836ccfdf9c2ff6e6d4b074eeccd80884b', id: "clip0_1256_132001" }, h("rect", { key: 'cf3e87fa87897f80b0c264a273d283a3e9eb6ccd', width: "24", height: "24", fill: "white" }))))), h("div", { key: '6da59a7347466625789b742451543f542f076fd2', class: "mt-4 flex items-center justify-center" }, h("p", { key: '3757e5b29b29938701435b59be681af73d1a7865', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: 'b167851aeb8e0d423f1f6535cd9229d915376296', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
