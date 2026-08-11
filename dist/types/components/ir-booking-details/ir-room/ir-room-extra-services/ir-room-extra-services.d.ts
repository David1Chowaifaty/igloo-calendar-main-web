import { EventEmitter } from '../../../../stencil-public-runtime';
import { Booking, Room } from "../../../../models/booking.dto";
import { Agent } from "../../../../services/agents/type";
import { IEntries } from "../../../../models/IBooking";
import { ClTx } from "../../../../services/city-ledger/types";
export declare class IrRoomExtraServices {
    room: Room;
    booking: Booking;
    isEditable: boolean;
    agent: Agent;
    currency: string;
    language: string;
    svcCategories: IEntries[];
    clTransactions: ClTx[];
    /** Which collapsible groups ('all' | 'agent' | 'guest') are expanded — keyed so agent/guest folios can be toggled independently. */
    expandedGroups: Set<string>;
    requestAddExtraService: EventEmitter<void>;
    private get unitId();
    /** Extra services linked to this unit via `room_identifier`. */
    private get roomExtraServices();
    /** Services whose category is always surfaced (e.g. Early Check-In / Late Check-Out) — never tucked behind the collapse. */
    private pinnedOf;
    /** Everything else — hidden behind the "N more services" disclosure. */
    private collapsibleOf;
    private setGroupExpanded;
    private renderExtraServiceItem;
    /** Renders the pinned + collapsible services for one folio group (or the whole list when not in agent mode). */
    private renderServiceGroup;
    render(): any;
}
