import { Host, h } from "@stencil/core";
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
export class IrHkTasks {
    constructor() {
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
    static get is() { return "ir-hk-tasks"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hk-tasks.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hk-tasks.css"]
        };
    }
    static get properties() {
        return {
            "language": {
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
                "attribute": "language",
                "reflect": false,
                "defaultValue": "''"
            },
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
                "attribute": "ticket",
                "reflect": false,
                "defaultValue": "''"
            },
            "propertyid": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "propertyid",
                "reflect": false
            },
            "p": {
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
                "attribute": "p",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "selectedDuration": {},
            "selectedHouseKeeper": {},
            "selectedRoom": {},
            "archiveOpened": {},
            "property_id": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=ir-hk-tasks.js.map
