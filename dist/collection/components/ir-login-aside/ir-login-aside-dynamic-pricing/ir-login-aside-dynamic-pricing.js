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
        return (h("aside", { key: 'd8199b6bb35ba8f89fd084b4042446ae5cf793d4', class: "dp-promo", "data-beat": this.beat }, h("div", { key: '1fc452c074640e21086e21a841607a6d165b9438', class: "dp-promo__intro" }, h("h2", { key: 'ec6795424ed26e53730ab2ec931e1f27dfccf774', class: "dp-promo__title" }, tr('Lcz_LoginPromoDpTitle', 'Your rates should move when demand does.')), h("p", { key: '68ada40eb0b617f13bf463982575ebc278066200', class: "dp-promo__copy" }, tr('Lcz_LoginPromoDpCopy', "Dynamic Pricing watches what's coming, raises rates when demand climbs, and adds Incentives when dates run quiet."))), h("div", { key: '2b6d803a37d2bbf38d3fa8d34463fb453f36c80e', class: "dp-promo__stage", "aria-hidden": "true" }, h("div", { key: 'babeca2212f1bf4634731346a1363b5622674b75', class: "dp-promo__steps" }, BEATS.map(beat => (h("span", { class: { 'dp-promo__step': true, 'is-active': beat === this.beat } }, steps[beat])))), h("div", { key: '986c6cb56b8d40a8f76aff171e2afd058d07d66e', class: "dp-board-wrap" }, h("div", { key: '0f388de158d877a384eebc193adb9391486818b1', class: "dp-board" }, h("div", { key: 'ebc222225d1c843bd7e1c2f770f3a42bfc54d82b', class: "dp-board__row dp-board__row--head" }, h("span", { key: '0659d3a061f4f70d0087f4a51febdcc0d8580558', class: "dp-board__label" }), this.week.map(day => (h("span", { class: "dp-board__day" }, formatDate(day, 'ddd D'))))), h("div", { key: '92e25c5e640ce534c5550377cc680b6a287a4682', class: "dp-board__row dp-board__row--signals" }, h("span", { key: '4e3f01ea6547b6ecbab1c54d3213833a2a475d07', class: "dp-board__label" }, tr('Lcz_LoginPromoDpDemandSignals', 'Demand Signals')), SIGNALS.map((signal, index) => (h("span", { class: { 'dp-signal': true, [`dp-signal--${signal.tone}`]: true, 'is-on': this.reached('signals') }, style: { 'gridColumn': `${signal.first + 2} / ${signal.last + 3}`, '--dp-order': String(index) } }, h("wa-icon", { name: signal.icon, variant: "solid" }), h("span", { class: "dp-signal__label" }, tr(signal.key, signal.label)))))), h("div", { key: '4c860fc55d8309e30aee58ac96c262821b4b5319', class: "dp-board__row dp-board__row--rates", style: { '--dp-from': String(rateLevel(BASE_RATE)) } }, h("span", { key: '8e0d1c9a499ba74723b959586aa1ecf3da570a4d', class: "dp-board__label" }, tr('Lcz_LoginPromoDpNightlyRate', 'Nightly rate')), h("span", { key: '588d63dad4809ffe5ca2f7b43347bd45adea1920', class: "dp-board__fixed" }, tr('Lcz_LoginPromoDpFixedRate', 'Fixed rate'), " ", money(BASE_RATE)), WEEK.map((night, index) => this.renderRate(night, index))), h("div", { key: '937d1c762a308700e4a1fe47ee23ecf3cf1aceb0', class: "dp-board__row dp-board__row--occupancy" }, h("span", { key: 'a206a609ac0b1f4c1f8c5ee311dfa9e59f4abd96', class: "dp-board__label" }, tr('Lcz_LoginPromoDpOccupancy', 'Occupancy')), WEEK.map((night, index) => this.renderOccupancy(night, index))))), h("dl", { key: 'cc6ed8582bda798e23f16dc312e03b369c7a67d7', class: "dp-promo__stats" }, h("div", { key: '84fc1acd5a28ec6ebe0533c1f5c94566792589bd', class: "dp-stat" }, h("dt", { key: 'f933df4f8803637d52f310a65ba56ea0f0939ce2', class: "dp-stat__label" }, tr('Lcz_LoginPromoDpExtraProfit', 'Extra Profit')), h("dd", { key: '07060efd76c6e3136593d3f7481738266ec181f5', class: "dp-stat__value dp-stat__value--profit" }, "+", money(this.extraProfit))), h("div", { key: '244a0db21cda7ea0c2c89deed019583a26b84813', class: "dp-stat" }, h("dt", { key: '99206f965d3cd41c68d2243707ca3fb0c6af0922', class: "dp-stat__label" }, tr('Lcz_LoginPromoDpExtraBookings', 'Extra Bookings')), h("dd", { key: '7ec0b93bc1adaf0c6faba48ccb0cbd9078bc0538', class: "dp-stat__value" }, "+", formatCount(this.extraBookings))))), h("p", { key: '9650da53cba9d1ad17a989a65c6b9b2a60696ed1', class: "dp-promo__footer" }, tr('Lcz_LoginPromoDpPrompt', 'Not using Dynamic Pricing yet?'), ' ', h("a", { key: '3725744b1ccf30dd70a73c81222f8d7ad09398b9', class: "dp-promo__link", href: `mailto:${CONTACT_EMAIL}?subject=${subject}` }, tr('Lcz_LoginPromoDpCta', 'Contact igloorooms to enable it'), h("wa-icon", { key: '9942310bdefe1128cf303fffcfcd8d716bcf3b38', class: "dp-promo__arrow", name: "arrow-right" })))));
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
