import { h } from "@stencil/core";
import { t } from "../../../../services/locale/t";
import { formatCount, formatNumber } from "../../../../utils/number";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '729fd42ea5447828b51975eac995c7549591d941', class: "p-1" }, h("div", { key: 'b2e1d5f9ed4c1a40e1f5196b5f1b3252de3489f7', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '832635d1a9d0bd145129876071371b41305be786', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'f8594405dde513b28977dda8e86382facc8af502' }, this.service.name), h("span", { key: '76d4af43eb78623ed2a508810ec6e59477fb78ff', class: "p-0 m-0" }, formatCount(this.service?.persons), " ", this.service.persons > 1 ? t('Lcz_PersonPlural', { fallback: 'persons' }) : t('Lcz_PersonSingular', { fallback: 'person' })), h("span", { key: '8f76306cf1ea2dfb6c49e3bb065600afd3daea63', class: "p-0 m-0" }, formatCount(this.service?.nights), " ", this.service.nights > 1 ? t('Lcz_Nights', { fallback: 'nights' }) : t('Lcz_Night', { fallback: 'night' }))), h("b", { key: 'ba507dab1a29e50e524ea29f19fdb9a5b7085e37' }, formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), h("div", { key: '35e17487698d7673b23020f4a0a1f90d9abac308' }, h("ir-label", { key: 'dca5425c6ec6c0dbd4a821fbf1dce1b1d9760ad6', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), h("ir-label", { key: 'b6b2c71f7c378b3a535d9f75b1308ee12bb1524e', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
    }
    static get is() { return "ir-ota-service"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-ota-service.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-ota-service.css"]
        };
    }
    static get properties() {
        return {
            "service": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "OtaService",
                    "resolved": "OtaService",
                    "references": {
                        "OtaService": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::OtaService",
                            "referenceLocation": "OtaService"
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
}
