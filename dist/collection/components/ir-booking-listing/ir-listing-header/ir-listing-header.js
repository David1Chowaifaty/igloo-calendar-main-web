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
        return (h(Host, { key: 'f58afc9e82ade038a7f720e4c0f8abff49198143' }, h("section", { key: 'f24187cb57e9813353a05888543ffdea7ab02ff6', class: "d-flex align-items-center " }, h("div", { key: '85c9767f43bf6244390981caa6a157e02de77c6f', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '3e0ed36f1091f1ace42eca60a7efeddcbe3c6393', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '98092682b86651e21d2e89897f4562d406ca87a0', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: '724dc30e51133778bc6f1cafc578295c2680c931' }, !havePrivilege && (h("igl-book-property-container", { key: 'e702fa0284f571a9739a1ee203ea4d0c3f77a505', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: 'dfc9fbdf5d6f9b86d6fb5bd9d4a6feac72327c57', id: "new-booking", class: 'new-booking-btn', variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '2d346d2089a7e86c304542dcc311cbf252831d2e', name: "plus", style: { fontSize: '1.2rem' } })))))), h("h3", { key: 'a9d56efb6ff4b827fce9b906689ea327bdfc772c', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("form", { key: '5eb6a9c901ce08aba3ae34c6c814364c21008970', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-custom-input", { key: 'd47e99c654936f0b71b63ba758e8196cfd2fb51b', class: 'flex-fill w-100', value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '7fa0152994d1ba7f6378b642b47a9c741ff52c3c', name: "magnifying-glass", slot: "start" })), h("h5", { key: '7a1a950e42a35948b6419dbcdf15980cdb501555', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: 'ad08fca7ccd9113f2f72697d9f41cec5d49784c7', class: "d-none d-md-block" }, h("wa-tooltip", { key: '3dc61fca111d4b16ab5fa1fe81950e26b36d3567', for: "new-booking" }, "Create new booking"), !havePrivilege && (h("igl-book-property-container", { key: '81ded7cb99b467986ff70770ca5725044211c6ad', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '6b8167c5496d472d9544e472677efd0c3f7315da', id: "new-booking", variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: 'e5cee68a692a6a169c4f190a4bde47f30afc0674', name: "plus", style: { fontSize: '1.2rem' } })))))), h("section", { key: '25c9cfffed4b67a4f2fa5287e4b4caa9cc9aff8a', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '85e97b0ad86fa6bdca49851d7eaa2f0a677cc3d2' }), h("h5", { key: '65a66c759cf1346f635ae271330e1f0a6ac96341', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: 'd2ca12e512e36e3f606955d3bbb390035f7d34f5' })), h("section", { key: '73dcfd493e01ca0032676f42aa34473907e51e72', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: 'b1a29e9aaaaa16ca6d803e711cf44be0aa807b5f', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: '8886260e43154200eaab46a7f2c7ea0032746f45', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: '5c6ebf5ec920ec5374a85a43f3266066ba61d8fe', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: '65a5459f3c04ffd408ccf7b536ef11ff23833c9a', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing?.channels[0]?.value }, booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: '46e03a57d53e155d67e67d77dc6e635104c89247', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: '54dba6fb91686c0b0f8160c9e86a2f8647444a6f', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: '305ba3d621b15142e86e2623ccfb7bdcdf213902', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '462b3279bd047dfb9ff9bb0ea2e32ca018f9a3a6', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: '09c022484f552a77ab95df3d327181a6cbc52255', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'c06bf6f5d44e3043b00e9bd5b04d1d94639e4748', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: '78f34f2f3cdf49406d522492dc8262fa7bbc00c8', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: '972830084e679feb62bf087f11518b9bf78417dc', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '8d8d0305038f4ac27c7b12cf0efc8595b44b1b93', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: '4d7f07ae613b2a6b04b37e2c2cb4fb4ac0f61d0b', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: '7c39c6c4a5ae2c3634606ec9fca5d028726dc98d', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
