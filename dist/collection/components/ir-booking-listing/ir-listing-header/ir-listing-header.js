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
        return (h(Host, { key: '168977cccd03c0b71e4678a60c18ed986a656910' }, h("section", { key: 'a5955b0f7a1b246bf08a035f5c655d06983336a2', class: "d-flex align-items-center " }, h("div", { key: 'b28eab2fa39f5f99751c379aac8b49898ee25f6c', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '9afad244743d2be7c0eabeb78f7212025d55180f', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '2417ea7322294db4c7ea3719f40fdbcf6251b5db', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: 'aafa105a489d582617bf307fc49ca62bd2a3566a' }, !havePrivilege && (
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
        h("ir-booking-new-form", { key: 'c79363f0476fd111cc7b642cd4e61f812fe824da', propertyid: this.propertyId, language: this.language, ticket: booking_listing.token })))), h("h3", { key: 'e9579e4597771e0156f656abd685906f4c29b609', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: '3b71aeecb0bb901ed4bed0b87fcfdad5e216a3a9',
            // onSubmit={e => {
            //   e.preventDefault();
            //   console.log(this.inputValue);
            //   this.handleSearchClicked(false);
            // }}
            class: "booking-search-field width-fill" }, h("ir-input", { key: '013326a4067f46884152b94c68a99221e933f3c4', class: 'flex-fill w-100', value: this.inputValue, onKeyDown: e => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.handleSearchClicked(false);
                }
            }, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '756e1f7de15cd4e5c5d41e4eb57787294d5153be', name: "magnifying-glass", slot: "start" })), h("h5", { key: '13aadf5ca1895e255662bd949aa8d52a2ca2c0de', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: '78df9234e700bac9ce8afc8438a5f4c560dfe0a7', class: "d-none d-md-block" }, h("wa-tooltip", { key: 'f9242fcea73fc06dc961bd419fecaecdae4e7f5b', for: "new-booking" }, "Create new booking"), !havePrivilege && (
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
        h("ir-booking-new-form", { key: '4604f2442eed6a16bb24125a2d28a3b60cd0c6c4', propertyid: this.propertyId, language: this.language, ticket: booking_listing.token })))), h("section", { key: '3f4da06ffe1edcb0557729f7d78a96a0582da619', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '5548bcb186869767d476135119fe3cae7100e740' }), h("h5", { key: 'b68ac4fc854cf7108051c6ca0eced34af87c867a', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: 'e95ac7935ed23a57cb193f0980667a907236e35a' })), h("section", { key: 'e1940476bea185dca00afb20088540f95451fc80', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: 'e9e53f5fe7cfc2bb8ddfedf74fe11e96230d0031', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: '58ca5ee236798ac03cc21e5cf47a044a7310529b', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: '84a130febdfd0a5e496cbec40804860ad809f8a9', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: 'e84f4d267f4d691c0201f938511d93416cecd061', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing.userSelection.channel }, h("wa-option", { key: '30cc5b66ce366c7997e36d5f7195445ab93e5ebd', value: "" }, "All channels"), booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: 'a35ef23e409ac514cd3216dc903c877a125d52ea', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: '48c2c0b73c9f95e26c586641a12dab7fc94d3d77', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: 'acf4869dac35d5801020aff43a5e39f0ac12119d', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '468d0d03397ba9155e46a7d48430e5101a929349', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: 'efcd329bd800d54f6911ffdbf67c26cbce25ae12', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '2936da4b23371ba3a735d8ef134c41c7a06199b6', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: '82f6d9e12541b55464392db1ba0532ff084bf492', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: 'f7e3a8f9b682e820b5ee5b7ce853d18123a25a14', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '6e457696b371133ae44b04f2dbc3549d3cf6045b', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: '6cd3a35fe33b104059617f1d87a1a8d9a851aaaa', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: 'f0ebcc457fa4594f367bf33aa1a7f1bbae590f98', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
