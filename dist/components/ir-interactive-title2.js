import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irInteractiveTitleCss = ".sc-ir-interactive-title-h{display:block;width:100%}*.sc-ir-interactive-title{box-sizing:border-box}.popover-title.sc-ir-interactive-title{width:100%;height:100%;margin:0;padding:0;overflow:hidden;display:flex;align-items:center;gap:4px;white-space:nowrap}.cropped-title.sc-ir-interactive-title{flex:1 !important;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.hk-dot.sc-ir-interactive-title{flex-shrink:0;align-self:stretch;display:flex;align-items:stretch;justify-content:center;padding-inline:var(--ir-popover-left, 10px);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out;background:var(--ir-interactive-hk-bg, var(--wa-color-surface-default));color:var(--dot-color, var(--wa-color-text-normal))}";
const IrInteractiveTitleStyle0 = irInteractiveTitleCss;

/**
 * Module-level counter — survives HMR but is reset on full page reload.
 * Guarantees each instance gets a stable, unique DOM id without needing
 * @Element or lifecycle hooks.
 */
let titleIdCounter = 0;
const IrInteractiveTitle = /*@__PURE__*/ proxyCustomElement(class IrInteractiveTitle extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
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
    static get style() { return IrInteractiveTitleStyle0; }
}, [6, "ir-interactive-title", {
        "popoverTitle": [1, "popover-title"],
        "irPopoverLeft": [1, "ir-popover-left"],
        "hkStatus": [4, "hk-status"],
        "cropSize": [2, "crop-size"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-interactive-title"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-interactive-title":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrInteractiveTitle);
            }
            break;
    } });
}

export { IrInteractiveTitle as I, defineCustomElement as d };

//# sourceMappingURL=ir-interactive-title2.js.map