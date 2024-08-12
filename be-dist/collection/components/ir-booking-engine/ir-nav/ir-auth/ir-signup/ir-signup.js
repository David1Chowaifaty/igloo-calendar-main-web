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
        return (h(Host, { key: '891b6e5ff04d52d48289d375fb0b32afc3d53598' }, h("h1", { key: '3af5047c15b8a64adc0f5fd8aded38a33a3eaf31', class: "title mb-6" }, "Create an account"), h("form", { key: '3aec57ed9b55f5af4088e9ed3c67af61d5c6468b', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: 'f8a2c0a704883b246f4d16798b849bb23362c6bc' }, h("ir-input", { key: '42da63542e8be3caea0bfd909385dca394b351d2', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: '76990ca73a861d807f07e268879d40ec6029c37f' }, h("ir-input", { key: '381800f694990f176e90225015129a407f5c4fbc', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: 'a98d8dfb5dd1854d960847aa9d40c525562f5743' }, h("ir-input", { key: '5cd3df07c1eb0b3d66844fc7f2e8da19a5eed096', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: '0254ef96334d032f1fcd0750713eadbe6a90aff7' }, h("ir-input", { key: '144906327ecee4b57dbefd957e30f44e972c09a2', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: '31973dc3d910056e476f7fd6b56500e1b1d9a416', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: '3e917dc0b970468e66407783977bb04d37119d16', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: '016d299dae853edf1f9356be97e62ea885d4b6c7', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '7c160299379e2105e2577c27bed72ffc21ad533f', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: 'b493e75e42161802a6c72f345a9b9a7fa693e58a', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: '671e09c4971ac9a58b89d39e43c5e7ccb19523b7', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: 'fdc29217c8e48511897a294f9d28103f7166a812', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: 'a5dc43edbfd42bd62c87baf36f245da27e36ed32', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: 'fba467acc886dc57d340a2f2a3715e3b7b29030d', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'fa77186036c592802f58760e483b68b137c70160', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: '71f96b56f7eb6cf8b73616b31429c7df4e10981c', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'c77e2ebf32e74a3000207f460777dd082d33d873', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '2ea3ee36a729205ea61ca3405633abf3656c5dc2' }, h("clipPath", { key: '8cf7478f4bc4e634623c01b5d089d20714095e60', id: "clip0_1256_132001" }, h("rect", { key: 'b0cad02fa288ae7cdced2c0e4cf67a87fd7c569a', width: "24", height: "24", fill: "white" }))))), h("div", { key: '1693be667e823e001f7d24b08d1343799d220e11', class: "mt-4 flex items-center justify-center" }, h("p", { key: 'eef8d3bb8e1231ab90b70e91fbfd517a787725a7', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: '752d908bb2510a5a33a000fe0d3e2dd92ba8a823', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
