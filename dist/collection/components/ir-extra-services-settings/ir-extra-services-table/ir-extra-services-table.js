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
        return (h(Host, { key: 'bcada1d6b701fe05cee9bd9a65582a19566b1f09' }, h("div", { key: '11acadfe552f175034b789c657da40f9ed5cf64a', class: "table--container" }, h("table", { key: '05e73efdaed5e9a3ed1fa3525fa5497edd089a4b', class: "table" }, h("thead", { key: '95d3ffbc9fd3b11cb62df81a105649e02dab5805' }, h("tr", { key: '15fe3cdea36deee39db0fc34343730739cbcd459' }, h("th", { key: '1a81a619049d2c4f72033b88e068a6fbd63b8133', class: "extra-services-table__header" }, t('Lcz_Name', { fallback: 'Name' })), h("th", { key: 'f1344b43fe847b74a3b971b19dbfda9bc5357cc0', class: "extra-services-table__header" }, t('Lcz_DefaultPriceUsd', { fallback: 'Default Price (USD)' })), h("th", { key: 'acbb3287588ab254969dd170a24e7057f4cb8f9e', class: "extra-services-table__header" }, t('Lcz_Vat', { fallback: 'VAT' })), h("th", { key: '435137b35a8484367fa669ee0f482d78f033f63d', class: "extra-services-table__header" }, t('Lcz_AllowOverrideHeader', { fallback: 'Allow Override' })), h("th", { key: 'a5ab9fab3cc27976ec9398d58787d9b8c0aced92', class: "extra-services-table__header" }, t('Lcz_DetailsHeader', { fallback: 'Details' })), h("th", { key: '8d275a9231f2e1a1e80a31b1a31095096b8e7428', class: "extra-services-table__header" }, t('Lcz_Active', { fallback: 'Active' })), h("th", { key: '7f3c2bccf0b81f30046e887dcd1880f8969dfc57', class: "extra-services-table__header" }, this.isAddonSection() && (h("div", { key: '72395df9b700a444746069c872a127d6a6314f04', class: "extra-services-table__action" }, h("wa-tooltip", { key: 'eb3e49c2b8092acb6a1fecba76bfe2205513fb86', for: "create-addon-button" }, t('Lcz_NewAddOn', { fallback: 'New Add-On' })), h("ir-custom-button", { key: '86cd0218bd0434099ed35f037a9e2aaebdf17156', onClickHandler: this.createAddon, variant: "neutral", appearance: "plain", id: "create-addon-button", "data-testid": "create-addon-button" }, h("wa-icon", { key: 'eefd9d25f3f3d4729fd5c8d0f03fd8f89be65c1f', name: "plus", style: { fontSize: '1.2rem' }, label: t('Lcz_NewAddOn', { fallback: 'New Add-On' }) }))))))), h("tbody", { key: 'dc66327acbeb2d7bd7712398ea5764e80ab4cc72' }, this.services.map(service => {
            const details = this.getDetails(service);
            return (h("tr", { class: "ir-table-row", key: service.code ?? service.id }, h("td", null, service.name), h("td", null, formatNumber(service.default_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 })), h("td", null, this.getVatLabel(service)), h("td", null, service.allow_price_override ? t('Lcz_YES', { fallback: 'Yes' }) : t('Lcz_NO', { fallback: 'No' })), h("td", { class: "extra-services-table__muted" }, details ?? '—'), h("td", null, h("wa-switch", { onchange: e => this.toggleExtraServiceActive.emit({ ...service, is_active: e.target.checked }), defaultChecked: service.is_active, checked: service.is_active })), h("td", null, h("div", { class: "extra-services-table__action" }, h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertExtraService.emit(service) }, h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.services?.length === 0 && (h("tr", { key: '31f8f99ff9f901543dddd871181a160fb1359355', class: "empty-row" }, h("td", { key: 'b1f9fdfbea494dd5198d01a40499185b559d6b84', colSpan: 7 }, h("ir-empty-state", { key: '807226c99063bbb525c5c0709f4971f6582a252f', message: t('Lcz_NoAddOnsYet', { fallback: 'No add-ons yet' }) })))))))));
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
