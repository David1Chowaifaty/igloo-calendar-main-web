import { h } from "@stencil/core";
import { t } from "../../../../services/locale/t";
import { formatCount, formatNumber } from "../../../../utils/number";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '17ea1577b3d6625c8d041c4f90ef2113d9bc5431', class: "p-1" }, h("div", { key: 'f0cb1979ffd4ade84a5ec949f8b264edc25424ad', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '4ad02795e1229450eee01ccf64d49f36b7135cb2', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '16e3c856ac8b6daf1e7342b4175ad609d386102c' }, this.service.name), h("span", { key: '118a7d369e8340b98862702170ee00a358606665', class: "p-0 m-0" }, formatCount(this.service?.persons), " ", this.service.persons > 1 ? t('Lcz_PersonPlural', { fallback: 'persons' }) : t('Lcz_PersonSingular', { fallback: 'person' })), h("span", { key: '472df6b97ef24d2648bcbc0d7e3e88e5d5a14f0d', class: "p-0 m-0" }, formatCount(this.service?.nights), " ", this.service.nights > 1 ? t('Lcz_Nights', { fallback: 'nights' }) : t('Lcz_Night', { fallback: 'night' }))), h("b", { key: '0af10ef07e6f824d0b366b7c35925af62a17f973' }, formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), h("div", { key: 'a10a7326f265f1f2429c59f7c2cf6376b26ca019' }, h("ir-label", { key: 'aa9ffaf84367cf3cb5f944d44b5d293a5b4caf12', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), h("ir-label", { key: 'f1e089c2e606c9363a59f60c1741a960e4e03ec6', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
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
