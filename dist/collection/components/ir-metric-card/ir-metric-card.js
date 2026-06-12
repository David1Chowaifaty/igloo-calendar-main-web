import { Host, h } from "@stencil/core";
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
        return (h(Host, { key: '2998eb0cd48fe093360bf667d49224f12f411e05', role: this.clickable ? 'button' : null, tabindex: interactive ? '0' : null, "aria-label": this.clickable ? ariaLabel : null, "aria-busy": this.loading ? 'true' : null, onClick: interactive ? this.handleActivate : undefined, onKeyDown: interactive ? this.handleKeyDown : undefined }, h("div", { key: '16d6a2f91f73e96b4c48b63c92d3dc73d728dced', part: "base", class: "metric" }, (hasIcon || this.label) && (h("div", { key: '2a36778a99527c1e0789560114264a7226217faa', part: "header", class: "metric__header" }, hasIcon && this.renderIcon(), h("span", { key: '9243a9db1c9ab035886edcf84436a9ab935bdcc5', part: "label", class: "metric__label" }, h("slot", { key: 'f2ae3f609bafce837e729c4fc9e9a35b8c11c64e', name: "label" }, this.label)))), this.loading ? (h("div", { class: "metric__skeleton" }, h("span", { class: "metric__skeleton-bar metric__skeleton-bar--value" }), h("span", { class: "metric__skeleton-bar metric__skeleton-bar--caption" }))) : (h("div", { class: "metric__main" }, h("div", { part: "value", class: "metric__value" }, h("slot", { name: "value" }, this.value !== undefined && this.value !== null && h("span", { class: "metric__value-number" }, this.value), this.unit && (h("span", { part: "unit", class: "metric__unit" }, this.unit))), this.renderTrend()), this.caption && (h("p", { part: "caption", class: "metric__caption" }, this.caption)))), h("div", { key: '96304234fa2675ea359555122799d619d3417347', part: "body", class: "metric__body" }, h("slot", { key: '933064947ba911649a119d376a6949b599fea172' })), h("div", { key: 'fe5fd926fc07ab42357d1d6d7746065a1cfccb80', part: "footer", class: "metric__footer" }, h("slot", { key: '5209b8581d601387b10fd59bd310b7a56f80e75a', name: "footer" })))));
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
                "attribute": "label",
                "reflect": false
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
                "attribute": "value",
                "reflect": false
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
                "attribute": "unit",
                "reflect": false
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
                "attribute": "icon",
                "reflect": false
            },
            "intent": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "MetricIntent",
                    "resolved": "\"brand\" | \"danger\" | \"neutral\" | \"success\" | \"warning\"",
                    "references": {
                        "MetricIntent": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-metric-card/ir-metric-card.tsx",
                            "id": "src/components/ir-metric-card/ir-metric-card.tsx::MetricIntent"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Accent color used for the icon chip, trend, and accent edge."
                },
                "getter": false,
                "setter": false,
                "attribute": "intent",
                "reflect": true,
                "defaultValue": "'neutral'"
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
                    "text": "Trend delta as a percentage. The sign selects the up/down arrow and color."
                },
                "getter": false,
                "setter": false,
                "attribute": "trend",
                "reflect": false
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
                "attribute": "trend-label",
                "reflect": false
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
                "attribute": "invert-trend",
                "reflect": false,
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
                "attribute": "caption",
                "reflect": false
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
                "attribute": "loading",
                "reflect": true,
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "MetricSize",
                    "resolved": "\"medium\" | \"small\"",
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
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'small'"
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
                "attribute": "clickable",
                "reflect": true,
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
//# sourceMappingURL=ir-metric-card.js.map
