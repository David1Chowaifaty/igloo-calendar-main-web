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
    render() {
        return (h("wa-drawer", { key: '58af1410e0ababfe234f7b1baa9273004c799b11', "onwa-show": this.onDrawerShow, "onwa-hide": this.onDrawerHide, class: "ir__drawer", style: { '--size': 'var(--ir-drawer-width,40rem)' }, open: this.open, label: this.label, placement: this.placement, withoutHeader: this.withoutHeader, lightDismiss: this.lightDismiss }, h("slot", { key: '5db3a97f47e5e138fca7bb814783b9946c025816', slot: "label", name: "label" }), h("slot", { key: 'a963e70a33f9537b5280d69efdea81a89a3afb28', slot: "header-actions", name: "header-actions" }), h("slot", { key: '966c5cd74d7069cdc387c08714d6485a72c0e613' }), h("slot", { key: '56ea23f578f4361b08504b412cd946996911e31a', slot: "footer", name: "footer" })));
    }
    static get is() { return "ir-drawer"; }
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
                            "location": "global",
                            "id": "global::Element"
                        }
                    }
                }
            }];
    }
}
__decorate([
    OverflowAdd()
], IrDrawer.prototype, "emitDrawerShow", null);
__decorate([
    OverflowRelease()
], IrDrawer.prototype, "emitDrawerHide", null);
//# sourceMappingURL=ir-drawer.js.map
