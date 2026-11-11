import { r as registerInstance, h } from './index-DKZeCK8T.js';
import { S as STORY_MS } from './dynamic-pricing-story-Br-0K3_Y.js';

const irLoginAsideImageCss = () => `ir-login-aside-image{display:block;height:100%}.login-aside-image{position:relative;box-sizing:border-box;width:100%;height:100%;min-height:100%;overflow:hidden;background:#1e293b}.login-aside-image__img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;display:block}`;

const IrLoginAsideImage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Image URL rendered as the aside background. */
    imageSrc;
    /** Alternative text. Leave empty when the image is purely decorative. */
    imageAlt = '';
    render() {
        return (h("aside", { key: '4edae27308127c5ff963031f0cd533fa45249d43', class: "login-aside-image" }, this.imageSrc && h("img", { key: '8e10aa2eaf690c632fe43033465a665865f77a0a', class: "login-aside-image__img", src: this.imageSrc, alt: this.imageAlt, "aria-hidden": this.imageAlt ? undefined : 'true', decoding: "async" })));
    }
};
IrLoginAsideImage.style = irLoginAsideImageCss();

const irLoginAsideShowcaseCss = () => `ir-login-aside-showcase{display:block;height:100%}.aside-showcase{position:relative;height:100%;overflow:hidden;background:#1e293b}.aside-showcase__stage{display:grid;grid-template-columns:minmax(0, 1fr);grid-template-rows:minmax(0, 1fr);height:100%}.aside-showcase__slide{grid-area:1 / 1;min-width:0;min-height:0}.aside-showcase__slide.is-active{z-index:1}.aside-showcase__slide.is-entering{animation:aside-showcase-in 420ms cubic-bezier(0.23, 1, 0.32, 1)}@keyframes aside-showcase-in{from{opacity:0}}.aside-showcase__controls{position:absolute;z-index:2;inset-block-start:0.75rem;inset-inline:3rem;display:flex;align-items:center;gap:0.4rem}.aside-showcase__segment{flex:1;display:flex;align-items:center;min-width:0;height:1.75rem;margin:0;padding:0;border:0;border-radius:4px;background:transparent;cursor:pointer}.aside-showcase__track{display:block;width:100%;height:3px;overflow:hidden;border-radius:2px;background:rgba(255, 255, 255, 0.22);transition:background-color 160ms ease}.aside-showcase__fill{display:block;height:100%;background:#fff;transform-origin:left center;animation:aside-showcase-fill linear forwards}[dir='rtl'] .aside-showcase__fill{transform-origin:right center}@keyframes aside-showcase-fill{from{transform:scaleX(0)}to{transform:scaleX(1)}}.aside-showcase:has(:focus-visible) .aside-showcase__fill{animation-play-state:paused}@media (hover: hover) and (pointer: fine){.aside-showcase:hover .aside-showcase__fill{animation-play-state:paused}.aside-showcase__segment:hover .aside-showcase__track{background:rgba(255, 255, 255, 0.4)}.aside-showcase__loop:hover{background:rgba(255, 255, 255, 0.12);color:#fff}}.aside-showcase__loop{flex:none;display:inline-flex;align-items:center;justify-content:center;width:1.75rem;height:1.75rem;margin:0;padding:0;border:0;border-radius:50%;background:transparent;color:#c3d7f3;font-size:0.75rem;cursor:pointer;transition:background-color 160ms ease,     color 160ms ease,     transform 160ms cubic-bezier(0.23, 1, 0.32, 1)}.aside-showcase__loop:active{transform:scale(0.94)}.aside-showcase__loop-icon{transition:transform 420ms cubic-bezier(0.23, 1, 0.32, 1)}.aside-showcase__segment:focus-visible,.aside-showcase__loop:focus-visible{outline:2px solid #fff;outline-offset:1px}@media (prefers-reduced-motion: reduce){.aside-showcase__slide.is-entering{animation:none}.aside-showcase__fill{animation:none}.aside-showcase__loop-icon{transition:none}}`;

/** Keep in step with `aside-showcase-in` in the stylesheet. */
const CROSSFADE_MS = 420;
/** Long enough for the calendar's first two bookings to land (first at 1.6s, then every 5.2s). */
const CALENDAR_MS = 12000;
const SLIDES = [
    { id: 'calendar', labelKey: 'Lcz_LoginPromoSlideCalendar', label: 'One calendar', durationMs: CALENDAR_MS },
    // Leaves during the payoff, so the crossfade never catches the story resetting
    { id: 'dynamic-pricing', labelKey: 'Lcz_LoginPromoSlideDynamicPricing', label: 'Dynamic Pricing', durationMs: STORY_MS - CROSSFADE_MS },
];
const IrLoginAsideShowcase = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
};
IrLoginAsideShowcase.style = irLoginAsideShowcaseCss();

export { IrLoginAsideImage as ir_login_aside_image, IrLoginAsideShowcase as ir_login_aside_showcase };
