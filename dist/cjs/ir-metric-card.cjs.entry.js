'use strict';

var index = require('./index-DYQrLNin.js');

const irMetricCardCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{--ir-metric-card-padding:var(--wa-space-m);--ir-metric-card-gap:var(--wa-space-2xs, 0.25rem);--ir-metric-card-radius:var(--wa-border-radius-l, 0.75rem);--ir-metric-card-bg:var(--wa-color-surface-default, #ffffff);--ir-metric-card-border:var(--wa-color-surface-border, #e2e8f0);--ir-metric-card-value-size:var(--wa-font-size-l, 1.25rem);--ir-metric-card-accent:var(--wa-color-neutral-fill-loud, #64748b);--ir-metric-card-accent-quiet:var(--wa-color-neutral-fill-quiet, #f1f5f9);--ir-metric-card-accent-on-quiet:var(--wa-color-neutral-on-quiet, #475569);display:block}:host([size='m']){--ir-metric-card-padding:var(--wa-space-l);--ir-metric-card-value-size:var(--wa-font-size-xl, 1.5rem)}.metric{position:relative;display:flex;flex-direction:column;gap:var(--ir-metric-card-gap);height:100%;padding:var(--ir-metric-card-padding);background-color:var(--ir-metric-card-bg);border:1px solid var(--ir-metric-card-border);border-radius:var(--ir-metric-card-radius);overflow:hidden}.metric__header{display:flex;align-items:center;gap:var(--wa-space-xs, 0.5rem);min-width:0}.metric__icon{display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;width:1.75rem;height:1.75rem;border-radius:var(--wa-border-radius-m, 0.5rem);color:var(--ir-metric-card-accent);background-color:var(--ir-metric-card-accent-quiet);font-size:var(--wa-font-size-s, 0.875rem)}.metric__icon:empty{display:none}.metric__label{min-width:0;font-size:var(--wa-font-size-xs, 0.75rem);font-weight:var(--wa-font-weight-semibold, 600);letter-spacing:0.02em;text-transform:capitalize;color:var(--wa-color-text-quiet, #64748b);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.metric__main{display:flex;flex-direction:column;gap:0.125rem}.metric__value{display:flex;align-items:baseline;flex-wrap:wrap;gap:var(--wa-space-xs, 0.5rem);line-height:var(--wa-line-height-condensed, 1.2)}.metric__value-number{font-family:var(--wa-font-family-heading, inherit);font-size:var(--ir-metric-card-value-size);font-weight:var(--wa-font-weight-bold, 700);font-variant-numeric:tabular-nums;color:var(--wa-color-text-normal, #0f172a)}.metric__unit{font-size:var(--wa-font-size-s, 0.875rem);font-weight:var(--wa-font-weight-normal, 400);color:var(--wa-color-text-quiet, #64748b)}.metric__caption{font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-text-quiet, #64748b)}.metric__trend{display:inline-flex;align-items:center;gap:0.2rem;margin-inline-start:auto;padding:0.05rem 0.4rem;font-size:var(--wa-font-size-xs, 0.75rem);font-weight:var(--wa-font-weight-semibold, 600);font-variant-numeric:tabular-nums;line-height:1.4;border-radius:var(--wa-border-radius-pill, 9999px);white-space:nowrap}.metric__trend--positive{color:var(--wa-color-success-on-quiet, #166534);background-color:var(--wa-color-success-fill-quiet, #dcfce7)}.metric__trend--negative{color:var(--wa-color-danger-on-quiet, #991b1b);background-color:var(--wa-color-danger-fill-quiet, #fee2e2)}.metric__trend--flat{color:var(--wa-color-neutral-on-quiet, #475569);background-color:var(--wa-color-neutral-fill-quiet, #f1f5f9)}.metric__trend-label{font-weight:var(--wa-font-weight-normal, 400);opacity:0.85}.metric__body,.metric__footer{display:contents}.metric__skeleton{display:flex;flex-direction:column;gap:0.4rem}.metric__skeleton-bar{display:block;height:0.75rem;border-radius:var(--wa-border-radius-s, 0.25rem);background:linear-gradient(     90deg,     var(--wa-color-neutral-fill-quiet, #f1f5f9) 25%,     var(--wa-color-neutral-fill-normal, #e2e8f0) 37%,     var(--wa-color-neutral-fill-quiet, #f1f5f9) 63%   );background-size:400% 100%;animation:ir-metric-shimmer 1.4s ease infinite}.metric__skeleton-bar--value{width:60%;height:1.5rem}.metric__skeleton-bar--caption{width:40%}@keyframes ir-metric-shimmer{0%{background-position:100% 50%}100%{background-position:0 50%}}:host([clickable]){cursor:pointer}:host([clickable]) .metric{transition:transform var(--wa-transition-fast, 150ms) var(--wa-transition-easing, ease),     box-shadow var(--wa-transition-fast, 150ms) var(--wa-transition-easing, ease),     border-color var(--wa-transition-fast, 150ms) var(--wa-transition-easing, ease)}:host([clickable]:hover) .metric{transform:translateY(-2px);box-shadow:var(--wa-shadow-m, 0 4px 12px rgb(0 0 0 / 0.08));border-color:var(--ir-metric-card-accent)}:host([clickable]:focus){outline:none}:host([clickable]:focus-visible) .metric{outline:var(--wa-focus-ring, 2px solid var(--ir-metric-card-accent));outline-offset:var(--wa-focus-ring-offset, 2px)}@media (prefers-reduced-motion: reduce){:host([clickable]) .metric,.metric__skeleton-bar{transition:none;animation:none}:host([clickable]:hover) .metric{transform:none}}`;

const IrMetricCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.metricClick = index.createEvent(this, "metricClick");
    }
    /** Metric label / title. */
    label;
    /** Primary metric value. Rendered with tabular figures. */
    value;
    /** Unit rendered after the value (e.g. `guests`, `%`, `nights`). */
    unit;
    /** Name of a `wa-icon` rendered in the leading icon chip. */
    icon;
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
    size = 's';
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
        return (index.h("span", { part: "trend", class: `metric__trend metric__trend--${tone}`, "aria-label": ariaLabel }, index.h("wa-icon", { name: iconName, "aria-hidden": "true" }), index.h("span", null, magnitude, "%"), this.trendLabel && index.h("span", { class: "metric__trend-label" }, this.trendLabel)));
    }
    renderIcon() {
        return (index.h("span", { part: "icon", class: "metric__icon" }, index.h("slot", { name: "icon" }, this.icon && index.h("wa-icon", { name: this.icon, "aria-hidden": "true" }))));
    }
    render() {
        const hasIcon = !!this.icon;
        const interactive = this.clickable && !this.loading;
        const ariaLabel = [this.label, this.value, this.unit].filter(Boolean).join(' ') || undefined;
        return (index.h(index.Host, { key: '718521dde1e2792be5faac7d8cd77974387b0f04', role: this.clickable ? 'button' : null, tabindex: interactive ? '0' : null, "aria-label": this.clickable ? ariaLabel : null, "aria-busy": this.loading ? 'true' : null, onClick: interactive ? this.handleActivate : undefined, onKeyDown: interactive ? this.handleKeyDown : undefined }, index.h("div", { key: 'eccfb4d71b2d094e9cc937f76790999c19c42bc3', part: "base", class: "metric" }, (hasIcon || this.label) && (index.h("div", { key: '70bff4de25d804e70ed27c8070924ef39a9ad619', part: "header", class: "metric__header" }, hasIcon && this.renderIcon(), index.h("span", { key: 'e613d8b9288ca6401903509639e5b9832fea5751', part: "label", class: "metric__label" }, index.h("slot", { key: '59e7b9f40e5ae2a271293de3f6753967209d8c2e', name: "label" }, this.label)))), this.loading ? (index.h("div", { class: "metric__skeleton" }, index.h("span", { class: "metric__skeleton-bar metric__skeleton-bar--value" }), index.h("span", { class: "metric__skeleton-bar metric__skeleton-bar--caption" }))) : (index.h("div", { class: "metric__main" }, index.h("div", { part: "value", class: "metric__value" }, index.h("slot", { name: "value" }, this.value !== undefined && this.value !== null && index.h("span", { class: "metric__value-number" }, this.value), this.unit && (index.h("span", { part: "unit", class: "metric__unit" }, this.unit))), this.renderTrend()), this.caption && (index.h("p", { part: "caption", class: "metric__caption" }, this.caption)))), index.h("div", { key: 'bb9ecb692a2f72bc501c34f1ebd260d96ed938e2', part: "body", class: "metric__body" }, index.h("slot", { key: '095da1fc329e885b06895b235efc67f53ed2a2bb' })), index.h("div", { key: 'ea0430e26daec0e5ad00804d40b88a8bdf411e76', part: "footer", class: "metric__footer" }, index.h("slot", { key: '602ab1452db0c3e92d522c2c2e439b9fde73d94b', name: "footer" })))));
    }
};
IrMetricCard.style = irMetricCardCss();

exports.ir_metric_card = IrMetricCard;
