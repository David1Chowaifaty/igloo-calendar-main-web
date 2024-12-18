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
        return (h(Host, { key: '93e6ca5d440970b45f0a745471498f2ebe23b8bd' }, h("ir-title", { key: '2590b3705f43bbe928605dece74a82a9afc6c0bb', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: 'b2087de24907d5833d04b681bb2f6625006e353b', class: "px-1" }, h("div", { key: 'e3f9dbb1066ea157cf81cfc460e7d0bc16099c9c', class: "d-flex" }, h("ir-select", { key: 'bb61a0fde6c70cfc9fdae181f523f6192dbccec9', class: "w-100", LabelAvailable: false, data: [], firstOption: "All units" }), h("ir-select", { key: 'fa76b7859dc99141d795df71d5638ff8a6969101', class: "ml-1 w-100", LabelAvailable: false, data: [], firstOption: "All housekeepers" })), h("div", { key: '192de6c2b76c194b9961d82a909923e5e97616e3', class: "d-flex mt-1 align-items-center" }, h("igl-date-range", { key: '13f19f8bae47586219fb031e7c896f8492bb35e1', class: "mr-1", withDateDifference: false, minDate: moment().add(-90, 'days').format('YYYY-MM-DD'), defaultData: {
                fromDate: this.selectedDates.start,
                toDate: this.selectedDates.end,
            } }), h("ir-icon", { key: '3728e091655d5f9a29f58e37975f3934eb919f48', onIconClickHandler: this.searchArchive.bind(this), class: "mr-1" }, h("svg", { key: '30fd3f0c7233bd585c56b7ca84d23085617f7a44', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: 'fc92df45b2b66ae4f1343836ddb7b85bb9276957', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("ir-icon", { key: '63af9ac3f65a6859763fbe43ec8e3d5ab1b8e4d1', onIconClickHandler: this.exportArchive.bind(this) }, h("svg", { key: 'eb1d9479a76e474e552d69e8e266bcd948046374', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "15", viewBox: "0 0 384 512" }, h("path", { key: '7069ab80e356ca5d46c1ec7e91e9415e6e559db4', fill: "currentColor", d: "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" })))))));
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
