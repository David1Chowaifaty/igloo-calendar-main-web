import { BookingListingService } from "../../../services/booking_listing.service";
import booking_listing, { initializeUserSelection, updateUserSelection } from "../../../stores/booking_listing.store";
import locales from "../../../stores/locales.store";
import { downloadFile, isPrivilegedUser } from "../../../utils/utils";
import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrListingHeader {
    propertyId;
    language;
    p;
    inputValue = '';
    isLoading = null;
    preventPageLoad;
    bookingListingService = new BookingListingService();
    // private toDateRef: HTMLIrDatePickerElement;
    async handleSearchClicked(is_to_export) {
        if (this.inputValue !== '') {
            if (/^-?\d+$/.test(this.inputValue.trim())) {
                updateUserSelection('book_nbr', this.inputValue.trim());
            }
            else if (this.inputValue[3] === '-') {
                updateUserSelection('book_nbr', this.inputValue.trim());
            }
            else {
                updateUserSelection('name', this.inputValue.trim());
            }
        }
        if (this.inputValue === '' && (booking_listing.userSelection.book_nbr !== '' || booking_listing.userSelection.name !== '')) {
            booking_listing.userSelection = {
                ...booking_listing.userSelection,
                name: '',
                book_nbr: '',
            };
        }
        // setParams({
        //   s: booking_listing.userSelection.start_row,
        //   e: booking_listing.userSelection.end_row,
        //   c: booking_listing.userSelection.channel,
        //   status: booking_listing.userSelection.booking_status,
        //   from: booking_listing.userSelection.from,
        //   to: booking_listing.userSelection.to,
        //   filter: booking_listing.userSelection.filter_type,
        // });
        this.isLoading = is_to_export ? 'excel' : 'search';
        this.preventPageLoad.emit('/Get_Exposed_Bookings');
        await this.bookingListingService.getExposedBookings({ ...booking_listing.userSelection, start_row: 0, end_row: 20, is_to_export });
        this.isLoading = null;
        if (booking_listing.download_url) {
            downloadFile(booking_listing.download_url);
        }
    }
    async handleClearUserField() {
        initializeUserSelection();
        if (this.inputValue) {
            this.inputValue = '';
        }
        await this.bookingListingService.getExposedBookings({ ...booking_listing.userSelection, start_row: 0, end_row: 20, is_to_export: false });
    }
    render() {
        const havePrivilege = isPrivilegedUser(booking_listing.userSelection.userTypeCode);
        return (h(Host, { key: 'fa9503ef73771708f470558571ca3b8b0b9be7fe' }, h("section", { key: 'a9dba1a64956a0cb248653460693244b0fedd5af', class: "d-flex align-items-center " }, h("div", { key: 'e1a3d3e7de8af07baa1b684b5843851ce7b4e3da', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '3fc42948ebad27686b0e60be95778b185238943c', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '0fca0f1b266ceccbb96b0af69e18a7bd687416f3', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: 'e95ecf06f667297f024d669910b31ec02182db77' }, !havePrivilege && (h("igl-book-property-container", { key: '477c1538c6240d9e08e065863b776efdd1a7f497', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '1ec983751971dc3872f75306bf0e231ef9ed7966', id: "new-booking", class: 'new-booking-btn', variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '841af3e150dea237fc8a361aa27c4a6f7ff4a45b', name: "plus", style: { fontSize: '1.2rem' } })))))), h("h3", { key: '3fce010875e4d887a6fd9805c263a236c1b95c0d', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("form", { key: 'bc113b9bbab2918be15417896f1c27290527a4c0', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-custom-input", { key: '760b5ce9e7094e03d602da4a3127e6fea2878224', class: 'flex-fill w-100', value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '790894609de7b09bfd3cffbf1d27d22c8c52e2dc', name: "magnifying-glass", slot: "start" })), h("h5", { key: 'b61a525bc51fe9bcd6e281f74aab800e96101d7d', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: '8bac06ea656166451672c89200d2d7fe764646c3', class: "d-none d-md-block" }, h("wa-tooltip", { key: 'b9b3ad3627d1d87394f045da69f472bf249694db', for: "new-booking" }, "Create new booking"), !havePrivilege && (h("igl-book-property-container", { key: '0017a7526b5e98ddcc59181ffa4a1b615b017253', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: 'b5e436202ca3dc9d7f45cabf411642cf527a22d8', id: "new-booking", variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '2416d16db89979c3e2ef3bb5ac16131744a90b24', name: "plus", style: { fontSize: '1.2rem' } })))))), h("section", { key: '6aeb1d75da6f14babbba88167337d3c5a745464a', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '651acd99a088995f3b598e184733837233be0ba3' }), h("h5", { key: '26ee9a5193a6233be8a577db9e80fd2572ed86ae', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: 'f16677be7919a2b0d715a82f50cc71d44319bc6e' })), h("section", { key: '334f5beae7db41035343da5498c7bbf3ca5cd982', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: '67862213431f82af7dae061e15abe3f70888a6d2', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: '5feb3d4bb8d1777826f0fa0ae43eb31f11c33e1e', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: '9574001e725a29e87a29d4828fe006793548ccba', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: '668e086bd26fb7368fa5e59c47aae0ea3c3b85f5', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing?.channels[0]?.value }, booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: '89e446e3d1c8d0a6b159fc2622580f9cfe508414', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: '9c74cd664ff67d9fc82e6ccc5f1e45f3097c03de', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: '4b222e72b33d92ef3a1912d7188b731402014b8c', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '535fef579e27a919e6165928cbbf7abb932bdd47', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: '3783fe114545ee250cf57b7cbc4d140c8fc1aaf6', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '3d3611f099dd7fca322b607ab1ffa5c1b4baeb38', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: '3b25c1360448710312b32eb9f85347bd09525c89', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: 'f2c897b2813ce8f1b419d9321f64d067c1d52c49', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'c6f5d3bbc139bcfcb784bed0151a5930affa0708', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: 'e0aa980bc87ec27118532cd87238c4360e804d03', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: '670f12f8ba0d30ff43c7aec5a623235c18e7cefd', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
    }
    static get is() { return "ir-listing-header"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-listing-header.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-listing-header.css"]
        };
    }
    static get properties() {
        return {
            "propertyId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "property-id",
                "reflect": false
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
                "attribute": "language",
                "reflect": false
            },
            "p": {
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
                "attribute": "p",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "inputValue": {},
            "isLoading": {}
        };
    }
    static get events() {
        return [{
                "method": "preventPageLoad",
                "name": "preventPageLoad",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-listing-header.js.map
