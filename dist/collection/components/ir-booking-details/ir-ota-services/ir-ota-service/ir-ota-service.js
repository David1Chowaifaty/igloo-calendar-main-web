import { h } from "@stencil/core";
import { t } from "../../../../services/locale/t";
import { formatCount, formatNumber } from "../../../../utils/number";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '920b8df5d11d76f42e6cb28d97a27c9ab944fab5', class: "p-1" }, h("div", { key: 'fba44c7a58a7fe4eaefd9370918c6bc0e82a490a', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '843544b3d7298f393a7bf44d6e4dd83fd2714cfa', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'c984abeb630f127cf915a96e4d27ae7f34fc1963' }, this.service.name), h("span", { key: '1423cd71a174cd67c276495b467dd49cfa2c5fe2', class: "p-0 m-0" }, formatCount(this.service?.persons), " ", this.service.persons > 1 ? t('Lcz_PersonPlural', { fallback: 'persons' }) : t('Lcz_PersonSingular', { fallback: 'person' })), h("span", { key: '233d2de96c703ea5ba00cdecb403e3587f20a411', class: "p-0 m-0" }, formatCount(this.service?.nights), " ", this.service.nights > 1 ? t('Lcz_Nights', { fallback: 'nights' }) : t('Lcz_Night', { fallback: 'night' }))), h("b", { key: '348a581050e69feaf636dfd022f4ce44fc0309da' }, formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), h("div", { key: '59e0125bae3a0b362907be1b308190bb4fa74979' }, h("ir-label", { key: 'c24cebb16f4f34de63e6491e62ba1241a6f37a50', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), h("ir-label", { key: 'f644bff4a283304ff1e7c9343a04f9c2f95d264b', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
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
