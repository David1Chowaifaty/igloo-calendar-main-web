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
        return (h(Host, { key: '344f474614019eb4371dced4ce186ee12e2dcc5d' }, h("section", { key: '275664ec38f99a8e1ec4fe598cf5232b61c9f10d', class: "d-flex align-items-center " }, h("div", { key: 'e909f1bf72830f20ed94a7f0fe30cbc061d8f2bc', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: 'e341c066286481d0ec9a93c753898b2561ad8f9e', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: 'ed74ac2494b23f675dbace507330e7612dfd30a4', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: '0b4a446d8ae418e0b0148ad9f1172ea86415a0aa' }, !havePrivilege && (h("igl-book-property-container", { key: 'f792e8a549610256459d8a7aebcf4fd127134f98', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '592e32a6d125d774b8263ed194b1bbfd8754ed67', id: "new-booking", class: 'new-booking-btn', variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '422a0c073219dea605d0725b0244ac613e0f003d', name: "plus", style: { fontSize: '1.2rem' } })))))), h("h3", { key: '2705287d2b9672cdb27826af3c78a8a98f0545ae', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("form", { key: '63b200b22163eac43cbeeeebee4a03ebbf0c4e10', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input", { key: '6717dae35cb5491fc066ac34fed0f9a112a37a37', class: 'flex-fill w-100', value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: 'e547bf5f05d8a6f1f188269e3fe5d242e39f0ba3', name: "magnifying-glass", slot: "start" })), h("h5", { key: '691f780a37ddd209705d3c7d5a9c19930ec9f91e', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: 'c5269b60b23ca05a04d42e3796be4cd95d5a3883', class: "d-none d-md-block" }, h("wa-tooltip", { key: '44cb8ec13f2f1de865e07d8250bb2d0073e0806c', for: "new-booking" }, "Create new booking"), !havePrivilege && (h("igl-book-property-container", { key: '946c77e2d59fe46aaa5a2902b3a9648ef183195f', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '69c2023fdd13e8ae6a6dbcf24dec04b73ef6caff', id: "new-booking", variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: 'b5de6a816ebcfd0ed867f5cd8a8597f2be79171e', name: "plus", style: { fontSize: '1.2rem' } })))))), h("section", { key: '1d3e64e3b0d6283845c0e1b6c546db4665fd24c7', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '11a5bbb70b6b1f2034d246a4c6801c4e9bb86a38' }), h("h5", { key: '9c6dc72122438ac12703c9bb1a47c89d37abd639', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: '81d8645a05797ebc9d62fd40a5859918966c5a6c' })), h("section", { key: 'eb6424e68c278b51b599e8f3bd411cdda4c8339f', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: '596daecadb268dd0bf5068b135620ce5470fbbd7', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: '904c98980c57ac2f6bc75df587482a27bc198c84', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: '931ce0b3464e19d028083c2575105e44b82cdf00', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: 'f9093f4ceacc984782374a8c40f71b1c0655bbc3', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing.userSelection.channel }, h("wa-option", { key: '4ed6cd5b94e1c5ff3defb0ebc2ed7b44594fb7e5', value: "" }, "All channels"), booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: '04c99679eff736c17e34552141fe239e7b8c93bb', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: '34e1a18d3051e9dcb2b8c28b8f3d0fe9a0225a0e', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: '1ef86534d010ba2e42363237cbe9f7d0ef10ccb0', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '5b90dafe84265c55d65c3f849884acaee9a9f1b0', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: '074f432ecefd32d46816717c1e336032608178c4', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '2bff8a1d96363c5570ad7aab15a0fb252e277c40', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: '6609218d0c9c2ee1e91aa47c469a259b2b7d7da5', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: '9f298125181a8c3e933bc4cb4d67a02488e38dd3', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '9de69a75555248bb64025cee99decfb03a96d843', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: '76682179dade89d51412bc843906ee8f42c10e76', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: '50bbba2ad6b4f98eeed4e2d634ecd9a5f57d4501', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
