import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irTasksFiltersCss = ".sc-ir-tasks-filters-h{display:block;height:100%}";
const IrTasksFiltersStyle0 = irTasksFiltersCss;

const IrTasksFilters = /*@__PURE__*/ proxyCustomElement(class IrTasksFilters extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.applyClicked = createEvent(this, "applyClicked", 7);
        this.resetClicked = createEvent(this, "resetClicked", 7);
        this.filters = {
            period: '',
            housekeepers: '',
            cleaning_frequency: '',
            dusty_units: '',
            highlight_check_ins: '',
        };
        this.collapsed = false;
    }
    generateDaysFilter() {
        let list = [{ code: '0', value: 'Do not include' }];
        for (let i = 3; i <= 7; i++) {
            list.push({ code: i.toString(), value: `Cleaned ${i} ago` });
        }
        return list;
    }
    generateCheckinsDaysFilter() {
        let list = [{ code: '0', value: 'No' }];
        for (let i = 2; i <= 10; i++) {
            list.push({ code: i.toString(), value: `Cleaned ${i} ago` });
        }
        return list;
    }
    render() {
        return (h("div", { key: '2c31b03353036e4aa30008a3a37d6acf087b875a', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: '8a7678cdad716463fac5065d433c5b4f24202ec3', class: "d-flex align-items-center", style: { gap: '0.5rem', cursor: 'pointer' } }, h("svg", { key: '2e20f9d27334c3ec96125cf073219eb0b8e9a1d1', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'cd00877ec206cb44f3da0d989b9174e19ecae49e', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '6bcb90269e24429e70d284120311713461ea78e0', class: "m-0 p-0 flex-grow-1", onClick: () => (this.collapsed = !this.collapsed), "data-toggle": "collapse", "data-target": `#hkTasksFiltersCollapse`, "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "myCollapse" }, "Filters")), h("div", { key: 'eaefd8c321f9602b21202199eacc932a274a6227', class: "m-0 p-0 ", id: "hkTasksFiltersCollapse" }, h("div", { key: 'd0d3a3864c38143b88a7da13b749786165f5a4c3', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'd7db2d061a182ad0109915115ba26291c1983c2b', class: "pt-1" }, h("p", { key: 'c719768ce320b53cdf7172e1909d832b9c3edcd7', class: "m-0 p-0" }, "Period"), h("ir-select", { key: 'ece0dd60cf95d97889fd580bbdc9bb0593248939', LabelAvailable: false, showFirstOption: false, data: [
                { code: '001', value: 'For today' },
                { code: '002', value: `Until ${hooks().format('DD MMM')}` },
                { code: '002', value: `Until ${hooks().add(10, 'days').format('DD MMM')}` },
            ].map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("fieldset", { key: 'd0711b1afa7be70b1f9235db1c3c7d9aa42ca150' }, h("p", { key: '4e8c81fe1a9183794e64b563db22d6275589c085', class: "m-0 p-0" }, "Housekeepers"), h("ir-select", { key: 'fea9ee149cf6e00bf3a9c045df6ac7f90ad74344', LabelAvailable: false, showFirstOption: false, data: this.generateDaysFilter().map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("fieldset", { key: 'e51773d133c92b08595d73fa11cf1753c51d976e' }, h("p", { key: '275154a182e1f96b31edf82d4cd43e87cb832f4a', class: "m-0 p-0" }, "Cleaning frequency"), h("ir-select", { key: '6d223d4d73b43f33b352de045b98527b497a39b8', LabelAvailable: false, showFirstOption: false, data: this.generateDaysFilter().map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("fieldset", { key: '40244d8d90881d317f5f942a401f310f776ca12c' }, h("p", { key: '857ccb631d2cb8240c62a5e03c95a014219c6625', class: "m-0 p-0" }, "Dusty units"), h("ir-select", { key: 'ad0bfaea41781a1a650c73b924e7647504a799d0', showFirstOption: false, LabelAvailable: false, data: [{ text: 'test', value: 'hello' }] })), h("fieldset", { key: '72cc3fd3c40665988e5d4fc5a5e469517608c7ea', class: "mb-1" }, h("p", { key: 'c8a2e9e07c364bc7fc9a28eda6e134ed4a40bafc', class: "m-0 p-0" }, "Highlight check-ins"), h("ir-select", { key: '68578a08ba097590be7dbfb441279959a60b656b', LabelAvailable: false, showFirstOption: false, data: this.generateCheckinsDaysFilter().map(v => ({
                text: v.value,
                value: v.code,
            })) })), h("div", { key: '3d54d81e859428e0071604b85b9713f2603f99ef', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: '01f44f6d41fce7b36f03143d96fab152f463defa', text: "Reset", size: "sm", btn_color: "outline" }), h("ir-button", { key: '2cb13b694628250cbea5cb6f1af4c99a44a9274a', text: "Apply", size: "sm" }))))));
    }
    static get style() { return IrTasksFiltersStyle0; }
}, [2, "ir-tasks-filters", {
        "filters": [32],
        "collapsed": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-tasks-filters", "ir-button", "ir-icons", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-tasks-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTasksFilters);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrTasksFilters as I, defineCustomElement as d };

//# sourceMappingURL=ir-tasks-filters2.js.map