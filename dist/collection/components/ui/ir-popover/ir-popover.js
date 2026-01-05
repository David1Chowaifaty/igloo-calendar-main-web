import { Host, h } from "@stencil/core";
export class IrPopover {
    el;
    /**
     * Content to display inside the popover.
     * Can be plain text or HTML depending on `renderContentAsHtml`.
     */
    content;
    /**
     * Horizontal offset (left) of the popover from its trigger.
     * Used in inline style as `--ir-popover-left`.
     */
    irPopoverLeft = '10px';
    /**
     * Position of the popover relative to the trigger.
     * Options: `'top'`, `'bottom'`, `'left'`, `'right'`, `'auto'`.
     */
    placement = 'auto';
    /**
     * Event that triggers the popover.
     * Options: `'focus'`, `'click'`, `'hover'`.
     */
    trigger = 'focus';
    /**
     * Whether to treat `content` as raw HTML.
     * When true, `content` will be injected with `html: true` in jQuery popover.
     */
    renderContentAsHtml = false;
    /**
     * Internal flag to ensure popover is only initialized once.
     */
    initialized = false;
    /**
     * Reference to the HTML element that triggers the popover.
     */
    popoverTrigger;
    componentDidLoad() {
        if (this.initialized) {
            return;
        }
        this.initializePopover();
    }
    /**
     * Initializes the jQuery popover on the trigger element using configured props.
     */
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
        return (h(Host, { key: '3018cafbfdbd088659e554b4c540997123aaebeb', style: { '--ir-popover-left': this.irPopoverLeft } }, this.trigger !== 'focus' ? (h("p", { ref: el => (this.popoverTrigger = el), class: "popover-title m-0 p-0", style: {
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
                    "text": "Content to display inside the popover.\nCan be plain text or HTML depending on `renderContentAsHtml`."
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
                    "text": "Horizontal offset (left) of the popover from its trigger.\nUsed in inline style as `--ir-popover-left`."
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
                    "text": "Position of the popover relative to the trigger.\nOptions: `'top'`, `'bottom'`, `'left'`, `'right'`, `'auto'`."
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
                    "text": "Event that triggers the popover.\nOptions: `'focus'`, `'click'`, `'hover'`."
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
                    "text": "Whether to treat `content` as raw HTML.\nWhen true, `content` will be injected with `html: true` in jQuery popover."
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
