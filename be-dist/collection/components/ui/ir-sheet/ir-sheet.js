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
        return (h(Host, { key: '23a2499c5b293f752e8a941307a0bdab5baac57d' }, h("div", { key: '73aac03fa22d3e013fe273607e392c319c366956', class: "backdrop", "data-state": this.isVisible ? 'opened' : 'closed', onClick: () => this.closeSheet() }), h("div", { key: '074283978eb3689da6b5ccf628f828c8466d857b', class: "fixed right-0 top-0\r\n          z-50 h-screen\r\n          min-w-[70%] max-w-full bg-white shadow-md\r\n          transition-transform duration-300 ease-in-out\r\n        data-[state='closed']:translate-x-[100%] data-[state='opened']:translate-x-0", "data-state": this.isVisible ? 'opened' : 'closed' }, h("ir-button", { key: '5a3dfb3e92f5d11a1462fd36e3f7bac7ceb336af', variants: "icon", title: localizedWords.entries.Lcz_Close, iconName: "xmark", onButtonClick: () => this.closeSheet(), class: "absolute right-4 top-4" }), h("div", { key: 'ac3ea73e0759e660ebec87edcb9e56ce2e9af2f6', class: "mt-8 w-full" }, h("slot", { key: 'd61f47f0911ca6efbe81cab4ec7c719f79fc1c9f', name: "sheet-content" })))));
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
