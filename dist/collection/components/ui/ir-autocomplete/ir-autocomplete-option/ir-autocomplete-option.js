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
        return (h(Host, { key: '48da2c7ac32d93189b1c1aca16115eac95b58eff', role: "option", "aria-selected": this.selected ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false' }, h("wa-option", { key: '357e66e5cf9b92ce9a36b0b0c7111b79d5b148fd', ref: el => (this.waOptionRef = el), value: this.value, label: this.label, disabled: this.disabled, current: this.current, selected: this.selected, exportparts: "checked-icon, label, start, end" }, h("slot", { key: '2f11bfa5c6911f617091635d24bb7cdbce4b9d19' }), h("slot", { key: '3d3d7ddbcd175dd5504d5e184b34ed29c58619fa', name: "start", slot: "start" }), h("slot", { key: '67a775caf4b076f9a965bec7b92e422cd8527ab0', name: "end", slot: "end" }))));
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
