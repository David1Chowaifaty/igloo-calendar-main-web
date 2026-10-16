import { Host, h } from "@stencil/core";
import { Chart, registerables } from "chart.js";
import moment from "moment";
import dp_report, { onDpReportChange } from "../../../stores/dp_report.store";
import { formatAmount } from "../../../utils/utils";
import { formatDate } from "../../../utils/date/index";
import { t } from "../../../services/locale/t";
Chart.register(...registerables);
export class IrDpReportChart {
    el;
    chart;
    canvas;
    tooltipEl;
    disposeRows;
    disposeLoading;
    rows = [];
    componentDidLoad() {
        this.disposeRows = onDpReportChange('rows', () => this.refreshChart());
        this.disposeLoading = onDpReportChange('isLoading', () => this.refreshChart());
    }
    disconnectedCallback() {
        this.chart?.destroy();
        this.tooltipEl?.remove();
        this.tooltipEl = undefined;
        this.disposeRows?.();
        this.disposeLoading?.();
    }
    handleCanvasRef = (el) => {
        if (!el) {
            this.chart?.destroy();
            this.chart = undefined;
            this.canvas = undefined;
            this.tooltipEl?.remove();
            this.tooltipEl = undefined;
            return;
        }
        this.canvas = el;
        if (!this.chart) {
            this.createChart();
        }
    };
    getCssVar(name) {
        return getComputedStyle(this.el).getPropertyValue(name).trim();
    }
    getSortedRows() {
        return [...dp_report.rows].sort((a, b) => (a.date > b.date ? 1 : a.date < b.date ? -1 : 0));
    }
    formatDateLabel(date) {
        const m = moment(date, 'YYYY-MM-DD', true);
        return m.isValid() ? formatDate(m, 'MMM DD') : date;
    }
    /** Negative values (price reductions) are never plotted — the chart only shows gains. */
    clampProfit(value) {
        return value > 0 ? value : 0;
    }
    /**
     * Runs after the x-axis is laid out (so tick pixel positions are final). Shows a date
     * label only on the first bar of each date, and then only if it clears the previously
     * shown label by `MIN_LABEL_GAP_PX` — a pixel-based check that can't collide no matter
     * how the rows are distributed across the date range.
     */
    thinXAxisLabels = (scale) => {
        const MIN_LABEL_GAP_PX = 64;
        let lastShownPx = -Infinity;
        scale.ticks.forEach((tick, i) => {
            const rowIndex = tick.value;
            const row = this.rows[rowIndex];
            const isFirstOfDate = !!row && (rowIndex === 0 || this.rows[rowIndex - 1]?.date !== row.date);
            if (!isFirstOfDate) {
                tick.label = '';
                return;
            }
            const px = scale.getPixelForTick(i);
            if (px - lastShownPx < MIN_LABEL_GAP_PX) {
                tick.label = '';
                return;
            }
            lastShownPx = px;
            tick.label = this.formatDateLabel(row.date);
        });
    };
    buildDataset(rows) {
        const successColor = this.getCssVar('--wa-color-success-fill-loud');
        return {
            label: t('Lcz_GainReduction', { fallback: 'Gain / Reduction' }),
            data: rows.map(r => this.clampProfit(r.profit)),
            backgroundColor: successColor,
            hoverBackgroundColor: successColor,
            borderRadius: 3,
            barPercentage: 0.7,
        };
    }
    // chart.js's own `minBarLength` also inflates true-zero bars (it centers a minimum
    // sliver on the baseline whenever value === base), so it can't tell "negligible" apart
    // from "zero". This clamps rendered height per-frame, skipping rows whose value is 0.
    buildMinBarLengthPlugin(minPx = 10) {
        return {
            id: 'dpMinBarLength',
            beforeDatasetDraw: (_chart, args) => {
                for (let i = 0; i < args.meta.data.length; i++) {
                    const value = this.clampProfit(this.rows[i]?.profit ?? 0);
                    if (!value) {
                        continue;
                    }
                    const bar = args.meta.data[i];
                    const height = Math.abs(bar.base - bar.y);
                    if (height >= minPx) {
                        continue;
                    }
                    bar.y = bar.base - minPx;
                }
            },
        };
    }
    buildActiveBarHighlightPlugin() {
        return {
            id: 'dpActiveBarHighlight',
            beforeDatasetsDraw: chart => {
                const active = chart.getActiveElements();
                if (!active.length) {
                    return;
                }
                const { index } = active[0];
                const { ctx, chartArea, scales } = chart;
                const bandWidth = chartArea.width / this.rows.length;
                const centerX = scales.x.getPixelForValue(index);
                ctx.save();
                ctx.globalAlpha = 0.4;
                ctx.fillStyle = this.getCssVar('--wa-color-neutral-fill-quiet') || 'rgba(148, 163, 184, 0.15)';
                ctx.fillRect(centerX - bandWidth / 2, chartArea.top, bandWidth, chartArea.height);
                ctx.restore();
            },
        };
    }
    renderTooltipContent(container, row) {
        container.replaceChildren();
        const header = document.createElement('div');
        header.className = 'dp-chart-tooltip__header';
        if (row.raw.origin?.Icon) {
            const logo = document.createElement('img');
            logo.className = 'dp-chart-tooltip__logo';
            logo.src = row.raw.origin.Icon;
            logo.alt = row.raw.origin.Label ?? '';
            header.appendChild(logo);
        }
        const date = document.createElement('span');
        date.textContent = formatDate(row.date, 'MMM DD, YYYY');
        header.appendChild(date);
        const profit = this.clampProfit(row.profit);
        const effectRow = document.createElement('div');
        effectRow.className = 'dp-chart-tooltip__row';
        effectRow.append(`${t('Lcz_DynamicPricingEffect', { fallback: 'Dynamic Pricing Effect' })}: `);
        const effectValue = document.createElement('span');
        effectValue.className = 'dp-chart-tooltip__value dp-chart-tooltip__value--gain';
        effectValue.textContent = `+${formatAmount(row.currencySymbol, profit)}`;
        effectRow.appendChild(effectValue);
        const valueRow = document.createElement('div');
        valueRow.className = 'dp-chart-tooltip__row';
        valueRow.textContent = `${t('Lcz_TotalStayValue', { fallback: 'Total stay value:' })} ${formatAmount(row.currencySymbol, row.accommodationGross)}`;
        container.append(header, effectRow, valueRow);
    }
    handleTooltip = (context) => {
        const { chart, tooltip } = context;
        if (!this.tooltipEl) {
            this.tooltipEl = document.createElement('div');
            this.tooltipEl.className = 'dp-chart-tooltip';
            chart.canvas.parentNode?.appendChild(this.tooltipEl);
        }
        if (tooltip.opacity === 0) {
            this.tooltipEl.style.opacity = '0';
            return;
        }
        const dataIndex = tooltip.dataPoints?.[0]?.dataIndex;
        const row = dataIndex === undefined ? undefined : this.rows[dataIndex];
        if (!row) {
            this.tooltipEl.style.opacity = '0';
            return;
        }
        this.renderTooltipContent(this.tooltipEl, row);
        this.tooltipEl.style.opacity = '1';
        // The tooltip's anchor point (caretY) is the bar's tip: the top of a positive bar,
        // or the bottom of a negative one. Placing it "above" the anchor only clears the bar
        // when the tip is the bar's highest point, so flip below whenever the tip sits below
        // the zero baseline (i.e. the bar itself extends downward from it).
        const zeroY = chart.scales.y.getPixelForValue(0);
        this.tooltipEl.classList.toggle('dp-chart-tooltip--below', tooltip.caretY > zeroY);
        const idealCenterX = chart.canvas.offsetLeft + tooltip.caretX;
        const tooltipWidth = this.tooltipEl.offsetWidth;
        const minLeft = chart.canvas.offsetLeft;
        const maxLeft = chart.canvas.offsetLeft + chart.canvas.offsetWidth - tooltipWidth;
        const left = Math.min(Math.max(idealCenterX - tooltipWidth / 2, minLeft), maxLeft);
        const arrowLeft = Math.min(Math.max(idealCenterX - left, 12), tooltipWidth - 12);
        this.tooltipEl.style.left = `${left}px`;
        this.tooltipEl.style.top = `${chart.canvas.offsetTop + tooltip.caretY}px`;
        this.tooltipEl.style.setProperty('--dp-tooltip-arrow-left', `${arrowLeft}px`);
    };
    createChart() {
        if (!this.canvas) {
            return;
        }
        this.rows = this.getSortedRows();
        const borderColor = this.getCssVar('--wa-color-surface-border');
        const textColor = this.getCssVar('--wa-color-text-normal');
        this.chart = new Chart(this.canvas, {
            type: 'bar',
            data: {
                labels: this.rows.map(r => this.formatDateLabel(r.date)),
                datasets: [this.buildDataset(this.rows)],
            },
            plugins: [this.buildActiveBarHighlightPlugin(), this.buildMinBarLengthPlugin()],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: { mode: 'index', intersect: false },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        enabled: false,
                        external: this.handleTooltip,
                    },
                },
                scales: {
                    x: {
                        grid: { display: false },
                        afterFit: this.thinXAxisLabels,
                        ticks: {
                            color: textColor,
                            autoSkip: false,
                            maxRotation: 0,
                            minRotation: 0,
                        },
                    },
                    y: {
                        beginAtZero: true,
                        min: 0,
                        grid: { color: borderColor },
                        ticks: { color: textColor },
                    },
                },
            },
        });
    }
    refreshChart() {
        if (!this.chart) {
            return;
        }
        this.rows = this.getSortedRows();
        const dataset = this.buildDataset(this.rows);
        this.chart.data.labels = this.rows.map(r => this.formatDateLabel(r.date));
        this.chart.data.datasets[0].data = dataset.data;
        this.chart.data.datasets[0].backgroundColor = dataset.backgroundColor;
        this.chart.data.datasets[0].hoverBackgroundColor = dataset.hoverBackgroundColor;
        this.chart.update();
    }
    render() {
        if (dp_report.isLoading) {
            return (h(Host, null, h("div", { class: "dp-chart__loading" }, h("ir-spinner", null))));
        }
        if (dp_report.rows.length === 0) {
            return (h(Host, null, h("div", { class: "dp-chart-container dp-chart-container--empty" }, h("ir-empty-state", { message: t('Lcz_NoDynamicPricingData', { fallback: 'No dynamic pricing data for this date range.' }) }))));
        }
        return (h(Host, null, h("div", { class: "dp-chart-container" }, h("canvas", { ref: this.handleCanvasRef }))));
    }
    static get is() { return "ir-dp-report-chart"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-dp-report-chart.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-dp-report-chart.css"]
        };
    }
    static get elementRef() { return "el"; }
}
