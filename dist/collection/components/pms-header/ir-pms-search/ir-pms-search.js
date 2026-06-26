import Token from "../../../models/Token";
import { BookingListingService } from "../../../services/booking_listing.service";
import { Host, h } from "@stencil/core";
import { Subject } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, filter, from, of, switchMap, tap } from "rxjs";
export class IrPmsSearch {
    propertyid;
    ticket;
    shortcutHint = null;
    bookings = [];
    isLoading;
    tokenService = new Token();
    bookingListingService = new BookingListingService();
    search$ = new Subject();
    subscription;
    comboboxSelect;
    autoCompleteRef;
    componentWillLoad() {
        document.addEventListener('keydown', this.focusInput);
        this.detectShortcutHint();
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
        }
        this.subscription = this.search$
            .pipe(debounceTime(500), distinctUntilChanged(), filter(value => value.length >= 2), tap(() => {
            this.isLoading = true;
            this.autoCompleteRef?.hide();
        }), switchMap(value => {
            const isNumber = /^(?:-?\d+|.{3}-.*)$/.test(value);
            return from(this.bookingListingService.getExposedBookings({
                book_nbr: isNumber ? value : null,
                name: isNumber ? null : value,
                property_id: this.propertyid,
                filter_type: 1,
                from: null,
                to: null,
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
            }, { skipStore: true })).pipe(catchError(() => of([])));
        }))
            .subscribe(bookings => {
            this.bookings = bookings.filter(Boolean);
            this.isLoading = false;
            this.autoCompleteRef?.show();
        });
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.focusInput);
        this.subscription?.unsubscribe();
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
    fetchBookings(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const value = event.detail;
        if (!value) {
            this.bookings = [];
            this.autoCompleteRef?.hide();
            return;
        }
        this.search$.next(value);
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
        return (h(Host, { key: '9890c1870a961c0a0f2f3cd9e13e638b4c188741' }, h("ir-autocomplete", { key: 'ba6720602f6fe8b8622cc852c9518379ca74efbd', class: "pms-search__autocomplete", placeholder: "Booking# or guest name", ref: el => (this.autoCompleteRef = el), "onCombobox-change": event => this.handleComboboxSelect(event), "onText-change": event => this.fetchBookings(event), pill: true, appearance: "filled" }, h("wa-icon", { key: 'e863dd030e701eb3743843b25b30e375db81e84c', name: "magnifying-glass", slot: "start" }), h("div", { key: '9993d4d9cf5738f892cd7f9ce4a01bd2fc0972f5', slot: "end", class: "pms-autocomplete__end-slot" }, this.isLoading && h("wa-spinner", { key: '752ed91951b51d52ad43e7ea0e1f794541c4b668' }), this.shortcutHint && h("span", { key: '025b2b6d883ae48ddb199a997f82e5a6b6ad6167' }, this.shortcutHint)), (this.bookings ?? [])?.length === 0 && !this.isLoading && (h("div", { key: '592784c9f7cf928895b3e5eca1f90b2f03e9f97b', class: "pms-search__empty", role: "status", "aria-live": "polite" }, h("wa-icon", { key: '94d0146542b9fd369723743d459730e10bc86cc9', name: "circle-info", "aria-hidden": "true" }), h("div", { key: '7daa5aeeb3302e284c1c1083b57fcc3b036bb8ab', class: "pms-search__empty-content" }, h("div", { key: '45ee8dfa0fe4bbc7e390464a13bea6bebe2191a0', class: "pms-search__empty-title" }, "No results found")))), (this.bookings ?? [])?.map(b => {
            if (!b) {
                return null;
            }
            const label = `${b?.booking_nbr}  ${b?.guest?.first_name} ${b?.guest?.last_name}`;
            return (h("ir-autocomplete-option", { class: "pms-search__autocomplete-option", value: b.booking_nbr, label: label }, h("img", { slot: "start", class: "pms-search__option-icon", src: b.origin.Icon, alt: b.origin.Label }), h("div", { class: "pms-search__option" }, h("p", { class: "pms-search__option-bookings" }, h("span", { class: "pms-search__option-booking" }, b.booking_nbr), b.channel_booking_nbr && h("span", { class: "pms-search__option-channel-booking" }, b.channel_booking_nbr)), h("span", { class: "pms-search__option-label" }, b.guest.first_name, " ", b.guest.last_name)), h("ir-booking-status-tag", { slot: "end", class: "pms-search__option-status", status: b.status })));
        }))));
    }
    static get is() { return "ir-pms-search"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-pms-search.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-pms-search.css"]
        };
    }
    static get properties() {
        return {
            "propertyid": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "propertyid"
            },
            "ticket": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "ticket"
            }
        };
    }
    static get states() {
        return {
            "shortcutHint": {},
            "bookings": {},
            "isLoading": {}
        };
    }
    static get events() {
        return [{
                "method": "comboboxSelect",
                "name": "combobox-select",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IrComboboxSelectEventDetail",
                    "resolved": "IrComboboxSelectEventDetail",
                    "references": {
                        "IrComboboxSelectEventDetail": {
                            "location": "import",
                            "path": "@/components",
                            "id": "src/components.d.ts::IrComboboxSelectEventDetail",
                            "referenceLocation": "IrComboboxSelectEventDetail"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }];
    }
}
