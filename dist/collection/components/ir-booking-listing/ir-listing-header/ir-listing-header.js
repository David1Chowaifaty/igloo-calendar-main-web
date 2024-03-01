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
        return (h(Host, { key: '0b772e358704facb61b442a66e9577e39eb83178' }, h("a", { key: '69c487412644a71585ee49e7c796fffc414ffb76', ref: el => (this.downloadUrlTag = el) }, h("p", { key: '4ec15ba00472248e7b912d7b83048764cdf4146e', class: "sr-only" }, "download url")), h("section", { key: 'eb55131e72b3e4068a3435707d91575fd08e67e4', class: "d-flex align-items-center " }, h("div", { key: 'f5e238d034c55da4a627587b2ed26de7e12b78e5', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '7e1c7913d56b762b8870d6fcb0da9ef082d3658b', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '26b5ae3f60fbdde1ad64fab929eff1bb10bbe945', class: "flex-fill" }, locales.entries.Lcz_Bookings), h("div", { key: '82aef96bea43a6da698c1636e7f492fc070a2ec5' }, h("igl-book-property-container", { key: '02029dfe230ba83fc6be3748b40b33d7b0baa8e9', withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, baseurl: this.baseurl, ticket: booking_listing.token }, h("button", { key: 'f46d9f4224e90c860ac07eec1c1021a9c0d8b465', slot: "trigger", class: 'new-booking-btn' }, h("svg", { key: 'dc65a466304416005a6c9f290f8e01328a7dcca8', xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { key: 'd901d5f72e7192758781fdce14d0a992b79a2d7b', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })))))), h("h3", { key: '05e5f25d3925eb8732e5c8bb5e25379b4ad05c95', class: "d-none d-md-block" }, locales.entries.Lcz_Bookings), h("form", { key: '5b8e48aa08523b8f9426ba210a3303f90afe9d8a', onSubmit: e => {
                e.preventDefault();
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input-text", { key: '2dd4be240d5880fd52401babe32b9f21f90749b6', class: 'flex-fill', value: this.inputValue, onTextChange: e => (this.inputValue = e.detail), variant: "icon", placeholder: locales.entries.Lcz_FindBookNbrorName }, h("svg", { key: '8f20af6a7550ce0fa74df3de34403bd0c1c31de3', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: 'a080b2cc02365699131e251fa51ccada3d043102', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("h5", { key: 'b17f031e702185a44e81578e7d3b2c380711f605', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries.Lcz_Or))), h("div", { key: '148ef84dba6c435908441daa9f50bbd0d13863b6', class: "d-none d-md-block" }, h("igl-book-property-container", { key: '43605ad6d189968b0662cabb76c624d18cfd3e27', withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, baseurl: this.baseurl, ticket: booking_listing.token }, h("button", { key: '247343d5dcd82d0ee5206394c34e1eccbf52f8ad', slot: "trigger", class: 'new-booking-btn' }, h("svg", { key: '1225cab1562f04ae8ecd98bbe8445cd6f0ac069a', xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { key: 'ce72371cfbd08fe858148714b2179bb8f3b331a4', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })))))), h("section", { key: 'c8c982834bc7361d0ed542fb84d597b3ebae4425', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: 'b536bee0915df8a6b9e9b631dad27195bab8d4a3' }), h("h5", { key: 'ba2eb7706d017e5a82348366fff2faab59d9929d', class: "m-0 font-weight-bold" }, locales.entries.Lcz_Or), h("span", { key: '24d4a7d197c16e9609f1bff65814f02dc0d4e6d5' })), h("section", { key: '4949b221f7afeee1d8989333afbe457049ccf05a', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("fieldset", { key: 'b2a40cc81e5e7f6b33751c23fd93181cd852678f', class: "d-flex align-items-center flex-sm-column align-items-sm-start flex-fill-sm-none" }, h("label", { key: 'e4f9cc2afd618ed20aabf723b4221138fe86fc96', htmlFor: "dateTo" }, locales.entries.Lcz_DateOf), h("ir-select", { key: '08864ce1a001e1a173e25e01a2877d59765bb12b', onSelectChange: e => updateUserSelection('filter_type', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.types.map(t => ({
                value: t.id.toString(),
                text: t.name,
            })), class: "flex-fill", selectedValue: booking_listing.userSelection.filter_type, select_id: "dateTo", LabelAvailable: false })), h("fieldset", { key: '87752ddd91884fb991f80a908274a039f70d3c3d', class: "d-flex align-items-center flex-sm-column align-items-sm-start flex-fill-sm-none" }, h("label", { key: '3c15d93eeebd5c405f6f295de76fb1e2fd981184', htmlFor: "dates" }, locales.entries.Lcz_Dates), h("igl-date-range", { key: '1cfa5ba415f13c26ea6e50c91bac4c56c516439c', class: "flex-fill", minDate: "2000-01-01", withDateDifference: false, defaultData: {
                fromDate: booking_listing.userSelection.from,
                toDate: booking_listing.userSelection.to,
            } })), h("fieldset", { key: 'c4f174613efe5d579ed386d6b19afee09612f9f7', class: "d-flex align-items-center flex-sm-column align-items-sm-start flex-fill-sm-none" }, h("label", { key: 'b0ff1d00120901c9fa219d098cd8e8cb51a32b87', htmlFor: "booking_status" }, locales.entries.Lcz_BookingStatus), h("ir-select", { key: 'a5f37931dee0ed33552cbc9948021565a1dd61df', class: "flex-fill", selectedValue: booking_listing.userSelection.booking_status, onSelectChange: e => updateUserSelection('booking_status', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.statuses.map(status => ({
                value: status.code,
                text: status.name,
            })), select_id: "booking_status", LabelAvailable: false })), h("fieldset", { key: 'bb5c15548cbedb0463508812cea73489b40ec5e3', class: "d-flex align-items-center flex-sm-column align-items-sm-start flex-fill-sm-none" }, h("label", { key: '7f9485fc2b47b54ebf4147ff4bcbb80b355d6494', htmlFor: "channels" }, locales.entries.Lcz_Channels), h("ir-select", { key: '1d0c82043ac4e59bbd69e0f2c85b99f974c54cf4', class: "flex-fill", selectedValue: booking_listing.userSelection.channel, onSelectChange: e => updateUserSelection('channel', e.detail), LabelAvailable: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.channels.map(channel => ({
                value: channel.name,
                text: channel.name,
            })), select_id: "channels", firstOption: locales.entries.Lcz_All })), h("div", { key: 'a393baf5c3594a1723091da486469f95fa1db46d', class: "d-flex flex-fill align-items-end m-0 mt-2 buttons-container" }, h("ir-icon", { key: '877000a97e5dc49277aea7c1c68bcbc8e5f26b4d', title: locales.entries.Lcz_Search, onIconClickHandler: () => this.handleSearchClicked(false) }, h("svg", { key: 'ea5a505952385b78b6c1d45bf32b11743d3a1bc5', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: 'ed17d8262dc3a1fb8d61e4b5c2cdcd8529ed7e6a', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("ir-icon", { key: 'cb13aebcbb91c9589800f2b773d725fe45a51ce5', title: locales.entries.Lcz_Erase, onIconClickHandler: () => this.handleClearUserField() }, h("svg", { key: '7dbf38614987317d93c547f3f05cf391eeb00e36', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "22.5", viewBox: "0 0 576 512" }, h("path", { key: '0624183cffbbb55436e5b03324901d42e23e5341', fill: "currentColor", d: "M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z" }))), h("ir-icon", { key: '8a287bbf2f2718c11c48e714b942f354c980e17c', onIconClickHandler: () => this.handleSearchClicked(true), title: locales.entries.Lcz_ExportToExcel }, h("svg", { key: 'cf7d6010d08d3d331772b0473a39e71ab9a54181', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "15", viewBox: "0 0 384 512" }, h("path", { key: '70f715d365889299e0af6bbb6d08aa6c14e3241c', fill: "currentColor", d: "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" })))))));
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
