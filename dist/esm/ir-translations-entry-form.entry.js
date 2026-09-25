import { r as registerInstance, c as createEvent, h } from './index-CeHdrJeH.js';
import { S as SetupService } from './index-BZAU6GVz.js';
import { h as showToast } from './utils-CKFOUZvS.js';
import { p as planDuplicateSync } from './duplicate-sync-DQw5ZTwR.js';
import { b as buildEditSetupParams } from './setup-mapping-CkK5DDbX.js';
import { h as hasValue, g as getSourceLanguage, e as diffValues, i as getCopiedEntry } from './utils-Btr0LXV6.js';
import { t } from './t-CHjay2ar.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './utils-Cr7j4ZQE.js';
import './IBooking-B4waZCSK.js';
import './types-CB66a07H.js';
import './commonSchemas-Cx9w9d8l.js';
import './locales.store-CXJn6ls-.js';
import './moment-Mki5YqAR.js';
import './calendar-data-CiYzaNK0.js';
import './booking.dto-B554ToUQ.js';
import './type-DjfVZqvs.js';
import './ir-date-tLkbTntq.js';
import './language-observer-CHgzsZkY.js';

const irTranslationsEntryFormCss = () => `.sc-ir-translations-entry-form-h{display:block}.entry-form__body.sc-ir-translations-entry-form{display:flex;flex-direction:column;gap:1.25rem}.entry-form__field.sc-ir-translations-entry-form{display:flex;align-items:end}.entry-form__field.sc-ir-translations-entry-form>.entry-form__value-input.sc-ir-translations-entry-form{flex:1 1 0%}.entry-form__field.sc-ir-translations-entry-form:dir(rtl){flex-direction:row-reverse}.entry-form__field.sc-ir-translations-entry-form>.entry-form__value-copy.sc-ir-translations-entry-form{margin-bottom:0.5rem}.entry-form__key-input.sc-ir-translations-entry-form::part(input),.entry-form__key-input.sc-ir-translations-entry-form [part~="input"]{font-family:var(--wa-font-family-code, ui-monospace, SFMono-Regular, Menlo, monospace)}.entry-form__error.sc-ir-translations-entry-form{margin:-1rem 0 0;font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-danger-on-quiet, #991b1b)}.entry-form__section.sc-ir-translations-entry-form{display:flex;flex-direction:column;gap:0.75rem;padding-top:1rem;border-top:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0)}.entry-form__section-header.sc-ir-translations-entry-form{display:flex;align-items:baseline;justify-content:space-between;gap:0.5rem}.entry-form__section-title.sc-ir-translations-entry-form{margin:0;font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold, 600);color:var(--wa-color-text-normal)}.entry-form__section-meta.sc-ir-translations-entry-form{font-size:var(--wa-font-size-xs, 0.75rem);font-variant-numeric:tabular-nums;color:var(--wa-color-text-quiet)}.entry-form__ai-actions.sc-ir-translations-entry-form{display:flex;flex-wrap:wrap;gap:0.5rem}.entry-form__fields.sc-ir-translations-entry-form{display:flex;flex-direction:column;gap:0.85rem}.entry-form__field-label.sc-ir-translations-entry-form{display:inline-flex;align-items:center;gap:0.4rem}.entry-form__field-code.sc-ir-translations-entry-form{font-size:0.6875rem;font-weight:var(--wa-font-weight-semibold, 600);color:var(--wa-color-text-quiet)}.entry-form__field-source.sc-ir-translations-entry-form{padding:0.05rem 0.35rem;font-size:0.6875rem;font-weight:var(--wa-font-weight-normal, 400);color:var(--wa-color-brand-on-quiet);background:var(--wa-color-brand-fill-quiet);border-radius:var(--wa-border-radius-s)}`;

