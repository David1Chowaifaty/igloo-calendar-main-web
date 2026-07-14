import { r as registerInstance, d as getElement, h, H as Host, c as createEvent } from './index-Nexq2OjX.js';
import { C as Chart, r as registerables } from './chart-3KrsuFTS.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { o as onDpReportChange, d as dp_report, u as updateDpReportFilters, s as setDpReportTablePage, a as setDpReportTablePageSize } from './dp_report.store-dddXCD_w.js';
import { i as formatAmount } from './utils-CRe_zSvY.js';
import { c as createColumnHelper, u as useTable, f as flexRender, a as getCoreRowModel } from './useTable-D3LS_BXH.js';
import './index-BX-r5OtJ.js';
import './index-DeW5X45W.js';
import './calendar-data-CPCc-_Kx.js';
import './locales.store-flvFxs7J.js';
import './type-D7rOPtKA.js';

const irDpReportChartCss = () => `:host{display:block}.dp-chart-container{position:relative;height:22rem;width:100%;padding:1rem;box-sizing:border-box;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.75rem;background-color:var(--wa-color-surface-default, #fff)}.dp-chart-container--empty{display:flex;align-items:center;justify-content:center}.dp-chart__loading{display:flex;align-items:center;justify-content:center;height:22rem;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.75rem}.dp-chart-tooltip{position:absolute;top:0;left:0;transform:translateY(calc(-100% - 0.625rem));opacity:0;pointer-events:none;transition:opacity 0.1s ease;z-index:10;white-space:nowrap;background-color:var(--wa-color-surface-raised, #fff);border:1px solid var(--wa-color-surface-border, #e5e7eb);border-radius:0.5rem;box-shadow:var(--wa-shadow-m, 0 4px 12px rgba(0, 0, 0, 0.15));padding:0.5rem 0.75rem;font-size:0.75rem;color:var(--wa-color-text-normal, #1a1d2e)}.dp-chart-tooltip::after{content:'';position:absolute;left:var(--dp-tooltip-arrow-left, 50%);bottom:-0.375rem;width:0.75rem;height:0.75rem;background-color:inherit;border-right:1px solid var(--wa-color-surface-border, #e5e7eb);border-bottom:1px solid var(--wa-color-surface-border, #e5e7eb);transform:translateX(-50%) rotate(45deg)}.dp-chart-tooltip--below{transform:translateY(0.625rem)}.dp-chart-tooltip--below::after{top:-0.375rem;bottom:auto;border-right:none;border-bottom:none;border-left:1px solid var(--wa-color-surface-border, #e5e7eb);border-top:1px solid var(--wa-color-surface-border, #e5e7eb)}.dp-chart-tooltip__header{display:flex;align-items:center;gap:0.4rem;margin-bottom:0.375rem}.dp-chart-tooltip__logo{width:1.125rem;height:1.125rem;object-fit:contain;border-radius:0.25rem;flex-shrink:0}.dp-chart-tooltip__row{line-height:1.4;color:var(--wa-color-text-normal, #1a1d2e)}.dp-chart-tooltip__value--gain{color:var(--wa-color-success-fill-loud, #16a34a);font-weight:600}.dp-chart-tooltip__value--loss{color:var(--wa-color-danger-fill-loud, #dc2626);font-weight:600}`;

