import { Host, h } from "@stencil/core";
import { AccommodationExtraCode, createBlankAddon, ExtraServiceSection } from "../../../services/extra-services/types";
import { VatIncludedCodes } from "../../../types/enums";
import { t } from "../../../services/locale/t";
import { formatNumber } from "../../../utils/number";
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
        return service.vat_mode === VatIncludedCodes.Inclusive ? t('Lcz_Inclusive', { fallback: 'Inclusive' }) : t('Lcz_Exclusive', { fallback: 'Exclusive' });
    }
    getDetails(service) {
        if (service.code !== AccommodationExtraCode.DayUse || !service.day_use_config) {
            return null;
        }
        const { block_night, default_start_time, default_end_time } = service.day_use_config;
        return t('Lcz_BlockNightDetailFormat', {
            fallback: `Block Night: ${block_night ? 'Yes' : 'No'} (${default_start_time}–${default_end_time})`,
            params: [block_night ? t('Lcz_YES', { fallback: 'Yes' }) : t('Lcz_NO', { fallback: 'No' }), default_start_time, default_end_time],
        });
    }
    createAddon = () => {
        this.upsertExtraService.emit(createBlankAddon(this.propertyId));
    };
    render() {
        return (h(Host, { key: 'eb9250c226388b456d2596c2f5e8d108d4678d9b' }, h("div", { key: '2780c89edf7a83279ddb6c076f30b58bcf7b5be9', class: "table--container" }, h("table", { key: 'dcb1f0ca58ccb0f45274ae9a335d2d964eff2ef5', class: "table" }, h("thead", { key: '332283e3ef2781ddaa0b091c1516ce3bbe1a5ea3' }, h("tr", { key: '1c069285e73f6b5d41c85808047de94e1c4a7cd1' }, h("th", { key: 'd52f58440e77aacdb3534f8c9e2ea7b83f9d6144', class: "extra-services-table__header" }, t('Lcz_Name', { fallback: 'Name' })), h("th", { key: 'e47074f6cd6d769b37db9cfb5096d01f032c2a1e', class: "extra-services-table__header" }, t('Lcz_DefaultPriceUsd', { fallback: 'Default Price (USD)' })), h("th", { key: '6dfc595d8ffc25ef98ccfc5dde83d64244cc9781', class: "extra-services-table__header" }, t('Lcz_Vat', { fallback: 'VAT' })), h("th", { key: '92c0f2c0974fb8a8f09998d5edc041e776d9869b', class: "extra-services-table__header" }, t('Lcz_AllowOverrideHeader', { fallback: 'Allow Override' })), h("th", { key: '0d523280737a564164fedb2df0231877f52a154a', class: "extra-services-table__header" }, t('Lcz_DetailsHeader', { fallback: 'Details' })), h("th", { key: '88114ca1220b5843c7f1a8e8f2cd0529db644c9f', class: "extra-services-table__header" }, t('Lcz_Active', { fallback: 'Active' })), h("th", { key: 'b5adf8ecaabfd9c098e66c740b3f23f040b842c5', class: "extra-services-table__header" }, this.isAddonSection() && (h("div", { key: 'ac602a24ed858587b0e5b18f1aef1c2a80769e42', class: "extra-services-table__action" }, h("wa-tooltip", { key: 'fa6265e9fb3e8b1cd88b44429426c43d9bda0874', for: "create-addon-button" }, t('Lcz_NewAddOn', { fallback: 'New Add-On' })), h("ir-custom-button", { key: '9e89a09025f49d4ca3038195d147b79b4b4f40b5', onClickHandler: this.createAddon, variant: "neutral", appearance: "plain", id: "create-addon-button", "data-testid": "create-addon-button" }, h("wa-icon", { key: '98bce020a043b274bba58754f8dacde822e36dc7', name: "plus", style: { fontSize: '1.2rem' }, label: t('Lcz_NewAddOn', { fallback: 'New Add-On' }) }))))))), h("tbody", { key: 'a38578d13b36e7d22f6f744e49166dfdcd01dd14' }, this.services.map(service => {
            const details = this.getDetails(service);
            return (h("tr", { class: "ir-table-row", key: service.code ?? service.id }, h("td", null, service.name), h("td", null, formatNumber(service.default_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 })), h("td", null, this.getVatLabel(service)), h("td", null, service.allow_price_override ? t('Lcz_YES', { fallback: 'Yes' }) : t('Lcz_NO', { fallback: 'No' })), h("td", { class: "extra-services-table__muted" }, details ?? '—'), h("td", null, h("wa-switch", { onchange: e => this.toggleExtraServiceActive.emit({ ...service, is_active: e.target.checked }), defaultChecked: service.is_active, checked: service.is_active })), h("td", null, h("div", { class: "extra-services-table__action" }, h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertExtraService.emit(service) }, h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.services?.length === 0 && (h("tr", { key: 'd61fe176c733738ca7a9123cd76d46bc4682af25', class: "empty-row" }, h("td", { key: '799787ce3785a3eff2e3cd2bd21ca8831c2856c7', colSpan: 7 }, h("ir-empty-state", { key: 'c14b99508afe19a02448153c3eede87f9fced12e', message: t('Lcz_NoAddOnsYet', { fallback: 'No add-ons yet' }) })))))))));
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
                    "resolved": "{ code?: string; name?: string; id?: number; property_id?: number; is_active?: boolean; section?: \"accommodation\" | \"addon\"; default_price?: number; vat_mode?: \"001\" | \"000\"; allow_price_override?: boolean; day_use_config?: { block_night?: boolean; default_start_time?: string; default_end_time?: string; }; }[]",
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
                    "resolved": "{ code?: string; name?: string; id?: number; property_id?: number; is_active?: boolean; section?: \"accommodation\" | \"addon\"; default_price?: number; vat_mode?: \"001\" | \"000\"; allow_price_override?: boolean; day_use_config?: { block_night?: boolean; default_start_time?: string; default_end_time?: string; }; }",
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
                    "resolved": "{ code?: string; name?: string; id?: number; property_id?: number; is_active?: boolean; section?: \"accommodation\" | \"addon\"; default_price?: number; vat_mode?: \"001\" | \"000\"; allow_price_override?: boolean; day_use_config?: { block_night?: boolean; default_start_time?: string; default_end_time?: string; }; }",
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
