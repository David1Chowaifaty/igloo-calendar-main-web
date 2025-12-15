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
        return (h(Host, { key: 'fed2625915e8d95b4ae7b3d9f45d7fba64062235' }, h("section", { key: 'b7c6de50daed46c4fd3fd6a069b58a4a3f584c41', class: "d-flex align-items-center " }, h("div", { key: '25bbf83384baf201891e8266c18ddb74399ca00b', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '9310e90826fea606eca717873968e42efb413a22', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '4eb99e6a9742efec8ad701bcb01a5d7fa810a532', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: 'c19b93fb52c4a1737e647373f0b28fa290998af2' }, !havePrivilege && (h("igl-book-property-container", { key: 'd6eddad24beb1d94b0fae9cfcf259161dae95cb9', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: 'dfa37f7194fb1681ec49bb4d904c8bd9055997f0', id: "new-booking", class: 'new-booking-btn', variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '33949e2701ebfef61a5048cc951c24aaf5772d10', name: "plus", style: { fontSize: '1.2rem' } })))))), h("h3", { key: '9469febe82c300619d26959b6c19c7c8bb596648', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("form", { key: '23e744db982d045207d33179c319d6e229e26ecf', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input", { key: '728078e79dc3b74749d602b30e0318335d7fd680', class: 'flex-fill w-100', value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '1397e6c161ab05c0064eabee67d0acfc7754667b', name: "magnifying-glass", slot: "start" })), h("h5", { key: 'd79471acf095361fdf612e4dd1592ac91472ac27', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: '207309146c9d22eaefb0b340b2abdcb59bcd6992', class: "d-none d-md-block" }, h("wa-tooltip", { key: 'c7ba39be2966a2b87f3c5e5289f718a299459c66', for: "new-booking" }, "Create new booking"), !havePrivilege && (h("igl-book-property-container", { key: '29ef11b2fa7950ab053307008e6ba478c1d061c5', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '51f4bd10b000a3762bd734ff4fabdc21e5dca563', id: "new-booking", variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: 'e949ff98689c872bfbaa68240a034047e4a024ce', name: "plus", style: { fontSize: '1.2rem' } })))))), h("section", { key: '2d17ff5050295e9d36bc1409d64a4c9980d8b400', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '84972d162b2385256b8fbe5035e19fb176f68700' }), h("h5", { key: '461f95fcba3905193a5b021404f23e5f41106efd', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: '785610bf0f9229ff2870ef60e9d104403a65722f' })), h("section", { key: '4c6c4b3666a6fd30374ed3608f9a7ec411ec93b0', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: '38a901942f0236a3d261771c2488fe65b53c4672', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: 'a5855db8588a85b2f5fff0111e2a631f0c842a64', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: 'fa21113c4b0bcea157c574410d86a58e72c21bbb', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: '53ebdc28dbae133d5f9bcd521d34f17410dbbbd3', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing?.channels[0]?.value }, booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: '0b25dc90cb8e6128ea1f6acea0e6125b56ba435f', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: 'a0c04cb523bc85723921177803a0bbd868c55bb7', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: '72e9c3ae36bc4d559be340327020f6004a89536b', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '26ba44b9dcf5cd9697c154cabc9926e2ffa6b3f1', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: '7413b70e39d5fc45f0a44dbb21eee1ea287302d3', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '2a6ed3397fc3258dfa0169ee117510245903a213', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: '4f5c7b70e3ed49c84f52dd939ac6e7e184ed89b1', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: '8059807d70572ba8650c43e59a714cbf1963b3bf', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'cffdc63c257cf5484d0e05cf55e2c8166ad8c9e1', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: '6b27d941e1a7ca646d78684aa2d8455ca9d38b0a', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: '15535fa25c09e9a6526dc29816ad80219179d4ff', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
