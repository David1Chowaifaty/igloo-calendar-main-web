import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-b3dce66a.js';
import { f as formatAmount } from './utils-1819eb32.js';
import { c as calendar_data } from './calendar-data-8a36a1b2.js';
import { _ as _formatTime } from './functions-14871918.js';
import './moment-ab846cee.js';
import './index-1e1f097b.js';
import './locales.store-f4150353.js';
import './index-a124d225.js';
import './axios-aa1335b8.js';

const irAccordionCss = ":host{--ir-acc-duration:220ms;--ir-acc-ease:cubic-bezier(0.2, 0.8, 0.2, 1);--ir-acc-border:#e5e7eb;--ir-acc-radius:6px;--ir-acc-bg:#fff;--ir-acc-focus:#3b82f6;--ir-acc-space-2:0.5rem;--ir-acc-space-3:0.75rem;--ir-acc-space-4:1rem;display:block}.ir-accordion{border:1px solid var(--ir-acc-border);border-radius:var(--ir-acc-radius);background:var(--ir-acc-bg);overflow:hidden}.ir-accordion__trigger{display:flex;align-items:center;justify-content:flex-start;gap:var(--ir-acc-space-2);width:100%;padding:var(--ir-acc-space-4);background:transparent;border:none;cursor:pointer;text-align:left;font:inherit;color:inherit;transition:background-color 0.15s ease}.ir-accordion__trigger:hover:not(:disabled){background:rgba(0, 0, 0, 0.02)}.ir-accordion__trigger:disabled{opacity:0.6;cursor:not-allowed}.ir-accordion__trigger:focus,.ir-accordion__trigger:focus-visible{outline:2px solid var(--ir-acc-focus);outline-offset:-2px}.ir-accordion__trigger:focus:not(:focus-visible){outline:none}.ir-accordion__caret{flex-shrink:0;transition:transform var(--ir-acc-duration) var(--ir-acc-ease);transform:rotate(-90deg)}.ir-accordion[data-open='true'] .ir-accordion__caret,.ir-accordion__caret.is-open{transform:rotate(0deg)}.ir-accordion__trigger-content{flex:1;min-width:0;}.ir-accordion__content{transition:height var(--ir-acc-duration) var(--ir-acc-ease);will-change:height}.ir-accordion__content:not([data-expanded='true']){height:0 !important;overflow:hidden !important;visibility:hidden}.ir-accordion__content[data-expanded='true']{visibility:visible}.ir-accordion__content-inner{padding:var(--ir-acc-space-3) var(--ir-acc-space-4)}@media (prefers-reduced-motion: reduce){.ir-accordion__caret{transition:none}.ir-accordion__content{transition:none}}";
const IrAccordionStyle0 = irAccordionCss;

