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
        return (h(Host, { key: 'f138e057b3d7b260a83c73710557b6cc2b1e2ba1' }, h("wa-tooltip", { key: '5f5a24dcce007ceb482aaaf153d9575d90a02867', for: `dp-effect-callout-${this.booking?.booking_nbr}` }, t('Lcz_DynamicPricingEffectTooltip', {
            fallback: 'The dynamic pricing effect is calculated at the time the booking is created and remains fixed thereafter, serving as an indicator of the additional profit generated or of the incentive price reduction.',
        })), h("wa-callout", { key: '8c2b1d4491814876a6672cc28b083a63fac3548a', id: `dp-effect-callout-${this.booking?.booking_nbr}`, class: `dp-effect-callout --${tone}`, variant: calloutVariant, size: "s" }, h("wa-icon", { key: '63de8d73ca7d4649c0805033201a4a01add9e164', class: "dp-effect-icon", slot: "icon", name: "wand-magic-sparkles" }), h("div", { key: 'e53ecdeecbf3ed63319117370a832ab50b08b2da', class: "booking-dp-effect" }, h("p", { key: '93a16e4fcc79a6b2e4d960fc25dec1f441355dae', class: "booking-dp-effect__label" }, isOptimReadOnly()
            ? t('Lcz_DynamicPricingLostProfit', { fallback: 'Dynamic pricing lost profit' })
            : t('Lcz_DynamicPricingEffect', { fallback: 'Dynamic pricing effect' })), h("p", { key: '4ef5ed294ddf4bf09454e8711597294915ed66ca', class: `booking-dp-effect__value --${tone}` }, h("span", { key: 'e05c7d1c13bc4ae186d93d3bc20bc9c872e25878' }, formatAmount(calendar_data.property.currency.symbol, this.displayedValue)), h("wa-icon", { key: '4079e628cb7b8756be92051101cf6d99306e1aad', class: "booking-dp-effect__trend-icon", name: trendIcon }))))));
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
