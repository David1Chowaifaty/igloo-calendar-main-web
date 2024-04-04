import IntegrationIcons from "../../assets/integration_icons";
import { h } from "@stencil/core";
export class IrFooter {
    constructor() {
        this.exposedProperty = undefined;
    }
    render() {
        if (!this.exposedProperty) {
            return null;
        }
        console.log(this.exposedProperty);
        return (h("footer", { class: "py-2 border-t mt-4 flex items-center " }, h("ul", { class: "flex items-center flex-col space-y-2  justify-between w-full md:space-y-0 md:flex-row" }, h("li", { class: "flex justify-between md:flex-col w-full md:w-fit" }, h("p", { class: "font-medium" }, this.exposedProperty.name), h("div", { class: "flex items-center gap-2 md:gap-4 text-sm" }, h("a", { href: `tel:${this.exposedProperty.phone}` }, this.exposedProperty.phone), h("a", { href: "#" }, "Privacy policy"))), h("li", { class: "flex items-center gap-4" }, this.exposedProperty.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name }, IntegrationIcons[media.code]));
        })), h("li", { class: "" }, h("img", { src: this.exposedProperty.space_theme.logo, alt: "", class: "h-14 w-14 object-contain" })))));
    }
    static get is() { return "ir-footer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-footer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-footer.css"]
        };
    }
    static get properties() {
        return {
            "exposedProperty": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IExposedProperty",
                    "resolved": "IExposedProperty",
                    "references": {
                        "IExposedProperty": {
                            "location": "import",
                            "path": "@/components",
                            "id": "src/components.d.ts::IExposedProperty"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
}
//# sourceMappingURL=ir-footer.js.map
