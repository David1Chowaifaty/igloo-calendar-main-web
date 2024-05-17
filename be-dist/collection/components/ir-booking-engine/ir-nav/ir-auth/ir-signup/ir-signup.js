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
        return (h(Host, { key: 'b4b7f54dff2e8bb6ae383e824da72cb7b22c5e64' }, h("h1", { key: '9a1e943a9fe228d25a6af90384bf230a7f8be9b3', class: "title mb-6" }, "Create an account"), h("form", { key: '0a5695ed06f655cbc8fd0079fd6ab9971ac98c80', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: '77e3e4d062b366e897a690d14cd36d0b6ea7b5c2' }, h("ir-input", { key: '964987d4e90b8772666755ff166dcb5b83a4bd76', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: '97e0f15e72d3176f043ed902240e3ed7b1b25127' }, h("ir-input", { key: 'be97fa22c7943d9bd91d070acb8508b236c1634c', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: 'd26b6aa9e6d1f5e3adca08f6cc2d90ac81b2a711' }, h("ir-input", { key: '0624732d65566827fe9090e8ec67905b331dc979', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: 'df2494a32d0de08bb91bcc8eeab169a44c0bd1ca' }, h("ir-input", { key: '35734b9ce09629cb9741c095f71ded7a433668cd', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: 'f420cf4981eb3f331ee145149ea6200c3bf98778', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: '4fe2b6e9c5fa18ac07f446dd3ee155808ce70f7a', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: '97592fb3c694f6783841daaf6e0fb231829cbdf2', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '8a249fb18d8cb2298a9d649b1fcd359bab10a33d', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: 'c91feaf1cad6531e76ff7960a1d676c92fe11377', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: 'f29b467a8c489a34186ecbf86df9d68750cba13f', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: '6e94e51922d05535e0d403fb18473d7a8fb27fa2', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: '646bedc6f768b582f7b1934c302f0e1befdb4200', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: 'c8bf9645217a59d260174adc6ac395f35c8d4c91', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '3af732bf19e0c51d7c69c47906bd4372ed647bc4', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: 'c36bc56ce7cb801ad074b2df302431eb2827713f', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'c0116f0c23cee18dedf4090fedac0289d847a773', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '6df10306854813bbb3cbfd6e21d65821155565cd' }, h("clipPath", { key: '936ba72cabe27f325aac22b1b9b84d7ea5cec2a2', id: "clip0_1256_132001" }, h("rect", { key: 'bda4b7b5ea6731e02690ec6b81be7e57413e87df', width: "24", height: "24", fill: "white" }))))), h("div", { key: '6aa52af6fab3bcdb79ef6b861f10248aba6a06e4', class: "mt-4 flex items-center justify-center" }, h("p", { key: 'acd88be5f2cb5962890908b8e3bdac690b2c5247', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: '0d0e6d36ba6401b827d2ae962d26f4f7ccf2b087', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
