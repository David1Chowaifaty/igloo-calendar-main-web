export declare function updateCategories(key: any, calendarData: any, property_id: any, unassignedDates: any): Promise<void>;
/**
 * Converts an English `'ddd, DD MMM YYYY'` string into the internal `D_M_YYYY` cell key. Both
 * sides are identity, never display — hence the pinned English locale.
 */
export declare function transformDateFormatWithMoment(dateStr: string): string;
