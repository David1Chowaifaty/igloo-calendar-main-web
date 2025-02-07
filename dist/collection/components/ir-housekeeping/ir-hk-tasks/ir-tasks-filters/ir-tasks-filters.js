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
        this.collapsed = true;
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
        return (h("div", { key: '54f594e236f9493093845805cfaac1dcc5786a88', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: 'be939ebad07acb67432d8b5ed4402d89d5248403', class: "d-flex align-items-center justify-content-between" }, h("div", { key: '357ccb8b83477bb38ea3298b98a3447f0934b963', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '4c6281b1217c7a3e646dafef210e85236feeeeea', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'eb6c9429ed9fae393388bf802d0721150dbdb8c2', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '073f3b71fc818583de3f058a7a35747c27721d70', class: "m-0 p-0 flex-grow-1" }, "Filters")), h("ir-button", { key: 'd48d8f20016b07c70527c8229e919d71be88f1b1', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "myCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '920faf4310848f4962e5f6bc35ac63b295e7ff79', class: "m-0 p-0 ", id: "hkTasksFiltersCollapse" }, h("div", { key: '987d52471dea3e9d1362a363f39d87133f94995a', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'c50ae8077a5dd3675a3e7f90049de9e5d335a097', class: "pt-1" }, h("p", { key: '9d0776c96383499c6f81ad638a0406e3178b46df', class: "m-0 p-0" }, "Period"), h("ir-select", { key: '78ac6d6f2520d55d28218f18f2d0763c8f57b9ab', LabelAvailable: false, showFirstOption: false, data: [
                { code: '001', value: 'For today' },
                { code: '002', value: `Until ${moment().format('DD MMM')}` },
                { code: '002', value: `Until ${moment().add(10, 'days').format('DD MMM')}` },
            ].map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("fieldset", { key: '50dc5d448d93b75a952444400e6f0a27fdd853d9' }, h("p", { key: 'c4f6d70e37959852f6c76dfb3c19b63bf31554dd', class: "m-0 p-0" }, "Housekeepers"), h("ir-select", { key: 'fa3ce1efb135c93a5cd0d5e2edb065e12c7364bc', LabelAvailable: false, showFirstOption: false, data: this.generateDaysFilter().map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("fieldset", { key: '837c5c420f58f28d1923643189f99f309883ee5f' }, h("p", { key: '3a7f2fb20f61795e6b58dd89e805b251a0b24282', class: "m-0 p-0" }, "Cleaning frequency"), h("ir-select", { key: '110bd72ab4f65fd632f9b03b653206995ad75396', LabelAvailable: false, showFirstOption: false, data: this.generateDaysFilter().map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("fieldset", { key: '0970e0c336e07851a08fcc7c9290099e8fe7349a' }, h("p", { key: 'fd57cd9e932d1a9cefbe91b7052fef336c88f8f6', class: "m-0 p-0" }, "Dusty units"), h("ir-select", { key: 'ac2230cb2ca8bea3e2b19fbb7eec91e355519a13', showFirstOption: false, LabelAvailable: false, data: [{ text: 'test', value: 'hello' }] })), h("fieldset", { key: 'b0429ca9bde8b4843108a61bf9c782556dce5287', class: "mb-1" }, h("p", { key: '48025df70ede60a5de0c53bfa12ee1a32d0e10ce', class: "m-0 p-0" }, "Highlight check-ins"), h("ir-select", { key: 'd08d93f9b7f55ca4e9359b3e3a5aa080df8c8ec4', LabelAvailable: false, showFirstOption: false, data: this.generateCheckinsDaysFilter().map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("div", { key: '9f0d0d3ee7f1236306eb9dbcfe31be40c90a4616', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: 'faa9a8a5af9e5a92fd5c7cbdfbdfb01e6aebcb10', text: "Reset", size: "sm", btn_color: "outline" }), h("ir-button", { key: '2629118b303c847294deb1e3590ad5ddbc6c395a', text: "Apply", size: "sm" }))))));
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
