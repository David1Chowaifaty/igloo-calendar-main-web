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
        return (h(Host, { key: '0b772e358704facb61b442a66e9577e39eb83178' }, h("a", { key: '69c487412644a71585ee49e7c796fffc414ffb76', ref: el => (this.downloadUrlTag = el) }, h("p", { key: '4ec15ba00472248e7b912d7b83048764cdf4146e', class: "sr-only" }, "download url")), h("section", { key: 'eb55131e72b3e4068a3435707d91575fd08e67e4', class: "d-flex align-items-center " }, h("div", { key: 'f5e238d034c55da4a627587b2ed26de7e12b78e5', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '7e1c7913d56b762b8870d6fcb0da9ef082d3658b', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '26b5ae3f60fbdde1ad64fab929eff1bb10bbe945', class: "flex-fill" }, locales.entries.Lcz_Bookings), h("div", { key: '82aef96bea43a6da698c1636e7f492fc070a2ec5' }, h("igl-book-property-container", { key: '02029dfe230ba83fc6be3748b40b33d7b0baa8e9', withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, baseurl: this.baseurl, ticket: booking_listing.token }, h("button", { key: 'f46d9f4224e90c860ac07eec1c1021a9c0d8b465', slot: "trigger", class: 'new-booking-btn' }, h("svg", { key: 'dc65a466304416005a6c9f290f8e01328a7dcca8', xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { key: 'd901d5f72e7192758781fdce14d0a992b79a2d7b', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })))))), h("h3", { key: '05e5f25d3925eb8732e5c8bb5e25379b4ad05c95', class: "d-none d-md-block" }, locales.entries.Lcz_Bookings), h("div", { key: 'e6444c5951eee01a9105abc5d49a3f4c52e6ac1c', class: "booking-search-field width-fill" }, h("ir-input-text", { key: '912718e90bbc0f6351d73aa0581d72c90e859d2d', class: 'flex-fill', value: this.inputValue, onTextChange: e => (this.inputValue = e.detail), variant: "icon", placeholder: locales.entries.Lcz_FindBookNbrorName }, h("svg", { key: 'c39b81010ec7868da83ae37d7bf23c4c67eb55f2', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: '2fca3920880fad720c8cd373a2984064bb14815b', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("h5", { key: 'd722241d1a32d3778e6a3f46a696e845df6b579a', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries.Lcz_Or))), h("div", { key: '54f2ecad663a3736ee81a05d8f01377b9dd43252', class: "d-none d-md-block" }, h("igl-book-property-container", { key: 'b4c22d2467737cb696acd407a034ddd8db942d4e', withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, baseurl: this.baseurl, ticket: booking_listing.token }, h("button", { key: '7b53fb2d778e7865aa2f84c8b5ab37a9da97aa4e', slot: "trigger", class: 'new-booking-btn' }, h("svg", { key: 'd3544f8b53e4d7526e1dd0cbcbaa199aeb41524e', xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { key: 'a9d11e64536bfbce60784fb9a42e362a41ffe5fd', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })))))), h("section", { key: '2bf46d9195dcc0fe11f56f2ee3a518a6c5e5b825', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '5085d6c65293a4160dd6975375712bf9089a1999' }), h("h5", { key: '14d3c4e479f453f80a96a2c8c0daed8bcc10e3cb', class: "m-0 font-weight-bold" }, locales.entries.Lcz_Or), h("span", { key: 'dd2aee4fdccf39d54551f8690cd63444e524db18' })), h("section", { key: '09461ddcc88dc31f742a46ee41b4ed368cc2708d', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("fieldset", { key: 'ab1b57d224a6fc39146a26ff64545fdb4998d572', class: "d-flex align-items-center flex-sm-column align-items-sm-start flex-fill-sm-none" }, h("label", { key: 'bcb3c02994a23e7f123f38ae34d6aa570e101698', htmlFor: "dateTo" }, locales.entries.Lcz_DateOf), h("ir-select", { key: '985666318a0f254e28a203d658d87814802c7097', onSelectChange: e => updateUserSelection('filter_type', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.types.map(t => ({
                value: t.id.toString(),
                text: t.name,
            })), class: "flex-fill", selectedValue: booking_listing.userSelection.filter_type, select_id: "dateTo", LabelAvailable: false })), h("fieldset", { key: 'd9d77cd452b16468f2fd4faeb2f1f3bbf4ce3ff3', class: "d-flex align-items-center flex-sm-column align-items-sm-start flex-fill-sm-none" }, h("label", { key: 'c7ea07b024cf3ad923ad7d37a190b55ec64e2d52', htmlFor: "dates" }, locales.entries.Lcz_Dates), h("igl-date-range", { key: '028ff2f0f3f8032e73b1c2f6f8bbf71c32477fac', class: "flex-fill", minDate: "2000-01-01", withDateDifference: false, defaultData: {
                fromDate: booking_listing.userSelection.from,
                toDate: booking_listing.userSelection.to,
            } })), h("fieldset", { key: '90ebcc3ad9fe22ec633a4e57985a405e256acc5b', class: "d-flex align-items-center flex-sm-column align-items-sm-start flex-fill-sm-none" }, h("label", { key: 'ac285ec25088be3af4404d3c242a675376c0eb63', htmlFor: "booking_status" }, locales.entries.Lcz_BookingStatus), h("ir-select", { key: 'c43a866f6d1cc2ca64c7231dfd29d5922b102b96', class: "flex-fill", selectedValue: booking_listing.userSelection.booking_status, onSelectChange: e => updateUserSelection('booking_status', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.statuses.map(status => ({
                value: status.code,
                text: status.name,
            })), select_id: "booking_status", LabelAvailable: false })), h("fieldset", { key: '1a9312a1304a18fc07dc339fff29622e901c4ba2', class: "d-flex align-items-center flex-sm-column align-items-sm-start flex-fill-sm-none" }, h("label", { key: '41b025b795bb1fcae944ced705c6fc57d31e64c0', htmlFor: "channels" }, locales.entries.Lcz_Channels), h("ir-select", { key: '50d6635304195c5586a2e5989aaad08bd32e5393', class: "flex-fill", selectedValue: booking_listing.userSelection.channel, onSelectChange: e => updateUserSelection('channel', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.channels.map(channel => ({
                value: channel.name,
                text: channel.name,
            })), select_id: "channels", LabelAvailable: false })), h("div", { key: '12746b9d55f0a1e95530fa9c3a8bcd57c7757183', class: "d-flex flex-fill align-items-end m-0 mt-2 buttons-container" }, h("ir-icon", { key: 'c0fd136d7daa03deb241296ef96474055713cef7', title: locales.entries.Lcz_Search, onIconClickHandler: () => this.handleSearchClicked(false) }, h("svg", { key: '514426af0154e258766d9f06bffa5ef60af694ec', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: '630962a8c10b080dda3a726fc25f4e4b736f12e3', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("ir-icon", { key: '016fa2319271e9b82c5a5c1262886c375d278cbe', title: locales.entries.Lcz_Erase, onIconClickHandler: () => this.handleClearUserField() }, h("svg", { key: '2000ef35c6c9f0b992586a076d8d62e878232e8d', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "22.5", viewBox: "0 0 576 512" }, h("path", { key: 'b702050e13517dcc4228ff38f5aa01e89507501d', fill: "currentColor", d: "M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z" }))), h("ir-icon", { key: '43db960a2bb8c9d028521727f627828d3fc23439', onIconClickHandler: () => this.handleSearchClicked(true), title: locales.entries.Lcz_ExportToExcel }, h("svg", { key: 'dc005c7a0eb0cf2affe04950bec57871c49cbcd7', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "15", viewBox: "0 0 384 512" }, h("path", { key: 'b023fe8df3b21f76388047187b3fcc956479f9bb', fill: "currentColor", d: "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" })))))));
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
