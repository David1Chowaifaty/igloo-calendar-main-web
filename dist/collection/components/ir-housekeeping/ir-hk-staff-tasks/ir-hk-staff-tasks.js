import Token from "../../../models/Token";
import { HouseKeepingService } from "../../../services/housekeeping.service";
import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrHkStaffTasks {
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
        return (h(Host, null, h("ir-hk-staff-tasks-header", { connectedHK: this.connectedHk }), h("div", { class: "tasks__container" }, h("section", { class: "tasks__section", "aria-label": `Tasks for ${moment().format('ddd, DD MMM')}` }, h("header", { class: "tasks__header" }, h("h3", { class: "tasks__date" }, moment().format('ddd, DD MMM')), h("wa-badge", { pill: true, style: { fontSize: '0.875rem', fontWeight: 'bold' }, variant: "brand", appearance: "accent" }, this.tasks.length)), h("div", { class: "tasks-grid", role: "list" }, this.tasks.map(task => (h("ir-hk-staff-task", { task: task, key: task.id, role: "listitem" }))))), h("section", { class: "tasks__section", "aria-label": `Tasks for ${moment().add(1, 'day').format('ddd, DD MMM')}` }, h("header", { class: "tasks__header" }, h("h3", { class: "tasks__date" }, moment().add(1, 'day').format('ddd, DD MMM')), h("wa-badge", { style: { fontSize: '0.875rem', fontWeight: 'bold' }, pill: true, variant: "neutral", appearance: "filled" }, this.tasks.length)), h("div", { class: "tasks-grid", role: "list" }, this.tasks.map(task => (h("ir-hk-staff-task", { future: true, task: task, key: task.id, role: "listitem" }))))))));
    }
    static get is() { return "ir-hk-staff-tasks"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hk-staff-tasks.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hk-staff-tasks.css"]
        };
    }
    static get properties() {
        return {
            "ticket": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "ticket",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "connectedHk": {},
            "isLoading": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }];
    }
}
//# sourceMappingURL=ir-hk-staff-tasks.js.map
