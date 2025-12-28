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
        return (h(Host, { key: 'f6553482ca047e96a6e0d655b63d23c7f4ab9a34' }, h("section", { key: '5f60adfd300a804a2809af775be47958424004c9', class: "d-flex align-items-center " }, h("div", { key: '8026ba9dc45392cc268f1ee602773a29b50a8d90', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '35d7307dae5e422e8ad22aec4c7e09f4e71aa811', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '5b3ba3dc67938022e82705072b5f28947435fea2', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: '8dbe8f40865cd0524a4528e6d0ee9a5d4271abd7' }, !havePrivilege && (h("igl-book-property-container", { key: '4b4368f0d5083a09b180410814675e45c9a030ed', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: 'f81eca7d065da288f6c955908bbab5ae37bd1c4f', id: "new-booking", class: 'new-booking-btn', variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '48ba3f35fa64e88fd0c110080e79d2a793ae972c', name: "plus", style: { fontSize: '1.2rem' } })))))), h("h3", { key: '58e30e95ffe5c294fa1e874c5c7ae51c322bb9a4', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("form", { key: '6c616f1a4f20f10ee6793ac7fd3a897dce343d85', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input", { key: 'e26a67a389b6989999cd2e9e9f93387b32d3bd5e', class: 'flex-fill w-100', value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '900fab076fc9d45a7ac95a5d766fd787f624f1c4', name: "magnifying-glass", slot: "start" })), h("h5", { key: '0ac58fa6d4db58d0b4638033a359584daea9d70e', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: 'd3ffc40ad516e28fc30d9d1334ae8c19b141d7a7', class: "d-none d-md-block" }, h("wa-tooltip", { key: '3463d1ea243134512922194948f28d402e7c8ec7', for: "new-booking" }, "Create new booking"), !havePrivilege && (h("igl-book-property-container", { key: '4cc53bd45da185cbdf5ee1b1a6e09fd15ce8883e', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '7ecb3f14a6ab36b81159ac6237e66ac2b4f99e6b', id: "new-booking", variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: 'bd9bb7c39f1f3a05ff201c0d7620f856d1c590f4', name: "plus", style: { fontSize: '1.2rem' } })))))), h("section", { key: '7c5d0cd04fae5295d7b2581805175ce1f9e9c1b3', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '7a6479fbf26f61acea5cedec85a6a5cd024a55fe' }), h("h5", { key: '51317e17b051d48614495ab142ba761fc67e1bf3', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: '5c87fbd6312c9d6927a8bb317fa870a3fb6f3bff' })), h("section", { key: 'ac59ea6d71657154929dc57f8ea430fcce000e1d', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: 'eab609eda47da92b9d6978ffc55e035dd78a5f55', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: 'f6cc97bc0a146f9d34c808d78f04722da859eb0a', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: '0d070dc1ad3ae4b8971780e9335fd71f1a221977', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: '38b7e9ede2dffd0cade77852fcb3e21483bce5fa', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing.userSelection.channel }, h("wa-option", { key: 'd1f422922eda9c7308c3abab93b0f1954ee21f25', value: "" }, "All channels"), booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: '60a5ef7b6e826e5094a0c17f6007798bb98993b7', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: '453e54ab7bc48f7714ac096b868cc98a17e22374', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: 'f4151595ab14f0514f9ded92177d782a4d399674', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: 'cf1d9711518f27269b21f9c0fc3b49762f6896ed', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: '43cd4674d5bc1e8838b54051cfd60ed9d0fc2d3d', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'efe194127d46cb4f8ae220757e8df8d7310c6a18', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: 'dbaa3e2eb520eab27e1fbbaaac3217d2d1a17a10', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: 'ffdab3052a9b3e7ec13cc1238f70111236ad981e', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'e04d8e9eb45efc811a8e3a2e9a3ae7703b94d9de', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: '41d702cca4f20dcc5b38b6b8ef1f47d65fcd7292', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: 'bde3a72e473402535fa3d5dafc6c3f8259f2a5ab', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
