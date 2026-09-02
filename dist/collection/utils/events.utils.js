import moment from "moment";
import { ToBeAssignedService } from "../services/toBeAssigned.service";
import { dateToFormattedString } from "./utils";
export async function updateCategories(key, calendarData, property_id, unassignedDates) {
    try {
        const toBeAssignedService = new ToBeAssignedService();
        let categorisedRooms = {};
        const result = await toBeAssignedService.getUnassignedRooms({ from_date: calendarData.from_date, to_date: calendarData.to_date }, property_id, dateToFormattedString(new Date(+key)), calendarData.roomsInfo, calendarData.formattedLegendData);
        result.forEach(room => {
            if (!categorisedRooms.hasOwnProperty(room.RT_ID)) {
                categorisedRooms[room.RT_ID] = [room];
            }
            else {
                categorisedRooms[room.RT_ID].push(room);
            }
        });
        unassignedDates[key].categories = categorisedRooms;
    }
    catch (error) {
        //  toastr.error(error);
    }
}
/**
 * Converts an English `'ddd, DD MMM YYYY'` string into the internal `D_M_YYYY` cell key. Both
 * sides are identity, never display — hence the pinned English locale.
 */
export function transformDateFormatWithMoment(dateStr) {
    var dateObj = moment(dateStr, 'ddd, DD MMM YYYY', 'en');
    return dateObj.format('D_M_YYYY');
}
