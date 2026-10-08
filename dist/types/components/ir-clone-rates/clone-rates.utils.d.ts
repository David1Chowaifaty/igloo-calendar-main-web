import type { RoomType } from "../../models/property";
import type { CloneRatesParams } from "../../services/property/types";
export type SourceKind = 'full' | 'custom';
export type SourceOption = `${SourceKind}-${number}`;
export type Adjustment = 'none' | 'inc-fixed' | 'inc-pct' | 'dec-pct' | 'dec-fixed';
export type CloneRatesErrorField = 'dates' | 'weekdays' | 'ratePlans' | 'amount';
export type CloneRatesErrors = Partial<Record<CloneRatesErrorField, string>>;
export interface CloneRatesFormState {
    fromDate: string | null;
    toDate: string | null;
    weekdays: number[];
    ratePlanIds: number[];
    adjustment: Adjustment;
    amount: string;
    copyMinStay: boolean;
}
/** Weekday values in display order, using JS `day()` numbering (0 = Sunday). */
export declare const WEEKDAYS: number[];
/** Built on call (not at import time) so the labels follow the loaded locale. */
export declare function getAdjustments(): {
    value: Adjustment;
    label: string;
}[];
export interface RoomTypeOption {
    id: number;
    name: string;
    ratePlans: {
        id: number;
        label: string;
    }[];
}
/** Active room types with their active base (non-derived) rate plans; room types without any are dropped. */
export declare function toRoomTypeOptions(roomTypes: RoomType[]): RoomTypeOption[];
export declare function parseSourceOption(option: SourceOption): {
    kind: SourceKind;
    year: number;
};
export declare function yearBounds(year: number): {
    from: string;
    to: string;
};
export declare function isPercentage(adjustment: Adjustment): boolean;
export declare function isDecrease(adjustment: Adjustment): boolean;
/** Shifts a `YYYY-MM-DD` date to the same calendar day one year later. */
export declare function toTargetDate(date: string): string;
export declare function validateCloneRates(state: CloneRatesFormState): CloneRatesErrors;
export declare function buildCloneRatesPayload(propertyId: number, state: CloneRatesFormState): CloneRatesParams;
export interface ReviewRow {
    label: string;
    value: string;
}
/** Human-readable summary of the form, shown in the review dialog before confirming. */
export declare function buildReviewRows(state: CloneRatesFormState, roomTypes: RoomTypeOption[], currencySymbol: string): ReviewRow[];
