import calendar_data, { isOptimReadOnly } from "../../../../stores/calendar-data";
import { formatAmount } from "../../../../utils/utils";
import { t } from "../../../../services/locale/t";
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
        return (h(Host, { key: 'bf8ced66e6be6d4cb0fd4d415f860a415a29df86' }, h("wa-tooltip", { key: '88a60a3dd3b10189b5f4a6e285f444587825bff7', for: `dp-effect-callout-${this.booking?.booking_nbr}` }, t('Lcz_DynamicPricingEffectTooltip', {
            fallback: 'The dynamic pricing effect is calculated at the time the booking is created and remains fixed thereafter, serving as an indicator of the additional profit generated or of the incentive price reduction.',
        })), h("wa-callout", { key: 'ffb4b2bff5591d88d868d7245e240b211aef281c', id: `dp-effect-callout-${this.booking?.booking_nbr}`, class: `dp-effect-callout --${tone}`, variant: calloutVariant, size: "s" }, h("wa-icon", { key: 'e4f98ec3e4b5ee424f9aececa1318fea1e4d35a2', class: "dp-effect-icon", slot: "icon", name: "wand-magic-sparkles" }), h("div", { key: 'cca6d7b726b1fc12a0da3b7cca3cbe40d018b3d2', class: "booking-dp-effect" }, h("p", { key: 'e0d71cedf5217b6c430c01d6076398740fb0cb3a', class: "booking-dp-effect__label" }, isOptimReadOnly()
            ? t('Lcz_DynamicPricingLostProfit', { fallback: 'Dynamic pricing lost profit' })
            : t('Lcz_DynamicPricingEffect', { fallback: 'Dynamic pricing effect' })), h("p", { key: '286137097219d4f50b74af9f5d720e48a79e758c', class: `booking-dp-effect__value --${tone}` }, h("span", { key: '01d8069f4ea8f1a3be3a3327e8366dfe8e1f1dec' }, formatAmount(calendar_data.property.currency.symbol, this.displayedValue)), h("wa-icon", { key: '6bed2afe7856372746b9737193209842acdeb32d', class: "booking-dp-effect__trend-icon", name: trendIcon }))))));
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
