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
        this.openChange.emit(this.isVisible);
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
        return (h(Fragment, { key: '669ac67932bf7a1878e26fc0342783987ff467a6' }, this.isMobile && (h("div", { class: "w-full md:hidden" }, h("div", { class: "w-full", onClick: () => {
                this.dialogElement.openModal();
            } }, h("slot", { name: "trigger" })), h("ir-dialog", { ref: el => (this.dialogElement = el), onOpenChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isDialogOpen = e.detail;
                this.openChange.emit(e.detail);
            } }, h("div", { slot: "modal-body" }, h("slot", { name: "popover-content" }))))), !this.isMobile && (h("div", { class: "hidden sm:block" }, h("div", { ref: el => (this.triggerElement = el), onClick: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.toggleVisibility();
            } }, h("slot", { name: "trigger" }, h("button", { class: "trigger" }, h("span", null, this.trigger_label), h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))))), h("div", { class: "popover-content", ref: el => (this.contentElement = el) }, this.isVisible && (h("div", null, h("slot", { name: "popover-content" }))))))));
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
