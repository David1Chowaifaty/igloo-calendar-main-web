import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { A as AgentsService, d as defineCustomElement$o } from './ir-agent-editor-form2.js';
import { B as BookingService } from './booking.store.js';
import { c as calendar_data } from './calendar-data.js';
import { P as PropertyService } from './property.service.js';
import { d as defineCustomElement$q } from './ir-agent-contract2.js';
import { d as defineCustomElement$p } from './ir-agent-editor-drawer2.js';
import { d as defineCustomElement$n } from './ir-agent-profile2.js';
import { d as defineCustomElement$m } from './ir-agents-table2.js';
import { d as defineCustomElement$l } from './ir-button2.js';
import { d as defineCustomElement$k } from './ir-country-picker2.js';
import { d as defineCustomElement$j } from './ir-custom-button2.js';
import { d as defineCustomElement$i } from './ir-dialog2.js';
import { d as defineCustomElement$h } from './ir-drawer2.js';
import { d as defineCustomElement$g } from './ir-empty-state2.js';
import { d as defineCustomElement$f } from './ir-icons2.js';
import { d as defineCustomElement$e } from './ir-input2.js';
import { d as defineCustomElement$d } from './ir-input-text2.js';
import { d as defineCustomElement$c } from './ir-interceptor2.js';
import { d as defineCustomElement$b } from './ir-loading-screen2.js';
import { d as defineCustomElement$a } from './ir-otp2.js';
import { d as defineCustomElement$9 } from './ir-otp-modal2.js';
import { d as defineCustomElement$8 } from './ir-picker2.js';
import { d as defineCustomElement$7 } from './ir-picker-item2.js';
import { d as defineCustomElement$6 } from './ir-spinner2.js';
import { d as defineCustomElement$5 } from './ir-toast2.js';
import { d as defineCustomElement$4 } from './ir-toast-alert2.js';
import { d as defineCustomElement$3 } from './ir-toast-provider2.js';
import { d as defineCustomElement$2 } from './ir-validator2.js';

const irAgentsCss = ".sc-ir-agents-h{display:block}.page-header__container.sc-ir-agents{display:flex;align-items:center;justify-content:space-between}";
const IrAgentsStyle0 = irAgentsCss;

