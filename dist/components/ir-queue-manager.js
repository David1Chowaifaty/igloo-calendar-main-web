import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { a as axios } from './axios.js';
import { d as defineCustomElement$d } from './ir-button2.js';
import { d as defineCustomElement$c } from './ir-custom-button2.js';
import { d as defineCustomElement$b } from './ir-empty-state2.js';
import { d as defineCustomElement$a } from './ir-icons2.js';
import { d as defineCustomElement$9 } from './ir-interceptor2.js';
import { d as defineCustomElement$8 } from './ir-loading-screen2.js';
import { d as defineCustomElement$7 } from './ir-otp2.js';
import { d as defineCustomElement$6 } from './ir-otp-modal2.js';
import { d as defineCustomElement$5 } from './ir-spinner2.js';
import { d as defineCustomElement$4 } from './ir-toast2.js';
import { d as defineCustomElement$3 } from './ir-toast-alert2.js';
import { d as defineCustomElement$2 } from './ir-toast-provider2.js';

const irQueueManagerCss = ".sc-ir-queue-manager-h{display:flex;flex-direction:column;height:100%}.queue-page.sc-ir-queue-manager{display:flex;flex-direction:column;gap:1rem}.queue-grid.sc-ir-queue-manager{display:flex;flex-direction:column;gap:1rem}.queue-grid.sc-ir-queue-manager wa-card.sc-ir-queue-manager{width:100%}.queue-item.sc-ir-queue-manager{display:grid;align-items:center;gap:0.75rem;margin-bottom:0.5rem}.queue-page__header.sc-ir-queue-manager{display:flex;align-items:center;gap:1rem;margin-bottom:1rem}.page-title.sc-ir-queue-manager{margin-bottom:0}.queue-item__property.sc-ir-queue-manager{font-size:0.9rem;line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.queue-item__status.sc-ir-queue-manager{display:grid;grid-template-columns:repeat(4, 1fr);align-items:center}.queue-item__progress.sc-ir-queue-manager{grid-column:span 3}.queue-item__count.sc-ir-queue-manager{text-align:right;font-size:0.85rem}@media (min-width: 768px){.queue-grid.sc-ir-queue-manager{display:grid;grid-template-columns:repeat(2, 1fr)}}@media (min-width: 1024px){.queue-item.sc-ir-queue-manager{grid-template-columns:300px 1fr}}";
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
    const components = ["ir-queue-manager", "ir-button", "ir-custom-button", "ir-empty-state", "ir-icons", "ir-interceptor", "ir-loading-screen", "ir-otp", "ir-otp-modal", "ir-spinner", "ir-toast", "ir-toast-alert", "ir-toast-provider"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-queue-manager":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrQueueManager$1);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-toast-provider":
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