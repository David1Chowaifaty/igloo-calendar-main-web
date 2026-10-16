import { SetupEntries } from "../../models/IBooking";
export type AgentSetupEntries = {
    agent_rate_type: SetupEntries[];
    agent_type: SetupEntries[];
    ta_payment_method: SetupEntries[];
    cl_post_timing: SetupEntries[];
};
export declare const AgentsTypes: {
    readonly TRAVEL_AGENT: "001";
    readonly CORPORATE_CLIENT: "002";
    readonly TOUR_OPERATOR: "003";
    readonly AFFILIATE: "004";
};
