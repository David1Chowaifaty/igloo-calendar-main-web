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
        return (h(Host, { key: '9bbb51d80cc4d3719c4c69dd746721cee62eff62' }, h("section", { key: '5a4c9c9298ee1a7474c5df15ce4a6830d17a5510', class: "d-flex align-items-center " }, h("div", { key: '3533058804e1e5d669ce9d204a467f204ccf1bf8', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: 'a50597052edb900e4e340df65675b6514a30d316', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: 'f3f4634682f99de8801285120790240356bf1ebd', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: '3999216af43b7d7257c15961c2eac61ec6999b8c' }, !havePrivilege && (
        // <igl-book-property-container
        //   p={this.p}
        //   withIrToastAndInterceptor={false}
        //   propertyid={this.propertyId}
        //   language={this.language}
        //   title={locales.entries.Lcz_CreateNewBooking}
        //   ticket={booking_listing.token}
        // >
        //   {/* <ir-button slot="trigger"  variant="icon" icon_name="square_plus"></ir-button> */}
        //   <ir-custom-button id="new-booking" class={'new-booking-btn'} variant="brand" appearance="plain" slot="trigger">
        //     <wa-icon name="plus" style={{ fontSize: '1.2rem' }}></wa-icon>
        //   </ir-custom-button>
        // </igl-book-property-container>
        h("ir-booking-new-form", { key: 'adfdaac2ea9b062bcc9297580db9802270ffcaab', propertyid: this.propertyId, language: this.language, ticket: booking_listing.token })))), h("h3", { key: '865b8f79f4d82b77c602183c6e0162abb123fbce', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: '607d6926a8a7a697a62b0be0b458e61a18c0d431',
            // onSubmit={e => {
            //   e.preventDefault();
            //   console.log(this.inputValue);
            //   this.handleSearchClicked(false);
            // }}
            class: "booking-search-field width-fill" }, h("ir-input", { key: '4321c930d8f6362dd9f97a489530f8e42104a520', class: 'flex-fill w-100', value: this.inputValue, onKeyDown: e => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.handleSearchClicked(false);
                }
            }, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '21c17b3c6e6b684c0a0737914ea23faec7ccd9e7', name: "magnifying-glass", slot: "start" })), h("h5", { key: '9ae6bca55842fd248b62712c94d143dc5e8bc168', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: '72271ec2b24271ce8478464640427173e1656392', class: "d-none d-md-block" }, h("wa-tooltip", { key: '31c8291a10407c25c404b657bb2ac057d968f6c0', for: "new-booking" }, "Create new booking"), !havePrivilege && (
        // <igl-book-property-container
        //   p={this.p}
        //   withIrToastAndInterceptor={false}
        //   propertyid={this.propertyId}
        //   language={this.language}
        //   title={locales.entries.Lcz_CreateNewBooking}
        //   ticket={booking_listing.token}
        // >
        //   <ir-custom-button id="new-booking" variant="brand" appearance="plain" slot="trigger">
        //     <wa-icon name="plus" style={{ fontSize: '1.2rem' }}></wa-icon>
        //   </ir-custom-button>
        //   {/* <ir-button slot="trigger" class={'new-booking-btn'} variant="icon" icon_name="square_plus"></ir-button> */}
        // </igl-book-property-container>
        h("ir-booking-new-form", { key: 'a2a6c9bb6d1d369703fad917455ef38b2693170f', propertyid: this.propertyId, language: this.language, ticket: booking_listing.token })))), h("section", { key: '04ade2b1ce3dc8e20575a6b6977adec7801a8687', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: 'f1f02e4d6a70ef5015229577b003511715a4f1a0' }), h("h5", { key: '5c04ea9326369b63ece4697beb912b1ddd3d0a55', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: 'b9d105f67311a4a548ce88740094fc5bbc503afd' })), h("section", { key: '9b55bc756751a91befe92f9e87274155af32f8ef', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: 'a7c80bb763fad1682b9ee35cb4184ab6031e4ef3', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: 'd214b410a2164b745339faa3bbbe52fe8770a5c8', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: '25848484083001a79c85ddaefc5f4e8c150c6143', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: 'fb582d3cdf667d64c07cb3abd413fc27eb6f4c77', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing.userSelection.channel }, h("wa-option", { key: '3a0505c728c34f37fc90c4d222993ab03ac4150f', value: "" }, "All channels"), booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: '3961369614ae7bf197b1f9788493d70fc0e43a69', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: 'b29a15aae569d2f7f69db795cfa609e7f60dc33a', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: '4769673eabc4b2c1eaf3b6f1b3fbe68d8508fdda', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '17fe686e4e381382ce6954a7817127cb2e10f49e', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: '59141c14e4c46b400520258d3461e815fa6f8390', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '28f1abec8908de1cdd5374d83daab49e57c8c0d7', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: 'c93245d907386cd88ced9a718660287608959052', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: '8dd605a9845726d3f1e4d4cd8b74ff2b085eb14c', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '034dcc04fa0f495a3950ff8eabd0cb802945508c', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: '65958ff42544f7e67d050c59224a8d905b4c313d', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: 'a06442fb5cdb064fd519bbc82b4c24c7f8c47742', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
