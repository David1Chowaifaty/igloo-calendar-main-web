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
        return (h(Host, { key: 'dd42cb677f03d3d060b7d64f6077217b0bad7224', style: { '--ir-popover-left': this.irPopoverLeft } }, h("p", { key: '0e75459fb3b7ccbcaf389cc5751751f21feca486', ref: el => {
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
            } }, h("span", { key: '78191b8184cd8de3bdece289af0f6b3ef83cb204', class: "cropped-title", style: {
                flexShrink: '1',
                minWidth: '0',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            } }, displayTitle), this.hkStatus && (h("div", { key: 'af71b60bb1ef3c6a3c927d3316a282accfd47ec4', title: this.broomTooltip, class: "hk-dot", style: { flexShrink: '0' } }, h("slot", { key: '58086e3906d2ac7eabfd6e07e15da5bc8d502c1a', name: "end" }))))));
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
