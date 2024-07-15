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
        return (h(Host, { key: '01c34009071919a5da88d4490c5378a1f4d7aefe' }, h("h1", { key: '5abe860ca45412e076693f9390942d85b887fdd8', class: "title mb-6" }, "Create an account"), h("form", { key: '03a6a2c52e7d3dfac02e29c41fe80f3bdafe6f50', onSubmit: this.handleSignUp.bind(this), class: "mb-6 space-y-3" }, h("fieldset", { key: 'c6c49712befe0f364d34758119a8ba576f9e8e25' }, h("ir-input", { key: '1cd49b32f676446178fb6c6536ec4263260460d0', error: !!((_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.first_name), inputId: "first_name", label: "Enter your first name" })), h("fieldset", { key: 'abf924e9d503e4b2186b8c1e4772408651a8ecaf' }, h("ir-input", { key: 'ef8b5e4e76f35500bb5aa7562735d4bbebdf2411', error: !!((_d = (_c = this.formState) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.last_name), inputId: "last_name", label: "Enter your last name" })), h("fieldset", { key: '29ed3438851248749085a347df852927786a51b4' }, h("ir-input", { key: 'b0e85f89eb5c132afed4238b74712e885ae57d75', error: !!((_f = (_e = this.formState) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.email), inputId: "email", label: "Enter your email" })), h("fieldset", { key: '70d8b2f91a797b7d83c72651283eda0a599039c3' }, h("ir-input", { key: 'e8d4a01f2f3539886e215321187600f370cdc7e6', error: !!((_h = (_g = this.formState) === null || _g === void 0 ? void 0 : _g.errors) === null || _h === void 0 ? void 0 : _h.password), inputId: "password", type: "password", label: "Enter your password" })), h("ir-button", { key: '5d1196869007aa52f48ea15d88f6c656866cf348', type: "submit", class: "mt-4 w-full", label: "Sign up", size: "md" })), h("div", { key: 'f6366ab65961b57c17278222810b9a9213fdcf17', class: "mb-4 flex items-center justify-center gap-4" }, h("div", { key: '8de4c1d6b64350bb3d067cc19feca73e070430ad', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: '38d61daf63574186fc8d22b1b6ea97a18beef695', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '2e7efdeeb0b8cc138dc0008ff4c2110ccc4ee7fe', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: '13d103a91315269510dd98813207deb397120d7e', class: "mb-2.5 w-full", onButtonClick: () => this.signUp.emit({ trigger: 'google' }), variants: "outline", label: "Continue with Google", haveLeftIcon: true }, h("span", { key: 'cb64926be22690c8fb1110f778030ea7281e611c', slot: "left-icon" }, IntegrationIcons.google)), h("ir-button", { key: '164c8049ec6f49cf3512e723e3e3cb5cf2be4070', class: "w-full", variants: "outline", onButtonClick: () => this.signUp.emit({ trigger: 'fb' }), label: "Continue with Facebook", haveLeftIcon: true }, h("svg", { key: '52a1f7f653f726119f15a8526d8a29b3d8484f3b', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '3a3e06f25286245fbae6870da48e0be83ef589f5', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: 'f2cb186d581a8a1e80fda9839d7bee0a9b2f93ff', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'f5c5e91ba08fa09e1b51fbaed658edafb7f7e16d', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '14eb8a21f9eb1439fd383f588426676209204df3' }, h("clipPath", { key: 'c1207bc25b26e6699a7f0b2b51c9f51d4493fd2a', id: "clip0_1256_132001" }, h("rect", { key: '47b83f78194bb7ed5c45bd73022d1a0efe4b478b', width: "24", height: "24", fill: "white" }))))), h("div", { key: '7a91d8a0cc0a55811d5953221eba46748f7b7063', class: "mt-4 flex items-center justify-center" }, h("p", { key: 'ff08bb6173feafcdaa89e3f91d1d7a189bd3e7ce', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: '73f781bf36c4d57955854ed8243c0d7faceacab1', label: "Sign in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
