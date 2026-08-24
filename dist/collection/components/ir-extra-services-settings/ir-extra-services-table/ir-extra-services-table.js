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
        return (h(Host, { key: '5ec365195d0e4a00841c153ada8357c6bfeb4ccd' }, h("div", { key: '78befe21bfcc23b9d3a0d9bff652eebb224aba5c', class: "table--container" }, h("table", { key: '426b387c98e60cff5ea46c3aa68967e7db387b0a', class: "table" }, h("thead", { key: '3e6a8a0639cf5f367ec44b0aba4d7ce0681e3a6a' }, h("tr", { key: '4bb0a8d0b8555ab2c0d71eca2ab5798f7ebbc08c' }, h("th", { key: '0ca52b1c2f66bc7a2122786489d5ad8612891861', class: "extra-services-table__header" }, "Name"), h("th", { key: '6ffb3464be73e839f491470ed9f7000ac87fcde3', class: "extra-services-table__header" }, "Default Price (USD)"), h("th", { key: '3e56f97b107b323b3dc6dc87d28c54f4201ca0ed', class: "extra-services-table__header" }, "VAT"), h("th", { key: '851310fe194bfaaac5d35df9140ad7db07a52319', class: "extra-services-table__header" }, "Allow Override"), h("th", { key: '051aa5d3ac87b606663ca24058d6272a15c59cca', class: "extra-services-table__header" }, "Details"), h("th", { key: 'e5d8612ad5121b7a935ffb43bf398f1b691f1f58', class: "extra-services-table__header" }, "Active"), h("th", { key: 'eb8144692944ec7c566fb048fbe05c5809b16916', class: "extra-services-table__header" }, this.isAddonSection() && (h("div", { key: 'fd91ddad6bfa43d3e6868c42c421adbb9b03f47c', class: "extra-services-table__action" }, h("wa-tooltip", { key: 'dd8f06225a75bff95df4475606d3e5f4a8fbfcf7', for: "create-addon-button" }, "New Add-On"), h("ir-custom-button", { key: '9514968ae6ad75c7626573b9604dc69eaf287c66', onClickHandler: this.createAddon, variant: "neutral", appearance: "plain", id: "create-addon-button", "data-testid": "create-addon-button" }, h("wa-icon", { key: '2d87bea3426c5cc2b83a1a111299530336b20b66', name: "plus", style: { fontSize: '1.2rem' }, label: "New Add-On" }))))))), h("tbody", { key: '8457a0fcce2ce8dfb9ec725ead5a012a80abaeca' }, this.services.map(service => {
            const details = this.getDetails(service);
            return (h("tr", { class: "ir-table-row", key: service.code ?? service.id }, h("td", null, service.name), h("td", null, service.default_price.toFixed(2)), h("td", null, this.getVatLabel(service)), h("td", null, service.allow_price_override ? 'Yes' : 'No'), h("td", { class: "extra-services-table__muted" }, details ?? '—'), h("td", null, h("wa-switch", { onchange: e => this.toggleExtraServiceActive.emit({ ...service, is_active: e.target.checked }), defaultChecked: service.is_active, checked: service.is_active })), h("td", null, h("div", { class: "extra-services-table__action" }, h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertExtraService.emit(service) }, h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.services?.length === 0 && (h("tr", { key: '688d11627afbf33038ffeeb12266714791a08f76', class: "empty-row" }, h("td", { key: '870943ca61a416fdec2bbcf0aa8e3cc3bf9d7f1f', colSpan: 7 }, h("ir-empty-state", { key: '99e25d28a39db04c4ab2d49576394c27b3894838', message: "No add-ons yet" })))))))));
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
                    "resolved": "{ name?: string; id?: number; property_id?: number; code?: string; is_active?: boolean; section?: \"accommodation\" | \"addon\"; default_price?: number; vat_mode?: \"001\" | \"000\"; allow_price_override?: boolean; day_use_config?: { block_night?: boolean; default_start_time?: string; default_end_time?: string; }; }[]",
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
                    "resolved": "{ name?: string; id?: number; property_id?: number; code?: string; is_active?: boolean; section?: \"accommodation\" | \"addon\"; default_price?: number; vat_mode?: \"001\" | \"000\"; allow_price_override?: boolean; day_use_config?: { block_night?: boolean; default_start_time?: string; default_end_time?: string; }; }",
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
                    "resolved": "{ name?: string; id?: number; property_id?: number; code?: string; is_active?: boolean; section?: \"accommodation\" | \"addon\"; default_price?: number; vat_mode?: \"001\" | \"000\"; allow_price_override?: boolean; day_use_config?: { block_night?: boolean; default_start_time?: string; default_end_time?: string; }; }",
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
