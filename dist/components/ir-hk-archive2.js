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
        this.filters = {
            from_date: hooks().add(-90, 'days').format('YYYY-MM-DD'),
            to_date: hooks().format('YYYY-MM-DD'),
            filtered_by_hkm: [],
            filtered_by_unit: [],
        };
        this.data = [];
        this.isLoading = null;
        this.houseKeepingService = new HouseKeepingService();
        this.units = [];
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
        return (h(Host, { key: 'f88dc0c2af973e9eb0ec4b4f509a560faacc70a0' }, h("ir-title", { key: 'ec47e965acd4d66390d414bcb98181e643161b80', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: '81d2537dedb0d1f4f0c8335477f09b729471c64f', class: "px-1" }, h("div", { key: '1fcbd65f5b0ad9119322c19ebde7bb0eafcd6dd5', class: "d-flex" }, h("ir-select", { key: '66aa8ca66f47db5603026de3ad7f26bd334f68c0', class: "w-100", showFirstOption: false, LabelAvailable: false, data: [
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
            } }), h("ir-select", { key: '47aca3b3b8a8430f1db239d37e784a8b5de8eac1', class: "ml-1 w-100", selectedValue: ((_c = (_b = this.filters) === null || _b === void 0 ? void 0 : _b.filtered_by_hkm) === null || _c === void 0 ? void 0 : _c.length) === housekeeping_store.hk_criteria.housekeepers.length ? '000' : (_e = (_d = this.filters) === null || _d === void 0 ? void 0 : _d.filtered_by_hkm[0]) === null || _e === void 0 ? void 0 : _e.toString(), LabelAvailable: false, showFirstOption: false, data: [
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
            } })), h("div", { key: 'a7029408ef114d09e2d1649d50bfeca1fad80b4b', class: "d-flex mt-1 align-items-center" }, h("igl-date-range", { key: '796b445ab9df3bd471c36895138a41ff1bda8efe', class: "mr-1", dateLabel: locales.entries.Lcz_Dates, minDate: hooks().add(-90, 'days').format('YYYY-MM-DD'), defaultData: {
                fromDate: this.filters.from_date,
                toDate: this.filters.to_date,
            } }), h("ir-button", { key: '4f96739dbd534976fec2706b41b726469a7cb3ac', title: (_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), h("ir-button", { key: '781965bd24ec340890d435da636403584e24901f', title: (_h = locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), ((_j = this.data) === null || _j === void 0 ? void 0 : _j.length) === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("p", { class: 'text-center mt-2' }, "No Results Found")) : (h("table", { class: "mt-2" }, h("thead", null, h("th", { class: "sr-only" }, "period"), h("th", { class: "sr-only" }, "housekeeper name"), h("th", { class: "sr-only" }, "unit"), h("th", { class: "sr-only" }, "booking number")), h("tbody", null, (_k = this.data) === null || _k === void 0 ? void 0 : _k.map(d => (h("tr", { key: d.id }, h("td", { class: "pr-2" }, d.date), h("td", { class: "px-2" }, d.house_keeper), h("td", { class: "px-2" }, d.unit), h("td", { class: "px-2" }, d.booking_nbr ? (h("ir-button", { btn_color: "link", btnStyle: {
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