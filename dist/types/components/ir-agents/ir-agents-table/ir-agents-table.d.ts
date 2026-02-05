import { EventEmitter } from '../../../stencil-public-runtime';
import type { Agent } from "../../../services/agents/type";
import { AgentSetupEntries } from '../types';
import { ICountry } from "../../../models/IBooking";
export declare class IrAgentsTable {
    agents: Agent[];
    setupEntries: AgentSetupEntries;
    countries: ICountry[];
    language: string;
    upsertAgent: EventEmitter<Agent>;
    deleteAgent: EventEmitter<Agent>;
    toggleAgentActive: EventEmitter<Agent>;
    private getAgentTypeLabel;
    private getAgentPhoneNumber;
    private createAgent;
    render(): any;
}
