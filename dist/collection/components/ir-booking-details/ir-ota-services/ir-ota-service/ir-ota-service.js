import { h } from "@stencil/core";
export class IrOtaService {
    service;
    render() {
        return (h("div", { key: '37cbc0671103efb78897f84bebde380f480cc731', class: "p-1" }, h("div", { key: '5bfe0474194e1c284f399694d978b7e8ed107576', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '982535e40ba6ec946c607cd58ecca1904cae767f', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '4a6ed186a210e1593a076f63478190adfc8dbcf2' }, this.service.name), h("span", { key: '349db7374c0a3203712822f0f54b8c231ff30996', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'f43c554e823a122a6cbd408262cfc3b7f0c26c92', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '2cdafa10f1ad5b0093278714b7b6b9dc683c4ad6' }, this.service.total_price)), h("div", { key: '53982ca0b73ab7f4f13273c5ff3a88fdc6951871' }, h("ir-label", { key: 'a4afb38e8b3160666da52f3faa9c50b9944cfb48', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '15ef233507b35c25290449d12ea2b3b1a899496b', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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
                            "id": "src/models/booking.dto.ts::OtaService"
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
//# sourceMappingURL=ir-ota-service.js.map
