import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { D as Debounce } from './debounce.js';
import { T as Token } from './Token.js';
import { B as BookingListingService } from './booking_listing.service.js';
import { d as defineCustomElement$4 } from './ir-autocomplete2.js';
import { d as defineCustomElement$3 } from './ir-autocomplete-option2.js';
import { d as defineCustomElement$2 } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irPmsSearchCss = ":host{display:block}.pms-autocomplete__end-slot{display:flex;align-items:center;gap:0.5rem}.pms-search__autocomplete::part(listbox){max-height:250px;width:max-content;max-width:350px}.pms-search__option{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.pms-search__option-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pms-search__option-status{flex-shrink:0}.pms-search__empty{display:flex;align-items:center;flex-direction:column;gap:0.75rem;padding:0.75rem 0.9rem;border-radius:0.75rem}.pms-search__empty-icon{font-size:1.1rem;opacity:0.7;margin-top:0.15rem}.pms-search__empty-content{display:flex;flex-direction:column;align-items:center;gap:0.15rem;min-width:0}.pms-search__empty-title{font-weight:600;line-height:1.2}.pms-search__empty-subtitle{font-size:0.875rem;opacity:0.8;line-height:1.25}.pms-search__empty-example{font-weight:600;opacity:0.95}.pms-search__option{display:grid;grid-template-columns:120px \n    1fr ;align-items:center;gap:1rem}.pms-search__option-icon{width:1.5625rem;flex-shrink:0}.pms-search__option-bookings{margin:0;padding:0;display:flex;flex-direction:column;line-height:1.2}.pms-search__option-booking{font-size:0.875rem;font-weight:500}.pms-search__option-channel-booking{font-size:0.75rem}.pms-search__option-label{font-size:0.875rem;font-weight:500;white-space:nowrap}.pms-search__option-status{margin-left:auto}.pms-search__option-icon{width:1rem}.pms-search__option-status,.pms-search__autocomplete-option::part(checked-icon){display:none}.pms-search__autocomplete-option::part(start){padding-inline-start:0.5rem}.pms-search__option-label,.pms-search__option-booking{font-size:1rem}@media (width >= 40rem){.pms-search__option-icon{width:1.5625rem;flex-shrink:0}}@media (min-width: 768px){.pms-search__autocomplete::part(listbox){width:auto;max-width:var(--auto-size-available-width)}.pms-search__option-status{display:inline-flex}}";
const IrPmsSearchStyle0 = irPmsSearchCss;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrPmsSearch = /*@__PURE__*/ proxyCustomElement(class IrPmsSearch extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.comboboxSelect = createEvent(this, "combobox-select", 7);
    }
    propertyid;
    ticket;
    shortcutHint = null;
    bookings = [];
    isLoading;
    tokenService = new Token();
    bookingListingService = new BookingListingService();
    comboboxSelect;
    autoCompleteRef;
    componentWillLoad() {
        document.addEventListener('keydown', this.focusInput);
        this.detectShortcutHint();
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
        }
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.focusInput);
    }
    handleTicketChange(newValue, oldValue) {
        console.log(this.ticket);
        if (newValue !== oldValue && newValue) {
            this.tokenService.setToken(this.ticket);
        }
    }
    detectShortcutHint() {
        // Hide on mobile / touch devices
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) {
            this.shortcutHint = null;
            return;
        }
        // Detect macOS
        const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
        this.shortcutHint = isMac ? '⌘ K' : 'Ctrl K';
    }
    focusInput = (event) => {
        const isK = event.key.toLowerCase() === 'k';
        const isCmdOrCtrl = event.metaKey || event.ctrlKey;
        if (isK && isCmdOrCtrl) {
            event.preventDefault();
            // this.pickerInputRef?.focusInput();
            console.log(this.autoCompleteRef);
            this.autoCompleteRef.focusInput();
        }
    };
    async fetchBookings(event) {
        // throw new Error('Method not implemented.');
        event.stopImmediatePropagation();
        event.stopPropagation();
        const value = event.detail;
        this.autoCompleteRef.hide();
        if (!value) {
            return;
        }
        const isNumber = /^(?:-?\d+|.{3}-.*)$/.test(value);
        this.isLoading = true;
        this.bookings = await this.bookingListingService.getExposedBookings({
            book_nbr: isNumber ? value : null,
            name: isNumber ? null : value,
            property_id: this.propertyid,
            filter_type: 1,
            from: '2026-01-01',
            to: '2026-01-08',
            balance_filter: '0',
            start_row: 0,
            end_row: 20,
            total_count: 0,
            booking_status: '',
            affiliate_id: 0,
            is_mpo_managed: false,
            is_mpo_used: false,
            is_for_mobile: false,
            is_combined_view: false,
            is_to_export: false,
            property_ids: null,
            channel: '',
        }, { skipStore: true });
        this.autoCompleteRef.show();
        this.isLoading = false;
    }
    handleComboboxSelect(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.comboboxSelect.emit({
            item: {
                label: '',
                value: event.detail,
            },
        });
    }
    render() {
        return (h(Host, { key: 'b93c0e01c54983feabe871c564e9393faef2d6bb' }, h("ir-autocomplete", { key: '34ef287887739a8bd497beabb39598a0ae6c376a', class: "pms-search__autocomplete", placeholder: "Booking# or guest name", ref: el => (this.autoCompleteRef = el), "onCombobox-change": event => this.handleComboboxSelect(event), "onText-change": event => this.fetchBookings(event), pill: true, appearance: "filled" }, h("wa-icon", { key: 'a9c3c74d9d36729679fec61f16ef8927508ce21f', name: "magnifying-glass", slot: "start" }), h("div", { key: '17565f978c48c8c5c6cb904f808949a449ca51f1', slot: "end", class: "pms-autocomplete__end-slot" }, this.isLoading && h("wa-spinner", { key: '220e45483cd8f1f906524b9279601817166fa126' }), this.shortcutHint && h("span", { key: '6d793a7fcea92bc045275761a719638763231be2' }, this.shortcutHint)), this.bookings?.length === 0 && !this.isLoading && (h("div", { key: 'ab5e04f029bee9a666dd175050b046dafe01cc84', class: "pms-search__empty", role: "status", "aria-live": "polite" }, h("wa-icon", { key: '7cbdf5c141ae08e0840e5c3eff0c8f4053e13ae4', name: "circle-info", "aria-hidden": "true" }), h("div", { key: 'abacd0eb073b0bc8a297656fe7d1d642527b571b', class: "pms-search__empty-content" }, h("div", { key: '54c493430d37ef61f6709f537c3471d728510aea', class: "pms-search__empty-title" }, "No results found")))), this.bookings.map(b => {
            const label = `${b.booking_nbr}  ${b.guest.first_name} ${b.guest.last_name}`;
            return (h("ir-autocomplete-option", { class: "pms-search__autocomplete-option", value: b.booking_nbr, label: label }, h("img", { slot: "start", class: "pms-search__option-icon", src: b.origin.Icon, alt: b.origin.Label }), h("div", { class: "pms-search__option" }, h("p", { class: "pms-search__option-bookings" }, h("span", { class: "pms-search__option-booking" }, b.booking_nbr), b.channel_booking_nbr && h("span", { class: "pms-search__option-channel-booking" }, b.channel_booking_nbr)), h("span", { class: "pms-search__option-label" }, b.guest.first_name, " ", b.guest.last_name)), h("ir-booking-status-tag", { slot: "end", class: "pms-search__option-status", status: b.status })));
        }))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
    static get style() { return IrPmsSearchStyle0; }
}, [1, "ir-pms-search", {
        "propertyid": [1],
        "ticket": [1],
        "shortcutHint": [32],
        "bookings": [32],
        "isLoading": [32]
    }, undefined, {
        "ticket": ["handleTicketChange"]
    }]);
__decorate([
    Debounce(300)
], IrPmsSearch.prototype, "fetchBookings", null);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-pms-search", "ir-autocomplete", "ir-autocomplete-option", "ir-booking-status-tag", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-pms-search":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPmsSearch);
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-autocomplete-option":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPmsSearch as I, defineCustomElement as d };

//# sourceMappingURL=ir-pms-search2.js.map