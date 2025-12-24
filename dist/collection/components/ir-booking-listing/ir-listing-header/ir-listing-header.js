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
        return (h(Host, { key: 'd62edff69244c1fb711766cbbd06670956bb542b' }, h("section", { key: '37bda1ecf0b1a39f59c55c48398bc8c12fdd443d', class: "d-flex align-items-center " }, h("div", { key: '863e05f9bab3ab1c90c68a0e84c5ff29396f59ba', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '967e8159199b6b8bc62c579fb1691ff90ce19d61', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '3d7a07c84a7da857dc7cc5dd0e76d6ea3df74931', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: 'b45b8cce4ac574a01d8798d2e1c5c4a18134ce90' }, !havePrivilege && (h("igl-book-property-container", { key: 'c65908228c91f3f994f72fd2546baab371a8f891', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '6f019ee295a6e3bb280febf32eba1007f49ab5f6', id: "new-booking", class: 'new-booking-btn', variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '9350d315f5b100a8d41898f98dcc80f55f2e6947', name: "plus", style: { fontSize: '1.2rem' } })))))), h("h3", { key: 'e61fdef19d432f4c004f006d1bc72c22dac7d956', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("form", { key: 'beee7d1299c79a42ab0f1046a452ac6d0ea91a84', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input", { key: 'a936220b27257f5fa1c37e9513ed825e194d47cd', class: 'flex-fill w-100', value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '231aab44b0da23f69171c95c0c367819689f6e79', name: "magnifying-glass", slot: "start" })), h("h5", { key: '5478ed3800280461e76b0f92798a556ecad60f26', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: '545b0e3c2ee9a2f259754604f76f636222d295d4', class: "d-none d-md-block" }, h("wa-tooltip", { key: '8fbc7e63afb6710472a66d44743a1b425f2b9897', for: "new-booking" }, "Create new booking"), !havePrivilege && (h("igl-book-property-container", { key: '5ce7aeb2370ca1ddd574c40bf0b1230f2a61678d', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '1a586781508b2c843e0392e93d4d9d1cd9c2ad72', id: "new-booking", variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '0420dd5d48aff5cb3a5ae812fe91ad2d414a784d', name: "plus", style: { fontSize: '1.2rem' } })))))), h("section", { key: 'a7e2f9f6261c574dce9f682315104d6ab03670b5', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '833a502ec355fe4036c0505ca097b8db0d43dfad' }), h("h5", { key: '3ff2e6e034254b3a7d2044fb60c90b265ada1243', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: '497d7681a7c21c2dada066fe014c66a959c04e36' })), h("section", { key: 'adf6d945e75dc5332251c6abb74df835953675f9', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: 'aa42c366dd9be96b52b284c6796f0a471b4335b1', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: 'e794ba594a6962ab885b7cf89bff63d3bec7fcd5', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: '7807e8ca624b46290d6aa4f9eef0843b331b5567', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: '6b48186bb5a32cb7d84332f32d0f6d8a94eaabdb', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing.userSelection.channel }, h("wa-option", { key: '32d56c1d06c6ed067b0b1fa5c61e8fbdc2677b62', value: "" }, "All channels"), booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: '447d1c1066c473657b1e4138c187833016cdced7', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: '06fde7e8b8abc934a8d92bbbe7faca4682eb044a', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: 'b4e9df3e49428b768919bd043fbb9a7d90e4e338', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '5e8d2e6443cdddfc4271acbb272e6f5486be5919', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: '2380e41350be6c83fd3e92cf0b7b346ab6e6d751', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'df0ee899e5a2c1b99e40fc3a325ddfc3637f54d1', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: '946f48d3fb1ab9a0bd76155c991b71b01e31bcb0', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: '0e4e9c9e95182043f9f2ee4a9ca158dfab26dbc7', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'd0a64d042068cf4a70fc9782d5cf6993c5506861', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: '53b4a04a6c91c975ad6e4d23ff6903bfe4688b12', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: 'ffd9553e69c2a827413e285e15c186c30d748378', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
