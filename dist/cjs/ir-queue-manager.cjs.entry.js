'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const Token = require('./Token-8fd11984.js');
const axios = require('./axios-6e678d52.js');

const irQueueManagerCss = ".sc-ir-queue-manager-h{display:flex;flex-direction:column;height:100%}.queue-page.sc-ir-queue-manager{display:flex;flex-direction:column;gap:1rem}.queue-grid.sc-ir-queue-manager{display:flex;flex-direction:column;gap:1rem}.queue-grid.sc-ir-queue-manager wa-card.sc-ir-queue-manager{width:100%}.queue-item.sc-ir-queue-manager{display:grid;align-items:center;gap:0.75rem;margin-bottom:0.5rem}.queue-item__property.sc-ir-queue-manager{font-size:0.9rem;line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.queue-item__status.sc-ir-queue-manager{display:flex;align-items:center;gap:0.5rem}.queue-item__progress.sc-ir-queue-manager{flex:1 1 0%}.queue-item__count.sc-ir-queue-manager{width:20px;text-align:right;font-size:0.85rem}@media (min-width: 768px){.queue-grid.sc-ir-queue-manager{display:grid;grid-template-columns:repeat(2, 1fr)}}@media (min-width: 1024px){.queue-item.sc-ir-queue-manager{grid-template-columns:300px 1fr}}";
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
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("div", { class: "ir-page__container" }, index.h("h3", { class: "page-title" }, "Pending Queues"), this.data.length === 0 && index.h("ir-empty-state", { style: { marginTop: '20vh' } }), index.h("div", { class: "queue-grid" }, this.data.map(d => (index.h("wa-card", null, index.h("p", { slot: "header" }, d.q_name, " (", d.total_pending, " total pending)"), d.properties.map((property, index$1) => {
            const pending = d.pendingRequests[index$1];
            const percentage = d.total_pending > 0 ? (pending / d.total_pending) * 100 : 0;
            return (index.h("div", { class: "queue-item" }, index.h("span", { class: "queue-item__property" }, property), index.h("div", { class: "queue-item__status" }, index.h("wa-progress-bar", { class: "queue-item__progress", value: percentage }), index.h("span", { class: "queue-item__count" }, pending))));
        }))))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrQueueManager.style = IrQueueManagerStyle0;

exports.ir_queue_manager = IrQueueManager;

//# sourceMappingURL=ir-queue-manager.cjs.entry.js.map