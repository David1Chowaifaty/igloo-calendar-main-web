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
        return (h("aside", { key: 'e38740e4c85f65e7a8032b1139c450d64b10e0ef', class: "dp-promo", "data-beat": this.beat }, h("div", { key: 'e6cb8ee74bff9fc66dc52845747ac884abb2dfca', class: "dp-promo__intro" }, h("h2", { key: '7c7fdfaf28922b06a02f4403e76593fce45a282e', class: "dp-promo__title" }, tr('Lcz_LoginPromoDpTitle', 'Your rates should move when demand does.')), h("p", { key: '67bc35db5f309e9bb720055acf0c3f845f7d123a', class: "dp-promo__copy" }, tr('Lcz_LoginPromoDpCopy', "Dynamic Pricing watches what's coming, raises rates when demand climbs, and adds Incentives when dates run quiet."))), h("div", { key: 'cd3cbec0987ff6e717e21395cfe494fce51d5d80', class: "dp-promo__stage", "aria-hidden": "true" }, h("div", { key: 'edec5e03e9c205b472934561d1da042e770acb18', class: "dp-promo__steps" }, BEATS.map(beat => (h("span", { class: { 'dp-promo__step': true, 'is-active': beat === this.beat } }, steps[beat])))), h("div", { key: '08ef979c42cf1e795b0edf8e1d51515ea5659703', class: "dp-board-wrap" }, h("div", { key: '290b37710350589a266e101799da8c9037945b75', class: "dp-board" }, h("div", { key: '1f436768e5865903d9bf962de7423bc2c95fce2d', class: "dp-board__row dp-board__row--head" }, h("span", { key: '4073de5a80881d788bf7407ef1ec5068e7c0f7b2', class: "dp-board__label" }), this.week.map(day => (h("span", { class: "dp-board__day" }, formatDate(day, 'ddd D'))))), h("div", { key: '42264d28f63cf6cd9dc01994a80cf5c2cc337cb7', class: "dp-board__row dp-board__row--signals" }, h("span", { key: '5a0540a4afca22d4afd38fae21f64f03e6579cec', class: "dp-board__label" }, tr('Lcz_LoginPromoDpDemandSignals', 'Demand Signals')), SIGNALS.map((signal, index) => (h("span", { class: { 'dp-signal': true, [`dp-signal--${signal.tone}`]: true, 'is-on': this.reached('signals') }, style: { 'gridColumn': `${signal.first + 2} / ${signal.last + 3}`, '--dp-order': String(index) } }, h("wa-icon", { name: signal.icon, variant: "solid" }), h("span", { class: "dp-signal__label" }, tr(signal.key, signal.label)))))), h("div", { key: '1dc2e75da62269bd50821a0af6c8b79d7a3cfe1b', class: "dp-board__row dp-board__row--rates", style: { '--dp-from': String(rateLevel(BASE_RATE)) } }, h("span", { key: 'bf185bc3babcaa9803a999f9b620dabd1b9e3a99', class: "dp-board__label" }, tr('Lcz_LoginPromoDpNightlyRate', 'Nightly rate')), h("span", { key: '9df9356027f6053ce18130c2e3569350b45bcc31', class: "dp-board__fixed" }, tr('Lcz_LoginPromoDpFixedRate', 'Fixed rate'), " ", money(BASE_RATE)), WEEK.map((night, index) => this.renderRate(night, index))), h("div", { key: 'da08fbaa5cb3c1497a5966701420d44c39267d7e', class: "dp-board__row dp-board__row--occupancy" }, h("span", { key: 'f640162d9dff4f326c0b0724f2fb55724799e17b', class: "dp-board__label" }, tr('Lcz_LoginPromoDpOccupancy', 'Occupancy')), WEEK.map((night, index) => this.renderOccupancy(night, index))))), h("dl", { key: 'e902332939e1e54e1fdb9a674c022891486fe0f0', class: "dp-promo__stats" }, h("div", { key: 'fc27ea1985a358427df12ae52ebe61f0f1f1a0ac', class: "dp-stat" }, h("dt", { key: 'e8e1c08163229929e5f6a4a0f4bdc67bcecad87c', class: "dp-stat__label" }, tr('Lcz_LoginPromoDpExtraProfit', 'Extra Profit')), h("dd", { key: 'dd3aac046355c79ced2db06765acec2238b2258a', class: "dp-stat__value dp-stat__value--profit" }, "+", money(this.extraProfit))), h("div", { key: 'db1784e92be0aa2d898b6b072a6ee638f7feb0e4', class: "dp-stat" }, h("dt", { key: 'c7193a6ee9a7a1660c01401fd4b266467a975d11', class: "dp-stat__label" }, tr('Lcz_LoginPromoDpExtraBookings', 'Extra Bookings')), h("dd", { key: '4c22facbcd1f0a04cdb8c963b62768fc4314f0e5', class: "dp-stat__value" }, "+", formatCount(this.extraBookings))))), h("p", { key: '02eca33c7cbf90a17b30c45aea2a23db4b1e1ab4', class: "dp-promo__footer" }, tr('Lcz_LoginPromoDpPrompt', 'Not using Dynamic Pricing yet?'), ' ', h("a", { key: '2a4ead908eaf2bf54ea1c2cde231e6bfe2138239', class: "dp-promo__link", href: `mailto:${CONTACT_EMAIL}?subject=${subject}` }, tr('Lcz_LoginPromoDpCta', 'Contact igloorooms to enable it'), h("wa-icon", { key: 'd7f5b6a452fe75dfd900a9dd1f78ac1cf83d2a3d', class: "dp-promo__arrow", name: "arrow-right" })))));
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
