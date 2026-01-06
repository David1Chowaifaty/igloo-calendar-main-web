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
        return (h(Host, { key: 'c95485a3a217536c92ce5fdaa53dd14c4d6fe101' }, h("section", { key: '8b2da849d9eea1ff68c900cb0a002f0089d83888', class: "d-flex align-items-center " }, h("div", { key: '8c22385985a742738f938b898856200242240956', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '2f349f3d45ca4ed2e6f19b8c5b000f10fd4244e0', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '2ce8d5cd4975508b64266db6dee8bf2f5aa3de54', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: 'a4594524d97742529e5e199fa239dc9f8051e02d' }, !havePrivilege && (
        // <igl-book-property-container
        //   p={this.p}
        //   withIrToastAndInterceptor={false}
        //   propertyid={this.propertyId}
        //   language={this.language}
        //   title={locales.entries.Lcz_CreateNewBooking}
        //   ticket={booking_listing.token}
        // >
        //   {/* <ir-button slot="trigger"  variant="icon" icon_name="square_plus"></ir-button> */}
        //   <ir-custom-button id="new-booking" class={'new-booking-btn'} variant="brand" appearance="plain" slot="trigger">
        //     <wa-icon name="plus" style={{ fontSize: '1.2rem' }}></wa-icon>
        //   </ir-custom-button>
        // </igl-book-property-container>
        h("ir-booking-new-form", { key: '9718f46cdefd75dbb998112d3c787f5fa178cf33', propertyid: this.propertyId, language: this.language, ticket: booking_listing.token })))), h("h3", { key: '677d564ac434ba3bf89123c6632303a6ec3c892f', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: 'e56d97af9cec3f1cc59a8469526949e7c84562f8',
            // onSubmit={e => {
            //   e.preventDefault();
            //   console.log(this.inputValue);
            //   this.handleSearchClicked(false);
            // }}
            class: "booking-search-field width-fill" }, h("ir-input", { key: '85ae8dc21d9b3d22ba3862f640a0dc837ade7249', class: 'flex-fill w-100', value: this.inputValue, onKeyDown: e => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.handleSearchClicked(false);
                }
            }, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '91f2db268654257fb7dfb69ccb7d3e88f769d7c9', name: "magnifying-glass", slot: "start" })), h("h5", { key: 'eaa229e8f9276256adb4693c32589aa5a5375b61', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: 'dd217bd899766aa2a86a65076f5e63e052207a1e', class: "d-none d-md-block" }, h("wa-tooltip", { key: '28c70140e2500442243b0043f9c36789d8743699', for: "new-booking" }, "Create new booking"), !havePrivilege && (
        // <igl-book-property-container
        //   p={this.p}
        //   withIrToastAndInterceptor={false}
        //   propertyid={this.propertyId}
        //   language={this.language}
        //   title={locales.entries.Lcz_CreateNewBooking}
        //   ticket={booking_listing.token}
        // >
        //   <ir-custom-button id="new-booking" variant="brand" appearance="plain" slot="trigger">
        //     <wa-icon name="plus" style={{ fontSize: '1.2rem' }}></wa-icon>
        //   </ir-custom-button>
        //   {/* <ir-button slot="trigger" class={'new-booking-btn'} variant="icon" icon_name="square_plus"></ir-button> */}
        // </igl-book-property-container>
        h("ir-booking-new-form", { key: '1d0a5d8a4096d7175917be7fa3cfb141df35ff40', propertyid: this.propertyId, language: this.language, ticket: booking_listing.token })))), h("section", { key: '155564ca2f7e2e4253f5d9f72c7c3db447f03007', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '441654b344d000963df25e477a39451bbb867192' }), h("h5", { key: '9ef242015b7eb96d597474b981e2807c7979e116', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: '8e10240087b3aab26a746723684ec33e1636f549' })), h("section", { key: '8bae82e505a196aedf97b31cf0327ac93c9f646b', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: '7e5a8c9e9952bd26c7eae404d3d83b67f22d47c9', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: 'a1bf45307bee06f684c6fe71dd2cbe799c3e17aa', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: '063be8a8a61533f5494c8a94d51f1efed0f2b63c', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: '62ebb781ced6b4e4bfcea871c438bafcac10ae2d', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing.userSelection.channel }, h("wa-option", { key: 'c5cec0038eb22dde8c7e7d9d8d4b1095983b803e', value: "" }, "All channels"), booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: 'd0eb63ceefb1baf94646782b5beb5b65b7a8d257', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: 'e468ebb771b2fb707b75246d03b972affd349874', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: 'a7cce2798074b86c82db087223c6a9ec80578f15', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '12f9e6e3e327f49b12beee96f65b5d8543d018a7', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: '4d077082abb41bc7e887bc195bb55ac487fef03a', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '73eb7932a0e0c94553ee87f61b54aa5677ea027b', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: 'edd1103d78236a35dcf87d79ea9344e076ba3454', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: 'bd5fea4c02534534d06904408b687e778bb26845', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'df1d8cc78283d8a3308dc4641c116728804637c0', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: '5343b5f2c0ed3a0ba7bb403e49bc57f5542ee708', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: '2e534db28382af61a5b3935edaa810c783feef5f', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