const IrAgents$1 = /*@__PURE__*/ proxyCustomElement(class IrAgents extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.toast = createEvent(this, "toast", 7);
    }
    propertyid;
    ticket;
    language = 'en';
    agents = [];
    selectedAgent = null;
    isDrawerOpen = false;
    isDeleteDialogOpen = false;
    isLoading = true;
    countries;
    setupEntries;
    toast;
    agentsService = new AgentsService();
    propertyService = new PropertyService();
    bookingService = new BookingService();
    tokenService = new Token();
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange() {
        this.tokenService.setToken(this.ticket);
        this.init();
    }
    handleUpsertAgent(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.upsertAgent(e.detail);
    }
    async init() {
        try {
            this.isLoading = true;
            const [countries, setupEntries] = await Promise.all([
                this.bookingService.getCountries(this.language),
                this.bookingService.getSetupEntriesByTableNameMulti(['_AGENT_RATE_TYPE', '_AGENT_TYPE', '_TA_PAYMENT_METHOD']),
                this.propertyService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                }),
                this.fetchAgents(),
            ]);
            const { agent_rate_type, agent_type, ta_payment_method } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.setupEntries = {
                agent_rate_type,
                agent_type,
                ta_payment_method,
            };
            this.countries = countries;
            this.isLoading = false;
        }
        catch (error) {
            console.error(error);
        }
    }
    upsertAgent(agent) {
        let agents = [...this.agents];
        const idx = agents.findIndex(a => a.id === agent.id);
        if (idx === -1) {
            agents = [...agents, agent];
        }
        else {
            agents[idx] = { ...agent };
        }
        this.agents = [...agents];
    }
    async fetchAgents() {
        this.agents = await this.agentsService.getExposedAgents({ property_id: this.propertyid });
    }
    handleEditAgent(agent) {
        this.selectedAgent = agent;
        this.isDrawerOpen = true;
    }
    handleDeleteAgent(agent) {
        this.selectedAgent = agent;
        this.isDeleteDialogOpen = true;
    }
    handleDrawerClose() {
        this.isDrawerOpen = false;
        this.selectedAgent = null;
    }
    handleDeleteDialogClose() {
        this.isDeleteDialogOpen = false;
        this.selectedAgent = null;
    }
    confirmDeleteAgent() {
        if (!this.selectedAgent) {
            return;
        }
        this.agents = this.agents.filter(agent => agent.id !== this.selectedAgent?.id);
        this.handleDeleteDialogClose();
    }
    async handleToggleAgentStatus(agent) {
        try {
            await this.agentsService.handleExposedAgent({ agent });
            this.upsertAgent(agent);
            this.toast.emit({
                type: 'success',
                description: '',
                title: 'Saved Successfully',
                position: 'top-right',
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, { "data-testid": "ir-agents" }, h("ir-toast", null), h("ir-interceptor", { handledEndpoints: ['/Get_Rooms_To_Check_in'] }), h("div", { class: "ir-page__container" }, h("div", { class: "page-header__container" }, h("h3", { class: "page-title" }, "Agents"), h("ir-custom-button", { onClickHandler: () => {
                this.selectedAgent = {
                    id: -1,
                    name: '',
                    code: '',
                    address: '',
                    city: '',
                    country_id: null,
                    phone: '',
                    email: '',
                    email_copied_upon_booking: null,
                    contact_name: '',
                    tax_nbr: '',
                    notes: '',
                    question: '',
                    agent_rate_type_code: {
                        code: '001',
                    },
                    agent_type_code: {
                        code: '',
                    },
                    payment_mode: {
                        code: '001',
                    },
                    contract_nbr: null,
                    currency_id: null,
                    due_balance: null,
                    sort_order: null,
                    property_id: calendar_data.property.id,
                    provided_discount: null,
                    is_active: true,
                    is_send_guest_confirmation_email: false,
                    verification_mode: 'code',
                };
                this.isDrawerOpen = true;
            }, variant: "brand", "data-testid": "create-agent-button" }, "New Agent")), h("ir-agents-table", { countries: this.countries, setupEntries: this.setupEntries, onToggleAgentActive: event => this.handleToggleAgentStatus(event.detail), agents: this.agents, onEditAgent: event => this.handleEditAgent(event.detail), onDeleteAgent: event => this.handleDeleteAgent(event.detail) })), h("ir-agent-editor-drawer", { setupEntries: this.setupEntries, countries: this.countries, open: this.isDrawerOpen, agent: this.selectedAgent ?? undefined, onAgentEditorClose: () => this.handleDrawerClose() }), h("ir-dialog", { label: "Delete Agent", open: this.isDeleteDialogOpen, lightDismiss: false, onIrDialogHide: () => this.handleDeleteDialogClose() }, h("span", null, this.selectedAgent
            ? `Are you sure you want to delete ${this.selectedAgent.name}? This action permanently removes the agent and cannot be undone.`
            : 'Are you sure you want to delete this agent? This action permanently removes the agent and cannot be undone.'), h("div", { slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, "Cancel"), h("ir-custom-button", { size: "medium", appearance: "accent", variant: "danger", onClickHandler: () => this.confirmDeleteAgent() }, "Delete")))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
    static get style() { return IrAgentsStyle0; }
}, [2, "ir-agents", {
        "propertyid": [2],
        "ticket": [1],
        "language": [1],
        "agents": [32],
        "selectedAgent": [32],
        "isDrawerOpen": [32],
        "isDeleteDialogOpen": [32],
        "isLoading": [32],
        "countries": [32],
        "setupEntries": [32]
    }, [[0, "upsertAgent", "handleUpsertAgent"]], {
        "ticket": ["handleTicketChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-agents", "ir-agent-contract", "ir-agent-editor-drawer", "ir-agent-editor-form", "ir-agent-profile", "ir-agents-table", "ir-button", "ir-country-picker", "ir-custom-button", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-icons", "ir-input", "ir-input-text", "ir-interceptor", "ir-loading-screen", "ir-otp", "ir-otp-modal", "ir-picker", "ir-picker-item", "ir-spinner", "ir-toast", "ir-toast-alert", "ir-toast-provider", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-agents":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrAgents$1);
            }
            break;
        case "ir-agent-contract":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-agent-editor-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-agent-editor-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-agent-profile":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-agents-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-toast-provider":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrAgents = IrAgents$1;
const defineCustomElement = defineCustomElement$1;

export { IrAgents, defineCustomElement };

//# sourceMappingURL=ir-agents.js.map