/** Every key the form creates starts with this — the Key field's mask prepends it. */
const KEY_PREFIX = 'Lcz_';
/** Pulls a `{ "code": "translation" }` object out of an AI reply, tolerating markdown fences and surrounding prose. */
function extractTranslationObject(text) {
    const trimmed = text?.trim();
    if (!trimmed) {
        return null;
    }
    const fenced = /```(?:json)?\s*([\s\S]*?)```/i.exec(trimmed);
    const candidate = fenced ? fenced[1] : trimmed;
    const start = candidate.indexOf('{');
    const end = candidate.lastIndexOf('}');
    if (start === -1 || end === -1 || end < start) {
        return null;
    }
    try {
        const parsed = JSON.parse(candidate.slice(start, end + 1));
        return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : null;
    }
    catch {
        return null;
    }
}
const IrTranslationsEntryForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.entrySaved = createEvent(this, "entrySaved");
        this.submitDisabledChange = createEvent(this, "submitDisabledChange");
        this.isSubmittingChange = createEvent(this, "isSubmittingChange");
    }
    formId;
    languages = [];
    /** The entry being edited. Null puts the form in create mode. */
    entry = null;
    /** Keys already used in the active table, for duplicate detection. */
    existingKeys = [];
    /** DISPLAY_ORDER a brand-new key should get — one past the highest order already in the table. */
    nextDisplayOrder = 0;
    tableName;
    ownerId;
    entryUserId;
    /** Rows in other used tables sharing `entry`'s description — language changes are written to them in the same batch. */
    duplicateSiblings = [];
    /** Fired after the write lands, with what was saved — the manager propagates language changes to the row's duplicates from it. */
    entrySaved;
    submitDisabledChange;
    isSubmittingChange;
    key = '';
    values = {};
    isSubmitting = false;
    keyInputRef;
    setupService = new SetupService();
    /** Key the copied row was last applied for — so backspacing and retyping it doesn't re-fill and re-toast. */
    filledFromCopiedKey = null;
    componentWillLoad() {
        this.key = this.entry?.key ?? '';
        this.values = { ...(this.entry?.values ?? {}) };
        this.submitDisabledChange.emit(!this.isValid);
    }
    componentDidLoad() {
        requestAnimationFrame(() => this.keyInputRef?.focusInput());
    }
    get isEditing() {
        return !!this.entry;
    }
    get trimmedKey() {
        return this.key.trim();
    }
    get isDuplicateKey() {
        if (!this.trimmedKey) {
            return false;
        }
        if (this.isEditing && this.trimmedKey === this.entry.key) {
            return false;
        }
        return this.existingKeys.includes(this.trimmedKey);
    }
    get isValid() {
        return this.trimmedKey.length > 0 && !this.isDuplicateKey;
    }
    get translatedCount() {
        return this.languages.filter(language => hasValue(this.values[language.code])).length;
    }
    get sourceLanguage() {
        return getSourceLanguage(this.languages);
    }
    get targetLanguages() {
        const sourceCode = this.sourceLanguage?.code;
        return this.languages.filter(language => language.code !== sourceCode);
    }
    get missingLanguages() {
        return this.targetLanguages.filter(language => !hasValue(this.values[language.code]));
    }
    get canCopyPrompt() {
        return hasValue(this.values[this.sourceLanguage?.code]) && this.missingLanguages.length > 0;
    }
    get canPasteTranslations() {
        return this.targetLanguages.length > 0;
    }
    buildTranslationPrompt() {
        const source = this.sourceLanguage;
        const missing = this.missingLanguages;
        const targets = missing.map(language => `${language.name} (${language.code})`).join(', ');
        return [
            `Translate the following UI text from ${source.name} (${source.code}) into: ${targets}.`,
            '',
            'Text:',
            '"""',
            this.values[source.code],
            '"""',
            '',
            'Rules:',
            '- Preserve placeholders, variables, and HTML tags exactly (e.g. {0}, %s, {{name}}, <b>).',
            '- Keep the tone and length appropriate for a UI label, button, or short message.',
            '- Reply with ONLY a JSON object mapping each language code to its translation — no explanation, no markdown fences.',
            '',
            `Example shape: {${missing.map(language => `"${language.code}": "..."`).join(', ')}}`,
        ].join('\n');
    }
    handleCopyPrompt = async () => {
        if (!this.canCopyPrompt) {
            return;
        }
        try {
            await navigator.clipboard.writeText(this.buildTranslationPrompt());
            showToast({ type: 'success', title: 'Prompt copied — paste it into your AI chatbot.' });
        }
        catch (error) {
            console.error(error);
            showToast({ type: 'error', title: 'Unable to copy prompt to clipboard.' });
        }
    };
    handlePasteTranslations = async () => {
        let text;
        try {
            text = await navigator.clipboard.readText();
        }
        catch (error) {
            console.error(error);
            showToast({ type: 'error', title: 'Unable to read clipboard — allow clipboard access and try again.' });
            return;
        }
        const parsed = extractTranslationObject(text);
        if (!parsed) {
            showToast({ type: 'error', title: "Couldn't find a translation JSON object in the clipboard." });
            return;
        }
        const targetCodes = new Set(this.targetLanguages.map(language => language.code));
        const next = { ...this.values };
        let filled = 0;
        for (const [code, value] of Object.entries(parsed)) {
            const normalizedCode = code.trim();
            if (!targetCodes.has(normalizedCode) || typeof value !== 'string' || !hasValue(value)) {
                continue;
            }
            next[normalizedCode] = value;
            filled++;
        }
        if (filled === 0) {
            showToast({ type: 'error', title: 'No matching language codes found in the clipboard text.' });
            return;
        }
        this.values = next;
        showToast({ type: 'success', title: `Filled ${filled} translation${filled === 1 ? '' : 's'} from clipboard.` });
    };
    handleKeyChange(value) {
        this.key = value ?? '';
        this.submitDisabledChange.emit(!this.isValid);
        this.fillFromCopiedEntry();
    }
    /**
     * The other half of the table's "Copy row": a new entry given the copied row's
     * key inherits its translations. Only blanks are filled, so anything already
     * typed into a language field stays.
     */
    fillFromCopiedEntry() {
        const copied = getCopiedEntry();
        const key = this.trimmedKey;
        // The mask prepends KEY_PREFIX to whatever is pasted, so a row copied from a
        // table whose keys lack it ("001") arrives here as "Lcz_001" — still a match.
        const matches = !!copied && (key === copied.key || key === KEY_PREFIX + copied.key);
        if (this.isEditing || !key || !matches || this.filledFromCopiedKey === key) {
            return;
        }
        const next = { ...this.values };
        let filled = 0;
        for (const language of this.languages) {
            const value = copied.values[language.code];
            if (hasValue(value) && !hasValue(next[language.code])) {
                next[language.code] = value;
                filled++;
            }
        }
        this.filledFromCopiedKey = key;
        if (filled === 0) {
            return;
        }
        this.values = next;
        showToast({ type: 'success', title: `Filled ${filled} translation${filled === 1 ? '' : 's'} from the copied row.` });
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        if (!this.isValid) {
            return;
        }
        const previous = this.entry;
        // CODE_NAME is the natural key Edit_Setup upserts on, so changing it
        // creates a brand-new row — the old one has to be soft-deleted explicitly,
        // otherwise it lingers behind as an orphaned duplicate.
        const keyChanged = !!previous && previous.key !== this.trimmedKey;
        // A brand-new row either way (fresh create, or the rename's replacement
        // row) — meta is dropped below for both, so it has no displayOrder to
        // inherit and would otherwise default to 0, jumping to the front.
        const isNewRow = !previous || keyChanged;
        this.isSubmitting = true;
        this.isSubmittingChange.emit(true);
        try {
            // Everything this save needs goes out as one Edit_Setup_Many: the soft-delete of
            // a renamed key, the row itself, and its duplicates in other tables. A plain
            // Edit_Setup is only used when there's nothing else to send.
            const writes = [];
            if (keyChanged) {
                writes.push(buildEditSetupParams({
                    tableName: this.tableName,
                    key: previous.key,
                    values: previous.values,
                    meta: previous.meta,
                    isDeleted: true,
                    touch: true,
                }));
            }
            writes.push(buildEditSetupParams({
                tableName: this.tableName,
                key: this.trimmedKey,
                values: this.values,
                meta: keyChanged ? undefined : previous?.meta,
                touch: true,
                displayOrder: isNewRow ? this.nextDisplayOrder : undefined,
            }));
            // Duplicates are keyed by the row as it was, so a rename still finds them. If they
            // can't be read the user's own save still goes out, just without them.
            let syncFailed = false;
            const sync = previous
                ? await planDuplicateSync(this.setupService, {
                    siblings: this.duplicateSiblings,
                    changedValues: diffValues(previous.values, this.values),
                    ownerId: this.ownerId,
                    entryUserId: this.entryUserId,
                    touch: true,
                }).catch((error) => {
                    console.error(error);
                    syncFailed = true;
                    return { params: [], entries: [] };
                })
                : { params: [], entries: [] };
            writes.push(...sync.params);
            if (writes.length > 1) {
                await this.setupService.editSetupMany(writes);
            }
            else {
                await this.setupService.editSetup(writes[0]);
            }
            showToast(syncFailed ? { type: 'error', title: 'Saved, but its duplicate rows could not be updated' } : { type: 'success', title: previous ? 'Key updated' : 'Key created' });
            this.entrySaved.emit({ tableName: this.tableName, key: this.trimmedKey, syncedCount: sync.entries.length });
        }
        finally {
            this.isSubmitting = false;
            this.isSubmittingChange.emit(false);
        }
    };
    render() {
        const total = this.languages.length;
        const translated = this.translatedCount;
        return (h("form", { key: 'bd02f5d5cd94e6f5b495d175843e1e979d891de1', id: this.formId, class: "entry-form__body", onSubmit: this.handleSubmit, novalidate: true }, h("ir-input", { key: 'fda2a8c241f6ffca9c7814abaea3dac90d483115', label: "Key", readonly: this.isEditing, autocomplete: "off", mask: {
                mask: `{${KEY_PREFIX}}TEXT`,
                eager: true,
                blocks: {
                    TEXT: {
                        mask: '*', // Accept any character
                        repeat: Infinity, // Unlimited characters
                    },
                },
            }, spellcheck: false, class: "entry-form__key-input", value: this.key, placeholder: "e.g. Lcz_BookingConfirmed", "onText-change": e => this.handleKeyChange(e.detail), ref: el => (this.keyInputRef = el) }, h("wa-copy-button", { key: '665c58870e5d889527e62f054d480a386cdfe699', value: this.key ?? '', slot: "end" })), this.isDuplicateKey && (h("p", { key: 'baebcbc07179a3b1645dc5484ef53799a857fa40', class: "entry-form__error", role: "alert" }, "This key already exists in this table.")), h("div", { key: 'cf0e3be6d94e72e9caed5943c4f0078f68c9cec5', class: "entry-form__section" }, h("div", { key: 'a574c8267dbf0ec7a524596fb3b9f31177164f6e', class: "entry-form__section-header" }, h("h3", { key: '9713ef0dce8576cb9ed64acccd66e547beee131f', class: "entry-form__section-title" }, "Translations"), h("span", { key: 'f99dd6765f5de0fe17d88d7e787a96caabc95bfa', class: "entry-form__section-meta" }, translated, " of ", total, " filled")), this.targetLanguages.length > 0 && (h("div", { key: '64f0ac9661b5641971e9258fb064b77cba40cca6', class: "entry-form__ai-actions" }, h("ir-custom-button", { key: 'abcd74f2acf85bed313e29334c4ef31aa59b3ae4', size: "s", appearance: "outlined", variant: "neutral", disabled: !this.canCopyPrompt, onClickHandler: this.handleCopyPrompt }, h("wa-icon", { key: '70298d244a6e7df9effbe1359ffb86d2289a32a0', name: "copy", slot: "start", "aria-hidden": "true" }), "Copy AI prompt"), h("ir-custom-button", { key: '89d06cb2cf51c33036c09dbe63048c5546b39dac', size: "s", appearance: "outlined", variant: "neutral", disabled: !this.canPasteTranslations, onClickHandler: this.handlePasteTranslations }, h("wa-icon", { key: '9a5b8f4a2050da9428a12b3537e4e0bc76a4ac9b', name: "clipboard", slot: "start", "aria-hidden": "true" }), "Paste AI translations"))), total === 0 ? (h("ir-empty-state", { message: "No languages configured yet. Add one from Manage languages first." })) : (h("div", { class: "entry-form__fields" }, this.languages.map(language => (h("div", { class: "entry-form__field", key: language.code, dir: language.code === 'ar' ? 'rtl' : 'ltr' }, h("wa-textarea", { class: "entry-form__value-input", id: language.code, size: "s", rows: 2, resize: "auto", value: this.values[language.code] ?? '', placeholder: "Enter translation\u2026", oninput: (e) => (this.values = { ...this.values, [language.code]: e.target.value }) }, h("span", { slot: "label", class: "entry-form__field-label" }, language.name, h("span", { class: "entry-form__field-code" }, language.code.toUpperCase()), language.isSource && h("span", { class: "entry-form__field-source" }, t('Lcz_Source', { fallback: 'Source' })))), h("wa-copy-button", { class: "entry-form__value-copy", value: this.values[language.code] ?? '' })))))))));
    }
};
IrTranslationsEntryForm.style = irTranslationsEntryFormCss();

export { IrTranslationsEntryForm as ir_translations_entry_form };
