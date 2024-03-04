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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        return (h(Host, { key: 'a0e4458bac5d645fd18c59fecedd676466e03a7e' }, h("a", { key: 'dff3e448386a06d12373cb777be533c4560a0797', ref: el => (this.downloadUrlTag = el) }, h("p", { key: '70b5a2db7534bda88803ad2aa62ebe7fa9bbc780', class: "sr-only" }, "download url")), h("section", { key: 'f2a860c406d7a71cc4e0bc57af27525e1f604877', class: "d-flex align-items-center " }, h("div", { key: '7ec268b264e7dd14d8e90d1e632ec7c7c55128aa', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '12671dc7d85dfb8e02beb762bf56e294537cb2f6', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: 'bf10fb6111e5e4d048e400f7715660330a7d2b76', class: "flex-fill" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Bookings), h("div", { key: 'acd3c1b18032a0d6826ff6d8fcbe2dd6eafa760c' }, h("igl-book-property-container", { key: '29747ef4e625bee65af568cb72bf5865b6cbd773', withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, baseurl: this.baseurl, ticket: booking_listing.token }, h("button", { key: '4c9756bb2d499bca5996e02d3216ecf6e29404be', slot: "trigger", class: 'new-booking-btn' }, h("svg", { key: '05a48bd19af91c91c41ad1bde1fe5e66b1894585', xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { key: 'eff2cf50d0656f1346be0ab6ca00679d17e8a6ed', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })))))), h("h3", { key: 'c310ecb25f625a8e8f692e1ab01320f49e6fb9d2', class: "d-none d-md-block" }, (_b = locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_Bookings), h("form", { key: 'cb346a762249f891bf58aead12b45e150c5ac77e', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input-text", { key: '21bb5345f030c7df134bb4434f00fd4a391577cb', class: 'flex-fill', value: this.inputValue, onTextChange: e => (this.inputValue = e.detail), variant: "icon", placeholder: (_c = locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_FindBookNbrorName }, h("svg", { key: '0ec3bd4af4a7f0a570d4b02ce511da7ee4eccdf8', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: '89a7cfd9ce631ba272e56d997fe1b2516391b097', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("h5", { key: 'd665bb5841bb87ecfbfa42d60670b006d15456f1', class: "m-0 font-weight-bold d-none d-sm-block" }, (_d = locales.entries) === null || _d === void 0 ? void 0 : _d.Lcz_Or))), h("div", { key: '286c50291aa0acc4c4407b2eaba7351a1651ceb1', class: "d-none d-md-block" }, h("igl-book-property-container", { key: '6ee1d100498fa7641cf0b10ec2d45ce4c274bae8', withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, baseurl: this.baseurl, ticket: booking_listing.token }, h("button", { key: 'dc4d7c291a4f6d86cd85d933c4c2afdbc97773b3', slot: "trigger", class: 'new-booking-btn' }, h("svg", { key: '3b6066b4e9968f8820a791acbd66f72ae46e9313', xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { key: '2439e6eba9b92781f8041d5f03dd6a40ddbf08bf', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })))))), h("section", { key: '6de056b7e8f7e4f3665db49fea758d625bfa4ac2', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '1cf2d901fd5e5d85c4fccf81f5c14912aaf1712e' }), h("h5", { key: 'cd9f91e6a8ba5431c430152bbcb2af884fdac382', class: "m-0 font-weight-bold" }, (_e = locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Or), h("span", { key: '3324285602a42e640eb15c757e5b47a36187811b' })), h("section", { key: '4e1178304c027ed76ff5f89d2dd3c30961668398', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("fieldset", { key: '49e49ce8ab2e837c83e82aef38b8ff782d8270ea', class: "d-flex align-items-center flex-sm-column align-items-sm-start flex-fill-sm-none" }, h("label", { key: 'd909a87ca1b8da5d4fa667ddbad346bacaed8e3d', htmlFor: "dateTo" }, (_f = locales.entries) === null || _f === void 0 ? void 0 : _f.Lcz_DateOf), h("ir-select", { key: 'fe94c69904b9d27f9caeca987114d24c1ffa122f', onSelectChange: e => updateUserSelection('filter_type', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.types.map(t => ({
                value: t.id.toString(),
                text: t.name,
            })), class: "flex-fill", selectedValue: booking_listing.userSelection.filter_type, select_id: "dateTo", LabelAvailable: false })), h("fieldset", { key: 'bc14cd1b7c2fd7b7139a0b9b75b55b46dfad2e1b', class: "d-flex align-items-center flex-sm-column align-items-sm-start flex-fill-sm-none" }, h("label", { key: '52ff928a692bbfc86e2d25757d6cfdaa7938eced', htmlFor: "dates" }, (_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Dates), h("igl-date-range", { key: 'd11bbd15cc153599f3f52d0a6eb21d3865f06c06', class: "flex-fill", minDate: "2000-01-01", withDateDifference: false, defaultData: {
                fromDate: booking_listing.userSelection.from,
                toDate: booking_listing.userSelection.to,
            } })), h("fieldset", { key: '05f0a8b7fb3a8ec3e916c07e2bd9ccd99945399a', class: "d-flex align-items-center flex-sm-column align-items-sm-start flex-fill-sm-none" }, h("label", { key: 'c9cd662bbae8cbd0aec998b2cae4e1a4b8607f37', htmlFor: "booking_status" }, (_h = locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_BookingStatus), h("ir-select", { key: 'e041812a98e8c94bd313d57f7931a2106bd7f12a', class: "flex-fill", selectedValue: booking_listing.userSelection.booking_status, onSelectChange: e => updateUserSelection('booking_status', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.statuses.map(status => ({
                value: status.code,
                text: status.name,
            })), select_id: "booking_status", LabelAvailable: false })), h("fieldset", { key: 'dd7811d3f044d19e5664e5ca4d4ed8b22a9b5306', class: "d-flex align-items-center flex-sm-column align-items-sm-start flex-fill-sm-none" }, h("label", { key: '2dd6f52ba7102d1d078779f18fca1cd582b20b7e', htmlFor: "channels" }, (_j = locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_Channels), h("ir-select", { key: 'f43a803228c95683d3b244860b3848a3453ae9ba', class: "flex-fill", selectedValue: booking_listing.userSelection.channel, onSelectChange: e => updateUserSelection('channel', e.detail), LabelAvailable: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.channels.map(channel => ({
                value: channel.name,
                text: channel.name,
            })), select_id: "channels", firstOption: (_k = locales.entries) === null || _k === void 0 ? void 0 : _k.Lcz_All })), h("div", { key: 'f1fa17bb8f03843edfc5ee572a4a352512efc286', class: "d-flex flex-fill align-items-end m-0 mt-2 buttons-container" }, h("ir-icon", { key: '37f249d0d0261fcda740a6ee4262716f08b6f266', title: (_l = locales.entries) === null || _l === void 0 ? void 0 : _l.Lcz_Search, onIconClickHandler: () => this.handleSearchClicked(false) }, h("svg", { key: 'e25681fb1e866a3e7744a32001066357f30b1447', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: '46a6fede157ead5f7916654af0ba0c32cd2dd74d', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("ir-icon", { key: 'c9c60b44bfb9c5dcd590212ad74355a30f78edc7', title: (_m = locales.entries) === null || _m === void 0 ? void 0 : _m.Lcz_Erase, onIconClickHandler: () => this.handleClearUserField() }, h("svg", { key: 'ef5a1b8eb7882bfc2d2f0a13ec74635ff4fc0868', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "22.5", viewBox: "0 0 576 512" }, h("path", { key: '1e352e999cc8c8e412d457e75a1dee2f59ac21fc', fill: "currentColor", d: "M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z" }))), h("ir-icon", { key: '518e58331515aa372cdbdaa3aa1ddfd99c638fb1', onIconClickHandler: () => this.handleSearchClicked(true), title: (_o = locales.entries) === null || _o === void 0 ? void 0 : _o.Lcz_ExportToExcel }, h("svg", { key: 'e6fbc4f322efe98d0dc79344bbaf2df27242d002', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "15", viewBox: "0 0 384 512" }, h("path", { key: 'c34b634c0a77df76219891618b94dc54da84200a', fill: "currentColor", d: "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" })))))));
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
