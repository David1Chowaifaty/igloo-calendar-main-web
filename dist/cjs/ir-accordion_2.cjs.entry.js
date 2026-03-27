'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const utils = require('./utils-dc8cc4b1.js');
const calendarData = require('./calendar-data-0598de26.js');
const functions = require('./functions-337ee2a2.js');
require('./moment-1780b03a.js');
require('./index-8bb117a0.js');
require('./locales.store-32782582.js');
require('./index-fbf1fe1d.js');
require('./type-393ac773.js');

const irAccordionCss = ":host{--ir-acc-duration:220ms;--ir-acc-ease:cubic-bezier(0.2, 0.8, 0.2, 1);--ir-acc-border:#e5e7eb;--ir-acc-radius:6px;--ir-acc-bg:#fff;--ir-acc-focus:#3b82f6;--ir-acc-space-2:0.5rem;--ir-acc-space-3:0.75rem;--ir-acc-space-4:1rem;display:block}.ir-accordion{border:1px solid var(--ir-acc-border);border-radius:var(--ir-acc-radius);background:var(--ir-acc-bg);overflow:hidden}.ir-accordion__trigger{display:flex;align-items:center;justify-content:flex-start;gap:var(--ir-acc-space-2);width:100%;padding:var(--ir-acc-space-4);background:transparent;border:none;cursor:pointer;text-align:left;font:inherit;color:inherit;transition:background-color 0.15s ease}.ir-accordion__trigger:hover:not(:disabled){background:rgba(0, 0, 0, 0.02)}.ir-accordion__trigger:disabled{opacity:0.6;cursor:not-allowed}.ir-accordion__trigger:focus,.ir-accordion__trigger:focus-visible{outline:2px solid var(--ir-acc-focus);outline-offset:-2px}.ir-accordion__trigger:focus:not(:focus-visible){outline:none}.ir-accordion__caret{flex-shrink:0;transition:transform var(--ir-acc-duration) var(--ir-acc-ease);transform:rotate(-90deg)}.ir-accordion[data-open='true'] .ir-accordion__caret,.ir-accordion__caret.is-open{transform:rotate(0deg)}.ir-accordion__trigger-content{flex:1;min-width:0;}.ir-accordion__content{transition:height var(--ir-acc-duration) var(--ir-acc-ease);will-change:height}.ir-accordion__content:not([data-expanded='true']){height:0 !important;overflow:hidden !important;visibility:hidden}.ir-accordion__content[data-expanded='true']{visibility:visible}.ir-accordion__content-inner{padding:var(--ir-acc-space-3) var(--ir-acc-space-4)}@media (prefers-reduced-motion: reduce){.ir-accordion__caret{transition:none}.ir-accordion__content{transition:none}}";
const IrAccordionStyle0 = irAccordionCss;

let accId = 0;
const IrAccordion = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irToggle = index.createEvent(this, "ir-toggle", 7);
    }
    get host() { return index.getElement(this); }
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
        return (index.h(index.Host, { key: 'd24c36e8d1fa3bbfb478bc62bad91ce5fc389ff2' }, index.h("div", { key: '21d1ada794b2555720bd180d48fa92bb4a7ec518', part: "base", class: "ir-accordion", "data-open": isOpen ? 'true' : 'false' }, index.h("button", { key: 'd9d460901bfb7b35284e5fdba7c66b0447d0f4d4', type: "button", class: "ir-accordion__trigger", "aria-expanded": isOpen ? 'true' : 'false', "aria-controls": this.contentId, "aria-busy": this.isAnimating ? 'true' : 'false', onClick: this.onTriggerClick, onKeyDown: this.onTriggerKeyDown, disabled: this.isAnimating, part: "trigger" }, this.caret && index.h("ir-icons", { key: '961ce526a80d6f6d7f57f78e7e45947b1547669f', name: 'angle-down', class: `ir-accordion__caret ${isOpen ? 'is-open' : ''}`, "aria-hidden": "true" }), index.h("div", { key: 'b0d7173a995c1fec9dca4899cb4a2f50eaf0d871', class: "ir-accordion__trigger-content" }, index.h("slot", { key: '4aba4d378d7d18df1c25340091a909e571713d5c', name: "trigger" }))), index.h("div", { key: '5c97d9dac9ba503f033e0bf770283be5b0426b0f', class: "ir-accordion__content", id: this.contentId, ref: el => (this.detailsEl = el), "data-expanded": isOpen ? 'true' : null, role: "region", "aria-hidden": isOpen ? 'false' : 'true' }, index.h("div", { key: '78ab735b89eced73c54492950dc423a7187fb75c', class: "ir-accordion__content-inner", part: "content", ref: el => (this.contentEl = el) }, index.h("slot", { key: 'e023e738629b6121202f3d1db81a1ea419daf995' }))))));
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
        index.registerInstance(this, hostRef);
        this.revenueOpenSidebar = index.createEvent(this, "revenueOpenSidebar", 7);
    }
    payment;
    revenueOpenSidebar;
    render() {
        return (index.h(index.Host, { key: '6e8f30da809c1c6013707bff3486c3c93d2eaf56' }, index.h("div", { key: '5f8e5d4c5ebceb8063245942d9beb7353e1d1a9d', class: "ir-revenue-row-detail" }, index.h("div", { key: '3352c97b7165950eef8c0fc9d66c7f99ccf7a0e2', class: "ir-revenue-row-detail__info" }, index.h("div", { key: 'd954cb67349699a8cc07af5bdf70cce5ebb6e4d8', class: "ir-revenue-row-detail__time" }, index.h("span", { key: '78d6eccc448ffdec6253b5a3e7533c3b3f78425d', class: "ir-revenue-row-detail__label" }, this.payment.date), index.h("span", { key: '8b6412995e527e87a96d1717c234ad76b0b11991', class: "ir-revenue-row-detail__value" }, functions._formatTime(this.payment.hour.toString(), this.payment.minute.toString())), index.h("div", { key: '0b9ec24e14981078aaaf85e4e148a51d2bb394b9', class: "ir-revenue-row-detail__amount" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, this.payment.amount))), index.h("div", { key: '5bcfcd43ef0ba84c8ee900ff135b023edfbee082', class: "ir-revenue-row-detail__meta" }, index.h("div", { key: 'ec8a862d2f2fcaf2afbcd5d41b37933d775cb3e5', class: "ir-revenue-row-detail__user" }, index.h("span", { key: '504c531b0ebf0a06b894f344c3df52689592214c', class: "ir-revenue-row-detail__label" }, "User:"), index.h("span", { key: '3dc83241390c06dff27d83f9f88d6c5af37a7505', class: "ir-revenue-row-detail__value" }, this.payment.user)), index.h("div", { key: '99e062bc8950d5f510e32f1465ab392854733be6', class: "ir-revenue-row-detail__booking" }, index.h("ir-button", { key: '2a3e9baad2c74bcc5c549517145049265ad0b40c', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), index.h("div", { key: '9405b794d6bcdcc84706a9bb53cd00f771322077', class: "ir-revenue-row-detail__amount" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, this.payment.amount)))));
    }
};
IrRevenueRowDetails.style = IrRevenueRowDetailsStyle0;

exports.ir_accordion = IrAccordion;
exports.ir_revenue_row_details = IrRevenueRowDetails;

//# sourceMappingURL=ir-accordion_2.cjs.entry.js.map