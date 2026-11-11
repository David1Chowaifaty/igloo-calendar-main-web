import { h } from "@stencil/core";
import { t } from "../../../../services/locale/t";
import { formatCount, formatNumber } from "../../../../utils/number";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '3d4dfb89dee25f351bc0d39f1b9c0ce36566bbbf', class: "p-1" }, h("div", { key: 'ecbafca7ba9fbc41b7e2be68c2722859f6cb3005', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '8a85e4a22e2d8517c0c473eabf2c293867a95036', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'fa964c22d8d251ab4420abd9b3758531787a78c1' }, this.service.name), h("span", { key: '0892670a7f0b602c383e88ccaeed8dc70f6ab7a7', class: "p-0 m-0" }, formatCount(this.service?.persons), " ", this.service.persons > 1 ? t('Lcz_PersonPlural', { fallback: 'persons' }) : t('Lcz_PersonSingular', { fallback: 'person' })), h("span", { key: '6bcfaed1cd39094facd1e99e4b77bdbd2792c59d', class: "p-0 m-0" }, formatCount(this.service?.nights), " ", this.service.nights > 1 ? t('Lcz_Nights', { fallback: 'nights' }) : t('Lcz_Night', { fallback: 'night' }))), h("b", { key: '4a7a4132fc95131ff1c5cf7b6aab3cbc49606581' }, formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), h("div", { key: 'b4608c4400f2328bd6dd7f6ee3fcd601334c09d0' }, h("ir-label", { key: '5f4f170c6ff7590d838507922938f3528a92a84f', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), h("ir-label", { key: '77de5edb6b8f998d014e6dd201d111a8100fbe3c', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
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
