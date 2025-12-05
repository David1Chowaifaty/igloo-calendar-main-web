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
        return (h(Host, { key: '8e6f47766145418e854fc65d18716621de56bd98' }, h("section", { key: '74e3231eb78bcfdeaae898b56312a94d4f40bf18', class: "d-flex align-items-center " }, h("div", { key: '6b93e2c5dc9c617fa8fce0bd8d2441f6f5b3e30e', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '7a7a3b8844b3d7995f72e4c7221eb36015024c85', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '99a3f60ea90e8f88473db70fdfba7d91d0218de6', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: '741832bccc2e382f3dc11026316d51c0af4130b6' }, !havePrivilege && (h("igl-book-property-container", { key: 'aabfb360b61d78c839dcd31e3eaa6ce5e738a309', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '48cf523f42a6df2403564b9ede7759bd61e77f5e', id: "new-booking", class: 'new-booking-btn', variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '09daed0b2f83828ecc8c60dca833ad285f003a70', name: "plus", style: { fontSize: '1.2rem' } })))))), h("h3", { key: '451c35c5eea49c222b7f21381a607d696f633f35', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("form", { key: '3dbd0cc7828edde2fd8b936ad0dd2efa0e4e6b68', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-custom-input", { key: 'b0dad604b171265f9b7619265a426cd9449d2a06', class: 'flex-fill w-100', value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '49173b981042ce521990263cc16f42481610476e', name: "magnifying-glass", slot: "start" })), h("h5", { key: 'a0e8b681f7d77c2ce5902c0516bc3be86d46246c', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: 'fd85d80d34e849c37a5bf74c57362a6e84c79f21', class: "d-none d-md-block" }, h("wa-tooltip", { key: '8cc6667b784bb96324db73974f88c68a366683ec', for: "new-booking" }, "Create new booking"), !havePrivilege && (h("igl-book-property-container", { key: 'e66bfeab28f4e97e1b2dac47f756cacc22c39d57', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '06a17a6349237f9eaae7fd6f0ce03051e8d8fd3c', id: "new-booking", variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '74eecd84a84b2e16672bfe5c3383790dfe23e96c', name: "plus", style: { fontSize: '1.2rem' } })))))), h("section", { key: 'd1fdc305b516fade5864fbc93324d5d644fa9a66', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: 'd43612e74e3e8c460887d206d2443f7dee747b23' }), h("h5", { key: '7dfdae8fbd3a02aaec1f98ad7c9f7b467b38719b', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: '9898e89d2b660bdfcb2a3b04438aa53574af1956' })), h("section", { key: '053e64fd40387685fb63e7f359211d4b6be40fcb', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: '880db4e9fe45d130b3df502ad5791e3217d5dbfa', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: '946815603ac9aa630bec281ba5d97ed8e5ae6402', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: '578192dc09a7c4c4345ba39b00b5f3c6220b1686', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: 'fd66e97b95cc88d5f8ce30faab52c6b5c09244d8', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing?.channels[0]?.value }, booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: 'c409e6ef922bc888078e8b3d18ef757a7399b8c4', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: '2cf6ef29d4b980635ccb3011897a4a50f51ba632', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: '0361016e75c3e5f00ca5dfdd83733bc57e99c721', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '2a4b6961caf84acf8bd86c80c92be2e86ac9ca58', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: '3b4982d5393b288aa55ea1bc0dbbe5aca3d90190', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '2f03edfcd2a74c63fa01627ac42d8bf97a8250e5', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: '7ba7894e7152db8f0789c4272f30870b6004ccbb', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: '1b0a4c83030b70dae22ff16cae0d960833816b7c', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'bb465425c0529dded92fb571cf9f78da9814081e', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: '524e6433a80ed983894eb1a173e228c81ebc5b8a', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: '3b745c65ea50652716ffc4895350784919845799', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
