import { Host, h } from "@stencil/core";
export class IrPopover {
    constructor() {
        this.handleMouseEnter = () => {
            if (!this.showPopover) {
                return;
            }
            if (this.showPopover) {
                this.isHovered = true;
            }
        };
        this.handleMouseLeave = () => {
            if (!this.showPopover) {
                return;
            }
            this.isHovered = false;
        };
        this.popoverTitle = undefined;
        this.isHovered = false;
        this.showPopover = false;
        this.irPopoverLeft = '10px';
    }
    componentWillLoad() {
        this.checkTitleWidth();
    }
    checkTitleWidth() {
        requestAnimationFrame(() => {
            const titleElement = this.el.querySelector('.popover-title');
            if (titleElement) {
                const width = titleElement.scrollWidth;
                this.showPopover = width > 150; // Show popover if title width exceeds 170px
            }
        });
    }
    render() {
        return (h(Host, { key: '37cd090267a4a2e12fa0b050cfd14aa9f116a9bf', style: { '--ir-popover-left': this.irPopoverLeft } }, h("p", { key: 'df3b7bf51dc2dcc2a78c0e89241e7f70c3911fe8', class: "popover-title", onMouseLeave: this.handleMouseLeave, onMouseEnter: this.handleMouseEnter }, this.popoverTitle), this.showPopover && this.isHovered && (h("div", { key: '083d4b82fdda0954b0da145582da16b8bc73d877', "data-state": "show", class: "popover-container" }, this.popoverTitle))));
    }
    static get is() { return "ir-popover"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-popover.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-popover.css"]
        };
    }
    static get properties() {
        return {
            "popoverTitle": {
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
                    "text": ""
                },
                "attribute": "popover-title",
                "reflect": false
            },
            "irPopoverLeft": {
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
                    "text": ""
                },
                "attribute": "ir-popover-left",
                "reflect": false,
                "defaultValue": "'10px'"
            }
        };
    }
    static get states() {
        return {
            "isHovered": {},
            "showPopover": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=ir-popover.js.map
