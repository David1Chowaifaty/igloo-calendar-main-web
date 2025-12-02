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
    // private async handleFromDateChange(e: CustomEvent) {
    //   e.stopImmediatePropagation();
    //   e.stopPropagation();
    //   const date = e.detail.start;
    //   if (moment(booking_listing.userSelection.from, 'YYYY-MM-DD').isSame(date, 'days')) {
    //     return;
    //   }
    //   let fromDate = date;
    //   let toDate = moment(new Date(booking_listing.userSelection.to));
    //   if (fromDate.isAfter(toDate)) {
    //     toDate = fromDate;
    //   }
    //   booking_listing.userSelection = { ...booking_listing.userSelection, from: fromDate.format('YYYY-MM-DD'), to: toDate.format('YYYY-MM-DD') };
    //   await this.toDateRef.openDatePicker();
    // }
    render() {
        console.log(booking_listing.balance_filter);
        const havePrivilege = isPrivilegedUser(booking_listing.userSelection.userTypeCode);
        return (h(Host, { key: 'ba8680696e7da61017167d27816f5959b3e7261c' }, h("section", { key: '08fbb07ee96c43500b8b30466c5be6a4c73919c8', class: "d-flex align-items-center " }, h("div", { key: '5c720e69f5c769af3b6754edcb7902b888d8cd54', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '0e7a71da8172000febbffcb84ab319b9dc01598c', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '10e349020e189f3c78dae0a2542d4e8d48bf9ed1', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: '8718e5629625f1e5a40214a29fb1daab4e9401fb' }, !havePrivilege && (h("igl-book-property-container", { key: '4a04973aebe3acd875ff6d5963940a2f70c07662', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-button", { key: '4a431abb2e7688f6f13732032e1cb240836c7fbd', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "square_plus" }))))), h("h3", { key: '71aa0d4e870e9fd60144f51bc310131687b63dc3', class: "d-none d-md-block" }, locales.entries?.Lcz_Bookings), h("form", { key: 'f0c280fd29670460c4091ce61f4d224050388cae', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input-text", { key: 'd8e453926696cfe2653f320eecf76ce5f7d6daf2', class: 'flex-fill', value: this.inputValue, onTextChange: e => (this.inputValue = e.detail), variant: "icon", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("svg", { key: '49d82369c5c91232e1e75770308ac979923d08fc', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: '2da7cc0b25e226a6df47d580a30a5fb1172a2876', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("h5", { key: '366c97f903b0f7e79026aeb44c23faa4775a50d7', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: '63104c368e9b5e5d1848164897de11c54fdaf9a2', class: "d-none d-md-block" }, !havePrivilege && (h("igl-book-property-container", { key: '9ec40f11edb5a5337fcb52cef09740f548417c9e', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-button", { key: 'd536ad72bd9030bfd946e22e87c8284742d4afa7', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "square_plus" }))))), h("section", { key: '846df29ba360fb8d2404e513832887df8986cfe7', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '8e99a486d48bbd9981f8d96b997471e8100f8c05' }), h("h5", { key: '88209e2ac2f252f2478401e17d034cbae80e2294', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: 'b0cc8359722dc74404ca0b27134b4455c75d70fa' })), h("section", { key: '588f99e5191df06dba91328396b32363f63ddcab', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("ir-select", { key: '87af6f25ecf850242a0379f5a04a6ec2de8d1171', onSelectChange: e => updateUserSelection('filter_type', e.detail), showFirstOption: false, data: booking_listing?.types.map(t => ({
                value: t.id.toString(),
                text: t.name,
            })), class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.filter_type, selectId: "dateTo" }), h("ir-range-picker", { key: '49863a1e3cdbfbd1a45f0baf9cb74b9a38a57f77', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("ir-select", { key: '3aa42b6e35e7947bb79e6128bbbb8b3538de1af5', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.booking_status, onSelectChange: e => updateUserSelection('booking_status', e.detail), showFirstOption: false, data: booking_listing?.statuses.map(status => ({
                value: status.code,
                text: status.name,
            })), selectId: "booking_status" }), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("ir-select", { key: '37d72233955267c39d3ef2eeb12e7bc89d69cd0a', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.channel, onSelectChange: e => updateUserSelection('channel', e.detail), data: booking_listing?.channels.map(channel => ({
                value: channel.value,
                text: channel.name,
            })), selectId: "channels", firstOption: locales.entries?.Lcz_All + ' ' + locales.entries?.Lcz_Channels })), h("ir-select", { key: 'bdf2c6062ef453557b8b887069a2aa96b7fd5f2a', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.balance_filter, onSelectChange: e => updateUserSelection('balance_filter', e.detail), data: booking_listing?.balance_filter.map(b => ({
                value: b.value,
                text: b.name,
            })), showFirstOption: false, selectId: "balance_filter" }), h("div", { key: 'ec213fde5f5fc3c8233e22172893faa92a8490ee', class: "d-flex flex-fill align-items-end m-0  buttons-container" }, h("ir-button", { key: '42ae1f2ddef8e7b1c1262ff83d536c9b388268f8', title: locales.entries?.Lcz_Search, variant: "icon", icon_name: "search", isLoading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false) }), h("ir-button", { key: '5729ecc8285804b5d6eae9ae984b191257c937ea', title: locales.entries?.Lcz_Erase, variant: "icon", icon_name: "eraser", onClickHandler: () => this.handleClearUserField() }), h("ir-button", { key: '5f7a85777b2b8e03538935f64f10858ce56bd823', title: locales.entries?.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: () => this.handleSearchClicked(true) })))));
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
