import { Host, h } from "@stencil/core";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export class IrQueueChart {
    el;
    /** Labels for X-axis */
    labels = [];
    /** Values for bars */
    values = [];
    /** Chart title */
    label = 'Queue Status';
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
        return (h(Host, { key: '79a93eb2d51e68c0227b56c7e74742de5b4a17b1' }, h("div", { key: '6da2178d1cf1ff4d8e97840122fed741ef10fc10', class: "chart-container" }, h("canvas", { key: 'ea063ba1192bcc636964c5e6739e2005cc9df537', ref: el => (this.canvas = el) }))));
    }
    static get is() { return "ir-queue-chart"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-queue-chart.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-queue-chart.css"]
        };
    }
    static get properties() {
        return {
            "labels": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Labels for X-axis"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "values": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "number[]",
                    "resolved": "number[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Values for bars"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
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
                    "text": "Chart title"
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": false,
                "defaultValue": "'Queue Status'"
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "values",
                "methodName": "dataChanged"
            }, {
                "propName": "labels",
                "methodName": "dataChanged"
            }];
    }
}
//# sourceMappingURL=ir-queue-chart.js.map
