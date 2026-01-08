import { r as registerInstance, g as getElement, h, H as Host } from './index-7e96440e.js';
import { T as Token } from './Token-030c78a9.js';
import { a as axios } from './axios-aa1335b8.js';

const irQueueManagerCss = ".sc-ir-queue-manager-h{display:flex;flex-direction:column;height:100%}";
const IrQueueManagerStyle0 = irQueueManagerCss;

const IrQueueManager = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
};
IrQueueManager.style = IrQueueManagerStyle0;

export { IrQueueManager as ir_queue_manager };

//# sourceMappingURL=ir-queue-manager.entry.js.map