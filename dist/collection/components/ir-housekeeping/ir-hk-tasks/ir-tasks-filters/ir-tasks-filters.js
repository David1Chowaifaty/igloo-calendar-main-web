import { h } from "@stencil/core";
import housekeeping_store from "../../../../stores/housekeeping.store";
export class IrTasksFilters {
    constructor() {
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        return (h("div", { key: '0c5a96dc1934ce1bb36383c54181999537b4f3dd', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: '71192473e0dcb5f15e5f399180132ffd20f4920f', class: "d-flex align-items-center justify-content-between" }, h("div", { key: 'e810b435de472a57b645ec023dcbec19195be1e2', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'bab5fb019467ed74219c40e4993ba94ab5519885', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'ef6fde261f38c0490e92fedb69e61470ef8896a4', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'f55b787f2264474fb04eeee630d4e4582fd9c3f2', class: "m-0 p-0 flex-grow-1" }, "Filters")), h("ir-button", { key: '976eb9c662183b02b6855b7cdc39222dc0b89801', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '63a97e1e6627be7f81cce05201845460d59441c8', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, h("div", { key: 'f2bd6469c76b7d6acda55b753f654e4908d3aea3', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'a689be235571e7ed743feb3d2cd40df735bb40a3', class: "pt-1" }, h("p", { key: '1118858765b05aa19e020f01838300fa45279762', class: "m-0 p-0" }, "Period"), h("ir-select", { key: '1aff8cd81ea1eef66236106c88b29514980f3ee6', testId: "period", selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, LabelAvailable: false, showFirstOption: false, data: (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), ((_d = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.housekeepers.length) > 1 && (h("fieldset", { key: '2a96adb606b4679a3bad7a2fb2fb6f65e4ab1d23' }, h("p", { key: '7d17c3ce0b41b25ef233445f5100d57dd7bdae33', class: "m-0 p-0" }, "Housekeepers"), h("ir-select", { key: 'f35a6a24460519c234b6a319594a10fba2825edb', testId: "housekeepers", selectedValue: (_e = this.filters) === null || _e === void 0 ? void 0 : _e.housekeepers, LabelAvailable: false, showFirstOption: false, data: [
                { text: 'All housekeepers', value: '000' },
                ...(_f = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _f === void 0 ? void 0 : _f.housekeepers.map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                })).sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase())),
            ], onSelectChange: e => {
                // if (e.detail === '000') {
                //   this.updateFilter({ housekeepers: { ids: this.baseFilters?.housekeepers?.ids } });
                // } else {
                //   this.updateFilter({ housekeepers: { ids: [e.detail] } });
                // }
                this.updateFilter({ housekeepers: e.detail });
            } }))), h("fieldset", { key: '33e536fcdac9da1fa301a04d1b59dda57d261c95' }, h("p", { key: 'ad2ed03b2cbe13091d5fed5dff95e5cd91daa4e8', class: "m-0 p-0" }, "Cleaning frequency"), h("ir-select", { key: '96e6c3ff5fa2b93be073acf87d92fdfda2476416', testId: "cleaning_frequency", selectedValue: (_h = (_g = this.filters) === null || _g === void 0 ? void 0 : _g.cleaning_frequencies) === null || _h === void 0 ? void 0 : _h.code, LabelAvailable: false, showFirstOption: false, data: (_j = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _j === void 0 ? void 0 : _j.cleaning_frequencies.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_frequencies: { code: e.detail } });
            } })), h("fieldset", { key: 'c0ade0b5b0701d2124c49f745a937bb1010fe8a2' }, h("p", { key: 'e8ab9db47623b92958a3e0d7312474a02ce16bfa', class: "m-0 p-0" }, "Include dusty units"), h("ir-select", { key: 'c08cc207e9f66c7cb1ff64f061228e73aa9f0bab', testId: "dusty_units", showFirstOption: false, LabelAvailable: false, selectedValue: (_l = (_k = this.filters) === null || _k === void 0 ? void 0 : _k.dusty_units) === null || _l === void 0 ? void 0 : _l.code, data: (_o = (_m = housekeeping_store.hk_criteria) === null || _m === void 0 ? void 0 : _m.dusty_periods) === null || _o === void 0 ? void 0 : _o.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), h("fieldset", { key: '68687b7e0e556541ecf7d12f69a1a2c8db030f53', class: "mb-1" }, h("p", { key: '8b337074317efd71eb387ea9f8cad327edc26689', class: "m-0 p-0" }, "Highlight check-ins from"), h("ir-select", { key: '1023b02cfdd1f6bf8ca0b967de746028ee503e9c', testId: "highlight_check_ins", selectedValue: (_q = (_p = this.filters) === null || _p === void 0 ? void 0 : _p.highlight_check_ins) === null || _q === void 0 ? void 0 : _q.code, LabelAvailable: false, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_s = (_r = housekeeping_store.hk_criteria) === null || _r === void 0 ? void 0 : _r.highlight_checkin_options) === null || _s === void 0 ? void 0 : _s.map(v => ({
                text: v.description,
                value: v.code,
            })) })), h("div", { key: 'c5eef891d1945fc835c2f61a85b8a57b1822ee02', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: '39b233f6e3b647d5db8ed517aa625e6aaf4bf078', btn_type: "button", "data-testid": "reset", text: "Reset", size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '461ec68975a995374004858159f7113fc5874bf6', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: "Apply", size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
    static get is() { return "ir-tasks-filters"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-tasks-filters.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-tasks-filters.css"]
        };
    }
    static get properties() {
        return {
            "isLoading": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "is-loading",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "filters": {},
            "collapsed": {}
        };
    }
    static get events() {
        return [{
                "method": "applyFilters",
                "name": "applyFilters",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "TaskFilters",
                    "resolved": "{ cleaning_periods: { code: string; }; housekeepers: { ids: number[]; }; cleaning_frequencies: { code: string; }; dusty_units: { code: string; }; highlight_check_ins: { code: string; }; }",
                    "references": {
                        "TaskFilters": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-housekeeping/ir-hk-tasks/types.ts::TaskFilters"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-tasks-filters.js.map
