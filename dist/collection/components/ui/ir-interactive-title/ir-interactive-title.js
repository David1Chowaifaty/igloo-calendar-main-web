import { Host, h } from "@stencil/core";
export class IrInteractiveTitle {
    constructor() {
        /**
         * The full title string that may be cropped in the UI.
         */
        this.popoverTitle = '';
        /**
         * CSS offset for the left position of the popover.
         * Used as a CSS variable `--ir-popover-left`.
         */
        this.irPopoverLeft = '10px';
        /**
         * Whether to show the housekeeping (HK) status dot.
         */
        this.hkStatus = false;
        /**
         * The number of characters to display before cropping the title with ellipsis.
         */
        this.cropSize = 20;
        /**
         * Reference to track if we've initialized popover for current render
         */
        this.lastRenderedTitle = '';
    }
    /**
     * Initialize popover with overflow detection
     */
    initializePopoverIfNeeded(titleContainer, title) {
        // Only initialize if title changed or first time
        if (this.lastRenderedTitle === title && this.popoverInstance) {
            return;
        }
        this.disposePopover();
        const tempSpan = document.createElement('span');
        tempSpan.style.visibility = 'hidden';
        tempSpan.style.position = 'absolute';
        tempSpan.style.whiteSpace = 'nowrap';
        tempSpan.textContent = title;
        document.body.appendChild(tempSpan);
        const textWidth = tempSpan.offsetWidth;
        document.body.removeChild(tempSpan);
        const containerWidth = titleContainer.clientWidth;
        const iconWidth = this.hkStatus ? 20 : 0;
        const willOverflow = textWidth + iconWidth > containerWidth;
        if (willOverflow && typeof $ !== 'undefined') {
            try {
                this.popoverInstance = $(titleContainer).popover({
                    trigger: 'hover',
                    content: title,
                    placement: 'top',
                    html: false,
                    sanitize: true,
                    delay: { show: 300, hide: 100 },
                });
            }
            catch (error) {
                console.error('Failed to initialize popover:', error);
            }
        }
        this.lastRenderedTitle = title;
    }
    disposePopover() {
        if (this.popoverInstance && typeof $ !== 'undefined') {
            try {
                $(this.titleContainerRef).popover('dispose');
                this.popoverInstance = null;
            }
            catch (error) {
                console.error('Failed to dispose popover:', error);
            }
        }
    }
    disconnectedCallback() {
        this.disposePopover();
    }
    render() {
        const title = this.popoverTitle || '';
        const shouldCrop = title.length > this.cropSize;
        const displayTitle = shouldCrop ? title.slice(0, this.cropSize) + '...' : title;
        return (h(Host, { key: '7d52e0b792c2552e4e37bde55b0a751a445ef132', style: { '--ir-popover-left': this.irPopoverLeft } }, h("p", { key: '4a19e7ba63ba0c8e489c98fd788d54d6ecbef18d', ref: el => {
                this.titleContainerRef = el;
                if (el && title) {
                    setTimeout(() => this.initializePopoverIfNeeded(el, title), 0);
                }
            }, class: "popover-title", style: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
            } }, h("span", { key: '44aaf90aa27cbea5800752af9d28f8577c59760a', class: "cropped-title", style: {
                flexShrink: '1',
                minWidth: '0',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            } }, displayTitle), this.hkStatus && (h("div", { key: 'd088c6f032b31fe8fd36cf4118e4b9c21c15ab20', title: this.broomTooltip, class: "hk-dot", style: { flexShrink: '0' } }, h("slot", { key: 'e1d1fb1949068ff7321ad305ad91197dfdc13693', name: "end" }))))));
    }
    static get is() { return "ir-interactive-title"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-interactive-title.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-interactive-title.css"]
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
                    "text": "The full title string that may be cropped in the UI."
                },
                "getter": false,
                "setter": false,
                "attribute": "popover-title",
                "reflect": false,
                "defaultValue": "''"
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
                    "text": "CSS offset for the left position of the popover.\nUsed as a CSS variable `--ir-popover-left`."
                },
                "getter": false,
                "setter": false,
                "attribute": "ir-popover-left",
                "reflect": false,
                "defaultValue": "'10px'"
            },
            "hkStatus": {
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
                    "text": "Whether to show the housekeeping (HK) status dot."
                },
                "getter": false,
                "setter": false,
                "attribute": "hk-status",
                "reflect": false,
                "defaultValue": "false"
            },
            "cropSize": {
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
                    "text": "The number of characters to display before cropping the title with ellipsis."
                },
                "getter": false,
                "setter": false,
                "attribute": "crop-size",
                "reflect": false,
                "defaultValue": "20"
            },
            "broomTooltip": {
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
                    "tags": [{
                            "name": "requires",
                            "text": "hkStatus to be true"
                        }],
                    "text": "The message shown when hovering over the broom svg if provided."
                },
                "getter": false,
                "setter": false,
                "attribute": "broom-tooltip",
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=ir-interactive-title.js.map
