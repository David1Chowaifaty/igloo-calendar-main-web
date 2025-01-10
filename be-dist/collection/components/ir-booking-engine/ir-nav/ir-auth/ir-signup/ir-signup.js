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
        return (h(Host, { key: '59b586515d54cd327edc04a45972daa3089ab8b4' }, h("h1", { key: '16b21dc131307261ec19027b2c90dfd2a6b21f66', class: "title mb-6" }, "Create an account"), h("form", { key: '88711066a67dc872cc91029e0b5b3f52b28eb785', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: '3273b70719982d596c0b0cbca8171e16785fa6cb' }, h("ir-input", { key: '96932d7948ef8aca62539b6d3708f60dcb29f9a6', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: localizedWords.entries.Lcz_EnterYourFirstName })), h("fieldset", { key: '610cd10b032f6748e04889108c71b092622dc18f' }, h("ir-input", { key: '50e6da36e531f23d2564abbb9d4bfda202c8ec83', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: localizedWords.entries.Lcz_EnterYourLastName })), h("fieldset", { key: '1cd6fb2632ecadbec7f9ddccbfdb525fdce431bc' }, h("ir-input", { key: '4a3a9c96b1e7ac683125f441e7203d1992c0fd64', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: '19b1dd7e1748db6fef8b30a74b7ff5f14360fcb3' }, h("ir-input", { key: 'e32cded2825f281a804acf4c7f10f9e131792175', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: localizedWords.entries.Lcz_EnterYourPassword })), h("ir-button", { key: 'b3a88d546cea576f7f98b16c9958845c570878e2', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: '7b6caf3033b4e7a86da8d98ec5d92e4f57c82786', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: 'd0be750fdc582ea2a0fdcb725abd6f7cb02b7193', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: 'e447666c0a71b558ad33b5ae9d65e4d2451d35a6', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '68fb74ff4946da8d2b660fa341102d59d66f7e25', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: '300e26cca271191c62afb083b7b69345127f64e9', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: '4ca75a761192aec9d64e01809d2866929153c08c', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: '768c06a1a59b5fe52c17491cf51c9276aea4906d', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '91304d8cc709a4a4ddf798b3b0bd0ecfc38b073a', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'ce44831ef660c9dba19f57382d7a3eaac4d26f35', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: '1351845e1d9b8b281615d017f1d696a1abf57515', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'd85d2503d4b847715411be0c90950fd04ff1a5e7', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '9dc73210ddb67daf4fa0b83842c06369c142cb15' }, h("clipPath", { key: '57ddc060e43df4fdb10dad2906cf226ec18d9aea', id: "clip0_1256_132001" }, h("rect", { key: '38fdf99b54570dd87c98d0095d6bacfa0515d6a9', width: "24", height: "24", fill: "white" }))))), h("div", { key: '6d0d56fdfe8a6c6187206eae762c6863ad24059b', class: "mt-4 flex items-center justify-center" }, h("p", { key: '2c8a2e0fd95c223a12cea9db7cf9e17ce57e8193', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: 'ff9886b0147ea7b04f4166d0d2b7f0cbbc2b0577', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
