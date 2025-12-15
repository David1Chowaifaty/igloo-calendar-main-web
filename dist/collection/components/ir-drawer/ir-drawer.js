var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { OverflowAdd, OverflowRelease } from "../../decorators/OverflowLock";
import { h } from "@stencil/core";
export class IrDrawer {
    el;
    /** Indicates whether or not the drawer is open. Toggle this attribute to show and hide the drawer. */
    open;
    /**
     * The drawer's label as displayed in the header. You should always include a relevant label, as it is required for
     * proper accessibility. If you need to display HTML, use the `label` slot instead.
     */
    label;
    /** The direction from which the drawer will open. */
    placement;
    /** Disables the header. This will also remove the default close button. */
    withoutHeader;
    /** When enabled, the drawer will be closed when the user clicks outside of it. */
    lightDismiss = true;
    slotState = new Map();
    /** Emitted when the drawer opens. */
    drawerShow;
    /**Emitted when the drawer is requesting to close. Calling event.preventDefault() will prevent the drawer from closing. You can inspect event.detail.source to see which element caused the drawer to close. If the source is the drawer element itself, the user has pressed Escape or the drawer has been closed programmatically. Avoid using this unless closing the drawer will result in destructive behavior such as data loss. */
    drawerHide;
    onDrawerShow = (event) => {
        this.emitDrawerShow(event);
    };
    onDrawerHide = (event) => {
        this.emitDrawerHide(event);
    };
    slotObserver;
    SLOT_NAMES = ['label', 'header-actions', 'footer'];
    componentWillLoad() {
        this.updateSlotState();
    }
    componentDidLoad() {
        this.setupSlotListeners();
    }
    disconnectedCallback() {
        this.removeSlotListeners();
    }
    emitDrawerShow(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.drawerShow.emit();
    }
    emitDrawerHide(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!e.detail) {
            return;
        }
        this.drawerHide.emit(e.detail);
    }
    setupSlotListeners() {
        // Listen to slotchange events on the host element
        this.el.addEventListener('slotchange', this.handleSlotChange);
        // Also use MutationObserver as a fallback for browsers that don't fire slotchange reliably
        this.slotObserver = new MutationObserver(this.handleSlotChange);
        this.slotObserver.observe(this.el, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['slot'],
        });
    }
    removeSlotListeners() {
        this.el.removeEventListener('slotchange', this.handleSlotChange);
        this.slotObserver?.disconnect();
    }
    handleSlotChange = () => {
        this.updateSlotState();
    };
    updateSlotState() {
        const newState = new Map();
        this.SLOT_NAMES.forEach(name => {
            newState.set(name, this.hasSlot(name));
        });
        this.slotState = newState;
    }
    hasSlot(name) {
        return !!this.el.querySelector(`[slot="${name}"]`);
    }
    render() {
        return (h("wa-drawer", { key: '52c655ae297bcc49713c57a89322e4f234d6ad8c', "onwa-show": this.onDrawerShow, "onwa-hide": this.onDrawerHide, class: "ir__drawer", style: { '--size': 'var(--ir-drawer-width,40rem)' }, open: this.open, label: this.label, placement: this.placement, withoutHeader: this.withoutHeader, lightDismiss: this.lightDismiss, exportparts: "dialog, header, header-actions, title, close-button, close-button__base, body, footer" }, this.slotState.get('header-actions') && h("slot", { key: '1d94a9bf2d220ce8ac9c2ff8a1d272b3144d7d3e', name: "header-actions", slot: "header-actions" }), this.slotState.get('label') && h("slot", { key: '315762e59ce49fddfb8a643f85365b7c3e233375', name: "label", slot: "label" }), h("slot", { key: '3997ea4bf9bc66a3291d17eb1deeafadde8b6a8f' }), this.slotState.get('footer') && h("slot", { key: '7ddaff6af2a06e791115229f0481a04d0acb7b9a', name: "footer", slot: "footer" })));
    }
    static get is() { return "ir-drawer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-drawer.css"]
        };
    }
    static get properties() {
        return {
            "open": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "NativeDrawer['open']",
                    "resolved": "boolean",
                    "references": {
                        "NativeDrawer": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-drawer/ir-drawer.tsx",
                            "id": "src/components/ir-drawer/ir-drawer.tsx::NativeDrawer"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates whether or not the drawer is open. Toggle this attribute to show and hide the drawer."
                },
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": true
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeDrawer['label']",
                    "resolved": "string",
                    "references": {
                        "NativeDrawer": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-drawer/ir-drawer.tsx",
                            "id": "src/components/ir-drawer/ir-drawer.tsx::NativeDrawer"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The drawer's label as displayed in the header. You should always include a relevant label, as it is required for\nproper accessibility. If you need to display HTML, use the `label` slot instead."
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": true
            },
            "placement": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeDrawer['placement']",
                    "resolved": "\"bottom\" | \"end\" | \"start\" | \"top\"",
                    "references": {
                        "NativeDrawer": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-drawer/ir-drawer.tsx",
                            "id": "src/components/ir-drawer/ir-drawer.tsx::NativeDrawer"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The direction from which the drawer will open."
                },
                "getter": false,
                "setter": false,
                "attribute": "placement",
                "reflect": true
            },
            "withoutHeader": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "NativeDrawer['withoutHeader']",
                    "resolved": "boolean",
                    "references": {
                        "NativeDrawer": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-drawer/ir-drawer.tsx",
                            "id": "src/components/ir-drawer/ir-drawer.tsx::NativeDrawer"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Disables the header. This will also remove the default close button."
                },
                "getter": false,
                "setter": false,
                "attribute": "without-header",
                "reflect": true
            },
            "lightDismiss": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "NativeDrawer['lightDismiss']",
                    "resolved": "boolean",
                    "references": {
                        "NativeDrawer": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-drawer/ir-drawer.tsx",
                            "id": "src/components/ir-drawer/ir-drawer.tsx::NativeDrawer"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "When enabled, the drawer will be closed when the user clicks outside of it."
                },
                "getter": false,
                "setter": false,
                "attribute": "light-dismiss",
                "reflect": true,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "slotState": {}
        };
    }
    static get events() {
        return [{
                "method": "drawerShow",
                "name": "drawerShow",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the drawer opens."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "drawerHide",
                "name": "drawerHide",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the drawer is requesting to close. Calling event.preventDefault() will prevent the drawer from closing. You can inspect event.detail.source to see which element caused the drawer to close. If the source is the drawer element itself, the user has pressed Escape or the drawer has been closed programmatically. Avoid using this unless closing the drawer will result in destructive behavior such as data loss."
                },
                "complexType": {
                    "original": "{ source: Element }",
                    "resolved": "{ source: Element; }",
                    "references": {
                        "Element": {
                            "location": "import",
                            "path": "@stencil/core",
                            "id": "node_modules::Element"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
}
__decorate([
    OverflowAdd()
], IrDrawer.prototype, "emitDrawerShow", null);
__decorate([
    OverflowRelease()
], IrDrawer.prototype, "emitDrawerHide", null);
//# sourceMappingURL=ir-drawer.js.map
