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
        return (h(Host, { key: 'b1ee578c60db3735083883373960421d4bf21de3', role: "option", "aria-selected": this.selected ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false' }, h("wa-option", { key: '9952159b68419e50376dfcf836c0ed9e4ddc7ba4', ref: el => (this.waOptionRef = el), value: this.value, label: this.label, disabled: this.disabled, current: this.current, selected: this.selected, exportparts: "checked-icon, label, start, end" }, h("slot", { key: 'be7fa9ede3326b3317536e5194aedcf350d7a5f8' }), h("slot", { key: '0d57bc7aa01463886b461ea48f726abf3806e850', name: "start", slot: "start" }), h("slot", { key: '063cda81368f3994e832cfd83dd1c6a7071a9c78', name: "end", slot: "end" }))));
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
