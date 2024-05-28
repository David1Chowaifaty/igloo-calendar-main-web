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
        return (h(Host, { key: '56f0add494a146c474f8843fb053b0cc3a1b3f46' }, h("h1", { key: '507b3a79fc9c4366c0d57bb799f8f49deecc4bcc', class: "title mb-6" }, "Create an account"), h("form", { key: 'a5372c80815152a91ebae7eb4093ac76cfd7d30f', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: '8f33c8091c0e51eaf905ae925cf5d64dcad2213b' }, h("ir-input", { key: 'cad7abca36ada3c80127843de530fd534c00d5b1', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: '542c3c9edaeccb0d1357aa0bd4bc2604cdc48d3e' }, h("ir-input", { key: 'b59b3f1d049a5056d2f61048e6e42d84b3903279', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: '56d37f65a5c48fe57995824c1401d7a4c45b9f13' }, h("ir-input", { key: '50ca7f91dcb619f801f2915c3016c1142db95e01', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: '98ad3cbc1b335e6b8c41b6a4158d8b5030d9ea87' }, h("ir-input", { key: '41025f3157adf0913451940c729a6678a5c83119', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: 'fa0f8ab4a11984458ec029e4a128248e69d4a132', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: 'b49fc2e88965cb504ed687f6a67c6c2f3a1c3eaa', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: 'fcd2a7b1d36c85fcc2b6571c2421fcee95bdfa96', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '511b214891090864e32186c25bab1736a41154aa', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: 'e737d370c052daa5b67f2d6bcc31637f4696e818', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: 'f3e7eb80372f73b80f69cf530136d178a07ff964', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: '5404b9e6b947d53a6e2f557a539003ab2adcac47', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: '10d841599c780ee784f066b4d2b456dfb4d7df22', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '0f44672ebf3a939adbcbbf179ec26025fabdf014', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '0a9e403e3b2a114aa3bb6445a91b2d954af26de3', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: '954c5277915d3339502c4422801c5dfc686b7db1', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: '85a9d0ea3ddf8253f70578e8f7712fb82817d149', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '1f442893236f690ce23de86fb460e07a127c01e9' }, h("clipPath", { key: '72c00dfbbdbc2cfd6378a246b0a16618ffb45b4c', id: "clip0_1256_132001" }, h("rect", { key: '558714fba81296b45e5bf7ba33fd3c7cb460c240', width: "24", height: "24", fill: "white" }))))), h("div", { key: 'd8c46a4fd4abdc2b9fa6c5ae8902de8be1cd6487', class: "mt-4 flex items-center justify-center" }, h("p", { key: 'fed12afb3e5e1ab899a150cb3f5b493478ed64cc', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: '999cd14d05b0e186d8e1a1bdf082d988c258ebc0', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
