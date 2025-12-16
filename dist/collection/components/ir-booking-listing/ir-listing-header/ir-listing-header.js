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
        return (h(Host, { key: '0479f9c5b2bc1268cf1f423e26f74301239a93f5' }, h("section", { key: 'f09432dcea903a86a6c5f22840d4ffb64f1a53fd', class: "d-flex align-items-center " }, h("div", { key: '4470f9d7aae9e3312a6f4bb8405920d99950a419', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '8ffeaa79386eac34c909e215a8e7da061752e871', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '3b450e95cd1122ed075610ba8eff2aaa9c475703', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: '0638c720a4aad6e4cfaf64c9070a65944efe1b79' }, !havePrivilege && (h("igl-book-property-container", { key: '54f8f2dc3a25902db9e8243f75c3f5d426be4da5', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '98ac5e5ea9840c339823b0f184a2b65d6e1ea036', id: "new-booking", class: 'new-booking-btn', variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '2122b89443cec5a358a8cf8eac86248604d7ee23', name: "plus", style: { fontSize: '1.2rem' } })))))), h("h3", { key: 'e357ab8a1acda989a14e5cdf6515276e05095e56', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("form", { key: 'eafac3d875f48d57b36f27ea029e93b395fecfcc', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input", { key: '4b41e65eb2e9d2a29a4e14ae0a90078801c4e84b', class: 'flex-fill w-100', value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '540dd05ef66378b7c7f92438ec1b26f3dfcb4588', name: "magnifying-glass", slot: "start" })), h("h5", { key: 'ed2ed8124e629526f66f2d263de064e00082369e', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: 'd3b23f221cabb220e8aa32f11824e91a8045f06a', class: "d-none d-md-block" }, h("wa-tooltip", { key: 'cb38004259f252de25cb42315d6136b1200d70a2', for: "new-booking" }, "Create new booking"), !havePrivilege && (h("igl-book-property-container", { key: '53a319aa8cc2069a4634ab3e8c53dfbe0d387f50', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: 'ccc656fc963617872d8dd9d20c1ae96712d239f2', id: "new-booking", variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '658ea784902130e2facac628ab7e875dcbca6def', name: "plus", style: { fontSize: '1.2rem' } })))))), h("section", { key: '01b26530f94eccd3289f37abefebbe0f97967a95', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: 'fd44fca19e9cc0e62bc7079db5a3ac21a818c3f5' }), h("h5", { key: '626a2d74db041e21925fa275bab455a204fdcf3a', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: '4d949d2b0e30d24215950901168f873eaee25083' })), h("section", { key: '137bdaf96abe4236651e472f4b6cb41081a01540', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: 'b9916a2c80e76b3f376ab01cef3dc2b67b600832', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: 'd1710ebbd2307cd3165a19786a07b1bc98bc20ad', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: '7d423ba2263568b349fe6ea68ea5bf917514cad1', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: 'd50766811aa40bc663f4cd7fd218351f7ed4ee5c', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing?.channels[0]?.value }, booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: 'cc38701de494cf0353cec41c5dfbc84f8b820f9b', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: '071479b7787a1647bc8547419aa5e5d9ee3f9140', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: '13524defae5c91a78596ba870b13244886fc3be1', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '2bc95804195f98bf2735c25d96809eea31109810', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: 'c9d4b3bd4b41ca0416b8c87f5d20ac9670c8c1ac', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '8f0ca4f30e28e2c6440c3e24452059068b28aff6', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: '0916fbdb89ccf3ab3869f923df3f3c953dc38a94', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: '3cc9caa08b6abf5961d1073d4666cbc8a0e4425d', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'cf8d911fe97d4e07a9024e8db669ca5e891f30d3', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: '5609db93189ba4c8f8a3d448539b7b033431e5f4', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: '08288cc620d8ba1ee0ec7b1bdb06c7c16feedb61', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
