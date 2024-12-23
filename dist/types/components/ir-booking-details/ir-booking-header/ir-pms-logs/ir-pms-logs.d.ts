import { IPmsLog } from "../../../../models/booking.dto";
export declare class IrPmsLogs {
    bookingNumber: string;
    pmsLogs: IPmsLog;
    private bookingService;
    componentWillLoad(): void;
    private init;
    render(): any;
}
