import { Host, h } from "@stencil/core";
export class IrPropertySwitcher {
    el;
    mode = 'dialog';
    ticket;
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
        return (h(Host, { key: 'af71f34d468a6715125670a5bf3c5e03e8f84a4a' }, this.trigger(), h("ir-dialog", { key: '1f6c7506b7b43b9572754c1d6cb0db64f28a99ed', onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, withoutHeader: true, open: this.open, label: "Find property", class: "property-switcher__dialog" }, this.open && (h("ir-property-switcher-dialog-content", { key: '62211cbfe0e987039dda5aee2488921854f1af8a', open: this.open, selectedPropertyId: this.selectedProperty?.id, onPropertySelected: this.handlePropertySelected })))));
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
            },
            "ticket": {
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
                "attribute": "ticket",
                "reflect": false
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
