import { Host, h } from "@stencil/core";
import { v4 } from "uuid";
import locales from "../../../stores/locales.store";
export class OtaLabel {
    /**
     * Label displayed as the section title.
     */
    label;
    /**
     * Array of OTA notes to display in the list.
     */
    remarks;
    /**
     * Maximum number of remarks to display before showing the "Show More" button.
     */
    maxVisibleItems = 3;
    /**
     * Internal state that determines whether all remarks are shown or only the limited number.
     */
    showAll = false;
    /**
     * Toggles between showing all remarks or only a limited number.
     *
     * Example:
     * ```ts
     * this.toggleShowAll(); // flips showAll state
     * ```
     */
    toggleShowAll = () => {
        this.showAll = !this.showAll;
    };
    render() {
        if (!this.remarks) {
            return null;
        }
        const displayedRemarks = this.showAll ? this.remarks : this.remarks.slice(0, this.maxVisibleItems);
        return (h(Host, null, h("p", { class: 'label_title' }, this.label), h("ul", { class: "ota-message-list" }, displayedRemarks.map((remark, index) => (h("li", { key: v4(), class: "ota-message-item" }, remark.statement, ' ', this.remarks.length > this.maxVisibleItems && index === displayedRemarks.length - 1 && (h("button", { class: "ota-visibility-toggle", onClick: this.toggleShowAll }, this.showAll ? locales.entries.Lcz_ShowLess : locales.entries.Lcz_ShowMore))))))));
    }
    static get is() { return "ota-label"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ota-label.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ota-label.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Label displayed as the section title."
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": false
            },
            "remarks": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IOtaNotes[]",
                    "resolved": "IOtaNotes[]",
                    "references": {
                        "IOtaNotes": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::IOtaNotes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Array of OTA notes to display in the list."
                },
                "getter": false,
                "setter": false
            },
            "maxVisibleItems": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum number of remarks to display before showing the \"Show More\" button."
                },
                "getter": false,
                "setter": false,
                "attribute": "max-visible-items",
                "reflect": false,
                "defaultValue": "3"
            }
        };
    }
    static get states() {
        return {
            "showAll": {}
        };
    }
}
//# sourceMappingURL=ota-label.js.map
