import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'e5a2e71bde796341588573ede68f5cd21a794ee7' }, h("ir-interceptor", { key: 'be46042405c1221efe13d8d858dec3ed91c9c253' }), h("ir-toast", { key: '8d2962d23f62e6bba2271ff464c3efbd2e5ca538' }), h("main", { key: '806002262c3b7854c907a4ca3be4dad8ae49e392', class: "ir-page__container" }, h("header", { key: 'ff696481bdd219444f4c9274262dd589a4071ac8', class: "tax-page__header" }, h("slot", { key: '97037eb966311cd9e6fa9588610110ae0c36e4a3', name: "heading" }, h("div", { key: 'c5c354075fa2830a77050adca01422db4ada72c6', class: "tax-page__heading" }, h("h3", { key: 'ace9a0e87d536abbb453c94fd6310384472561c0', class: "page-title" }, this.label), this.description && (h("p", { key: 'ef9ea423ff4a511e1d44789150ca1a3aeae79d81', class: "page__description" }, this.description, h("slot", { key: '1d624ddf1498d40d9a0d3e966e4796819ed253db', name: "page-description" }))))), h("slot", { key: '86ec727a1529d2ce51fd778bbfc20af75ef9fff0', name: "page-header" })), h("div", { key: 'fc29ee1cfab2aa94a7668d67498a6838a2470ed3', part: "body", class: 'page-body' }, h("slot", { key: '1f2b91b912791e64f5d42e9eefe0b58e79b4b1c8' })))));
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
                "attribute": "label",
                "reflect": false
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
                "attribute": "description",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-page.js.map
