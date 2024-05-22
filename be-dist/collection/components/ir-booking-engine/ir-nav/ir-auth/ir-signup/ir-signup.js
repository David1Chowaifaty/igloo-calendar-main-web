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
        return (h(Host, { key: '45a51c69808e11c7c30624a9589c4e2fb366167e' }, h("h1", { key: '75d475de65a32050115b660fe212048c9e57aff3', class: "title mb-6" }, "Create an account"), h("form", { key: '1bb6a4542e4a0f61f5728fe8e6b19f03473cfa39', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: '44eca57f91ddbd2658bc863e762ed55d1ba78f35' }, h("ir-input", { key: 'eed6b5a0b9cbf00e74954bb2cfed1a4b1657defa', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: 'f80553d1fefe1bcf455310cf08cba12495516570' }, h("ir-input", { key: 'ab6e2be17160a038d23f845aa3d51fab1d3e15f5', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: '91f80809e6e546d257418901fdb9f8eb5cec3121' }, h("ir-input", { key: '5b3094e0e15f415440eebfab58258a65ed44de3d', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: '1cdee5da053370e2f7b149ef751fff25b53de707' }, h("ir-input", { key: '1c1bc551af8ad3161e8f370ab3a089f5b4d7c41a', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: '13dc6e4ea9c91a377259bc50a74e9085689e71a9', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: '381dee1c0c8df4849305b63adcb53ecdd9cc795c', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: '971bf4bfb048220d40100334959e0d8414904629', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '87abf025730dfac90b669a34bebb433044e6a88b', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '5c29cddc6afbeb41af19d904ebbe27e51f694e54', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: 'db661b81979e3cc2f5e54adc762b49c96cd9b66f', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: 'b1b5a44dace889ffbe32d6e1e35d9c186c160369', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: '38f04c038c938c41cd4ca5dad8dc9cca0ec2de76', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '4831950c52a031a76f1a8b919740f278a0c947a6', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '24571bfd2f36d5e3ce1fb32e8f5651e081ee888e', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: 'ea55615cca4415d59da674fad2736aa58e4e22d1', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: '769c895561dbd85c3aee80a80d73f05e42a41f14', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: 'd2a497fdea0ccac416286c54e564633fc1161986' }, h("clipPath", { key: 'efbf9036a79858cda73af4b0c4e9b6a3f66fa45e', id: "clip0_1256_132001" }, h("rect", { key: '4cdc8b09ecdb7c3860e23a8f155170a613949491', width: "24", height: "24", fill: "white" }))))), h("div", { key: '63bdf38786fd9ca59ea6438bde5dfda679ca205d', class: "mt-4 flex items-center justify-center" }, h("p", { key: '21e4a1eb48d3a4c5a168c39ff3353f3bad5b578c', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: 'b135632601754da9efed6e68ed958d5d247b0fb9', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
