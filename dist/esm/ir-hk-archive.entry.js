import { r as registerInstance, h, H as Host } from './index-e7294bf2.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-84d7796a.js';
import { h as hooks } from './moment-ab846cee.js';
import './Token-692eae02.js';
import './index-7d0cd903.js';
import './axios-4c36144d.js';

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
        return (h(Host, { key: '41cc00e2195282063c0cd65e1df9d10bf8499859' }, h("ir-title", { key: '958dda31d98eadc3ba14f56cccce2aac703568de', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: '2208cf64ca5f1b0d0ff3b9fd67afb4e35484c7f1', class: "px-1" }, h("div", { key: '1c677e4e4580be9dd812d3aaf5aa8d8bcc6ce6fc', class: "d-flex" }, h("ir-select", { key: '0d30fd42bda48bc3f782a5c1da9ca5f90435242c', class: "w-100", LabelAvailable: false, data: [], firstOption: "All units" }), h("ir-select", { key: '38f04fc6c167f5be29b59dc4277d71ee3631096a', class: "ml-1 w-100", LabelAvailable: false, data: [], firstOption: "All housekeepers" })), h("div", { key: 'ca3b59c21725f9961653cb2527cfcb5e74a1fce3', class: "d-flex mt-1 align-items-center" }, h("igl-date-range", { key: '3008c8aad11d1b5e0bb16bcf9c33a0361850610f', class: "mr-1", withDateDifference: false, minDate: hooks().add(-90, 'days').format('YYYY-MM-DD'), defaultData: {
                fromDate: this.selectedDates.start,
                toDate: this.selectedDates.end,
            } }), h("ir-icon", { key: '9d0332e43aee5c12e5509bd6c3fb1fce77a49280', onIconClickHandler: this.searchArchive.bind(this), class: "mr-1" }, h("svg", { key: '191171dbafa7a47e3890769f4565380efce4531d', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: '35166a720123f57b9e03c889e8874823c88b1bb2', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("ir-icon", { key: '8106935b018cc2cd94efe8d7d07a9abbf465d0e7', onIconClickHandler: this.exportArchive.bind(this) }, h("svg", { key: 'c97f9d7eae2fc46c296628d9c7b51e72ee2b5dfa', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "15", viewBox: "0 0 384 512" }, h("path", { key: '3e820529e1860947947abe61e45970bb80626175', fill: "currentColor", d: "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" })))))));
    }
};
IrHkArchive.style = IrHkArchiveStyle0;

export { IrHkArchive as ir_hk_archive };

//# sourceMappingURL=ir-hk-archive.entry.js.map