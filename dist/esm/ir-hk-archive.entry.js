import { r as registerInstance, h, H as Host } from './index-d2ec0a5d.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-493fd2bd.js';
import { h as hooks } from './moment-ab846cee.js';
import './Token-81a651a8.js';
import './index-a32c4342.js';

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
        return (h(Host, { key: 'b89a92663edf887aba0e8de9625bbe725d04ca39' }, h("ir-title", { key: 'ba41414fd5c88f555fe8a490caf29d3826449e33', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: 'b78102a679105b6fd1503d528f0cc3c68feb4454', class: "px-1" }, h("div", { key: 'fbedd098ed9034c23a4850ab388bd97d1a461826', class: "d-flex" }, h("ir-select", { key: 'c23f8ca204347e73db064453221c3091c8986e33', class: "w-100", LabelAvailable: false, data: [], firstOption: "All units" }), h("ir-select", { key: 'af30a2017cca2255ffaaa9e74641565621dff393', class: "ml-1 w-100", LabelAvailable: false, data: [], firstOption: "All housekeepers" })), h("div", { key: '618b8fc9d2d1bcb8dc4844735c25137b5c2bd3a3', class: "d-flex mt-1 align-items-center" }, h("igl-date-range", { key: '31b7628189e6a4128371ff9858f9407a304564b6', class: "mr-1", withDateDifference: false, minDate: hooks().add(-90, 'days').format('YYYY-MM-DD'), defaultData: {
                fromDate: this.selectedDates.start,
                toDate: this.selectedDates.end,
            } }), h("ir-icon", { key: '0f004818202a84dac35e5633c2fa5ba47e756f49', onIconClickHandler: this.searchArchive.bind(this), class: "mr-1" }, h("svg", { key: 'a83872edd11fc70add4a88d845e238e62952b1ea', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: '98a0020e813bc13b8e78409b778d1ea3626970f9', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("ir-icon", { key: '93a80eb98b99b8cc7139679527002c92a345baad', onIconClickHandler: this.exportArchive.bind(this) }, h("svg", { key: 'fe030bedd662db5f9bd979b5fc31216729975d8f', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "15", viewBox: "0 0 384 512" }, h("path", { key: 'b4460e7d6188cf4453c89f1b6aa491025c00be2f', fill: "currentColor", d: "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" })))))));
    }
};
IrHkArchive.style = IrHkArchiveStyle0;

export { IrHkArchive as ir_hk_archive };

//# sourceMappingURL=ir-hk-archive.entry.js.map