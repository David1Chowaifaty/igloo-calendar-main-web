import { Host, h } from "@stencil/core";
import { SignUpValidtor } from "../../../../../validators/auth.validator";
import { ZodError } from "zod";
import IntegrationIcons from "../../../../../assets/integration_icons";
import localizedWords from "../../../../../stores/localization.store";
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
        return (h(Host, { key: '3f9249a344b7278e0e620b697cccd3731be6c9f4' }, h("h1", { key: '566435662dcf2251637c7f1b04e57393d6b40ba8', class: "title mb-6" }, "Create an account"), h("form", { key: 'b5c100d78c61e4d9a99f093c8fc521f025da73fa', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: 'ff37bce981f6c09a58462fa15cdcab50418d4d5c' }, h("ir-input", { key: '7f8a7f5f6a28e68c62282d9b108b32e06001ed60', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: localizedWords.entries.Lcz_EnterYourFirstName })), h("fieldset", { key: '05a205bd87b0752231e8eec323780336987a2683' }, h("ir-input", { key: '1886e9e2f2b7469e0f648e4925fc19fbcd3259b4', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: localizedWords.entries.Lcz_EnterYourLastName })), h("fieldset", { key: '0afce3c0a8ea6274ffb7c95418e31f9d72979f08' }, h("ir-input", { key: '23be6e7ae90685f33aba072ae55184b223b7d0e4', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: 'b841073a02246a11ada465c89fc71e7143bbf2b9' }, h("ir-input", { key: '3695f88c7298abfbba3a88d16d2b733ab8e7b49f', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: localizedWords.entries.Lcz_EnterYourPassword })), h("ir-button", { key: 'f85d6a223a76c6e586282b190b213e1a6bea2438', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: 'd9add859cbc918364932e7659c047201eb51efcb', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: '4b1ca750a145750afa6669345a018c4bed878d49', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: 'adcaa6bfd9154d7eb3a636af8ecf7c2b959033f6', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '4548930f92be53bd3eb3ca066ea17b48361f197a', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: '615b868fa4bf120ade0295fdccdcdea2e7fdfb9a', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: 'c6644dee25935650635c3d44968473b28e9331d1', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: '2ae75b8009c752c92d7f1505b36fdc98352ea7f1', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: 'a7901a6077a8e8f58f781f3f536a9dc8585d0a7d', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'de88779253b650ebf0e395d94cd85c298f0f19d4', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: 'b7cc2e373dced4722e6e2ac71a76b17db358e23c', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: '39d7eac909440d151230e02224acd6d3109f6d02', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '71afc5eb7867a975ee5025107eb9ad306b68ac86' }, h("clipPath", { key: '1d77aecd39274b5891239069edc249c27953f7e1', id: "clip0_1256_132001" }, h("rect", { key: 'd3da5364e107b566dec2d2f114a9b09aeb4b969d', width: "24", height: "24", fill: "white" }))))), h("div", { key: '1df032f49810609c10223fb2b084f641cbf408e3', class: "mt-4 flex items-center justify-center" }, h("p", { key: '2c8f8d2769100e8e79cd1fc1886471894c297779', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: '08f2522caa0cd2b88667046bf0620478f5ec519b', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
