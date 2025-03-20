import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as housekeeping_store } from './housekeeping.store.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irTasksFiltersCss = ".sc-ir-tasks-filters-h{display:block;min-width:20vw;height:100%}@media (min-width: 768px){.collapse-btn.sc-ir-tasks-filters{display:none}#hkTasksFiltersCollapse.collapse.sc-ir-tasks-filters:not(.show){display:block}}";

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
        return (h("div", { key: 'ffe866362f58b49c3ebeb19795d1429d8953972b', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: '57d4acc9058b07f5f3f952099b4e2c69a04589c8', class: "d-flex align-items-center justify-content-between" }, h("div", { key: '0a686d5a589ff4c598194dacbd4bdb7bf43cdd05', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '0681ac7279032ae97a857ed6913dd9275f77b363', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'acbc77c4bc4b873e4bd15ade941d9d7b1f5fb887', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '5c5a6f84db7ff7182a559872e349e9fdf2394d50', class: "m-0 p-0 flex-grow-1" }, "Filters")), h("ir-button", { key: '69bb50ea76f44a33ca74236481e0acd3f3aa86f7', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'c949b13a60b9998cbeb9d305cc60e9d087f0dd38', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, h("div", { key: 'b4cf200129f9db045a97052c2770d24e09b9ccd4', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '3dfebad0c6870b872dd74562a525c9ca40780cb7', class: "pt-1" }, h("p", { key: 'd5e240dcd99973bedb24cdd1da23778d98afb6d4', class: "m-0 p-0" }, "Period"), h("ir-select", { key: '4e926e7c33f528d8af3527e1e1157af64a374852', testId: "period", selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, LabelAvailable: false, showFirstOption: false, data: (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), h("fieldset", { key: 'bd9a9af52a5854590736c2121d6eda1835ef536a' }, h("p", { key: 'aa345b13d0bdab66439f5f991244042389967673', class: "m-0 p-0" }, "Housekeepers"), h("ir-select", { key: '528a8b31e9061dba582b67cd394d45375d680565', testId: "housekeepers", selectedValue: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.housekeepers, LabelAvailable: false, showFirstOption: false, data: [
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
            } })), h("fieldset", { key: '1163749f0b7b8ac70daa645623b0f76637635c87' }, h("p", { key: '3774f0a24cb8feb0d156fcf9d1cb116fda23f696', class: "m-0 p-0" }, "Cleaning frequency"), h("ir-select", { key: '92a8ef230b3b9d9ee5727b8885df15af6b2c4313', testId: "cleaning_frequency", selectedValue: (_g = (_f = this.filters) === null || _f === void 0 ? void 0 : _f.cleaning_frequencies) === null || _g === void 0 ? void 0 : _g.code, LabelAvailable: false, showFirstOption: false, data: (_h = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _h === void 0 ? void 0 : _h.cleaning_frequencies.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_frequencies: { code: e.detail } });
            } })), h("fieldset", { key: '93d22323defa78d134a515669f816c50d61db9a3' }, h("p", { key: 'affaaccf2910923500c6754f6f9f67b57f3fca7f', class: "m-0 p-0" }, "Dusty units"), h("ir-select", { key: 'f6843005dee4166ea059c52893d321dc3bbae639', testId: "dusty_units", showFirstOption: false, LabelAvailable: false, selectedValue: (_k = (_j = this.filters) === null || _j === void 0 ? void 0 : _j.dusty_units) === null || _k === void 0 ? void 0 : _k.code, data: (_m = (_l = housekeeping_store.hk_criteria) === null || _l === void 0 ? void 0 : _l.dusty_periods) === null || _m === void 0 ? void 0 : _m.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), h("fieldset", { key: '0d66ed51529e1f9b4b6f23b8c96d2287c51cf7ea', class: "mb-1" }, h("p", { key: '4a73d8acca0455c3094628db5c341a56e6587d06', class: "m-0 p-0" }, "Highlight check-ins"), h("ir-select", { key: 'fc3ca4a8daf4000e1e2ecf7abc297885b75b6bf8', testId: "highlight_check_ins", selectedValue: (_p = (_o = this.filters) === null || _o === void 0 ? void 0 : _o.highlight_check_ins) === null || _p === void 0 ? void 0 : _p.code, LabelAvailable: false, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_r = (_q = housekeeping_store.hk_criteria) === null || _q === void 0 ? void 0 : _q.highlight_checkin_options) === null || _r === void 0 ? void 0 : _r.map(v => ({
                text: v.description,
                value: v.code,
            })) })), h("div", { key: 'a8b6b6e72f1f7583cbbea736dd93dfb10979b8bd', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: 'cabe53f241ece2af883389c90e6dddac684bf755', btn_type: "button", "data-testid": "reset", text: "Reset", size: "sm", btn_color: "outline", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'a30070b9b4abc988e24227f4cf2c45c12dda7cbe', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: "Apply", size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
    static get style() { return irTasksFiltersCss; }
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

//# sourceMappingURL=ir-tasks-filters2.js.map