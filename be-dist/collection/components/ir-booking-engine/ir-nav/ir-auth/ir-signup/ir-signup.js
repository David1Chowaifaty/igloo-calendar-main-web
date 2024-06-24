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
        return (h(Host, { key: '3a3cb4224ad1f1046bcb02bd499955662452b33e' }, h("h1", { key: 'ed0b2dd2d8e528e807e8f703c1a9ae9f2d1a69fd', class: "title mb-6" }, "Create an account"), h("form", { key: 'acdc450ca7e8313fda336409fc204912edf42a11', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: 'f47246c8dfbaf656841eb6ba8231a59e0ee35340' }, h("ir-input", { key: '29a4cc18d7a064d18167152f7b9f0e34309e973c', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: '03bcbc64547ed90cd2e8223fa27aca55b6e7759f' }, h("ir-input", { key: '23c7ca202b5c91e858323f54533a2cf524193a00', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: '81c1251d59c34f9e23b2f949e9dc821c4101e935' }, h("ir-input", { key: 'b6488c106553efdc2608b4b0504f9c9866412cb3', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: '5c4a580ac0b891186fd4ece99cacc6626e4ac6d7' }, h("ir-input", { key: '1af7e676806e8fcb3f6965cd8ad9a148b9282cad', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: '1809c89d955db3736d77884da968842074f83c95', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: '098b99bf27eb7262c2a456266ba5ee9dbf39c42f', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: 'f8aacf472c05819715ab425ad893e1953eae2ec3', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '7476d610882a93f3a12783d06f0f39dfeb2c0562', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '14716e65c49a4f220bcc371f1eac6cf57d456e6c', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: '5ed765fda6c0b928c72b4f15f8543d2062dc2a7e', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: '3a34a9bb6797ea33ef5cd6fa9091a540169de705', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: '79218e0ef2641c53eaee81eb5c290c67fd6365b1', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '29a7eb1861c729cf3dcf9c132a98610d35897829', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'ac6c3b9e4d2dcea493407a63ee05813423f205e8', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: 'dc71f19764aaa5dd2345ff1b7488501555d64114', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'b8f333efe9c677d4587eca527e82ef4535763f22', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '49024e0490c36dd62a5f492f2c47fe81c3bcaa2c' }, h("clipPath", { key: '6d7ccc9e18379cd5a37c7abe8a65936bab0ed1ef', id: "clip0_1256_132001" }, h("rect", { key: '45a3a624859f0f2300f688d08b554da0e2848a25', width: "24", height: "24", fill: "white" }))))), h("div", { key: 'a677faa149a90cc123dfc4d5d083fd1d0c619f1f', class: "mt-4 flex items-center justify-center" }, h("p", { key: '657004ff40db96f221776a7ef6e153b565e2d51a', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: '8e6c44befa739b945ba01cb6a31472dc24982d59', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
