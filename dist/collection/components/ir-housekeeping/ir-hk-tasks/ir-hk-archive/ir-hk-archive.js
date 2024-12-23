// import { HouseKeepingService } from '@/services/housekeeping.service';
// import housekeeping_store from '@/stores/housekeeping.store';
import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrHkArchive {
    constructor() {
        this.selectedDates = {
            start: moment().add(-90, 'days').format('YYYY-MM-DD'),
            end: moment().format('YYYY-MM-DD'),
        };
    }
    // private houseKeepingService = new HouseKeepingService();
    componentWillLoad() {
        this.initializeData();
    }
    async initializeData() { }
    handleDateRangeChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { start, end } = e.detail;
        this.selectedDates = {
            start: start.format('YYYY-MM-DD'),
            end: end.format('YYYY-MM-DD'),
        };
    }
    async searchArchive(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
    }
    async exportArchive(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
    }
    render() {
        return (h(Host, { key: 'f2fb4dfe7474878d46422589c3093fa24465f0d0' }, h("ir-title", { key: '84c166fa91783c1e0d447ae06e93c0c1fe446ff9', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: '55960a30afd63655d34143470a4d2cacf802bc73', class: "px-1" }, h("div", { key: '4ba5c01cdba3c790c164cb2759e4af1d58dfdfb4', class: "d-flex" }, h("ir-select", { key: '639cd6a1c37ffb984fe29890e91869fb5bd2340d', class: "w-100", LabelAvailable: false, data: [], firstOption: "All units" }), h("ir-select", { key: '38d133773bca560bca3e3c17ed3a16161316e5d0', class: "ml-1 w-100", LabelAvailable: false, data: [], firstOption: "All housekeepers" })), h("div", { key: '91c64cb6a87ae4e75e0ba1a3f7e3c7cce1b46117', class: "d-flex mt-1 align-items-center" }, h("igl-date-range", { key: 'a526a9ad7100fb22b2e2b5f7f3dd6253d07cd9f2', class: "mr-1", withDateDifference: false, minDate: moment().add(-90, 'days').format('YYYY-MM-DD'), defaultData: {
                fromDate: this.selectedDates.start,
                toDate: this.selectedDates.end,
            } }), h("ir-icon", { key: 'cb0cd76950216696a6a489c8ad51f9ffcc7a9415', onIconClickHandler: this.searchArchive.bind(this), class: "mr-1" }, h("svg", { key: '4707f6c0b26ac216a5fd047cc5e350a5c05b5585', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: '34c815d4616f958d602ce17bae90a9ae2311d3a6', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("ir-icon", { key: '8faad0a723deca637d191ff42f0f905f2197af31', onIconClickHandler: this.exportArchive.bind(this) }, h("svg", { key: '648d2374363e605e9469c8fcbfd31061e19bd98f', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "15", viewBox: "0 0 384 512" }, h("path", { key: '4f3c7de85aa0b5026ca264b5348b6e06a65c4c7e', fill: "currentColor", d: "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" })))))));
    }
    static get is() { return "ir-hk-archive"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hk-archive.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hk-archive.css"]
        };
    }
    static get states() {
        return {
            "selectedDates": {}
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
//# sourceMappingURL=ir-hk-archive.js.map
