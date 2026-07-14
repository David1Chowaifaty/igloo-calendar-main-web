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
        return (h(Host, { key: 'f099d435192ada4ff1a89ac6984faf1f8c872701' }, h("wa-tooltip", { key: '281d69bb2c38fb009f9973db2d98b03800ec1ee4', for: `dp-effect-callout-${this.booking?.booking_nbr}` }, "The dynamic pricing effect is calculated at the time the booking is created and remains fixed thereafter, serving as an indicator of the additional profit generated or of the incentive price reduction."), h("wa-callout", { key: 'ffb0a81a9c9c043e718d143510085928c40c185a', id: `dp-effect-callout-${this.booking?.booking_nbr}`, class: `dp-effect-callout --${tone}`, variant: calloutVariant, size: "small" }, h("wa-icon", { key: '65bdd564eb42b0b4c685b41352767852d486157a', class: "dp-effect-icon", slot: "icon", name: "wand-magic-sparkles" }), h("div", { key: '6baffb4dba961e609e485ad12d10b8674c1826c4', class: "booking-dp-effect" }, h("p", { key: 'e20bea12bae51f94646cbbe93a73cba7ffc01529', class: "booking-dp-effect__label" }, "Dynamic pricing ", isOptimReadOnly() ? 'lost profit' : 'effect'), h("p", { key: '89ad7e72bedfc74c613c43c89fa8d4578f0ffa26', class: `booking-dp-effect__value --${tone}` }, h("span", { key: '54555f85b2576e1ee7a0479cc0279119c4eda782' }, formatAmount(calendar_data.property.currency.symbol, this.displayedValue)), h("wa-icon", { key: '853a0a301f98ee717ae4e367077d19c99d35b083', class: "booking-dp-effect__trend-icon", name: trendIcon }))))));
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
