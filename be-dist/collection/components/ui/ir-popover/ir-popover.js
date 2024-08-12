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
        return (h(Fragment, { key: 'b7fad3ececd79038602f2f0e0abaa78f21abf001' }, this.isMobile && (h("div", { key: '6df1ad37307a08a03ea96aace6a9679e193d364c', class: "w-full md:hidden" }, h("div", { key: 'a480fa830f168742431872d12bac34a6c2e0fb6f', class: "w-full", onClick: () => {
                this.dialogElement.openModal();
            } }, h("slot", { key: '634e62b8069cd20dcf2dd5f6f575197f4f6c5d04', name: "trigger" })), h("ir-dialog", { key: '459a66f9441fa9f506cd02babd57f83a9a4446b4', closeButton: this.showCloseButton, ref: el => (this.dialogElement = el), onOpenChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isDialogOpen = e.detail;
                this.openChange.emit(e.detail);
            } }, h("div", { key: '9b34922bf63cd0cf4796432476554217fc0d255a', slot: "modal-body" }, h("slot", { key: '92448cf68993e59bfca47353af2d992e709deb62', name: "popover-content" }))))), !this.isMobile && (h("div", { key: 'fa0c3e3e4be18314c883ed3282c317c5c86a52c6', class: "hidden sm:block" }, h("div", { key: 'cc3d941001a8ec34b37b361c9cbdf0aa0bfea0e9', ref: el => (this.triggerElement = el), onClick: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.toggleVisibility();
            } }, h("slot", { key: '082cf48ea8797b801db64ee6e604318f3eae310c', name: "trigger" }, h("button", { key: '1f2f135dafaab84ee5e92a27003412c61bc724a5', class: "trigger" }, h("span", { key: '53805d5ec5c3f1204cfc110964b4fe67a9507c3e' }, this.trigger_label), h("svg", { key: 'c9babfeddbedbe93250602ba2493ddc601586ff9', width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: '0f25f164de94b0b2c6437de10acc43656808e08a', d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))))), h("div", { key: 'ab305976ca95b4fb3b8272c7d9f20ab6a140b7f3', class: "popover-content", ref: el => (this.contentElement = el) }, this.isVisible && (h("div", { key: 'c5bad2b73f33976408808b9d11de4d6e9add2c36' }, h("slot", { key: '5bfedcff052007c8b7d89bfddffad9826613ac8a', name: "popover-content" }))))))));
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
