import { formatAmount } from "../../../utils/utils";
import { Fragment, h } from "@stencil/core";
import moment from "moment";
export class IrPrintingExtraService {
    /** Extra services attached to the booking */
    extraServices;
    /** Booking currency */
    currency;
    invocableKeys;
    render() {
        return (h("section", { key: '95c1a3adc11fe154721f1fdbbcc7da0460db3731', class: "ir-print-extra-services" }, h("h3", { key: 'd68d1754702f763416bb203f0ee7a8e9b13a523e', class: "ir-print-extra-services__title" }, "Extra services"), h("div", { key: '4a2b6a4c4461165463067fc47f04b4f8ee9dc26c', class: "ir-print-extra-services__list" }, this.extraServices?.map(service => {
            if (!this.invocableKeys.has(service.system_id)) {
                return null;
            }
            return (h("div", { key: `service_${service.system_id}`, class: "ir-print-extra-services__item" }, h("div", { class: "ir-print-extra-services__details" }, h("ir-printing-label", { display: "inline", label: "", class: "ir-print-extra-services__description", content: service.description }), (service.start_date || service.end_date) && (h("div", { class: "ir-print-extra-services__dates" }, h("span", { class: "ir-print-extra-services__date-wrapper" }, "(", service.start_date && (h("ir-printing-label", { class: "ir-print-extra-services__date", label: "", content: moment(service.start_date).format('dddd, DD MMM YYYY') })), service.end_date && (h(Fragment, null, h("span", { class: "ir-print-extra-services__date-separator" }, "\u2013"), h("ir-printing-label", { class: "ir-print-extra-services__date", label: "", content: moment(service.end_date).format('dddd, DD MMM YYYY') }))), ")")))), h("div", { class: "ir-print-extra-services__price" }, formatAmount(this.currency?.symbol, service?.price || 0))));
        }))));
    }
    static get is() { return "ir-printing-extra-service"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-printing-extra-service.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-printing-extra-service.css"]
        };
    }
    static get properties() {
        return {
            "extraServices": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking['extra_services']",
                    "resolved": "{ description?: string; currency_id?: number; agent?: { name?: string; email?: string; property_id?: any; code?: string; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; id?: number; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; cl_post_timing?: { code?: string; description?: string; }; }; system_id?: number; cost?: number; category?: { code?: string; }; booking_system_id?: number; end_date?: string; start_date?: string; price?: number; }[]",
                    "references": {
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
                    "text": "Extra services attached to the booking"
                },
                "getter": false,
                "setter": false
            },
            "currency": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking['currency']",
                    "resolved": "Currency",
                    "references": {
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
                    "text": "Booking currency"
                },
                "getter": false,
                "setter": false
            },
            "invocableKeys": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Set<string | number>",
                    "resolved": "Set<string | number>",
                    "references": {
                        "Set": {
                            "location": "global",
                            "id": "global::Set"
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
            }
        };
    }
}
//# sourceMappingURL=ir-printing-extra-service.js.map
