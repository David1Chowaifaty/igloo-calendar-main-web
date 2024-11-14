import { h, Fragment } from "@stencil/core";
import { createPopper } from "@popperjs/core";
import localization_store from "../../../stores/app.store";
import app_store from "../../../stores/app.store";
export class IrPopover {
    constructor() {
        this.popoverInstance = null;
        this.handleKeyboardPress = (e) => {
            if (!this.isVisible) {
                return;
            }
            if (e.key === 'Escape') {
                this.toggleVisibility();
            }
            return;
        };
        this.handleOutsideClick = (event) => {
            const outsideClick = typeof event.composedPath === 'function' && !event.composedPath().includes(this.el);
            if (outsideClick && this.isVisible) {
                if (this.outsideEvents === 'all') {
                    this.isVisible = false;
                }
                this.openChange.emit(false);
            }
        };
        this.active = false;
        this.autoAdjust = true;
        this.trigger_label = '';
        this.placement = undefined;
        this.stopListeningForOutsideClicks = false;
        this.showCloseButton = true;
        this.allowFlip = true;
        this.outsideEvents = 'all';
        this.isVisible = false;
        this.isMobile = window.innerWidth < 640;
        this.previousIsMobile = window.innerWidth < 640;
        this.isDialogOpen = undefined;
    }
    componentDidLoad() {
        this.initializePopover();
        document.addEventListener('click', this.handleOutsideClick, true);
        document.addEventListener('keydown', this.handleKeyboardPress, true);
    }
    handleResize() {
        const currentIsMobile = window.innerWidth < 640;
        if (this.isMobile !== currentIsMobile) {
            this.previousIsMobile = this.isMobile;
            this.isMobile = currentIsMobile;
            if (this.previousIsMobile === false && this.isMobile === true && this.dialogElement) {
                this.dialogElement.closeModal();
                this.isVisible = false;
                this.openChange.emit(this.isVisible);
            }
            if (!this.isMobile && this.isVisible) {
                this.isVisible = false;
                this.popupInitializing = setTimeout(() => {
                    this.initializePopover();
                }, 100);
            }
        }
        if (!currentIsMobile && this.dialogElement) {
            this.dialogElement = undefined;
            this.popupInitializing = setTimeout(() => {
                this.initializePopover();
            }, 100);
        }
    }
    initializePopover() {
        if (this.triggerElement && this.contentElement) {
            this.popoverInstance = createPopper(this.triggerElement, this.contentElement, {
                placement: this.placement ? this.placement : localization_store.dir === 'LTR' ? 'bottom-start' : 'bottom-end',
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 3],
                            adaptive: true,
                        },
                    },
                    {
                        name: 'flip',
                        enabled: app_store.app_data.injected ? false : this.allowFlip,
                    },
                ],
            });
        }
    }
    async forceClose() {
        var _a;
        this.isVisible = false;
        if (!this.isVisible) {
            (_a = this.dialogElement) === null || _a === void 0 ? void 0 : _a.closeModal();
        }
    }
    async toggleVisibility() {
        if (this.outsideEvents === 'none' && this.isVisible) {
            return this.openChange.emit(false);
        }
        this.isVisible = !this.isVisible;
        if (this.dialogElement) {
            if (this.isVisible) {
                this.dialogElement.openModal();
            }
            else
                this.dialogElement.closeModal();
        }
        if (this.isVisible && this.popoverInstance) {
            const currentDir = localization_store.dir.toLowerCase() || 'ltr';
            if ((this.popoverInstance.state.options.placement === 'bottom-start' && currentDir === 'rtl') ||
                (this.popoverInstance.state.options.placement === 'bottom-end' && currentDir === 'ltr')) {
                let newPlacement = this.popoverInstance.state.options.placement;
                if (currentDir === 'rtl') {
                    newPlacement = newPlacement.replace('bottom-start', 'bottom-end');
                }
                else {
                    newPlacement = newPlacement.replace('bottom-end', 'bottom-start');
                }
                this.popoverInstance
                    .setOptions({
                    placement: newPlacement,
                })
                    .then(() => {
                    this.popoverInstance.update();
                });
            }
            else if ((this.popoverInstance.state.options.placement === 'top-start' && currentDir === 'rtl') ||
                (this.popoverInstance.state.options.placement === 'top-end' && currentDir === 'ltr')) {
                let newPlacement = this.popoverInstance.state.options.placement;
                if (currentDir === 'rtl') {
                    newPlacement = newPlacement.replace('top-start', 'top-end');
                }
                else {
                    newPlacement = newPlacement.replace('top-end', 'top-start');
                }
                this.popoverInstance
                    .setOptions({
                    placement: newPlacement,
                })
                    .then(() => {
                    this.popoverInstance.update();
                });
            }
            else {
                this.popoverInstance.update();
            }
        }
        if (!app_store.app_data.injected && this.autoAdjust) {
            this.adjustPopoverPlacement();
        }
        this.openChange.emit(this.isVisible);
    }
    adjustPopoverPlacement() {
        requestAnimationFrame(() => {
            const rect = this.contentElement.getBoundingClientRect();
            if (rect.bottom > window.innerHeight) {
                this.popoverInstance.setOptions({
                    placement: 'top-end',
                });
            }
            else if (rect.top < 0) {
                this.popoverInstance.setOptions({
                    placement: 'bottom-end',
                });
            }
            this.popoverInstance.update();
        });
    }
    disconnectedCallback() {
        document.removeEventListener('click', this.handleOutsideClick, true);
        document.removeEventListener('keydown', this.handleKeyboardPress, true);
        if (this.popoverInstance) {
            this.popoverInstance.destroy();
        }
        if (this.popupInitializing) {
            clearTimeout(this.popupInitializing);
        }
    }
    render() {
        return (h(Fragment, { key: '72078feb2b6e8e2cc859da676784db6dec07b4c3' }, this.isMobile && (h("div", { key: '2b4ea71ede058ed769d088ff131661e92079b49d', class: "w-full md:hidden" }, h("div", { key: '765b0ee759fab89523e35529e827d7cb391a0437', class: "w-full", onClick: () => {
                this.dialogElement.openModal();
            } }, h("slot", { key: 'ca20634ecc0a3b3c15f20a2765a5a0d6c86cec69', name: "trigger" })), h("ir-dialog", { key: 'eb9a22df9a6508ed6ce633ba7b04aaf922af2dde', closeButton: this.showCloseButton, ref: el => (this.dialogElement = el), onOpenChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isDialogOpen = e.detail;
                this.openChange.emit(e.detail);
            } }, h("div", { key: 'a54675c4ef3112c2854859c6d108aeb76e233cbf', slot: "modal-body" }, h("slot", { key: 'c859673e23f3e1bb0012ab5bc17337e2e496c4cd', name: "popover-content" }))))), !this.isMobile && (h("div", { key: 'c48938908253d2b30ac4facd5dbb4cbc2e1d2e92', class: "hidden sm:block" }, h("div", { key: 'cdff19d2e4a484c5b34465e4c1bf645a03bedfe7', ref: el => (this.triggerElement = el), onClick: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.toggleVisibility();
            } }, h("slot", { key: 'a9d6175e029c4ed4b273ffad0f61ae91878998c2', name: "trigger" }, h("button", { key: '61bfaf7a54b9141a33b28bc650b7115c1b8f77cf', class: "trigger" }, h("span", { key: '83f3dd51015d5f05eb32136087d9fe856184f688' }, this.trigger_label), h("svg", { key: 'f17b84e6f8580d064198a9d30a011b2d3c7cbd9b', width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: '78aa4d36936d8b13986da0e6254e8673641d4287', d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))))), h("div", { key: '2330c998705c3a12ce81aa400a99bcc895874c45', class: "popover-content", ref: el => (this.contentElement = el) }, this.isVisible && (h("div", { key: '2d29eea22d750c65fd408d62ed12ee81d37814e1' }, h("slot", { key: '0ae0a81747f5b6dd8f20715176d14477fda8bc77', name: "popover-content" }))))))));
    }
    static get is() { return "ir-popover"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-popover.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-popover.css"]
        };
    }
    static get properties() {
        return {
            "active": {
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
                "attribute": "active",
                "reflect": false,
                "defaultValue": "false"
            },
            "autoAdjust": {
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
                "attribute": "auto-adjust",
                "reflect": false,
                "defaultValue": "true"
            },
            "trigger_label": {
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
                "attribute": "trigger_label",
                "reflect": false,
                "defaultValue": "''"
            },
            "placement": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Placement",
                    "resolved": "\"auto\" | \"auto-end\" | \"auto-start\" | \"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
                    "references": {
                        "Placement": {
                            "location": "import",
                            "path": "@popperjs/core",
                            "id": ""
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "placement",
                "reflect": false
            },
            "stopListeningForOutsideClicks": {
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
                "attribute": "stop-listening-for-outside-clicks",
                "reflect": false,
                "defaultValue": "false"
            },
            "showCloseButton": {
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
                "attribute": "show-close-button",
                "reflect": false,
                "defaultValue": "true"
            },
            "allowFlip": {
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
                "attribute": "allow-flip",
                "reflect": false,
                "defaultValue": "true"
            },
            "outsideEvents": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'all' | 'none'",
                    "resolved": "\"all\" | \"none\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "outside-events",
                "reflect": false,
                "defaultValue": "'all'"
            }
        };
    }
    static get states() {
        return {
            "isVisible": {},
            "isMobile": {},
            "previousIsMobile": {},
            "isDialogOpen": {}
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
            "forceClose": {
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
            "toggleVisibility": {
                "complexType": {
                    "signature": "() => Promise<CustomEvent<boolean>>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "CustomEvent": {
                            "location": "global",
                            "id": "global::CustomEvent"
                        }
                    },
                    "return": "Promise<CustomEvent<boolean>>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "resize",
                "method": "handleResize",
                "target": "window",
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=ir-popover.js.map
