import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-revenue-row-details2.js';

const irRevenueRowCss = ".sc-ir-revenue-row-h{--ir-acc-duration:220ms;--ir-acc-ease:cubic-bezier(0.2, 0.8, 0.2, 1)}.ir-revenue-row.sc-ir-revenue-row{border-bottom:1px solid var(--ir-border, #e5e7eb);background:var(--ir-bg, #fff);padding:0}.ir-revenue-row__header.sc-ir-revenue-row{display:flex;align-items:center;justify-content:space-between;padding:var(--ir-space-4, 1rem);border-bottom:1px solid var(--ir-border, #e5e7eb)}.ir-revenue-row__title.sc-ir-revenue-row{display:inline-flex;align-items:center;gap:var(--ir-space-2, 0.5rem);background:transparent;border:0;padding:0;cursor:pointer;text-align:left;width:100%;justify-content:space-between;padding:0.5rem}.ir-revenue-row__header-left.sc-ir-revenue-row{display:flex;align-items:center;gap:var(--ir-space-2, 0.5rem)}.ir-revenue-row__title.sc-ir-revenue-row:disabled{opacity:0.6;cursor:not-allowed}.ir-revenue-row__title.sc-ir-revenue-row:hover{background:#f4f5fa}.ir-revenue-row__group.sc-ir-revenue-row{margin:0;font-weight:600}.ir-revenue-row__badge.sc-ir-revenue-row{background:lightgray;border-radius:0.25rem;font-size:0.75rem;padding:0 0.5rem;margin-left:0.375rem}.ir-revenue-row__total.sc-ir-revenue-row{font-weight:700;margin:0}.ir-revenue-row__toggle.sc-ir-revenue-row{transition:transform var(--ir-acc-duration) var(--ir-acc-ease);transform:rotate(-90deg)}.ir-revenue-row[data-open='true'].sc-ir-revenue-row .ir-revenue-row__toggle.sc-ir-revenue-row,.ir-revenue-row__toggle.is-open.sc-ir-revenue-row{transform:rotate(0deg)}.ir-revenue-row__details.sc-ir-revenue-row{transition:height var(--ir-acc-duration) var(--ir-acc-ease);will-change:height}.ir-revenue-row__details.sc-ir-revenue-row:not([data-expanded='true']){height:0 !important;overflow:hidden !important;visibility:hidden}.ir-revenue-row__details[data-expanded='true'].sc-ir-revenue-row{visibility:visible}.ir-revenue-row__details-inner.sc-ir-revenue-row{padding:0.25rem 1rem}.ir-revenue-row__detail.sc-ir-revenue-row{display:block;border-bottom:1px solid var(--ir-border, #e5e7eb)}.ir-revenue-row__detail.sc-ir-revenue-row:last-child{border-bottom:none}@media (prefers-reduced-motion: reduce){.ir-revenue-row__toggle.sc-ir-revenue-row{transition:none}.ir-revenue-row__details.sc-ir-revenue-row{transition:none}}";
const IrRevenueRowStyle0 = irRevenueRowCss;

