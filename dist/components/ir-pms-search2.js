import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { B as BookingListingService } from './booking_listing.service.js';
import { d as defineCustomElement$2 } from './ir-picker2.js';
import { d as defineCustomElement$1 } from './ir-picker-item2.js';

const irPmsSearchCss = ":host{display:block}";
const IrPmsSearchStyle0 = irPmsSearchCss;

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
    pickerInputRef;
    tokenService = new Token();
    bookingListingService = new BookingListingService();
    comboboxSelect;
    componentWillLoad() {
        document.addEventListener('keydown', this.focusInput);
        this.detectShortcutHint();
        if (this.ticket) {
            console.log(this.ticket);
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
            this.pickerInputRef?.focusInput();
        }
    };
    async fetchBookings(event) {
        // throw new Error('Method not implemented.');
        event.stopImmediatePropagation();
        event.stopPropagation();
        const value = event.detail;
        const isNumber = !isNaN(Number(value));
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
        this.isLoading = false;
    }
    render() {
        return (h(Host, { key: '5c01ca8737f09826d4ea1838ddb03bfb76f97369' }, h("ir-picker", { key: 'a1b1fed39fc89bb861ea6d6369a02aa4ddc01673', loading: this.isLoading, "onText-change": event => this.fetchBookings(event), mode: "select-async", ref: el => (this.pickerInputRef = el), pill: true, appearance: "filled", "onCombobox-select": event => this.handleComboboxSelect(event) }, this.shortcutHint && h("span", { key: '27fb001cc25284772682628514313aad98d48f8d', slot: "end" }, this.shortcutHint), this.bookings.map(b => {
            const label = `${b.booking_nbr} ${b.guest.first_name} ${b.guest.last_name}`;
            return (h("ir-picker-item", { value: b.booking_nbr, label: label }, label));
        }))));
    }
    handleComboboxSelect(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.comboboxSelect.emit(event.detail);
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
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-pms-search", "ir-picker", "ir-picker-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-pms-search":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPmsSearch);
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPmsSearch as I, defineCustomElement as d };

//# sourceMappingURL=ir-pms-search2.js.map