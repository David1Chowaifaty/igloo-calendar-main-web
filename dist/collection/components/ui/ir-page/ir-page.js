import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '973c2b8e5a45f27fcd1b11c16d424d30ad097a4c' }, h("ir-interceptor", { key: 'a14c4057d2efe76e6ba24b7d0834a778d5a3f8cb' }), h("ir-toast", { key: 'ff36ff03d3f7419854eea9ca791e7cc58bbf3190' }), h("main", { key: '20af7b59cfdd084723446c9fd4acdeaaa8a0175a', part: "main", class: "ir-page__container" }, h("header", { key: '9e2f2ddc9b1dc11f3b9a97624de019eb7d35698e', part: "header", class: "tax-page__header" }, h("slot", { key: '3f905e7d96b95d090d6d23933aaf32ef94f0f2a6', name: "heading" }, h("div", { key: '43ec479c6e3d1890c0eeaf19e19e0d8f00860033', class: "tax-page__heading" }, h("h3", { key: 'b9100057c142f9f6cf8be97c31faaef44ae93d83', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: '0f0f7fdc7506fd8c3a425342aaaf7112733fad7d', part: "description", class: "page__description" }, this.description, h("slot", { key: '8a2e5f5cb71e291d27d0575cd8fb185256000027', name: "page-description" }))))), h("slot", { key: '9171c235fadfaac47ed1f5ced210fc51f99bba42', name: "page-header" })), h("div", { key: 'c3ad002a9360eabd2fb988c433e8899f2a345663', part: "body", class: 'page-body' }, h("slot", { key: '490fe4ba3ca9afb2ad1edcad51b751319201ec6a' })))));
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
