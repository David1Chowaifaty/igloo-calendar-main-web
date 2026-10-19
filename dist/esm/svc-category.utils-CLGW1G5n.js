import { v as v4 } from './v4-CK3_k8jD.js';
import { c as calendar_data } from './calendar-data-DWzivSW-.js';
import { S as SvcCategory } from './enums-CSCQSgBu.js';
import { e as getEntryValue } from './utils-BjFJEvis.js';
import { t } from './t-Bvz1wS_D.js';

class BatchingQueue {
    queue = [];
    isProcessing = false;
    flushTimer = null;
    options;
    processor;
    constructor(processor, options) {
        this.processor = processor;
        this.options = {
            maxQueueSize: 10000,
            onError: error => console.error('Queue processing error:', error),
            onBatchProcessed: () => { },
            ...options,
        };
    }
    /**
     * Add a single item to the queue
     */
    offer(data) {
        if (this.queue.length >= this.options.maxQueueSize) {
            return false; // Queue is full
        }
        const item = {
            data,
            timestamp: Date.now(),
            id: this.generateId(),
        };
        this.queue.push(item);
        this.scheduleFlush();
        return true;
    }
    /**
     * Add multiple items to the queue
     */
    offerAll(items) {
        let added = 0;
        for (const item of items) {
            if (this.offer(item)) {
                added++;
            }
            else {
                break; // Queue is full
            }
        }
        return added;
    }
    /**
     * Get current queue size
     */
    size() {
        return this.queue.length;
    }
    /**
     * Check if queue is empty
     */
    isEmpty() {
        return this.queue.length === 0;
    }
    /**
     * Force flush the current queue
     */
    async flush() {
        if (this.flushTimer) {
            clearTimeout(this.flushTimer);
            this.flushTimer = null;
        }
        await this.processBatch();
    }
    /**
     * Clear all items from the queue
     */
    clear() {
        this.queue = [];
        if (this.flushTimer) {
            clearTimeout(this.flushTimer);
            this.flushTimer = null;
        }
    }
    /**
     * Shutdown the queue and process remaining items
     */
    async shutdown() {
        await this.flush();
    }
    scheduleFlush() {
        // If we've reached batch size, process immediately
        if (this.queue.length >= this.options.batchSize) {
            this.processBatch();
            return;
        }
        // If no timer is set, schedule one
        if (!this.flushTimer) {
            this.flushTimer = setTimeout(() => {
                this.processBatch();
            }, this.options.flushInterval);
        }
    }
    async processBatch() {
        if (this.isProcessing || this.queue.length === 0) {
            return;
        }
        this.isProcessing = true;
        try {
            // Extract batch to process
            const batchSize = Math.min(this.options.batchSize, this.queue.length);
            const batch = this.queue.splice(0, batchSize);
            const data = batch.map(item => item.data);
            const startTime = Date.now();
            // Process the batch
            await this.processor(data);
            const processingTime = Date.now() - startTime;
            this.options.onBatchProcessed(batchSize, processingTime);
            // Clear the timer since we've processed
            if (this.flushTimer) {
                clearTimeout(this.flushTimer);
                this.flushTimer = null;
            }
            // If there are more items, schedule next batch
            if (this.queue.length > 0) {
                this.scheduleFlush();
            }
        }
        catch (error) {
            this.options.onError(error);
        }
        finally {
            this.isProcessing = false;
        }
    }
    generateId() {
        return v4();
    }
}

/** Strips non-alphanumeric characters and lowercases a string for fuzzy matching against tax names. */
function normalizeTaxName(s) {
    return s.toLowerCase().replace(/[^a-z0-9]/g, '');
}
/** Finds a tax entry by keyword from the property's taxes array. Undefined means Not Applicable. */
function findAccTax(keyword) {
    const taxes = calendar_data.property?.taxes ?? [];
    return taxes.find(t => normalizeTaxName(t.name).includes(normalizeTaxName(keyword)));
}
/** Converts a property tax entry to an AccChargeRule. Absent tax resolves to Not Applicable. */
function toAccChargeRule(tax) {
    if (!tax)
        return { mode: '002', value: null };
    return { mode: tax.is_exlusive ? '000' : '001', value: tax.pct };
}
/**
 * Reads the property's current accommodation-level tax setup (VAT, City Tax, Service Charge,
 * Taxation Strategy) unchanged, for callers that must submit these required top-level fields
 * to `Handle_Exposed_Property_Tax_Categories` without actually managing/editing them.
 */
function getAccTaxPayloadFields() {
    const vat = toAccChargeRule(findAccTax('vat'));
    const cityTax = toAccChargeRule(findAccTax('city'));
    const serviceCharge = toAccChargeRule(findAccTax('service'));
    const taxationStrategy = calendar_data.property?.taxation_strategy?.code ?? '000';
    return {
        VAT_INCLUDED_CODE: vat.mode,
        VAT_PC: vat.mode === '002' ? 0 : (vat.value ?? 0),
        CITY_TAX_INCLUDED_CODE: cityTax.mode,
        CITY_TAX_PCT: cityTax.mode === '002' ? 0 : (cityTax.value ?? 0),
        SERVICE_CHARGE_INCLUDED_CODE: serviceCharge.mode,
        SERVICE_CHARGE_PCT: serviceCharge.mode === '002' ? 0 : (serviceCharge.value ?? 0),
        TAXATION_STRATEGY: taxationStrategy,
    };
}

