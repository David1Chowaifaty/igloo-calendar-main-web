import { Host, h } from "@stencil/core";
/**
 * Module-level counter — survives HMR but is reset on full page reload.
 * Guarantees each instance gets a stable, unique DOM id without needing
 * @Element or lifecycle hooks.
 */
let titleIdCounter = 0;
/**
 * @component ir-interactive-title
 *
 * Renders a room/category name inside a flex row that:
 *  - Truncates via CSS `text-overflow: ellipsis` when the text overflows.
 *  - Shows a `<wa-tooltip>` with the full title on hover when the title
 *    exceeds `cropSize` characters (lightweight proxy for overflow detection).
 *  - Optionally renders a trailing `.hk-dot` container (via `slot[name="end"]`)
 *    for housekeeping status icons or alert badges.
 *
 * The `.hk-dot` participates in the flex layout (`flex-shrink: 0`) so the
 * title span is guaranteed to truncate *before* reaching the icons — no JS
 * width measurement needed.
 *
 * @slot end - Icon(s) placed after the title (broom, alert, etc.).
 *             Only rendered when `hkStatus` is `true`.
 *
 * @cssvar --ir-popover-left   Horizontal padding of the `.hk-dot` overlay.
 * @cssvar --ir-interactive-hk-bg  Background fill of `.hk-dot` (used for
 *                                  hover highlight from the parent row).
 * @cssvar --dot-color          Icon colour inside `.hk-dot`.
 */
export class IrInteractiveTitle {
    /**
     * The full title string. When its length exceeds `cropSize` the tooltip
     * is activated so the user can read the complete text on hover.
     */
    popoverTitle = '';
    /**
     * Horizontal padding of the `.hk-dot` slot container, forwarded as the
     * `--ir-popover-left` CSS custom property on the host element.
     * @default '10px'
     */
    irPopoverLeft = '10px';
    /**
     * When `true`, renders the `.hk-dot` container and the `slot[name="end"]`
     * inside it. Must be `true` whenever slot content is provided, otherwise
     * the slotted nodes are silently discarded by the browser.
     */
    hkStatus = false;
    /**
     * Character-count threshold above which the full-title tooltip is shown.
     * Acts as a fast approximation of visual overflow; the browser independently
     * applies `text-overflow: ellipsis` via CSS regardless of this value.
     * @default 20
     */
    cropSize = 20;
    /**
     * Unique DOM id assigned once at instantiation time to the inner `<span>`.
     * `<wa-tooltip for="…">` references this id to anchor the tooltip.
     * Declared `readonly` — must never be reassigned after construction.
     */
    titleId = `ir-title-${++titleIdCounter}`;
    render() {
        const title = this.popoverTitle || '';
        return (h(Host, { key: '034b37cdc6af708b02be5968d9a2fc3362c21145', style: { '--ir-popover-left': this.irPopoverLeft } }, h("p", { key: '4c4f07dc843fac60ea6d1a6c350d04977c5384ba', class: "popover-title" }, title.length > this.cropSize && (h("wa-tooltip", { key: 'afd6f40694c0668b4a56ca8a2e9b659911a58db1', for: this.titleId, placement: "top" }, title)), h("span", { key: 'f0c62eb9c11e7fe2a4d717ff3cbcb0a182a96841', id: this.titleId, class: "cropped-title" }, title), this.hkStatus && (h("div", { key: '8642ad96ae126881ca4ccf0f1ceee7633faacc32', class: "hk-dot" }, h("slot", { key: '3e57239b84f647cc8b42a1d8d25178ec00106233', name: "end" }))))));
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
                    "text": "The full title string. When its length exceeds `cropSize` the tooltip\nis activated so the user can read the complete text on hover."
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
                    "tags": [{
                            "name": "default",
                            "text": "'10px'"
                        }],
                    "text": "Horizontal padding of the `.hk-dot` slot container, forwarded as the\n`--ir-popover-left` CSS custom property on the host element."
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
                    "text": "When `true`, renders the `.hk-dot` container and the `slot[name=\"end\"]`\ninside it. Must be `true` whenever slot content is provided, otherwise\nthe slotted nodes are silently discarded by the browser."
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
                    "tags": [{
                            "name": "default",
                            "text": "20"
                        }],
                    "text": "Character-count threshold above which the full-title tooltip is shown.\nActs as a fast approximation of visual overflow; the browser independently\napplies `text-overflow: ellipsis` via CSS regardless of this value."
                },
                "getter": false,
                "setter": false,
                "attribute": "crop-size",
                "reflect": false,
                "defaultValue": "20"
            }
        };
    }
}
//# sourceMappingURL=ir-interactive-title.js.map
