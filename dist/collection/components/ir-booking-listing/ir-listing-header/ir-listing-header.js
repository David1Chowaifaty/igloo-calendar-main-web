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
        return (h(Host, { key: 'feb322e8ab8976c49508ae6670abe0189c96c94c' }, h("section", { key: 'feced2cd5c6926c8b601459225798c539f8464b4', class: "d-flex align-items-center " }, h("div", { key: '49c5815f235b7b4d1c4f5e5bd8e734bebc9477a8', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: 'c41c22329daf3eb48feec98ca9ab564a07e5a149', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '600cc61ab35dcb0401ed07822c392129bb368127', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: 'b3af991a19b2936b3a5dd9b0b145ad5a4c31bd5e' }, !havePrivilege && (h("igl-book-property-container", { key: 'c0297bb89f6c0f2c207fe269bd0821db0f053b0c', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: 'e6f0becad873b4277d8005f03f3ca881d4c9c3b0', id: "new-booking", class: 'new-booking-btn', variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '69d7c05bbc1f4f82baeb9091d98ea0acf6dfc8f2', name: "plus", style: { fontSize: '1.2rem' } })))))), h("h3", { key: 'a4f345ef69acc680fc37bc7ee67f8294f16ff322', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("form", { key: '63c99dc6be07c4d54fdf618a8f4115c07569a463', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input", { key: '067be43be8b700e3f6fa9d9deb512acc8832ccfe', class: 'flex-fill w-100', value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '23ca085deeeae7e1f143b80884b26a9a28de4f9e', name: "magnifying-glass", slot: "start" })), h("h5", { key: '28a457450cd9bda2cf9b0032476d7d7f8f5be368', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: '22d38918072c6f8db0c1bee2bf911a21e4bfc792', class: "d-none d-md-block" }, h("wa-tooltip", { key: '13fe56a5cdf9db2171714200e843a24374ba3b6b', for: "new-booking" }, "Create new booking"), !havePrivilege && (h("igl-book-property-container", { key: '068c55683fd1e996997308cbbd7f0d5f867ce38a', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: 'e1656716776fd068edc5dda120eead28d50670f8', id: "new-booking", variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '88ec319b4fde4216f805a5651164353f0cf9c5d5', name: "plus", style: { fontSize: '1.2rem' } })))))), h("section", { key: 'c84c0901c8eca46b9f73b686c4ece4e9dfd71579', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '8c8f676e85a5040771e940ddab4676c807e61518' }), h("h5", { key: '9c7589847b512f5baaa51ad8bda88395923e7d43', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: '8fe90c0b911aba40e501deaa73bb484ec600b6d3' })), h("section", { key: '73aecce67c7cfa417dc1e489e0a95e3e3caf1d92', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: 'aa4e0f258927a32ef35e2db102284e7dd0e7e3d8', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: '5799e491f6ad2122768b0a956692b3d8ccf08e45', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: 'b0f72d5c0ade40716445ff18af5f0c4fd7d8ef6b', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: '5c5600c910bcca47620e591d2d4eabd39e09b511', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing?.channels[0]?.value }, booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: 'b9c2215721c70a185781788baaec3f2635463353', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: 'e8b675d9293f413f8a2c8ea9a9d62f0bd30e5291', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: 'fa18a947077547b3cf93a451f08a268a12c4a487', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: 'f3d6dcdec618f8dd2d9994b0ddf53eb3a7fd14fc', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: 'f19c0b57465330b0d37f87f2331f0b59b8ed34d7', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '0df83e152a8a4df737fc9f7ac1a67a61254a24e1', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: 'a9733ac0ad5159490215919e5f7fbd8f59d5d9ce', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: '9b9566bbd55da3cbebc959500a305bd4979bcee3', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '59dd3d49994a3c506c70a5f640896b7d2bfd607e', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: '016cc00aa18d19d860e47069dbcd1760d2764c8f', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: '4d1afe15eac51480f53f9816c2a6f4d8961c5c44', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
