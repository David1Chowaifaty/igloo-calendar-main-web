import { h } from "@stencil/core";
import { t } from "../../../../services/locale/t";
import { formatCount, formatNumber } from "../../../../utils/number";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '8cde16e662f55da899173aa06ea07fb1ba5361d5', class: "p-1" }, h("div", { key: '54224d7caed4819493bf8489b9b1e3753e350c23', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '2da140a44bf41cef5c8add616b73457d6fa67362', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '458756e843d2c0927a4a33e18d95dbbfc0c88b46' }, this.service.name), h("span", { key: '881d9deffa0146448359064d71769eed5b01da1e', class: "p-0 m-0" }, formatCount(this.service?.persons), " ", this.service.persons > 1 ? t('Lcz_PersonPlural', { fallback: 'persons' }) : t('Lcz_PersonSingular', { fallback: 'person' })), h("span", { key: '7b87221be012a35244f2dfa0292b771dcd6ef352', class: "p-0 m-0" }, formatCount(this.service?.nights), " ", this.service.nights > 1 ? t('Lcz_Nights', { fallback: 'nights' }) : t('Lcz_Night', { fallback: 'night' }))), h("b", { key: 'e63638d87858f94ab088c096e9ba76628915fe7b' }, formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), h("div", { key: '4aed92d389e8ab5d4527ed5c9fc3ac8c856d5346' }, h("ir-label", { key: '7e603ec746aaf22dc3689c1ce675eee2e921d0dc', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), h("ir-label", { key: '93173608bcb126caaf0615897d55bf420c0a3be4', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
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
