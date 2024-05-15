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
        return (h(Host, { key: 'bc7368b9859f8e849a073e81ead83401862107c4' }, h("h1", { key: '9f8710c33c96764585b9db185ffd7caaab82e760', class: "title mb-6" }, "Create an account"), h("form", { key: '2180d416978d6285b9457777cd254c1a3f3deaaa', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: 'e6d1413840876d763cb0b1172d1fe7d9400cacd4' }, h("ir-input", { key: 'c729467fb65a83e23c0da0093bc67ac943a230ec', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: '4dbec6a9a74eb96437801fb5855e4507acb7b776' }, h("ir-input", { key: '535801e0e51a9427ebd175a7b084f905bc80c5fb', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: '10a223457f995ccc9ace72cfcd119328e92309fe' }, h("ir-input", { key: '9b0fe0e2fb400f964f98120cc76b5cdd343d8e09', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: '4a93c8fc574b17892dad847813ff27206f9863d3' }, h("ir-input", { key: '3e21acab5cbf35b6e274d3e0d9311071636d32a0', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: '817225381ba3255a1ed0c5c38ad28860aef63e7e', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: '66eff7c248b75f3403efe85bf45c58b83affd73c', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: '22c891a6c20c339ed1f1dec6a0b5aaaeaf60516f', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '2922b5fb9c90079e3126ef6327133cea55d7d3fa', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: 'd4c23e02d297ca20bdd3709769709cb0eea1034a', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: 'f086a9bfa13a50ddd89daa1a4380ab0a8e6e9074', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: '63fddc05513fa88237729b2bdc364452869288cf', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: '7f62c57465fd6bf45bf844f7861487c6e5704bc1', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '569bc942953773b064de4d8080918c5dca24c32e', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '60a5324da561f81f2997fc98c205b929bf1f4410', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: 'c168f646fd98e6bb0fdd69305239c7000c0d09e2', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: '9779ffef62ba4247827365a489337bad966e8be7', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '0625ebda3d3323fee8bb4a815016610fc4c8b016' }, h("clipPath", { key: 'a3e90a5f8d932d3720b9e9b2d795f3675973a47c', id: "clip0_1256_132001" }, h("rect", { key: '8b6c56150edf701bf8b7139b48deb0a9ec12000b', width: "24", height: "24", fill: "white" }))))), h("div", { key: '00a30adf5f76b458194ffa651e44065fd85c9afc', class: "mt-4 flex items-center justify-center" }, h("p", { key: '82c689347c8956f50b902c62a8653285c654ff52', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: '44608417d3c774e5d74980da2cc92a55909fef8e', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
