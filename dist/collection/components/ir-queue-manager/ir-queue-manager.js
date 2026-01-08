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
        if (!data) {
            return { properties: [], pendingRequests: [] };
        }
        const parsed = data
            .split(',')
            .map(item => {
            const [property, pending] = item.split('|').map(v => v.trim());
            const pendingNumber = Number(pending);
            if (!property || Number.isNaN(pendingNumber)) {
                return null;
            }
            return {
                property,
                pending: pendingNumber,
            };
        })
            .filter((v) => v !== null);
        // 🔽 Sort by pending requests (highest first)
        parsed.sort((a, b) => b.pending - a.pending);
        return {
            properties: parsed.map(p => p.property),
            pendingRequests: parsed.map(p => p.pending),
        };
    }
    render() {
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("div", { class: "ir-page__container" }, h("h3", { class: "page-title" }, "Pending Queues"), this.data.length === 0 && h("ir-empty-state", { style: { marginTop: '20vh' } }), h("div", { class: "queue-grid" }, this.data.map(d => (h("wa-card", null, h("p", { slot: "header" }, d.q_name, " (", d.total_pending, " total pending)"), d.properties.map((property, index) => {
            const pending = d.pendingRequests[index];
            const percentage = d.total_pending > 0 ? (pending / d.total_pending) * 100 : 0;
            return (h("div", { class: "queue-item" }, h("span", { class: "queue-item__property" }, property), h("div", { class: "queue-item__status" }, h("wa-progress-bar", { class: "queue-item__progress", value: percentage }), h("span", { class: "queue-item__count" }, pending))));
        }))))))));
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
