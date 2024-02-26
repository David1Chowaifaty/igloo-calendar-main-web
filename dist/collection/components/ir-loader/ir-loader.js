import { h } from "@stencil/core";
export class IrLoader {
    constructor() {
        this.size = 'md';
    }
    render() {
        return (h("div", { key: '3ae8b95512eba678328459bb00f6a6905a9238f9', class: `lds-default ${this.size}` }, h("div", { key: '771d84e576ec2731f3646a54a825d965c7cf7812' }), h("div", { key: '389bd49fe8ce10044fc5794ea116a2b53926919e' }), h("div", { key: '4c5de0a35c121861ab3419e1a4d6e4355529a2c6' }), h("div", { key: '932ac437e2f6238273b4842adc5a79ba9dc5b167' }), h("div", { key: 'd5ee6e3b5ce09d60542c7584baadf9c1c7216e18' }), h("div", { key: '3c1e0f2ca360564e77f1b59fd055238a8bdc93e6' }), h("div", { key: 'a024004e22de35883064584f57fbbe9fcad9e027' }), h("div", { key: '0eba04006282f4a740be1ce1be53645254e5fd93' }), h("div", { key: '2bb62b3d173cd5f1516ff324207ab0b4b8e848a0' }), h("div", { key: 'e6134b37f2a09148c6ef4daf1cdbf5afb2980240' }), h("div", { key: '8e507a7e8e38484ce404e59aeac48219dad5558c' }), h("div", { key: '6b6554221ebc42218de6271961aff6a20650edfb' })));
    }
    static get is() { return "ir-loader"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-loader.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-loader.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'md'"
            }
        };
    }
}
//# sourceMappingURL=ir-loader.js.map