Chart.register(...registerables);
const IrDpReportChart = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
        const m = hooks(date, 'YYYY-MM-DD', true);
        return m.isValid() ? m.format('MMM DD') : date;
    }
    buildDataset(rows) {
        const successColor = this.getCssVar('--wa-color-success-fill-loud');
        const dangerColor = this.getCssVar('--wa-color-danger-fill-loud');
        const colors = rows.map(r => (r.profit >= 0 ? successColor : dangerColor));
        return {
            label: 'Gain / Reduction',
            data: rows.map(r => r.profit),
            backgroundColor: colors,
            hoverBackgroundColor: colors,
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
                    const value = this.rows[i]?.profit;
                    if (!value) {
                        continue;
                    }
                    const bar = args.meta.data[i];
                    const height = Math.abs(bar.base - bar.y);
                    if (height >= minPx) {
                        continue;
                    }
                    bar.y = bar.base + (value >= 0 ? -minPx : minPx);
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
        date.textContent = hooks(row.date).format('MMM DD, YYYY');
        header.appendChild(date);
        // const tone = row.profit >= 0 ? 'Gain' : 'Reduction';
        const sign = row.profit >= 0 ? '+' : '-';
        const effectRow = document.createElement('div');
        effectRow.className = 'dp-chart-tooltip__row';
        effectRow.append(`Dynamic pricing effect: `);
        const effectValue = document.createElement('span');
        effectValue.className = `dp-chart-tooltip__value dp-chart-tooltip__value--${row.profit >= 0 ? 'gain' : 'loss'}`;
        effectValue.textContent = `${sign}${formatAmount(row.currencySymbol, Math.abs(row.profit))}`;
        effectRow.appendChild(effectValue);
        const valueRow = document.createElement('div');
        valueRow.className = 'dp-chart-tooltip__row';
        valueRow.textContent = `Total stay value: ${formatAmount(row.currencySymbol, row.accommodationGross)}`;
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
                        ticks: {
                            color: textColor,
                            autoSkip: false,
                            maxRotation: 0,
                            callback: (_value, index) => {
                                const row = this.rows[index];
                                if (!row) {
                                    return '';
                                }
                                const isFirstOfDate = index === 0 || this.rows[index - 1].date !== row.date;
                                return isFirstOfDate ? this.formatDateLabel(row.date) : '';
                            },
                        },
                    },
                    y: {
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
            return (h(Host, null, h("div", { class: "dp-chart-container dp-chart-container--empty" }, h("ir-empty-state", { message: "No dynamic pricing data for this date range." }))));
        }
        return (h(Host, null, h("div", { class: "dp-chart-container" }, h("canvas", { ref: this.handleCanvasRef }))));
    }
};
IrDpReportChart.style = irDpReportChartCss();

const irDpReportFiltersCss = () => `.sc-ir-dp-report-filters-h{display:block}.dp-report-filters.sc-ir-dp-report-filters{display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem}.dp-report-filters__date-picker.sc-ir-dp-report-filters{width:100%}@media (min-width: 768px){.dp-report-filters__date-picker.sc-ir-dp-report-filters{max-width:350px}}`;

const IrDpReportFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dpFiltersChange = createEvent(this, "dpFiltersChange");
    }
    /**
     * Emitted only when the user clicks Search. The shared store (updated as soon as the
     * dates change) keeps every filter instance (chart tab + table tab) visually in sync
     * regardless of whether a search has been triggered yet.
     */
    dpFiltersChange;
    /**
     * `getDate` is the "N ago" anchor. Picked from the from-side it sets only the from-date
     * (see `quickDatesMode="range"` on ir-date-range-filter); picked from the to-side it sets
     * from-date to this anchor *and* to-date to today, producing a complete last-N-days range.
     */
    quickDates = [
        { label: '7 Days Ago', getDate: () => hooks().subtract(7, 'days') },
        { label: '14 Days Ago', getDate: () => hooks().subtract(14, 'days') },
        { label: '30 Days Ago', getDate: () => hooks().subtract(30, 'days') },
        { label: '90 Days Ago', getDate: () => hooks().subtract(90, 'days') },
    ];
    handleDatesChanged = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { from, to } = e.detail;
        if (!from || !to) {
            return;
        }
        updateDpReportFilters({ from, to });
    };
    handleSearch = () => {
        this.dpFiltersChange.emit({ from: dp_report.filters.from, to: dp_report.filters.to });
    };
    render() {
        return (h("div", { key: '9898e3dfa3c10b055995d892d41fa835462aa581', class: "dp-report-filters" }, h("ir-date-range-filter", { key: '09cbe401d489a1ad6a09c889f86cb7df6f28970b', class: "dp-report-filters__date-picker", fromDate: dp_report.filters.from, toDate: dp_report.filters.to, maxDate: hooks().format('YYYY-MM-DD'), showQuickActions: true, quickDates: this.quickDates, quickDatesMode: "range", withClear: false, selectionMode: "auto", onDatesChanged: this.handleDatesChanged }), h("wa-tooltip", { key: 'a2aaf69fc3cb5ca9b538383c5aa7676e7605d13c', for: "search-btn" }, "Search"), h("ir-custom-button", { key: 'd74a7dfb2a29cbb4731f1046f456ee4333f219c4', id: "search-btn", loading: dp_report.isLoading, disabled: dp_report.isLoading, onClickHandler: this.handleSearch, variant: "neutral", appearance: "outlined" }, h("wa-icon", { key: 'db2fc37313d15c0d6f4abe4044c89a30a01b3c81', name: "magnifying-glass" }))));
    }
};
IrDpReportFilters.style = irDpReportFiltersCss();

