import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$b } from './ir-button2.js';
import { d as defineCustomElement$a } from './ir-checkbox2.js';
import { d as defineCustomElement$9 } from './ir-icons2.js';
import { d as defineCustomElement$8 } from './ir-interceptor2.js';
import { d as defineCustomElement$7 } from './ir-loading-screen2.js';
import { d as defineCustomElement$6 } from './ir-select2.js';
import { d as defineCustomElement$5 } from './ir-tasks-filters2.js';
import { d as defineCustomElement$4 } from './ir-tasks-header2.js';
import { d as defineCustomElement$3 } from './ir-tasks-table2.js';
import { d as defineCustomElement$2 } from './ir-toast2.js';

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
const IrHkTasks$1 = /*@__PURE__*/ proxyCustomElement(class IrHkTasks extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, h("ir-tasks-header", null), h("div", { class: "d-flex flex-column flex-md-row mt-1 ", style: { gap: '1rem' } }, h("ir-tasks-filters", null), h("ir-tasks-table", { class: "flex-grow-1 w-100", tasks: initialData })))));
    }
    get el() { return this; }
    static get style() { return IrHkTasksStyle0; }
}, [2, "ir-hk-tasks", {
        "language": [1],
        "ticket": [1],
        "propertyid": [2],
        "p": [1],
        "isLoading": [32],
        "selectedDuration": [32],
        "selectedHouseKeeper": [32],
        "selectedRoom": [32],
        "archiveOpened": [32],
        "property_id": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-hk-tasks", "ir-button", "ir-checkbox", "ir-icons", "ir-interceptor", "ir-loading-screen", "ir-select", "ir-tasks-filters", "ir-tasks-header", "ir-tasks-table", "ir-toast"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-hk-tasks":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrHkTasks$1);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-tasks-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-tasks-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-tasks-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrHkTasks = IrHkTasks$1;
const defineCustomElement = defineCustomElement$1;

export { IrHkTasks, defineCustomElement };

//# sourceMappingURL=ir-hk-tasks.js.map