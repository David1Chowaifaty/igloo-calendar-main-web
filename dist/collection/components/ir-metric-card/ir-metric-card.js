import { Host, h } from "@stencil/core";
import { formatNumber, formatPercent } from "../../utils/number";
import { t } from "../../services/locale/t";
/**
 * A compact, themeable KPI / metric card. Displays a label, a primary value with an
 * optional unit, an optional leading icon, a trend delta, a caption, and arbitrary
 * slotted body content. Fully styleable via CSS parts and custom properties.
 *
 * @part base - The outer card container.
 * @part header - Row holding the icon and label.
 * @part icon - The leading icon chip.
 * @part label - The metric label text.
 * @part value - Row holding the primary value and unit.
 * @part unit - The unit text rendered after the value.
 * @part trend - The trend (delta) indicator.
 * @part caption - The secondary caption line.
 * @part body - Wrapper around the default slot.
 * @part footer - Wrapper around the footer slot.
 *
 * @slot - Default slot for custom body content below the value.
 * @slot icon - Overrides the leading icon.
 * @slot label - Overrides the label markup.
 * @slot value - Overrides the value display.
 * @slot footer - Footer / actions row.
 */
export class IrMetricCard {
    /** Metric label / title. */
    label;
    /** Primary metric value. Rendered with tabular figures. */
    value;
    /** Unit rendered after the value (e.g. `guests`, `%`, `nights`). */
    unit;
    /** Name of a `wa-icon` rendered in the leading icon chip. */
    icon;
    /** Trend delta. Sign selects the up/down arrow and color. Rendered as `{trend}%` unless `trendValue` is given. */
    trend;
    /** Preformatted text to render in place of `{trend}%` (e.g. a currency amount), while `trend`'s sign still drives the icon/color. */
    trendValue;
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
        const displayValue = this.trendValue ?? formatPercent(magnitude);
        const directionLabel = direction === 'up' ? t('Lcz_TrendUp', { fallback: 'up' }) : direction === 'down' ? t('Lcz_TrendDown', { fallback: 'down' }) : t('Lcz_NoChange', { fallback: 'no change' });
        const ariaLabel = `${directionLabel} ${this.trendValue ?? `${formatNumber(magnitude)} ${t('Lcz_Percent', { fallback: 'percent' })}`}`;
        return (h("span", { part: "trend", class: `metric__trend metric__trend--${tone}`, "aria-label": ariaLabel }, h("wa-icon", { name: iconName, "aria-hidden": "true" }), h("span", null, displayValue), this.trendLabel && h("span", { class: "metric__trend-label" }, this.trendLabel)));
    }
    renderIcon() {
        return (h("span", { part: "icon", class: "metric__icon" }, h("slot", { name: "icon" }, this.icon && h("wa-icon", { name: this.icon, "aria-hidden": "true" }))));
    }
    render() {
        const hasIcon = !!this.icon;
        const interactive = this.clickable && !this.loading;
        const ariaLabel = [this.label, this.value, this.unit].filter(Boolean).join(' ') || undefined;
        return (h(Host, { key: '2eac4156cf6c759f991dab9418e2651b94900eb1', role: this.clickable ? 'button' : null, tabindex: interactive ? '0' : null, "aria-label": this.clickable ? ariaLabel : null, "aria-busy": this.loading ? 'true' : null, onClick: interactive ? this.handleActivate : undefined, onKeyDown: interactive ? this.handleKeyDown : undefined }, h("div", { key: 'aee441c8eefcc37c272b42a165969f57761c06d5', part: "base", class: "metric" }, (hasIcon || this.label) && (h("div", { key: '52544bcdf1ed1e5ab87858f787bd484f8d0f0928', part: "header", class: "metric__header" }, hasIcon && this.renderIcon(), h("span", { key: 'f8aa6ae3378293a940dde7a7f1c17425f0b91623', part: "label", class: "metric__label" }, h("slot", { key: '024809ee8eca6a4d3d57bb886f76e8c25e485db0', name: "label" }, this.label)))), this.loading ? (h("div", { class: "metric__skeleton" }, h("span", { class: "metric__skeleton-bar metric__skeleton-bar--value" }), h("span", { class: "metric__skeleton-bar metric__skeleton-bar--caption" }))) : (h("div", { class: "metric__main" }, h("div", { part: "value", class: "metric__value" }, h("slot", { name: "value" }, this.value !== undefined && this.value !== null && (h("span", { class: "metric__value-number" }, typeof this.value === 'number' ? formatNumber(this.value) : this.value)), this.unit && (h("span", { part: "unit", class: "metric__unit" }, this.unit))), this.renderTrend()), this.caption && (h("p", { part: "caption", class: "metric__caption" }, this.caption)))), h("div", { key: '30681ef8bebb61594a092eb5a8d6ee9566e135bc', part: "body", class: "metric__body" }, h("slot", { key: '6b03e286fdf7d1fd54cae22ded029f9b3cf12a1e' })), h("div", { key: 'f5496449e16b237f6fdc9e907f2f2fd7bf2ebaaf', part: "footer", class: "metric__footer" }, h("slot", { key: 'db3fc0638dc7bb5fbc1204ef11122ee706c0bdfb', name: "footer" })))));
    }
    static get is() { return "ir-metric-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-metric-card.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-metric-card.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Metric label / title."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "value": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "string | number",
                    "resolved": "number | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Primary metric value. Rendered with tabular figures."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value"
            },
            "unit": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Unit rendered after the value (e.g. `guests`, `%`, `nights`)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "unit"
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Name of a `wa-icon` rendered in the leading icon chip."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon"
            },
            "trend": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Trend delta. Sign selects the up/down arrow and color. Rendered as `{trend}%` unless `trendValue` is given."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "trend"
            },
            "trendValue": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Preformatted text to render in place of `{trend}%` (e.g. a currency amount), while `trend`'s sign still drives the icon/color."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "trend-value"
            },
            "trendLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Context text shown beside the trend (e.g. `vs last week`)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "trend-label"
            },
            "invertTrend": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Flip trend color semantics so a decrease reads as positive (good)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "invert-trend",
                "defaultValue": "false"
            },
            "caption": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Secondary descriptive line shown beneath the value."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "caption"
            },
            "loading": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Render skeleton placeholders instead of content."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "loading",
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "MetricSize",
                    "resolved": "\"m\" | \"s\"",
                    "references": {
                        "MetricSize": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-metric-card/ir-metric-card.tsx",
                            "id": "src/components/ir-metric-card/ir-metric-card.tsx::MetricSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Visual density. `small` is compact (default); `medium` enlarges the value and padding."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "size",
                "defaultValue": "'s'"
            },
            "clickable": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Make the whole card interactive: adds hover/focus affordance and emits `metricClick`."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "clickable",
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "metricClick",
                "name": "metricClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a clickable card is activated by click or keyboard (Enter / Space)."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
