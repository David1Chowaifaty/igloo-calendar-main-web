import localizedWords from "../../../stores/localization.store";
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
        return (h(Host, { key: '52f737d42206cd854f2a14f95eceab8bdcfc4f68' }, h("div", { key: 'c6f2a81e915325e7f5521a8f9896fceea584698a', class: "backdrop", "data-state": this.isVisible ? 'opened' : 'closed', onClick: () => this.closeSheet() }), h("div", { key: 'fa538f94c0f7e441977ec097c2c0f4d42ee85bbe', class: "fixed right-0 top-0\r\n          z-50 h-screen\r\n          min-w-[70%] max-w-full bg-white shadow-md\r\n          transition-transform duration-300 ease-in-out\r\n        data-[state='closed']:translate-x-[100%] data-[state='opened']:translate-x-0", "data-state": this.isVisible ? 'opened' : 'closed' }, h("ir-button", { key: 'a9405ef32444c1069cfaf848a7fc678098491969', variants: "icon", title: localizedWords.entries.Lcz_Close, iconName: "xmark", onButtonClick: () => this.closeSheet(), class: "absolute right-4 top-4" }), h("div", { key: '53422e9aced5195f2794aca16c3860ab80e9bc4c', class: "mt-8 w-full" }, h("slot", { key: '60f71c8988237547261e20c00a69c21f567a9749', name: "sheet-content" })))));
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
