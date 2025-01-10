import axios from "axios";
export class BookingService {
    async GetPenaltyStatement(params) {
        const { data } = await axios.post('/Get_Penalty_Statement', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
}
//# sourceMappingURL=booking.service.js.map
