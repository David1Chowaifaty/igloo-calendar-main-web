'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const utils = require('./utils-54f6f6b7.js');
const calendarData = require('./calendar-data-0598de26.js');
const functions = require('./functions-1d46da3c.js');
require('./moment-1780b03a.js');
require('./index-8bb117a0.js');
require('./locales.store-32782582.js');
require('./index-fbf1fe1d.js');

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
        return (index.h(index.Host, { key: 'fde3b4d5b8487b7e71ca10efe5ff6407b540b24f' }, index.h("div", { key: 'e2053a240e0e9fa26ccde1f472de134fcc833802', part: "base", class: "ir-accordion", "data-open": isOpen ? 'true' : 'false' }, index.h("button", { key: '83faca0b4511a82e08065382e733b80ff2762f42', type: "button", class: "ir-accordion__trigger", "aria-expanded": isOpen ? 'true' : 'false', "aria-controls": this.contentId, "aria-busy": this.isAnimating ? 'true' : 'false', onClick: this.onTriggerClick, onKeyDown: this.onTriggerKeyDown, disabled: this.isAnimating, part: "trigger" }, this.caret && index.h("ir-icons", { key: 'f2676766a6b0dab82e26a9b5cc9d97755382bf98', name: 'angle-down', class: `ir-accordion__caret ${isOpen ? 'is-open' : ''}`, "aria-hidden": "true" }), index.h("div", { key: '867959cceb7f393842f0deb2aa8b07fda4a1d40d', class: "ir-accordion__trigger-content" }, index.h("slot", { key: '60d519bb0e5099cdafd233166eb9a18f75a4ebe0', name: "trigger" }))), index.h("div", { key: '4d1f4e3b03fcfbbeddb948304a4269ae21ccc08c', class: "ir-accordion__content", id: this.contentId, ref: el => (this.detailsEl = el), "data-expanded": isOpen ? 'true' : null, role: "region", "aria-hidden": isOpen ? 'false' : 'true' }, index.h("div", { key: 'a921f24ded340a9718aa3d351e68bbb6cfe15c56', class: "ir-accordion__content-inner", part: "content", ref: el => (this.contentEl = el) }, index.h("slot", { key: 'aba8508f629dd07a85a09beb3461b8c82efa278e' }))))));
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
        return (index.h(index.Host, { key: 'ab573c773597e42d16479650002f21aa98c90574' }, index.h("div", { key: '8723e534ac57c99a5a618f8501364f7e4e783de6', class: "ir-revenue-row-detail" }, index.h("div", { key: '0957a07e0466dcc6c04804b25e30d7de3df52eb5', class: "ir-revenue-row-detail__info" }, index.h("div", { key: '6c1716ae984e6e256ea0278d7791c263573b19cb', class: "ir-revenue-row-detail__time" }, index.h("span", { key: '0a471b8966bd8d54ac6e3ab649a102f18c54a746', class: "ir-revenue-row-detail__label" }, this.payment.date), index.h("span", { key: 'd99329b9aad9033cac205afdc71e7470dcde48fb', class: "ir-revenue-row-detail__value" }, functions._formatTime(this.payment.hour.toString(), this.payment.minute.toString())), index.h("div", { key: '4d0e29708c7219e1508a2dc42197ca6d44658300', class: "ir-revenue-row-detail__amount" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, this.payment.amount))), index.h("div", { key: '2b26a3ca2752f9134d9957f92751d1c9a3c4c54d', class: "ir-revenue-row-detail__meta" }, index.h("div", { key: '88b7cdfd84e5cf9e29d1bfe21daa0f922aab384c', class: "ir-revenue-row-detail__user" }, index.h("span", { key: '9b132e36b128a4fb84b4f81f6a197f75959c740e', class: "ir-revenue-row-detail__label" }, "User:"), index.h("span", { key: 'cf4fff829e30f0196398f1b0c4450d8b6289dca1', class: "ir-revenue-row-detail__value" }, this.payment.user)), index.h("div", { key: '09115082497a7f4c98785cff0775009c2fb684f2', class: "ir-revenue-row-detail__booking" }, index.h("ir-button", { key: 'a448ff8f1666d90d0d85495bb8d669b0bd5c4b30', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), index.h("div", { key: '05fbec2c43723a95a9fa1551d4ad875b81bbab6f', class: "ir-revenue-row-detail__amount" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, this.payment.amount)))));
    }
};
IrRevenueRowDetails.style = IrRevenueRowDetailsStyle0;

exports.ir_accordion = IrAccordion;
exports.ir_revenue_row_details = IrRevenueRowDetails;

//# sourceMappingURL=ir-accordion_2.cjs.entry.js.map