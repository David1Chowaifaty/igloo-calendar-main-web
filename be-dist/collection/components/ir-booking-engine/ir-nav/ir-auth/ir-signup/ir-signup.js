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
        return (h(Host, { key: 'fee16593cea5bcdae2336b2b9f8adfc89a2bed7f' }, h("h1", { key: 'd1b80fe5fd8578fe4a6fe57c00e5f7d8de6b33a4', class: "title mb-6" }, "Create an account"), h("form", { key: '182b5c795665373e654d91bca9e6b8e8846c0348', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: 'bfffcdf0b2b8ba56ebe7735666a894b1ae442384' }, h("ir-input", { key: 'ac3816e4aff5e86a5ddbcbfc411da851137543cb', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: '6428fa59634b0e1bae5f9c1140be8077de7dd8f9' }, h("ir-input", { key: '9e19ef261447f99ee32fa1e6dcc5e21994c5b759', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: 'f8c8e002052aadfb425fe5dba480d0694ec3fe4e' }, h("ir-input", { key: '1adc386a927a6a302825085cf7ff9f5d0f538d46', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: '0bb6e6a438b0c3a1c3f091bec7674493709fd547' }, h("ir-input", { key: 'c15cb7152834c92849697fd423c4c7389c26793b', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: '0830ecae0d64a202d7619c6798282e01d7d6f0c1', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: 'd1ddee0d3398e90455322e130ae40721d3f3920a', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: '7e59b57d19c465aa3a42a064bc93a2b8671b70bf', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '96649af90458dbc0eadcf1bd81f0d6974e19e6b8', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: 'f63986f7aedbd829d4906eadb16aad506cc85633', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: '36c8dae82f94d96cd3da103e108bdc4b9d69da0e', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: 'ecf7ff9586a0f0ede47ada09ef87ca20a6d9aaec', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: '9178f5dbd725f36f79c8a07be92393a698ea8779', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '8cdd6461a2cfc20b160b3aae2f85a371baee04a1', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'd6277d268150716089a0fcdcff85e96256f4d6c3', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: 'b972b3f0ac41eed87ba75065a8d1b0ec765a3088', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: '1a2a3860ae6d7d2ca028e1b3afe1c5bbbdbfbca2', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: 'f34b43342da33b3bcfaa7544ca900721226a1e21' }, h("clipPath", { key: '94af5c722b08d3f37e1a6d3fa9fa7a4c7d557573', id: "clip0_1256_132001" }, h("rect", { key: '7d3eb813cce1f43f873326d1fe5183f3330f08f5', width: "24", height: "24", fill: "white" }))))), h("div", { key: 'c1c9987b50d382ec5de8ef824e40f0235a08767f', class: "mt-4 flex items-center justify-center" }, h("p", { key: '14115a674b679c78a6200ffa58b2f5ff672d0873', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: 'fe677cd58f85a2a142f84a615631985a8253ff09', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
