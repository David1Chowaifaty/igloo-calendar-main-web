import { h } from "@stencil/core";
import { t } from "../../../../services/locale/t";
import { formatCount, formatNumber } from "../../../../utils/number";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: 'a1e68fa3122eb3b3f39ae47b1a34667ceaad8b5b', class: "p-1" }, h("div", { key: '520ccb2dcf9f3d2db5e880beaf024b94951b115b', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '1292f3d712dec14fb0d6e5a6523c38645b2b953f', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '97c54dc6df31a427d298a484349760e0031942df' }, this.service.name), h("span", { key: 'f8b20990becde8e9c41b69baf03a79aca0e75448', class: "p-0 m-0" }, formatCount(this.service?.persons), " ", this.service.persons > 1 ? t('Lcz_PersonPlural', { fallback: 'persons' }) : t('Lcz_PersonSingular', { fallback: 'person' })), h("span", { key: 'c35ab7d57cee81475681ec131729cde604a89459', class: "p-0 m-0" }, formatCount(this.service?.nights), " ", this.service.nights > 1 ? t('Lcz_Nights', { fallback: 'nights' }) : t('Lcz_Night', { fallback: 'night' }))), h("b", { key: '776c2f704299de69aa0eb59eb951e00fac8ac045' }, formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), h("div", { key: '5769608622587719cbcbc327c311f15c6d86ca6d' }, h("ir-label", { key: '826fb5f4e8e7ee5fb5fb6f0a3d3b44f52266a6f7', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), h("ir-label", { key: '9c74c521d62bb8eb7d07ca2df06d0b28d4f304cb', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
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
