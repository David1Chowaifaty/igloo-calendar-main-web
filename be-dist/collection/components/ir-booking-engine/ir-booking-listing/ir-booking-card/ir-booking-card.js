import { BookingListingAppService } from "../../../../services/app/booking-listing.service";
import { formatAmount } from "../../../../utils/utils";
import { h } from "@stencil/core";
import { differenceInCalendarDays, format } from "date-fns";
export class IrBookingCard {
    constructor() {
        this.bookingListingAppService = new BookingListingAppService();
        this.booking = undefined;
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
        return (h("div", { class: "relative flex flex-col space-y-1.5 rounded-xl  bg-gray-100 p-6 text-sm ", key: this.booking.booking_nbr }, h("div", { key: '84fddbc47d5e20d7616d743bc27c30f937137866', class: "flex items-center justify-between text-base" }, h("h3", { key: 'd61ad3b852ad40aa0b9118f8dee9c59c4264fb82', class: " font-semibold leading-none tracking-tight" }, "Booking: #", this.booking.booking_nbr), h("p", { key: 'ad0e760675bd74e01333303a58c181c1e73ceffc' }, formatAmount(this.booking.total, this.booking.currency.code))), h("p", { key: '3feb79930db3d377a2254fb58eeffb8d30d49f56' }, h("span", { key: '4dc98d073abbe948bf54c1fcd1be14a31afa9cd9', class: "font-medium" }, "Booked on: "), format(new Date(this.booking.booked_on.date), 'dd-MMM-yyyy')), h("p", { key: 'e2219a871831939b751720576629be599db809e1' }, h("span", { key: 'd7f3c071d36d6c9310cb9250843db87d569554c8', class: "font-medium" }, "Check-in: "), format(new Date(this.booking.from_date), 'EEE, dd MMM yyyy')), h("p", { key: '32382f45ff15efb9f9036a1dd8151b04179c0212' }, h("span", { key: '0fa6d7a675757be40862e0b89f6bd065f0383f17', class: "font-medium" }, "Duration: "), this.totalNights, " ", this.totalNights > 1 ? 'nights' : 'night'), h("p", { key: 'cca0fcbcd8e8132f4244587a06f18766f405c501', class: "flex items-center" }, h("span", { key: '130add8690bb49e607b047dbfe48baae28c849a8', class: "font-medium" }, "Status: "), h("ir-badge", { key: '57e1e92e0b1d312d63a7bea53e613ba8825bd8eb', backgroundShown: false, label: this.booking.status.description, variant: this.getBadgeVariant(this.booking.status.code) })), (view || payment || cancel) && (h("div", { key: '3c4666993c92ba2108155730ecd27938225ee496', class: "mt-2.5 flex flex-col items-center justify-end gap-2.5 pt-2" }, payment && (h("ir-button", { key: 'd3fa89cd3dab9d7ec6e78b3682ade8435f3daf60', class: 'w-full', label: `Pay ${formatAmount(this.booking.financial.due_amount || 0, this.booking.currency.code)} to guarentee`, onButtonClick: () => this.optionClicked.emit({ tag: 'pay', id: 2 }) })), cancel && h("ir-button", { key: '8d17c14d4cbc64fae84f83930096dca9104fbb95', class: "w-full", variants: "outline", label: "Cancel booking", onButtonClick: () => this.optionClicked.emit({ tag: 'cancel', id: 3 }) }), view && h("ir-button", { key: '78cc2fe1e165805edb1256be3d2346b612b088f7', class: "w-full", variants: "outline", label: "Booking details", onButtonClick: () => this.optionClicked.emit({ tag: 'view', id: 1 }) })))));
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
