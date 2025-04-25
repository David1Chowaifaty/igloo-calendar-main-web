import { Host, h } from "@stencil/core";
export class IrPopover {
    constructor() {
        this.irPopoverLeft = '10px';
        this.placement = 'auto';
        this.trigger = 'focus';
        this.renderContentAsHtml = false;
        this.initialized = false;
    }
    componentDidLoad() {
        if (this.initialized) {
            return;
        }
        this.initializePopover();
    }
    initializePopover() {
        $(this.popoverTrigger).popover({
            trigger: this.trigger,
            content: this.content,
            placement: this.placement,
            html: this.renderContentAsHtml,
        });
        this.initialized = true;
    }
    disconnectedCallback() {
        $(this.popoverTrigger).popover('dispose');
    }
    render() {
        return (h(Host, { key: '7924a1cbed07521c420449a0103ef7e2662043d3', style: { '--ir-popover-left': this.irPopoverLeft } }, this.trigger !== 'focus' ? (h("p", { ref: el => (this.popoverTrigger = el), class: "popover-title m-0 p-0", style: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                cursor: 'pointer',
            } }, h("slot", null))) : (h("button", { tabindex: "0", class: "popover-trigger", ref: el => (this.popoverTrigger = el) }, h("slot", null)))));
    }
    static get is() { return "ir-popover"; }
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
            "content": {
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
                "getter": false,
                "setter": false,
                "attribute": "content",
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
                "getter": false,
                "setter": false,
                "attribute": "ir-popover-left",
                "reflect": false,
                "defaultValue": "'10px'"
            },
            "placement": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'top' | 'bottom' | 'left' | 'right' | 'auto'",
                    "resolved": "\"auto\" | \"bottom\" | \"left\" | \"right\" | \"top\"",
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
                "attribute": "placement",
                "reflect": false,
                "defaultValue": "'auto'"
            },
            "trigger": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'focus' | 'click' | 'hover'",
                    "resolved": "\"click\" | \"focus\" | \"hover\"",
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
                "attribute": "trigger",
                "reflect": false,
                "defaultValue": "'focus'"
            },
            "renderContentAsHtml": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "render-content-as-html",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=ir-popover.js.map
