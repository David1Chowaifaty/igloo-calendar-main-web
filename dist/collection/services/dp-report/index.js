import axios from "axios";
import { GetDPBookingsReportParamsSchema } from "./types";
export class DpReportService {
    /** Callers are expected to have already resolved property_id/property_ids/channel for the user's privilege level. */
    async getDPBookingsReport(params) {
        const payload = GetDPBookingsReportParamsSchema.parse(params);
        const { data } = await axios.post(`/Get_DP_Bookings_Report`, payload);
        return { bookings: [...data.My_Result.bookings], summary: data.My_Result.summary };
    }
}
