import { h } from "@stencil/core";
import { t } from "../../../../services/locale/t";
import { formatCount, formatNumber } from "../../../../utils/number";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '0e6587539c683183b1844619c2028a13ceebf8ba', class: "p-1" }, h("div", { key: '2e0acc1ca9ad2cd637bab5bc00367fdbcdca558b', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '6c045121f31c8ddcb2024c90401fd604831a810c', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '90585900a17a71ce174e6e5a383da41ccda28126' }, this.service.name), h("span", { key: '53e445cb343c83e944107b49aecd3dc5e4615898', class: "p-0 m-0" }, formatCount(this.service?.persons), " ", this.service.persons > 1 ? t('Lcz_PersonPlural', { fallback: 'persons' }) : t('Lcz_PersonSingular', { fallback: 'person' })), h("span", { key: '3ed40214f69e11a70fe51d743bc30d91f9e66253', class: "p-0 m-0" }, formatCount(this.service?.nights), " ", this.service.nights > 1 ? t('Lcz_Nights', { fallback: 'nights' }) : t('Lcz_Night', { fallback: 'night' }))), h("b", { key: '1dc63522681437c6ec369362781c30c00d6bf06b' }, formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), h("div", { key: 'ef5bc7a0486b8c072f9872484492fad375c872ce' }, h("ir-label", { key: 'de062e02ca7c59d64b91161e1b31ecf90d76a1d1', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), h("ir-label", { key: 'e01a636a13856e68872ef809b63ba89df12449ac', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
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
