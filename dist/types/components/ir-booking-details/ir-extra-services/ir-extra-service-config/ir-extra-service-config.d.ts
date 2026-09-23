import { Booking, ExtraService } from "../../../../models/booking.dto";
import { Agent } from "../../../../services/agents/type";
import { SetupEntries } from "../../../../models/property";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrExtraServiceConfig {
    booking: Booking;
    agent: Agent;
    svcCategories: SetupEntries[];
    service: ExtraService;
    language: string;
    open: boolean;
    defaultIdentifier: string | null;
    closeModal: EventEmitter<null>;
    private closeDialog;
    render(): any;
}
