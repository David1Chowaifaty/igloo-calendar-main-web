import { ICountry } from "../../models/IBooking";
import type { Agent, Agents } from "../../services/agents/type";
import { EventEmitter } from '../../stencil-public-runtime';
import { AgentSetupEntries } from './types';
import { IToast } from '../ui/ir-toast/toast';
export declare class IrAgents {
    /**
     * Authentication token issued by the PMS backend.
     * Required for initializing the component and making API calls.
     */
    ticket: string;
    /**
     * ID of the property (hotel) for which arrivals should be displayed.
     * Used in API calls related to rooms, bookings, and check-ins.
     */
    propertyid: number;
    /**
     * Two-letter language code (ISO) used for translations and API locale.
     * Defaults to `'en'`.
     */
    language: string;
    /**
     * Property alias or short identifier used by backend endpoints (aname).
     * Passed to `getExposedProperty` when initializing the component.
     */
    p: string;
    agents: Agents;
    selectedAgent: Agent | null;
    isDrawerOpen: boolean;
    isDeleteDialogOpen: boolean;
    isLoading: boolean;
    countries: ICountry[];
    setupEntries: AgentSetupEntries;
    toast: EventEmitter<IToast>;
    private agentsService;
    private propertyService;
    private bookingService;
    private tokenService;
    componentWillLoad(): void;
    handleTicketChange(): void;
    handleUpsertAgent(e: CustomEvent<Agent>): void;
    private init;
    private upsertAgent;
    private fetchAgents;
    private handleEditAgent;
    private handleDeleteAgent;
    private handleDrawerClose;
    private handleDeleteDialogClose;
    private confirmDeleteAgent;
    private handleToggleAgentStatus;
    render(): any;
}
