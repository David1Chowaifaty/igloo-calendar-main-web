import { h } from "@stencil/core";
export class IrToast {
    /**
     * Position where toasts will appear.
     * Options include: `'top-left'`, `'top-right'`, `'bottom-left'`, `'bottom-right'`.
     */
    position = 'top-right';
    get providerPosition() {
        const map = {
            'top-left': 'top-start',
            'top-right': 'top-end',
            'bottom-left': 'bottom-start',
            'bottom-right': 'bottom-end',
        };
        return map[this.position] ?? 'top-end';
    }
    render() {
        // ir-toast-provider renders the ir-toast-item stack and listens for
        // `toast` events on the body, so this component is a thin shell kept
        // for backwards compatibility with the many pages that embed it.
        return h("ir-toast-provider", { key: 'dcc3e1446f7b852c0b0e04de468a7574f17dcba5', position: this.providerPosition });
    }
    static get is() { return "ir-toast"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-toast.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-toast.css"]
        };
    }
    static get properties() {
        return {
            "position": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "TPositions",
                    "resolved": "\"bottom-left\" | \"bottom-right\" | \"top-left\" | \"top-right\"",
                    "references": {
                        "TPositions": {
                            "location": "import",
                            "path": "./toast",
                            "id": "src/components/ui/ir-toast/toast.ts::TPositions"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position where toasts will appear.\nOptions include: `'top-left'`, `'top-right'`, `'bottom-left'`, `'bottom-right'`."
                },
                "getter": false,
                "setter": false,
                "attribute": "position",
                "reflect": true,
                "defaultValue": "'top-right'"
            }
        };
    }
}
//# sourceMappingURL=ir-toast.js.map
