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
        return (h(Host, { key: '84920a9c59e07e605a72dbe5df12e10e66cec86b' }, h("div", { key: '8111de5c76bebea6bd846256c5fa30fcf6574904', class: "backdrop", "data-state": this.isVisible ? 'opened' : 'closed', onClick: () => this.closeSheet() }), h("div", { key: '752a9b8460767e0d94d8123ad57ee09e9471e896', class: "fixed top-0 right-0\n          h-screen shadow-md\n          bg-white z-50 max-w-full min-w-[70%]\n          transition-transform duration-300 ease-in-out\n        data-[state='opened']:translate-x-0 data-[state='closed']:translate-x-[100%]", "data-state": this.isVisible ? 'opened' : 'closed' }, h("ir-button", { key: '33226833a669084d17fdeddaac8a648a2470d2da', variants: "icon", onButtonClick: () => this.closeSheet(), class: "absolute right-4 top-4" }, h("p", { key: '98a0d7b5362dd08b9ead97e42f59b5176f03efe9', slot: "btn-icon", class: "sr-only" }, "close sheet"), h("svg", { key: '6da373d5fb787c71fd0daa83e731443ce751dc1a', slot: "btn-icon", class: "h-6 w-6", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512" }, h("path", { key: '823101111470c80ec0fc56b9d9b8ea715e0dc29c', fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))), h("div", { key: '22b3ea897675f44fa8d222d26b5de722ca1f55da', class: "mt-8 w-full" }, h("slot", { key: '4c1d0898cdd0131fff50bdb5b3ebfaf1660bb2df', name: "sheet-content" })))));
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
