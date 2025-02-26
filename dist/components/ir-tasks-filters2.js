import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as housekeeping_store } from './housekeeping.store.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irTasksFiltersCss = ".sc-ir-tasks-filters-h{display:block;min-width:20vw;height:100%}@media (min-width: 768px){.collapse-btn.sc-ir-tasks-filters{display:none}#hkTasksFiltersCollapse.collapse.sc-ir-tasks-filters:not(.show){display:block}}";
const IrTasksFiltersStyle0 = irTasksFiltersCss;

const IrTasksFilters = /*@__PURE__*/ proxyCustomElement(class IrTasksFilters extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.applyFilters = createEvent(this, "applyFilters", 7);
        this.filters = {
            cleaning_periods: {
                code: '',
            },
            housekeepers: '000',
            cleaning_frequencies: { code: '' },
            dusty_units: { code: '' },
            highlight_check_ins: { code: '' },
        };
        this.collapsed = false;
    }
    componentWillLoad() {
        var _a, _b, _c, _d, _e;
        this.baseFilters = {
            cleaning_periods: (_a = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.cleaning_periods[0],
            housekeepers: { ids: (_b = housekeeping_store.hk_criteria.housekeepers) === null || _b === void 0 ? void 0 : _b.map(h => h.id) },
            cleaning_frequencies: (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_frequencies[0],
            dusty_units: (_d = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.dusty_periods[0],
            highlight_check_ins: (_e = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _e === void 0 ? void 0 : _e.highlight_checkin_options[0],
        };
        this.filters = Object.assign(Object.assign({}, this.baseFilters), { housekeepers: '000' });
    }
    updateFilter(params) {
        this.filters = Object.assign(Object.assign({}, this.filters), params);
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit(Object.assign(Object.assign({}, this.filters), { housekeepers: {
                ids: this.filters.housekeepers === '000' ? this.baseFilters.housekeepers.ids : [Number(this.filters.housekeepers)],
            } }));
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = Object.assign(Object.assign({}, this.baseFilters), { housekeepers: '000' });
        this.applyFilters.emit(Object.assign(Object.assign({}, this.filters), { housekeepers: {
                ids: this.filters.housekeepers === '000' ? this.baseFilters.housekeepers.ids : [Number(this.filters.housekeepers)],
            } }));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        return (h("div", { key: 'd3c4bcd4a846391b7be199fb7bf8d2c71d6501ac', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: 'f6087d8cf38e7cd06d9f7f2790d021cd949ee842', class: "d-flex align-items-center justify-content-between" }, h("div", { key: '10b0ed513710d944ca457984f1f5f90ae0b19856', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '4474d437ddaf2e17452ec78a2c83861d31ccc48e', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '955891c2df2697d648bb54c94dd1d239277efd55', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'b80fa700839f5cc90270daa2f8cc2284386c715f', class: "m-0 p-0 flex-grow-1" }, "Filters")), h("ir-button", { key: 'd6125b566b209f2ee19eb47568e91c95442b6094', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '630049e9ab48b19a7a5ee3923ef64e08389b3c34', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, h("div", { key: '062b5c6ea1a7089deea905a376ccb7cfbdf32d56', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'fb35f435aa05af78687b6227c77f0292c40bdd9e', class: "pt-1" }, h("p", { key: '969843dab350f7db15b168c63db3cc39969c9b09', class: "m-0 p-0" }, "Period"), h("ir-select", { key: 'af6060eeba3de2bd5caa79d2d331ae20d87a054e', testId: "period", selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, LabelAvailable: false, showFirstOption: false, data: (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), h("fieldset", { key: '400747f0d40f4dc020347db70f62ab976f165f00' }, h("p", { key: 'b886273b5d57086f1081bfe41d11498000a1462d', class: "m-0 p-0" }, "Housekeepers"), h("ir-select", { key: '2a9be827856a5b586f36283948bd55365662baa3', testId: "housekeepers", selectedValue: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.housekeepers, LabelAvailable: false, showFirstOption: false, data: [
                { text: 'All housekeepers', value: '000' },
                ...(_e = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _e === void 0 ? void 0 : _e.housekeepers.map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                })),
            ], onSelectChange: e => {
                // if (e.detail === '000') {
                //   this.updateFilter({ housekeepers: { ids: this.baseFilters?.housekeepers?.ids } });
                // } else {
                //   this.updateFilter({ housekeepers: { ids: [e.detail] } });
                // }
                this.updateFilter({ housekeepers: e.detail });
            } })), h("fieldset", { key: '1761ab122a72c269410d13096530d8ac8a1d5466' }, h("p", { key: '5d97011d708a3d1fa7a180e1c3eab73d7357fee2', class: "m-0 p-0" }, "Cleaning frequency"), h("ir-select", { key: 'dfbcf1ced0bd8e1a73e2063e568928a5ea733ae5', testId: "cleaning_frequency", selectedValue: (_g = (_f = this.filters) === null || _f === void 0 ? void 0 : _f.cleaning_frequencies) === null || _g === void 0 ? void 0 : _g.code, LabelAvailable: false, showFirstOption: false, data: (_h = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _h === void 0 ? void 0 : _h.cleaning_frequencies.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_frequencies: { code: e.detail } });
            } })), h("fieldset", { key: '9a08e27ea5b710ad007f94149a41e27ad1ffbd86' }, h("p", { key: '387a15c7afb0f714ef1be1228416cfb955975e56', class: "m-0 p-0" }, "Dusty units"), h("ir-select", { key: '174b03d1ffaffc3d2983adcc0556bc742597a91b', testId: "dusty_units", showFirstOption: false, LabelAvailable: false, selectedValue: (_k = (_j = this.filters) === null || _j === void 0 ? void 0 : _j.dusty_units) === null || _k === void 0 ? void 0 : _k.code, data: (_m = (_l = housekeeping_store.hk_criteria) === null || _l === void 0 ? void 0 : _l.dusty_periods) === null || _m === void 0 ? void 0 : _m.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), h("fieldset", { key: '344a6704b232097bc34a50da7520ac9a76920b26', class: "mb-1" }, h("p", { key: 'c64e7d0de13aa5bc98a6bdd51c7c83945862c35b', class: "m-0 p-0" }, "Highlight check-ins"), h("ir-select", { key: '9db69748701c90cffd379c3cec07ab48ba92e091', testId: "highlight_check_ins", selectedValue: (_p = (_o = this.filters) === null || _o === void 0 ? void 0 : _o.highlight_check_ins) === null || _p === void 0 ? void 0 : _p.code, LabelAvailable: false, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_r = (_q = housekeeping_store.hk_criteria) === null || _q === void 0 ? void 0 : _q.highlight_checkin_options) === null || _r === void 0 ? void 0 : _r.map(v => ({
                text: v.description,
                value: v.code,
            })) })), h("div", { key: '50e568ca860ffd8bd9f94760ee34c18fe8f7ec1e', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: 'f64c22e14f369b46d34b9072e4c6e42ef9a8ba77', btn_type: "button", "data-testid": "reset", text: "Reset", size: "sm", btn_color: "outline", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '18df7fff3d961a824b26e4b9b375ab86477f8825', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: "Apply", size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
    static get style() { return IrTasksFiltersStyle0; }
}, [2, "ir-tasks-filters", {
        "isLoading": [4, "is-loading"],
        "filters": [32],
        "collapsed": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-tasks-filters", "ir-button", "ir-icons", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-tasks-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTasksFilters);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrTasksFilters as I, defineCustomElement as d };

//# sourceMappingURL=ir-tasks-filters2.js.map