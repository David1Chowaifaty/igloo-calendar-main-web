import { EventEmitter } from '../../../../stencil-public-runtime';
import { type Agent } from "../../../../services/agents/type";
import { AgentSetupEntries } from '../../types';
export declare class IrAgentContract {
    agent?: Agent;
    setupEntries: AgentSetupEntries;
    agentFieldChanged: EventEmitter<Partial<Agent>>;
    componentWillLoad(): void;
    private updateField;
    private handleRatesChange;
    private get selectedRate();
    render(): any;
}
