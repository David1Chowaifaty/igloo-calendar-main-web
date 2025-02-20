import localizedWords from "../../../../stores/localization.store";
import { Host, h } from "@stencil/core";
export class IrPagination {
    constructor() {
        this.minPageShown = 7;
    }
    getPages() {
        const wingSize = 2;
        let pages = [];
        for (let i = 1; i <= this.total; i++) {
            if (this.total <= this.minPageShown) {
                pages.push(i);
            }
            else {
                if (i === 1) {
                    pages.push(i);
                }
                else if (i === this.total) {
                    pages.push(i);
                }
                else if (i >= this.current - wingSize && i <= this.current + wingSize) {
                    pages.push(i);
                }
                else if ((i === 2 && this.current > wingSize + 1) || (i === this.total - 1 && this.current < this.total - wingSize)) {
                    pages.push('...');
                }
            }
        }
        return pages;
    }
    render() {
        if (this.total <= 1) {
            return;
        }
        const pages = this.getPages();
        return (h(Host, null, h("ir-button", { disabled: this.current === 1, onButtonClick: () => this.pageChange.emit(this.current - 1), variants: "outline", label: localizedWords.entries.Lcz_Previous, haveLeftIcon: true }, h("ir-icons", { class: "ir-icons", name: localizedWords.direction === 'rtl' ? 'arrow_left' : 'arrow_left', slot: "left-icon", svgClassName: "size-3" })), h("ul", null, pages.map(page => typeof page === 'number' ? (h("li", { class: this.current === page ? 'active' : '' }, h("button", { onClick: () => this.pageChange.emit(page), type: "button" }, page))) : (h("li", { class: "ellipsis" }, page)))), h("ir-button", { disabled: this.current === this.total, onButtonClick: () => this.pageChange.emit(this.current + 1), variants: "outline", label: localizedWords.entries.Lcz_Next, haveRightIcon: true }, h("ir-icons", { class: "ir-icons", name: 'arrow_right', slot: "right-icon", svgClassName: "size-3" }))));
    }
    static get is() { return "ir-pagination"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-pagination.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-pagination.css"]
        };
    }
    static get properties() {
        return {
            "total": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "total",
                "reflect": false
            },
            "current": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "current",
                "reflect": false
            },
            "minPageShown": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "min-page-shown",
                "reflect": false,
                "defaultValue": "7"
            }
        };
    }
    static get events() {
        return [{
                "method": "pageChange",
                "name": "pageChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-pagination.js.map
