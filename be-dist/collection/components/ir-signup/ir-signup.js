import IntegrationIcons from "../../assets/integration_icons";
import { Host, h } from "@stencil/core";
export class IrSignup {
    renderFBIcon() {
        return h("span", { slot: "left-icon" }, IntegrationIcons['001']);
    }
    render() {
        return (h(Host, { key: 'b371a452a8cca98d49f2c1909c40ce8c8623ee08' }, h("h1", { key: '7e7cf7d3c82319e128de886168190de37fc6b1bf', class: "title mb-6" }, "Create an account"), h("form", { key: '778651e03d1360bc10527ff3ed865216a9d5668c', class: "mb-6 space-y-3" }, h("fieldset", { key: '74c9e6880c8a5ee3c476d343098bed1f2ad35bf5' }, h("ir-input", { key: 'd94b8800acd1b085d4b4cbc4fb6cfd7978f69937', inputId: "first_name", placeholder: "Enter your first name" })), h("fieldset", { key: '325656a138ec5715c63f9adecfdc508ec39d8cf2' }, h("ir-input", { key: '2c006237551cb23fdc9e0c01b6ae2c221906afa5', inputId: "last_name", placeholder: "Enter your last name" })), h("fieldset", { key: 'cc256f1c3a29a8be98d00185013cdae658f42250' }, h("ir-input", { key: '4783a49aea2a39fd9e438749f0f676bb26ca29a3', inputId: "email", placeholder: "Enter your email" })), h("fieldset", { key: '49b7b7fcac1959fb598d2ad4a4785ce58d18816b' }, h("ir-input", { key: '4239b09f48802c597501bd5288ba86a158191dee', inputId: "password", type: "password", placeholder: "Enter your password" })), h("ir-button", { key: 'b41c9b7329e6d85eec817176661e053675e50ab3', class: "w-full mt-4", label: "Sign up", size: "md" })), h("div", { key: '08a9f0fc95c14ce6e3f0a3ecc7acfbefb46fd3be', class: "flex items-center justify-center gap-4 mb-4" }, h("div", { key: 'f56222401a4d3f838a8cc39352115b34c4ebb8e4', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" }), h("span", { key: 'd543c11786c5d31366af5eac416c406fc76398b0', class: "text-[var(--gray-500)]" }, "OR"), h("div", { key: '60b1c86ce700c01ce6fab5ae132f9d419c5f3532', class: "h-[1px] w-[45%] bg-[var(--gray-200)]" })), h("ir-button", { key: '43dcf36104e91d71157ca97623d5ab3a08cb0c2d', class: "w-full", variants: "outline", label: "Sign up with Facebook", haveLeftIcon: true }, this.renderFBIcon()), h("div", { key: 'c79a18044a32b052012b13ff925d94148e6b92d4', class: "flex items-center justify-center mt-4" }, h("p", { key: '19a32011f2eda04521b2050545bb8ced164edef5', class: "dont-have-an-account" }, "Already have an account?"), h("ir-button", { key: 'd75e74ca4b4b391b739e2583f2c9a89262247dc0', label: "Log in", variants: "ghost-primary", onButtonClick: () => this.navigate.emit('login') }))));
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
//# sourceMappingURL=ir-signup.js.map
