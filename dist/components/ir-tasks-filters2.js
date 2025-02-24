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
        return (h("div", { key: '0ab43eb17ea5044643fa26c5f38dbdb3bdec2cbc', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: 'eb1602381b1a0c0592f8a566c1602461b9af3e70', class: "d-flex align-items-center justify-content-between" }, h("div", { key: '9399faadd850f3bdf2ba0540f200846905f60050', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '9334fcfa03a8cc031b285d400da37500035e693e', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '67cf103696b99d01c2bedbdd5e69f6e816845491', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'e471386eedc5bd07a4c11ecc5c7feb05a134841d', class: "m-0 p-0 flex-grow-1" }, "Filters")), h("ir-button", { key: 'bea4ff677eb2243bcb1eb99897bce6be6439a6cf', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '61bb78025e3b420132c31484768ad3cd62c892fa', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, h("div", { key: '32963c826f7ddb25e1d0afde01c19ab08dfde307', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '6b60a4303ab726c6ab7f8af444db2cacd211d574', class: "pt-1" }, h("p", { key: '1cd81ad57e0b696774ff5d5bdfc0a201e51f1ff8', class: "m-0 p-0" }, "Period"), h("ir-select", { key: '3c6ac5b7e73ba08e680fc5137409a2181f617db3', selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, LabelAvailable: false, showFirstOption: false, data: (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), h("fieldset", { key: '5b1895c331210a54a3dd250f1310ace91484ea3e' }, h("p", { key: '4adc903639e33a90d5e1fef57b46e81af504b713', class: "m-0 p-0" }, "Housekeepers"), h("ir-select", { key: '78fbc5fd97262f8b2d5ff60f95764f5996a6e34c', selectedValue: ((_e = (_d = this.filters) === null || _d === void 0 ? void 0 : _d.housekeepers) === null || _e === void 0 ? void 0 : _e.ids.length) === housekeeping_store.hk_criteria.housekeepers.length ? '000' : (_g = (_f = this.filters) === null || _f === void 0 ? void 0 : _f.housekeepers) === null || _g === void 0 ? void 0 : _g.ids[0].toString(), LabelAvailable: false, showFirstOption: false, data: [
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
            } })), h("fieldset", { key: '6ecf776f5d4b7b781a5e2d6669fe1e65b063802f' }, h("p", { key: '77871f09f24f97ff5890582fd3ba31ae02ec4353', class: "m-0 p-0" }, "Cleaning frequency"), h("ir-select", { key: '85acf32bacb79792f51c3e02b1d9f06f21eda32b', selectedValue: (_k = (_j = this.filters) === null || _j === void 0 ? void 0 : _j.cleaning_frequencies) === null || _k === void 0 ? void 0 : _k.code, LabelAvailable: false, showFirstOption: false, data: (_l = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _l === void 0 ? void 0 : _l.cleaning_frequencies.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_frequencies: { code: e.detail } });
            } })), h("fieldset", { key: '215b34c96ab6ad5c6c73902bf0aa7b6896a2b3ba' }, h("p", { key: '589af6173a26da7a89750dfabfe284a666ffe2d7', class: "m-0 p-0" }, "Dusty units"), h("ir-select", { key: 'bc165763d8c246eaa98b00bee28d851d7e2ce9d3', showFirstOption: false, LabelAvailable: false, data: (_o = (_m = housekeeping_store.hk_criteria) === null || _m === void 0 ? void 0 : _m.dusty_periods) === null || _o === void 0 ? void 0 : _o.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), h("fieldset", { key: '99a2999710db6e6f0cfcb348a91a09cd9efc51f4', class: "mb-1" }, h("p", { key: '54e6871b20061b6046ff4fbfde7bd204dc8dca9d', class: "m-0 p-0" }, "Highlight check-ins"), h("ir-select", { key: '0c6fb939e4134364a3a3dec082bec3e1510ddbc8', selectedValue: (_q = (_p = this.filters) === null || _p === void 0 ? void 0 : _p.highlight_check_ins) === null || _q === void 0 ? void 0 : _q.code, LabelAvailable: false, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_s = (_r = housekeeping_store.hk_criteria) === null || _r === void 0 ? void 0 : _r.highlight_checkin_options) === null || _s === void 0 ? void 0 : _s.map(v => ({
                text: v.description,
                value: v.code,
            })) })), h("div", { key: 'd3515ace3b9e39bc36acf6b0fd4c4394917ccbc8', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: 'd34fa4c4d73d508db73ff494487c0c6137e2a530', btn_type: "button", text: "Reset", size: "sm", btn_color: "outline", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '25da376cac7e3f2acff20577678f2c81d78c79f6', btn_type: "button", isLoading: this.isLoading, text: "Apply", size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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