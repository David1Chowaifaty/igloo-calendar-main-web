import { EventEmitter } from '../../../stencil-public-runtime';
import type { Agent } from "../../../services/agents/type";
import { ICountry } from "../../../models/IBooking";
import { AgentSetupEntries } from '../types';
export declare class IrAgentEditorDrawer {
    open: boolean;
    agent?: Agent;
    countries: ICountry[];
    setupEntries: AgentSetupEntries;
    currentTab: 'profile' | 'contract';
    agentEditorClose: EventEmitter<void>;
    private baseId;
    private handleDrawerClose;
    render(): any;
}
