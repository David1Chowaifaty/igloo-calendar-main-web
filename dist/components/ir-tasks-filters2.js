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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        return (h("div", { key: 'c7a94ca8d1af8d32aab0bdacde444e38a34b30bf', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: '4d5306b7b6b73b9601819a94054faa41393177a3', class: "d-flex align-items-center justify-content-between" }, h("div", { key: 'a708b6eee71a4178cab5a7d2cf994fc40489bdc0', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '566e92177b962205aa7d5b159e8454a28faa1812', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'ac99e073afe36e7e136781cd6db936fefad84274', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '2bb01b582d6cc5c97b3e21c5551b46a205881f4c', class: "m-0 p-0 flex-grow-1" }, "Filters")), h("ir-button", { key: '76203736d5fe74fe211e95781912320f8b7630ad', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'ec9184124ecf13c06206c730361a1a4fc6e4e09b', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, h("div", { key: '02cf5585295d88450893ff29f046565af26bb7a0', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '99eedc2871ce821849ab0890bc6728d44de1fe1a', class: "pt-1" }, h("p", { key: '72b913fdceb02f1d8f747cffa59b28f085be1442', class: "m-0 p-0" }, "Period"), h("ir-select", { key: '92f6402025dc7137de6afd5c1f5b18caf636a87e', selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, LabelAvailable: false, showFirstOption: false, data: (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), h("fieldset", { key: 'fbfbc52072983b2866f4320812d3dca7beba10ef' }, h("p", { key: 'c06756b77f2d425ceb6a113e202aaa1bfc9021a4', class: "m-0 p-0" }, "Housekeepers"), h("ir-select", { key: '73d7e637dd8ef2715848dfae4849f225ead23cb9', selectedValue: ((_e = (_d = this.filters) === null || _d === void 0 ? void 0 : _d.housekeepers) === null || _e === void 0 ? void 0 : _e.ids.length) === housekeeping_store.hk_criteria.housekeepers.length ? '000' : (_g = (_f = this.filters) === null || _f === void 0 ? void 0 : _f.housekeepers) === null || _g === void 0 ? void 0 : _g.ids[0].toString(), LabelAvailable: false, showFirstOption: false, data: [
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
            } })), h("fieldset", { key: '2b1ed507f4966787e37b3285f32676514ab5b061' }, h("p", { key: '6756e9a6e003b4f3ae06c000b5689db0a8ca8c1f', class: "m-0 p-0" }, "Cleaning frequency"), h("ir-select", { key: '8ca83ab8d7fbe094fb7d40d6f12727b56144fca8', selectedValue: (_k = (_j = this.filters) === null || _j === void 0 ? void 0 : _j.cleaning_frequencies) === null || _k === void 0 ? void 0 : _k.code, LabelAvailable: false, showFirstOption: false, data: (_l = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _l === void 0 ? void 0 : _l.cleaning_frequencies.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_frequencies: { code: e.detail } });
            } })), h("fieldset", { key: 'd5fcb433b3754b570f7a8ee9398e762b4c065f66' }, h("p", { key: 'da8ad1693cbefdfe06cff1cd0aa84b599e5d4d86', class: "m-0 p-0" }, "Dusty units"), h("ir-select", { key: '48a65049ca3ec0aef5eef7e30922e9a967ad676e', showFirstOption: false, LabelAvailable: false, data: [{ text: 'test', value: 'hello' }] })), h("fieldset", { key: 'c24f2e8680b3fac14fc7be124cf574687f0c4ba2', class: "mb-1" }, h("p", { key: '9b337af59d6ff19a3fb80f60640276d494aca790', class: "m-0 p-0" }, "Highlight check-ins"), h("ir-select", { key: 'dcc451b43530f488c027968416d7505dc24d99a6', selectedValue: (_o = (_m = this.filters) === null || _m === void 0 ? void 0 : _m.highlight_check_ins) === null || _o === void 0 ? void 0 : _o.code, LabelAvailable: false, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_q = (_p = housekeeping_store.hk_criteria) === null || _p === void 0 ? void 0 : _p.highlight_checkin_options) === null || _q === void 0 ? void 0 : _q.map(v => ({
                text: v.description,
                value: v.code,
            })) })), h("div", { key: '6583a7e84a1c4e054e6dd8d60842d6f0a1264f72', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: '3515eb72421e3e3dd14466346adb475162445e5e', text: "Reset", size: "sm", btn_color: "outline", onClickHandler: e => this.applyFiltersEvt(e) }), h("ir-button", { key: '19f3b136d1d1dcbc43f13c97720c4e627118c63b', isLoading: this.isLoading, text: "Apply", size: "sm", onClickHandler: e => this.resetFilters(e) }))))));
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