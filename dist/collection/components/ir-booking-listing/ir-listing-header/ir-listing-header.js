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
        return (h(Host, { key: 'e852c1b449f5d0728556ffa2cba2d001546ce206' }, h("section", { key: '626664801f21e485a1482beb5282ba79bbc91000', class: "d-flex align-items-center " }, h("div", { key: '02e1af97eee00899fb368195a6b5c4ab617a93fa', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '2e95eb9db92b55055cab8733423d0b2161393ec4', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: 'c05689b36c633d560a33bba0ff556c81a3480442', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: 'aefa3cf887e8f7b13339a5f193e2de30bd6b1a1b' }, !havePrivilege && (h("igl-book-property-container", { key: '5ae673831209d8cb5bcae38bddf29fa5f3b9305c', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '39a6ee9c5298b8ec2ed22037a270d6fcabaac650', id: "new-booking", class: 'new-booking-btn', variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: 'b3291a614f478145594743ced1959b731a6a1c84', name: "plus", style: { fontSize: '1.2rem' } })))))), h("h3", { key: 'fa77cd86aabf454c41a1cf8c6d05dddac24789f8', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("form", { key: 'ae1edaee974e40e0395da10ba2a783b8426de8ee', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input", { key: '397354b430b40b77d38a7e48cd4f29c2cf88e1cf', class: 'flex-fill w-100', value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '9fedb137055b9e2e1c60f8914126a667f9d3a2c8', name: "magnifying-glass", slot: "start" })), h("h5", { key: 'f4a23b1906da412bf54233bd3b6553d3530b132f', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: 'f989e53959cfcf16a72c0169198c5a09c07fc491', class: "d-none d-md-block" }, h("wa-tooltip", { key: 'd8b094466abfb23db6948e5f9c6a7ec0c3152863', for: "new-booking" }, "Create new booking"), !havePrivilege && (h("igl-book-property-container", { key: 'e57b032550846c11f18cd1c48bb9c91a2a59dae7', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '03ddde42987ce2e81c39ad654129a32882d21854', id: "new-booking", variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '329935dca9280435a145d9e03822da23cba6eb7b', name: "plus", style: { fontSize: '1.2rem' } })))))), h("section", { key: '95d4fdc72ddd326d25720d30ad194dc7e0dccf95', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '04aedbf25f639caaadb8ceff3e23348dac11d686' }), h("h5", { key: 'f7f7c307d9c51a22368e988df7db024c49654ebb', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: '10775279d4ece3d54f25b3944ed750269147e11b' })), h("section", { key: '96d0fca7cc0bebb205c89770951111337005b0c2', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: 'a0e87fbdb6150967cd1f5e21e50fe76d58574aae', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: '0c503bb8c41bb6c07ac8f203552ae08ad22ee29a', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: '039338e006284b42a478f587bd49b4acc8030344', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: '0f78f776fb5a71aaa24284fccff03f0d7fb8abd0', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing.userSelection.channel }, h("wa-option", { key: '81868eb8087391e6d76f08104b3b2d1d3a2334a7', value: "" }, "All channels"), booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: 'd8415f93c6832cf82e107b05ca8861368b79647e', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: 'a25f1b8e4a918f2efd3c2fd09d5ddcbccebf100c', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: '40cf690e3e33b322508638b0144399ef417e9963', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '24244cebf57034449b3ea47611c571de7b74c358', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: '01396f706c70ed1b184b29f751922fe62246a464', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '06d93302c9f396a79cca68245334536273fbd094', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: '0f3a2f656fc206792dffbacf20756965e910702e', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: 'e1264055c4441eb5d69838e84458810942d58275', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '8828f468a62868ed229b53ab86f193cc6b5ad142', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: '25e11585998abb902534ba3a55fe5a4792128278', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: '8658a5f29d4dd18f9e620373dc301ec21cefff2f', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
