import { EventEmitter } from '../../../../stencil-public-runtime';
import { type Agent } from "../../../../services/agents/type";
import { ICountry } from "../../../../models/IBooking";
import { AgentSetupEntries } from '../../types';
export declare class IrAgentProfile {
    agent?: Agent;
    countries: ICountry[];
    setupEntries: AgentSetupEntries;
    agentFieldChanged: EventEmitter<Partial<Agent>>;
    private updateField;
    private getCountryPhonePrefix;
    render(): any;
}
