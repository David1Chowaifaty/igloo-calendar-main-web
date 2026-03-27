import { r as registerInstance, h, H as Host } from './index-7e96440e.js';
import { T as Token } from './Token-030c78a9.js';
import { H as HouseKeepingService } from './housekeeping.service-dcfa55d5.js';
import { h as hooks } from './moment-ab846cee.js';
import './axios-aa1335b8.js';
import './index-87419685.js';
import './index-f100e9d2.js';

const irHkStaffTasksCss = ".sc-ir-hk-staff-tasks-h{display:block;background:white;height:100%}.tasks__container.sc-ir-hk-staff-tasks{display:flex;flex-direction:column;gap:1.5rem;padding:1rem !important}.tasks__section.sc-ir-hk-staff-tasks{display:flex;flex-direction:column;gap:0.75rem}.tasks-grid.sc-ir-hk-staff-tasks{display:grid;gap:0.625rem}.tasks__count.sc-ir-hk-staff-tasks{font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet)}.tasks__header.sc-ir-hk-staff-tasks{display:flex;align-items:end;padding:0.5rem 0;gap:1rem}.tasks__date.sc-ir-hk-staff-tasks{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-l);margin:0;padding:0}@media (width >= 640px){.tasks-grid.sc-ir-hk-staff-tasks{grid-template-columns:repeat(2, minmax(0, 1fr))}}@media (width >= 1024px){.tasks-grid.sc-ir-hk-staff-tasks{grid-template-columns:repeat(3, minmax(0, 1fr))}}";
const IrHkStaffTasksStyle0 = irHkStaffTasksCss;

const IrHkStaffTasks = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    //   {
    //     "Email": "hkm+94d60519-02ed-48a2-b679-2dafe7cdfb5e@noemail.com",
    //     "IsAuthenticated": true,
    //     "IsHavingMutliOTPEmails": false,
    //     "IsRequireOTP": false,
    //     "Language": 0,
    //     "My_OTP_Emails": [
    //         "hkm+94d60519-02ed-48a2-b679-2dafe7cdfb5e@noemail.com"
    //     ],
    //     "My_Related_Properties": null,
    //     "My_User_language": [],
    //     "OwnerID": 1,
    //     "Password": "",
    //     "Ticket": ,
    //     "USER_TYPE_CODE": "13",
    //     "UserID": 811148,
    //     "UserName": "demo_t",
    //     "UserType": null
    // }
    ticket;
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
    tokenService = new Token();
    houseKeepingService = new HouseKeepingService();
    connectedHk;
    isLoading = true;
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    async init() {
        this.connectedHk = await this.houseKeepingService.getConnectedHk();
        this.isLoading = false;
    }
    render() {
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-hk-staff-tasks-header", { connectedHK: this.connectedHk }), h("div", { class: "tasks__container" }, h("section", { class: "tasks__section", "aria-label": `Tasks for ${hooks().format('ddd, DD MMM')}` }, h("header", { class: "tasks__header" }, h("h3", { class: "tasks__date" }, hooks().format('ddd, DD MMM')), h("wa-badge", { pill: true, style: { fontSize: '0.875rem', fontWeight: 'bold' }, variant: "brand", appearance: "accent" }, this.tasks.length)), h("div", { class: "tasks-grid", role: "list" }, this.tasks.map(task => (h("ir-hk-staff-task", { task: task, key: task.id, role: "listitem" }))))), h("section", { class: "tasks__section", "aria-label": `Tasks for ${hooks().add(1, 'day').format('ddd, DD MMM')}` }, h("header", { class: "tasks__header" }, h("h3", { class: "tasks__date" }, hooks().add(1, 'day').format('ddd, DD MMM')), h("wa-badge", { style: { fontSize: '0.875rem', fontWeight: 'bold' }, pill: true, variant: "neutral", appearance: "filled" }, this.tasks.length)), h("div", { class: "tasks-grid", role: "list" }, this.tasks.map(task => (h("ir-hk-staff-task", { future: true, task: task, key: task.id, role: "listitem" }))))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrHkStaffTasks.style = IrHkStaffTasksStyle0;

export { IrHkStaffTasks as ir_hk_staff_tasks };

//# sourceMappingURL=ir-hk-staff-tasks.entry.js.map