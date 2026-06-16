import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const irMetricCardCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{--ir-metric-card-padding:var(--wa-space-m);--ir-metric-card-gap:var(--wa-space-2xs, 0.25rem);--ir-metric-card-radius:var(--wa-border-radius-l, 0.75rem);--ir-metric-card-bg:var(--wa-color-surface-default, #ffffff);--ir-metric-card-border:var(--wa-color-surface-border, #e2e8f0);--ir-metric-card-value-size:var(--wa-font-size-2xl, 1.5rem);--ir-metric-card-accent:var(--wa-color-neutral-fill-loud, #64748b);--ir-metric-card-accent-quiet:var(--wa-color-neutral-fill-quiet, #f1f5f9);--ir-metric-card-accent-on-quiet:var(--wa-color-neutral-on-quiet, #475569);display:block}:host([intent='brand']){--ir-metric-card-accent:var(--wa-color-brand-fill-loud);--ir-metric-card-accent-quiet:var(--wa-color-brand-fill-quiet);--ir-metric-card-accent-on-quiet:var(--wa-color-brand-on-quiet)}:host([intent='success']){--ir-metric-card-accent:var(--wa-color-success-fill-loud);--ir-metric-card-accent-quiet:var(--wa-color-success-fill-quiet);--ir-metric-card-accent-on-quiet:var(--wa-color-success-on-quiet)}:host([intent='warning']){--ir-metric-card-accent:var(--wa-color-warning-fill-loud);--ir-metric-card-accent-quiet:var(--wa-color-warning-fill-quiet);--ir-metric-card-accent-on-quiet:var(--wa-color-warning-on-quiet)}:host([intent='danger']){--ir-metric-card-accent:var(--wa-color-danger-fill-loud);--ir-metric-card-accent-quiet:var(--wa-color-danger-fill-quiet);--ir-metric-card-accent-on-quiet:var(--wa-color-danger-on-quiet)}:host([size='medium']){--ir-metric-card-padding:var(--wa-space-l);--ir-metric-card-value-size:var(--wa-font-size-3xl, 1.875rem)}.metric{position:relative;display:flex;flex-direction:column;gap:var(--ir-metric-card-gap);height:100%;padding:var(--ir-metric-card-padding);background-color:var(--ir-metric-card-bg);border:1px solid var(--ir-metric-card-border);border-radius:var(--ir-metric-card-radius);overflow:hidden}.metric::before{content:'';position:absolute;inset-block:0;inset-inline-start:0;width:3px;background-color:var(--ir-metric-card-accent);opacity:0.9}.metric__header{display:flex;align-items:center;gap:var(--wa-space-xs, 0.5rem);min-width:0}.metric__icon{display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;width:1.75rem;height:1.75rem;border-radius:var(--wa-border-radius-m, 0.5rem);color:var(--ir-metric-card-accent);background-color:var(--ir-metric-card-accent-quiet);font-size:var(--wa-font-size-s, 0.875rem)}.metric__icon:empty{display:none}.metric__label{min-width:0;font-size:var(--wa-font-size-xs, 0.75rem);font-weight:var(--wa-font-weight-semibold, 600);letter-spacing:0.02em;text-transform:uppercase;color:var(--wa-color-text-quiet, #64748b);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.metric__main{display:flex;flex-direction:column;gap:0.125rem}.metric__value{display:flex;align-items:baseline;flex-wrap:wrap;gap:var(--wa-space-xs, 0.5rem);line-height:var(--wa-line-height-condensed, 1.2)}.metric__value-number{font-family:var(--wa-font-family-heading, inherit);font-size:var(--ir-metric-card-value-size);font-weight:var(--wa-font-weight-bold, 700);font-variant-numeric:tabular-nums;color:var(--wa-color-text-normal, #0f172a)}.metric__unit{font-size:var(--wa-font-size-s, 0.875rem);font-weight:var(--wa-font-weight-normal, 400);color:var(--wa-color-text-quiet, #64748b)}.metric__caption{font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-text-quiet, #64748b)}.metric__trend{display:inline-flex;align-items:center;gap:0.2rem;margin-inline-start:auto;padding:0.05rem 0.4rem;font-size:var(--wa-font-size-xs, 0.75rem);font-weight:var(--wa-font-weight-semibold, 600);font-variant-numeric:tabular-nums;line-height:1.4;border-radius:var(--wa-border-radius-pill, 9999px);white-space:nowrap}.metric__trend--positive{color:var(--wa-color-success-on-quiet, #166534);background-color:var(--wa-color-success-fill-quiet, #dcfce7)}.metric__trend--negative{color:var(--wa-color-danger-on-quiet, #991b1b);background-color:var(--wa-color-danger-fill-quiet, #fee2e2)}.metric__trend--flat{color:var(--wa-color-neutral-on-quiet, #475569);background-color:var(--wa-color-neutral-fill-quiet, #f1f5f9)}.metric__trend-label{font-weight:var(--wa-font-weight-normal, 400);opacity:0.85}.metric__body,.metric__footer{display:contents}.metric__skeleton{display:flex;flex-direction:column;gap:0.4rem}.metric__skeleton-bar{display:block;height:0.75rem;border-radius:var(--wa-border-radius-s, 0.25rem);background:linear-gradient(\n    90deg,\n    var(--wa-color-neutral-fill-quiet, #f1f5f9) 25%,\n    var(--wa-color-neutral-fill-normal, #e2e8f0) 37%,\n    var(--wa-color-neutral-fill-quiet, #f1f5f9) 63%\n  );background-size:400% 100%;animation:ir-metric-shimmer 1.4s ease infinite}.metric__skeleton-bar--value{width:60%;height:1.5rem}.metric__skeleton-bar--caption{width:40%}@keyframes ir-metric-shimmer{0%{background-position:100% 50%}100%{background-position:0 50%}}:host([clickable]){cursor:pointer}:host([clickable]) .metric{transition:transform var(--wa-transition-fast, 150ms) var(--wa-transition-easing, ease),\n    box-shadow var(--wa-transition-fast, 150ms) var(--wa-transition-easing, ease),\n    border-color var(--wa-transition-fast, 150ms) var(--wa-transition-easing, ease)}:host([clickable]:hover) .metric{transform:translateY(-2px);box-shadow:var(--wa-shadow-m, 0 4px 12px rgb(0 0 0 / 0.08));border-color:var(--ir-metric-card-accent)}:host([clickable]:focus){outline:none}:host([clickable]:focus-visible) .metric{outline:var(--wa-focus-ring, 2px solid var(--ir-metric-card-accent));outline-offset:var(--wa-focus-ring-offset, 2px)}@media (prefers-reduced-motion: reduce){:host([clickable]) .metric,.metric__skeleton-bar{transition:none;animation:none}:host([clickable]:hover) .metric{transform:none}}";
const IrMetricCardStyle0 = irMetricCardCss;

const IrMetricCard = /*@__PURE__*/ proxyCustomElement(class IrMetricCard extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.metricClick = createEvent(this, "metricClick", 7);
    }
    /** Metric label / title. */
    label;
    /** Primary metric value. Rendered with tabular figures. */
    value;
    /** Unit rendered after the value (e.g. `guests`, `%`, `nights`). */
    unit;
    /** Name of a `wa-icon` rendered in the leading icon chip. */
    icon;
    /** Accent color used for the icon chip, trend, and accent edge. */
    intent = 'neutral';
    /** Trend delta as a percentage. The sign selects the up/down arrow and color. */
    trend;
    /** Context text shown beside the trend (e.g. `vs last week`). */
    trendLabel;
    /** Flip trend color semantics so a decrease reads as positive (good). */
    invertTrend = false;
    /** Secondary descriptive line shown beneath the value. */
    caption;
    /** Render skeleton placeholders instead of content. */
    loading = false;
    /** Visual density. `small` is compact (default); `medium` enlarges the value and padding. */
    size = 'small';
    /** Make the whole card interactive: adds hover/focus affordance and emits `metricClick`. */
    clickable = false;
    /** Emitted when a clickable card is activated by click or keyboard (Enter / Space). */
    metricClick;
    handleActivate = () => {
        if (this.clickable && !this.loading) {
            this.metricClick.emit();
        }
    };
    handleKeyDown = (event) => {
        if (!this.clickable) {
            return;
        }
        if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
            event.preventDefault();
            this.handleActivate();
        }
    };
    get trendDirection() {
        if (this.trend === undefined || this.trend === null || Number.isNaN(this.trend) || this.trend === 0) {
            return 'flat';
        }
        return this.trend > 0 ? 'up' : 'down';
    }
    get trendIsPositive() {
        const rising = this.trendDirection === 'up';
        return this.invertTrend ? !rising : rising;
    }
    renderTrend() {
        if (this.trend === undefined || this.trend === null || Number.isNaN(this.trend)) {
            return null;
        }
        const direction = this.trendDirection;
        const tone = direction === 'flat' ? 'flat' : this.trendIsPositive ? 'positive' : 'negative';
        const iconName = direction === 'up' ? 'arrow-trend-up' : direction === 'down' ? 'arrow-trend-down' : 'minus';
        const magnitude = Math.abs(this.trend);
        const ariaLabel = `${direction === 'flat' ? 'no change' : direction} ${magnitude} percent`;
        return (h("span", { part: "trend", class: `metric__trend metric__trend--${tone}`, "aria-label": ariaLabel }, h("wa-icon", { name: iconName, "aria-hidden": "true" }), h("span", null, magnitude, "%"), this.trendLabel && h("span", { class: "metric__trend-label" }, this.trendLabel)));
    }
    renderIcon() {
        return (h("span", { part: "icon", class: "metric__icon" }, h("slot", { name: "icon" }, this.icon && h("wa-icon", { name: this.icon, "aria-hidden": "true" }))));
    }
    render() {
        const hasIcon = !!this.icon;
        const interactive = this.clickable && !this.loading;
        const ariaLabel = [this.label, this.value, this.unit].filter(Boolean).join(' ') || undefined;
        return (h(Host, { key: '931ba17010b21bfbf18c8184ec8a6d0f6095d86f', role: this.clickable ? 'button' : null, tabindex: interactive ? '0' : null, "aria-label": this.clickable ? ariaLabel : null, "aria-busy": this.loading ? 'true' : null, onClick: interactive ? this.handleActivate : undefined, onKeyDown: interactive ? this.handleKeyDown : undefined }, h("div", { key: 'b88c08dd4ce940cd8a860af6d679404ab2be023e', part: "base", class: "metric" }, (hasIcon || this.label) && (h("div", { key: '03b35d044d14651028851d99b785c9cb5accc968', part: "header", class: "metric__header" }, hasIcon && this.renderIcon(), h("span", { key: 'adf6aaa84e2e9e3826f5c676ec5514fd1888d42b', part: "label", class: "metric__label" }, h("slot", { key: 'b1375445a6b0818206698f5d7e671217c222125e', name: "label" }, this.label)))), this.loading ? (h("div", { class: "metric__skeleton" }, h("span", { class: "metric__skeleton-bar metric__skeleton-bar--value" }), h("span", { class: "metric__skeleton-bar metric__skeleton-bar--caption" }))) : (h("div", { class: "metric__main" }, h("div", { part: "value", class: "metric__value" }, h("slot", { name: "value" }, this.value !== undefined && this.value !== null && h("span", { class: "metric__value-number" }, this.value), this.unit && (h("span", { part: "unit", class: "metric__unit" }, this.unit))), this.renderTrend()), this.caption && (h("p", { part: "caption", class: "metric__caption" }, this.caption)))), h("div", { key: '8a659e320e087ec6acabd4c01b59481fb41b1e98', part: "body", class: "metric__body" }, h("slot", { key: '6d01aad0fd762c88b4722a23d6cbae6b24712650' })), h("div", { key: '8a8c4def413d560e60e336ddf16a4fe16c620adb', part: "footer", class: "metric__footer" }, h("slot", { key: 'ad89b2d8689e5485317d7fd3e27089a0bf243752', name: "footer" })))));
    }
    static get style() { return IrMetricCardStyle0; }
}, [1, "ir-metric-card", {
        "label": [1],
        "value": [8],
        "unit": [1],
        "icon": [1],
        "intent": [513],
        "trend": [2],
        "trendLabel": [1, "trend-label"],
        "invertTrend": [4, "invert-trend"],
        "caption": [1],
        "loading": [516],
        "size": [513],
        "clickable": [516]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-metric-card"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-metric-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrMetricCard);
            }
            break;
    } });
}

export { IrMetricCard as I, defineCustomElement as d };

//# sourceMappingURL=ir-metric-card2.js.map