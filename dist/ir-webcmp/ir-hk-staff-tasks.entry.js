import { r as registerInstance, h, e as Host } from './index-7b3961ed.js';
import { h as hooks } from './moment-ab846cee.js';

const irHkStaffTasksCss = ".sc-ir-hk-staff-tasks-h{display:block;background:white;height:100%}.tasks__container.sc-ir-hk-staff-tasks{display:flex;flex-direction:column;gap:1.5rem;padding:1rem !important}.tasks__section.sc-ir-hk-staff-tasks{display:flex;flex-direction:column;gap:0.75rem}.tasks-grid.sc-ir-hk-staff-tasks{display:grid;gap:0.625rem}.tasks__count.sc-ir-hk-staff-tasks{font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet)}.tasks__header.sc-ir-hk-staff-tasks{display:flex;align-items:end;padding:0.5rem 0;gap:1rem}.tasks__date.sc-ir-hk-staff-tasks{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-l);margin:0;padding:0}@media (width >= 640px){.tasks-grid.sc-ir-hk-staff-tasks{grid-template-columns:repeat(2, minmax(0, 1fr))}}@media (width >= 1024px){.tasks-grid.sc-ir-hk-staff-tasks{grid-template-columns:repeat(3, minmax(0, 1fr))}}";

const IrHkStaffTasks = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'eaf10d9bdd0efc7e115398c11b3cfab08ce2d88c' }, h("ir-hk-staff-tasks-header", { key: 'a2ba0b3a0b796da97ff84fee62c4781729460f78' }), h("div", { key: 'b4e9f380b55b7272bc13fe5a503928aeb684e84c', class: "tasks__container" }, h("section", { key: 'b29b91dfe1dc9ab0cfee69aad8b88994621f65ee', class: "tasks__section", "aria-label": `Tasks for ${hooks().format('ddd, DD MMM')}` }, h("header", { key: '95eec74d92ddf0df9eb3e1b84db4e4257a4d048d', class: "tasks__header" }, h("h3", { key: '64d464a54605117f8c3b6fbd78a5adfa715e5fd5', class: "tasks__date" }, hooks().format('ddd, DD MMM')), h("wa-badge", { key: 'fd649552c3b177c31aa4c3d58ffc773b08f98483', pill: true, style: { fontSize: '0.875rem', fontWeight: 'bold' }, variant: "brand", appearance: "accent" }, this.tasks.length)), h("div", { key: '2d40da27d3119ca450cfbbe5985abbdcb21cf428', class: "tasks-grid", role: "list" }, this.tasks.map(task => (h("ir-hk-staff-task", { task: task, key: task.id, role: "listitem" }))))), h("section", { key: '6822616dd3df514ba90d245ee6774694faa872f9', class: "tasks__section", "aria-label": `Tasks for ${hooks().add(1, 'day').format('ddd, DD MMM')}` }, h("header", { key: '096b7ec2bdebe8eaa160cc296be9d4b73c624b29', class: "tasks__header" }, h("h3", { key: '0849ed33b5a8511441c61c8a908e02a61d823742', class: "tasks__date" }, hooks().add(1, 'day').format('ddd, DD MMM')), h("wa-badge", { key: 'aac7e810e216964e9ef035fe6aa8f27cae9472be', style: { fontSize: '0.875rem', fontWeight: 'bold' }, pill: true, variant: "neutral", appearance: "filled" }, this.tasks.length)), h("div", { key: 'bda4faaf1f6e94113422b1d73a0ec6c684db50ee', class: "tasks-grid", role: "list" }, this.tasks.map(task => (h("ir-hk-staff-task", { future: true, task: task, key: task.id, role: "listitem" }))))))));
    }
};
IrHkStaffTasks.style = irHkStaffTasksCss;

export { IrHkStaffTasks as ir_hk_staff_tasks };

//# sourceMappingURL=ir-hk-staff-tasks.entry.js.map