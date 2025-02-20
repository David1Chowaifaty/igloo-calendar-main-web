import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { h as housekeeping_store } from './housekeeping.store.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$9 } from './igl-date-range2.js';
import { d as defineCustomElement$8 } from './ir-button2.js';
import { d as defineCustomElement$7 } from './ir-date-picker2.js';
import { d as defineCustomElement$6 } from './ir-date-range2.js';
import { d as defineCustomElement$5 } from './ir-date-view2.js';
import { d as defineCustomElement$4 } from './ir-icon2.js';
import { d as defineCustomElement$3 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-select2.js';
import { d as defineCustomElement$1 } from './ir-title2.js';

const irHkArchiveCss = ".sc-ir-hk-archive-h{display:block}";
const IrHkArchiveStyle0 = irHkArchiveCss;

const IrHkArchive = /*@__PURE__*/ proxyCustomElement(class IrHkArchive extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.selectedDates = {
            start: hooks().add(-90, 'days').format('YYYY-MM-DD'),
            end: hooks().format('YYYY-MM-DD'),
        };
        this.data = [
            {
                id: 1,
                date: '20 Jun (Mon)',
                hk_id: 2,
                housekeeper: 'Test',
                unit: {
                    id: 2,
                    name: 'test',
                },
                booking_nbr: 15525610155,
            },
            {
                id: 2,
                date: '20 Jun (Mon)',
                hk_id: 2,
                housekeeper: 'Test aanjhjanjn ajna',
                unit: {
                    id: 2,
                    name: 'test',
                },
                booking_nbr: 15525610155,
            },
        ];
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
        return (h(Host, { key: '8c5703969524ff57af4f9d06f8534cc3be8a3b4a' }, h("ir-title", { key: '88d9d0338f42311445ae8d2817248b956aeb9144', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: '403a5f558fd2c94daf07ca7cb9f40202a1cc1352', class: "px-1" }, h("div", { key: 'ca58d9e9f6fa890d3baa142146d34013add20c94', class: "d-flex" }, h("ir-select", { key: '7f1a45fec7f9c0e1881b3dc02895fe9de3a8deea', class: "w-100", LabelAvailable: false, data: [], firstOption: "All units" }), h("ir-select", { key: '46211716c7c6c772709033ace4f4156da9322764', class: "ml-1 w-100", LabelAvailable: false, data: housekeeping_store.hk_criteria.housekeepers.map(hk => ({ text: hk.name, value: hk.id.toString() })), firstOption: "All housekeepers" })), h("div", { key: '9ad5ba6cf6dd5afbe3dd09fd3754a021e01aea26', class: "d-flex mt-1 align-items-center" }, h("igl-date-range", { key: 'a3d85803317a3f30e3359e124ac3a15671c985f8', class: "mr-1", withDateDifference: false, minDate: hooks().add(-90, 'days').format('YYYY-MM-DD'), defaultData: {
                fromDate: this.selectedDates.start,
                toDate: this.selectedDates.end,
            } }), h("ir-icon", { key: '8428a362eb00de71a412ed6d36fa22d7fde7cb11', onIconClickHandler: this.searchArchive.bind(this), class: "mr-1" }, h("svg", { key: '84bfe04479649a0811ec22d6b93fa7484e22c77b', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: '6efc9501ce8c2104bd5a605fd68bfe3a4d2ac4af', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("ir-icon", { key: '04243f0f5d0ee4553c92f2b398ff6752c32aba80', onIconClickHandler: this.exportArchive.bind(this) }, h("svg", { key: 'e3839ca9feda9967b886a6ce8bee4a896931015a', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "15", viewBox: "0 0 384 512" }, h("path", { key: '74d8553556f8b136125f9d27b8c800b4864b9828', fill: "currentColor", d: "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" })))), h("table", { key: '636e3177d469e916f152ee32be3b39a0f554e07a', class: "mt-2" }, h("thead", { key: '35e133a6aa2b8d3d656fc1993cea2b4e4d6ab3f7' }, h("th", { key: '918c39f2c7be13c8ff67a1be9fe62daa6dd3ef23', class: "sr-only" }, "period"), h("th", { key: 'c0c9c22c5c39cd3bd6207946cae196e9e2252e92', class: "sr-only" }, "housekeeper name"), h("th", { key: 'c014a1d1e28c871899f50bf4b19107656f06f4b4', class: "sr-only" }, "unit"), h("th", { key: 'a01824885918907a827a87b09eafb12aef6588d3', class: "sr-only" }, "booking number")), h("tbody", { key: 'd4b90e9075b06d18a15e0f302953e3f8c69a2adf' }, this.data.map(d => {
            var _a;
            return (h("tr", { key: d.id }, h("td", { class: "pr-2" }, d.date), h("td", { class: "px-2" }, d.housekeeper), h("td", { class: "px-2" }, (_a = d.unit) === null || _a === void 0 ? void 0 : _a.name), h("td", { class: "px-2" }, h("ir-button", { btn_color: "link", btnStyle: {
                    width: 'fit-content',
                    padding: '0',
                    margin: '0',
                }, labelStyle: {
                    padding: '0',
                }, text: d.booking_nbr.toString(), onClick: () => {
                    window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
                } }))));
        }))))));
    }
    static get style() { return IrHkArchiveStyle0; }
}, [2, "ir-hk-archive", {
        "selectedDates": [32],
        "data": [32]
    }, [[0, "dateChanged", "handleDateRangeChange"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-hk-archive", "igl-date-range", "ir-button", "ir-date-picker", "ir-date-range", "ir-date-view", "ir-icon", "ir-icons", "ir-select", "ir-title"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-hk-archive":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrHkArchive);
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-date-range":
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
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrHkArchive as I, defineCustomElement as d };

//# sourceMappingURL=ir-hk-archive2.js.map