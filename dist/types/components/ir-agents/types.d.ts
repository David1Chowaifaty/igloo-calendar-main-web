import { IEntries } from "../../models/IBooking";
export type AgentSetupEntries = {
    agent_rate_type: IEntries[];
    agent_type: IEntries[];
    ta_payment_method: IEntries[];
};
export declare const AgentsTypes: {
    readonly TRAVEL_AGENT: "001";
    readonly CORPORATE_CLIENT: "002";
    readonly TOUR_OPERATOR: "003";
    readonly AFFILIATE: "004";
};
