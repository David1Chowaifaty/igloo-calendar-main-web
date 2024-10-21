import { r as registerInstance, h, H as Host } from './index-c553b3dc.js';
import { h as hooks } from './moment-ab846cee.js';

const irHkArchiveCss = ".sc-ir-hk-archive-h{display:block}";
const IrHkArchiveStyle0 = irHkArchiveCss;

const IrHkArchive = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.selectedDates = {
            start: hooks().add(-90, 'days').format('YYYY-MM-DD'),
            end: hooks().format('YYYY-MM-DD'),
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
        return (h(Host, { key: 'd084a8207b1919c8ac8e706be16aebd181f18556' }, h("ir-title", { key: 'e8ff3945ac9aa3a8184c59578b39e69d57679f67', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: '9f9bdd1357ffac2386ca5c3b346aaafa39674650', class: "px-1" }, h("div", { key: '356b11cdbf7d5aeac6976ff524ba51535bf06cd9', class: "d-flex" }, h("ir-select", { key: '29451cf3bf14dc3abeb611db810cad1429ebe874', class: "w-100", LabelAvailable: false, data: [], firstOption: "All units" }), h("ir-select", { key: '5c9d0df1e2c2893da1d7416d6165e10d5a74fc01', class: "ml-1 w-100", LabelAvailable: false, data: [], firstOption: "All housekeepers" })), h("div", { key: '77fa027f4f158fa539e8f61972ab1311b0856694', class: "d-flex mt-1 align-items-center" }, h("igl-date-range", { key: '4bb8b0228a4e440a7adfe4329e1495ab42d0ef63', class: "mr-1", withDateDifference: false, minDate: hooks().add(-90, 'days').format('YYYY-MM-DD'), defaultData: {
                fromDate: this.selectedDates.start,
                toDate: this.selectedDates.end,
            } }), h("ir-icon", { key: '3b71e647d8bb98d03a3461ebc294d7d448f03653', onIconClickHandler: this.searchArchive.bind(this), class: "mr-1" }, h("svg", { key: 'e9d41bd5538a1c335abf0cbf2df92c43a68a0e03', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: '3aa9a21835054592df403334ee81de1d6aa39e69', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("ir-icon", { key: '208e3623a3cafd98d6e1824d9826a4e99e23df4c', onIconClickHandler: this.exportArchive.bind(this) }, h("svg", { key: '354ff97dc7b893be5605e21e5246c0b286a39372', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "15", viewBox: "0 0 384 512" }, h("path", { key: '792412265ccfa345d5b1a45fb7a08ce23d1dd5e7', fill: "currentColor", d: "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" })))))));
    }
};
IrHkArchive.style = IrHkArchiveStyle0;

export { IrHkArchive as ir_hk_archive };

//# sourceMappingURL=ir-hk-archive.entry.js.map