import { Booking, ExtraService } from "../../../../models/booking.dto";
import { Agent } from "../../../../services/agents/type";
import { IEntries } from "../../../../models/property";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrExtraServiceConfig {
    booking: Booking;
    agent: Agent;
    svcCategories: IEntries[];
    service: ExtraService;
    language: string;
    open: boolean;
    closeModal: EventEmitter<null>;
    private closeDialog;
    render(): any;
}
