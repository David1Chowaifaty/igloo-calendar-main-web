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
        return h("ir-toast-provider", { key: '1c0ae0622ce7ae4a1f0299068f2f85d76d914d7f', position: this.providerPosition });
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
                            "id": "src/components/ui/ir-toast/toast.ts::TPositions",
                            "referenceLocation": "TPositions"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position where toasts will appear.\r\nOptions include: `'top-left'`, `'top-right'`, `'bottom-left'`, `'bottom-right'`."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "position",
                "defaultValue": "'top-right'"
            }
        };
    }
}