const irDpReportSummaryCss = () => `.sc-ir-dp-report-summary-h{display:block}.dp-summary__row.sc-ir-dp-report-summary{display:flex;flex-direction:column;gap:1rem}.dp-summary__metric.--gain.sc-ir-dp-report-summary::part(value),.dp-summary__metric.--gain.sc-ir-dp-report-summary [part~="value"]{color:var(--wa-color-success-fill-loud)}.dp-summary__metric.--loss.sc-ir-dp-report-summary::part(value),.dp-summary__metric.--loss.sc-ir-dp-report-summary [part~="value"]{color:var(--wa-color-danger-fill-loud)}@media (min-width: 768px){.dp-summary__row.sc-ir-dp-report-summary{flex-direction:row}.dp-summary__metric.sc-ir-dp-report-summary{flex:1}}`;

const IrDpReportSummary = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const summary = dp_report.summary;
        const currencySymbol = dp_report.rows[0]?.currencySymbol ?? '$';
        const loading = dp_report.isLoading;
        const totalRevenue = dp_report.rows.reduce((sum, row) => sum + row.accommodationGross, 0);
        const dpContributionPct = totalRevenue !== 0 ? Number(((summary.total_profit / totalRevenue) * 100).toFixed(1)) : 0;
        return (h(Host, { key: '198f44d7f4510980351b24215b46600373b18483' }, h("div", { key: '89840eca2378cd2152343f2a4f2320cc6197aeb0', class: "dp-summary__row" }, h("ir-metric-card", { key: '9ccefbbcf15eea737ed5e5f5fc96393d646df3f7', class: "dp-summary__metric", icon: "sack-dollar", label: "Total Profit Generated", loading: loading, value: formatAmount(currencySymbol, summary.total_profit), trend: dpContributionPct, caption: `from ${summary.total_bookings} booking${summary.total_bookings === 1 ? '' : 's'}` }), h("ir-metric-card", { key: '2961ed1e64718c35a1c7756741b5825897e1f2d7', class: "dp-summary__metric", icon: "chart-line", label: "Bookings Above Base", loading: loading, value: summary.bookings_above_base, caption: `of ${summary.total_bookings} booking${summary.total_bookings === 1 ? '' : 's'}` }), h("ir-metric-card", { key: 'c2080c0b93d8dd8af2d628b0ac75c3a77d34c65f', class: "dp-summary__metric --gain", icon: "arrow-trend-up", label: "Avg Gain", loading: loading, value: formatAmount(currencySymbol, summary.avg_gain), caption: `from ${summary.bookings_above_base} booking${summary.bookings_above_base === 1 ? '' : 's'}` }), h("ir-metric-card", { key: '396b572be874ed7fd013836d4b9cb35dcc62610a', class: "dp-summary__metric --loss", icon: "arrow-trend-down", label: "Avg Incentive Reduction", loading: loading, value: formatAmount(currencySymbol, summary.avg_loss), caption: `from ${summary.bookings_below_base} booking${summary.bookings_below_base === 1 ? '' : 's'}` }))));
    }
};
IrDpReportSummary.style = irDpReportSummaryCss();

