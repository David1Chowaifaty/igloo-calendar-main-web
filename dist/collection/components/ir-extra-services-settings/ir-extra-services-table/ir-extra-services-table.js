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
        return (h(Host, { key: '866683f9188757c38211c7b7e2f1734028ed569d' }, h("div", { key: '48ed2852ad1931f773e03a10bfabc4372b68692b', class: "table--container" }, h("table", { key: '2ad0121404ad179fee0211e4f1c2871a0ebe091f', class: "table" }, h("thead", { key: '2af16c3cbc21055be9492a11e71ade19cd211fda' }, h("tr", { key: '2d865afb8e4ceb2332612f66a9c87ceeb7990336' }, h("th", { key: '0403fb5a8a5fab24ce17a20031ef0c08e2a85562', class: "extra-services-table__header" }, "Name"), h("th", { key: 'fd60b4426f0b380256eefee46c35a65df4d0132b', class: "extra-services-table__header" }, "Default Price (USD)"), h("th", { key: '704cfa42b0e3d0a25cc637328fcd8100a245b470', class: "extra-services-table__header" }, "VAT"), h("th", { key: '28f4a91ac32cebf6f6a0096e7199faf56a8a3200', class: "extra-services-table__header" }, "Allow Override"), h("th", { key: 'c13145cb81243822b1be65a7daf2c86248229c2f', class: "extra-services-table__header" }, "Details"), h("th", { key: '67911022e3844b76b3f5eb8ab1fc68c935c6133a', class: "extra-services-table__header" }, "Active"), h("th", { key: 'd7767c51d44cbb32d3df1fe67eeaade53f52a268', class: "extra-services-table__header" }, this.isAddonSection() && (h("div", { key: 'd711eb944c66e9bd2b4a587bb871694686e9eeb9', class: "extra-services-table__action" }, h("wa-tooltip", { key: '59fd5a314ccb2a8cb3f5550cad91e863f04dc80b', for: "create-addon-button" }, "New Add-On"), h("ir-custom-button", { key: '0768add6b0c4bc0c8afb5e4b21ec7559c4e9f380', onClickHandler: this.createAddon, variant: "neutral", appearance: "plain", id: "create-addon-button", "data-testid": "create-addon-button" }, h("wa-icon", { key: 'dc644a368d9f576488edf3debc2d63cd823200aa', name: "plus", style: { fontSize: '1.2rem' }, label: "New Add-On" }))))))), h("tbody", { key: 'f42cd0b3e11173ab5b7080e86f30571c968f2728' }, this.services.map(service => {
            const details = this.getDetails(service);
            return (h("tr", { class: "ir-table-row", key: service.code ?? service.id }, h("td", null, service.name), h("td", null, service.default_price.toFixed(2)), h("td", null, this.getVatLabel(service)), h("td", null, service.allow_price_override ? 'Yes' : 'No'), h("td", { class: "extra-services-table__muted" }, details ?? '—'), h("td", null, h("wa-switch", { onchange: e => this.toggleExtraServiceActive.emit({ ...service, is_active: e.target.checked }), defaultChecked: service.is_active, checked: service.is_active })), h("td", null, h("div", { class: "extra-services-table__action" }, h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertExtraService.emit(service) }, h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.services?.length === 0 && (h("tr", { key: '204a0cd65c8478bda7c892b1b06b96767dcb786b', class: "empty-row" }, h("td", { key: '3774b394e229129b7b9c7aed092d3ec2678c9a1c', colSpan: 7 }, h("ir-empty-state", { key: '18cb1ca1ce8250ba6fbccc2219b87edc9c9261a4', message: "No add-ons yet" })))))))));
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
