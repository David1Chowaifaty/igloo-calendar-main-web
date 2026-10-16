import { DateStyle } from "../../utils/date/index";
import moment from 'moment';
export declare class IrDateView {
    /** Raw from-date — accepts ISO string, JS Date, or Moment */
    from_date: string | Date | moment.Moment;
    /** Raw to-date — accepts ISO string, JS Date, or Moment */
    to_date: string | Date | moment.Moment;
    /** Show the night-count badge after the to-date */
    showDateDifference: boolean;
    /** Display style for both dates */
    format: DateStyle;
    render(): any;
}
