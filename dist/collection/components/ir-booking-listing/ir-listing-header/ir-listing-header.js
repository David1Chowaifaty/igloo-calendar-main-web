import { BookingListingService } from "../../../services/booking_listing.service";
import booking_listing, { updateUserSelection } from "../../../stores/booking_listing.store";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IrListingHeader {
    constructor() {
        this.bookingListingService = new BookingListingService();
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
    async handleSearchClicked() {
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
        await this.bookingListingService.getExposedBookings(booking_listing.userSelection);
        this.inputValue = '';
    }
    render() {
        return (h(Host, { key: '71bde7c164f96afe74b64dae879b81624a85414d' }, h("form", { key: '51ad0a4d7cb002aeba8711d95e7f78f9f0f4e5a8', class: "d-flex align-items-center booking-container" }, h("h3", { key: 'f694d00caa51acbeb92aa894dc4343aadacf77d8' }, locales.entries.Lcz_Bookings), h("ir-input-text", { key: 'cd7f60bde40c2523c5d1d8ff428baea9ccce9241', value: this.inputValue, onTextChange: e => (this.inputValue = e.detail), variant: "icon", class: "ml-md-5", placeholder: "Find booking number/name" }, h("svg", { key: '09880533b425f8b72ace0623b336ea5d594f8f9c', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "12", width: "12", viewBox: "0 0 512 512" }, h("path", { key: '57561f8a785c4017816a2c08bfc7c6fb329f25ea', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("h5", { key: '66661e0e936657d28e448c43f25f7a9849e3d017', class: "m-0" }, locales.entries.Lcz_Or)), h("section", { key: '86d8060280851e40e1ff16fd54d7b48bbc0566de', class: "d-flex align-items-center flex-wrap filters-container justify-content-lg-start mt-1" }, h("fieldset", { key: '7383631aca60aa48f9f871f021f512e76f5640e2', class: "flex-fill-sm-none" }, h("label", { key: '50c08ad4706018e2eca6abe909b4f2a2db0c6dac', htmlFor: "dateTo" }, locales.entries.Lcz_DateOf), h("ir-select", { key: '25037764cc0a665518add450d85710e806fcb950', onSelectChange: e => updateUserSelection('filter_type', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.types.map(channel => ({
                value: channel.name,
                text: channel.name,
            })), select_id: "dateTo", LabelAvailable: false })), h("fieldset", { key: '10a4f6842b489d083f2d86f13c8ad0a3b6244d90', class: "flex-fill-sm-none" }, h("label", { key: '2f135eb885c7eeba40495ef2c38c1d8511592fdc', htmlFor: "dates" }, "Dates"), h("igl-date-range", { key: '31cf5c2aa019fcdeadc276a065bf6fa932724b55', minDate: "2000-01-01", withDateDifference: false, defaultData: {
                fromDate: booking_listing.userSelection.from,
                toDate: booking_listing.userSelection.to,
            } })), h("fieldset", { key: '1c27ff85a67aee9032878eecfa152ac4615b4659', class: "flex-fill-sm-none" }, h("label", { key: '06ce3f35c225c51ce23464ceee711f13cdd0138a', htmlFor: "booking_status" }, locales.entries.Lcz_BookingStatus), h("ir-select", { key: '8ef3079ea20d1393c4e3b74af88b7a7a4905e2b0', onSelectChange: e => updateUserSelection('booking_status', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.statuses.map(channel => ({
                value: channel.name,
                text: channel.name,
            })), select_id: "booking_status", LabelAvailable: false })), h("fieldset", { key: '12608e37b14eb9072a47b155cca951154cd6fdc2', class: "flex-fill-sm-none" }, h("label", { key: '5afc758bf7a99b6259a926156fafa78cda23510a', htmlFor: "channels" }, locales.entries.Lcz_Channels), h("ir-select", { key: '9275cabfbe660814b1de812480c9ea716372008d', onSelectChange: e => updateUserSelection('channel', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.channels.map(channel => ({
                value: channel.name,
                text: channel.name,
            })), select_id: "channels", LabelAvailable: false })), h("fieldset", { key: 'ca519a818f8c3987b474370e376b8ad1ac279e69', class: "flex-fill-sm-none" }, h("label", { key: 'cc101467dae6012366c61f219ee0182f3a48d1f3', htmlFor: "payment_status" }, locales.entries.Lcz_Payments), h("ir-select", { key: '22c358d2cf74fe759d26ae9a94b5344b5c196361', showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.settlement_methods.map(channel => ({
                value: channel.name,
                text: channel.name,
            })), select_id: "payment_status", LabelAvailable: false })), h("div", { key: 'aedda67a3e6a7d6470bd59dd5455b814feee6843', class: "d-flex align-items-end m-0 mt-2 buttons-container" }, h("ir-icon", { key: '812b91c3979c0fecc07953f8d2f3ae22eba7880a', title: locales.entries.Lcz_Search, onIconClickHandler: () => this.handleSearchClicked() }, h("svg", { key: 'b458307bc2052d64d0933bb1627e59b8d5d32505', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: 'a92e3aa5f3c3984279b60de9ce06db83c01c0845', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("ir-icon", { key: '6cc301562f38a285df5da4f7afeb0629eae7f55b', title: locales.entries.Lcz_Erase }, h("svg", { key: '1f1f758c06c815a46fffc218b46a7942fdce2ef4', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "22.5", viewBox: "0 0 576 512" }, h("path", { key: 'a7243863ce44408060b45f9e1c17fec6c93a0de2', fill: "currentColor", d: "M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z" }))), h("ir-icon", { key: '1b3e69f82352e6917ce197a1c5fec1d5031e50ac', title: locales.entries.Lcz_ExportToExcel }, h("svg", { key: '0104fe77974e49c88118550856d91ee25cc22090', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "22.5", viewBox: "0 0 576 512" }, h("path", { key: '9b707e20416c13d58eb271f1a5c62700028c0d1c', fill: "currentColor", d: "M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V288H216c-13.3 0-24 10.7-24 24s10.7 24 24 24H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM384 336V288H494.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H384zm0-208H256V0L384 128z" })))))));
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
