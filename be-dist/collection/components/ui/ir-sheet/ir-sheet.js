import { addOverlay, removeOverlay } from "../../../stores/overlay.store";
import { Host, h } from "@stencil/core";
export class IrSheet {
    constructor() {
        this.open = undefined;
        this.hideCloseButton = undefined;
        this.isVisible = false;
    }
    componentWillLoad() {
        if (this.open) {
            if (this.isVisible) {
                return this.closeSheet();
            }
            this.openSheet();
        }
    }
    handleKeyDown(e) {
        if (e.key !== 'Escape') {
            return;
        }
        if (this.isVisible) {
            this.closeSheet();
        }
    }
    handleOpenChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            return newValue ? this.openSheet() : this.closeSheet();
        }
    }
    async openSheet() {
        addOverlay();
        this.isVisible = true;
        this.openChange.emit(this.isVisible);
    }
    async closeSheet() {
        removeOverlay();
        this.isVisible = false;
        this.openChange.emit(this.isVisible);
    }
    disconnectedCallback() {
        removeOverlay();
    }
    render() {
        return (h(Host, { key: '5e63150b5cec3a14d0d3be6789dbe0e00b49236d' }, h("div", { key: 'd0b69d1875b564fe06e1b18ff061bfb829e41abd', class: "backdrop", "data-state": this.isVisible ? 'opened' : 'closed', onClick: () => this.closeSheet() }), h("div", { key: 'c1de03cb68a654bd1fc5c1b17a7ddfb7e5515eea', class: "fixed top-0 right-0\r\n          h-screen shadow-md\r\n          bg-white z-50 max-w-full min-w-[70%]\r\n          transition-transform duration-300 ease-in-out\r\n        data-[state='opened']:translate-x-0 data-[state='closed']:translate-x-[100%]", "data-state": this.isVisible ? 'opened' : 'closed' }, h("ir-button", { key: '7bebc6877eacd389b1a773c8f387cbdf2dd63e47', variants: "icon", onButtonClick: () => this.closeSheet(), class: "absolute right-4 top-4" }, h("p", { key: 'ca6d34c053b88f05414a8e7ff367ebeb5ff16296', slot: "btn-icon", class: "sr-only" }, "close sheet"), h("svg", { key: '849156527d6c4f633e3085b7f411fa039f962df2', slot: "btn-icon", class: "h-6 w-6", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512" }, h("path", { key: '8fba01f9ea00c66158576bf64c4d0634b9be6a36', fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))), h("div", { key: 'a0363d0f4fc67386b75db470557009d183bbcc3a', class: "mt-8 w-full" }, h("slot", { key: '7c7da387d5861e4d03b26f5f26ce3e54fd0f6e17', name: "sheet-content" })))));
    }
    static get is() { return "ir-sheet"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-sheet.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-sheet.css"]
        };
    }
    static get properties() {
        return {
            "open": {
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
                "attribute": "open",
                "reflect": false
            },
            "hideCloseButton": {
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
                "attribute": "hide-close-button",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isVisible": {}
        };
    }
    static get events() {
        return [{
                "method": "openChange",
                "name": "openChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "openSheet": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "closeSheet": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "handleOpenChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleKeyDown",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-sheet.js.map
