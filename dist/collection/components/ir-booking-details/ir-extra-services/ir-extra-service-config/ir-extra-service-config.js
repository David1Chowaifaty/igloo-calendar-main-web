import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import locales from "../../../../stores/locales.store";
import { h } from "@stencil/core";
export class IrExtraServiceConfig {
    booking;
    service;
    open;
    closeModal;
    closeDialog() {
        this.closeModal.emit();
    }
    render() {
        return (h("ir-drawer", { key: '61834150a4db97e2831fc29366e08e9f2b7ed7cf', style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDialog();
            }, label: locales.entries.Lcz_ExtraServices }, this.open && (h("ir-extra-service-config-form", { key: '73a95ebbdfe54eefd795d12adf4693cc0131a0f3', onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDialog();
            }, booking: this.booking, service: this.service })), h("div", { key: '94fab3ab17f9e6334abbd803d53cae51af3fabe9', slot: "footer", class: 'ir__drawer-footer' }, h("ir-custom-button", { key: '5a63b66f005595a6a764686e7c7ab79500ca2b9a', class: `flex-fill`, size: "medium", appearance: "filled", variant: "neutral", "data-drawer": "close" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '0c89c7efd143a5519984796eee0c6be59c902cf5', type: "submit", loading: isRequestPending('/Do_Booking_Extra_Service'), form: "extra-service-config-form", size: "medium", class: `flex-fill`, variant: "brand" }, locales.entries.Lcz_Save))));
    }
    static get is() { return "ir-extra-service-config"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-extra-service-config.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-extra-service-config.css"]
        };
    }
    static get properties() {
        return {
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Pick<Booking, 'from_date' | 'to_date' | 'currency' | 'booking_nbr'>",
                    "resolved": "{ currency: Currency; from_date: string; to_date: string; booking_nbr: string; }",
                    "references": {
                        "Pick": {
                            "location": "global",
                            "id": "global::Pick"
                        },
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "service": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ExtraService",
                    "resolved": "{ cost?: number; system_id?: number; description?: string; booking_system_id?: number; currency_id?: number; end_date?: string; start_date?: string; price?: number; }",
                    "references": {
                        "ExtraService": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::ExtraService"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
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
                "attribute": "open",
                "reflect": true
            }
        };
    }
    static get events() {
        return [{
                "method": "closeModal",
                "name": "closeModal",
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
}
//# sourceMappingURL=ir-extra-service-config.js.map
