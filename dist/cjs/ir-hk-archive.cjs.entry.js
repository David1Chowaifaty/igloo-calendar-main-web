'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3eb932d8.js');
const housekeeping_service = require('./housekeeping.service-496ae06e.js');
const moment = require('./moment-1780b03a.js');
require('./Token-0b5ba7e4.js');
require('./index-c1e3243e.js');

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
        return (index.h(index.Host, { key: 'c2c4572f4767ebd13893e2360d8c83690d732441' }, index.h("ir-title", { key: '7a0a6745a6bdc52790abdfe1ea833d9e142a0029', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), index.h("section", { key: '2fbbf8c4761596ecd9348908b862d47759d1b8dc', class: "px-1" }, index.h("div", { key: '803f028a76d9989c9772a041825f1561351cd139', class: "d-flex" }, index.h("ir-select", { key: 'cae923644c1c3a330eb35c22ede2cd18e3c95f30', class: "w-100", LabelAvailable: false, data: [], firstOption: "All units" }), index.h("ir-select", { key: 'e5edfe6bf5e72d348310b8a5d08e1610a68fb349', class: "ml-1 w-100", LabelAvailable: false, data: [], firstOption: "All housekeepers" })), index.h("div", { key: '7232f88cab1cf635e86bdafc384cae6f3019ac64', class: "d-flex mt-1 align-items-center" }, index.h("igl-date-range", { key: '1ea58b2de1156d93ffdeb5b8f4e945c43d0f937f', class: "mr-1", withDateDifference: false, minDate: moment.hooks().add(-90, 'days').format('YYYY-MM-DD'), defaultData: {
                fromDate: this.selectedDates.start,
                toDate: this.selectedDates.end,
            } }), index.h("ir-icon", { key: '1525d1a349a4baf1b4e429632d0b5c2639b48386', onIconClickHandler: this.searchArchive.bind(this), class: "mr-1" }, index.h("svg", { key: '352f131942ae3a66016dc33445b70ed82a394118', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, index.h("path", { key: '83784ff89efb0674e6c0e00a04747ef6ef899561', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), index.h("ir-icon", { key: 'f50b83a014509750f01cc729f5b9f34f1e876597', onIconClickHandler: this.exportArchive.bind(this) }, index.h("svg", { key: '301190e26fb85ba756ecf07c8a4ffd95e5b369a0', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "15", viewBox: "0 0 384 512" }, index.h("path", { key: 'af4f81f86e5be9304d3618799e5092d21d556467', fill: "currentColor", d: "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" })))))));
    }
};
IrHkArchive.style = IrHkArchiveStyle0;

exports.ir_hk_archive = IrHkArchive;

//# sourceMappingURL=ir-hk-archive.cjs.entry.js.map