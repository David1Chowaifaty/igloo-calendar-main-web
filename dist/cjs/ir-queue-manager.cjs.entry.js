'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const Token = require('./Token-8fd11984.js');
const axios = require('./axios-6e678d52.js');

const irQueueManagerCss = ".sc-ir-queue-manager-h{display:flex;flex-direction:column;height:100%}";
const IrQueueManagerStyle0 = irQueueManagerCss;

const IrQueueManager = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    ticket = '';
    isLoading = true;
    tokenService = new Token.Token();
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
        const { data } = await axios.axios.post('/Get_Q_Summary', {});
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
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("div", { class: "ir-page__container" }, index.h("h3", { class: "page-title" }, "Pending Queues"), this.data.length === 0 && index.h("ir-empty-state", { style: { marginTop: '20vh' } }), this.data.map(d => (index.h("wa-card", null, index.h("p", { slot: "header" }, d.q_name, " (", d.total_pending, " total pending)"), index.h("ir-queue-chart", { label: d.q_name, labels: d.properties, values: d.pendingRequests })))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrQueueManager.style = IrQueueManagerStyle0;

exports.ir_queue_manager = IrQueueManager;

//# sourceMappingURL=ir-queue-manager.cjs.entry.js.map