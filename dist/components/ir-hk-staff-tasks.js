import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$4 } from './ir-custom-button2.js';
import { d as defineCustomElement$3 } from './ir-hk-staff-task2.js';
import { d as defineCustomElement$2 } from './ir-hk-staff-tasks-header2.js';

const irHkStaffTasksCss = ".sc-ir-hk-staff-tasks-h{display:block;background:white;height:100%}.tasks__container.sc-ir-hk-staff-tasks{display:flex;flex-direction:column;gap:1.5rem;padding:1rem !important}.tasks__section.sc-ir-hk-staff-tasks{display:flex;flex-direction:column;gap:0.75rem}.tasks-grid.sc-ir-hk-staff-tasks{display:grid;gap:0.625rem}.tasks__count.sc-ir-hk-staff-tasks{font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet)}.tasks__header.sc-ir-hk-staff-tasks{display:flex;align-items:end;padding:0.5rem 0;gap:1rem}.tasks__date.sc-ir-hk-staff-tasks{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-l);margin:0;padding:0}@media (width >= 640px){.tasks-grid.sc-ir-hk-staff-tasks{grid-template-columns:repeat(2, minmax(0, 1fr))}}@media (width >= 1024px){.tasks-grid.sc-ir-hk-staff-tasks{grid-template-columns:repeat(3, minmax(0, 1fr))}}";
const IrHkStaffTasksStyle0 = irHkStaffTasksCss;

const IrHkStaffTasks$1 = /*@__PURE__*/ proxyCustomElement(class IrHkStaffTasks extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    tasks = [
        {
            adult: 2,
            booking_nbr: '13383663875',
            child: 1,
            date: '2026-03-24',
            formatted_date: '24 Mar',
            hint: '14:30',
            hkm_id: 0,
            infant: 0,
            is_highlight: false,
            status: { code: 'CO', description: 'CHECKOUT' },
            task_type: { code: 'CLN', description: 'Cleaning' },
            id: '1',
            unit: {
                calendar_cell: null,
                // hk_status: null,
                housekeeper: null,
                id: 26,
                is_active: null,
                name: 'Peach Deluxe Studio',
            },
        },
        {
            adult: 2,
            booking_nbr: '13383663875',
            child: 0,
            date: '2026-03-24',
            formatted_date: '24 Mar',
            hint: '14:30',
            hkm_id: 0,
            infant: 1,
            is_highlight: false,
            status: { code: 'CO', description: 'CHECKOUT' },
            task_type: { code: 'CLN', description: 'Cleaning' },
            id: 2,
            unit: {
                calendar_cell: null,
                hk_status: null,
                housekeeper: null,
                id: 26,
                is_active: null,
                name: '07',
            },
        },
        {
            adult: 2,
            booking_nbr: '13383663875',
            child: 0,
            date: '2026-03-24',
            formatted_date: '24 Mar',
            hint: '14:30',
            hkm_id: 0,
            infant: 1,
            is_highlight: false,
            status: { code: 'CO', description: 'CHECKOUT' },
            task_type: { code: 'CLN', description: 'Cleaning' },
            id: 3,
            unit: {
                calendar_cell: null,
                hk_status: null,
                housekeeper: null,
                id: 26,
                is_active: null,
                name: '07',
            },
        },
    ];
    render() {
        return (h(Host, { key: '8c5f03ea8be57c029157660105de08a87f0d60ec' }, h("ir-hk-staff-tasks-header", { key: '68de500446e39847b32016e9ecb01434a286a626' }), h("div", { key: '695e062ada605f979dd635fae34c36fb5dd53f29', class: "tasks__container" }, h("section", { key: 'fd2cc8ed00c6f052b465f3c8abec538af624f039', class: "tasks__section", "aria-label": `Tasks for ${hooks().format('ddd, DD MMM')}` }, h("header", { key: 'a94eae855bd8c61ac3eb42c18406c55347a5803d', class: "tasks__header" }, h("h3", { key: '678bd2ea6808e7491c1b341808e142f25997e6b4', class: "tasks__date" }, hooks().format('ddd, DD MMM')), h("wa-badge", { key: '1e9ba53e0a8a501aaffba3833be1f3246ec73886', pill: true, style: { fontSize: '0.875rem', fontWeight: 'bold' }, variant: "brand", appearance: "accent" }, this.tasks.length)), h("div", { key: 'bf1ecc7d6bf0e18beb07cc933bdc07ccedcca104', class: "tasks-grid", role: "list" }, this.tasks.map(task => (h("ir-hk-staff-task", { task: task, key: task.id, role: "listitem" }))))), h("section", { key: 'eefb87091e7c95b1b0fb35e78f94f73f4b680e7b', class: "tasks__section", "aria-label": `Tasks for ${hooks().add(1, 'day').format('ddd, DD MMM')}` }, h("header", { key: '8ae56502532f5bb36aad3a4552fcb8a63e474e02', class: "tasks__header" }, h("h3", { key: '2466f7dadb8e0332a30beefa5a15da01f23161d8', class: "tasks__date" }, hooks().add(1, 'day').format('ddd, DD MMM')), h("wa-badge", { key: 'db4b0dab24d3891f6ebf0c7f13c935d4d9897e1b', style: { fontSize: '0.875rem', fontWeight: 'bold' }, pill: true, variant: "neutral", appearance: "filled" }, this.tasks.length)), h("div", { key: '2b14597b55d1e69ce644dabf38051e4ae1a6db36', class: "tasks-grid", role: "list" }, this.tasks.map(task => (h("ir-hk-staff-task", { future: true, task: task, key: task.id, role: "listitem" }))))))));
    }
    static get style() { return IrHkStaffTasksStyle0; }
}, [2, "ir-hk-staff-tasks"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-hk-staff-tasks", "ir-custom-button", "ir-hk-staff-task", "ir-hk-staff-tasks-header"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-hk-staff-tasks":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrHkStaffTasks$1);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-hk-staff-task":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-hk-staff-tasks-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrHkStaffTasks = IrHkStaffTasks$1;
const defineCustomElement = defineCustomElement$1;

export { IrHkStaffTasks, defineCustomElement };

//# sourceMappingURL=ir-hk-staff-tasks.js.map