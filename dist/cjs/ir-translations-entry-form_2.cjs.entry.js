'use strict';

var index = require('./index-IDeZZwEK.js');
var index$1 = require('./index-Br-j6MPt.js');
var utils$1 = require('./utils-BJ6tgqps.js');
var duplicateSync = require('./duplicate-sync-Cly39mO6.js');
var setupMapping = require('./setup-mapping-D72fId4a.js');
var utils = require('./utils-Ii_DYaf_.js');
var t = require('./t-CqJPQrfm.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./utils-BwXEit5a.js');
require('./IBooking-hDE_y33g.js');
require('./types-BVJQZ50e.js');
require('./commonSchemas-kIlurDum.js');
require('./locale.controller-BE9t6L_N.js');
require('./locale-scope-Cch-vf1R.js');
require('./language-observer-DKp37LIu.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-ShS6b-Ns.js');
require('./booking.dto-CMx8s-oW.js');
require('./type-DxODN41W.js');
require('./ir-date-CbkOKs2C.js');
require('./calendar-dates-BxDGM1ix.js');

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
        index.registerInstance(this, hostRef);
        this.entrySaved = index.createEvent(this, "entrySaved");
        this.submitDisabledChange = index.createEvent(this, "submitDisabledChange");
        this.isSubmittingChange = index.createEvent(this, "isSubmittingChange");
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
    syncDialogRef;
    setupService = new index$1.SetupService();
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
        return this.languages.filter(language => utils.hasValue(this.values[language.code])).length;
    }
    get sourceLanguage() {
        return utils.getSourceLanguage(this.languages);
    }
    get targetLanguages() {
        const sourceCode = this.sourceLanguage?.code;
        return this.languages.filter(language => language.code !== sourceCode);
    }
    get missingLanguages() {
        return this.targetLanguages.filter(language => !utils.hasValue(this.values[language.code]));
    }
    get canCopyPrompt() {
        return utils.hasValue(this.values[this.sourceLanguage?.code]) && this.missingLanguages.length > 0;
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
            utils$1.showToast({ type: 'success', title: 'Prompt copied — paste it into your AI chatbot.' });
        }
        catch (error) {
            console.error(error);
            utils$1.showToast({ type: 'error', title: 'Unable to copy prompt to clipboard.' });
        }
    };
    handlePasteTranslations = async () => {
        let text;
        try {
            text = await navigator.clipboard.readText();
        }
        catch (error) {
            console.error(error);
            utils$1.showToast({ type: 'error', title: 'Unable to read clipboard — allow clipboard access and try again.' });
            return;
        }
        const parsed = extractTranslationObject(text);
        if (!parsed) {
            utils$1.showToast({ type: 'error', title: "Couldn't find a translation JSON object in the clipboard." });
            return;
        }
        const targetCodes = new Set(this.targetLanguages.map(language => language.code));
        const next = { ...this.values };
        let filled = 0;
        for (const [code, value] of Object.entries(parsed)) {
            const normalizedCode = code.trim();
            if (!targetCodes.has(normalizedCode) || typeof value !== 'string' || !utils.hasValue(value)) {
                continue;
            }
            next[normalizedCode] = value;
            filled++;
        }
        if (filled === 0) {
            utils$1.showToast({ type: 'error', title: 'No matching language codes found in the clipboard text.' });
            return;
        }
        this.values = next;
        utils$1.showToast({ type: 'success', title: `Filled ${filled} translation${filled === 1 ? '' : 's'} from clipboard.` });
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
        const copied = utils.getCopiedEntry();
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
            if (utils.hasValue(value) && !utils.hasValue(next[language.code])) {
                next[language.code] = value;
                filled++;
            }
        }
        this.filledFromCopiedKey = key;
        if (filled === 0) {
            return;
        }
        this.values = next;
        utils$1.showToast({ type: 'success', title: `Filled ${filled} translation${filled === 1 ? '' : 's'} from the copied row.` });
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
                writes.push(setupMapping.buildEditSetupParams({
                    tableName: this.tableName,
                    key: previous.key,
                    values: previous.values,
                    meta: previous.meta,
                    isDeleted: true,
                    touch: true,
                }));
            }
            writes.push(setupMapping.buildEditSetupParams({
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
            let sync = previous
                ? await duplicateSync.planDuplicateSync(this.setupService, {
                    siblings: this.duplicateSiblings,
                    changedValues: utils.diffValues(previous.values, this.values),
                    ownerId: this.ownerId,
                    entryUserId: this.entryUserId,
                    touch: true,
                }).catch((error) => {
                    console.error(error);
                    syncFailed = true;
                    return { params: [], entries: [] };
                })
                : { params: [], entries: [] };
            // Edits crossing into or out of a sync-guarded table need the user's say-so.
            // Dismissing the prompt abandons the save and leaves the drawer open.
            const prompt = utils.getSyncPrompt(this.tableName, sync.entries);
            if (prompt.kind !== 'none') {
                const answer = await this.syncDialogRef?.ask(prompt);
                if (!answer) {
                    return;
                }
                sync = utils.narrowSyncPlan(sync, answer);
            }
            writes.push(...sync.params);
            if (writes.length > 1) {
                await this.setupService.editSetupMany(writes);
            }
            else {
                await this.setupService.editSetup(writes[0]);
            }
            utils$1.showToast(syncFailed ? { type: 'error', title: 'Saved, but its duplicate rows could not be updated' } : { type: 'success', title: previous ? 'Key updated' : 'Key created' });
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
        return (index.h("form", { key: '7b5e73cc119f39b7e96e171a3b0e3a43634e9194', id: this.formId, class: "entry-form__body", onSubmit: this.handleSubmit, novalidate: true }, index.h("ir-input", { key: '8c2846d88df49253cc4a54a4fdb78615d2c610ce', label: "Key", readonly: this.isEditing, autocomplete: "off", mask: {
                mask: `{${KEY_PREFIX}}TEXT`,
                eager: true,
                blocks: {
                    TEXT: {
                        mask: '*', // Accept any character
                        repeat: Infinity, // Unlimited characters
                    },
                },
            }, spellcheck: false, class: "entry-form__key-input", value: this.key, placeholder: "e.g. Lcz_BookingConfirmed", "onText-change": e => this.handleKeyChange(e.detail), ref: el => (this.keyInputRef = el) }, index.h("wa-copy-button", { key: '9c7a68d00aa994b4a8d51017ebf9bb7c04f68e84', value: this.key ?? '', slot: "end" })), this.isDuplicateKey && (index.h("p", { key: 'baf2b632136f3f780da3c27c4e010adfea87756f', class: "entry-form__error", role: "alert" }, "This key already exists in this table.")), index.h("div", { key: '88eece53f5709bc9b2f9bc8261f2865f88179e75', class: "entry-form__section" }, index.h("div", { key: 'c70bca83f676d12a3e801a92334e613b34e384bd', class: "entry-form__section-header" }, index.h("h3", { key: 'fef53ba97563b125883c6e3f30a1c6e7e0f4ae91', class: "entry-form__section-title" }, "Translations"), index.h("span", { key: 'dd316898d32385999c949ede77144882e80dfc01', class: "entry-form__section-meta" }, translated, " of ", total, " filled")), this.targetLanguages.length > 0 && (index.h("div", { key: 'd309a44ee52ff70b10052cd7ab8d290debd82f11', class: "entry-form__ai-actions" }, index.h("ir-custom-button", { key: '2dd3bfcbaee143f14d80bc26effbb39762493986', size: "s", appearance: "outlined", variant: "neutral", disabled: !this.canCopyPrompt, onClickHandler: this.handleCopyPrompt }, index.h("wa-icon", { key: '69ac0cf88ac6855a459a4f5a9194c03b9929abe2', name: "copy", slot: "start", "aria-hidden": "true" }), "Copy AI prompt"), index.h("ir-custom-button", { key: 'd00e3bb0c6b5b32322e724a31fed007cbb3194a7', size: "s", appearance: "outlined", variant: "neutral", disabled: !this.canPasteTranslations, onClickHandler: this.handlePasteTranslations }, index.h("wa-icon", { key: '8abd0087c27c39c9ec6d78f9e219f067f2ad8033', name: "clipboard", slot: "start", "aria-hidden": "true" }), "Paste AI translations"))), total === 0 ? (index.h("ir-empty-state", { message: "No languages configured yet. Add one from Manage languages first." })) : (index.h("div", { class: "entry-form__fields" }, this.languages.map(language => (index.h("div", { class: "entry-form__field", key: language.code, dir: language.code === 'ar' ? 'rtl' : 'ltr' }, index.h("wa-textarea", { class: "entry-form__value-input", id: language.code, size: "s", rows: 2, resize: "auto", value: this.values[language.code] ?? '', placeholder: "Enter translation\u2026", oninput: (e) => (this.values = { ...this.values, [language.code]: e.target.value }) }, index.h("span", { slot: "label", class: "entry-form__field-label" }, language.name, index.h("span", { class: "entry-form__field-code" }, language.code.toUpperCase()), language.isSource && index.h("span", { class: "entry-form__field-source" }, t.t('Lcz_Source', { fallback: 'Source' })))), index.h("wa-copy-button", { class: "entry-form__value-copy", value: this.values[language.code] ?? '' }))))))), index.h("ir-translations-sync-dialog", { key: 'f7ce0aa189d2e5357d9f06f04ac53a7d9acdb53d', ref: el => (this.syncDialogRef = el) })));
    }
};
IrTranslationsEntryForm.style = irTranslationsEntryFormCss();

const irTranslationsSyncDialogCss = () => `.sc-ir-translations-sync-dialog-h{display:contents}.sync-dialog__body.sc-ir-translations-sync-dialog{display:flex;flex-direction:column;gap:0.75rem}.sync-dialog__text.sc-ir-translations-sync-dialog{margin:0;color:var(--wa-color-text-normal)}.sync-dialog__tables.sc-ir-translations-sync-dialog{display:flex;flex-direction:column;gap:0.5rem}`;

const IrTranslationsSyncDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    prompt = null;
    /** Guarded tables ticked in a `choose` prompt — none by default, so nothing guarded is written unless asked for. */
    checkedTables = [];
    dialogRef;
    resolveAnswer = null;
    /** Resolves with the user's answer, or `null` if they dismissed the dialog — the caller should then abort the save. */
    async ask(prompt) {
        // A prompt still open is superseded — treat it as dismissed.
        this.settle(null);
        this.prompt = prompt;
        this.checkedTables = [];
        this.dialogRef?.openModal();
        return new Promise(resolve => (this.resolveAnswer = resolve));
    }
    settle(answer) {
        const resolve = this.resolveAnswer;
        this.resolveAnswer = null;
        resolve?.(answer);
    }
    answer(answer) {
        this.settle(answer);
        this.dialogRef?.closeModal();
    }
    toggleTable(table, checked) {
        this.checkedTables = checked ? [...this.checkedTables, table] : this.checkedTables.filter(name => name !== table);
    }
    renderBody() {
        if (this.prompt?.kind === 'confirm') {
            return index.h("p", { class: "sync-dialog__text" }, "This key has duplicates in other tables. Apply these changes to them as well, or update only this key?");
        }
        if (this.prompt?.kind === 'choose') {
            return (index.h("div", { class: "sync-dialog__body" }, index.h("p", { class: "sync-dialog__text" }, "This key also has duplicates in the tables below. Duplicates in other tables will be updated. Tick a table to update its duplicates too."), index.h("div", { class: "sync-dialog__tables" }, this.prompt.tables.map(table => (index.h("wa-checkbox", { key: table, defaultChecked: this.checkedTables.includes(table), checked: this.checkedTables.includes(table), onchange: (e) => this.toggleTable(table, e.target.checked) }, table))))));
        }
        return null;
    }
    renderFooter() {
        if (this.prompt?.kind === 'confirm') {
            return [
                index.h("ir-custom-button", { size: "m", appearance: "outlined", variant: "neutral", onClickHandler: () => this.answer({ kind: 'none' }) }, "Only this key"),
                index.h("ir-custom-button", { size: "m", appearance: "accent", variant: "brand", onClickHandler: () => this.answer({ kind: 'all' }) }, "Sync duplicates"),
            ];
        }
        return [
            index.h("ir-custom-button", { size: "m", appearance: "outlined", variant: "neutral", onClickHandler: () => this.dialogRef?.closeModal() }, t.t('Lcz_Cancel', { fallback: 'Cancel' })),
            index.h("ir-custom-button", { size: "m", appearance: "accent", variant: "brand", onClickHandler: () => this.answer({ kind: 'tables', tables: this.checkedTables }) }, t.t('Lcz_Save', { fallback: 'Save' })),
        ];
    }
    render() {
        return (index.h("ir-dialog", { key: '61de6409c36e6ea2dc30a789b9e2ead53bf10766', label: "Sync duplicates", ref: el => (this.dialogRef = el), onIrDialogAfterHide: (e) => {
                e.stopPropagation();
                this.settle(null);
                this.prompt = null;
            } }, this.renderBody(), index.h("div", { key: 'd5b846d6bb061a521531700fd1917180122121a3', slot: "footer", class: "ir-dialog__footer" }, this.renderFooter())));
    }
};
IrTranslationsSyncDialog.style = irTranslationsSyncDialogCss();

exports.ir_translations_entry_form = IrTranslationsEntryForm;
exports.ir_translations_sync_dialog = IrTranslationsSyncDialog;
