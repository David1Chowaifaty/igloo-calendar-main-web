import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'aebd288bdbdf06f8b7fe28845827d0c70f8eda3d' }, h("ir-interceptor", { key: 'e571d0c2c1b6d6597430859e5df8284fcfb29e33' }), h("ir-toast", { key: '3d1e49e0fa73812c8306c9c3b144deb8c6c840af' }), h("main", { key: 'eee73124d05ce4bc31064d64b4ece31e22a121db', part: "main", class: "ir-page__container" }, h("header", { key: 'cfd68e2ec190336c518f8609049cba0c5f5269ae', part: "header", class: "tax-page__header" }, h("slot", { key: 'c24ab8ea1ac88d06e142acb2db1a074bb110f167', name: "heading" }, h("div", { key: '72b483e68400f8c9a9d95cb0f5609928cdc44124', class: "tax-page__heading" }, h("h3", { key: '763785c948c01542ac533f6baae752f10de3c424', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: 'faf0cddd86d77851afe93405aac0f9b1ac24cb6c', part: "description", class: "page__description" }, this.description, h("slot", { key: '6593c4928e3b2adad927486e75f1614a033e77fe', name: "page-description" }))))), h("slot", { key: 'f2a82e0822e283adaa63e39f1081dcd170b4c621', name: "page-header" })), h("div", { key: '41e863f6f39b4b8e1fefe982189dc54d6b598a54', part: "body", class: 'page-body' }, h("slot", { key: 'afdd5b20aa77ad32a7d94c6daf2f2468ef3ca358' })))));
    }
    static get is() { return "ir-page"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-page.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-page.css"]
        };
    }
    static get properties() {
        return {
            "label": {
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "description": {
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "description"
            }
        };
    }
}
