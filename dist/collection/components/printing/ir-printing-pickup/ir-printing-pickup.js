import { _formatTime } from "../../ir-booking-details/functions";
import { formatAmount } from "../../../utils/utils";
import { h } from "@stencil/core";
import moment from "moment";
export class IrPrintingPickup {
    /** Pickup information attached to the booking */
    pickup;
    render() {
        if (!this.pickup) {
            return null;
        }
        return (h("section", { class: "ir-print-pickup" }, h("p", { class: "ir-print-pickup__title" }, "Yes, from ", this.pickup.selected_option.location.description), h("div", { class: "ir-print-pickup__content" }, h("div", { class: "ir-print-pickup__row" }, h("ir-printing-label", { label: "Arrival date:", content: moment(this.pickup.date).format('dddd, DD MMM YYYY') }), h("ir-printing-label", { label: "Arrival time:", content: _formatTime(this.pickup.hour.toString(), this.pickup.minute.toString()) }), h("ir-printing-label", { label: "Flight details:", content: this.pickup.details })), h("div", { class: "ir-print-pickup__row ir-print-pickup__row--secondary" }, h("p", { class: "ir-print-pickup__vehicle" }, this.pickup.selected_option.vehicle.description, h("span", { class: "ir-print-pickup__vehicle-separator" }, " \u2013 "), formatAmount(this.pickup.selected_option.currency.symbol, this.pickup.selected_option.amount)), h("ir-printing-label", { label: "Number of vehicles:", content: this.pickup.nbr_of_units?.toString() }), h("ir-printing-label", { label: "Due upon booking:", content: formatAmount(this.pickup.currency.symbol, this.pickup.total) })))));
    }
    static get is() { return "ir-printing-pickup"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-printing-pickup.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-printing-pickup.css"]
        };
    }
    static get properties() {
        return {
            "pickup": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking['pickup_info']",
                    "resolved": "IBookingPickupInfo",
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
                    "text": "Pickup information attached to the booking"
                },
                "getter": false,
                "setter": false
            }
        };
    }
}
//# sourceMappingURL=ir-printing-pickup.js.map
