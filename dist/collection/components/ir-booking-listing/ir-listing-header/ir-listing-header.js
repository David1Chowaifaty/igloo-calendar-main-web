import { BookingListingService } from "../../../services/booking_listing.service";
import booking_listing, { initializeUserSelection, updateUserSelection } from "../../../stores/booking_listing.store";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IrListingHeader {
    constructor() {
        this.bookingListingService = new BookingListingService();
        this.propertyId = undefined;
        this.language = undefined;
        this.baseurl = undefined;
        this.inputValue = '';
    }
    componentWillLoad() {
        this.bookingListingService.setToken(booking_listing.token);
    }
    handleDateRangeChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { start, end } = e.detail;
        booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { from: start.format('YYYY-MM-DD'), to: end.format('YYYY-MM-DD') });
    }
    async handleSearchClicked(is_to_export) {
        if (this.inputValue !== '') {
            if (/^-?\d+$/.test(this.inputValue)) {
                updateUserSelection('book_nbr', this.inputValue);
            }
            else if (this.inputValue[3] === '-') {
                updateUserSelection('book_nbr', this.inputValue);
            }
            else {
                updateUserSelection('name', this.inputValue);
            }
        }
        if (this.inputValue === '' && (booking_listing.userSelection.book_nbr !== '' || booking_listing.userSelection.name !== '')) {
            booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { name: '', book_nbr: '' });
        }
        await this.bookingListingService.getExposedBookings(Object.assign(Object.assign({}, booking_listing.userSelection), { start_row: 0, end_row: 20, is_to_export }));
        if (booking_listing.download_url) {
            const url = booking_listing.download_url;
            this.downloadUrlTag.href = url;
            this.downloadUrlTag.download = url;
            this.downloadUrlTag.click();
            booking_listing.download_url = null;
        }
    }
    async handleClearUserField() {
        initializeUserSelection();
        if (this.inputValue) {
            this.inputValue = '';
        }
        await this.bookingListingService.getExposedBookings(Object.assign(Object.assign({}, booking_listing.userSelection), { start_row: 0, end_row: 20, is_to_export: false }));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return (h(Host, { key: 'a0e4458bac5d645fd18c59fecedd676466e03a7e' }, h("a", { key: 'dff3e448386a06d12373cb777be533c4560a0797', ref: el => (this.downloadUrlTag = el) }, h("p", { key: '70b5a2db7534bda88803ad2aa62ebe7fa9bbc780', class: "sr-only" }, "download url")), h("section", { key: 'f2a860c406d7a71cc4e0bc57af27525e1f604877', class: "d-flex align-items-center " }, h("div", { key: '7ec268b264e7dd14d8e90d1e632ec7c7c55128aa', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '12671dc7d85dfb8e02beb762bf56e294537cb2f6', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: 'bf10fb6111e5e4d048e400f7715660330a7d2b76', class: "flex-fill" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Bookings), h("div", { key: 'acd3c1b18032a0d6826ff6d8fcbe2dd6eafa760c' }, booking_listing.token && (h("igl-book-property-container", { withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, baseurl: this.baseurl, ticket: booking_listing.token }, h("button", { slot: "trigger", class: 'new-booking-btn' }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" }))))))), h("h3", { key: '6bcd78ed27c7445163175cb6b0a1304394fcfc54', class: "d-none d-md-block" }, (_b = locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_Bookings), h("form", { key: '7ab3d49c7b71dfc6d9f46b905dab29bcd289d5df', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input-text", { key: 'f3aa7ec3b6ee6f609430d2e7bafce2517159ea61', class: 'flex-fill', value: this.inputValue, onTextChange: e => (this.inputValue = e.detail), variant: "icon", placeholder: (_c = locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_FindBookNbrorName }, h("svg", { key: 'b53299c93ce0d4aa787326b3e37b9b70b4db7d5e', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: 'e2efc88bf32c8df3c62c65f9b2359be0dd0fd746', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("h5", { key: 'bba48c002b291a3362a55b146dd95b6e2d32848b', class: "m-0 font-weight-bold d-none d-sm-block" }, (_d = locales.entries) === null || _d === void 0 ? void 0 : _d.Lcz_Or))), h("div", { key: 'fb73c09c42bb1511cb0b755cc3a201e8e36ba0dd', class: "d-none d-md-block" }, booking_listing.token && (h("igl-book-property-container", { withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, baseurl: this.baseurl, ticket: booking_listing.token }, h("button", { slot: "trigger", class: 'new-booking-btn' }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" }))))))), h("section", { key: 'c035300afb1db39c9a407c638b3e121f44aba074', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '440bd69c7ba38415d0b98f36eba22fe0f9583859' }), h("h5", { key: '971a2c94c76cb8dd2f3d0ad10ac954c4c33cf4f9', class: "m-0 font-weight-bold" }, (_e = locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Or), h("span", { key: '88239a07824d3af49a6d31328a91b215ede45333' })), h("section", { key: 'f3cd6110ca4b1f9cfaa461d4126962331d86e35e', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("ir-select", { key: '5677f8951c3939ee278391e9d6249ce76da83e88', onSelectChange: e => updateUserSelection('filter_type', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.types.map(t => {
                var _a;
                return ({
                    value: t.id.toString(),
                    text: ((_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_DateOf) + ' ' + t.name,
                });
            }), class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.filter_type, select_id: "dateTo", LabelAvailable: false }), h("igl-date-range", { key: '4b3882cce67b8d34cebd8e322adc77b6fe990965', class: "flex-sm-wrap", minDate: "2000-01-01", withDateDifference: false, defaultData: {
                fromDate: booking_listing.userSelection.from,
                toDate: booking_listing.userSelection.to,
            } }), h("ir-select", { key: '90043760d81ecb8bba127d1220753f9604787a98', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.booking_status, onSelectChange: e => updateUserSelection('booking_status', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.statuses.map(status => ({
                value: status.code,
                text: status.name,
            })), select_id: "booking_status", LabelAvailable: false }), h("ir-select", { key: 'bf2c2f9e1a06edd405be019a27710e0139d2678e', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.channel, onSelectChange: e => updateUserSelection('channel', e.detail), LabelAvailable: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.channels.map(channel => ({
                value: channel.name,
                text: channel.name,
            })), select_id: "channels", firstOption: ((_f = locales.entries) === null || _f === void 0 ? void 0 : _f.Lcz_All) + ' ' + ((_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Channels) }), h("div", { key: '15a91c207cb96615380ccfb6d4316f5e5beb2bcf', class: "d-flex flex-fill align-items-end m-0  buttons-container" }, h("ir-icon", { key: '937a95951be6e55ee919b85e3180fab6e75f2013', title: (_h = locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_Search, onIconClickHandler: () => this.handleSearchClicked(false) }, h("svg", { key: 'c91e571fcbddbee3183270cb8171ffd49547476b', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: 'db243ad2592ac87e1b007568ccb58d181cfbaf6d', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("ir-icon", { key: 'a8e27b4cd34101f12165267385270f7d6b58fe6f', title: (_j = locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_Erase, onIconClickHandler: () => this.handleClearUserField() }, h("svg", { key: 'a77c91fd98811f0698431b2d0bdf61453e2efd05', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "22.5", viewBox: "0 0 576 512" }, h("path", { key: '47c98be2e01135b9d80077a185af454880d1460e', fill: "currentColor", d: "M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z" }))), h("ir-icon", { key: 'c070e16f1c79cbe425436957b300cefa7cc674dc', onIconClickHandler: () => this.handleSearchClicked(true), title: (_k = locales.entries) === null || _k === void 0 ? void 0 : _k.Lcz_ExportToExcel }, h("svg", { key: '1afbc56666e1e01e92c7da05bb3b0c4539e69ffc', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "15", viewBox: "0 0 384 512" }, h("path", { key: '5bfddd7b72d05bc9000ced3cbf4e9fb43682312c', fill: "currentColor", d: "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" })))))));
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
                "attribute": "language",
                "reflect": false
            },
            "baseurl": {
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
                "attribute": "baseurl",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "inputValue": {}
        };
    }
    static get listeners() {
        return [{
                "name": "dateChanged",
                "method": "handleDateRangeChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-listing-header.js.map
