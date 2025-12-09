import { Moment } from 'moment';
import { z } from 'zod';
export type RoomDates = {
    from_date: Moment;
    to_date: Moment;
};
export declare const SelectedUnitSchema: z.ZodObject<{
    roomtype_id: z.ZodNumber;
    unit_id: z.ZodNumber;
    rateplan_id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    rateplan_id?: number;
    unit_id?: number;
    roomtype_id?: number;
}, {
    rateplan_id?: number;
    unit_id?: number;
    roomtype_id?: number;
}>;
export type SelectedUnit = z.infer<typeof SelectedUnitSchema>;
