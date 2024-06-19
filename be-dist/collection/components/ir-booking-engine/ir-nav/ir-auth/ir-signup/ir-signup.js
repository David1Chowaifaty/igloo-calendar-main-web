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
        return (h(Host, { key: '421179c0c93c0696b130c973acb94ff837bcbd8a' }, h("h1", { key: '4e304c2f20cf2531ad50716226e3d2dc13356d17', class: "title mb-6" }, "Create an account"), h("form", { key: 'f3ec672fa3682c4f9467f4fa8be747cc1818f802', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: '3d7c1c9ddf5e2a49de49ce0cabd8d41df49a0c28' }, h("ir-input", { key: '09c9f0ab6d106a01625ad0c646cfb0fa7c1679d8', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: '5e9d7db210e94df636c48b073a16d57f8ad4d4a8' }, h("ir-input", { key: 'b5e5b0aa4726556046fdde55b6c8791a9bd47aa3', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: 'f31fae86ba621451b0b9b20d7b1787ae3184127c' }, h("ir-input", { key: '19a6f04eb53c826f86ed3778e32ae85d8ae1609b', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: '0c343fdb5324f60e971ef71901beab6819247594' }, h("ir-input", { key: '8b9a15e2ab551b642c76b1447efb7ea94d6d3ceb', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: 'dc69d2584f5d3201b1dd800225611f7cae52dd93', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: '1d17a25dc3b7f68e6697ed43a84a2fd4c9fce84b', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: 'c31cfc5e759cc7313c3ce31fcfe4c6e608fc0393', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '3b2d2409393a79a986c48918927bcc87e402919e', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '19c51dc3595152391fd543e68425586c9995a664', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: 'ca41b637f82207e665d50841b3594fb08dd8ad2c', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: '25d2027448b886c6250107db9ff46515cacd7417', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: '44def655e56d427839d07b083f12ac3aacb93da0', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: 'a34578c0c80c2aae0490204fda6b1f2904600adb', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '67658d4ebdd4256f2d7cd71747a54a2a5062bd6b', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: 'feb14b3b4bd46f05d9014d6151f102e953ef0643', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'ee454cde20e76adc30e7e8cfb656396ecdc18d06', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '2db6d830090f36d4a7106038b14a4f9be6e7c315' }, h("clipPath", { key: '1a6c85f6019ab94d73931e0eb441b783ed630e3a', id: "clip0_1256_132001" }, h("rect", { key: 'e8986286c8aae55a78c8782763ea9cc624b6ad42', width: "24", height: "24", fill: "white" }))))), h("div", { key: '7f600ba27040c04dfed4f3d53f34b4aaa071ab48', class: "mt-4 flex items-center justify-center" }, h("p", { key: 'a70ebe281ea6586ab6bd918e48c5327f3251b732', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: 'a4f8b0cf42c24eda2e23a9b2e81511cd3475e807', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
