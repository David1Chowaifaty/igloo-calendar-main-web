import { h } from "@stencil/core";
import { STORY_MS } from "../ir-login-aside-dynamic-pricing/dynamic-pricing-story";
/** Keep in step with `aside-showcase-in` in the stylesheet. */
const CROSSFADE_MS = 420;
/** Long enough for the calendar's first two bookings to land (first at 1.6s, then every 5.2s). */
const CALENDAR_MS = 12000;
const SLIDES = [
    { id: 'calendar', labelKey: 'Lcz_LoginPromoSlideCalendar', label: 'One calendar', durationMs: CALENDAR_MS },
    // Leaves during the payoff, so the crossfade never catches the story resetting
    { id: 'dynamic-pricing', labelKey: 'Lcz_LoginPromoSlideDynamicPricing', label: 'Dynamic Pricing', durationMs: STORY_MS - CROSSFADE_MS },
];
export class IrLoginAsideShowcase {
    /** Server-provided `Lcz_*` translations, passed through to the slides. */
    localeEntries = null;
    /** Index into `SLIDES` of the slide on show. */
    active = 0;
    /** The slide fading out underneath the active one, while a switch is in progress. */
    leaving = null;
    /** How many times each slide has been shown. It keys the slide, so every showing is a fresh mount. */
    showings = SLIDES.map(() => 0);
    /** Half-turns of the loop icon: it only ever spins forward. */
    turns = 0;
    crossfadeTimeout;
    tr = (key, fallback) => this.localeEntries?.[key] || fallback;
    disconnectedCallback() {
        window.clearTimeout(this.crossfadeTimeout);
    }
    show(index) {
        if (index === this.active) {
            return;
        }
        window.clearTimeout(this.crossfadeTimeout);
        this.leaving = this.active;
        this.active = index;
        this.showings = this.showings.map((count, i) => (i === index ? count + 1 : count));
        this.crossfadeTimeout = window.setTimeout(() => (this.leaving = null), CROSSFADE_MS);
    }
    next = () => {
        this.show((this.active + 1) % SLIDES.length);
    };
    handleLoopClick = () => {
        this.turns++;
        this.next();
    };
    renderSlide(slide) {
        if (slide.id === 'calendar') {
            return h("ir-login-aside-calendar", { localeEntries: this.localeEntries });
        }
        return h("ir-login-aside-dynamic-pricing", { localeEntries: this.localeEntries });
    }
    render() {
        const tr = this.tr;
        const nextLabel = tr('Lcz_LoginPromoShowNext', 'Show next');
        return (h("section", { key: '91dd82c5883490efbef64437005e72f7ddaa2b08', class: "aside-showcase", "aria-roledescription": "carousel", "aria-label": tr('Lcz_LoginPromoShowcaseLabel', 'What igloorooms can do') }, h("div", { key: 'd3a3b0765318e88269981c606923632abfb55eb6', class: "aside-showcase__controls" }, SLIDES.map((slide, index) => {
            const label = tr(slide.labelKey, slide.label);
            return (h("button", { type: "button", class: "aside-showcase__segment", title: label, "aria-label": label, "aria-current": index === this.active ? 'true' : undefined, onClick: () => this.show(index) }, h("span", { class: "aside-showcase__track" }, index === this.active && h("span", { class: "aside-showcase__fill", style: { animationDuration: `${slide.durationMs}ms` }, onAnimationEnd: this.next }))));
        }), h("button", { key: '40a42a2adcd216b3594116902497b895dec192a5', type: "button", class: "aside-showcase__loop", title: nextLabel, "aria-label": nextLabel, onClick: this.handleLoopClick }, h("wa-icon", { key: '0b8258f73f492a78478a3ca48523cadd09b62da5', class: "aside-showcase__loop-icon", name: "arrows-rotate", style: { transform: `rotate(${this.turns * 180}deg)` } }))), h("div", { key: '3fef949d12f58445559c23fedf90cdc818f62579', class: "aside-showcase__stage" }, SLIDES.map((slide, index) => {
            const isActive = index === this.active;
            if (!isActive && index !== this.leaving) {
                return null;
            }
            return (h("div", { key: `${slide.id}-${this.showings[index]}`, class: { 'aside-showcase__slide': true, 'is-active': isActive, 'is-entering': isActive && this.leaving !== null }, inert: !isActive }, this.renderSlide(slide)));
        }))));
    }
    static get is() { return "ir-login-aside-showcase"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-login-aside-showcase.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-login-aside-showcase.css"]
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
                    "text": "Server-provided `Lcz_*` translations, passed through to the slides."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "active": {},
            "leaving": {},
            "showings": {},
            "turns": {}
        };
    }
}
