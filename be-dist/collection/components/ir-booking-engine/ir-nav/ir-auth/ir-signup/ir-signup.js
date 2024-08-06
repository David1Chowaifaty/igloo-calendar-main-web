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
        return (h(Host, { key: '4765e3ceefc7ad0e603cfc727b568376cfabd146' }, h("h1", { key: '75b72a4c19b258be2e1eb5354b33d90c7bb929f7', class: "title mb-6" }, "Create an account"), h("form", { key: '381e0cd5e7e5cd47eb8c16c3411c1afe8018f6ef', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: '5c3f2299c374d21ac56052262e077ce424a5a6b9' }, h("ir-input", { key: 'ee02d0c00afabd47fc2a6bcb6405f0037fe7b635', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: '9e326cb08d46a844e953551c0327a87f6c6cbcc0' }, h("ir-input", { key: '20743df1fa5b1bf605e1eba162ff18901637028b', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: '4cda41d038d9d255045dc2d38509955eaeb47115' }, h("ir-input", { key: '782e15ba6cad475430bda3644be114de919e5d19', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: 'b0a21619fab3bd86faff2ca4ce1921095cef898c' }, h("ir-input", { key: 'd2d9fcc9425bc404d01a2fc389965ecfd960ef51', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: '104a549692bb1e8177e2d7eac871ceff77c147a7', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: '7441e80f60e3b4fc4368bdb082487099e7d23519', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: '88296e795fc91444978fa9ba82769ae7b6d37aba', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: 'aea915cedc896decfe3de5e9d017686a90c765dd', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '827fc8de44aa560a7fa9bd8f4527f7465cf6ce5e', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: '6541655956cb1fb0ff8ee1ffe3ed945fcd82af9b', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: '3c95b8f6588455a6483e3a0339ad6df08a7cac06', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: 'f71495aa33345b8d5ce067a73176d215f438fe82', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '580640391caf5ac7ae3608859182ef86edac184d', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'f93751021266ee8214bcba7ca0209ebcc1bb70eb', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: '16ec45ecc44bb8db8831607641b1491c0beeb4b1', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'b1633b8b8dee05562dc591cae2dd952d3eeb943b', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '3156774728585df6b403f041797aa277e98bd0a2' }, h("clipPath", { key: '5c0a80d7ed1530232415be902c75548ca8c72c33', id: "clip0_1256_132001" }, h("rect", { key: '0458093594fdfd3ae5030c6e12f35bba2245d5f8', width: "24", height: "24", fill: "white" }))))), h("div", { key: '4e8f2ad647c387fc2e89ba467e8925ad99f3791d', class: "mt-4 flex items-center justify-center" }, h("p", { key: '98959a02c9ac98c6b0e775aae01abf8df6c6d9e0', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: '2d8e167c59dff54e24307877cc6319f0b27c28b8', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
