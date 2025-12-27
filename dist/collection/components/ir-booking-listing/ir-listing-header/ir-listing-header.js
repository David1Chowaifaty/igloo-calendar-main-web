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
        return (h(Host, { key: 'd43b39aa0243a19e677b6a25be77b2b7612f0f2e' }, h("section", { key: '44993be27357c4cd4c3b4b7bed658f9e2d685b00', class: "d-flex align-items-center " }, h("div", { key: 'cb68b3c6a102dbf1628e642c969e4ad577d92db6', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '26a52038d60457136bc561a906c2ca44acd3e100', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '8d32489fe3d082c69a01d9e2c5a49e576c0b0c16', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: '2bea2e9594eb5ba38e061138bba03b1ef1e93ebe' }, !havePrivilege && (h("igl-book-property-container", { key: '495f220ed072705fab84999054659b46e4bd38f6', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: 'ca04c1dda3781741fbbaec534f7a5d61bc8137b3', id: "new-booking", class: 'new-booking-btn', variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '16dc31aac80786ba0e34375e1393fca2b745b035', name: "plus", style: { fontSize: '1.2rem' } })))))), h("h3", { key: 'cd24e00ce846c56347559a13a2eb7f767fc862bd', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("form", { key: '00257933661fc638cc2dc121fd73e85d9d1b492b', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input", { key: 'd217e7a03e58b8a427fb51f27ca050ee88d026e3', class: 'flex-fill w-100', value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '72055530335d48a3e289f7f2a9bf528c2febfe36', name: "magnifying-glass", slot: "start" })), h("h5", { key: '531e1c030cc7df3eecf61f2e58e4c24e8792bed8', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: '09d0eadde1d92ce6eb8acfa209cbe57226e06baf', class: "d-none d-md-block" }, h("wa-tooltip", { key: 'a66c542ee240da5ba21637eaa7fbd15a21b5ccb5', for: "new-booking" }, "Create new booking"), !havePrivilege && (h("igl-book-property-container", { key: 'dd25ab3755d874312ef31add19a043c315992aaf', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: 'ba7a0c0095e97ee2ebd42fd6937064974d252227', id: "new-booking", variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: 'a01ba5aa8894d5e7e4d8936134e819fc2d5f3d47', name: "plus", style: { fontSize: '1.2rem' } })))))), h("section", { key: 'a9c89642ec4efb47ab70b8b3dc4566981bf25275', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: 'd4470745970d441bae444ada2f6d4a6945da4f16' }), h("h5", { key: 'a6faedc57e438fd14f49c7ee21b59d7cc920a670', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: '314cac3b0f8eea5cf828c19a85baac525a64c8a2' })), h("section", { key: '2a6764b0d3b73be04eca6391346a1e01ce3e29dc', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: '4886172259106ea6077375abee3234ff5b43cb2c', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: 'f40e2fd690d37ebe2ead483b2463ed44a4ebf052', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: '26d657627b52b029ea7c39f9ab6e940bc30bc405', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: 'cafcbe9bdcb37b782b5b3beacd3ff5c0dbc54d92', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing.userSelection.channel }, h("wa-option", { key: 'fff3b5fbd4dec4ed361cd7abad9d119deb72c02b', value: "" }, "All channels"), booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: '2e27b0ecfcc5812501a248c6dc601c2dbc6a2a7e', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: 'dd383449b5eeb2e20842a34296a44ad31ecefd97', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: '85aa0490cbae5a58878871b4bbfb3b51e8f1d83d', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '40c33dba2c96875f506b3240c60fd5c920301638', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: '2c3fdfde2a592b4fc5c5812f53c14475519e3451', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '32b2f3696fc1070ca34570e0dc4cdfde2ada0efc', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: 'd2f52e2c198a9517b7f10e619ebc84f9e2030677', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: '9ab0f4584ec90e674e3efee4d649f13c7838d2f6', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'e32af7f4d4bd3dc8c5de03342b1fda6fa802527d', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: 'c3763709c5336da8a3b29e62c1ff00395371fc70', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: '9f691ed57bf359a8429b934dcbb7fd117ced34ac', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
