import { Host, h } from "@stencil/core";
import { AccommodationExtraCode, createBlankAddon, ExtraServiceSection } from "../../../services/extra-services/types";
import { VatIncludedCodes } from "../../../types/enums";
export class IrExtraServicesTable {
    services = [];
    section;
    propertyId;
    upsertExtraService;
    toggleExtraServiceActive;
    isAddonSection() {
        return this.section === ExtraServiceSection.BookingEngineAddon;
    }
    getVatLabel(service) {
        return service.vat_mode === VatIncludedCodes.Inclusive ? 'Inclusive' : 'Exclusive';
    }
    getDetails(service) {
        if (service.code !== AccommodationExtraCode.DayUse || !service.day_use_config) {
            return null;
        }
        const { block_night, default_start_time, default_end_time } = service.day_use_config;
        return `Block Night: ${block_night ? 'Yes' : 'No'} (${default_start_time}–${default_end_time})`;
    }
    createAddon = () => {
        this.upsertExtraService.emit(createBlankAddon(this.propertyId));
    };
    render() {
        return (h(Host, { key: 'a362ac8b9fe07c8dbf6269aab54141fe08c503b7' }, h("div", { key: '49f56df40e5be58432195059f273bb801675ba64', class: "table--container" }, h("table", { key: 'd2933eabddc90b975203e08d1a6d9b90d6a06f22', class: "table" }, h("thead", { key: '21c7cb910e1ebebf61e71abc4e23d6c1bdd855c6' }, h("tr", { key: '78b969854ef6f3d22b5bf6629627cd3a3d157b67' }, h("th", { key: '9311b1feb368b114db05f9b8990f5b0c9df2b078', class: "extra-services-table__header" }, "Name"), h("th", { key: 'e0e0bc13dd57dbf37d8153cf8a838d984ff3ca14', class: "extra-services-table__header" }, "Default Price (USD)"), h("th", { key: '7cb6b009a529951b3fde5d8403a205a0a07cabd0', class: "extra-services-table__header" }, "VAT"), h("th", { key: '5881d491119b2030f15cde54ca838498cf76dbcc', class: "extra-services-table__header" }, "Allow Override"), h("th", { key: '8375926b8662c7f3e0fa8dbe448bac7f94ea29dd', class: "extra-services-table__header" }, "Details"), h("th", { key: 'c6c1ca1acba8585f38d06551b30e2af1bceeab1a', class: "extra-services-table__header" }, "Active"), h("th", { key: '314ff91c5a16afce2e9031c303573c0ffcbe2dc4', class: "extra-services-table__header" }, this.isAddonSection() && (h("div", { key: 'cdc09eb6c78121bc73b4ffa3789037d7ad48791a', class: "extra-services-table__action" }, h("wa-tooltip", { key: '238d9bd43678bfcf55bc4723561dad06f84eeddd', for: "create-addon-button" }, "New Add-On"), h("ir-custom-button", { key: '2e4682db3212ca07161777b470576c038cf403e3', onClickHandler: this.createAddon, variant: "neutral", appearance: "plain", id: "create-addon-button", "data-testid": "create-addon-button" }, h("wa-icon", { key: 'c39e18a91281f95954751b262d255611f6b03746', name: "plus", style: { fontSize: '1.2rem' }, label: "New Add-On" }))))))), h("tbody", { key: 'a6bbd64be85b292ca3d1bfb7b8b866492f92e75f' }, this.services.map(service => {
            const details = this.getDetails(service);
            return (h("tr", { class: "ir-table-row", key: service.code ?? service.id }, h("td", null, service.name), h("td", null, service.default_price.toFixed(2)), h("td", null, this.getVatLabel(service)), h("td", null, service.allow_price_override ? 'Yes' : 'No'), h("td", { class: "extra-services-table__muted" }, details ?? '—'), h("td", null, h("wa-switch", { onchange: e => this.toggleExtraServiceActive.emit({ ...service, is_active: e.target.checked }), defaultChecked: service.is_active, checked: service.is_active })), h("td", null, h("div", { class: "extra-services-table__action" }, h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertExtraService.emit(service) }, h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.services?.length === 0 && (h("tr", { key: '4489465480834d982bba97a4ed25448f9594f08e', class: "empty-row" }, h("td", { key: 'd94c32fd101f73bc20392c0de0e936a7b3e09ffe', colSpan: 7 }, h("ir-empty-state", { key: 'e895bf077d9e2a39c563713bf28bf048a951e0a8', message: "No add-ons yet" })))))))));
    }
    static get is() { return "ir-extra-services-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-extra-services-table.css", "../../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-extra-services-table.css", "../../../common/table.css"]
        };
    }
    static get properties() {
        return {
            "services": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ExtraServiceDefinition[]",
                    "resolved": "{ name?: string; id?: number; code?: string; property_id?: number; is_active?: boolean; section?: \"accommodation\" | \"addon\"; default_price?: number; vat_mode?: \"001\" | \"000\"; allow_price_override?: boolean; day_use_config?: { block_night?: boolean; default_start_time?: string; default_end_time?: string; }; }[]",
                    "references": {
                        "ExtraServiceDefinition": {
                            "location": "import",
                            "path": "@/services/extra-services/types",
                            "id": "src/services/extra-services/types.ts::ExtraServiceDefinition",
                            "referenceLocation": "ExtraServiceDefinition"
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
                "defaultValue": "[]"
            },
            "section": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ExtraServiceSection",
                    "resolved": "\"accommodation\" | \"addon\"",
                    "references": {
                        "ExtraServiceSection": {
                            "location": "import",
                            "path": "@/services/extra-services/types",
                            "id": "src/services/extra-services/types.ts::ExtraServiceSection",
                            "referenceLocation": "ExtraServiceSection"
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
                "reflect": false,
                "attribute": "section"
            },
            "propertyId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "reflect": false,
                "attribute": "property-id"
            }
        };
    }
    static get events() {
        return [{
                "method": "upsertExtraService",
                "name": "upsertExtraService",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "ExtraServiceDefinition",
                    "resolved": "{ name?: string; id?: number; code?: string; property_id?: number; is_active?: boolean; section?: \"accommodation\" | \"addon\"; default_price?: number; vat_mode?: \"001\" | \"000\"; allow_price_override?: boolean; day_use_config?: { block_night?: boolean; default_start_time?: string; default_end_time?: string; }; }",
                    "references": {
                        "ExtraServiceDefinition": {
                            "location": "import",
                            "path": "@/services/extra-services/types",
                            "id": "src/services/extra-services/types.ts::ExtraServiceDefinition",
                            "referenceLocation": "ExtraServiceDefinition"
                        }
                    }
                }
            }, {
                "method": "toggleExtraServiceActive",
                "name": "toggleExtraServiceActive",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "ExtraServiceDefinition",
                    "resolved": "{ name?: string; id?: number; code?: string; property_id?: number; is_active?: boolean; section?: \"accommodation\" | \"addon\"; default_price?: number; vat_mode?: \"001\" | \"000\"; allow_price_override?: boolean; day_use_config?: { block_night?: boolean; default_start_time?: string; default_end_time?: string; }; }",
                    "references": {
                        "ExtraServiceDefinition": {
                            "location": "import",
                            "path": "@/services/extra-services/types",
                            "id": "src/services/extra-services/types.ts::ExtraServiceDefinition",
                            "referenceLocation": "ExtraServiceDefinition"
                        }
                    }
                }
            }];
    }
}
