import { h } from "@stencil/core";
import { t } from "../../../../services/locale/t";
import { formatCount, formatNumber } from "../../../../utils/number";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '63638540fa356dbb39c82b7ef9b94177b416da42', class: "p-1" }, h("div", { key: '8fc5718f0ca20862ecb3376ad84403afa4800622', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'ff9f0765bf71b7b9dca594cc44ebf66413f8ae87', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '6d45c28ba49627d1ebaa1b23105f3dcffd56f1ec' }, this.service.name), h("span", { key: '152aeb3ba67db20b70e4594188b45661227e9f53', class: "p-0 m-0" }, formatCount(this.service?.persons), " ", this.service.persons > 1 ? t('Lcz_PersonPlural', { fallback: 'persons' }) : t('Lcz_PersonSingular', { fallback: 'person' })), h("span", { key: 'd19eb7531d862b6104b57e894976c3668c79628b', class: "p-0 m-0" }, formatCount(this.service?.nights), " ", this.service.nights > 1 ? t('Lcz_Nights', { fallback: 'nights' }) : t('Lcz_Night', { fallback: 'night' }))), h("b", { key: 'b462a5d56cc74e404f8f1a1869e836688a09c738' }, formatNumber(this.service.total_price, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))), h("div", { key: '26aaa61f2fb18665ab41a55feb03bfd1dfb58276' }, h("ir-label", { key: 'ed31513648a69a98f094a3c0b60969e9b43377be', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: t('Lcz_PriceMode', { fallback: 'Price mode:' }) }), h("ir-label", { key: '85efe4b95396eb6346618162ffcdf5535ab667a4', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: t('Lcz_PricePerUnit', { fallback: 'Price per unit:' }) }))));
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
