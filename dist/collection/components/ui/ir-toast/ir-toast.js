import { Host, h } from "@stencil/core";
export class IrToast {
    constructor() {
        /**
         * Position where toasts will appear.
         * Options include: `'top-left'`, `'top-right'`, `'bottom-left'`, `'bottom-right'`.
         */
        this.position = 'bottom-left';
        /**
         * Array of active toast messages.
         */
        this.toasts = [];
    }
    onToast(event) {
        const toast = event.detail;
        this.showToast(toast);
    }
    showToast(toast) {
        const toastrOptions = {
            positionClass: 'toast-top-right',
            closeButton: true,
            timeOut: toast.duration || 5000,
        };
        switch (toast.type) {
            case 'success':
                toastr.success(toast.title, '', toastrOptions);
                break;
            case 'error':
                toastr.error(toast.title, '', toastrOptions);
                break;
        }
    }
    render() {
        return h(Host, { key: '47152dc63fefb8f0fddae69c50fd3c209f3f134f' });
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
                "defaultValue": "'bottom-left'"
            }
        };
    }
    static get states() {
        return {
            "toasts": {}
        };
    }
    static get elementRef() { return "element"; }
    static get listeners() {
        return [{
                "name": "toast",
                "method": "onToast",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-toast.js.map
