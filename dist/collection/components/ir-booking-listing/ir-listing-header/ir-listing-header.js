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
        return (h(Host, { key: '9bbb51d80cc4d3719c4c69dd746721cee62eff62' }, h("section", { key: '5a4c9c9298ee1a7474c5df15ce4a6830d17a5510', class: "d-flex align-items-center " }, h("div", { key: '3533058804e1e5d669ce9d204a467f204ccf1bf8', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: 'a50597052edb900e4e340df65675b6514a30d316', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: 'f3f4634682f99de8801285120790240356bf1ebd', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: '3999216af43b7d7257c15961c2eac61ec6999b8c' }, !havePrivilege && (h("igl-book-property-container", { key: '3f21ea2f7cc5b074e8723a8ed90d2219ca160efd', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '801fc2240a1dd5b2ea584618a32dedd40edf92ab', id: "new-booking", class: 'new-booking-btn', variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '1cb90b32b5100fc5d46f596d76ba256e37293154', name: "plus", style: { fontSize: '1.2rem' } })))))), h("h3", { key: 'f4654930973addeefa82e21ba7164bb16a6af27c', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: '4230f1df10de81aed191fbf7bec81f0fa79e2404',
            // onSubmit={e => {
            //   e.preventDefault();
            //   console.log(this.inputValue);
            //   this.handleSearchClicked(false);
            // }}
            class: "booking-search-field width-fill" }, h("ir-input", { key: '083218550d72e05157e99c9da8ad341668d05f01', class: 'flex-fill w-100', value: this.inputValue, onKeyDown: e => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.handleSearchClicked(false);
                }
            }, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '02bbc9c91b118cc164e7c4388960df8bbc61b2bf', name: "magnifying-glass", slot: "start" })), h("h5", { key: '1bd25012bab46e9ddb0f28cda0ce50f1832a1dae', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: '0f3fee97a37837c4cbf8abeabfa8aa60034314c9', class: "d-none d-md-block" }, h("wa-tooltip", { key: '256c31ade5bb474bddb6451b5edbd2e21470e69f', for: "new-booking" }, "Create new booking"), !havePrivilege && (h("igl-book-property-container", { key: '1f3f2c62f4932584ca19694af28fec4a7a6859ef', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: 'c62fed4a52dade97c24aae1cf8ec9c762e1450bc', id: "new-booking", variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: 'f48c3d8e8701781a8074da5271c1e148b3731729', name: "plus", style: { fontSize: '1.2rem' } })))))), h("section", { key: 'dcf564329d327374bde71c72f18a0b6f99e46f1d', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '4123a92d2d3253cf1932b1e87b481b0a5174e4d4' }), h("h5", { key: '56d7ef3651adcc9e34d1afd27699e31cbb1298d1', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: '77b919e50eb54d358c0afc8ec5d1a35d44ff2714' })), h("section", { key: 'eec8769d81e56604ae74f329260d448e59022b8a', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: '644d64671aee2d1e7e40e54a80862471140c4e9f', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: 'fb0c194cfc97fd033b5324df9352d8f12956b4ef', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: '5bbef0e89bfc7900efd950da2f9f4d38c495ceaa', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: '95eec8ae44bbac1c792bebe683aa0c19b2bb6987', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing.userSelection.channel }, h("wa-option", { key: 'd5ad44a0e5de28830e2f2ed3ff4a364fda6c2081', value: "" }, "All channels"), booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: '778ed5b790fecb44b206cc2cb20632acd0ee3380', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: '95f4339ee69b4aa3688ab6486750edf010e1414c', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: '7b3c9aec0696f68c28e576cafca5df28ebb76269', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '0c44be6425788ec1bae6e31c422a520d7842cffb', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: '98a89aa2eb397c98b91901f6bd561e7ea729f9c0', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '2148555be7e02cc543669e9227c5a9a91de02cbc', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: 'ae170a235908041e5fff98b9d12dcd4d29eee65d', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: '63d529b5fa13ef4beeed9016f7475605053ae186', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '50a6b68f872e09784d805a9f82e26f76d12bc439', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: '093d61c150e95bd52792bac5d35c821f91d876c6', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: '4959055b52d294d4d8178c65cf7cbc956c89537d', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
