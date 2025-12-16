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
        return (h(Host, { key: '731daf0c5bda1225561e8e1ac7cfc32b4de4fad6' }, h("section", { key: '66940afd4360ff91bd3d03b1bdd4f6496a70bae0', class: "d-flex align-items-center " }, h("div", { key: 'abe0ad99208ae17c3ab0f345786c5e5ea1369125', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '8cb280e24201bb8e9f0ad177119ff7fece6892c2', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: 'ad08b1967d218aa40d47b06bd0d630f6448b426e', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: 'bb8c7d1be02809819ba6e672b79cdfdd5003decf' }, !havePrivilege && (h("igl-book-property-container", { key: 'f98399eb1b86b6255c8b058cf64cdc4b995942d9', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: 'd90fc62f08df4655fffa12def83b7c9c86c5a8b9', id: "new-booking", class: 'new-booking-btn', variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '787997f6cb3dd46dd21c032fe52fb93621f6f6ee', name: "plus", style: { fontSize: '1.2rem' } })))))), h("h3", { key: '8d804de6b70f36add166912508e2c3c67fa36bc7', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("form", { key: '6f46c153dfd88518aeca547633f7e2d8f232f375', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input", { key: '93406c1d6747302347f6dc1eb29d0e9bb46e6452', class: 'flex-fill w-100', value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: 'e3b5540a52c5ef8a696d02bdf29990e7a1e7a06f', name: "magnifying-glass", slot: "start" })), h("h5", { key: '26a909218c07d4459e9852c89400e5f1486fdba1', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: '9a662702d4cad920f609745e75aa4532a96cde40', class: "d-none d-md-block" }, h("wa-tooltip", { key: '20cfe8af12e3bafd315b9f42197c90f678011120', for: "new-booking" }, "Create new booking"), !havePrivilege && (h("igl-book-property-container", { key: '69d56aa71037eac3b7af5deced6b0bfe9b846fec', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: 'bfbb6029b9e62d30218a9a75d8b2dcfd1bd3b80e', id: "new-booking", variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '1830712794b70fd699d7d1f81084e082f8883ad5', name: "plus", style: { fontSize: '1.2rem' } })))))), h("section", { key: '542c4bb205d8edba7b4660fc72a55dc449b9fffa', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '643c2f2bf1e0b9e7e1ab96f3dd4b39bcc5ee1ff6' }), h("h5", { key: 'a157d8863fc12c94a4a4c845e905bd670a495182', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: '908a9d1e896f04402ba161247f7eb081581746bd' })), h("section", { key: '09a5d7bab2c36b5e0d8bdf6ccc37b287535b6fac', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: '5f0f11a4cae23c28b3a1f9759b86b66d4850f8fe', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: '77c2eb679e27fc412067d3ece75b78195657532b', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: 'e0da9287aa9e909756b85d8cbaedc63137455da4', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: 'fc46e208fa3d6bff48f13e868b36cbd12560f2e5', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing?.channels[0]?.value }, booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: 'f1f3c2dd17d796bef923ad9f7b95662838646c04', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: 'a0ebe22f68c80d63b0c3769592941b8a3f6ed6bf', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: '9d48213700c3416679ca2a7d4344076ddcd33c7e', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '3484795c019ed4a85399946793e053c00caafc5a', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: '14ae88fcc94790cf0588735acba0025fe38f8ced', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '8d45712fa66744881e3a18c623ee10cf262def22', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: 'd7370a840db1354b1b4a6d643ed601642d57de71', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: 'ab5d9a5cf50103aeb7fc053b2acb82ed7d535a97', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '4cecfd4e8bbdadb0069a2cfd5da77d8bc93ba516', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: '0773b27e25bbac163a2c04640c27ce820f5d6fdf', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: '6f0934525097e22e3b34cf761e44393670cae998', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
