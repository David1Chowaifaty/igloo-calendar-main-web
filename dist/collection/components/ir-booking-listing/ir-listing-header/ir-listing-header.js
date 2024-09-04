import { BookingListingService } from "../../../services/booking_listing.service";
import booking_listing, { initializeUserSelection, updateUserSelection } from "../../../stores/booking_listing.store";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrListingHeader {
    constructor() {
        this.bookingListingService = new BookingListingService();
        this.propertyId = undefined;
        this.language = undefined;
        this.baseurl = undefined;
        this.inputValue = '';
        this.isLoading = null;
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
            booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { name: '', book_nbr: '' });
        }
        this.isLoading = is_to_export ? 'excel' : 'search';
        this.preventPageLoad.emit('/Get_Exposed_Bookings');
        await this.bookingListingService.getExposedBookings(Object.assign(Object.assign({}, booking_listing.userSelection), { start_row: 0, end_row: 20, is_to_export }));
        this.isLoading = null;
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
    async handleFromDateChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const date = e.detail.start;
        let fromDate = date;
        let toDate = moment(new Date(booking_listing.userSelection.to));
        if (fromDate.isAfter(toDate)) {
            toDate = fromDate;
        }
        booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { from: fromDate.format('YYYY-MM-DD'), to: toDate.format('YYYY-MM-DD') });
        await this.toDateRef.openDatePicker();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return (h(Host, { key: '741441411497f2cb7bb0c5405ac58f37bc3c49b6' }, h("a", { key: 'ef8e7c6ea153bf4930b77e56b4c12255db94239f', ref: el => (this.downloadUrlTag = el) }, h("p", { key: '2d79a50b4d47d99675cd3a57b166210b148e8552', class: "sr-only" }, "download url")), h("section", { key: 'dbc1be760d2beef3e5ac3117a64c7e81eca33d32', class: "d-flex align-items-center " }, h("div", { key: '93954876de3c3126e65a3f7ad4a0caf8bdb1d78a', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: 'b305639e80af8da843d137b6f4a5ea76af097d61', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: 'df913e403ca29c713365dfca69a9caa04755fbb3', class: "flex-fill" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Bookings), h("div", { key: 'aee2b5a2b2e0175df7e5e0e94b678a938e3f20a8' }, booking_listing.token && (h("igl-book-property-container", { key: '73f1016fe677032a6b214947ec3aeea266540773', withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, baseurl: this.baseurl, ticket: booking_listing.token }, h("ir-button", { key: 'e8c3bc45616743db233b206fc09739f44eeaddad', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "square_plus" }))))), h("h3", { key: '00fd68956871504645190115d67df778195a92f2', class: "d-none d-md-block" }, (_b = locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_Bookings), h("form", { key: '3b5888912b2e20618133c453242da6b5dab09b5f', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input-text", { key: '4ddfd246e21d9215d86f1066df40b712ed3c2fcf', class: 'flex-fill', value: this.inputValue, onTextChange: e => (this.inputValue = e.detail), variant: "icon", placeholder: (_c = locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_FindBookNbrorName }, h("svg", { key: '4ec0e66412055812162fff44dc4d2dad46501476', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: 'c24b72b5feabf7c1a039a34a4f4e14ee5f4ed506', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("h5", { key: '0b89bbb92b86c98edbe474709ceafc2fb7b64212', class: "m-0 font-weight-bold d-none d-sm-block" }, (_d = locales.entries) === null || _d === void 0 ? void 0 : _d.Lcz_Or))), h("div", { key: '5bd974f429a1fde3e2b9563c79193124cc14f5a5', class: "d-none d-md-block" }, booking_listing.token && (h("igl-book-property-container", { key: 'fb3f091afef3d2f72f106491b2d1d54af465c3b5', withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, baseurl: this.baseurl, ticket: booking_listing.token }, h("ir-button", { key: 'd21d0b0b49709a7a37e0dc82f587510b06c0b03e', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "square_plus" }))))), h("section", { key: 'a22d8f2fa0c6132ee51e948cf06a25c406495285', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: 'd75f5aa9dabab6773a0df1eb3b16d4814237d0c2' }), h("h5", { key: 'b111107dfbfca666e3d858020e7dd2cd63faf134', class: "m-0 font-weight-bold" }, (_e = locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Or), h("span", { key: '8b5fbce927d1fbab0ff262073bd5b2868e75abcf' })), h("section", { key: '92526d0434fa8c190f6716c3dd0bf9943a65d511', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("ir-select", { key: 'ba84affe61fc588f50b7ac9498b7c13db058a838', onSelectChange: e => updateUserSelection('filter_type', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.types.map(t => ({
                value: t.id.toString(),
                text: t.name,
            })), class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.filter_type, select_id: "dateTo", LabelAvailable: false }), h("div", { key: '77420cb447b5d9f6d51909e31fecdf3295e17f1c', class: 'booking-dates-container' }, h("span", { key: '7fdcb3ebcb35b386b7b41e6d1ffcdf28b4c5ee84' }, h("svg", { key: '08de9c37516fd7770350e7be7b91609e500946ab', xmlns: "http://www.w3.org/2000/svg", viewBox: '0 0 448 512', style: { height: '14px', width: '14px' } }, h("path", { key: '0b15243884342a4d54a3ea9e8cb5d7fbbf21cbf8', fill: "currentColor", d: 'M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z' }))), h("div", { key: '0b906ad7e2a7aaed5719bb4d0978dd0f539adb29', class: "date-picker-wrapper", "data-option": "from-date" }, h("p", { key: 'bb241608db36c3ee6b1361ac4b3b02c179bf7c0a', class: "date-display", title: "from date" }, moment(new Date(booking_listing.userSelection.from)).format('MMM DD, yyyy')), h("ir-date-picker", { key: '27a87c88d72518481d09b7bad96f9bde6b6b2679', class: "hidden-date-picker", autoApply: true, singleDatePicker: true, minDate: "2000-01-01", onDateChanged: this.handleFromDateChange.bind(this) })), h("span", { key: '20f19443b16599760837f15bcdfddece45b2fc0b' }, h("svg", { key: '650c9dc308f011858bfd113b81c76dc5146e73d0', xmlns: "http://www.w3.org/2000/svg", class: "arrow-icon", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: 'f4e6a15df78e05f9bbcaf1b8460921b10cda2cc8', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" }))), h("div", { key: 'f736472b4f56a4a380140ad5758d61b8544b2667', "data-option": "to-date", class: "date-picker-wrapper" }, h("p", { key: '62babe77a9e89982965da05ca15a71f36db47ce4', class: "date-display", title: "to date" }, moment(new Date(booking_listing.userSelection.to)).format('MMM DD, YYYY')), h("ir-date-picker", { key: 'e6e8d38c3e5e6776dae603bdc49baa3045225d4c', class: "hidden-date-picker", ref: el => (this.toDateRef = el), autoApply: true, singleDatePicker: true, minDate: booking_listing.userSelection.from, onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { to: e.detail.start.format('YYYY-MM-DD') });
            } }))), h("ir-select", { key: 'd815f28a6e00af9d29c3b4ae54aa821305208dd6', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.booking_status, onSelectChange: e => updateUserSelection('booking_status', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.statuses.map(status => ({
                value: status.code,
                text: status.name,
            })), select_id: "booking_status", LabelAvailable: false }), h("ir-select", { key: 'c0628d562f9e9b8e15ff5f380909cee2e03555c9', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.channel, onSelectChange: e => updateUserSelection('channel', e.detail), LabelAvailable: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.channels.map(channel => ({
                value: channel.value,
                text: channel.name,
            })), select_id: "channels", firstOption: ((_f = locales.entries) === null || _f === void 0 ? void 0 : _f.Lcz_All) + ' ' + ((_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Channels) }), h("div", { key: '430446fb00fb3357620868bdd6a6a316f55b5764', class: "d-flex flex-fill align-items-end m-0  buttons-container" }, h("ir-button", { key: '5c8f404f4a9ce57b58bd3ba739d470d7a537a419', title: (_h = locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_Search, variant: "icon", icon_name: "search", isLoading: this.isLoading === 'search', onClickHanlder: () => this.handleSearchClicked(false) }), h("ir-button", { key: '4ec40101439c15030a55a6828b9dc58561695cee', title: (_j = locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_Erase, variant: "icon", icon_name: "eraser", onClickHanlder: () => this.handleClearUserField() }), h("ir-button", { key: 'd467e54e10c321572a0a2ed4abeb97f88cb3ce07', title: (_k = locales.entries) === null || _k === void 0 ? void 0 : _k.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHanlder: () => this.handleSearchClicked(true) })))));
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
