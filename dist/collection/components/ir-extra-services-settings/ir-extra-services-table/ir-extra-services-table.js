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
        return (h(Host, { key: '8e557e2dbbdae9dcfa29695e9dbad8d0eef0a89d' }, h("div", { key: 'e024a0d9cc252b4231b1f0a0359cd55d4bc0e5f4', class: "table--container" }, h("table", { key: '61820fa23f8fbc45e97891b3f2a470c5c2f5e7d8', class: "table" }, h("thead", { key: 'd108cc0d764ef227846012ea302fe10def8f31a5' }, h("tr", { key: 'f4454d0d1d4419b8207eaa367d835de245601fb3' }, h("th", { key: '011eb38c222873861e82f72011adb91b21d8eca8', class: "extra-services-table__header" }, "Name"), h("th", { key: '4800df0ae4d465ea64aa7ee075ba6cf6829c0029', class: "extra-services-table__header" }, "Default Price (USD)"), h("th", { key: 'be6b8ad4a83c43fb54c60cfbd25b33f7e9cf6b05', class: "extra-services-table__header" }, "VAT"), h("th", { key: '99d72820179f417cd00699794fca58f04ee149ec', class: "extra-services-table__header" }, "Allow Override"), h("th", { key: 'd2ff5d2e53bec1b760f44ae331156eba835a234d', class: "extra-services-table__header" }, "Details"), h("th", { key: '065904c1b055cd469032d5ac9e6c86cbdc9fef73', class: "extra-services-table__header" }, "Active"), h("th", { key: '7184d8c18566586c56be155af7928ac75e6bb069', class: "extra-services-table__header" }, this.isAddonSection() && (h("div", { key: '649252267b18de6ebbdf4d60fea09b29f73f8c84', class: "extra-services-table__action" }, h("wa-tooltip", { key: '7690c90f8785bf4b818ce00315438d4c32e245b3', for: "create-addon-button" }, "New Add-On"), h("ir-custom-button", { key: '5f40f662e060c8a674b355a4beb7ca40fcc922b6', onClickHandler: this.createAddon, variant: "neutral", appearance: "plain", id: "create-addon-button", "data-testid": "create-addon-button" }, h("wa-icon", { key: '55942a88509e5c143cfa7d7258e513ed914f98c2', name: "plus", style: { fontSize: '1.2rem' }, label: "New Add-On" }))))))), h("tbody", { key: '03478cac4a3842d6a80a8cc7ef37ce60f12d4ec3' }, this.services.map(service => {
            const details = this.getDetails(service);
            return (h("tr", { class: "ir-table-row", key: service.code ?? service.id }, h("td", null, service.name), h("td", null, service.default_price.toFixed(2)), h("td", null, this.getVatLabel(service)), h("td", null, service.allow_price_override ? 'Yes' : 'No'), h("td", { class: "extra-services-table__muted" }, details ?? '—'), h("td", null, h("wa-switch", { onchange: e => this.toggleExtraServiceActive.emit({ ...service, is_active: e.target.checked }), defaultChecked: service.is_active, checked: service.is_active })), h("td", null, h("div", { class: "extra-services-table__action" }, h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertExtraService.emit(service) }, h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.services?.length === 0 && (h("tr", { key: '3bfb3d97f6b26889eca13e73fcf36ef50fd53519', class: "empty-row" }, h("td", { key: '57eeab168ca16214d5d30103bfbb592cfa0c2eab', colSpan: 7 }, h("ir-empty-state", { key: 'b252b7fa8aed49ba9cd9ed09dc75c13291c7e3b2', message: "No add-ons yet" })))))))));
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
