import { EventEmitter } from '../../../../stencil-public-runtime';
import { type Agent } from "../../../../services/agents/type";
import { ICountry } from "../../../../models/IBooking";
import { AgentSetupEntries } from '../../types';
export declare class IrAgentEditorForm {
    agent: Agent;
    formId: string;
    countries: ICountry[];
    setupEntries: AgentSetupEntries;
    upsertAgent: EventEmitter<Agent>;
    closeDrawer: EventEmitter<void>;
    loadingChanged: EventEmitter<string>;
    private agentService;
    handleAgentFieldChange(e: CustomEvent<Partial<Agent>>): void;
    private saveOrEditAgent;
    render(): any;
}
