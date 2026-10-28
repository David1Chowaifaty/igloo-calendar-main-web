import { EventEmitter } from '../../../../stencil-public-runtime';
import { type Agent } from "../../../../services/agents/type";
import { AgentSetupEntries } from '../../types';
import { RoomTypeCodeMap } from './room-type-codes';
export declare class IrAgentContract {
    agent?: Agent;
    setupEntries: AgentSetupEntries;
    roomTypeCodes: RoomTypeCodeMap;
    roomTypeQuery: string;
    agentFieldChanged: EventEmitter<Partial<Agent>>;
    /** Last array this component emitted, so its own echo doesn't rebuild the map mid-typing. */
    private emittedRoomTypeCodes;
    componentWillLoad(): void;
    handleAgentChange(): void;
    private syncRoomTypeCodes;
    private updateField;
    private handleRoomTypeCodeChange;
    private renderRoomTypeCodes;
    private handleRatesChange;
    private get selectedRate();
    render(): any;
}
