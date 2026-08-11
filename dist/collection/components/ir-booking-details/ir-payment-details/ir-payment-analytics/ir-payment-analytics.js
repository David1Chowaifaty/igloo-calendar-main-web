import calendar_data, { isOptimReadOnly } from "../../../../stores/calendar-data";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
const COUNT_UP_DURATION_MS = 700;
/** Cubic ease-out — starts fast, settles gently instead of stopping abruptly. */
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
export class IrPaymentAnalytics {
    booking;
    displayedValue = 0;
    animationFrameId;
    componentWillLoad() {
        this.runCountUp();
    }
    onBookingChange() {
        this.runCountUp();
    }
    disconnectedCallback() {
        if (this.animationFrameId !== undefined) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }
    runCountUp() {
        if (this.animationFrameId !== undefined) {
            cancelAnimationFrame(this.animationFrameId);
        }
        const target = this.booking.dp_effect;
        const start = performance.now();
        const step = (now) => {
            const progress = Math.min((now - start) / COUNT_UP_DURATION_MS, 1);
            this.displayedValue = target * easeOutCubic(progress);
            if (progress < 1) {
                this.animationFrameId = requestAnimationFrame(step);
            }
            else {
                this.displayedValue = target;
                this.animationFrameId = undefined;
            }
        };
        this.animationFrameId = requestAnimationFrame(step);
    }
    getTone() {
        const { dp_effect } = this.booking;
        if (dp_effect === 0) {
            return 'neutral';
        }
        return dp_effect < 0 ? 'loss' : 'gain';
    }
    render() {
        const tone = this.getTone();
        const calloutVariant = tone === 'gain' ? 'success' : tone === 'loss' ? 'danger' : 'neutral';
        const trendIcon = tone === 'gain' ? 'arrow-trend-up' : tone === 'loss' ? 'arrow-trend-down' : 'minus';
        return (h(Host, { key: '831b5531c4c6c962c0426f0f3efee7a38c503009' }, h("wa-tooltip", { key: 'e54ee32335ad9478c2b8984d980ec48c1b575558', for: `dp-effect-callout-${this.booking?.booking_nbr}` }, "The dynamic pricing effect is calculated at the time the booking is created and remains fixed thereafter, serving as an indicator of the additional profit generated or of the incentive price reduction."), h("wa-callout", { key: '87d102da946c44f65a016a9aa50853318716590b', id: `dp-effect-callout-${this.booking?.booking_nbr}`, class: `dp-effect-callout --${tone}`, variant: calloutVariant, size: "small" }, h("wa-icon", { key: '49f5e1d6ac05a9a19b0be044f94d7b624c1760ac', class: "dp-effect-icon", slot: "icon", name: "wand-magic-sparkles" }), h("div", { key: 'ea01a9b5dbf1ab12531afa8c666d0b343f9aad56', class: "booking-dp-effect" }, h("p", { key: '4ff1d5b915b2af05dea850ca9dac09924eea30b9', class: "booking-dp-effect__label" }, "Dynamic pricing ", isOptimReadOnly() ? 'lost profit' : 'effect'), h("p", { key: '0554dffc18312f259c6ba66111a61246fd74675a', class: `booking-dp-effect__value --${tone}` }, h("span", { key: '5bba6919545827b263b113d317620fe6cc944ddd' }, formatAmount(calendar_data.property.currency.symbol, this.displayedValue)), h("wa-icon", { key: 'd57bc39ae8520977214a40ed7a7ce5039b87ea40', class: "booking-dp-effect__trend-icon", name: trendIcon }))))));
    }
    static get is() { return "ir-payment-analytics"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-payment-analytics.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-payment-analytics.css"]
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
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
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
    static get states() {
        return {
            "displayedValue": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "booking",
                "methodName": "onBookingChange"
            }];
    }
}