let accId = 0;
const IrAccordion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.irToggle = createEvent(this, "ir-toggle", 7);
    }
    get host() { return getElement(this); }
    /** Start expanded */
    defaultExpanded = false;
    /** Optional controlled prop: when provided, component follows this value */
    expanded;
    /** Show caret icon */
    caret = true;
    /** Caret icon name */
    caretIcon = 'angle-down';
    /** Fired after expansion state changes */
    irToggle;
    _expanded = false;
    detailsEl;
    contentEl;
    // private triggerBtn?: HTMLButtonElement;
    contentId = `ir-accordion-content-${++accId}`;
    isAnimating = false;
    cleanupAnimation;
    componentWillLoad() {
        this._expanded = this.expanded ?? this.defaultExpanded;
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
                this.show();
            }
            else {
                this.hide();
            }
            if (shouldEmit) {
                this.irToggle.emit({ expanded });
            }
        }
    }
    async show() {
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
    async hide() {
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
        this.expanded = true;
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
        this.expanded = false;
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
    onTriggerClick = () => {
        // Don't allow clicks during animation
        if (this.isAnimating) {
            return;
        }
        const nextExpanded = !this._expanded;
        this.irToggle.emit({ expanded: nextExpanded });
        this.updateExpansion(nextExpanded, true);
    };
    onTriggerKeyDown = (ev) => {
        // Allow keyboard toggle with Enter/Space
        if ((ev.key === 'Enter' || ev.key === ' ') && !this.isAnimating) {
            ev.preventDefault();
            this.onTriggerClick();
        }
    };
    render() {
        const isOpen = this._expanded;
        return (h(Host, { key: 'c61153dca64b4daa04eb1f96b877d08b60383cf3' }, h("div", { key: 'eca8ed6928897b9beb8acc33bcb5e090478f6d7a', part: "base", class: "ir-accordion", "data-open": isOpen ? 'true' : 'false' }, h("button", { key: '9f9ee9f8eb92c939ad7b525c015e0d9a333cf6de', type: "button", class: "ir-accordion__trigger", "aria-expanded": isOpen ? 'true' : 'false', "aria-controls": this.contentId, "aria-busy": this.isAnimating ? 'true' : 'false', onClick: this.onTriggerClick, onKeyDown: this.onTriggerKeyDown, disabled: this.isAnimating, part: "trigger" }, this.caret && h("ir-icons", { key: 'f20eb3568329d62f9241bfaf0566d065eaacb2fb', name: 'angle-down', class: `ir-accordion__caret ${isOpen ? 'is-open' : ''}`, "aria-hidden": "true" }), h("div", { key: 'e531d791b6ef2bf04cb2de5459af0a31a050a9bf', class: "ir-accordion__trigger-content" }, h("slot", { key: '474163210d0a61bf480c87774d08cf7f6918e499', name: "trigger" }))), h("div", { key: 'c62753b1aa6f608a8bbd4cee7622a35a468708e9', class: "ir-accordion__content", id: this.contentId, ref: el => (this.detailsEl = el), "data-expanded": isOpen ? 'true' : null, role: "region", "aria-hidden": isOpen ? 'false' : 'true' }, h("div", { key: '87767f6245c9275bdf7f8fea07de6739a62885ca', class: "ir-accordion__content-inner", part: "content", ref: el => (this.contentEl = el) }, h("slot", { key: 'bcbb430e85e7d09e3d7e9bf548b4cb6f3e0a1819' }))))));
    }
    static get watchers() { return {
        "expanded": ["watchExpanded"]
    }; }
};
IrAccordion.style = IrAccordionStyle0;

const irRevenueRowDetailsCss = ".sc-ir-revenue-row-details-h{border-bottom:1px solid var(--ir-border, #e5e7eb);font-size:0.875rem}.ir-revenue-row-detail.sc-ir-revenue-row-details,.ir-revenue-row-detail__info.sc-ir-revenue-row-details{display:flex;gap:0.5rem;padding:0.25rem;flex-direction:column}.ir-revenue-row-detail.sc-ir-revenue-row-details:hover{background:#f4f5fa}.ir-revenue-row-detail__booking.sc-ir-revenue-row-details{display:inline-flex}.ir-revenue-row-detail__booking-btn.sc-ir-revenue-row-details{display:inline-flex}.ir-revenue-row-detail.sc-ir-revenue-row-details:last-child{border-bottom:none}.ir-revenue-row-detail__label.sc-ir-revenue-row-details{font-weight:500;color:var(--ir-muted, #6b7280);margin-right:0.25rem}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{font-weight:600;text-align:right;white-space:nowrap;flex:1 1 0%}.ir-revenue-row-detail__amount.negative.sc-ir-revenue-row-details{color:var(--ir-danger, #dc2626)}.ir-revenue-row-detail__meta.sc-ir-revenue-row-details{display:flex;align-items:center}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:none}.ir-revenue-row-detail__time.sc-ir-revenue-row-details{display:flex;gap:0.5rem}.ir-revenue-row-detail__time.sc-ir-revenue-row-details .ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:flex;flex:1 1 0%;justify-content:end}@media (min-width: 640px){.ir-revenue-row-detail.sc-ir-revenue-row-details,.ir-revenue-row-detail__info.sc-ir-revenue-row-details{flex-direction:row;align-items:center;gap:1rem}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:inline-flex;justify-content:flex-end}.ir-revenue-row-detail__time.sc-ir-revenue-row-details .ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:none}}@media (min-width: 1024px){.ir-revenue-row-detail__info.sc-ir-revenue-row-details{width:calc(40vw + 1.375rem - 0.25rem)}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{justify-content:flex-start}}";
const IrRevenueRowDetailsStyle0 = irRevenueRowDetailsCss;

const IrRevenueRowDetails = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.revenueOpenSidebar = createEvent(this, "revenueOpenSidebar", 7);
    }
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '89b36b42c37ae3979735885be1148c97e85b60de' }, h("div", { key: '82f180354eeaaea401e50e256350e6e43216a72f', class: "ir-revenue-row-detail" }, h("div", { key: '308ab261d2bd7fd06d4daf02e0d9367e0c79831b', class: "ir-revenue-row-detail__info" }, h("div", { key: 'd8e27c4667e839c9026e1e0f0233a9ddb74e110f', class: "ir-revenue-row-detail__time" }, h("span", { key: 'b061e9095553b207300abe074b90f6b42175f35e', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '05e884bcbcf7d67f5f8c232aff595f83f74f7cec', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '173ef5a56feca78cb81a91ec9aaa5f17c25dcfb7', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'd6ef1c3f3ffdb1dd62e2f2aec73cbdc4702d7ef6', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'a97b7e6ddfabe393d28309541f954d4119b82bf4', class: "ir-revenue-row-detail__user" }, h("span", { key: 'd17020c4f40e82be78e4458e84685893095565d5', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '7504488a1345ed36ec530a70a820e96b5c3c49d8', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'df34816dea13724d4d4a7a580dac959fb2fa0880', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'e96435981ea7c94e9b240276fefda5d2566c4a0f', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '341266154b90d3dc234c9e0e7a4071ad2970e3d8', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
    }
};
IrRevenueRowDetails.style = IrRevenueRowDetailsStyle0;

export { IrAccordion as ir_accordion, IrRevenueRowDetails as ir_revenue_row_details };

//# sourceMappingURL=ir-accordion_2.entry.js.map