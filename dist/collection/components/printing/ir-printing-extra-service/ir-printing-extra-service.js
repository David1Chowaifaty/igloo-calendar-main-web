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
        return (h("section", { key: '561016d60f28bffa0772cd8d9adc490f5ca0c97c', class: "ir-print-extra-services" }, h("h3", { key: 'afed801fc4bbf7db1240706519a4c53aed763ef0', class: "ir-print-extra-services__title" }, "Extra services"), h("div", { key: '318ccce9dfeb7bd958d1a2d573e9319a8212f3c9', class: "ir-print-extra-services__list" }, this.extraServices?.map(service => {
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
                    "resolved": "{ system_id?: number; cost?: number; description?: string; booking_system_id?: number; currency_id?: number; end_date?: string; start_date?: string; price?: number; }[]",
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
