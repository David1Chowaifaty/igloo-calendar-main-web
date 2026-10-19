import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    /** Endpoints that show the embedded interceptor's full-page loader. Omit to keep the interceptor's default list. */
    handledEndpoints;
    render() {
        return (h(Host, { key: 'e96f385b08e267c7ab83ccc1cc52bb2dbbee4dae' }, h("ir-interceptor", { key: '958c10c764189e35e1b007aa806f448b6ed7ebe8', ...(this.handledEndpoints ? { handledEndpoints: this.handledEndpoints } : {}) }), h("ir-toast", { key: 'cfc017e8d9338e4bababcbcf3da7414c6045ed01' }), h("main", { key: '1b5d8363b5a374184cc253fc19d989bf1e1ff2cb', part: "main", class: "ir-page__container" }, h("header", { key: 'd82f45e8db1535eee5c9c8a000e1009388ae5b8c', part: "header", class: "tax-page__header" }, h("slot", { key: '85823c2e55c05ba1c32babc85648f46d061c1cbb', name: "heading" }, h("div", { key: 'b9c792871be95bddc007e82a65e91bc4e362a36d', class: "tax-page__heading" }, h("h3", { key: '055aed5901b155704e00ee542bac0dc2af019cd0', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: 'd363281b25830f6d5a5997af1e87e61778195dbf', part: "description", class: "page__description" }, this.description, h("slot", { key: 'bba1320dbc2f34f0b3548cff7c6de1a7878749eb', name: "page-description" }))))), h("slot", { key: '5c2c1d2c14bca7370a3f404627c1b95e2d7e5bd1', name: "page-header" })), h("div", { key: '4248d5a721c4a7dcb972e40bacaeca24475bd263', part: "body", class: 'page-body' }, h("slot", { key: '1a4d5892aa1478689cef3d3bf5104e15a655992f' })))));
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
            },
            "handledEndpoints": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Endpoints that show the embedded interceptor's full-page loader. Omit to keep the interceptor's default list."
                },
                "getter": false,
                "setter": false
            }
        };
    }
}
