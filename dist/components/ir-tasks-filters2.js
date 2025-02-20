import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as housekeeping_store } from './housekeeping.store.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irTasksFiltersCss = ".sc-ir-tasks-filters-h{display:block;height:100%}@media (min-width: 768px){.collapse-btn.sc-ir-tasks-filters{display:none}#hkTasksFiltersCollapse.collapse.sc-ir-tasks-filters:not(.show){display:block}}";
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
            housekeepers: {
                ids: [],
            },
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
        this.filters = Object.assign({}, this.baseFilters);
    }
    updateFilter(params) {
        this.filters = Object.assign(Object.assign({}, this.filters), params);
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit(this.filters);
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = Object.assign({}, this.baseFilters);
        this.applyFilters.emit(this.filters);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        return (h("div", { key: '3b840947344003709e999e9c7f9f3b4695e37ba0', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: 'b5ba63ca83f036c804a9820c3b29c4d15d8f6f4e', class: "d-flex align-items-center justify-content-between" }, h("div", { key: '8266b96341f53a3f661213f69b56b60629c2f6cd', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '51184ff1a6ce092821e82bec37883efc8d9c31ff', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '17d48295a584b066d4ddfee10b02865c42456c3e', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'f6258af0162e7a6056d2818ce1cf8ed93e1b9c28', class: "m-0 p-0 flex-grow-1" }, "Filters")), h("ir-button", { key: '0a26b35db6fe3220f0db57da05000b13a6beb9a5', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '6f4b63260dba38dddab18567060540963b65e340', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, h("div", { key: 'e6f8b82324f64bb407f687ddbbd7b2ee65a09970', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '77b292df8d0ed7b931a8a8afbfadb1a59ae715be', class: "pt-1" }, h("p", { key: 'f9c9d9ecd46d5d1f52a499b0ddaa56b45f6c7500', class: "m-0 p-0" }, "Period"), h("ir-select", { key: 'e0a9427abe353446b0f0bdf5d9012935be617a30', selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, LabelAvailable: false, showFirstOption: false, data: (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), h("fieldset", { key: '393b80e416f50607b18f61e3e07785a578038102' }, h("p", { key: 'f20e830fb2edf002c6ff2015b444b05b8e761482', class: "m-0 p-0" }, "Housekeepers"), h("ir-select", { key: '5b17e6132e26f14630a6f443ca1993831bf26aaf', selectedValue: ((_e = (_d = this.filters) === null || _d === void 0 ? void 0 : _d.housekeepers) === null || _e === void 0 ? void 0 : _e.ids.length) === housekeeping_store.hk_criteria.housekeepers.length ? '000' : (_g = (_f = this.filters) === null || _f === void 0 ? void 0 : _f.housekeepers) === null || _g === void 0 ? void 0 : _g.ids[0].toString(), LabelAvailable: false, showFirstOption: false, data: [
                { text: 'All housekeepers', value: '000' },
                ...(_h = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _h === void 0 ? void 0 : _h.housekeepers.map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                })),
            ], onSelectChange: e => {
                var _a, _b;
                if (e.detail === '000') {
                    this.updateFilter({ housekeepers: { ids: (_b = (_a = this.baseFilters) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.ids } });
                }
                else {
                    this.updateFilter({ housekeepers: { ids: [e.detail] } });
                }
            } })), h("fieldset", { key: '2642efd75af608e9db08a761f7c01b39d548502e' }, h("p", { key: '318c9dfdcee9a5d89541f3a9ebd49f6542a3ef7e', class: "m-0 p-0" }, "Cleaning frequency"), h("ir-select", { key: 'c6ed366cd205df68bfe9c8277e7bdb2221528887', selectedValue: (_k = (_j = this.filters) === null || _j === void 0 ? void 0 : _j.cleaning_frequencies) === null || _k === void 0 ? void 0 : _k.code, LabelAvailable: false, showFirstOption: false, data: (_l = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _l === void 0 ? void 0 : _l.cleaning_frequencies.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_frequencies: { code: e.detail } });
            } })), h("fieldset", { key: '621069038788b529eee0f334e4586eb79a741f1e' }, h("p", { key: 'd5e0359af6a6ce09b585c28e2f373d921ecde3dc', class: "m-0 p-0" }, "Dusty units"), h("ir-select", { key: 'd414fe82b201c2ab6db9f20655e5bee0de5cb4bd', showFirstOption: false, LabelAvailable: false, data: (_o = (_m = housekeeping_store.hk_criteria) === null || _m === void 0 ? void 0 : _m.dusty_periods) === null || _o === void 0 ? void 0 : _o.map(v => ({
                text: v.description,
                value: v.code,
            })) })), h("fieldset", { key: '3fc1d2d569b4caf36e9a12212a4c0542bf102c7d', class: "mb-1" }, h("p", { key: 'caeaba3f69cbe4fa2260d3989d52535a52303b6c', class: "m-0 p-0" }, "Highlight check-ins"), h("ir-select", { key: 'e4dfd95db2a72d7fc6102e947787b2a0d334d80b', selectedValue: (_q = (_p = this.filters) === null || _p === void 0 ? void 0 : _p.highlight_check_ins) === null || _q === void 0 ? void 0 : _q.code, LabelAvailable: false, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_s = (_r = housekeeping_store.hk_criteria) === null || _r === void 0 ? void 0 : _r.highlight_checkin_options) === null || _s === void 0 ? void 0 : _s.map(v => ({
                text: v.description,
                value: v.code,
            })) })), h("div", { key: '1820f26ea4c024f8acff53a779c65b4f67875fc7', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: '476732cca1b1148bdfaa050e826c37aa07d8f7ad', btn_type: "button", text: "Reset", size: "sm", btn_color: "outline", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '5e516dfa03c8526daff582ba8a0b8c5ea940b20d', btn_type: "button", isLoading: this.isLoading, text: "Apply", size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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