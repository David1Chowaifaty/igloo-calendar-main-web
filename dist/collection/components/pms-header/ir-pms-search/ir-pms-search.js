import ApiClient from "../../../models/ApiClient";
import { BookingListingService } from "../../../services/booking-listing/index";
import { Host, h } from "@stencil/core";
import { Subject } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, filter, from, of, switchMap, tap } from "rxjs";
import { formatBookingNumber } from "../../../utils/number";
import { toLatinDigits } from "../../../utils/date/index";
import { t } from "../../../services/locale/t";
import { LocaleController } from "../../../services/locale/locale.controller";
import { SCREEN_TABLES } from "../../../services/locale/screen-tables";
import { LanguageSync } from "../../../services/locale/language-sync";
export class IrPmsSearch {
    propertyid;
    ticket;
    language = 'en';
    shortcutHint = null;
    bookings = [];
    isLoading;
    apiClientService = new ApiClient();
    bookingListingService = new BookingListingService();
    search$ = new Subject();
    subscription;
    /** Results were fetched in the old language; drop them so the next search refetches in the new one. */
    languageSync = new LanguageSync(SCREEN_TABLES.pmsSearch, () => {
        this.bookings = [];
        this.autoCompleteRef?.hide();
    });
    comboboxSelect;
    autoCompleteRef;
    componentWillLoad() {
        document.addEventListener('keydown', this.focusInput);
        this.detectShortcutHint();
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
        }
        LocaleController.load({ language: this.language, tables: SCREEN_TABLES.pmsSearch });
        this.subscription = this.search$
            .pipe(debounceTime(500), distinctUntilChanged(), filter(value => value.length >= 2), tap(() => {
            this.isLoading = true;
            this.autoCompleteRef?.hide();
        }), switchMap(value => {
            const isNumber = /^(?:-?\d+|.{3}-.*)$/.test(value);
            return from(this.bookingListingService.getExposedBookings({
                book_nbr: isNumber ? value : null,
                name: isNumber ? null : value,
                property_id: Number(this.propertyid),
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
                language: LocaleController.language,
            }, { skipStore: true })).pipe(catchError(() => of([])));
        }))
            .subscribe(bookings => {
            this.bookings = bookings.filter(Boolean);
            this.isLoading = false;
            this.autoCompleteRef?.show();
        });
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.focusInput);
        this.subscription?.unsubscribe();
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    handleTicketChange(newValue, oldValue) {
        console.log(this.ticket);
        if (newValue !== oldValue && newValue) {
            this.apiClientService.setApiClient(this.ticket);
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
        // Booking numbers typed in Arabic-Indic digits must reach the API (and the isNumber check) as Latin.
        const value = toLatinDigits(event.detail ?? '');
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
        return (h(Host, { key: 'fd25e8a1736f5a58d8fbfd167296a76c89144e6c' }, h("ir-autocomplete", { key: '3df7b63d05caa923745563b620c2da1e37e4d1da', class: "pms-search__autocomplete", placeholder: t('Lcz_BookingOrGuestNamePlaceholder', { fallback: 'Booking# or guest name' }), ref: el => (this.autoCompleteRef = el), "onCombobox-change": event => this.handleComboboxSelect(event), "onText-change": event => this.fetchBookings(event), pill: true, appearance: "filled" }, h("wa-icon", { key: 'b262b079dd22d543a48295d46e4de716c72583d1', name: "magnifying-glass", slot: "start" }), h("div", { key: 'cd2d3cc971a3aa27d3b7af106c07d63fc3a6892c', slot: "end", class: "pms-autocomplete__end-slot" }, this.isLoading && h("wa-spinner", { key: 'b36427f5958c368a58d67b0e96210f43f544f226' }), this.shortcutHint && h("span", { key: '8e54957e0d59167a6d314fc99d708872f6c232f7' }, this.shortcutHint)), (this.bookings ?? [])?.length === 0 && !this.isLoading && (h("div", { key: '9e1cd1ecdf860112f0d74bb4fba0398f828c2505', class: "pms-search__empty", role: "status", "aria-live": "polite" }, h("wa-icon", { key: '1e4c585741cf37ce264c017481038609e9652393', name: "circle-info", "aria-hidden": "true" }), h("div", { key: '2b4a90a4e4044a9b5394ea1cfd8f418f17480845', class: "pms-search__empty-content" }, h("div", { key: 'af3ec21d57592832ccffe97080c2f0fa17eaed10', class: "pms-search__empty-title" }, t('Lcz_NoResultsFound', { fallback: 'No results found' }))))), (this.bookings ?? [])?.map(b => {
            if (!b) {
                return null;
            }
            const label = `${b?.booking_nbr}  ${b?.guest?.first_name} ${b?.guest?.last_name}`;
            return (h("ir-autocomplete-option", { class: "pms-search__autocomplete-option", value: b.booking_nbr, label: label }, h("img", { slot: "start", class: "pms-search__option-icon", src: b.origin.Icon, alt: b.origin.Label }), h("div", { class: "pms-search__option" }, h("p", { class: "pms-search__option-bookings" }, h("span", { class: "pms-search__option-booking" }, formatBookingNumber(b.booking_nbr)), b.channel_booking_nbr && h("span", { class: "pms-search__option-channel-booking" }, formatBookingNumber(b.channel_booking_nbr))), h("span", { class: "pms-search__option-label" }, b.guest.first_name, " ", b.guest.last_name)), h("ir-booking-status-tag", { slot: "end", class: "pms-search__option-status", status: b.status })));
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
            },
            "language": {
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
                "attribute": "language",
                "defaultValue": "'en'"
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
                "propName": "language",
                "methodName": "languageChanged"
            }, {
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }];
    }
}
