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
        return (h(Host, { key: 'd1190782f5c2fc0e202ff56bd4d5c7f7e44a2dca' }, h("div", { key: '18ebb73586b144d53b29fd8cadb5470f789d859c', class: "table--container" }, h("table", { key: 'acd13d43f2d23c9292592e6bbe2a3b5a9e098e1c', class: "table" }, h("thead", { key: '6540eef083898068bb1f2ea9729fed9818c48586' }, h("tr", { key: '0893f6284a660c75381e426d6681c22abd59c0b1' }, h("th", { key: '46a571ef0532b0aab73bbb7687aea7b7dc416a3b', class: "extra-services-table__header" }, t('Lcz_Name', { fallback: 'Name' })), h("th", { key: '1ca5c0585ef8b66f0588a33bb6b43a5c39ac768a', class: "extra-services-table__header" }, t('Lcz_DefaultPriceUsd', { fallback: 'Default Price (USD)' })), h("th", { key: 'a5a86d237ff9677a4848a0eb4bddd2d8708f655b', class: "extra-services-table__header" }, t('Lcz_Vat', { fallback: 'VAT' })), h("th", { key: '4037101d1c370cc68e38a115d55d2cd5c0e2630e', class: "extra-services-table__header" }, t('Lcz_AllowOverrideHeader', { fallback: 'Allow Override' })), h("th", { key: 'fd9284e1cdffc55039c7586da96a5448a213cf55', class: "extra-services-table__header" }, t('Lcz_DetailsHeader', { fallback: 'Details' })), h("th", { key: '79c7e3843f08bc5da47878b29878f4dfbad27ea2', class: "extra-services-table__header" }, t('Lcz_Active', { fallback: 'Active' })), h("th", { key: '5226a77bf3c987b52e7035c8ef185edc0293b48d', class: "extra-services-table__header" }, this.isAddonSection() && (h("div", { key: '0b6e5263ac6ec2626e7366917132e6fe14e6b263', class: "extra-services-table__action" }, h("wa-tooltip", { key: '4c721f1ca56a22019254cf66fe7b120cf7fa4df2', for: "create-addon-button" }, t('Lcz_NewAddOn', { fallback: 'New Add-On' })), h("ir-custom-button", { key: 'd9e299ee3e38170e78e1538f56810b45f28522ad', onClickHandler: this.createAddon, variant: "neutral", appearance: "plain", id: "create-addon-button", "data-testid": "create-addon-button" }, h("wa-icon", { key: '184bc934a86283631097b3ad204ec885c286cb2f', name: "plus", style: { fontSize: '1.2rem' }, label: t('Lcz_NewAddOn', { fallback: 'New Add-On' }) }))))))), h("tbody", { key: 'e63d25a123e234f3213982c87cc5a805af76cb39' }, this.services.map(service => {
            const details = this.getDetails(service);
            return (h("tr", { class: "ir-table-row", key: service.code ?? service.id }, h("td", null, service.name), h("td", null, formatNumber(service.default_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 })), h("td", null, this.getVatLabel(service)), h("td", null, service.allow_price_override ? t('Lcz_YES', { fallback: 'Yes' }) : t('Lcz_NO', { fallback: 'No' })), h("td", { class: "extra-services-table__muted" }, details ?? '—'), h("td", null, h("wa-switch", { onchange: e => this.toggleExtraServiceActive.emit({ ...service, is_active: e.target.checked }), defaultChecked: service.is_active, checked: service.is_active })), h("td", null, h("div", { class: "extra-services-table__action" }, h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertExtraService.emit(service) }, h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.services?.length === 0 && (h("tr", { key: 'db8c8b4d5cf7c3172ebe99b2dee256df6c43be8c', class: "empty-row" }, h("td", { key: 'e0462a7f9f20910cdc8886e73d22da0d68905261', colSpan: 7 }, h("ir-empty-state", { key: '3f83c57531989b343e53a6d636bf11d6eedd5bb1', message: t('Lcz_NoAddOnsYet', { fallback: 'No add-ons yet' }) })))))))));
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
