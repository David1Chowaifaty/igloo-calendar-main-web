import { h } from "@stencil/core";
import { formatAmount } from "../../../utils/utils";
export class IrSalesByChannelTable {
    constructor() {
        this.visibleCount = 10;
        this.properties = new Map();
        this.handleLoadMore = () => {
            this.visibleCount = Math.min(this.visibleCount + 10, this.records.length);
        };
    }
    componentWillLoad() {
        this.setupProperties();
    }
    handlePropertiesChange() {
        this.setupProperties();
    }
    setupProperties() {
        const map = new Map();
        for (const property of this.allowedProperties) {
            map.set(property.id, property.name);
        }
        this.properties = new Map(map);
    }
    render() {
        const visibleRecords = this.records.slice(0, this.visibleCount);
        const isSingleProperty = this.allowedProperties.length === 1;
        return (h("div", { key: '14fb7b4fa14e4bc440c3598a5cea5210ebd379c5', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '75f6111f50d99eee58cb7796cade6b5c78196d8e', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '5eb5e58a2ff2f3bdb57a393990b5ea94e1d2e127', class: "table-header" }, h("tr", { key: '168857f2439426ac31a48975f0509c4acd507dfd' }, h("th", { key: '202539c30962b60d76ca11b4e6c5f6c9580ed90c', class: "text-left" }, "Channel"), h("th", { key: '33de73bef6701f57a129d2abe60bc7d86b6575d6', class: "text-center" }, "Room nights"), h("th", { key: '5d732042af47869d0cbb06762804adb75005cdda', class: "text-right" }, "Room Revenue"), h("th", { key: 'ce78b9a4ed4f61189a5684fc13ff7d205f801b29', class: "" }))), h("tbody", { key: 'fa4c0447c19dc5bf8add5e199f6193edad882cb6' }, this.records.length === 0 && (h("tr", { key: '15f926c9b38d01d79a61d3bc3cb90cdaded7d460' }, h("td", { key: '87c81ce9ceaa0f79ddfbc3aec7807315b484d0cc', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g;
            const mainPercentage = `${parseFloat(record.PCT.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.PCT.toString()).toFixed(2)}%` : null;
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true } }, h("td", { class: "text-left" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_a = record.last_year) === null || _a === void 0 ? void 0 : _a.SOURCE) ? 'font-weight-bold' : ''}` }, record.SOURCE), ((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.SOURCE) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.SOURCE)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.NIGHTS) ? 'font-weight-bold' : ''}` }, record.NIGHTS), ((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.NIGHTS) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.NIGHTS)))), h("td", { class: "text-right " }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.REVENUE) ? 'font-weight-bold' : ''}` }, formatAmount(record.currency, record.REVENUE)), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.REVENUE) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(record.currency, record.last_year.REVENUE))))), h("td", null, isSingleProperty && (h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.PCT) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" }))))));
        })), isSingleProperty && (h("tfoot", { key: 'ff13024b52f2bcedfe8e29634e1c59c45edd6178' }, h("tr", { key: '79ebf97dcbf4fff0e24bc9031c54fc9ae25678ed', style: { fontSize: '12px' } }, h("td", { key: '7135ad91af917bd051ebc35da8df7a2c1e4a334f', colSpan: 4 }, h("div", { key: '263389c56a6b3478650225ff3d877c021d16b5de', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'a1d49f542ec17ed979795fc85ea0dcc645f11ad3', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '515e1fb1df25ea68e369b678a144d592d5e49fec', class: "legend bg-primary" }), h("p", { key: '49568097e65e51383343823e0039b5b389b33079', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '7b0af87f03a628eadf7d82db24a9d8e6294931dd', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'afc42040d60afa6f34f895d2cdb7dd0adc9511ca', class: "legend secondary" }), h("p", { key: '6e3ebaf7ae317bbbefa47569dc39bd6e36c36808', class: "p-0 m-0" }, "Previous year")))))))), this.visibleCount < this.records.length && (h("div", { key: 'addb464c8e80f13a1897f0569af78cd26cbbe8b5', class: 'd-flex mx-auto' }, h("ir-button", { key: 'b3c517c307215fed95c94648603767267e43945b', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
    static get is() { return "ir-sales-by-channel-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-sales-by-channel-table.css", "../../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-sales-by-channel-table.css", "../../../common/table.css"]
        };
    }
    static get properties() {
        return {
            "records": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ChannelReportResult",
                    "resolved": "{ currency?: string; NIGHTS?: number; PCT?: number; REVENUE?: number; SOURCE?: string; PROPERTY_ID?: number; PROPERTY_NAME?: string; last_year?: { currency?: string; NIGHTS?: number; PCT?: number; REVENUE?: number; SOURCE?: string; PROPERTY_ID?: number; PROPERTY_NAME?: string; }; }[]",
                    "references": {
                        "ChannelReportResult": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-sales-by-channel/types.ts::ChannelReportResult"
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
            "allowedProperties": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AllowedProperties",
                    "resolved": "{ name?: string; id?: number; }[]",
                    "references": {
                        "AllowedProperties": {
                            "location": "import",
                            "path": "@/services/property.service",
                            "id": "src/services/property.service.ts::AllowedProperties"
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
            }
        };
    }
    static get states() {
        return {
            "visibleCount": {},
            "properties": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "allowedProperties",
                "methodName": "handlePropertiesChange"
            }];
    }
}
//# sourceMappingURL=ir-sales-by-channel-table.js.map
