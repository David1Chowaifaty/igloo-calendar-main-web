'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const utils = require('./utils-bf9b1b25.js');
const calendarData = require('./calendar-data-960b69ba.js');
const functions = require('./functions-1d46da3c.js');
require('./moment-1780b03a.js');
require('./index-63734c32.js');
require('./axios-6e678d52.js');
require('./locales.store-a1ac5174.js');
require('./index-7564ffa1.js');

const irAccordionCss = ":host{--ir-acc-duration:220ms;--ir-acc-ease:cubic-bezier(0.2, 0.8, 0.2, 1);--ir-acc-border:#e5e7eb;--ir-acc-radius:6px;--ir-acc-bg:#fff;--ir-acc-focus:#3b82f6;--ir-acc-space-2:0.5rem;--ir-acc-space-3:0.75rem;--ir-acc-space-4:1rem;display:block}.ir-accordion{border:1px solid var(--ir-acc-border);border-radius:var(--ir-acc-radius);background:var(--ir-acc-bg);overflow:hidden}.ir-accordion__trigger{display:flex;align-items:center;justify-content:flex-start;gap:var(--ir-acc-space-2);width:100%;padding:var(--ir-acc-space-4);background:transparent;border:none;cursor:pointer;text-align:left;font:inherit;color:inherit;transition:background-color 0.15s ease}.ir-accordion__trigger:hover:not(:disabled){background:rgba(0, 0, 0, 0.02)}.ir-accordion__trigger:disabled{opacity:0.6;cursor:not-allowed}.ir-accordion__trigger:focus,.ir-accordion__trigger:focus-visible{outline:2px solid var(--ir-acc-focus);outline-offset:-2px}.ir-accordion__trigger:focus:not(:focus-visible){outline:none}.ir-accordion__caret{flex-shrink:0;transition:transform var(--ir-acc-duration) var(--ir-acc-ease);transform:rotate(-90deg)}.ir-accordion[data-open='true'] .ir-accordion__caret,.ir-accordion__caret.is-open{transform:rotate(0deg)}.ir-accordion__trigger-content{flex:1;min-width:0;}.ir-accordion__content{transition:height var(--ir-acc-duration) var(--ir-acc-ease);will-change:height}.ir-accordion__content:not([data-expanded='true']){height:0 !important;overflow:hidden !important;visibility:hidden}.ir-accordion__content[data-expanded='true']{visibility:visible}.ir-accordion__content-inner{padding:var(--ir-acc-space-3) var(--ir-acc-space-4)}@media (prefers-reduced-motion: reduce){.ir-accordion__caret{transition:none}.ir-accordion__content{transition:none}}";
const IrAccordionStyle0 = irAccordionCss;

let accId = 0;
const IrAccordion = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irToggle = index.createEvent(this, "ir-toggle", 7);
        /** Start expanded */
        this.defaultExpanded = false;
        /** Show caret icon */
        this.caret = true;
        /** Caret icon name */
        this.caretIcon = 'angle-down';
        this._expanded = false;
        // private triggerBtn?: HTMLButtonElement;
        this.contentId = `ir-accordion-content-${++accId}`;
        this.isAnimating = false;
        this.onTriggerClick = () => {
            // Don't allow clicks during animation
            if (this.isAnimating) {
                return;
            }
            const nextExpanded = !this._expanded;
            this.irToggle.emit({ expanded: nextExpanded });
            this.updateExpansion(nextExpanded, true);
        };
        this.onTriggerKeyDown = (ev) => {
            // Allow keyboard toggle with Enter/Space
            if ((ev.key === 'Enter' || ev.key === ' ') && !this.isAnimating) {
                ev.preventDefault();
                this.onTriggerClick();
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
    render() {
        const isOpen = this._expanded;
        return (index.h(index.Host, { key: '4bff5974c6daac2553564141cc31f68c5e7056c7' }, index.h("div", { key: '17c0d5a0578503973a0d849b9df543539702a8ce', part: "base", class: "ir-accordion", "data-open": isOpen ? 'true' : 'false' }, index.h("button", { key: '5b55df5ec3dd49adf903d6a16b30e41e388b02b3', type: "button", class: "ir-accordion__trigger", "aria-expanded": isOpen ? 'true' : 'false', "aria-controls": this.contentId, "aria-busy": this.isAnimating ? 'true' : 'false', onClick: this.onTriggerClick, onKeyDown: this.onTriggerKeyDown, disabled: this.isAnimating, part: "trigger" }, this.caret && index.h("ir-icons", { key: 'ed6d27f0fbdb1fe6c7e784701eed7ee5b4b24158', name: 'angle-down', class: `ir-accordion__caret ${isOpen ? 'is-open' : ''}`, "aria-hidden": "true" }), index.h("div", { key: 'ff4047b4a3c3d06804c29c14825006b4afb9d259', class: "ir-accordion__trigger-content" }, index.h("slot", { key: '823db12fe2a813bfb8421bdcf1f82e028cd01e90', name: "trigger" }))), index.h("div", { key: '2581abcb975b26ea76dd18b6e2bba9ff65f8cf3d', class: "ir-accordion__content", id: this.contentId, ref: el => (this.detailsEl = el), "data-expanded": isOpen ? 'true' : null, role: "region", "aria-hidden": isOpen ? 'false' : 'true' }, index.h("div", { key: '0cd8ad194de080e145b52cbb3b16750ebc7a58ce', class: "ir-accordion__content-inner", part: "content", ref: el => (this.contentEl = el) }, index.h("slot", { key: '6bddfb0bc2ed648692176b75c913f633b1331621' }))))));
    }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "expanded": ["watchExpanded"]
    }; }
};
IrAccordion.style = IrAccordionStyle0;

