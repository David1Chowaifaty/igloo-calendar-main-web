import { Host, h } from "@stencil/core";
export class IrPropertySwitcher {
    el;
    mode = 'dialog';
    open = false;
    selectedProperty;
    /** Emits whenever the user selects a new property from the switcher dialog. */
    propertyChange;
    trigger() {
        return (h("ir-custom-button", { onClickHandler: () => {
                this.open = !this.open;
            }, withCaret: true, variant: "neutral", appearance: "plain" }, h("p", { class: "property-switcher__trigger" }, this.selectedProperty?.name ?? 'Select property')));
    }
    handlePropertySelected = (event) => {
        this.selectedProperty = event.detail;
        this.open = false;
        this.propertyChange.emit(event.detail);
    };
    render() {
        return (h(Host, { key: '685abfbd99633e385560fc4920dfb230c0190a81' }, this.trigger(), h("ir-dialog", { key: '1f0d8952c1804b1dc8d3be8ec7bf1a6226164980', onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, withoutHeader: true, open: this.open, label: "Find property", class: "property-switcher__dialog" }, this.open && (h("ir-property-switcher-dialog-content", { key: 'a055f3f4697a266a805842cb7f887defb76a640b', open: this.open, selectedPropertyId: this.selectedProperty?.id, onPropertySelected: this.handlePropertySelected })))));
    }
    static get is() { return "ir-property-switcher"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-property-switcher.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-property-switcher.css"]
        };
    }
    static get properties() {
        return {
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'dropdown' | 'dialog'",
                    "resolved": "\"dialog\" | \"dropdown\"",
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
                "attribute": "mode",
                "reflect": false,
                "defaultValue": "'dialog'"
            }
        };
    }
    static get states() {
        return {
            "open": {},
            "selectedProperty": {}
        };
    }
    static get events() {
        return [{
                "method": "propertyChange",
                "name": "propertyChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits whenever the user selects a new property from the switcher dialog."
                },
                "complexType": {
                    "original": "AllowedProperty",
                    "resolved": "{ name?: string; id?: number; }",
                    "references": {
                        "AllowedProperty": {
                            "location": "global",
                            "id": "global::AllowedProperty"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=ir-property-switcher.js.map
