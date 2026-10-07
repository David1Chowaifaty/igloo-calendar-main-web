'use strict';

var index = require('./index-CQkpA5n3.js');
var chart = require('./chart-CMmD0hzI.js');
var t = require('./t-wyGILxEL.js');
require('./locale-scope-C7rmpwuA.js');

const irQueueChartCss = () => `:host{display:block}`;

chart.Chart.register(...chart.registerables);
const IrQueueChart = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    /** Labels for X-axis */
    labels = [];
    /** Values for bars */
    values = [];
    /** Chart title */
    label = t.t('Lcz_QueueStatus', { fallback: 'Queue Status' });
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
        this.chart = new chart.Chart(this.canvas, {
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
        return (index.h(index.Host, { key: '05386792be70153b27d440d5b84cc4432660d28f' }, index.h("div", { key: 'dd3d8f5aba038a9aedd409c2c00181298a08702f', class: "chart-container" }, index.h("canvas", { key: '6beda24a8999c7c357f61878e0bd88d78d7a969f', ref: el => (this.canvas = el) }))));
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

exports.ir_queue_chart = IrQueueChart;
