import { BookingListingAppService } from "../../../../services/app/booking-listing.service";
import { formatAmount, formatFullLocation } from "../../../../utils/utils";
import { h } from "@stencil/core";
import { differenceInCalendarDays, format } from "date-fns";
export class IrBookingCard {
    constructor() {
        this.bookingListingAppService = new BookingListingAppService();
        this.booking = undefined;
        this.aff = false;
    }
    componentWillLoad() {
        if (!this.booking) {
            return;
        }
        this.init();
    }
    handleBookingChange(newValue) {
        if (newValue) {
            this.init();
        }
    }
    getBadgeVariant(code) {
        if (code === '001') {
            return 'pending';
        }
        else if (code === '002') {
            return 'success';
        }
        return 'error';
    }
    init() {
        this.totalNights = differenceInCalendarDays(new Date(this.booking.to_date), new Date(this.booking.from_date));
    }
    render() {
        const { cancel, payment, view } = this.bookingListingAppService.getBookingActions(this.booking);
        return (h("div", { class: "relative flex flex-col space-y-1.5 rounded-xl  bg-gray-100 p-6 text-sm ", key: this.booking.booking_nbr }, !this.aff && (h("div", { key: 'dcd6d3ca51e775468959742d73c77ad80b18b9a0', class: "" }, h("span", { key: '9c431121e590c7231efa211eaded3cba20edccc7', class: "font-medium" }, this.booking.property.name), h("span", { key: 'c1dde8925f0cf0d3d4cfb5bd40ea3576c7679aec', class: "mx-2 text-xs text-gray-700" }, formatFullLocation(this.booking.property)))), h("div", { key: '4ab0344c741f3867b7ccd0d1980fb82bff3e8f2b', class: "flex items-center justify-between text-base" }, h("h3", { key: '53c73366d25ed609da40c3e47fe36d7fcdae6149', class: " font-semibold leading-none tracking-tight" }, "Booking reference: ", this.booking.booking_nbr), h("p", { key: '15ce49555dedfe4b5275f12ce91abae2f0aa0921', class: 'font-semibold' }, formatAmount(this.booking.total, this.booking.currency.code))), h("p", { key: 'eb86c2148218993e2fc03fdc872e20932c5ee20c' }, h("span", { key: 'a5728d1ae2e815d74afefc029d7c296665dd8460', class: "font-medium" }, "Booked on: "), format(new Date(this.booking.booked_on.date), 'dd-MMM-yyyy')), h("p", { key: '11d562e23ee4f0d8177480dd05390f6fe58672ed' }, h("span", { key: 'a44560d55ebbac73a871065909f9585758738756', class: "font-medium" }, "Check-in: "), format(new Date(this.booking.from_date), 'EEE, dd MMM yyyy')), h("p", { key: '71b7162daf6b3d27403abca0e2b9624d471f9fb6' }, h("span", { key: '0f4a93228c30383e2373bd802f2eba1b91bd4a0d', class: "font-medium" }, "Duration: "), this.totalNights, " ", this.totalNights > 1 ? 'nights' : 'night'), h("p", { key: '77a453d80459e63ab86e625ef499dfe7bec959be', class: "flex items-center" }, h("ir-badge", { key: '4a4cdcca3d449d597b61dd822305c9886e7a8eea', backgroundShown: false, label: this.booking.status.description, variant: this.getBadgeVariant(this.booking.status.code) })), (view.show || payment.show || cancel.show) && (h("div", { key: '518e0b7396eda46b691c93662b3b68db4958880d', class: "mt-2.5 flex flex-col items-center justify-end gap-2.5 pt-2" }, payment.show && h("ir-button", { key: 'a14b0ce9d222f6c0f0cab1061f3b929e46bdbc60', class: 'w-full', label: payment.label, onButtonClick: () => this.optionClicked.emit({ tag: 'pay', id: 2 }) }), cancel.show && h("ir-button", { key: '95d3c968a02e71809a775d9a2e5e6f517e815de5', class: "w-full", variants: "outline", label: cancel.label, onButtonClick: () => this.optionClicked.emit({ tag: 'cancel', id: 3 }) }), view.show && h("ir-button", { key: '21a85271c46776e473531755e818e1c5f2d96359', class: "w-full", variants: "outline", label: view.label, onButtonClick: () => this.optionClicked.emit({ tag: 'view', id: 1 }) })))));
    }
    static get is() { return "ir-booking-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-card.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-card.css"]
        };
    }
    static get properties() {
        return {
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
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
                    "text": ""
                }
            },
            "aff": {
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
                "attribute": "aff",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "optionClicked",
                "name": "optionClicked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ tag: string; id: number }",
                    "resolved": "{ tag: string; id: number; }",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "booking",
                "methodName": "handleBookingChange"
            }];
    }
}
//# sourceMappingURL=ir-booking-card.js.map
