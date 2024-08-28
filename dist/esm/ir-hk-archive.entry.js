import { r as registerInstance, h, H as Host } from './index-cec96f7a.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-34645894.js';
import { h as hooks } from './moment-ab846cee.js';
import './Token-be23fd51.js';
import './index-ca81f1d9.js';
import './axios-ab377903.js';

const irHkArchiveCss = ".sc-ir-hk-archive-h{display:block}";
const IrHkArchiveStyle0 = irHkArchiveCss;

const IrHkArchive = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.houseKeepingService = new HouseKeepingService();
        this.selectedDates = {
            start: hooks().add(-90, 'days').format('YYYY-MM-DD'),
            end: hooks().format('YYYY-MM-DD'),
        };
    }
    componentWillLoad() {
        this.houseKeepingService.setToken(housekeeping_store.default_properties.token);
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
        return (h(Host, { key: 'b0d3a50982aa0b79bbc36f5e33dfd194e20e1182' }, h("ir-title", { key: '97513be1e03d9a8bdab7164ff448069650e15ad7', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: '387e6a7f8355736bdf08bcb913b4ce26398ca92c', class: "px-1" }, h("div", { key: '28823413fddd36608c07c610a2959bd87216e56f', class: "d-flex" }, h("ir-select", { key: 'e467981d0be59e67cd8131c50a36c7ca1f231a64', class: "w-100", LabelAvailable: false, data: [], firstOption: "All units" }), h("ir-select", { key: '82d3b4f920dfbb6a16a457676ddee986ba0de8b5', class: "ml-1 w-100", LabelAvailable: false, data: [], firstOption: "All housekeepers" })), h("div", { key: 'c2a2776897c5fee411195acb2d56c16213267d7c', class: "d-flex mt-1 align-items-center" }, h("igl-date-range", { key: '691dee348fac5f7091bee64861ab07762f1992f6', class: "mr-1", withDateDifference: false, minDate: hooks().add(-90, 'days').format('YYYY-MM-DD'), defaultData: {
                fromDate: this.selectedDates.start,
                toDate: this.selectedDates.end,
            } }), h("ir-icon", { key: '3136dc8de48815dc0a546706d32e14620fbbf330', onIconClickHandler: this.searchArchive.bind(this), class: "mr-1" }, h("svg", { key: 'ebe2c520d544dece7064fc9f8636dae5f3a89edb', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: 'b2879a20c1062966765dfa49916e5c001a464382', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("ir-icon", { key: '990452f4239e93f672545ad49d5b0fc9c5f07a74', onIconClickHandler: this.exportArchive.bind(this) }, h("svg", { key: 'd61ea6d5cd974cc3ac681fb86bc28fceac26e3d9', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "15", viewBox: "0 0 384 512" }, h("path", { key: 'e77985e13c6e1ad13819b7d7d6ffc5647d3954b0', fill: "currentColor", d: "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" })))))));
    }
};
IrHkArchive.style = IrHkArchiveStyle0;

export { IrHkArchive as ir_hk_archive };

//# sourceMappingURL=ir-hk-archive.entry.js.map