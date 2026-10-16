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
        return (h(Host, { key: 'ee77c740f354f70244e3f38990184537562585ee' }, h("wa-tooltip", { key: 'b9e63f992e08da9c843d5e18cf3f78cdee8e0897', for: `dp-effect-callout-${this.booking?.booking_nbr}` }, "The dynamic pricing effect is calculated at the time the booking is created and remains fixed thereafter, serving as an indicator of the additional profit generated or of the incentive price reduction."), h("wa-callout", { key: '5e4ae3127161138a28a05d914bd18c1529191c10', id: `dp-effect-callout-${this.booking?.booking_nbr}`, class: `dp-effect-callout --${tone}`, variant: calloutVariant, size: "s" }, h("wa-icon", { key: '97bdf69ea1709c3e93e845a7f5c5a0c30223fd93', class: "dp-effect-icon", slot: "icon", name: "wand-magic-sparkles" }), h("div", { key: 'da665a2b1cb65f7600fe221c7b67eb2206f93d6f', class: "booking-dp-effect" }, h("p", { key: 'ceecb0905484058800b7bbe81fa1ab2e3cec869e', class: "booking-dp-effect__label" }, "Dynamic pricing ", isOptimReadOnly() ? 'lost profit' : 'effect'), h("p", { key: '19c213535574efeed002c8a201590ff887a7205f', class: `booking-dp-effect__value --${tone}` }, h("span", { key: 'd28c4aa20e33d15ed03fe2133414da212d166790' }, formatAmount(calendar_data.property.currency.symbol, this.displayedValue)), h("wa-icon", { key: '94269df97d6daa43a2472b610cf36124e6290362', class: "booking-dp-effect__trend-icon", name: trendIcon }))))));
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
