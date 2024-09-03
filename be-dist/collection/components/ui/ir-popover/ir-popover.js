import { h, Fragment } from "@stencil/core";
import { createPopper } from "@popperjs/core";
import localization_store from "../../../stores/app.store";
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
                this.isVisible = false;
                this.openChange.emit(this.isVisible);
            }
        };
        this.active = false;
        this.trigger_label = '';
        this.placement = undefined;
        this.stopListeningForOutsideClicks = false;
        this.showCloseButton = true;
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
                placement: this.placement || localization_store.dir === 'LTR' ? 'bottom-start' : 'bottom-end',
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 3],
                            adaptive: true,
                        },
                    },
                ],
            });
        }
    }
    async toggleVisibility() {
        this.isVisible = !this.isVisible;
        if (this.dialogElement) {
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
            else {
                this.popoverInstance.update();
            }
        }
        this.adjustPopoverPlacement();
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
        return (h(Fragment, { key: '68e33586e0e3b65a2b4acc9e0062dd417684b992' }, this.isMobile && (h("div", { key: 'b75e7423c5afffe3b28b32919201ba8e04cc488c', class: "w-full md:hidden" }, h("div", { key: '2b4525d62b5a7f2b1cb6604b579e15a64cf46187', class: "w-full", onClick: () => {
                this.dialogElement.openModal();
            } }, h("slot", { key: '85ba2bd5ed27fb29db14fd09753e8fbdc908a09f', name: "trigger" })), h("ir-dialog", { key: 'acb992fb02e1ecc878c09ce4184fceb9b70fd277', closeButton: this.showCloseButton, ref: el => (this.dialogElement = el), onOpenChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isDialogOpen = e.detail;
                this.openChange.emit(e.detail);
            } }, h("div", { key: 'bbde5b29cf043b4d37fa82f2abb7c2edba048308', slot: "modal-body" }, h("slot", { key: 'fcafdb75075cd0809e0ac5235266beda8efd27ee', name: "popover-content" }))))), !this.isMobile && (h("div", { key: '0e8e70d651c5e7d81d0ceae23d33b8b16093b3bd', class: "hidden sm:block" }, h("div", { key: 'c8d99e2281fb81ed7ae22266943b23c1f02c27e0', ref: el => (this.triggerElement = el), onClick: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.toggleVisibility();
            } }, h("slot", { key: '924ac129eb517b0aefc9b07cd613fc9e1a63f6c6', name: "trigger" }, h("button", { key: '238d931524db7baad6ae4f2e74f52e003c21eee1', class: "trigger" }, h("span", { key: '8cfcd95e03eb7fbad33adc51051e48fa09c18fbe' }, this.trigger_label), h("svg", { key: '838144ef3d0de609ebc5f757fb8b0c3e1f889e04', width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: '7c223c6c7fbbc46122650a88cbfd8c7918ca5b51', d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))))), h("div", { key: '82954b3fd536ffad617d0ba23ea70bdfe31b927c', class: "popover-content", ref: el => (this.contentElement = el) }, this.isVisible && (h("div", { key: '86bfbccf9f32c3d0be6a422bc4646d650f019d3a' }, h("slot", { key: '484d6604f8f20367792adcf86f5e92439890061b', name: "popover-content" }))))))));
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
            "toggleVisibility": {
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
