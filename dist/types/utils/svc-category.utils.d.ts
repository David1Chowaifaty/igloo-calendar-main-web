import { IEntries } from "../models/property";
export interface SvcCategoryGroup {
    code: string;
    label: string;
    categories: IEntries[];
}
/**
 * Top-level `svc_category` entries: those whose `NOTES` does *not* reference another category as a
 * parent group (e.g. Spa's "Treatments, fitness, and wellness programs" is free text, so it stays
 * top-level; Breakfast's `NOTES` of `ACM` is shaped like a code, so it's a sub-category instead).
 *
 * When a referenced parent group (e.g. `ACM`) has no `svc_category` row of its own, a placeholder
 * entry is synthesized in its place — selectable as a generic parent category (e.g.
 * "Accommodation extras") even though its individual sub-categories aren't shown standalone. The
 * placeholder is inserted where its first child appears, keeping source order.
 */
export declare function getTopLevelSvcCategories(categories: IEntries[]): IEntries[];
/**
 * Groups `svc_category` entries by their `NOTES` field: an entry belongs to a group when its
 * `NOTES` is shaped like a category code (e.g. Breakfast's `NOTES` is `ACM`, so it's keyed under
 * group `ACM`) rather than free text. The group itself doesn't need its own row in `svc_category`
 * — the set of entries sharing a `NOTES` value is what defines the group; when a row for that code
 * *does* exist, its `CODE_VALUE_*` becomes the group label, otherwise a known fallback (or the raw
 * code) is used.
 *
 * A single pass over `categories` (assumed API/DISPLAY_ORDER-sorted) appends each entry straight
 * into its resolved group, so groups keep source order instead of being re-sorted afterward.
 *
 * Returns a `Map` keyed by group code so a specific group's sub-categories can be looked up
 * directly, e.g. `groupSvcCategoriesByParent(categories).get('ACM')`.
 */
export declare function groupSvcCategoriesByParent(categories: IEntries[], language?: string): Map<string, SvcCategoryGroup>;