const irDpReportTableCss = () => `.sc-ir-dp-report-table-h{display:block}.dp-report-table.sc-ir-dp-report-table{display:flex;flex-direction:column;border-radius:0.75rem;overflow:hidden;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);background-color:var(--wa-color-surface-default, #fff)}.dp-report__booking-nbr-cell.sc-ir-dp-report-table::part(booking-reference),.dp-report__booking-nbr-cell.sc-ir-dp-report-table [part~="booking-reference"]{display:none}.table--container.sc-ir-dp-report-table{overflow-x:auto}.cell--align-end.sc-ir-dp-report-table{text-align:right !important}.dp-report-table__effect.sc-ir-dp-report-table{display:inline-flex;align-items:center;justify-content:flex-end;gap:0.375rem;font-weight:500}.dp-report__booking-nbr-cell.sc-ir-dp-report-table::part(container),.dp-report__booking-nbr-cell.sc-ir-dp-report-table [part~="container"]{display:flex;align-items:center;flex-direction:row-reverse;gap:0.5rem}.dp-report__booking-nbr-cell.sc-ir-dp-report-table::part(booking-reference),.dp-report__booking-nbr-cell.sc-ir-dp-report-table [part~="booking-reference"]{font-size:var(--wa-form-control-value-font-size);line-height:calc(var(--wa-form-control-height) - var(--border-width) * 2)}.dp-report-table__effect--gain.sc-ir-dp-report-table{font-weight:600;color:var(--wa-color-success-fill-loud, #16a34a)}.dp-report-table__effect--loss.sc-ir-dp-report-table{font-weight:600;color:var(--wa-color-danger-fill-loud, #dc2626)}.dp-report-table__pagination.sc-ir-dp-report-table{padding:0.5rem 1rem;border-top:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.cell--align-center.sc-ir-dp-report-table{text-align:center !important}.dp-report-table.sc-ir-dp-report-table ir-booking-number-cell.sc-ir-dp-report-table .booking-nbr-cell__container.sc-ir-dp-report-table{align-self:center}.dp-report-table.sc-ir-dp-report-table ir-booked-on-cell.sc-ir-dp-report-table .booked-on-cell__time.sc-ir-dp-report-table{display:none}.dp-report-table.sc-ir-dp-report-table ir-dates-cell[display='inline'].sc-ir-dp-report-table{justify-content:flex-start !important;gap:0.5rem !important}`;

const tableCss = () => `.sc-ir-dp-report-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-dp-report-table{overflow-x:auto}.table--container.sc-ir-dp-report-table,.data-table.sc-ir-dp-report-table{height:100%}.ir-table-row.sc-ir-dp-report-table td.sc-ir-dp-report-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-dp-report-table td.sc-ir-dp-report-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-dp-report-table tbody.sc-ir-dp-report-table tr.sc-ir-dp-report-table:last-child>td.sc-ir-dp-report-table{border-bottom:0 !important}.table.sc-ir-dp-report-table thead.sc-ir-dp-report-table th.sc-ir-dp-report-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-dp-report-table thead.sc-ir-dp-report-table th.sc-ir-dp-report-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-dp-report-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-dp-report-table,.ir-table-row.sc-ir-dp-report-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-dp-report-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-dp-report-table thead.sc-ir-dp-report-table th.sortable.sc-ir-dp-report-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-dp-report-table thead.sc-ir-dp-report-table th.sortable.sc-ir-dp-report-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-dp-report-table thead.sc-ir-dp-report-table th.sortable.sc-ir-dp-report-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-dp-report-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-dp-report-table svg.sc-ir-dp-report-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-dp-report-table:hover td.sc-ir-dp-report-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-dp-report-table:hover td.sc-ir-dp-report-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-dp-report-table:active td.sc-ir-dp-report-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-dp-report-table td.sc-ir-dp-report-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-dp-report-table:hover td.sc-ir-dp-report-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-dp-report-table:active td.sc-ir-dp-report-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-dp-report-table .empty-row.sc-ir-dp-report-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-dp-report-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-dp-report-table{position:sticky !important;right:0;background-color:white}`;

const IrDpReportTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    pageSizes = [20, 50, 100];
    columnHelper = createColumnHelper();
    columns = [
        this.columnHelper.display({
            id: 'booking_nbr',
            header: 'Booking #',
            cell: info => {
                const row = info.row.original;
                return h("ir-booking-number-cell", { class: "dp-report__booking-nbr-cell", bookingNumber: row.booking_nbr, origin: row.raw.origin });
            },
        }),
        this.columnHelper.display({
            id: 'booked_on',
            header: 'Booked on',
            cell: info => h("ir-booked-on-cell", { showTime: false, bookedOn: info.row.original.raw.booked_on }),
        }),
        this.columnHelper.display({
            id: 'booked_by',
            header: 'Booked by',
            cell: info => {
                const row = info.row.original;
                return h("ir-booked-by-cell", { guest: row.raw.guest, identifier: row.booking_nbr, clickableGuest: true });
            },
        }),
        this.columnHelper.display({
            id: 'dates',
            header: 'Dates',
            cell: info => h("ir-dates-cell", { display: "inline", showArrow: true, checkIn: info.row.original.raw.from_date, checkOut: info.row.original.raw.to_date }),
        }),
        this.columnHelper.display({
            id: 'units',
            header: 'Units booked',
            cell: info => h("span", null, info.row.original.raw.rooms_length),
        }),
        this.columnHelper.accessor('profit', {
            id: 'effect',
            header: 'Effect',
            cell: info => this.renderEffect(info.row.original),
        }),
    ];
    renderEffect(row) {
        if (row.profit === 0) {
            return h("span", { class: "dp-report-table__effect" }, formatAmount(row.currencySymbol, 0));
        }
        const isGain = row.profit > 0;
        return (h("span", { class: { 'dp-report-table__effect': true, 'dp-report-table__effect--gain': isGain, 'dp-report-table__effect--loss': !isGain } }, h("wa-icon", { name: isGain ? 'arrow-trend-up' : 'arrow-trend-down' }), isGain ? '+' : '-', formatAmount(row.currencySymbol, Math.abs(row.profit))));
    }
    handlePageChange = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        setDpReportTablePage(event.detail.currentPage);
    };
    handlePageSizeChange = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (event.detail.pageSize) {
            setDpReportTablePageSize(event.detail.pageSize);
        }
    };
    render() {
        const { currentPage, pageSize } = dp_report.tablePagination;
        const total = dp_report.rows.length;
        const pageCount = Math.max(Math.ceil(total / pageSize), 1);
        const startIndex = (currentPage - 1) * pageSize;
        const pageRows = dp_report.rows.slice(startIndex, startIndex + pageSize);
        const table = useTable({
            data: pageRows,
            columns: this.columns,
            getCoreRowModel: getCoreRowModel(),
        });
        return (h("div", { key: '1817a033344d961786633b6af0648f088f26577e', class: "dp-report-table" }, h("div", { key: 'a4b887032d36aa94e814fda8480177b73dd955e4', class: "table--container" }, h("table", { key: '4f6704916740fbc94fa2e26cb9f667f23df7dd53', class: "table data-table" }, h("thead", { key: '3e3446b66f7fc7011a5be18caa667100000e047b' }, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (h("th", { key: header.id, class: { 'cell--align-end': header.column.id === 'effect', 'cell--align-center': header.column.id === 'units' } }, flexRender(header.column.columnDef.header, header.getContext())))))))), h("tbody", { key: '4b83ce262a2165b15750af353beb7f1c81bd8a81' }, dp_report.isLoading ? (h("tr", null, h("td", { colSpan: this.columns.length, class: "empty-row" }, h("ir-spinner", null)))) : table.getRowModel().rows.length === 0 ? (h("tr", null, h("td", { colSpan: this.columns.length, class: "empty-row" }, h("ir-empty-state", { message: "No dynamic pricing data for this date range." })))) : (table.getRowModel().rows.map(row => (h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: { 'cell--align-end': cell.column.id === 'effect', 'cell--align-center': cell.column.id === 'units' } }, flexRender(cell.column.columnDef.cell, cell.getContext()))))))))))), h("ir-pagination", { key: '4efd7df88857592a5a13d3e5b9f5fb4f7c67b37d', class: "dp-report-table__pagination", total: total, pages: pageCount, pageSize: pageSize, currentPage: currentPage, allowPageSizeChange: true, pageSizes: this.pageSizes, showing: { from: total ? startIndex + 1 : 0, to: Math.min(startIndex + pageSize, total) }, recordLabel: "bookings", onPageChange: this.handlePageChange, onPageSizeChange: this.handlePageSizeChange })));
    }
};
IrDpReportTable.style = irDpReportTableCss() + tableCss();

export { IrDpReportChart as ir_dp_report_chart, IrDpReportFilters as ir_dp_report_filters, IrDpReportSummary as ir_dp_report_summary, IrDpReportTable as ir_dp_report_table };
