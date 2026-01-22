import { r as registerInstance, g as getElement, h, H as Host } from './index-7e96440e.js';
import { T as Token } from './Token-030c78a9.js';
import { i as isRequestPending } from './ir-interceptor.store-1376ed6c.js';
import { a as axios } from './axios-aa1335b8.js';
import './index-f100e9d2.js';

const irQueueManagerCss = ".sc-ir-queue-manager-h{display:flex;flex-direction:column;height:100%}.queue-page.sc-ir-queue-manager{display:flex;flex-direction:column;gap:1rem}.queue-grid.sc-ir-queue-manager{display:flex;flex-direction:column;gap:1rem}.queue-grid.sc-ir-queue-manager wa-card.sc-ir-queue-manager{width:100%}.queue-item.sc-ir-queue-manager{display:grid;align-items:center;gap:0.75rem;margin-bottom:0.5rem}.queue-page__header.sc-ir-queue-manager{display:flex;align-items:center;gap:1rem;margin-bottom:1rem}.page-title.sc-ir-queue-manager{margin-bottom:0}.queue-item__property.sc-ir-queue-manager{font-size:0.9rem;line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.queue-item__status.sc-ir-queue-manager{display:grid;grid-template-columns:repeat(4, 1fr);align-items:center}.queue-item__progress.sc-ir-queue-manager{grid-column:span 3}.queue-item__count.sc-ir-queue-manager{text-align:right;font-size:0.85rem}@media (min-width: 768px){.queue-grid.sc-ir-queue-manager{display:grid;grid-template-columns:repeat(2, 1fr)}}@media (min-width: 1024px){.queue-item.sc-ir-queue-manager{grid-template-columns:300px 1fr}}";
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
        await this.fetchData();
        this.isLoading = false;
    }
    async fetchData() {
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
        return (h(Host, null, h("ir-interceptor", null), h("ir-toast", null), h("div", { class: "ir-page__container" }, h("div", { class: "queue-page__header" }, h("h3", { class: "page-title" }, "Pending Queues"), h("ir-custom-button", { onClickHandler: () => {
                this.fetchData();
            }, appearance: "filled", loading: isRequestPending('/Get_Q_Summary') }, h("wa-icon", { name: "refresh" }))), this.data.length === 0 && h("ir-empty-state", { style: { marginTop: '20vh' } }), h("div", { class: "queue-grid" }, this.data.map(d => (h("wa-card", null, h("p", { slot: "header" }, d.q_name, " (", d.total_pending, " total pending)"), d.properties.map((property, index) => {
            const pending = d.pendingRequests[index];
            const percentage = d.total_pending > 0 ? (pending / d.total_pending) * 100 : 0;
            return (h("div", { class: "queue-item" }, h("span", { class: "queue-item__property" }, property), h("div", { class: "queue-item__status" }, h("wa-progress-bar", { class: "queue-item__progress", value: percentage }), h("span", { class: "queue-item__count" }, pending, " (", percentage.toFixed(2), "%)"))));
        }))))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrQueueManager.style = IrQueueManagerStyle0;

export { IrQueueManager as ir_queue_manager };

//# sourceMappingURL=ir-queue-manager.entry.js.map