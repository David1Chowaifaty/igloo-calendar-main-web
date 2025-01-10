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
        return (h(Host, { key: '7fbce9dfeb303ba05edcddd9869c75d52fa9ac5b' }, h("ir-title", { key: '8f6a714a6834d31dc9f4b6673cba724c5f41cce5', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: '07483eda98b26f7e7c2ab7ab54e69d6382662c32', class: "px-1" }, h("div", { key: '73e39df47ebc4911bd046ab87aff8192a574748b', class: "d-flex" }, h("ir-select", { key: '750a90b83d0e34496a71cbe1e70b63c46e931403', class: "w-100", LabelAvailable: false, data: [], firstOption: "All units" }), h("ir-select", { key: '1902688fde651bf9aa4ce18b830106f4e4c8f686', class: "ml-1 w-100", LabelAvailable: false, data: [], firstOption: "All housekeepers" })), h("div", { key: '84382c47acf9f1de3d9deb448bc759f6a2c5dd34', class: "d-flex mt-1 align-items-center" }, h("igl-date-range", { key: '13e0f49f27e68a0b9d6ee21837fa8ec835fe8d20', class: "mr-1", withDateDifference: false, minDate: hooks().add(-90, 'days').format('YYYY-MM-DD'), defaultData: {
                fromDate: this.selectedDates.start,
                toDate: this.selectedDates.end,
            } }), h("ir-icon", { key: '35e013ce6c6dc1243a321e29d90ea2220bcadacc', onIconClickHandler: this.searchArchive.bind(this), class: "mr-1" }, h("svg", { key: '11ce1fd1aa0685970a82cf2e626a90ba7258c7c6', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: '87302ff2aa99398330e7e98b372924d466a12cfd', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("ir-icon", { key: '2cf3e2e40d46766f435de3b93031aaa458a75e60', onIconClickHandler: this.exportArchive.bind(this) }, h("svg", { key: 'a8923e052195e6f35e0bd109dbb299fed4aec39a', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "15", viewBox: "0 0 384 512" }, h("path", { key: '830b6c9bc613e3b5fab967948ee5c3769b292680', fill: "currentColor", d: "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" })))))));
    }
};
IrHkArchive.style = IrHkArchiveStyle0;

export { IrHkArchive as ir_hk_archive };

//# sourceMappingURL=ir-hk-archive.entry.js.map