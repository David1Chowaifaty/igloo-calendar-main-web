import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'a3b0122316256866d6d008eb7c815d168afc6682' }, h("ir-interceptor", { key: 'ff7fccd83af2657f56f740093a9b04381094ddd3' }), h("ir-toast", { key: '64666f2fb64a06410d05ba268c6c5b449ef09458' }), h("main", { key: '44e6fdadba0ca5c7781fb491396fc5958e498d49', part: "main", class: "ir-page__container" }, h("header", { key: '9d88e1ba4773c3743a9c3adf68768d063e32d3df', part: "header", class: "tax-page__header" }, h("slot", { key: '5d4f8f50a562455e3ba22db8a6581eea75258b68', name: "heading" }, h("div", { key: '3e8a0d852c63b1898ef060b600eb9b9050b49495', class: "tax-page__heading" }, h("h3", { key: 'ea80e4a66d73d1425606bd375cd99fac7fa88a02', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: 'c32c4b63c17fc12d21b4c2df212b558b1a5a7105', part: "description", class: "page__description" }, this.description, h("slot", { key: '552e4983c8e60bb8f80994266439a4c9e487c314', name: "page-description" }))))), h("slot", { key: 'b3660d58fe727bb429e550860c873d29f7c25ff4', name: "page-header" })), h("div", { key: '17edbc761a90b2e34ccaac76c7d0d6fa41df964e', part: "body", class: 'page-body' }, h("slot", { key: '09b4ab237280e78e181df490a704b8018cf14643' })))));
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
