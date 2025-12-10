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
        return (h(Host, { key: '0ff11b470afc11389ef8a0502a85565dd31fc988' }, h("section", { key: 'c7eb5dd1f1a619bbfd540db185ab67e501b315f6', class: "d-flex align-items-center " }, h("div", { key: 'f5ebfed32751c5f1abe5e5f92e8ffa4cfc1a8d23', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: 'f013b337c7325aee04dfc40ee511c178791946da', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '63a5fef6723d4e3ab1795ad1ea38e979dde06682', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: '423f3764a4dcb64d971c51f19b559a29909ad3e8' }, !havePrivilege && (h("igl-book-property-container", { key: '5bbe5a9d136505661899e8be00b20ba802d306db', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '17a46b9a42526f0ef0bca577e7e2ca0e94a5fdcc', id: "new-booking", class: 'new-booking-btn', variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '6ce891c4b19dc725e29ee8e15c154645d082d58c', name: "plus", style: { fontSize: '1.2rem' } })))))), h("h3", { key: '4e2bd2da73de4a781ada1ae2492e38afea8b22b3', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("form", { key: '593f05a73d6b012617c18861caac639b7665e12b', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-custom-input", { key: 'df9b919510655919851903be676b1d70f328e2c1', class: 'flex-fill w-100', value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '2a3627c4882fa158a35e0857bccf46fb5cabbafd', name: "magnifying-glass", slot: "start" })), h("h5", { key: 'eb3b41290cf351b4d2c57e8a16e4120388aa9d4f', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: '5f6f644863953abe75e06baa64cb9bbe2c71c94b', class: "d-none d-md-block" }, h("wa-tooltip", { key: 'a6ac02bbfd54458398c6dcccaa22527db01826b4', for: "new-booking" }, "Create new booking"), !havePrivilege && (h("igl-book-property-container", { key: '78d29fcf1d161f969b2e7595fd612056d3b56545', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '999fbefdee4ee41a9d78fde029620b3ae3e8c1b1', id: "new-booking", variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '7e4b643e215e941fa9aaa806ef2b5ddc690120dc', name: "plus", style: { fontSize: '1.2rem' } })))))), h("section", { key: '19ba79ef1276c9c590fb6b14b3c1b0bf98944527', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '83b315085abeb6f8b395452dc29ece8a0bc5363e' }), h("h5", { key: 'e7469b1318f434dd1f0444143ff3932b55b6efb7', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: '10096a6915148ff99166def7dc2317b2d29ebf4a' })), h("section", { key: '4e0105240a2b72838e457b61e136e5af91011254', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: '7a8314d8af25fb3c3190654897ab13e36aeaa71e', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: 'd23f9935c69af42852d792550d7b607ed5d66c28', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: 'd4a7522ec3020ab9aab4a816933e6cea6ed74188', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: 'bbf4c3ac98445d99b4ab94ae437b7fd6f388ed85', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing?.channels[0]?.value }, booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: 'c0910e74dfb8d18e7a8802ddafe4f7652384c33e', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: '0082e6f98ba8b846b982b3acd05dec1a9357527b', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: 'e3f9da44b2d5fa6e5ff8fe49970fe9e2f1ea1218', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '62c74d0188d8a766e400dd1902469e4a52396bae', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: 'dad710ec166b80e91ac8d44e94f17e4c57b8fc10', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '850861bb96d25cf10a9d427c71f51e4a19acab99', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: 'e2fdcb022cea5923736bb4babe29c2820ff959ed', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: 'b9d48186c1054357a8f96f9a4056fc30d561a162', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '4e65d899b9d6a6a7bed06a0534c45ba2ea1c91d6', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: 'c7258ccd7f5b2e8d8ca8ba535787545745e694bd', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: '8f706d891ce44944dcc6477438887190adeff4ef', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