/** A `NOTES` value counts as a group-code reference (not a free-text description) when it's shaped like a setup-entry code. */
const GROUP_CODE_PATTERN = /^[a-z0-9_]{2,10}$/i;
/**
 * Friendlier titles for known group codes that don't have their own `svc_category` row to source a `CODE_VALUE_EN` from.
 * Getters, so the label resolves against the loaded locale rather than the empty one at import time.
 */
const KNOWN_GROUP_LABELS = {
    get [SvcCategory.Accommodation]() {
        return t('Lcz_Accommodation', { fallback: 'Accommodation' });
    },
};
/** Whether a `NOTES` value references another category as its parent group, rather than being a free-text description. */
function isGroupCodeReference(notes) {
    const trimmed = notes?.trim();
    return !!trimmed && GROUP_CODE_PATTERN.test(trimmed);
}
/** Minimal placeholder entry for a group code referenced by children but with no `svc_category` row of its own (e.g. `Accommodation`). */
function createGroupPlaceholderEntry(code) {
    const label = KNOWN_GROUP_LABELS[code] ?? code;
    return {
        CODE_NAME: code,
        CODE_VALUE_AR: '',
        CODE_VALUE_DE: '',
        CODE_VALUE_EL: '',
        CODE_VALUE_EN: label,
        CODE_VALUE_FR: '',
        CODE_VALUE_HE: '',
        CODE_VALUE_PL: '',
        CODE_VALUE_RU: '',
        CODE_VALUE_UA: '',
        DISPLAY_ORDER: 0,
        ENTRY_DATE: '',
        ENTRY_USER_ID: 0,
        INVARIANT_VALUE: null,
        ISDELETEABLE: false,
        ISDELETED: false,
        ISSYSTEM: false,
        ISUPDATEABLE: false,
        ISVISIBLE: true,
        NOTES: '',
        OWNER_ID: 0,
        TBL_NAME: '_SVC_CATEGORY',
    };
}
/**
 * Top-level `svc_category` entries: those whose `NOTES` does *not* reference another category as a
 * parent group (e.g. Spa's "Treatments, fitness, and wellness programs" is free text, so it stays
 * top-level; Breakfast's `NOTES` of Accommodation` is shaped like a code, so it's a sub-category instead).
 *
 * When a referenced parent group (e.g. `Accommodation`) has no `svc_category` row of its own, a placeholder
 * entry is synthesized in its place — selectable as a generic parent category (e.g.
 * "Accommodation extras") even though its individual sub-categories aren't shown standalone. The
 * placeholder is inserted where its first child appears, keeping source order.
 */
function getTopLevelSvcCategories(categories) {
    const byCode = new Map(categories.map(entry => [entry.CODE_NAME, entry]));
    const seenGroupCodes = new Set();
    const result = [];
    categories.forEach(category => {
        const groupCode = category.NOTES?.trim();
        if (!isGroupCodeReference(groupCode)) {
            result.push(category);
            return;
        }
        if (byCode.has(groupCode) || seenGroupCodes.has(groupCode))
            return;
        seenGroupCodes.add(groupCode);
        result.push(createGroupPlaceholderEntry(groupCode));
    });
    return result;
}
/**
 * Groups `svc_category` entries by their `NOTES` field: an entry belongs to a group when its
 * `NOTES` is shaped like a category code (e.g. Breakfast's `NOTES` is `Accommodation`, so it's keyed under
 * group `Accommodation`) rather than free text. The group itself doesn't need its own row in `svc_category`
 * — the set of entries sharing a `NOTES` value is what defines the group; when a row for that code
 * *does* exist, its `CODE_VALUE_*` becomes the group label, otherwise a known fallback (or the raw
 * code) is used.
 *
 * A single pass over `categories` (assumed API/DISPLAY_ORDER-sorted) appends each entry straight
 * into its resolved group, so groups keep source order instead of being re-sorted afterward.
 *
 * Returns a `Map` keyed by group code so a specific group's sub-categories can be looked up
 * directly, e.g. `groupSvcCategoriesByParent(categories).get('Accommodation')`.
 */
function groupSvcCategoriesByParent(categories, language = 'en') {
    const byCode = new Map(categories.map(entry => [entry.CODE_NAME, entry]));
    const groups = new Map();
    categories.forEach(entry => {
        const groupCode = entry.NOTES?.trim();
        if (!isGroupCodeReference(groupCode))
            return;
        const group = groups.get(groupCode);
        if (group) {
            group.categories.push(entry);
            return;
        }
        const groupEntry = byCode.get(groupCode);
        groups.set(groupCode, {
            code: groupCode,
            label: groupEntry ? getEntryValue({ entry: groupEntry, language }) : (KNOWN_GROUP_LABELS[groupCode] ?? groupCode),
            categories: [entry],
        });
    });
    return groups;
}

export { BatchingQueue as B, getAccTaxPayloadFields as a, getTopLevelSvcCategories as b, findAccTax as f, groupSvcCategoriesByParent as g, toAccChargeRule as t };
