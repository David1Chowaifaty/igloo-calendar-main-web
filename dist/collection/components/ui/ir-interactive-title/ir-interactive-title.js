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
        return (h(Host, { key: 'fdb3e8998eb53e1728900a3182dfff0d8beaca4c', style: { '--ir-popover-left': this.irPopoverLeft } }, h("p", { key: '303029ccc25f3dfce2d01d80baed7bb145786835', class: "popover-title" }, title.length > this.cropSize && (h("wa-tooltip", { key: 'd9a2d0f597cdd76194421296eae6cdc235ee2dd7', for: this.titleId, placement: "top" }, title)), h("span", { key: 'f82b92762cd2d8ba8037e243258f22c8a76c1e59', id: this.titleId, class: "cropped-title" }, title), this.hkStatus && (h("div", { key: '6ded33c4bfbacbd8dc62e166a47363880c82c59d', class: "hk-dot" }, h("slot", { key: '19076ae63f122c095e57ec175e61a95f2bbed2e0', name: "end" }))))));
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
                "reflect": false,
                "attribute": "popover-title",
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
                "reflect": false,
                "attribute": "ir-popover-left",
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
                "reflect": false,
                "attribute": "hk-status",
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
                "reflect": false,
                "attribute": "crop-size",
                "defaultValue": "20"
            }
        };
    }
}
