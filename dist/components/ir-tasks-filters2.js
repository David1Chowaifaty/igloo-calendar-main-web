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
        return (h("div", { key: '0ec313724c0e62ea7a3d96e7019bcedeed15afb9', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: '0117be01e984859e80138b77059627b84c292ecf', class: "d-flex align-items-center justify-content-between" }, h("div", { key: '8af4853a39ec66255d1530d70886df1cd25a64ab', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '4a28078d74691942d42df46a717ca3f529a61b72', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '7c690e4480236e523af962b00cb1d7146bebd116', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '93edd37e61bf45d9a98389416d636c18e53408ce', class: "m-0 p-0 flex-grow-1" }, "Filters")), h("ir-button", { key: '1ae51cef2cb767f3e4560aa2d00c2479fcc9ff24', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '8d19ad7af48f1203c1e15bc712f7c7573a1ec2a4', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, h("div", { key: 'dc35675a83a9c33e531fdc433a8a88e82f5d7325', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'c4879b1de11434c421b0351c6308078c27cd1350', class: "pt-1" }, h("p", { key: '48e1694eb79c8e32e132e74be9dbf109b2b21e4f', class: "m-0 p-0" }, "Period"), h("ir-select", { key: 'ba4ddb3d5599135a2adc5598b7fa1e095d52712d', testId: "period", selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, LabelAvailable: false, showFirstOption: false, data: (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), h("fieldset", { key: '32b9ac3e46318181cd55b3e4cdd169c77aa5c594' }, h("p", { key: '639a791d9166070b8bef3ddab5de700ca2ee9ea7', class: "m-0 p-0" }, "Housekeepers"), h("ir-select", { key: '8562ea39145cec38cae70ebc0fde622657d213be', testId: "housekeepers", selectedValue: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.housekeepers, LabelAvailable: false, showFirstOption: false, data: [
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
            } })), h("fieldset", { key: '3c5fe437940c618b60fafb4b33fd66530207cfa4' }, h("p", { key: '0c11529ca2dbb44d78f88ddc6ca48186fac1994b', class: "m-0 p-0" }, "Cleaning frequency"), h("ir-select", { key: '18f036eb471ea6146c29aaa5892245c334fa1ccc', testId: "cleaning_frequency", selectedValue: (_g = (_f = this.filters) === null || _f === void 0 ? void 0 : _f.cleaning_frequencies) === null || _g === void 0 ? void 0 : _g.code, LabelAvailable: false, showFirstOption: false, data: (_h = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _h === void 0 ? void 0 : _h.cleaning_frequencies.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_frequencies: { code: e.detail } });
            } })), h("fieldset", { key: 'a99c67293a2c7b27dee45a1efcc32f37d2e0f2f5' }, h("p", { key: 'ac2c85ced416e3c4deea32f80bc533a0212e1e83', class: "m-0 p-0" }, "Dusty units"), h("ir-select", { key: '7c3f89b1e396ba986e1c552cc05978ec7cc9e3d1', testId: "dusty_units", showFirstOption: false, LabelAvailable: false, selectedValue: (_k = (_j = this.filters) === null || _j === void 0 ? void 0 : _j.dusty_units) === null || _k === void 0 ? void 0 : _k.code, data: (_m = (_l = housekeeping_store.hk_criteria) === null || _l === void 0 ? void 0 : _l.dusty_periods) === null || _m === void 0 ? void 0 : _m.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), h("fieldset", { key: 'c6bd557041f372c8d995547ae3fb5b32db3bc381', class: "mb-1" }, h("p", { key: '1a5a2beefcacb1c5ae894b9a0b4f97284dc1555c', class: "m-0 p-0" }, "Highlight check-ins"), h("ir-select", { key: 'e0538b0ed68b33cfb54efd0dd9d9201eae17ef86', testId: "highlight_check_ins", selectedValue: (_p = (_o = this.filters) === null || _o === void 0 ? void 0 : _o.highlight_check_ins) === null || _p === void 0 ? void 0 : _p.code, LabelAvailable: false, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_r = (_q = housekeeping_store.hk_criteria) === null || _q === void 0 ? void 0 : _q.highlight_checkin_options) === null || _r === void 0 ? void 0 : _r.map(v => ({
                text: v.description,
                value: v.code,
            })) })), h("div", { key: '18e0e2a0822388e7fd9578df5a8ad9387657604c', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: 'b1758b4fa3ec6c6604674f3916875f29f4256339', btn_type: "button", "data-testid": "reset", text: "Reset", size: "sm", btn_color: "outline", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '01f4f0b94103cee574a3b88989a36573e6191777', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: "Apply", size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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