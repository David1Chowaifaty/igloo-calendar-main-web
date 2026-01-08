import Token from "../../models/Token";
import { Host, h } from "@stencil/core";
import axios from "axios";
export class IrQueueManager {
    el;
    ticket = '';
    isLoading = true;
    tokenService = new Token();
    data;
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue && newValue) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    async init() {
        const { data } = await axios.post('/Get_Q_Summary', {});
        if (data.ExceptionMsg) {
            return;
        }
        this.data = data.My_Result.map(r => {
            const { pendingRequests, properties } = this.formatResults(r.properties);
            return {
                pendingRequests,
                properties,
                q_name: r.q_name,
                total_pending: r.total_pending,
            };
        });
        this.isLoading = false;
    }
    formatResults(data) {
        const properties = [];
        const pendingRequests = [];
        if (!data) {
            return { properties, pendingRequests };
        }
        for (const item of data.split(',')) {
            const [property, pending] = item.split('|').map(v => v.trim());
            if (!property || pending === undefined)
                continue;
            const pendingNumber = Number(pending);
            if (Number.isNaN(pendingNumber))
                continue;
            properties.push(property);
            pendingRequests.push(pendingNumber);
        }
        return {
            properties,
            pendingRequests,
        };
    }
    render() {
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("div", { class: "ir-page__container" }, h("h3", { class: "page-title" }, "Pending Queues"), this.data.length === 0 && h("ir-empty-state", { style: { marginTop: '20vh' } }), this.data.map(d => (h("wa-card", null, h("p", { slot: "header" }, d.q_name, " (", d.total_pending, " total pending)"), h("ir-queue-chart", { label: d.q_name, labels: d.properties, values: d.pendingRequests })))))));
    }
    static get is() { return "ir-queue-manager"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-queue-manager.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-queue-manager.css"]
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
                "reflect": false,
                "defaultValue": "''"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "data": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }];
    }
}
//# sourceMappingURL=ir-queue-manager.js.map
