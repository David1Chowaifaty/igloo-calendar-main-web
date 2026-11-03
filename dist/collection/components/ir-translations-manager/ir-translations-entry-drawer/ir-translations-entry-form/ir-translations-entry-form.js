import { SetupService } from "../../../../services/setup/index";
import { showToast } from "../../../../utils/utils";
import { h } from "@stencil/core";
import { planDuplicateSync } from "../../duplicate-sync";
import { buildEditSetupParams } from "../../setup-mapping";
import { getSyncPrompt, narrowSyncPlan } from "../../sync-policy";
import { diffValues, getCopiedEntry, getSourceLanguage, hasValue } from "../../utils";
import { t } from "../../../../services/locale/t";
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
/**
 * Owns the create/edit draft for a single translation key and saves it directly —
 * the drawer around this form is a dumb open/close shell.
 */
export class IrTranslationsEntryForm {
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
                    ownerId: this.ownerId,
                    entryUserId: this.entryUserId,
                    tableName: this.tableName,
                    key: previous.key,
                    values: previous.values,
                    meta: previous.meta,
                    isDeleted: true,
                    touch: true,
                }));
            }
            writes.push(buildEditSetupParams({
                ownerId: this.ownerId,
                entryUserId: this.entryUserId,
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
            // Edits crossing into or out of a sync-guarded table need the user's say-so.
            // Dismissing the prompt abandons the save and leaves the drawer open.
            const prompt = getSyncPrompt(this.tableName, sync.entries);
            if (prompt.kind !== 'none') {
                const answer = await this.syncDialogRef?.ask(prompt);
                if (!answer) {
                    return;
                }
                sync = narrowSyncPlan(sync, answer);
            }
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
        return (h("form", { key: '3498a8e6390e610269f14542425c616bd8a45bcb', id: this.formId, class: "entry-form__body", onSubmit: this.handleSubmit, novalidate: true }, h("ir-input", { key: 'a7799ec24679786153c0ce153da0f0fea35e078b', label: "Key", readonly: this.isEditing, autocomplete: "off", mask: {
                mask: `{${KEY_PREFIX}}TEXT`,
                eager: true,
                blocks: {
                    TEXT: {
                        mask: '*', // Accept any character
                        repeat: Infinity, // Unlimited characters
                    },
                },
            }, spellcheck: false, class: "entry-form__key-input", value: this.key, placeholder: "e.g. Lcz_BookingConfirmed", "onText-change": e => this.handleKeyChange(e.detail), ref: el => (this.keyInputRef = el) }, h("wa-copy-button", { key: '4bf737f58006c76225d6ae1cef942eb29aecfcb5', value: this.key ?? '', slot: "end" })), this.isDuplicateKey && (h("p", { key: '5b9c2f076a08ee113f4fb1d5f39512dbef8a99b8', class: "entry-form__error", role: "alert" }, "This key already exists in this table.")), h("div", { key: '1b19a7db2bf8808438dbc304fc0e2e96dad4c365', class: "entry-form__section" }, h("div", { key: '99934f6bcaeb88d8b83d9d86de567b419e1d6b42', class: "entry-form__section-header" }, h("h3", { key: 'ac724b3d18cf7d7f642cf11a25b79f1f3a2a6759', class: "entry-form__section-title" }, "Translations"), h("span", { key: 'df965e75efe368864e37b5e1de14aa52e5f8e2d7', class: "entry-form__section-meta" }, translated, " of ", total, " filled")), this.targetLanguages.length > 0 && (h("div", { key: '66e1aecdc09fe70cde74a8e23e60664b1c0ff276', class: "entry-form__ai-actions" }, h("ir-custom-button", { key: '0ec08ca12ddfd859456ccf70d6f249948db73f3d', size: "s", appearance: "outlined", variant: "neutral", disabled: !this.canCopyPrompt, onClickHandler: this.handleCopyPrompt }, h("wa-icon", { key: '24d21a5d6794ca5b38b44b860a7c0dc755f1c5f2', name: "copy", slot: "start", "aria-hidden": "true" }), "Copy AI prompt"), h("ir-custom-button", { key: 'a980a2973f0d9917728dd0ac0e51417897078003', size: "s", appearance: "outlined", variant: "neutral", disabled: !this.canPasteTranslations, onClickHandler: this.handlePasteTranslations }, h("wa-icon", { key: 'b6001e799aa055f46429766155da0cbb04568315', name: "clipboard", slot: "start", "aria-hidden": "true" }), "Paste AI translations"))), total === 0 ? (h("ir-empty-state", { message: "No languages configured yet. Add one from Manage languages first." })) : (h("div", { class: "entry-form__fields" }, this.languages.map(language => (h("div", { class: "entry-form__field", key: language.code, dir: language.code === 'ar' ? 'rtl' : 'ltr' }, h("wa-textarea", { class: "entry-form__value-input", id: language.code, size: "s", rows: 2, resize: "auto", value: this.values[language.code] ?? '', placeholder: "Enter translation\u2026", oninput: (e) => (this.values = { ...this.values, [language.code]: e.target.value }) }, h("span", { slot: "label", class: "entry-form__field-label" }, language.name, h("span", { class: "entry-form__field-code" }, language.code.toUpperCase()), language.isSource && h("span", { class: "entry-form__field-source" }, t('Lcz_Source', { fallback: 'Source' })))), h("wa-copy-button", { class: "entry-form__value-copy", value: this.values[language.code] ?? '' }))))))), h("ir-translations-sync-dialog", { key: '2bd8885601fd9580c1621ec5b722df4831b5f2b9', ref: el => (this.syncDialogRef = el) })));
    }
    static get is() { return "ir-translations-entry-form"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-translations-entry-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-translations-entry-form.css"]
        };
    }
    static get properties() {
        return {
            "formId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "form-id"
            },
            "languages": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TranslationLanguage[]",
                    "resolved": "TranslationLanguage[]",
                    "references": {
                        "TranslationLanguage": {
                            "location": "import",
                            "path": "../../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationLanguage",
                            "referenceLocation": "TranslationLanguage"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "entry": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TranslationEntry | null",
                    "resolved": "TranslationEntry",
                    "references": {
                        "TranslationEntry": {
                            "location": "import",
                            "path": "../../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationEntry",
                            "referenceLocation": "TranslationEntry"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The entry being edited. Null puts the form in create mode."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "null"
            },
            "existingKeys": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Keys already used in the active table, for duplicate detection."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "nextDisplayOrder": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "DISPLAY_ORDER a brand-new key should get \u2014 one past the highest order already in the table."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "next-display-order",
                "defaultValue": "0"
            },
            "tableName": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "table-name"
            },
            "ownerId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "owner-id"
            },
            "entryUserId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "entry-user-id"
            },
            "duplicateSiblings": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "DuplicateSibling[]",
                    "resolved": "DuplicateSibling[]",
                    "references": {
                        "DuplicateSibling": {
                            "location": "import",
                            "path": "../../types",
                            "id": "src/components/ir-translations-manager/types.ts::DuplicateSibling",
                            "referenceLocation": "DuplicateSibling"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Rows in other used tables sharing `entry`'s description \u2014 language changes are written to them in the same batch."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "key": {},
            "values": {},
            "isSubmitting": {}
        };
    }
    static get events() {
        return [{
                "method": "entrySaved",
                "name": "entrySaved",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired after the write lands, with what was saved \u2014 the manager propagates language changes to the row's duplicates from it."
                },
                "complexType": {
                    "original": "EntrySavedDetail",
                    "resolved": "EntrySavedDetail",
                    "references": {
                        "EntrySavedDetail": {
                            "location": "import",
                            "path": "../../types",
                            "id": "src/components/ir-translations-manager/types.ts::EntrySavedDetail",
                            "referenceLocation": "EntrySavedDetail"
                        }
                    }
                }
            }, {
                "method": "submitDisabledChange",
                "name": "submitDisabledChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }, {
                "method": "isSubmittingChange",
                "name": "isSubmittingChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
}
