import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { H as HouseKeepingService } from './housekeeping.service.js';
import { c as calendar_data } from './calendar-data.js';
import { h as housekeeping_store } from './housekeeping.store.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { l as locales } from './locales.store.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$7 } from './igl-date-range2.js';
import { d as defineCustomElement$6 } from './ir-button2.js';
import { d as defineCustomElement$5 } from './ir-date-range2.js';
import { d as defineCustomElement$4 } from './ir-icon2.js';
import { d as defineCustomElement$3 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-select2.js';
import { d as defineCustomElement$1 } from './ir-title2.js';
import { v as v4 } from './v4.js';

const irHkArchiveCss = ".sc-ir-hk-archive-h{display:block}";
const IrHkArchiveStyle0 = irHkArchiveCss;

const IrHkArchive = /*@__PURE__*/ proxyCustomElement(class IrHkArchive extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.houseKeepingService = new HouseKeepingService();
        this.units = [];
        this.propertyId = undefined;
        this.filters = {
            from_date: hooks().add(-90, 'days').format('YYYY-MM-DD'),
            to_date: hooks().format('YYYY-MM-DD'),
            filtered_by_hkm: [],
            filtered_by_unit: [],
        };
        this.data = [];
        this.isLoading = null;
    }
    componentWillLoad() {
        this.initializeData();
        this.setUpUnits();
    }
    setUpUnits() {
        const units = [];
        calendar_data.roomsInfo.forEach(r => {
            r.physicalrooms.forEach(room => {
                units.push({ id: room.id, name: room.name });
            });
        });
        this.units = units;
    }
    async initializeData() {
        await this.getArchivedTasks();
    }
    async getArchivedTasks() {
        var _a;
        const res = await this.houseKeepingService.getArchivedHKTasks(Object.assign({ property_id: Number(this.propertyId) }, this.filters));
        this.data = (_a = [...(res || [])]) === null || _a === void 0 ? void 0 : _a.map(t => (Object.assign(Object.assign({}, t), { id: v4() })));
    }
    handleDateRangeChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { start, end } = e.detail;
        this.updateFilters({
            from_date: start.format('YYYY-MM-DD'),
            to_date: end.format('YYYY-MM-DD'),
        });
    }
    updateFilters(props) {
        this.filters = Object.assign(Object.assign({}, this.filters), props);
    }
    async searchArchive(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.isLoading = 'search';
            await this.getArchivedTasks();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    async exportArchive(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.isLoading = 'excel';
            this.getArchivedTasks();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return (h(Host, { key: '9012fac90a4ae6ed8fa5f21d2147ff361fe8336a' }, h("ir-title", { key: '7227726b0d3950f9266cf7b0d5e07b4666238025', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: 'da296fa9e80baf770fd075bcf126fadc423c5816', class: "px-1" }, h("div", { key: 'e40ee2658642d8aa2e2a532113ebf207a0d10765', class: "d-flex" }, h("ir-select", { key: '5889e6695a69f3050a2823ea76f94b7891331150', class: "w-100", showFirstOption: false, LabelAvailable: false, data: [
                { text: 'All units', value: '000' },
                ,
                ...(_a = this.units) === null || _a === void 0 ? void 0 : _a.map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                })),
            ], onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (e.detail === '000') {
                    this.updateFilters({ filtered_by_unit: [] });
                }
                else {
                    this.updateFilters({ filtered_by_unit: [e.detail] });
                }
            } }), h("ir-select", { key: '6b1498b5617a52ec78c31ae9245412b95b898e20', class: "ml-1 w-100", selectedValue: ((_c = (_b = this.filters) === null || _b === void 0 ? void 0 : _b.filtered_by_hkm) === null || _c === void 0 ? void 0 : _c.length) === housekeeping_store.hk_criteria.housekeepers.length ? '000' : (_e = (_d = this.filters) === null || _d === void 0 ? void 0 : _d.filtered_by_hkm[0]) === null || _e === void 0 ? void 0 : _e.toString(), LabelAvailable: false, showFirstOption: false, data: [
                { text: 'All housekeepers', value: '000' },
                ...(_f = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _f === void 0 ? void 0 : _f.housekeepers.map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                })),
            ], onSelectChange: e => {
                if (e.detail === '000') {
                    this.updateFilters({ filtered_by_hkm: [] });
                }
                else {
                    this.updateFilters({ filtered_by_hkm: [e.detail] });
                }
            } })), h("div", { key: '45fd61fce01e7aaa0a5b814454f0c846aa1c7d5d', class: "d-flex mt-1 align-items-center" }, h("igl-date-range", { key: '121ad32e0ddbb8573fbfb75d679e76f58fac98d9', class: "mr-1", dateLabel: locales.entries.Lcz_Dates, minDate: hooks().add(-90, 'days').format('YYYY-MM-DD'), defaultData: {
                fromDate: this.filters.from_date,
                toDate: this.filters.to_date,
            } }), h("ir-button", { key: '99536a1052d56e8f0de25956af0f3d7924c49867', title: (_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), h("ir-button", { key: 'a18bb42b9a142d3e3f01a05e6c305c342246f675', title: (_h = locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), ((_j = this.data) === null || _j === void 0 ? void 0 : _j.length) === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("p", { class: 'text-center mt-2' }, "No Results Found")) : (h("table", { class: "mt-2" }, h("thead", null, h("th", { class: "sr-only" }, "period"), h("th", { class: "sr-only" }, "housekeeper name"), h("th", { class: "sr-only" }, "unit"), h("th", { class: "sr-only" }, "booking number")), h("tbody", null, (_k = this.data) === null || _k === void 0 ? void 0 : _k.map(d => (h("tr", { key: d.id }, h("td", { class: "pr-2" }, d.date), h("td", { class: "px-2" }, d.house_keeper), h("td", { class: "px-2" }, d.unit), h("td", { class: "px-2" }, d.booking_nbr ? (h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : ('N/A')))))))))));
    }
    static get style() { return IrHkArchiveStyle0; }
}, [2, "ir-hk-archive", {
        "propertyId": [8, "property-id"],
        "filters": [32],
        "data": [32],
        "isLoading": [32]
    }, [[0, "dateChanged", "handleDateRangeChange"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-hk-archive", "igl-date-range", "ir-button", "ir-date-range", "ir-icon", "ir-icons", "ir-select", "ir-title"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-hk-archive":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrHkArchive);
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-date-range":
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