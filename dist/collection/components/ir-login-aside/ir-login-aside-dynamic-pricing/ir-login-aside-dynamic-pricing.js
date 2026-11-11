import { h } from "@stencil/core";
import { formatDate } from "../../../utils/date/index";
import { formatCount, formatPercent } from "../../../utils/number";
import { BASE_RATE, BEATS, BEAT_MS, CONTACT_EMAIL, CURRENCY, EXTRA_BOOKINGS, EXTRA_PROFIT, ROOMS, SIGNALS, WEEK, nextBeat, rateLevel, upcomingWeek, } from "./dynamic-pricing-story";
const COUNT_MS = 1400;
const PAUSED_RETRY_MS = 1000;
/** Incentives move first, then the festival nights, so the eye sweeps across the week once. */
const RATE_ORDER = WEEK.map((night, index) => ({ night, index }))
    .filter(({ night }) => night.rate !== BASE_RATE)
    .sort((a, b) => a.night.rate - b.night.rate || a.index - b.index)
    .map(({ index }) => index);
const money = (amount) => `${CURRENCY}${formatCount(amount)}`;
const occupancy = (sold) => formatPercent((sold / ROOMS) * 100);
export class IrLoginAsideDynamicPricing {
    el;
    /**
     * Translated labels from the server, keyed by `Lcz_*`. Any key that's missing (or the whole
     * object, until it arrives) falls back to the built-in English text.
     */
    localeEntries = null;
    beat = 'fixed';
    extraProfit = 0;
    extraBookings = 0;
    beatTimeout;
    countFrame;
    week = upcomingWeek(new Date());
    tr = (key, fallback) => this.localeEntries?.[key] || fallback;
    connectedCallback() {
        if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
            // The payoff frame still tells the whole story, it just doesn't play
            this.beat = 'payoff';
            this.extraProfit = EXTRA_PROFIT;
            this.extraBookings = EXTRA_BOOKINGS;
            return;
        }
        this.schedule();
    }
    disconnectedCallback() {
        window.clearTimeout(this.beatTimeout);
        window.cancelAnimationFrame(this.countFrame);
    }
    schedule() {
        this.beatTimeout = window.setTimeout(this.advance, BEAT_MS[this.beat]);
    }
    advance = () => {
        // Don't play to nobody: a background tab, or the aside hidden on small screens
        if (document.hidden || !this.el.offsetWidth) {
            this.beatTimeout = window.setTimeout(this.advance, PAUSED_RETRY_MS);
            return;
        }
        this.beat = nextBeat(this.beat);
        if (this.beat === 'payoff') {
            this.countUp();
        }
        else if (this.beat === 'fixed') {
            this.extraProfit = 0;
            this.extraBookings = 0;
        }
        this.schedule();
    };
    countUp() {
        const start = performance.now();
        const tick = (now) => {
            const progress = Math.min((now - start) / COUNT_MS, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            this.extraProfit = Math.round(EXTRA_PROFIT * eased);
            this.extraBookings = Math.round(EXTRA_BOOKINGS * eased);
            if (progress < 1) {
                this.countFrame = window.requestAnimationFrame(tick);
            }
        };
        this.countFrame = window.requestAnimationFrame(tick);
    }
    reached(beat) {
        return BEATS.indexOf(this.beat) >= BEATS.indexOf(beat);
    }
    renderRate(night, index) {
        const up = night.rate > BASE_RATE;
        const down = night.rate < BASE_RATE;
        const moved = up || down;
        return (h("span", { class: { 'dp-rate': true, 'is-up': up, 'is-down': down, 'is-moved': moved && this.reached('rates') }, style: { '--dp-order': String(Math.max(RATE_ORDER.indexOf(index), 0)), '--dp-to': String(rateLevel(night.rate)) } }, h("span", { class: "dp-rate__bar" }, moved && h("span", { class: "dp-rate__tag" }, up ? `+${money(night.rate - BASE_RATE)}` : this.tr('Lcz_LoginPromoDpIncentive', 'Incentive'))), !down && h("span", { class: "dp-rate__base" }), h("span", { class: "dp-rate__price" }, moved ? (h("span", { class: "dp-swap" }, h("span", { class: "dp-swap__from dp-rate__value" }, money(BASE_RATE)), h("span", { class: "dp-swap__to dp-rate__value" }, money(night.rate)))) : (h("span", { class: "dp-rate__value" }, money(BASE_RATE))))));
    }
    renderOccupancy(night, index) {
        const changed = night.soldAfter !== night.soldBefore;
        const before = night.soldBefore / ROOMS;
        const after = night.soldAfter / ROOMS;
        return (h("span", { class: { 'dp-occ': true, 'is-up': night.rate > BASE_RATE, 'is-down': night.rate < BASE_RATE, 'is-moved': changed && this.reached('bookings') }, style: { '--dp-order': String(index), '--dp-from': String(before), '--dp-to': String(after) } }, changed ? (h("span", { class: "dp-swap dp-occ__label" }, h("span", { class: "dp-swap__from" }, occupancy(night.soldBefore)), h("span", { class: "dp-swap__to" }, occupancy(night.soldAfter)))) : (h("span", { class: "dp-occ__label" }, occupancy(night.soldBefore))), h("span", { class: "dp-occ__track" }, h("span", { class: "dp-occ__fill" }))));
    }
    render() {
        const tr = this.tr;
        const steps = {
            fixed: tr('Lcz_LoginPromoDpStepFixed', 'Every night, the same rate.'),
            signals: tr('Lcz_LoginPromoDpStepSignals', "Dynamic Pricing spots what's coming."),
            rates: tr('Lcz_LoginPromoDpStepRates', 'Rates adjust, night by night.'),
            bookings: tr('Lcz_LoginPromoDpStepBookings', 'Busy nights earn more. Quiet nights fill up.'),
            payoff: tr('Lcz_LoginPromoDpStepPayoff', 'Same week. More money.'),
        };
        const subject = encodeURIComponent(tr('Lcz_LoginPromoDpEmailSubject', 'Enable Dynamic Pricing'));
        return (h("aside", { key: '72ec2e5b23258fb02d3c3d0caa62ceba66e69d80', class: "dp-promo", "data-beat": this.beat }, h("div", { key: '974f346fdd87efc7c6e98253690f1114c1a6e7aa', class: "dp-promo__intro" }, h("h2", { key: '666e00efd27667457e4510956bb922bd60ffe362', class: "dp-promo__title" }, tr('Lcz_LoginPromoDpTitle', 'Your rates should move when demand does.')), h("p", { key: 'cbafa1c560b36372471d873f46c25465d87083d4', class: "dp-promo__copy" }, tr('Lcz_LoginPromoDpCopy', "Dynamic Pricing watches what's coming, raises rates when demand climbs, and adds Incentives when dates run quiet."))), h("div", { key: '811a3578f6827dfc7eedf78f2016863615ff2c13', class: "dp-promo__stage", "aria-hidden": "true" }, h("div", { key: '48af0bae5889e04b30d454f35569aa2e9ed07f2a', class: "dp-promo__steps" }, BEATS.map(beat => (h("span", { class: { 'dp-promo__step': true, 'is-active': beat === this.beat } }, steps[beat])))), h("div", { key: '86948b91429886eba8e02236d4492ca653ae857b', class: "dp-board-wrap" }, h("div", { key: '3cc71933724cd87ef77b2d136576ec463022751b', class: "dp-board" }, h("div", { key: '30036586e4bd01c3b73e03e0bc19e82be6e35db3', class: "dp-board__row dp-board__row--head" }, h("span", { key: 'c65764587aabe2a4144b29b1cf5592958b56ad67', class: "dp-board__label" }), this.week.map(day => (h("span", { class: "dp-board__day" }, formatDate(day, 'ddd D'))))), h("div", { key: 'f4054b3debbb6838d7890b54d019e469e0f18489', class: "dp-board__row dp-board__row--signals" }, h("span", { key: '86aa31afcc66220b7c0d6299444773dee84c2e95', class: "dp-board__label" }, tr('Lcz_LoginPromoDpDemandSignals', 'Demand Signals')), SIGNALS.map((signal, index) => (h("span", { class: { 'dp-signal': true, [`dp-signal--${signal.tone}`]: true, 'is-on': this.reached('signals') }, style: { 'gridColumn': `${signal.first + 2} / ${signal.last + 3}`, '--dp-order': String(index) } }, h("wa-icon", { name: signal.icon, variant: "solid" }), h("span", { class: "dp-signal__label" }, tr(signal.key, signal.label)))))), h("div", { key: 'f4fd8f8a5e739a582e807ed0d439c912ece6a5de', class: "dp-board__row dp-board__row--rates", style: { '--dp-from': String(rateLevel(BASE_RATE)) } }, h("span", { key: '80b0caf4d8fd3bae258fa68eee73179b167d5276', class: "dp-board__label" }, tr('Lcz_LoginPromoDpNightlyRate', 'Nightly rate')), h("span", { key: 'f857425079eec980857203ae90cdd6c78cffe8b1', class: "dp-board__fixed" }, tr('Lcz_LoginPromoDpFixedRate', 'Fixed rate'), " ", money(BASE_RATE)), WEEK.map((night, index) => this.renderRate(night, index))), h("div", { key: '07fa3209fac04b1520e7a4a27ee8ab1ac9aceb2b', class: "dp-board__row dp-board__row--occupancy" }, h("span", { key: '5891171fc169573981f78d46b77cbc1092b46e6e', class: "dp-board__label" }, tr('Lcz_LoginPromoDpOccupancy', 'Occupancy')), WEEK.map((night, index) => this.renderOccupancy(night, index))))), h("dl", { key: 'a22b32dcd8194d977d7c8660e7fb1013492472a3', class: "dp-promo__stats" }, h("div", { key: 'dee7c4e1bdf85264eb449cd1d20a0a6ca752c716', class: "dp-stat" }, h("dt", { key: '7aa2543477a7590cfcfd41502fdc23217846fdcf', class: "dp-stat__label" }, tr('Lcz_LoginPromoDpExtraProfit', 'Extra Profit')), h("dd", { key: '0d7a8744f482ce7d1fbdced4f1f6d1602da5c044', class: "dp-stat__value dp-stat__value--profit" }, "+", money(this.extraProfit))), h("div", { key: '796798c36d738753c616e579a3c462db0083b36a', class: "dp-stat" }, h("dt", { key: '62d4290df440a794e6c1ac90933520d940c3be4f', class: "dp-stat__label" }, tr('Lcz_LoginPromoDpExtraBookings', 'Extra Bookings')), h("dd", { key: '5d393e6a1635acb857375bb6adddc15af95a55ba', class: "dp-stat__value" }, "+", formatCount(this.extraBookings))))), h("p", { key: '6ca390d48d1e81729340cf20d38d34c4057bb316', class: "dp-promo__footer" }, tr('Lcz_LoginPromoDpPrompt', 'Not using Dynamic Pricing yet?'), ' ', h("a", { key: '7bf2b1e006eb24f53a1cec00491e27292ffe57aa', class: "dp-promo__link", href: `mailto:${CONTACT_EMAIL}?subject=${subject}` }, tr('Lcz_LoginPromoDpCta', 'Contact igloorooms to enable it'), h("wa-icon", { key: '1b134a7623a18c7cd229fa03f3e74cc1dc8b8f7c', class: "dp-promo__arrow", name: "arrow-right" })))));
    }
    static get is() { return "ir-login-aside-dynamic-pricing"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-login-aside-dynamic-pricing.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-login-aside-dynamic-pricing.css"]
        };
    }
    static get properties() {
        return {
            "localeEntries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TLocaleEntries | null",
                    "resolved": "{ [x: string]: string; }",
                    "references": {
                        "TLocaleEntries": {
                            "location": "import",
                            "path": "@/stores/locales.store",
                            "id": "src/stores/locales.store.ts::TLocaleEntries",
                            "referenceLocation": "TLocaleEntries"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Translated labels from the server, keyed by `Lcz_*`. Any key that's missing (or the whole\nobject, until it arrives) falls back to the built-in English text."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "beat": {},
            "extraProfit": {},
            "extraBookings": {}
        };
    }
    static get elementRef() { return "el"; }
}
