import { EventEmitter } from '../../../../stencil-public-runtime';
import { Room } from "../../../../models/booking.dto";
import { Agent } from "../../../../services/agents/type";
export type IrRoomHeaderAction = 'edit' | 'edit-rates' | 'delete' | 'toggle' | 'add-extra-service' | 'print-registration-card';
export declare class IrRoomHeader {
    room: Room;
    myRoomTypeFoodCat: string;
    mealCodeName: string;
    currency: string;
    isEditable: boolean;
    hasRoomEdit: boolean;
    hasRoomDelete: boolean;
    agent: Agent;
    action: EventEmitter<IrRoomHeaderAction>;
    openHbDialog: EventEmitter<void>;
    private get isHalfBoard();
    private get unitId();
    /** Registration card exists once the guest checked in — and stays printable after check-out. */
    private get canPrintRegistrationCard();
    render(): any;
}
