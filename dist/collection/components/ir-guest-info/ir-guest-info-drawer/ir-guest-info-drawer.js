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
        return (h("ir-drawer", { key: 'e4a257494a9335a568647cf6345b85072185aace', open: this.open, label: drawerLabel, onDrawerHide: this.handleDrawerHide, style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            } }, this.open && (h("ir-guest-info-form", { key: 'fd8e0bc9447600cf26519695e56e8844537703a6', ticket: this.ticket, language: this.language, email: this.email, booking_nbr: this.booking_nbr, fromId: this._formId })), h("div", { key: '7c38f32a3d26d9c470c4faf06906e74b7bff0b29', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'b82edd6175541c988e7677dd19aa5e74e16464cf', size: "m", appearance: "filled", variant: "neutral", type: "button", onClickHandler: this.handleCancel }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '3ea96672cf92dfe38ffc1d79c3692528c410c10f', type: "submit", form: this._formId, size: "m", variant: "brand", loading: isRequestPending('/Edit_Exposed_Guest') }, t('Lcz_Save', { fallback: 'Save' })))));
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
