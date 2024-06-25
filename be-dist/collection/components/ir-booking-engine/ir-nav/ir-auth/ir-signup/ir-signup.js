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
        return (h(Host, { key: 'dac1e4fd05b6132e4c1820d28e97af885941aee2' }, h("h1", { key: 'c116361cc7d57cf1e26c97cc2e2216a7f0e17a5a', class: "title mb-6" }, "Create an account"), h("form", { key: '0b03d762a437b1bb9c4ea25cbb4beeb98961920a', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: 'd11aaca4319ab00f171c3d959681bc44ca1b6fc0' }, h("ir-input", { key: 'b11aea69cebb89cfde2ac6300beb42bd2668b07e', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: 'ad464f156ca0721bf854f23043da148ed90bb12f' }, h("ir-input", { key: '2da23ca27d505010663e51e969ea459e58e9dfd8', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: '2a8edda8b362df58ceb67cc8fc17b04effa82ba3' }, h("ir-input", { key: '6fd331bc35fcb1e3b8d2abe69dc192cffb842b2e', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: '7566162543ee3b307d8d26093649007e8cef1ba5' }, h("ir-input", { key: '87514a9e6760b2aba4ec925d484b8ce5508ff88c', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: '782417b8e8ad0176478a032154d258b65c7c3eb0', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: '5735a83079662caa7d68e800b8288fea77c47dda', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: 'adb742a401653891fdd1884094dde4c2fd690c9e', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: 'd08795fbc666e6dc900403c38e121463b4d95f55', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '54c8ac1e5598bdd4b6747b74f3bcf63c94745711', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: '6e3081ef0e9ca3490713d10ef3914cae1aed9f74', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: '93ec49209e54ee760aa0baa3d4b236dd6325fccc', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: '5af3d7397cd4d55f8cbf62adc587fa70f103901b', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '5c1f7baedbc39c4b762a0b2eb06b3ab3f35783d8', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '4f4e10c73b730f52bbd26f08fcc6bd38fb2d88da', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: '4b137195950df5bd8a05bfa80d797494e1c3286b', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'edffd3441adc1557b32fe28c7de9ebf183e28943', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '8e8ae388738fe80ec5237d5ffbf01e14e1d67956' }, h("clipPath", { key: 'bbd0682e921f72c99e396c7c174c46d0b3e3c5e1', id: "clip0_1256_132001" }, h("rect", { key: 'c55d8bbb4ec04cc67b1b7893cfedef1321d4d554', width: "24", height: "24", fill: "white" }))))), h("div", { key: '8fe99df62c75248f0f49de8a694c01fc8aeb3cc3', class: "mt-4 flex items-center justify-center" }, h("p", { key: '2bcdbb2e52290140654fc0300abd299cbf288b7d', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: '5aede9c49a302bbd3d8139d3dff6c60293a9a942', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
