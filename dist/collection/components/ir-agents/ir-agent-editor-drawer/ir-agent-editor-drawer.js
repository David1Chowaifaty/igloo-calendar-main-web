import { Host, h } from "@stencil/core";
import { v4 } from "uuid";
export class IrAgentEditorDrawer {
    open = false;
    agent;
    countries;
    setupEntries;
    currentTab = 'profile';
    loading;
    agentEditorClose;
    baseId = `agent-form__id-${v4()}`;
    handleDrawerClose(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!e.detail) {
            return;
        }
        this.currentTab = 'profile';
        this.agentEditorClose.emit();
    }
    // private handleTabChange(e: CustomEvent<{ name: String }>) {
    //   this.currentTab = (e.detail.name.toString() ?? 'profile') as 'profile' | 'contract';
    // }
    render() {
        const isEditMode = this.agent?.id !== -1;
        return (h(Host, { key: 'f78a628eef0493091a5907480f170227ed77168f', "data-testid": "agent-editor-drawer" }, h("ir-drawer", { key: 'acd6d18ebc079f9efa66fe78ed5b28ecb83b758e', class: "agent__drawer", style: { '--ir-drawer-width': '60rem' }, label: isEditMode ? 'Edit Agent' : 'New Agent', open: this.open, "data-testid": "agent-editor-drawer-container", onDrawerHide: e => this.handleDrawerClose(e) }, this.open && (
        // <wa-tab-group class="agent-form__tab-group" activation='manual' active={this.currentTab.toString()} onwa-tab-show={e => this.handleTabChange(e)}>
        //   <wa-tab panel="profile" >Profile</wa-tab>
        //   <wa-tab disabled={!isEditMode} panel="contract">Contract</wa-tab>
        //   <wa-tab-panel name="profile" active={this.currentTab === "profile"}>
        //     {this.currentTab === 'profile' && <ir-agent-profile formId={formId} agent={this.agent}></ir-agent-profile>}
        //   </wa-tab-panel>
        //   <wa-tab-panel name="contract" active={this.currentTab === "contract"}>
        //     {this.currentTab === 'contract' && <ir-agent-contract formId={formId} agent={this.agent}></ir-agent-contract>}
        //   </wa-tab-panel>
        // </wa-tab-group>
        h("ir-agent-editor-form", { key: '1dbc70bbbcd63589b5eb523fa73310a89ba57f4a', onCloseDrawer: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.agentEditorClose.emit();
            }, onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loading = e.detail;
            }, setupEntries: this.setupEntries, countries: this.countries, agent: this.agent, formId: this.baseId, "data-testid": "agent-editor-form" })), h("div", { key: 'da801c32f84ffc000d39f75e351f0f4bd0fd77c9', slot: "footer", class: "ir__drawer-footer", "data-testid": "agent-editor-drawer-footer" }, h("ir-custom-button", { key: '28242b46b2d64a359edbf3b45a934f6bc40355df', size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral", "data-testid": "agent-editor-cancel-button" }, "Cancel"), h("ir-custom-button", { key: '58c695672679dfddcc34c7d5ebf8c80c6fd81482', loading: this.loading === (this.agent?.id === -1 ? 'save&close' : 'save'), type: "submit", form: this.baseId, size: "m", value: this.agent?.id === -1 ? 'save&close' : 'save', appearance: this.agent?.id === -1 ? 'accent' : 'outlined', variant: "brand", "data-testid": "agent-editor-save-button" }, "Save"), this.agent?.id !== -1 && (h("ir-custom-button", { key: '0fca15f25cd4b1769fb95a6a3884e7ae3065c067', loading: this.loading === 'save&close', type: "submit", form: this.baseId, size: "m", value: "save&close", appearance: "accent", variant: "brand", "data-testid": "agent-editor-save-button" }, "Save & Close"))))));
    }
    static get is() { return "ir-agent-editor-drawer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-agent-editor-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-agent-editor-drawer.css"]
        };
    }
    static get properties() {
        return {
            "open": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "reflect": true,
                "attribute": "open",
                "defaultValue": "false"
            },
            "agent": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Agent",
                    "resolved": "{ name?: string; id?: number; email?: string; code?: string; property_id?: any; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
                    "references": {
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent",
                            "referenceLocation": "Agent"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "countries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICountry[]",
                    "resolved": "ICountry[]",
                    "references": {
                        "ICountry": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::ICountry",
                            "referenceLocation": "ICountry"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "setupEntries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AgentSetupEntries",
                    "resolved": "{ agent_rate_type: IEntries[]; agent_type: IEntries[]; ta_payment_method: IEntries[]; cl_post_timing: IEntries[]; }",
                    "references": {
                        "AgentSetupEntries": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-agents/types.ts::AgentSetupEntries",
                            "referenceLocation": "AgentSetupEntries"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "currentTab": {},
            "loading": {}
        };
    }
    static get events() {
        return [{
                "method": "agentEditorClose",
                "name": "agentEditorClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
