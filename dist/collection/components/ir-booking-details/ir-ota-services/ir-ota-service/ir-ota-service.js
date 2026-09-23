import { h } from "@stencil/core";
import { t } from "../../../../services/locale/t";
import { formatCount, formatNumber } from "../../../../utils/number";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: 'f73348f0b62530ebcd24c3f6ec80ecff8d11e0da', class: "p-1" }, h("div", { key: '7fda1386a3be1e5a7c9face7520a2b67523dfb14', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '706aba60606d1f8d3df72c68e8cfd0e41e54b55d', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '94f43b04b444ddc778f2aacfbe34f7304c7de8e8' }, this.service.name), h("span", { key: '7bb1f491f8a6450b9df8a21ca3cc6845d765247f', class: "p-0 m-0" }, formatCount(this.service?.persons), " ", this.service.persons > 1 ? t('Lcz_PersonPlural', { fallback: 'persons' }) : t('Lcz_PersonSingular', { fallback: 'person' })), h("span", { key: '2301bc14b27669dfd352640ff4279e22d38f4851', class: "p-0 m-0" }, formatCount(this.service?.nights), " ", this.service.nights > 1 ? t('Lcz_Nights', { fallback: 'nights' }) : t('Lcz_Night', { fallback: 'night' }))), h("b", { key: 'db8dc07e3aacbf4b8399784699e204b357af1d6b' }, formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), h("div", { key: '66968f029dfd2a4d1f26cdbf6f901e68e14ac691' }, h("ir-label", { key: '33494e6d0100c990d968aede2b1761fe79d596e0', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), h("ir-label", { key: 'de5ea4e370637aa9963b689d647bf174ca9e92a7', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
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
