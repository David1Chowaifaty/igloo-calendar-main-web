import { Host, h } from "@stencil/core";
export class IrAutocompleteOption {
    value;
    label;
    disabled = false;
    current = false;
    selected = false;
    waOptionRef;
    connectedCallback() {
        // wa-option re-asserts role="option" in its own connectedCallback, so the
        // demotion must run again every time this element is reconnected.
        this.demoteInnerOptionRole();
    }
    componentDidRender() {
        // wa-option re-asserts aria-selected in its updated() hook after prop changes.
        this.demoteInnerOptionRole();
    }
    /**
     * The host carries role="option" (referenced by the combobox via aria-activedescendant);
     * the inner wa-option must not expose a second, nested option to assistive tech.
     */
    async demoteInnerOptionRole() {
        const waOption = this.waOptionRef;
        if (!waOption)
            return;
        await waOption.updateComplete;
        if (!waOption.isConnected)
            return;
        waOption.setAttribute('role', 'presentation');
        waOption.removeAttribute('aria-selected');
    }
    render() {
        return (h(Host, { key: 'f7544574d3cd4b309f8ef3bb1bd939dd9531d49d', role: "option", "aria-selected": this.selected ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false' }, h("wa-option", { key: '008f146e70dec7fc043c4f8a82b2d6501dfe4fd6', ref: el => (this.waOptionRef = el), value: this.value, label: this.label, disabled: this.disabled, current: this.current, selected: this.selected, exportparts: "checked-icon, label, start, end" }, h("slot", { key: '2681c46c5d33a812e485f48fbbf24dff9d6df90a' }), h("slot", { key: 'ef1bab2409b9900eed56a6f71829a1e36182fb20', name: "start", slot: "start" }), h("slot", { key: '25a8a616045affec2eb82009ff06c07bb2aa57fd', name: "end", slot: "end" }))));
    }
    static get is() { return "ir-autocomplete-option"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-autocomplete-option.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-autocomplete-option.css"]
        };
    }
    static get properties() {
        return {
            "value": {
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
                "reflect": true,
                "attribute": "value"
            },
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
                "reflect": true,
                "attribute": "label"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "reflect": true,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "current": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "reflect": true,
                "attribute": "current",
                "defaultValue": "false"
            },
            "selected": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "reflect": true,
                "attribute": "selected",
                "defaultValue": "false"
            }
        };
    }
}
