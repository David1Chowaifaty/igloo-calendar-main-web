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
        return (h(Host, { key: 'e173716a9959bf464f3c30602e7e98647d5068fc' }, h("ir-title", { key: '6179e94d086fcee5d9a547c87e2827c54728947d', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: '56457a205030a37fcf7cecb165c54a7474a37672', class: "px-1" }, h("div", { key: 'acd6d968ea7f11b4860934f5bae72cc7a0de75d4', class: "d-flex" }, h("ir-select", { key: 'a83749d02533dc5238e6ed814a1b56c0506df1c7', class: "w-100", LabelAvailable: false, data: [], firstOption: "All units" }), h("ir-select", { key: 'e31a7ca27423613ee9902c62f24531a03a5f7d5c', class: "ml-1 w-100", LabelAvailable: false, data: [], firstOption: "All housekeepers" })), h("div", { key: '2f777daf2c8283a81e27fa43139bb14d349db6f0', class: "d-flex mt-1 align-items-center" }, h("igl-date-range", { key: '38d0d305db7ebcbe2133692a71a78ac02a48ae06', class: "mr-1", withDateDifference: false, minDate: hooks().add(-90, 'days').format('YYYY-MM-DD'), defaultData: {
                fromDate: this.selectedDates.start,
                toDate: this.selectedDates.end,
            } }), h("ir-icon", { key: 'a08c38c2a31ec09f40e9c8baf8ed4202ca033da0', onIconClickHandler: this.searchArchive.bind(this), class: "mr-1" }, h("svg", { key: '9bda0b61d21c2dd344ced7d86f141fadfd72aa2e', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: '91965aa6994280cfef789be0386749d4780745ec', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("ir-icon", { key: 'd2f318bdfe47a625456eb11bcf8e1bfa7e7028c4', onIconClickHandler: this.exportArchive.bind(this) }, h("svg", { key: '2d8107a8606c189bb5d253c111daa417e4531c4a', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "15", viewBox: "0 0 384 512" }, h("path", { key: 'ca1ec50a72bd9f06ef6379e8c16e29a51e318d5e', fill: "currentColor", d: "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" })))))));
    }
};
IrHkArchive.style = IrHkArchiveStyle0;

export { IrHkArchive as ir_hk_archive };

//# sourceMappingURL=ir-hk-archive.entry.js.map