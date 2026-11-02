import { h } from "@stencil/core";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { v4 } from "uuid";
import { t } from "../../../services/locale/t";
export class IrGuestInfoDrawer {
    open;
    language = 'en';
    email;
    booking_nbr;
    ticket;
    guestInfoDrawerClosed;
    guestChanged;
    resetBookingEvt;
    hostElement;
    handleDrawerHide = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.guestInfoDrawerClosed.emit({ source: event.detail?.source ?? this.hostElement });
    };
    handleCancel = () => {
        this.guestInfoDrawerClosed.emit({ source: this.hostElement });
    };
    _formId = `guest-details-form_${v4()}`;
    render() {
        const drawerLabel = t('Lcz_GuestDetails', { fallback: 'Guest info' });
        return (h("ir-drawer", { key: '85d2867f2a27d4925a3d1ff06cdadffa03d7d4de', open: this.open, label: drawerLabel, onDrawerHide: this.handleDrawerHide, style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            } }, this.open && (h("ir-guest-info-form", { key: 'd93c9a840e7fb16a1a5a36987f0d73c37cd364c7', ticket: this.ticket, language: this.language, email: this.email, booking_nbr: this.booking_nbr, fromId: this._formId })), h("div", { key: '9912e209f027bc30456539bd9da61612a575618f', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '6cc6cebc8bba426635e92f4773ff38da7c30f39c', size: "m", appearance: "filled", variant: "neutral", type: "button", onClickHandler: this.handleCancel }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '1ca0e37b3a05d20f5cedef04a51c48f544d39b72', type: "submit", form: this._formId, size: "m", variant: "brand", loading: isRequestPending('/Edit_Exposed_Guest') }, t('Lcz_Save', { fallback: 'Save' })))));
    }
    static get is() { return "ir-guest-info-drawer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-guest-info-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-guest-info-drawer.css"]
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
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "open"
            },
            "language": {
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'en'"
            },
            "email": {
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "email"
            },
            "booking_nbr": {
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "booking_nbr"
            },
            "ticket": {
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "ticket"
            }
        };
    }
    static get events() {
        return [{
                "method": "guestInfoDrawerClosed",
                "name": "guestInfoDrawerClosed",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ source: Element }",
                    "resolved": "{ source: Element; }",
                    "references": {
                        "Element": {
                            "location": "import",
                            "path": "@stencil/core",
                            "id": "node_modules::Element",
                            "referenceLocation": "Element"
                        }
                    }
                }
            }, {
                "method": "guestChanged",
                "name": "guestChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "GuestChangedEvent",
                    "resolved": "GuestChangedEvent",
                    "references": {
                        "GuestChangedEvent": {
                            "location": "import",
                            "path": "@/components",
                            "id": "src/components.d.ts::unknown",
                            "referenceLocation": "GuestChangedEvent"
                        }
                    }
                }
            }, {
                "method": "resetBookingEvt",
                "name": "resetBookingEvt",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
}
