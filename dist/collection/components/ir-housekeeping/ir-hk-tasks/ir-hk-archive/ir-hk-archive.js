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
        return (h(Host, { key: 'a7b18a8d7d42ed8081fac0def50b448824fbf271' }, h("ir-title", { key: 'c967e40cbae973425c0274542ac46dee5c65e053', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: 'e8c9f5396bd88ea159f72875e0153a3b4b16bee9', class: "px-1" }, h("div", { key: '37a29a1e935cf386c29cc8862458d3e8a50edd7a', class: "d-flex" }, h("ir-select", { key: 'a570469180eb9138fd33347fa726cb8df2f93b46', class: "w-100", LabelAvailable: false, data: [], firstOption: "All units" }), h("ir-select", { key: '5b4ef70a0c1d5ca69614b4a5159f73855daf59dc', class: "ml-1 w-100", LabelAvailable: false, data: [], firstOption: "All housekeepers" })), h("div", { key: 'd19c7e6b24eaed77c3df94fd427f869beadeabe7', class: "d-flex mt-1 align-items-center" }, h("igl-date-range", { key: '8ac5417249c694b8590774a9840aa0dc9b1af21c', class: "mr-1", withDateDifference: false, minDate: moment().add(-90, 'days').format('YYYY-MM-DD'), defaultData: {
                fromDate: this.selectedDates.start,
                toDate: this.selectedDates.end,
            } }), h("ir-icon", { key: 'ca05c2606a973b2f8a085fc1dcd0fc9dfc4794ea', onIconClickHandler: this.searchArchive.bind(this), class: "mr-1" }, h("svg", { key: 'a880378414ce3b23e6eb331a73c02aaf996aa135', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: '9b7d4dddbd8cabbd465f23f399007a158c61ff66', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("ir-icon", { key: '4e303cd863763a27e7cef4312983fa0ea45d446b', onIconClickHandler: this.exportArchive.bind(this) }, h("svg", { key: 'd4e2ae8cf5ebcd040ac9aeaa59acd3bd0ea4fd0e', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "15", viewBox: "0 0 384 512" }, h("path", { key: 'cf3ce465b95df042c9c32b18e6e7b73d7d0842c4', fill: "currentColor", d: "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" })))))));
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
