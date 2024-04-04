import IntegrationIcons from "../../assets/integration_icons";
import { Host, h } from "@stencil/core";
export class IrSignin {
    renderFBIcon() {
        return h("span", { slot: "left-icon" }, IntegrationIcons['001']);
    }
    render() {
        return (h(Host, { key: '25637002fa71bbceb830686d2b8fd8a82ebf9d8a' }, h("h1", { key: '5ba48e0fa83128825b922ba8dece99d57a7eae44', class: "title" }, "Log in to your account"), h("p", { key: 'f4a306ba65b2b4db540d3ce0a9b883c0e6bb909a', class: "Supporting-text mb-8 " }, "Welcome back! Please enter your details."), h("div", { key: '757a223cdd87f00a70ffeecf315a04f2ec3db399', class: "space-y-4 mb-8 " }, h("fieldset", { key: 'ec148097de3467f25835a290f230f67124d8547b', class: "mb-5" }, h("ir-input", { key: '0733bc2547467dbe0a83f2987bb1f8e123cd97ba', autofocus: true, inputId: "email", placeholder: "Enter your email" })), h("fieldset", { key: '68a8739fa7a037966caac514270989357b0698c1' }, h("ir-input", { key: '9ac970e054678a6bd0e20f997a899652f25cddd6', inputId: "password", type: "password", placeholder: "Enter your password" })), h("div", { key: 'd01493b0a155f10aed04c3191e90abf1e6450265', class: "my-6 flex justify-end" }, h("ir-button", { key: '8a6a59ce128de054c41ce22e07c113b023713531', variants: "ghost-primary", label: "Forgot password" })), h("ir-button", { key: '950b671d35f7d4fa87279e86cfaa1202e02a0482', class: "w-full", label: "Sign in", size: "md" }), h("ir-button", { key: 'b8c7b16817922353274e637d6afeedb619d6176e', class: "w-full", variants: "outline", label: "Sign in with Facebook", haveLeftIcon: true }, this.renderFBIcon())), h("div", { key: '1340978e6fc23ceb0479e8a6d6c8a98fc4667157', class: "flex items-center justify-center" }, h("p", { key: '1adb70b9c9e6199a7493c382c165d6cf5107ed68', class: "dont-have-an-account" }, "Don't have an account?"), h("ir-button", { key: '07dac320fd3abaececf077f7e1055bb42c2b01b5', label: "Sign up", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('register') }))));
    }
    static get is() { return "ir-signin"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-signin.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-signin.css"]
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
                            "path": "../ir-auth/auth.types",
                            "id": "src/components/ir-auth/auth.types.ts::TAuthNavigation"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-signin.js.map
