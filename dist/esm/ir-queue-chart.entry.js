import { r as registerInstance, a as getElement, h, H as Host } from './index-CeHdrJeH.js';
import { C as Chart, r as registerables } from './chart-3KrsuFTS.js';
import { t } from './t-Bk78Wumj.js';
import './locales.store-CXJn6ls-.js';

const irQueueChartCss = () => `:host{display:block}`;

Chart.register(...registerables);
const IrQueueChart = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    /** Labels for X-axis */
    labels = [];
    /** Values for bars */
    values = [];
    /** Chart title */
    label = t('Lcz_QueueStatus', { fallback: 'Queue Status' });
    chart;
    canvas;
    componentDidLoad() {
        this.createChart();
    }
    dataChanged() {
        this.updateChart();
    }
    disconnectedCallback() {
        this.chart?.destroy();
    }
    getCssVar(name) {
        return getComputedStyle(this.el).getPropertyValue(name).trim();
    }
    createChart() {
        const brandColor = this.getCssVar('--wa-color-brand-fill-loud');
        const borderColor = this.getCssVar('--wa-color-surface-border');
        const textColor = this.getCssVar('--wa-color-text-normal');
        const tooltipTextColor = this.getCssVar('--wa-color-surface-default');
        this.chart = new Chart(this.canvas, {
            type: 'bar',
            data: {
                labels: this.labels,
                datasets: [
                    {
                        label: this.label,
                        data: this.values,
                        borderRadius: 8,
                        barThickness: 32,
                        backgroundColor: brandColor,
                        hoverBackgroundColor: brandColor,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                        // modern dashboards usually hide legend
                    },
                    tooltip: {
                        backgroundColor: textColor,
                        titleColor: tooltipTextColor,
                        bodyColor: tooltipTextColor,
                        cornerRadius: 8,
                        padding: 10,
                    },
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                            // color: borderColor,
                        },
                        ticks: {
                            color: textColor,
                            font: {
                                size: 12,
                                weight: 500,
                            },
                        },
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: borderColor,
                            // drawBorder: false,
                        },
                        ticks: {
                            color: textColor,
                            font: {
                                size: 12,
                            },
                        },
                    },
                },
            },
        });
    }
    updateChart() {
        if (!this.chart)
            return;
        this.chart.data.labels = this.labels;
        this.chart.data.datasets[0].data = this.values;
        this.chart.update();
    }
    render() {
        return (h(Host, { key: '3a8b77248efbd5beb8cde5f6cc54760e17102c4d' }, h("div", { key: '3594b4fbc11284d01e0eb49e045fbf098b0a5b89', class: "chart-container" }, h("canvas", { key: 'aa56dcc18177bc826bbb0390fce9f7a19bad7720', ref: el => (this.canvas = el) }))));
    }
    static get watchers() { return {
        "values": [{
                "dataChanged": 0
            }],
        "labels": [{
                "dataChanged": 0
            }]
    }; }
};
IrQueueChart.style = irQueueChartCss();

export { IrQueueChart as ir_queue_chart };
