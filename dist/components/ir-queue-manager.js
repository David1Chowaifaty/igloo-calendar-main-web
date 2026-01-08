import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { a as axios } from './axios.js';
import { d as defineCustomElement$4 } from './ir-empty-state2.js';
import { d as defineCustomElement$3 } from './ir-loading-screen2.js';
import { d as defineCustomElement$2 } from './ir-queue-chart2.js';

const irQueueManagerCss = ".sc-ir-queue-manager-h{display:flex;flex-direction:column;height:100%}";
const IrQueueManagerStyle0 = irQueueManagerCss;

const IrQueueManager$1 = /*@__PURE__*/ proxyCustomElement(class IrQueueManager extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    get el() { return this; }
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
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
    static get style() { return IrQueueManagerStyle0; }
}, [2, "ir-queue-manager", {
        "ticket": [1],
        "isLoading": [32],
        "data": [32]
    }, undefined, {
        "ticket": ["handleTicketChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-queue-manager", "ir-empty-state", "ir-loading-screen", "ir-queue-chart"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-queue-manager":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrQueueManager$1);
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-queue-chart":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrQueueManager = IrQueueManager$1;
const defineCustomElement = defineCustomElement$1;

export { IrQueueManager, defineCustomElement };

//# sourceMappingURL=ir-queue-manager.js.map