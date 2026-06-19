import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-BvoylR5O.js';
import { i as formatAmount } from './utils-BDVP7IDp.js';
import { c as calendar_data } from './calendar-data-Cnv5ncgJ.js';
import { _ as _formatTime } from './functions-81yL-Vms.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './locales.store-BZFQn8-s.js';
import './index-U7zaiBri.js';
import './type-D7rOPtKA.js';

const irAccordionCss = () => `:host{--ir-acc-duration:220ms;--ir-acc-ease:cubic-bezier(0.2, 0.8, 0.2, 1);--ir-acc-border:var(--wa-color-surface-border);--ir-acc-radius:6px;--ir-acc-bg:var(--wa-color-surface-default);--ir-acc-focus:var(--wa-color-brand-fill-loud);--ir-acc-space-2:0.5rem;--ir-acc-space-3:0.75rem;--ir-acc-space-4:1rem;display:block}.ir-accordion{border:1px solid var(--ir-acc-border);border-radius:var(--ir-acc-radius);background:var(--ir-acc-bg);overflow:hidden}.ir-accordion__trigger{display:flex;align-items:center;justify-content:flex-start;gap:var(--ir-acc-space-2);width:100%;padding:var(--ir-acc-space-4);background:transparent;border:none;cursor:pointer;text-align:left;font:inherit;color:inherit;transition:background-color 0.15s ease}.ir-accordion__trigger:hover:not(:disabled){background:rgba(0, 0, 0, 0.02)}.ir-accordion__trigger:disabled{opacity:0.6;cursor:not-allowed}.ir-accordion__trigger:focus,.ir-accordion__trigger:focus-visible{outline:2px solid var(--ir-acc-focus);outline-offset:-2px}.ir-accordion__trigger:focus:not(:focus-visible){outline:none}.ir-accordion__caret{flex-shrink:0;transition:transform var(--ir-acc-duration) var(--ir-acc-ease);transform:rotate(-90deg)}.ir-accordion[data-open='true'] .ir-accordion__caret,.ir-accordion__caret.is-open{transform:rotate(0deg)}.ir-accordion__trigger-content{flex:1;min-width:0;}.ir-accordion__content{transition:height var(--ir-acc-duration) var(--ir-acc-ease);will-change:height}.ir-accordion__content:not([data-expanded='true']){height:0 !important;overflow:hidden !important;visibility:hidden}.ir-accordion__content[data-expanded='true']{visibility:visible}.ir-accordion__content-inner{padding:var(--ir-acc-space-3) var(--ir-acc-space-4)}@media (prefers-reduced-motion: reduce){.ir-accordion__caret{transition:none}.ir-accordion__content{transition:none}}`;

let accId = 0;
const IrAccordion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.irToggle = createEvent(this, "ir-toggle");
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
        return (h(Host, { key: 'd286e940a35e7b3981bad55e24989d7142908eda' }, h("div", { key: '87410ce85c685266c3897338264f061d27c4aa73', part: "base", class: "ir-accordion", "data-open": isOpen ? 'true' : 'false' }, h("button", { key: 'ca4a94858ebdc516a7f6842d7fbcb673f325e2ae', type: "button", class: "ir-accordion__trigger", "aria-expanded": isOpen ? 'true' : 'false', "aria-controls": this.contentId, "aria-busy": this.isAnimating ? 'true' : 'false', onClick: this.onTriggerClick, onKeyDown: this.onTriggerKeyDown, disabled: this.isAnimating, part: "trigger" }, this.caret && h("ir-icons", { key: 'd14907a3115c5de10e36c01d0a1de48eab8233b5', name: 'angle-down', class: `ir-accordion__caret ${isOpen ? 'is-open' : ''}`, "aria-hidden": "true" }), h("div", { key: '73e99a9f82ce36845f753341f0364fdc93367632', class: "ir-accordion__trigger-content" }, h("slot", { key: '2411f08aa7294529bce72c562accb322ef53f385', name: "trigger" }))), h("div", { key: '88965c88323751dc34cc7cfeb1a40b7f56a2703b', class: "ir-accordion__content", id: this.contentId, ref: el => (this.detailsEl = el), "data-expanded": isOpen ? 'true' : null, role: "region", "aria-hidden": isOpen ? 'false' : 'true' }, h("div", { key: '07bb0cb28e8e62700a4cb6bbe88a787e906e4a1c', class: "ir-accordion__content-inner", part: "content", ref: el => (this.contentEl = el) }, h("slot", { key: 'd2c27ff144ff79460b72ca8f929cb78502905cc9' }))))));
    }
    static get watchers() { return {
        "expanded": [{
                "watchExpanded": 0
            }]
    }; }
};
IrAccordion.style = irAccordionCss();

