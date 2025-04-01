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
        return (h("div", { key: 'be1436bc95cc0bcab827b78012fea40e7013b46f', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: 'e68d42de2bbe8abe5f248ae16ba841dc3e8fb56f', class: "d-flex align-items-center justify-content-between" }, h("div", { key: 'b29ada82797384c69ed3e15c82cd6d441e549f2a', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'c0e5b66f58b055fd897e37df0fd00a9c0a23ea88', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '2e559599092f8ff2d383a5357f651228ede2fdfa', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '12688f4cec8c5ab35b50d3da4b601d651630a51e', class: "m-0 p-0 flex-grow-1" }, "Filters")), h("ir-button", { key: '6a9c43bb8e253b261857c100951ef0039e8ceb2b', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'a486a705b13f6f033616ca5ac06c6ed32cd473f3', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, h("div", { key: 'f93d01837b50a52edb7e8100a7c25d2fd3586f8f', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '3ca6a36df4091516bc3d8a8f663ea5ca9e67ac09', class: "pt-1" }, h("p", { key: '4b1574aa8b5f646e8e6fe788147980eb3c329c94', class: "m-0 p-0" }, "Period"), h("ir-select", { key: 'cd472e543bb6f000aaa2c6086b68aa3e468ca939', testId: "period", selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, LabelAvailable: false, showFirstOption: false, data: (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), ((_d = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.housekeepers.length) > 1 && (h("fieldset", { key: 'd13de5f11805eb9c0218e7e8c04b7ece5bdf20ef' }, h("p", { key: 'ddab0a41ec0e58085146e2e0285e485e435fc16b', class: "m-0 p-0" }, "Housekeepers"), h("ir-select", { key: '463e281ac7464672b41e39ac22d10a185bc84b12', testId: "housekeepers", selectedValue: (_e = this.filters) === null || _e === void 0 ? void 0 : _e.housekeepers, LabelAvailable: false, showFirstOption: false, data: [
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
            } }))), h("fieldset", { key: '7557a66670069094e144d68629a12597d83853e2' }, h("p", { key: '07a7df0b907d7c78af81807ea1711c7f273375a5', class: "m-0 p-0" }, "Cleaning frequency"), h("ir-select", { key: '565431d52a8c127a66649370472db1882a333558', testId: "cleaning_frequency", selectedValue: (_h = (_g = this.filters) === null || _g === void 0 ? void 0 : _g.cleaning_frequencies) === null || _h === void 0 ? void 0 : _h.code, LabelAvailable: false, showFirstOption: false, data: (_j = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _j === void 0 ? void 0 : _j.cleaning_frequencies.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_frequencies: { code: e.detail } });
            } })), h("fieldset", { key: '6e2b83bb92dc71a64f97cdc864936aa8b08c7bfb' }, h("p", { key: 'b22f73b965ba1a2cd8050ad05186f1bc9fde2574', class: "m-0 p-0" }, "Include dusty units"), h("ir-select", { key: '56144feaf2aa7e51ca79be79cf0ffa6e6e77d89f', testId: "dusty_units", showFirstOption: false, LabelAvailable: false, selectedValue: (_l = (_k = this.filters) === null || _k === void 0 ? void 0 : _k.dusty_units) === null || _l === void 0 ? void 0 : _l.code, data: (_o = (_m = housekeeping_store.hk_criteria) === null || _m === void 0 ? void 0 : _m.dusty_periods) === null || _o === void 0 ? void 0 : _o.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), h("fieldset", { key: '233b1ba46d40c55c7b696aa0f096ecfd5df2a34c', class: "mb-1" }, h("p", { key: 'bba79da60ce2018811aa82affa6252ad7257ee0a', class: "m-0 p-0" }, "Highlight check-ins from"), h("ir-select", { key: 'e804f38936b7bb7d0628e38855d3d4f1649b26f7', testId: "highlight_check_ins", selectedValue: (_q = (_p = this.filters) === null || _p === void 0 ? void 0 : _p.highlight_check_ins) === null || _q === void 0 ? void 0 : _q.code, LabelAvailable: false, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_s = (_r = housekeeping_store.hk_criteria) === null || _r === void 0 ? void 0 : _r.highlight_checkin_options) === null || _s === void 0 ? void 0 : _s.map(v => ({
                text: v.description,
                value: v.code,
            })) })), h("div", { key: '10ac41db8efbaeeee58e3987ae2f8110a9016418', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: '3fbfdd54349ee34d410e99696ad5eb5add6dd00c', btn_type: "button", "data-testid": "reset", text: "Reset", size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'd12a2c26a994603bb0f42e126d7890c969b76872', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: "Apply", size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
