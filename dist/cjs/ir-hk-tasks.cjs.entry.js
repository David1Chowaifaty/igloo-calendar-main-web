'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');

const irHkTasksCss = ".sc-ir-hk-tasks-h{display:block}@media only screen and (max-width: 900px){.table-container.sc-ir-hk-tasks{width:max-content !important}}";
const IrHkTasksStyle0 = irHkTasksCss;

const initialData = [
    {
        id: 1,
        date: '20 Jan',
        unit: 228,
        status: 'INHOUSE',
        hint: '27 Oct - 3 Nov',
        a: 4,
        c: 2,
        i: 1,
        housekeeper: 'Maria',
    },
    {
        id: 2,
        date: '20 Jan',
        unit: 501,
        status: 'CHECKIN',
        hint: 'Noon-2PM',
        a: 2,
        c: 0,
        i: 0,
        housekeeper: 'Clean Plus',
    },
    {
        id: 3,
        date: '20 Jan',
        unit: 600,
        status: 'VACANT',
        hint: '',
        a: 1,
        c: 1,
        i: 1,
        housekeeper: 'Petros',
    },
    {
        id: 4,
        date: '20 Jan',
        unit: 102,
        status: 'TURNOVER',
        hint: '10PM-Midnight',
        a: 1,
        c: 1,
        i: 1,
        housekeeper: 'Clean Plus',
    },
    {
        id: 5,
        date: '20 Jan',
        unit: 109,
        status: 'DUSTY',
        hint: '',
        a: 1,
        c: 0,
        i: 1,
        housekeeper: 'Clean Plus',
    },
    {
        id: 6,
        date: '20 Jan',
        unit: 501,
        status: 'CHECKOUT',
        hint: '',
        a: 2,
        c: 2,
        i: 2,
        housekeeper: 'Clean Plus',
    },
    {
        id: 7,
        date: '20 Jan',
        unit: 228,
        status: 'CHECKIN',
        hint: 'Noon-2PM',
        a: 4,
        c: 2,
        i: 1,
        housekeeper: 'Maria',
    },
    {
        id: 8,
        date: '20 Jan',
        unit: 228,
        status: 'CHECKOUT',
        hint: '',
        a: 4,
        c: 2,
        i: 1,
        housekeeper: 'Maria',
    },
];
const IrHkTasks = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.language = '';
        this.ticket = '';
        this.propertyid = undefined;
        this.p = undefined;
        this.isLoading = false;
        this.selectedDuration = '';
        this.selectedHouseKeeper = '0';
        this.selectedRoom = null;
        this.archiveOpened = false;
        this.property_id = undefined;
    }
    // private modalOpenTimeOut: NodeJS.Timeout;
    // private roomService = new RoomService();
    // private houseKeepingService = new HouseKeepingService();
    // private token = new Token();
    render() {
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("ir-tasks-header", null), index.h("div", { class: "d-flex flex-column flex-md-row mt-1 ", style: { gap: '1rem' } }, index.h("ir-tasks-filters", null), index.h("ir-tasks-table", { class: "flex-grow-1 w-100", tasks: initialData })))));
    }
    get el() { return index.getElement(this); }
};
IrHkTasks.style = IrHkTasksStyle0;

exports.ir_hk_tasks = IrHkTasks;

//# sourceMappingURL=ir-hk-tasks.cjs.entry.js.map