const irRevenueRowDetailsCss = () => `.sc-ir-revenue-row-details-h{border-bottom:1px solid var(--ir-border, #e5e7eb);font-size:0.875rem}.ir-revenue-row-detail.sc-ir-revenue-row-details,.ir-revenue-row-detail__info.sc-ir-revenue-row-details{display:flex;gap:0.5rem;padding:0.25rem;flex-direction:column;color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:transparent;border-color:transparent}.ir-revenue-row-detail.sc-ir-revenue-row-details:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet))}.ir-revenue-row-detail.sc-ir-revenue-row-details:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active))}.ir-revenue-row-detail__booking.sc-ir-revenue-row-details{display:inline-flex}.ir-revenue-row-detail__booking-btn.sc-ir-revenue-row-details{display:inline-flex}.ir-revenue-row-detail.sc-ir-revenue-row-details:last-child{border-bottom:none}.ir-revenue-row-detail__label.sc-ir-revenue-row-details{font-weight:500;color:var(--wa-color-text-quiet, #6b7280);margin-right:0.25rem}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{font-weight:600;text-align:right;white-space:nowrap;flex:1 1 0%}.ir-revenue-row-detail__amount.negative.sc-ir-revenue-row-details{color:var(--wa-color-danger-fill-loud, #dc2626)}.ir-revenue-row-detail__meta.sc-ir-revenue-row-details{display:flex;align-items:center}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:none}.ir-revenue-row-detail__time.sc-ir-revenue-row-details{display:flex;gap:0.5rem}.ir-revenue-row-detail__time.sc-ir-revenue-row-details .ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:flex;flex:1 1 0%;justify-content:end}@media (min-width: 640px){.ir-revenue-row-detail.sc-ir-revenue-row-details,.ir-revenue-row-detail__info.sc-ir-revenue-row-details{flex-direction:row;align-items:center;gap:1rem}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:inline-flex;justify-content:flex-end}.ir-revenue-row-detail__time.sc-ir-revenue-row-details .ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:none}}@media (min-width: 1024px){.ir-revenue-row-detail__info.sc-ir-revenue-row-details{width:calc(40vw + 1.375rem - 0rem)}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{justify-content:flex-start}}`;

const IrRevenueRowDetails = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.revenueOpenSidebar = createEvent(this, "revenueOpenSidebar");
    }
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '42012fad31d50cd736057185f51e314e9566ea0c' }, h("div", { key: 'cb65b3f9c3767ae69a4fbf2c55ec6e94807b97a3', class: "ir-revenue-row-detail" }, h("div", { key: '796750ff4f1ca9e9016cbd4cf13550b8176fced6', class: "ir-revenue-row-detail__info" }, h("div", { key: '3dbc442874240167c9d79e9f1499022253080bc5', class: "ir-revenue-row-detail__time" }, h("span", { key: '27b5d6ac64ba2a386db93203398da00817e5bd11', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '254afafef12410924600478489ead0b8726ba039', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'b928a3b57f680644dce6c51d1545b00c70334f18', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '05c84648d6c21f85e09915c34b1514d632358a1c', class: "ir-revenue-row-detail__meta" }, h("div", { key: '87eb2c6b2faac241131a41a277fd26b464b4d342', class: "ir-revenue-row-detail__user" }, h("span", { key: '7c3e8263be68ebaf01976e7846e2dbe420421dd7', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '13d80cb5b03a4dfa19e8d6a9ae5dd788cb3cd5e7', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'a6f1fd1ed15ff4a027374d832cb7d7284bea01ff', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: '311d058e5e1fc89e5617bd9370dde184c6ee71cf', link: true, style: { marginLeft: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, this.payment.bookingNbr)))), h("div", { key: 'c7d59720f51112bc58f8d97bf5b990a2342a7725', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
    }
};
IrRevenueRowDetails.style = irRevenueRowDetailsCss();

export { IrAccordion as ir_accordion, IrRevenueRowDetails as ir_revenue_row_details };
