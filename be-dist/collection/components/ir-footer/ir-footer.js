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
        return (h("footer", { class: "py-2 border-t flex items-center px-4 lg:px-6" }, h("ul", { class: "flex items-center flex-col space-y-2  justify-between w-full md:space-y-0 md:flex-row" }, h("li", { class: "flex justify-between md:flex-col w-full md:w-fit" }, h("p", { class: "font-medium" }, this.exposedProperty.name), h("div", { class: "flex items-center gap-2 md:gap-4 text-sm" }, h("a", { href: `tel:${this.exposedProperty.phone}` }, this.exposedProperty.phone), h("ir-privacy-policy", null))), h("li", { class: "flex items-center gap-4" }, this.exposedProperty.social_media.map(media => {
            if (media.link === '') {
                return null;
            }
            const href = media.code === '006' ? `https://api.whatsapp.com/send/?phone=${media.link}` : media.link;
            return (h("a", { target: "_blank", href: href, title: media === null || media === void 0 ? void 0 : media.name }, IntegrationIcons[media.code]));
        })), h("li", { class: "" }, h("a", { href: "https://info.igloorooms.com/", target: "_blank", title: "igloorooms cloud booking solutions for hotels" }, h("img", { src: '/assets/BE_logo_footer.png', alt: "igloorooms web booking engine", class: "size-10 w-32 object-contain" }))))));
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
