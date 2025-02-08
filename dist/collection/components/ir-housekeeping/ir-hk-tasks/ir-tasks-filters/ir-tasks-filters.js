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
        return (h("div", { key: 'd08891c9e346bb8e19524aba6c2d468d4f16631b', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: '3130a6c42a74ec687dea741c6ac952a9b9dad8d7', class: "d-flex align-items-center justify-content-between" }, h("div", { key: 'd392acea4c6aaeb0dba5547fd86821186a414e92', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '862de28cf1ed3bb2f6c42c1237760648901232e2', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '0cc58569d3e280c69f2532c7d5dfb46c1e07dd77', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '678f70d0cc576bcb14e5c8ee804cba4c094d0941', class: "m-0 p-0 flex-grow-1" }, "Filters")), h("ir-button", { key: '9dc155e290547005084964c14dc02260dbddf25b', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'dbb2a8294b04650b844e4e8f9b0e3671f70bf0f6', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, h("div", { key: '1ee8d1660c4f230d38e8d3c195bdbfab0590fa50', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '53e94d427db363999288fbdbfe1565bfa1718f9c', class: "pt-1" }, h("p", { key: '5702cd05699e36983d5ba2c25afd403f8dcb56b1', class: "m-0 p-0" }, "Period"), h("ir-select", { key: 'b73e619702e9d9ecf10233e0bcdff7d92a82aba9', LabelAvailable: false, showFirstOption: false, data: [
                { code: '001', value: 'For today' },
                { code: '002', value: `Until ${moment().format('DD MMM')}` },
                { code: '002', value: `Until ${moment().add(10, 'days').format('DD MMM')}` },
            ].map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("fieldset", { key: '0fe866abd1205c7bd66b3a7bda8e0a1c993483b1' }, h("p", { key: '0d7134c51751d5e56eca2738ea2da44080885866', class: "m-0 p-0" }, "Housekeepers"), h("ir-select", { key: 'ab56fbef167634888de688ffbed12ddc34c29ebd', LabelAvailable: false, showFirstOption: false, data: this.generateDaysFilter().map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("fieldset", { key: '52e806e6fae249ac83ce9a727d7627c21ac757b6' }, h("p", { key: '46c825fb09ebd2baea471455ff141df4d3f6e433', class: "m-0 p-0" }, "Cleaning frequency"), h("ir-select", { key: '74b832df78030d5f6707c0940157e9d5dd9b1425', LabelAvailable: false, showFirstOption: false, data: this.generateDaysFilter().map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("fieldset", { key: '6bd38d739ddb47cf7cfe1872e9376d0e6c9b4c87' }, h("p", { key: 'e814e5d1f8be03647dbac09bdd2bb4382dd8717a', class: "m-0 p-0" }, "Dusty units"), h("ir-select", { key: '9f24eeb9343cbf33d4e374c5e82df3fb4afba43c', showFirstOption: false, LabelAvailable: false, data: [{ text: 'test', value: 'hello' }] })), h("fieldset", { key: '62733e351e7fb1e2896fb9b569f75183c52f4a3f', class: "mb-1" }, h("p", { key: '38f21804aa213d3af8dabbe404edcb1b6a8b4de0', class: "m-0 p-0" }, "Highlight check-ins"), h("ir-select", { key: 'c5e4671b16b0c38e7cb6b1800cc3578b59098cf3', LabelAvailable: false, showFirstOption: false, data: this.generateCheckinsDaysFilter().map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("div", { key: 'ef2284a4ba484e8482c8c03737ef49906c06411f', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: '022fe4c53f3d0efec43314c0cb564857aaa26b2b', text: "Reset", size: "sm", btn_color: "outline" }), h("ir-button", { key: '29e8caa13422643de026674a469507e4792699a7', text: "Apply", size: "sm" }))))));
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
