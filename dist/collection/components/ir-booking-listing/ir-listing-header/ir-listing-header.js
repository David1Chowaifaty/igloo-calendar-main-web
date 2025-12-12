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
        return (h(Host, { key: 'd18096d31917806cb8a92ec3fdb37d2ede3f78a0' }, h("section", { key: 'e7aec126806f6c93f85f4fce406ca1e6f7a1088b', class: "d-flex align-items-center " }, h("div", { key: '0aefa1a588fb91594b957924e991d0af1614fd86', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '5f9d9359b279692aa8940e172ff52f80b8628ded', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '282da3cc3847116a0233201cd0041e80dc868b60', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: '6c55811254d8dccba394b354999676aac3156838' }, !havePrivilege && (h("igl-book-property-container", { key: 'd473de949f225f82f95f718defa996cdebe8bceb', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '59b368c0e85964aef78f88d4f542ca0e6132fb2f', id: "new-booking", class: 'new-booking-btn', variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '8e8054863efd8159eaae9e6a3209dac30eb545aa', name: "plus", style: { fontSize: '1.2rem' } })))))), h("h3", { key: '3d41dc1d1db852f65d3cd640c59e48df0272b873', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("form", { key: '12965ce3d4ba1fe3e747a7d656f2797019cb5733', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input", { key: 'eae1a46cbaa215b8ce4a018ae562868475056d73', class: 'flex-fill w-100', value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '920b2a14c1a698073017ea5013805d9dd9a3478e', name: "magnifying-glass", slot: "start" })), h("h5", { key: '45ee3b95567b73ff3837358bc030a962e007f0a4', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: '3a00174758a5ea7ecff620bc4d129d107a0e7f69', class: "d-none d-md-block" }, h("wa-tooltip", { key: '46a60683888b09c61119d58252739f4b1ab099f8', for: "new-booking" }, "Create new booking"), !havePrivilege && (h("igl-book-property-container", { key: '3584cdfd704d1d29fecf495128fdbff8b9b1cbee', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: 'a2a1d9b06f5cbc5745f6494b8867d94134fb3014', id: "new-booking", variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: 'd140c744fe3f4e5c6fd9a75cba80e7e52735a1b5', name: "plus", style: { fontSize: '1.2rem' } })))))), h("section", { key: '8a34374cc7aff1e6f704392134c3fff349d868bd', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '48452f28e1a980e4f11c00d10bea8ce63df5b0f0' }), h("h5", { key: '0259554a4a2e9e0218966e0cefb24be531a8b2ca', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: 'c98d55974969961e946aa4b44b047af72cd3ac9a' })), h("section", { key: 'ada7f095c347be86ef5c21b04f43a6d209e599aa', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: 'c43f090f635312ca6335de600685252c6d7b6cbc', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: '517264826a8ca30982f45fb8633db56d19dd6159', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: '91cc95f74847985fcdbdb104c62289ac8032650c', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: '035a1ece2ac09213a5927cee10abc72fa2c7138f', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing?.channels[0]?.value }, booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: 'dd8ffcd64598f601aad116a19f8682a2f10a45dd', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: '2560fedd4728f1c942ccd372f975cdfe58c11647', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: '771c71167b1267a7acd3d7e99e33796f798cf22a', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '013c5d449476d4bdd3c0f2cc8f4a09a9ae8182e3', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: '0741c8e7f35238f9189278af8e840b97be63b3f7', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'b12b664871310c215569149a84fb625f54dbed24', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: 'd29a25f4d363848cb18d775315582666c79430c6', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: '296002ab14f111f040e4e4dde6d0a9c02dd66056', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'd61b0e36165f88fdf080126ef9e84f5674572844', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: '7b60f82c25d43e9d5968f4dbf9b3dbc024614fdd', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: 'b565f279de2755f6712b0520179ea6f1d2948008', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