let accId = 0;
const IrRevenueRow = /*@__PURE__*/ proxyCustomElement(class IrRevenueRow extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.irToggle = createEvent(this, "irToggle", 7);
        /** Array of payments for this method group */
        this.payments = [];
        /** Start expanded */
        this.defaultExpanded = false;
        this._expanded = false;
        this.contentId = `ir-rr-content-${++accId}`;
        this.isAnimating = false;
        this.onHeaderClick = () => {
            // Don't allow clicks during animation
            if (this.isAnimating) {
                return;
            }
            const nextExpanded = !this._expanded;
            // For controlled components, just emit the event
            if (this.expanded !== undefined) {
                this.irToggle.emit({ expanded: nextExpanded });
            }
            else {
                // For uncontrolled components, update state and emit
                this.updateExpansion(nextExpanded, true);
            }
        };
        this.onHeaderKeyDown = (ev) => {
            // Allow keyboard toggle with Enter/Space
            if ((ev.key === 'Enter' || ev.key === ' ') && !this.isAnimating) {
                ev.preventDefault();
                this.onHeaderClick();
            }
        };
    }
    componentWillLoad() {
        var _a;
        this._expanded = (_a = this.expanded) !== null && _a !== void 0 ? _a : this.defaultExpanded;
    }
    disconnectedCallback() {
        // Clean up any ongoing animation
        if (this.cleanupAnimation) {
            this.cleanupAnimation();
        }
    }
    watchExpanded(newValue) {
        if (newValue !== undefined && newValue !== this._expanded) {
            this.updateExpansion(newValue, false); // Don't emit event for external changes
        }
    }
    updateExpansion(expanded, shouldEmit = true) {
        // Prevent multiple simultaneous animations
        if (this.isAnimating) {
            return;
        }
        const wasExpanded = this._expanded;
        this._expanded = expanded;
        // Only animate if the state actually changed
        if (wasExpanded !== expanded) {
            if (expanded) {
                this.openWithAnimation();
            }
            else {
                this.closeWithAnimation();
            }
            if (shouldEmit) {
                this.irToggle.emit({ expanded });
            }
        }
    }
    openWithAnimation() {
        if (!this.detailsEl || !this.contentEl || this.isAnimating)
            return;
        this.isAnimating = true;
        this.cleanupPreviousAnimation();
        // Set initial state
        const startHeight = this.detailsEl.offsetHeight;
        this.detailsEl.style.height = `${startHeight}px`;
        this.detailsEl.style.overflow = 'hidden';
        // Make content visible and measure target height
        this.detailsEl.setAttribute('data-expanded', 'true');
        const targetHeight = this.contentEl.scrollHeight;
        // Use requestAnimationFrame to ensure the browser has processed the initial state
        requestAnimationFrame(() => {
            if (!this.detailsEl)
                return;
            this.detailsEl.style.height = `${targetHeight}px`;
            const handleTransitionEnd = (event) => {
                // Make sure this is the height transition and not a child element
                if (event.target === this.detailsEl && event.propertyName === 'height') {
                    this.finishOpenAnimation();
                }
            };
            this.cleanupAnimation = () => {
                if (this.detailsEl) {
                    this.detailsEl.removeEventListener('transitionend', handleTransitionEnd);
                }
                this.isAnimating = false;
            };
            this.detailsEl.addEventListener('transitionend', handleTransitionEnd);
            // Fallback timeout in case transitionend doesn't fire
            setTimeout(() => {
                if (this.isAnimating) {
                    this.finishOpenAnimation();
                }
            }, 300); // Should match your CSS transition duration
        });
    }
    closeWithAnimation() {
        if (!this.detailsEl || !this.contentEl || this.isAnimating)
            return;
        this.isAnimating = true;
        this.cleanupPreviousAnimation();
        // Set initial height to current scrollHeight
        const startHeight = this.detailsEl.scrollHeight;
        this.detailsEl.style.height = `${startHeight}px`;
        this.detailsEl.style.overflow = 'hidden';
        // Force reflow then animate to 0
        requestAnimationFrame(() => {
            if (!this.detailsEl)
                return;
            this.detailsEl.style.height = '0px';
            const handleTransitionEnd = (event) => {
                // Make sure this is the height transition and not a child element
                if (event.target === this.detailsEl && event.propertyName === 'height') {
                    this.finishCloseAnimation();
                }
            };
            this.cleanupAnimation = () => {
                if (this.detailsEl) {
                    this.detailsEl.removeEventListener('transitionend', handleTransitionEnd);
                }
                this.isAnimating = false;
            };
            this.detailsEl.addEventListener('transitionend', handleTransitionEnd);
            // Fallback timeout
            setTimeout(() => {
                if (this.isAnimating) {
                    this.finishCloseAnimation();
                }
            }, 300);
        });
    }
    finishOpenAnimation() {
        if (this.cleanupAnimation) {
            this.cleanupAnimation();
            this.cleanupAnimation = undefined;
        }
        if (this.detailsEl) {
            this.detailsEl.style.height = '';
            this.detailsEl.style.overflow = '';
        }
        this.isAnimating = false;
    }
    finishCloseAnimation() {
        if (this.cleanupAnimation) {
            this.cleanupAnimation();
            this.cleanupAnimation = undefined;
        }
        if (this.detailsEl) {
            this.detailsEl.style.height = '';
            this.detailsEl.style.overflow = '';
            this.detailsEl.removeAttribute('data-expanded');
        }
        this.isAnimating = false;
    }
    cleanupPreviousAnimation() {
        if (this.cleanupAnimation) {
            this.cleanupAnimation();
            this.cleanupAnimation = undefined;
        }
        // Always reset isAnimating when cleaning up
        this.isAnimating = false;
    }
    render() {
        const total = this.payments.reduce((prev, curr) => prev + curr.amount, 0);
        const isOpen = this._expanded;
        return (h(Host, { key: 'd24d3a3d504e3b839a853c4fff7875f8fe063174' }, h("div", { key: '77d4f122d8005faac6a973ec6cb7281028e7e8c8', class: "ir-revenue-row", "data-open": isOpen ? 'true' : 'false' }, h("button", { key: 'bc3fc3ca479426565c58cbda3aff9745c213a4e7', type: "button", class: "ir-revenue-row__title", "aria-expanded": isOpen ? 'true' : 'false', "aria-controls": this.contentId, "aria-busy": this.isAnimating ? 'true' : 'false', onClick: this.onHeaderClick, onKeyDown: this.onHeaderKeyDown, disabled: this.isAnimating }, h("div", { key: '38e5152466ec440a6551c2ec009b350987148bf6', class: "ir-revenue-row__header-left" }, h("ir-icons", { key: '5d28eb097c9477f00a10f4a6f95746ac01c46970', name: "angle-down", class: `ir-revenue-row__toggle ${isOpen ? 'is-open' : ''}`, "aria-hidden": "true" }), h("p", { key: '3cb6dc3d87cbca72c6aa71e407b76c7665455d03', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: '66f7a49658dda7c4858051e86d2d91f123d22402', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '357e4a5996c6905627bc8f8b45a3f78e8cba7e4a', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '79d1100d8407dcf996a80ea2e2ad82083d4b92af', class: "ir-revenue-row__details", id: this.contentId, ref: el => (this.detailsEl = el), "data-expanded": isOpen ? 'true' : null, role: "region", "aria-label": `${this.groupName} transactions`, "aria-hidden": isOpen ? 'false' : 'true' }, h("div", { key: '65ea503d2e30a5211434b65e0352aa2cb5e39f08', class: "ir-revenue-row__details-inner", ref: el => (this.contentEl = el) }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
    }
    get host() { return this; }
    static get watchers() { return {
        "expanded": ["watchExpanded"]
    }; }
    static get style() { return IrRevenueRowStyle0; }
}, [2, "ir-revenue-row", {
        "payments": [16],
        "groupName": [1, "group-name"],
        "defaultExpanded": [4, "default-expanded"],
        "expanded": [4],
        "_expanded": [32]
    }, undefined, {
        "expanded": ["watchExpanded"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-revenue-row", "ir-button", "ir-icons", "ir-revenue-row-details"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-revenue-row":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrRevenueRow);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-revenue-row-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrRevenueRow as I, defineCustomElement as d };

//# sourceMappingURL=ir-revenue-row2.js.map