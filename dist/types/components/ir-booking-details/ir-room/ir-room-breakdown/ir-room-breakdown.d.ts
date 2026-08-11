import { Booking, Room } from "../../../../models/booking.dto";
import { ClTx } from "../../../../services/city-ledger/types";
export declare class IrRoomBreakdown {
    room: Room;
    booking: Booking;
    currency: string;
    clTransactions: ClTx[];
    private get acmTxByDate();
    private getSmokingLabel;
    render(): any;
}
