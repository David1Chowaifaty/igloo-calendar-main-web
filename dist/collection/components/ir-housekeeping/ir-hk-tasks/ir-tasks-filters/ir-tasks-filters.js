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
        return (h("div", { key: '85752d3d6226fd0d83773261290938ae63a38ac9', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: '54bbe707d89321eb807fd79e2a67f43d1f94c658', class: "d-flex align-items-center justify-content-between" }, h("div", { key: 'd70f4808661a0abb9cd1398701024091afb4ee03', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'a61c6830ca00ce5512d1f553ab31e9159c6d2e92', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '276a9de6b520dfa77375830783623b50f40b77ce', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '61fa355e66d235a6075b692d40c30af58765a3dc', class: "m-0 p-0 flex-grow-1" }, "Filters")), h("ir-button", { key: '679a68b27cef14dc4fa73d57d6487b74abcc7521', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '5abb5c518042d97f945dedc5882c9f60a68571d0', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, h("div", { key: 'e1be9868a9e5ac06e6cd2e5448adc973df756466', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '32e81c862b0f506c389d98e5896b4145107c1df5', class: "pt-1" }, h("p", { key: '919c4335f35c7fe0ead055ca9208645c4239b9b6', class: "m-0 p-0" }, "Period"), h("ir-select", { key: '80c796c21ac5d2f4a7cc11cd60054474e9b708ec', LabelAvailable: false, showFirstOption: false, data: [
                { code: '001', value: 'For today' },
                { code: '002', value: `Until ${moment().format('DD MMM')}` },
                { code: '002', value: `Until ${moment().add(10, 'days').format('DD MMM')}` },
            ].map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("fieldset", { key: 'e225c8a7c77f7118678f65299201082d4365d2c1' }, h("p", { key: 'fe7251d90e0edd2181c7183d526c59b378cba21e', class: "m-0 p-0" }, "Housekeepers"), h("ir-select", { key: 'ef306cbab5ae9ebc6704e311c9f73fbc72f0e2a0', LabelAvailable: false, showFirstOption: false, data: this.generateDaysFilter().map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("fieldset", { key: 'cc87d7359c4fd07b4900c0414522c4d0858376be' }, h("p", { key: '5a300dc381f60223bbb287824b60bc7f97b4f59d', class: "m-0 p-0" }, "Cleaning frequency"), h("ir-select", { key: 'a0cae5416320d73f146f035c311e17dceda24ba5', LabelAvailable: false, showFirstOption: false, data: this.generateDaysFilter().map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("fieldset", { key: 'af40df784a6f864a6b77ba566e06ea4790c02fd2' }, h("p", { key: 'e3374dc9c6cb6bdc4ec7a0121299791161a9b143', class: "m-0 p-0" }, "Dusty units"), h("ir-select", { key: '6fd0ce55b73ddd5d758b4355ee5341732d232189', showFirstOption: false, LabelAvailable: false, data: [{ text: 'test', value: 'hello' }] })), h("fieldset", { key: '6776e8cd83aeaaa451a4dc89db30751fb2898725', class: "mb-1" }, h("p", { key: 'f9df883a26559daae0bd2fa24f56df3e3fc4554c', class: "m-0 p-0" }, "Highlight check-ins"), h("ir-select", { key: '44b46bc499557c7126102e7bccf2e3320aa0fe23', LabelAvailable: false, showFirstOption: false, data: this.generateCheckinsDaysFilter().map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("div", { key: 'cefcaf7ddfc4accf0a612535358ece0c57b7fb55', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: '457e2ef568422ce50dbbed54cdae1ebce0cc03d1', text: "Reset", size: "sm", btn_color: "outline" }), h("ir-button", { key: 'cca16672481e5743fae3934edfd89b04456840f9', text: "Apply", size: "sm" }))))));
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
