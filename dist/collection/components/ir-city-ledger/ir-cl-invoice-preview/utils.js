/**
 * Groups a flat array of transaction rows into a two-level hierarchy,
 * then sorts every level so the oldest SERVICE_DATE appears first.
 *
 * Level 1 — Booking groups:
 *   Rows that share the same BOOK_NBR are collapsed into a parent object
 *   { BOOK_NBR, subRows: [...] }. Rows with no BOOK_NBR are kept flat.
 *   The top-level array is sorted by each item's oldest SERVICE_DATE so that
 *   a booking group is "pulled up" by whichever of its rows has the earliest date.
 *
 * Level 2 — Unit groups (inside each booking's subRows):
 *   Within a booking, rows that share the same PR_ID (room/unit identifier)
 *   are further collapsed into { PR_ID, subRows: [...] }.
 *   Rows with PR_ID = 0 / null, or whose PR_ID is unique within the booking,
 *   are kept flat inside the booking's subRows.
 *   The booking's subRows array is sorted by each item's oldest SERVICE_DATE
 *   so that a unit group is pulled up by its earliest row.
 *
 *   The rows inside each unit group are also sorted oldest-first.
 *
 * @param  rows - Raw transaction rows from the API.
 * @returns {Array} Grouped and sorted rows ready for rendering.
 */
export const groupData = (rows) => {
    // ── Sorting helper ────────────────────────────────────────────────────────
    /**
     * Returns the oldest SERVICE_DATE found within an item.
     * If the item is a group (has subRows), recurse to find the minimum date
     * across all descendants. If it is a plain row, return its own SERVICE_DATE.
     *
     * @param {Object} item - A plain row or a group object with subRows.
     * @returns {string} ISO date string (YYYY-MM-DD), or '' if none found.
     */
    const getOldestDate = item => {
        if (item.subRows && item.subRows.length > 0) {
            // Item is a group — collect the oldest date from each child recursively
            return item.subRows.reduce((oldest, child) => {
                const childDate = getOldestDate(child); // recurse into nested groups
                if (!oldest)
                    return childDate; // first child sets the baseline
                return childDate < oldest ? childDate : oldest; // keep the earlier date
            }, '');
        }
        // Plain row — its own SERVICE_DATE is the anchor date
        return item.SERVICE_DATE ?? '';
    };
    /**
     * Sorts an array of items (plain rows or groups) ascending by oldest SERVICE_DATE.
     * Mutates the array in place and returns it for convenience.
     *
     * @param {Array} arr - Mixed array of plain rows and/or group objects.
     * @returns {Array} The same array, sorted oldest-first.
     */
    const sortByOldestDate = arr => {
        return arr.sort((a, b) => {
            const dateA = getOldestDate(a); // anchor date for item a
            const dateB = getOldestDate(b); // anchor date for item b
            return dateA.localeCompare(dateB); // lexicographic compare works for YYYY-MM-DD
        });
    };
    // ── Level 1: split rows into "no booking" vs "has booking" ──────────────
    const standalone = []; // rows with no BOOK_NBR — rendered at the top level as-is
    const bookingMap = new Map(); // BOOK_NBR → array of rows belonging to that booking
    for (const row of rows) {
        if (!row.BOOK_NBR) {
            // No booking number → keep this row flat at the top level
            standalone.push(row);
        }
        else {
            // First time we see this booking number → initialize its bucket
            if (!bookingMap.has(row.BOOK_NBR)) {
                bookingMap.set(row.BOOK_NBR, []);
            }
            // Add the row to its booking bucket
            bookingMap.get(row.BOOK_NBR).push(row);
        }
    }
    // ── Level 2: within each booking, group rows by PR_ID (unit/room) ───────
    /**
     * Takes the flat rows of a single booking and returns a mixed array where
     * rows sharing the same non-zero PR_ID are wrapped in a unit-group object,
     * while unique or PR_ID-less rows are kept as plain row objects.
     * The resulting array — and the rows inside each unit group — are sorted
     * oldest SERVICE_DATE first.
     *
     * @param {Array} bookingRows - All rows belonging to one booking.
     * @returns {Array} Sorted mixed array of plain rows and unit-group objects.
     */
    const groupByUnit = bookingRows => {
        // Count how many rows share each PR_ID so we know which ones to group
        const prIdCount = new Map();
        for (const row of bookingRows) {
            if (!row.PR_ID)
                continue; // skip 0 / null — those are never grouped
            prIdCount.set(row.PR_ID, (prIdCount.get(row.PR_ID) ?? 0) + 1);
        }
        const unitStandalone = []; // rows that won't be grouped (unique PR_ID or no PR_ID)
        const unitMap = new Map(); // PR_ID → rows that share it (only those with count > 1)
        for (const row of bookingRows) {
            const isGroupable = row.PR_ID && prIdCount.get(row.PR_ID) > 1;
            if (!isGroupable) {
                // PR_ID is missing, zero, or unique within this booking → render flat
                unitStandalone.push(row);
            }
            else {
                // Multiple rows share this PR_ID → collect them into a unit group
                if (!unitMap.has(row.PR_ID)) {
                    unitMap.set(row.PR_ID, []);
                }
                unitMap.get(row.PR_ID).push(row);
            }
        }
        // Build the unit-group objects from the collected buckets
        const unitGroups = [];
        for (const [prId, subRows] of unitMap.entries()) {
            unitGroups.push({
                PR_ID: prId, // identifier for this unit/room group
                subRows: sortByOldestDate(subRows), // sort the leaf rows inside the unit oldest-first
            });
        }
        // Merge flat rows and unit groups into one array, then sort the whole
        // level-2 list so items with the earliest date bubble to the top
        return sortByOldestDate([...unitStandalone, ...unitGroups]);
    };
    // ── Assemble final result ─────────────────────────────────────────────────
    const bookingGroups = [];
    for (const [bookNbr, bookingRows] of bookingMap.entries()) {
        bookingGroups.push({
            BOOK_NBR: bookNbr, // booking number that identifies this group
            subRows: groupByUnit(bookingRows), // level-2 grouped and sorted rows
        });
    }
    // Merge standalone rows and booking groups, then sort the entire top-level
    // array so items (or groups) with the oldest date appear first
    return sortByOldestDate([...standalone, ...bookingGroups]);
};
//# sourceMappingURL=utils.js.map
