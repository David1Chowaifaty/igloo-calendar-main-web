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
        return (h(Host, { key: '5a2cfd6d6e4033ea0e3bc99e7994bd29d8392c37' }, h("section", { key: '40e26ca62005997946229175a5a7ce82cdb5722d', class: "d-flex align-items-center " }, h("div", { key: '3315baabe46c3f84ec9e493cf4899cdfe1454421', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '6bee5dc073b847e17898a005d07e1ac3cd6474f4', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '04e86e4591752a7c2c91fac3b42239ccda5543fe', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: 'dca72ce576f9881aceecfe6d9b2fc1a53e877398' }, !havePrivilege && (h("igl-book-property-container", { key: 'b5642e3f8bdad46f9b4a1c7a4263a2a646464d8b', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '21d42a0e325325fae3459a816da009facc84e966', id: "new-booking", class: 'new-booking-btn', variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: 'dbe6364e3927ba33751feca0d1677d10c9875428', name: "plus", style: { fontSize: '1.2rem' } })))))), h("h3", { key: '0d27390d525d05797233ab74a35991fe83628d3e', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("form", { key: '5d3761e49b2e5c305ba7641a47593a137fad0b3a', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-custom-input", { key: 'd098ca307343bc72c8f007fad9eee1a7161cf91f', class: 'flex-fill w-100', value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: 'db81167d972b06f598c9d8ae1a5fec0b26a68289', name: "magnifying-glass", slot: "start" })), h("h5", { key: 'f38f1d7814437dcc99e74df4a634d059f145f788', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: '56a7f4638b7a1d9f1a8120142c4c9afc232501f8', class: "d-none d-md-block" }, h("wa-tooltip", { key: '28b1b7f7ad7a94eae2ed13d770cd33117cc2bdf5', for: "new-booking" }, "Create new booking"), !havePrivilege && (h("igl-book-property-container", { key: '1d6b0d4b8aa61f966fd9613223539bfbb4607834', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '4a6c955133c65ff7c3fcb4aef62a5262dbe91620', id: "new-booking", variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '64e494bdd22521a13e1b797f0d4a238243f990ca', name: "plus", style: { fontSize: '1.2rem' } })))))), h("section", { key: '3c04bad66e40389d50f1a6e08102adfd7204f905', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: 'a0dd9860d9482181590078faf34043dec232047d' }), h("h5", { key: '00e57727e772593c918d593d979af6b1ac57c8ba', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: 'a22763a1f34eca1cacc08ac7122ee91ed2e79304' })), h("section", { key: '3fcb753389a9976ebcc5bfcccacdf897e161927a', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: '5aa486496089609d498393731c68a2e5d7ad3658', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: 'd06b0f16faa2c0691deca0c219cad8b4e5a41652', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: '37da5b6c953e0efba5f92ec124de11971d191289', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: '57e296ad848e12462a605595df316cfaae2e483e', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing?.channels[0]?.value }, booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: 'b328f9bf914100163d8bab9f444ca4910e9db815', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: 'a875f91ebac127e9860d30bd4b42155c56900c69', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: 'bb939af28d6487e2142aef16d72363b08b44652a', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: 'd1acf83117cc9da449241c1af5f9a211971d73bd', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: 'c73f93137fa33a4068f87d2b574b7d56bc789544', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '55833b993c1277747f5cbf390fce512e5a391cb5', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: '51962daab79df947c3164354c655130902f14b3d', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: 'fb811db61268052cf0e50750fd51e44e7b4f47d5', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '6f3b88608f0300f0fe47516261b88eb2257afdbf', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: '2d987dd4eaf0961e742e6289925556abb4886885', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: 'd11a56ce7892d3963c2de77041077f6b7438bf91', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
