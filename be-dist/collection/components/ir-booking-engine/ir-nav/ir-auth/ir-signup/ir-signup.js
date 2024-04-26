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
        return (h(Host, { key: '974ca160a211b72ea0f3c8b20940ddc1101881c4' }, h("h1", { key: '11d54b1d27b9a9333a335b8594a7fecb1d1bb772', class: "title mb-6" }, "Create an account"), h("form", { key: 'c7abe7d2c567d7ba6d207f89ce2a5df33696b6f9', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: '0f34d745c910fc38e04f652c9b3ac8cc495d15eb' }, h("ir-input", { key: '96da24336a3c74bc85774a871509bea732071579', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: '64085c975af127d4e7336dcdef12301dc0a52134' }, h("ir-input", { key: '79386963337ecdc6c1cd31d50c29ea915be2a605', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: 'dd42695bd3be5cdd29e8434fe3e1f33f464ee2ce' }, h("ir-input", { key: '019eebe396d234d06e9e3d99d283c94dbb204ab2', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: '70196183e1ef7bbc9d564eb23e13d0d9d4ddd060' }, h("ir-input", { key: '684785848bb4a5a88e763f26284823365f9a9954', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: 'b95c91ea948a0e2085166b0c13697f9f98ff4ad5', type: "submit", class: "w-full mt-4", label: "Sign up", size: "md" })), h("div", { key: 'b1520524168e60404e5a28fa09924d6faee7471d', class: "flex items-center justify-center gap-4 mb-4" }, h("div", { key: 'c992ec371b7d0bad7cd23b96efed1789b772371b', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '1c1ac16bac26734881161f89b88260181153d1cf', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '6054810db0ebd97bfbfab77a2bf5f8a3b8f86dba', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: '7e928a4040f09f67e64c912951d25ec566f47624', class: "w-full mb-2.5", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: '4500d4b1412d28e61b48a51a27c49409e2c3f419', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: '2224835b06b1d9b66ac2f0ddcb8fe25e04cdcbee', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: 'dc06aa93664d13a9b0700c2987cb24c9d1b73ac4', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'b8db987543802eb682b959b8845ccb3308600241', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: '3bc7944adf890dc1b36744939d51b6cde2c4215f', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'd7cbf83fde48aba112bdddb65aec6bacbfe73c4f', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: 'e5ff5e85fe326818737db6be628bc6d73083d05b' }, h("clipPath", { key: '5255b36f8afcb9592ee670af5969f90a77aa1979', id: "clip0_1256_132001" }, h("rect", { key: '9d7194d84677f8dcd6956e64594a9aa174e6415e', width: "24", height: "24", fill: "white" }))))), h("div", { key: 'ff7b79cad515da28b342fccdd46c69e46de03399', class: "flex items-center justify-center mt-4" }, h("p", { key: 'd599b039cfb58c991435112780782dbae1dc2412', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: '6ecf56cf50f28faa899d91b1ed0c85f900a2653b', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