const irRevenueRowDetailsCss = ".sc-ir-revenue-row-details-h{border-bottom:1px solid var(--ir-border, #e5e7eb);font-size:0.875rem}.ir-revenue-row-detail.sc-ir-revenue-row-details{display:flex;gap:0.5rem;padding:0.5rem 0;flex-direction:column}.ir-revenue-row-detail.sc-ir-revenue-row-details:hover{background:#f4f5fa}.ir-revenue-row-detail__booking.sc-ir-revenue-row-details{display:inline-flex}.ir-revenue-row-detail__booking-btn.sc-ir-revenue-row-details{display:inline-flex}.ir-revenue-row-detail.sc-ir-revenue-row-details:last-child{border-bottom:none}.ir-revenue-row-detail__label.sc-ir-revenue-row-details{font-weight:500;color:var(--ir-muted, #6b7280);margin-right:0.25rem}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{font-weight:600;text-align:right;white-space:nowrap;flex:1 1 0%}.ir-revenue-row-detail__amount.negative.sc-ir-revenue-row-details{color:var(--ir-danger, #dc2626)}.ir-revenue-row-detail__meta.sc-ir-revenue-row-details{display:flex;align-items:center}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:none}.ir-revenue-row-detail__time.sc-ir-revenue-row-details{display:flex;gap:0.5rem}.ir-revenue-row-detail__time.sc-ir-revenue-row-details .ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:flex;flex:1 1 0%;justify-content:end}@media (min-width: 640px){.ir-revenue-row-detail.sc-ir-revenue-row-details{flex-direction:row;align-items:center;gap:1rem}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:inline-flex;justify-content:flex-end}.ir-revenue-row-detail__time.sc-ir-revenue-row-details .ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:none}}";
const IrRevenueRowDetailsStyle0 = irRevenueRowDetailsCss;

const IrRevenueRowDetails = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.revenueOpenSidebar = index.createEvent(this, "revenueOpenSidebar", 7);
    }
    render() {
        return (index.h(index.Host, { key: '60f8f7be510da3bc8c931616d62a459ea263393f' }, index.h("div", { key: 'f1a067c53db6ee624e021488c0611b95e576d0c8', class: "ir-revenue-row-detail" }, index.h("div", { key: 'e8a4d0d1f06b529110af30321b0b8b4bdaa1b432', class: "ir-revenue-row-detail__time" }, index.h("span", { key: '1164fa99b832092d08eebb77cc9dd389e9c95604', class: "ir-revenue-row-detail__label" }, this.payment.date), index.h("span", { key: '35f12be860920940f130fce96a8c30759827bb7d', class: "ir-revenue-row-detail__value" }, functions._formatTime(this.payment.hour.toString(), this.payment.minute.toString())), index.h("div", { key: '2146c3c96deab0c7cce967775ac7936c36210457', class: "ir-revenue-row-detail__amount" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, this.payment.amount))), index.h("div", { key: 'd477b15299fe90e3dff9c509e05d2c67e636429d', class: "ir-revenue-row-detail__meta" }, index.h("div", { key: '4bf69431f972098991ab656e96f721c1cf7ce5bc', class: "ir-revenue-row-detail__user" }, index.h("span", { key: '1b52c66430818bc37f2045e0b8d2aea16c97ae44', class: "ir-revenue-row-detail__label" }, "User:"), index.h("span", { key: '7032fdadaa076123c5cc6657a59bc5411e5a529d', class: "ir-revenue-row-detail__value" }, this.payment.user)), index.h("div", { key: 'fbd108b7345794c6f7fac5e6b27ff64d4e167965', class: "ir-revenue-row-detail__booking" }, index.h("ir-button", { key: 'e55ee325d8403c653bf12acdaafd6abc7073ba94', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } }))), index.h("div", { key: 'bb0befe19bf3e935d75e3f87e2286b8e265500dc', class: "ir-revenue-row-detail__amount" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, this.payment.amount)))));
    }
};
IrRevenueRowDetails.style = IrRevenueRowDetailsStyle0;

exports.ir_accordion = IrAccordion;
exports.ir_revenue_row_details = IrRevenueRowDetails;

//# sourceMappingURL=ir-accordion_2.cjs.entry.js.map