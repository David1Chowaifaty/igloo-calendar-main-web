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
        return (h(Host, { key: 'f597c00681c888fcddf12449ba380bc03fedd2b9' }, h("h1", { key: 'c7f1c4447f937c91079a3322bb3d92891651b861', class: "title mb-6" }, "Create an account"), h("form", { key: '1210fb62c3dc6fe40a9ab031913a64cda084e56f', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: '360a85a883c81f15ddef1109af8d883497300610' }, h("ir-input", { key: '12296af769714a62109ff42c001edbf35ab5e3b4', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: 'c9fb7b4c04c24ffaaf0b80b2fb13e854c097eb9b' }, h("ir-input", { key: 'b6749919d72748f3da086a9aeeb0e964e2d227b3', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: '9eecca495631d1e20519470ce4494d4269852c9c' }, h("ir-input", { key: '60fc7a9262126ed564fee00245d57355a4297b5f', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: 'e10bb70a2f7b4e728908b61802f798b400456390' }, h("ir-input", { key: '8d60ff4bd1086068eb7c9d5d5554907550775607', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: '48a4cd517dcbca2b937d063d76aba5e6e674137a', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: 'ee39f22a85bd5597c1d1afe6d64d39592077a5e1', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: '224d6281d2baf00186c90d323b425bff4ddc785f', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '34dcb55ec4a3d0de9801559da69cf3a3351ddce1', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: 'aa2f2a2f0aa859ca64c1dc8b59963ecc92d963ee', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: '51bed5455af3e63a80e753e32e57c91234779851', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: '4f593dfc583c25af29e5eff093e60b211095ca4d', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: 'e1f36d7913a6662af23164e7767e56ee3b0262f6', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '2a688f1684098800dbc9e8ce97abc12eab98ba52', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '560801a5a2b0af2d264272e8546a2de02d2eeb8a', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: 'eb0c021ef60013dbd8db8df268b69883b49bff32', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'eddca5ed6d75f8707f519bfca2177b72e3e731ec', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: 'fc52f8d2d5cf7e6faf3dcf7baa47c5569092c9da' }, h("clipPath", { key: 'b203918f383a92373be4ccb8824650f1a2a2f541', id: "clip0_1256_132001" }, h("rect", { key: '074531abd3df047e0b3cf14c6de56f928d72640b', width: "24", height: "24", fill: "white" }))))), h("div", { key: '437306cd28261603a3bcd2163e3a4d1a54c9922f', class: "mt-4 flex items-center justify-center" }, h("p", { key: '59063fd0241786981100731cd4c73113c8a52057', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: '517ceb022ac65462e7c6af287208a602502de142', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
