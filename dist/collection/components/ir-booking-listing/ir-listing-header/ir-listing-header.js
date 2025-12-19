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
        return (h(Host, { key: '5b447417c0f8cc2e33b7235bd6ddc3fa1f7bd644' }, h("section", { key: 'a7d201ae970de124076f300d586d22083139d2bc', class: "d-flex align-items-center " }, h("div", { key: 'de72ed383a60f5d85ede710805b0bbfc23ed15b8', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: 'fb8db3dfb68e7849c7e6aa4c435964f0afa420fe', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: 'adc9c8dab2345186398fefb632e6c7ce325de3f2', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: '022de4b77a97407db33ef74e3a0e04fccbd882f4' }, !havePrivilege && (h("igl-book-property-container", { key: '4dc36fb92c5c34a5221b30247dacfd1ed825fd47', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: 'dbe78d690f2725006049339eff77f6b248575493', id: "new-booking", class: 'new-booking-btn', variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '58dcf5b2854fb2aeee8d3458bc9db13904815c6f', name: "plus", style: { fontSize: '1.2rem' } })))))), h("h3", { key: '2223a5e0e5573bef50e78678324533c437be21f0', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("form", { key: 'd3bcad58c3b495055e790954d9005eb10b10c773', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input", { key: 'aae43c1dfc28c9ec569049034c31e5403bf7787b', class: 'flex-fill w-100', value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '29f87787d60e99116ea7707c89713694d2573215', name: "magnifying-glass", slot: "start" })), h("h5", { key: 'e9e749a6f46bba541c710c302acf21741749dfb4', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: 'e4f9e90c3dad00433541af69ed50b9ada56df88b', class: "d-none d-md-block" }, h("wa-tooltip", { key: '259b6d3509f4a0247ad584dac6727d36aff8f2d3', for: "new-booking" }, "Create new booking"), !havePrivilege && (h("igl-book-property-container", { key: '52f99f8a599cb71ecd99566630172b84c33014bf', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '68d0b5d6d6edca76863b1162b388534b2d7afb1a', id: "new-booking", variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: 'a4aa4ca9e4f459408c36ba728fcef6588fd9c808', name: "plus", style: { fontSize: '1.2rem' } })))))), h("section", { key: '97c329ab510c31bd639ff26f04f2340270cecd07', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: 'b8ba2850735aebdc44add873de0d490e21672b64' }), h("h5", { key: '0daef56a8e967acb915471b8e3951a82bd333efe', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: 'ade14bbc353d6e28f58903b39f71d3a7f21b754a' })), h("section", { key: 'd51268545652648c21a9c52af746dfd55d5b1f2e', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: 'f693c2c15ac5fbdaa6be31d66a373d637ecbf797', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: 'f2dc4a25ad9e897e664d1609c14ea9b5cb4e8270', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: 'e5a59752ecb7110f211e26aee833c13c8c695350', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: 'd7e360a0c4f9a28c312b582afb4e3bf0084e4128', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing.userSelection.channel }, h("wa-option", { key: '136d10e384e2276c3d97ce9e495a23b469095935', value: "" }, "All channels"), booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: '87887771aea0380106c3753fefff1d476abcdf57', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: 'a2e1e6145a894ed32a5d2ee56bfc1ef6b3f42836', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: '5301c94cf46ec0dd31eb6d928825c1bd1cb1f339', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: 'ac73bbdff6b56994f7808861e4b68c7f7f769521', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: 'bf7bab9273500782aab81621e00c8c2b24fa581a', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '700194481b2c19bba929548004d14cd0395bc800', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: '6d6976a649faa938308d930e8a64c2edb8cb11eb', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: 'cdaaeab1c32eabe1e88fa26c81d15df8a09bcb40', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '8d94c4884c55cb33f0bc898c13c1b3eeb99773b0', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: '1c5acbc23404eea70702841e556b13cdce6a288f', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: '48e0a2ae1c0b4eee51b9bcda389112a691ba9574', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
