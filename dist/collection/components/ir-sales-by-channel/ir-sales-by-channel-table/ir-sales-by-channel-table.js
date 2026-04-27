import { h } from "@stencil/core";
import { formatAmount } from "../../../utils/utils";
export class IrSalesByChannelTable {
    records;
    allowedProperties;
    mode;
    visibleCount = 10;
    properties = new Map();
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
    handleLoadMore = () => {
        this.visibleCount = Math.min(this.visibleCount + 10, this.records.length);
    };
    render() {
        const visibleRecords = this.records.slice(0, this.visibleCount);
        const isSingleProperty = this.mode === 'property';
        return (h("div", { key: '654bc8625681da884e199935ee81f697ff8c6500', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '41734237e2aa63d5461e9bbd4d264a5a65005240', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '6911bd014461fda7778c183f0523fbb36215a7a7', class: "table-header" }, h("tr", { key: '1705a2b4f1c1692599e53bcb6b91f5dfd673b451' }, h("th", { key: 'bca47fd06e215fdab04f289d90fc0564583255c3', class: "text-left" }, "Channel"), h("th", { key: '13378a6ec8a9a6fc0707c02e5024320435890910', class: "text-center" }, "Room nights"), h("th", { key: '209142bd9f7502503c3d83a73e40796403d4b546', class: "text-right" }, "Room Revenue"), h("th", { key: 'd408741ae21d4f1334c009efeb79ba4ba77044d7', class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }))), h("tbody", { key: '3fcdfc375b99ffbc6275ecf413fc9a83b6646174' }, this.records.length === 0 && (h("tr", { key: 'fc4deee3f337fc120a0d505c79294e111227cf92' }, h("td", { key: 'c9ce259e18f6f2dbeb564ce47278344caf1d16c9', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.PCT.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.PCT.toString()).toFixed(2)}%` : null;
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true } }, h("td", { class: "text-left" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.SOURCE ? 'font-weight-bold' : ''}` }, record.SOURCE), record.last_year?.SOURCE && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.SOURCE)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.NIGHTS ? 'font-weight-bold' : ''}` }, record.NIGHTS), record.last_year?.NIGHTS && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.NIGHTS)))), h("td", { class: "text-right " }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.REVENUE ? 'font-weight-bold' : ''}` }, formatAmount(record.currency, record.REVENUE)), record.last_year?.REVENUE && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(record.currency, record.last_year.REVENUE))))), h("td", { class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }, isSingleProperty && (h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.PCT && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" }))))));
        })), isSingleProperty && (h("tfoot", { key: '77c3bc84b50c88281b077a1b188c93f8da2afa60' }, h("tr", { key: '3792a8e8f3130036c29ac7bfe13c5650b04cfc59', style: { fontSize: '12px' } }, h("td", { key: '40c308a9eb3b9e710275c86a6a72b5087037b221', colSpan: 4 }, h("div", { key: '0b83c8e9724b9a9ef31ebc2c5329eef37c061b9c', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '6815c78b3e8066d136d635ea306eb58e6c430884', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '30281381283101e6b8fea2dde3f132e3c1e5e0ba', class: "legend bg-primary" }), h("p", { key: '86aabd0105c520ffabdd0e13f04518dd1e92bdeb', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '43a04a1e1885a5c6a69db10c6c7c8ddf974d763b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '97febfd1c59bf2ad81c11784e7c33a1c846ec5e9', class: "legend secondary" }), h("p", { key: '0ba66a66641c76f14a187ff9926b9e14af7cba4d', class: "p-0 m-0" }, "Previous year")))))))), this.visibleCount < this.records.length && (h("div", { key: '910293145a5beab5486946ac654566fbf86538a5', class: 'd-flex mx-auto' }, h("ir-button", { key: '2b78d30104a9f22759f06276ed2ac6051989ac8e', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "SalesByChannelMode",
                    "resolved": "\"mpo\" | \"property\"",
                    "references": {
                        "SalesByChannelMode": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-sales-by-channel/types.ts::SalesByChannelMode"
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
                "attribute": "mode",
                "reflect": false
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
