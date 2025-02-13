import { h } from "@stencil/core";
import housekeeping_store from "../../../../stores/housekeeping.store";
export class IrTasksFilters {
    constructor() {
        this.isLoading = undefined;
        this.filters = {
            cleaning_periods: {
                code: '',
            },
            housekeepers: {
                code: '',
            },
            cleaning_frequencies: { code: '' },
            dusty_units: { code: '' },
            highlight_check_ins: { code: '' },
        };
        this.collapsed = false;
    }
    componentWillLoad() {
        var _a, _b, _c, _d;
        this.baseFilters = {
            cleaning_periods: (_a = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.cleaning_periods[0],
            housekeepers: { code: '000' },
            cleaning_frequencies: (_b = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _b === void 0 ? void 0 : _b.cleaning_frequencies[0],
            dusty_units: (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.dusty_periods[0],
            highlight_check_ins: (_d = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.highlight_checkin_options[0],
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        return (h("div", { key: 'be27d6bb6421fa3b20bd3fa0a58287d5c274cb49', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: '15e15d7c3bab1acf95d7b2ae14f530da2fd6f9e7', class: "d-flex align-items-center justify-content-between" }, h("div", { key: '87f68c3b228315375a65ead5b0196515cd05ea04', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '7d8371c4606fa0f0aa0dcb23c98e53907c0c9024', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '09276b28b123e4aa7298b7cd3a8270dc140199e4', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'a791a831d62a59f5871f4adc628db65f9d2af3e2', class: "m-0 p-0 flex-grow-1" }, "Filters")), h("ir-button", { key: '6d6cc5512f5709db47a81fe34777e4b42a786b51', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'ca00b24f93d4e76d935fc3bfc4a124ec5ead7c94', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, h("div", { key: '2870566bd26be26ef7ddf26d364d548828f8a56f', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '47139f34aff0da09464f443b09e974cdde1c24d7', class: "pt-1" }, h("p", { key: 'ab5fe71fbb0710b414177655855f3481f15533a4', class: "m-0 p-0" }, "Period"), h("ir-select", { key: 'd58762785c1b7366b2924e54ebec9e28ac2f9cf8', selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, LabelAvailable: false, showFirstOption: false, data: (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), h("fieldset", { key: 'f4d525139319bddc39185e1a4584b6175857d6fc' }, h("p", { key: '3416125fc0882797779bdd6e7b9f6a5b5cc0636e', class: "m-0 p-0" }, "Housekeepers"), h("ir-select", { key: 'f24ddf34fec38d7b84515a01684205fae56b8e90', selectedValue: (_e = (_d = this.filters) === null || _d === void 0 ? void 0 : _d.housekeepers) === null || _e === void 0 ? void 0 : _e.code, LabelAvailable: false, showFirstOption: false, data: [
                { text: 'All housekeepers', value: '000' },
                ...(_f = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _f === void 0 ? void 0 : _f.housekeepers.map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                })),
            ], onSelectChange: e => {
                this.updateFilter({ housekeepers: { code: e.detail } });
            } })), h("fieldset", { key: '81fa307c7c7d6bafa7f6a07dc0b5836f68da7314' }, h("p", { key: '7d87638d5a502f14df7819730e64e26bbe79bd43', class: "m-0 p-0" }, "Cleaning frequency"), h("ir-select", { key: '28035f4555d33ca7d805b2338e783e6ab3b92b5b', selectedValue: (_h = (_g = this.filters) === null || _g === void 0 ? void 0 : _g.cleaning_frequencies) === null || _h === void 0 ? void 0 : _h.code, LabelAvailable: false, showFirstOption: false, data: (_j = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _j === void 0 ? void 0 : _j.cleaning_frequencies.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_frequencies: { code: e.detail } });
            } })), h("fieldset", { key: 'c070ed9b8af3b3b6e734d57dd0a4f5517a1e7cdb' }, h("p", { key: '0acb240da9e7a019822f835da90a394821a65da5', class: "m-0 p-0" }, "Dusty units"), h("ir-select", { key: 'e37de7fbd35227a9eda776ee80fb195bfedd1659', showFirstOption: false, LabelAvailable: false, data: [{ text: 'test', value: 'hello' }] })), h("fieldset", { key: '95fa477a3c187d199b895293994a381f9ff772b1', class: "mb-1" }, h("p", { key: 'a8fb456a76794653ff8dd4005ac00c7bd2e5ee3d', class: "m-0 p-0" }, "Highlight check-ins"), h("ir-select", { key: '7b4fae6e210fc7a080e9b602f37cbea9545e1928', selectedValue: (_l = (_k = this.filters) === null || _k === void 0 ? void 0 : _k.highlight_check_ins) === null || _l === void 0 ? void 0 : _l.code, LabelAvailable: false, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_o = (_m = housekeeping_store.hk_criteria) === null || _m === void 0 ? void 0 : _m.highlight_checkin_options) === null || _o === void 0 ? void 0 : _o.map(v => ({
                text: v.description,
                value: v.code,
            })) })), h("div", { key: '7d9c662b289c221429caf61edf95e131ad8b901c', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: '7841b2d963e10a071c76433a8ba0035308b3fe93', text: "Reset", size: "sm", btn_color: "outline", onClickHandler: e => this.applyFiltersEvt(e) }), h("ir-button", { key: 'b7a72e070a848824817e51e96ebba802d1a95b79', isLoading: this.isLoading, text: "Apply", size: "sm", onClickHandler: e => this.resetFilters(e) }))))));
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
                    "resolved": "{ cleaning_periods: { code: string; }; housekeepers: { code: string; }; cleaning_frequencies: { code: string; }; dusty_units: { code: string; }; highlight_check_ins: { code: string; }; }",
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
