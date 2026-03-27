import Token from "../../models/Token";
import { AgentsService } from "../../services/agents/agents.service";
import { BookingService } from "../../services/booking-service/booking.service";
import { Host, h } from "@stencil/core";
import calendar_data from "../../stores/calendar-data";
import { PropertyService } from "../../services/property.service";
export class IrAgents {
    /**
     * Authentication token issued by the PMS backend.
     * Required for initializing the component and making API calls.
     */
    ticket;
    /**
     * ID of the property (hotel) for which arrivals should be displayed.
     * Used in API calls related to rooms, bookings, and check-ins.
     */
    propertyid;
    /**
     * Two-letter language code (ISO) used for translations and API locale.
     * Defaults to `'en'`.
     */
    language = 'en';
    /**
     * Property alias or short identifier used by backend endpoints (aname).
     * Passed to `getExposedProperty` when initializing the component.
     */
    p;
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
    handleUpsertAgentListener(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.upsertAgent();
    }
    async init() {
        try {
            this.isLoading = true;
            if (!this.propertyid && !this.p) {
                throw new Error('Missing credentials');
            }
            let propertyId = this.propertyid;
            if (!propertyId) {
                await this.propertyService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
            }
            const [countries, setupEntries] = await Promise.all([
                this.bookingService.getCountries(this.language),
                this.bookingService.getSetupEntriesByTableNameMulti(['_AGENT_RATE_TYPE', '_AGENT_TYPE', '_TA_PAYMENT_METHOD', '_CL_POST_TIMING']),
                calendar_data?.property
                    ? Promise.resolve(null)
                    : this.propertyService.getExposedProperty({
                        id: this.propertyid || 0,
                        language: this.language,
                        aname: this.p,
                    }),
                this.fetchAgents(),
            ]);
            const { agent_rate_type, agent_type, ta_payment_method, cl_post_timing } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.setupEntries = {
                agent_rate_type,
                agent_type,
                ta_payment_method,
                cl_post_timing,
            };
            this.countries = countries;
            this.isLoading = false;
        }
        catch (error) {
            console.error(error);
        }
    }
    upsertAgent() {
        this.fetchAgents();
    }
    async fetchAgents() {
        const agents = await this.agentsService.getExposedAgents({ property_id: calendar_data?.property ? calendar_data?.property.id : this.propertyid });
        this.agents = agents.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
    }
    handleUpsertAgent(agent) {
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
            this.upsertAgent();
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
        return (h(Host, { "data-testid": "ir-agents" }, h("ir-toast", null), h("ir-interceptor", { handledEndpoints: ['/Get_Rooms_To_Check_in'] }), h("div", { class: "ir-page__container" }, h("div", { class: "page-header__container" }, h("h3", { class: "page-title" }, "Agents/Companies")), h("ir-agents-table", { countries: this.countries, setupEntries: this.setupEntries, onToggleAgentActive: event => this.handleToggleAgentStatus(event.detail), agents: this.agents, onUpsertAgent: event => this.handleUpsertAgent(event.detail), onDeleteAgent: event => this.handleDeleteAgent(event.detail) })), h("ir-agent-editor-drawer", { setupEntries: this.setupEntries, countries: this.countries, open: this.isDrawerOpen, agent: this.selectedAgent ?? undefined, onAgentEditorClose: () => this.handleDrawerClose() }), h("ir-dialog", { label: "Delete Agent", open: this.isDeleteDialogOpen, lightDismiss: false, onIrDialogHide: () => this.handleDeleteDialogClose() }, h("span", null, this.selectedAgent
            ? `Are you sure you want to delete ${this.selectedAgent.name}? This action permanently removes the agent and cannot be undone.`
            : 'Are you sure you want to delete this agent? This action permanently removes the agent and cannot be undone.'), h("div", { slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, "Cancel"), h("ir-custom-button", { size: "medium", appearance: "accent", variant: "danger", onClickHandler: () => this.confirmDeleteAgent() }, "Delete")))));
    }
    static get is() { return "ir-agents"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-agents.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-agents.css"]
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
                    "text": "Authentication token issued by the PMS backend.\nRequired for initializing the component and making API calls."
                },
                "getter": false,
                "setter": false,
                "attribute": "ticket",
                "reflect": false
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
                    "text": "ID of the property (hotel) for which arrivals should be displayed.\nUsed in API calls related to rooms, bookings, and check-ins."
                },
                "getter": false,
                "setter": false,
                "attribute": "propertyid",
                "reflect": false
            },
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
                    "text": "Two-letter language code (ISO) used for translations and API locale.\nDefaults to `'en'`."
                },
                "getter": false,
                "setter": false,
                "attribute": "language",
                "reflect": false,
                "defaultValue": "'en'"
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
                    "text": "Property alias or short identifier used by backend endpoints (aname).\nPassed to `getExposedProperty` when initializing the component."
                },
                "getter": false,
                "setter": false,
                "attribute": "p",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "agents": {},
            "selectedAgent": {},
            "isDrawerOpen": {},
            "isDeleteDialogOpen": {},
            "isLoading": {},
            "countries": {},
            "setupEntries": {}
        };
    }
    static get events() {
        return [{
                "method": "toast",
                "name": "toast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IToast",
                    "resolved": "ICustomToast & Partial<IToastWithButton> | IDefaultToast & Partial<IToastWithButton>",
                    "references": {
                        "IToast": {
                            "location": "import",
                            "path": "../ui/ir-toast/toast",
                            "id": "src/components/ui/ir-toast/toast.ts::IToast"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "upsertAgent",
                "method": "handleUpsertAgentListener",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-agents.js.map
