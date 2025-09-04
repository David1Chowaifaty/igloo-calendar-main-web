import { Fragment, h } from "@stencil/core";
import moment from "moment";
export class IrRevenueTable {
    constructor() {
        this.payments = new Map();
    }
    componentWillLoad() {
        let pt = {};
        this.payTypes.forEach(p => {
            pt = Object.assign(Object.assign({}, pt), { [p.CODE_NAME]: p.CODE_VALUE_EN });
        });
        this.payTypesObj = pt;
    }
    render() {
        return (h("div", { key: '1ced62b0f82ade0b7d3d1fca1631061dc24e97ce', class: "card p-1 revenue-table__table" }, h("div", { key: 'fd82cf5c88446a00f8e5d158c674dda6f7b1885b', class: 'revenue-table__title-section' }, h("p", { key: '365207bcc83a6e323e17074a9ead908395c3e6bb', class: "m-0 p-0" }, "Payment transactions"), h("div", { key: '556414eecada046f7c45f566ac864d0c1d209c35', class: "" }, h("ir-date-picker", { key: '7eb1aae967771251a416f16dc75478a06d343cda', "data-testid": "pickup_date", date: this.date, class: "w-100", emitEmptyDate: true, maxDate: moment().format('YYYY-MM-DD'), onDateChanged: evt => {
                var _a;
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.fetchNewReports.emit((_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD'));
            } }, h("div", { key: 'd2463d1217ea9ad7e371e67b5915a340e0b7cd17', slot: "trigger", class: "revenue-table__date-picker" }, h("div", { key: 'd361ca2264a0c40d17de779e1638faace705f0de', class: "revenue-table__date-picker-icon" }, h("ir-icons", { key: '33ea455c5261b16fa37a250779190d7d111eff94', name: "calendar", style: { '--icon-size': '1rem' } })), h("input", { key: '57a8f1af3356956f64bce243172357a32c624f05', type: "text", value: this === null || this === void 0 ? void 0 : this.date, class: `revenue-table__date-picker-input form-control w-100 input-sm  text-center`, style: { width: '100%' } }))))), this.payments.size > 0 ? (h(Fragment, null, h("div", { class: "revenue-table__header" }, h("p", null, "Method"), h("p", null, "Amount")), Array.from(this.payments.entries()).map(([key, p]) => {
            return h("ir-revenue-row", { key: key, payments: p, groupName: this.payTypesObj[key] });
        }))) : (h("p", { class: "text-center my-auto mx-auto" }, "There are no payment transactions recorded for the selected date."))));
    }
    static get is() { return "ir-revenue-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-revenue-table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-revenue-table.css"]
        };
    }
    static get properties() {
        return {
            "payments": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "GroupedFolioPayment",
                    "resolved": "Map<string, FolioPayment[]>",
                    "references": {
                        "GroupedFolioPayment": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-daily-revenue/types.ts::GroupedFolioPayment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "new Map()"
            },
            "payTypes": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IEntries[]",
                    "resolved": "IEntries[]",
                    "references": {
                        "IEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::IEntries"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "date": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "date",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "fetchNewReports",
                "name": "fetchNewReports",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-revenue-table.js.map
