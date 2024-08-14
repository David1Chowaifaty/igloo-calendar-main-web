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
        return (h(Host, { key: '9ecb0da5c04f0b5221a3c0695ac720239509bce1' }, h("h1", { key: '5b759256560bd317eecf74266febc44367800522', class: "title mb-6" }, "Create an account"), h("form", { key: '4b9499a6454e2919ce6f1e31f0199bc249dca9cd', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: 'af34f384f2ee7e037b6a9492ffd4e557abb2e5b7' }, h("ir-input", { key: '0759e8138161ea94e9ee1dc3b82d72e7d7efeb4d', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: '4a9d1b71b16e501e92e50327098b1a95c54072bc' }, h("ir-input", { key: 'fbd1cbcb536d8c1632fef37762dadd9c3ca92fc7', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: '4d9205466741613357308f3ab244894547c9b242' }, h("ir-input", { key: '780391b245fb5848cb3a08a81cb5fb375d4a3df0', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: 'c620bb97f160ba000db84d9429b966421b3215e7' }, h("ir-input", { key: '9743433dcc50adae6926e054732760a1d82a61e9', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: '7c9322fadf3879efbe6f6c1c6b10629fbefaedba', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: '26ff9f64220fb17e6521c2237c9a6a4372bd6c12', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: 'a4cbbd7e314ec9ec61ced42395a90e6384152a63', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: 'a4a41f53acb37cc1ee4044d8686aeca85adbc535', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: 'b6cd85cf75e5c11406f591981d4b0360f2b6625b', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: 'fff88f6c95680dcdf7c99aeabffd9037121e8c9d', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: '575d11df3c90b4cc999a67c8e7d9163da71c989f', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: '63ef704472a092d34d02053fc9d74288ba01ce5f', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '47411a1354589a80b132da192277ac16fe6b061b', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'f40548092dad2f323db09d9e5fe1c3892f9331d3', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: '6a3956ab0922c42ed0c71c6283ae328c0a18187a', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: '33aa0cb6e86f69344e15afc3a10d3629fc64c851', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: 'c8c1be6c3d9278441cf1491d2bf7b792da0a0945' }, h("clipPath", { key: '1e16fa01724983b29d829181ab19f563d32f250e', id: "clip0_1256_132001" }, h("rect", { key: '85bbddbecb2d6150b14f6c43162d08f02a4ab2eb', width: "24", height: "24", fill: "white" }))))), h("div", { key: '428644745c7fd83bfe8b885dc0ecbce1b7758cd1', class: "mt-4 flex items-center justify-center" }, h("p", { key: 'bb00b68099c96515eb19a964e686feaced50660b', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: '2d9ad6394fb5e5e26166f92c140b8a85b3d4f7be', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
