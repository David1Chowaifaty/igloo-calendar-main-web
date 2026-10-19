import { h } from "@stencil/core";
import { t } from "../../../../services/locale/t";
import { formatCount, formatNumber } from "../../../../utils/number";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '95d7ecfc31e2e6011fb0809947b6b9f915ffb849', class: "p-1" }, h("div", { key: '518a1d783309bcc8b54925ea285b565931d97163', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '44e48024d104833a53bd083de1a57b44aecd5cdb', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '5b4760a1c8765899f00bdfbe7a429c05b6b550b1' }, this.service.name), h("span", { key: 'f49d82e8cc2244bab42f7e74662de1b83ed3227f', class: "p-0 m-0" }, formatCount(this.service?.persons), " ", this.service.persons > 1 ? t('Lcz_PersonPlural', { fallback: 'persons' }) : t('Lcz_PersonSingular', { fallback: 'person' })), h("span", { key: '2ed156ee36a26f4850176840468b12acaab02359', class: "p-0 m-0" }, formatCount(this.service?.nights), " ", this.service.nights > 1 ? t('Lcz_Nights', { fallback: 'nights' }) : t('Lcz_Night', { fallback: 'night' }))), h("b", { key: '12d6531dcbb95ba7b7c28db7f7aa69e8ca203893' }, formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), h("div", { key: '080a7b3b9e41bda8cfceb2e5a4552bcb4d68f7db' }, h("ir-label", { key: '8709ffd3d96fc49d97d2ae2781672a57f5a98fbf', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), h("ir-label", { key: 'f14d5f7be41693f6c3a2fe23c155a5a879034b73', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
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
