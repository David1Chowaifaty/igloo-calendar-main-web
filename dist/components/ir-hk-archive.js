import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$7 } from './igl-date-range2.js';
import { d as defineCustomElement$6 } from './ir-date-picker2.js';
import { d as defineCustomElement$5 } from './ir-date-view2.js';
import { d as defineCustomElement$4 } from './ir-icon2.js';
import { d as defineCustomElement$3 } from './ir-select2.js';
import { d as defineCustomElement$2 } from './ir-title2.js';

const irHkArchiveCss = ".sc-ir-hk-archive-h{display:block}";
const IrHkArchiveStyle0 = irHkArchiveCss;

const IrHkArchive$1 = /*@__PURE__*/ proxyCustomElement(class IrHkArchive extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: 'd3f6e32d7be7af59689b6e53d24622b8a7204b52' }, h("ir-title", { key: '4b37bb0f52a197a22d48e89645f312fe7e0fee82', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: '19ca598bc3b64a01f6e768b4658f4a71031e9d81', class: "px-1" }, h("div", { key: '272f404e8fcce18c8a1e786ffaed8be31a8fa2d5', class: "d-flex" }, h("ir-select", { key: 'd17a0d4100d9c7a449cb42b02b388171bd01de87', class: "w-100", LabelAvailable: false, data: [], firstOption: "All units" }), h("ir-select", { key: '9711f12b5f69988f1730ed3d6d728bfb0f42b984', class: "ml-1 w-100", LabelAvailable: false, data: [], firstOption: "All housekeepers" })), h("div", { key: '49e95e4d0a0c76d34e8caca6bf545ccfde1b1fc4', class: "d-flex mt-1 align-items-center" }, h("igl-date-range", { key: '0d6d482eb9250c7e370392e5113f7bd583743e9a', class: "mr-1", withDateDifference: false, minDate: hooks().add(-90, 'days').format('YYYY-MM-DD'), defaultData: {
                fromDate: this.selectedDates.start,
                toDate: this.selectedDates.end,
            } }), h("ir-icon", { key: 'bd6d728fba9c1d25a927f3fb08ffadc204e5b3cf', onIconClickHandler: this.searchArchive.bind(this), class: "mr-1" }, h("svg", { key: '5c2a47395d25b7f2c1e78ac353e75164959fa4c8', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: '55ff158d0146a707b55d92c6df89758ab00e248a', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("ir-icon", { key: 'ebd29aab679a3405fbc0fed7ed468312df5a5288', onIconClickHandler: this.exportArchive.bind(this) }, h("svg", { key: 'd8914b7d8947950039a315e6d74d38b235d3cb7e', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "15", viewBox: "0 0 384 512" }, h("path", { key: '6ab4f0af924c72e60ca2259ebc17632be5043310', fill: "currentColor", d: "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" })))))));
    }
    static get style() { return IrHkArchiveStyle0; }
}, [2, "ir-hk-archive", {
        "selectedDates": [32]
    }, [[0, "dateChanged", "handleDateRangeChange"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-hk-archive", "igl-date-range", "ir-date-picker", "ir-date-view", "ir-icon", "ir-select", "ir-title"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-hk-archive":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrHkArchive$1);
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrHkArchive = IrHkArchive$1;
const defineCustomElement = defineCustomElement$1;

export { IrHkArchive, defineCustomElement };

//# sourceMappingURL=ir-hk-archive.js.map