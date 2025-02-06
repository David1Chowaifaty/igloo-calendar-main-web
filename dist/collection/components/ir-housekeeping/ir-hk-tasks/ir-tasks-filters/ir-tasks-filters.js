import { h } from "@stencil/core";
import moment from "moment";
export class IrTasksFilters {
    constructor() {
        this.filters = {
            period: '',
            housekeepers: '',
            cleaning_frequency: '',
            dusty_units: '',
            highlight_check_ins: '',
        };
        this.collapsed = false;
    }
    generateDaysFilter() {
        let list = [{ code: '0', value: 'Do not include' }];
        for (let i = 3; i <= 7; i++) {
            list.push({ code: i.toString(), value: `Cleaned ${i} ago` });
        }
        return list;
    }
    generateCheckinsDaysFilter() {
        let list = [{ code: '0', value: 'No' }];
        for (let i = 2; i <= 10; i++) {
            list.push({ code: i.toString(), value: `Cleaned ${i} ago` });
        }
        return list;
    }
    render() {
        return (h("div", { key: 'fa6bcfd2c6728aeed15267352cf00836b0ccce47', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: '6270a5311e59345a198f0a10266372b94a8f1843', class: "d-flex align-items-center", style: { gap: '0.5rem', cursor: 'pointer' } }, h("svg", { key: 'a0e33255c243c6ab098269e60ed023ddb59ec7ff', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'dcf5aee30e4ebc71c103be61b6536531c327836c', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '1e2e49b4f5727e603b40576895b67cb3c09113dd', class: "m-0 p-0 flex-grow-1", onClick: () => (this.collapsed = !this.collapsed), "data-toggle": "collapse", "data-target": `#hkTasksFiltersCollapse`, "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "myCollapse" }, "Filters")), h("div", { key: 'd35b7620e9a888252ccd571d6161d49178d838a7', class: "m-0 p-0 ", id: "hkTasksFiltersCollapse" }, h("div", { key: '04b622cd9819af6731785f02d22f17ff09782987', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '9d29492d1fef2e15ef13bab7c82bb754554d0370', class: "pt-1" }, h("p", { key: 'd3d12bcfb53e29a2dcc168985d39b4d59bc5a41a', class: "m-0 p-0" }, "Period"), h("ir-select", { key: 'a6bed6090c3f7dc98de73a39bc8e11a8c161b31b', LabelAvailable: false, showFirstOption: false, data: [
                { code: '001', value: 'For today' },
                { code: '002', value: `Until ${moment().format('DD MMM')}` },
                { code: '002', value: `Until ${moment().add(10, 'days').format('DD MMM')}` },
            ].map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("fieldset", { key: '4572829e5fc7c8dc1bf757b770dd13425c9028d4' }, h("p", { key: '2c13d08cd5773eda40b3d11a7d37678dc393ed49', class: "m-0 p-0" }, "Housekeepers"), h("ir-select", { key: 'a44a451bc41f2c34fb06477ccb96293ff8b5340b', LabelAvailable: false, showFirstOption: false, data: this.generateDaysFilter().map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("fieldset", { key: '92a4acb1018543121179fc8454a5a9b03a9ce2c4' }, h("p", { key: 'fef29181b8d718b2086477a96a447e56a2e613ce', class: "m-0 p-0" }, "Cleaning frequency"), h("ir-select", { key: '648b63f4442be2b72bb6d1e237496a9a0f2bc099', LabelAvailable: false, showFirstOption: false, data: this.generateDaysFilter().map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("fieldset", { key: 'a182189840e53a3c57a63362ed62ad980b6d1bef' }, h("p", { key: '8923773a7e63c559145555471f37cbfe254adf54', class: "m-0 p-0" }, "Dusty units"), h("ir-select", { key: '1404d6c0fe24004eba12258326f28a7d2ee14dee', showFirstOption: false, LabelAvailable: false, data: [{ text: 'test', value: 'hello' }] })), h("fieldset", { key: 'ba43dd1f097f42260c68e6e031368f0d8ea13de8', class: "mb-1" }, h("p", { key: 'ff46fb3229b4234a16efcd3aae51f25ad1d8af5e', class: "m-0 p-0" }, "Highlight check-ins"), h("ir-select", { key: 'cb0f7fd455cd57ab09233efe94c20bcfd5a16982', LabelAvailable: false, showFirstOption: false, data: this.generateCheckinsDaysFilter().map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("div", { key: 'fe802f7f6f7ed64b0f502a1c3296752bbcf7f88a', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: '3b314bb5d98e7fe9ca81e06373d43509b04c20e8', text: "Reset", size: "sm", btn_color: "outline" }), h("ir-button", { key: '28dba03f76a6cd59df3d5f2971cb32bf3526620a', text: "Apply", size: "sm" }))))));
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
    static get states() {
        return {
            "filters": {},
            "collapsed": {}
        };
    }
    static get events() {
        return [{
                "method": "applyClicked",
                "name": "applyClicked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "TaskFilters",
                    "resolved": "{ period: string; housekeepers: string; cleaning_frequency: string; dusty_units: string; highlight_check_ins: string; }",
                    "references": {
                        "TaskFilters": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-housekeeping/ir-hk-tasks/types.ts::TaskFilters"
                        }
                    }
                }
            }, {
                "method": "resetClicked",
                "name": "resetClicked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "TaskFilters",
                    "resolved": "{ period: string; housekeepers: string; cleaning_frequency: string; dusty_units: string; highlight_check_ins: string; }",
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
