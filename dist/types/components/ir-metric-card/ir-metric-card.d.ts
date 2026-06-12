import { EventEmitter } from '../../stencil-public-runtime';
export type MetricIntent = 'neutral' | 'brand' | 'success' | 'warning' | 'danger';
export type MetricSize = 'small' | 'medium';
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
export declare class IrMetricCard {
    /** Metric label / title. */
    label: string;
    /** Primary metric value. Rendered with tabular figures. */
    value: string | number;
    /** Unit rendered after the value (e.g. `guests`, `%`, `nights`). */
    unit: string;
    /** Name of a `wa-icon` rendered in the leading icon chip. */
    icon: string;
    /** Accent color used for the icon chip, trend, and accent edge. */
    intent: MetricIntent;
    /** Trend delta as a percentage. The sign selects the up/down arrow and color. */
    trend: number;
    /** Context text shown beside the trend (e.g. `vs last week`). */
    trendLabel: string;
    /** Flip trend color semantics so a decrease reads as positive (good). */
    invertTrend: boolean;
    /** Secondary descriptive line shown beneath the value. */
    caption: string;
    /** Render skeleton placeholders instead of content. */
    loading: boolean;
    /** Visual density. `small` is compact (default); `medium` enlarges the value and padding. */
    size: MetricSize;
    /** Make the whole card interactive: adds hover/focus affordance and emits `metricClick`. */
    clickable: boolean;
    /** Emitted when a clickable card is activated by click or keyboard (Enter / Space). */
    metricClick: EventEmitter<void>;
    private handleActivate;
    private handleKeyDown;
    private get trendDirection();
    private get trendIsPositive();
    private renderTrend;
    private renderIcon;
    render(): any;
}
