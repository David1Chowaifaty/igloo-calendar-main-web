'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-caa79d4b.js');
const housekeeping_service = require('./housekeeping.service-b4eb8cd2.js');
const moment = require('./moment-1780b03a.js');
require('./Token-fac1282b.js');
require('./index-104877f7.js');

const irHkArchiveCss = ".sc-ir-hk-archive-h{display:block}";
const IrHkArchiveStyle0 = irHkArchiveCss;

const IrHkArchive = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.houseKeepingService = new housekeeping_service.HouseKeepingService();
        this.selectedDates = {
            start: moment.hooks().add(-90, 'days').format('YYYY-MM-DD'),
            end: moment.hooks().format('YYYY-MM-DD'),
        };
    }
    componentWillLoad() {
        this.houseKeepingService.setToken(housekeeping_service.housekeeping_store.default_properties.token);
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
        return (index.h(index.Host, { key: '0c6d28d425a61c3f4f930adc44075ef2ced6a1b6' }, index.h("ir-title", { key: '3835d3f18ae2c1c224544ae9b1b5302cfccedf88', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), index.h("section", { key: 'd6af62ebd7b84746d9d8b70013d40a00494cd3bf', class: "px-1" }, index.h("div", { key: 'd2a2d4e7042ed1471f8c147a6b6f535ad45e4353', class: "d-flex" }, index.h("ir-select", { key: 'd4f2bab5dd703bf08b93317604c9380d2e2d877b', class: "w-100", LabelAvailable: false, data: [], firstOption: "All units" }), index.h("ir-select", { key: '559135622ebb8a82a5c88639a2838cf8f21831b4', class: "ml-1 w-100", LabelAvailable: false, data: [], firstOption: "All housekeepers" })), index.h("div", { key: 'cd66d661cf26ac710402827bf8c39deddcb1b13a', class: "d-flex mt-1 align-items-center" }, index.h("igl-date-range", { key: '0677c18fd2f038cbe7605e5eb3640342d85dba13', class: "mr-1", withDateDifference: false, minDate: moment.hooks().add(-90, 'days').format('YYYY-MM-DD'), defaultData: {
                fromDate: this.selectedDates.start,
                toDate: this.selectedDates.end,
            } }), index.h("ir-icon", { key: 'f727c95697827786adcb43766c632150e10419d0', onIconClickHandler: this.searchArchive.bind(this), class: "mr-1" }, index.h("svg", { key: '56b06e92b09821c62253e418625adb29ba496e78', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, index.h("path", { key: '88cf8bbb386199c0cf09f5c892f9cc24a1f710f2', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), index.h("ir-icon", { key: '794c472ce7b70f464191829198f15035a9a26a73', onIconClickHandler: this.exportArchive.bind(this) }, index.h("svg", { key: 'b1d3c1d6784c267855bd2c760731a9237425c9fd', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "15", viewBox: "0 0 384 512" }, index.h("path", { key: '7db1adea0e9d252be65f940cd67d789e602c1980', fill: "currentColor", d: "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" })))))));
    }
};
IrHkArchive.style = IrHkArchiveStyle0;

exports.ir_hk_archive = IrHkArchive;

//# sourceMappingURL=ir-hk-archive.cjs.entry.js.map