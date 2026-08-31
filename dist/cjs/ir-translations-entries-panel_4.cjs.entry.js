'use strict';

var index = require('./index-DN8J4ULi.js');
var utils = require('./utils-DGikCG8C.js');

const irTranslationsEntriesPanelCss = () => `.sc-ir-translations-entries-panel-h{display:flex;flex-direction:column;min-width:0;flex:1 1 auto;min-height:0}.entries-panel__card.sc-ir-translations-entries-panel{display:flex;flex-direction:column;flex:1 1 auto;min-height:0;background:var(--wa-color-surface-default);border:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0);border-radius:var(--wa-border-radius-l, 0.75rem);overflow:hidden}.entries-panel__toolbar.sc-ir-translations-entries-panel{display:flex;align-items:flex-end;gap:0.5rem;padding:0.75rem 1rem}.entries-panel__search.sc-ir-translations-entries-panel{flex:1 1 12rem;min-width:0;max-width:350px}.entries-panel__status.sc-ir-translations-entries-panel{flex:0 0 11rem}.entries-panel__search.sc-ir-translations-entries-panel::part(label),.entries-panel__search.sc-ir-translations-entries-panel [part~="label"],.entries-panel__status.sc-ir-translations-entries-panel::part(label),.entries-panel__status.sc-ir-translations-entries-panel [part~="label"]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.entries-panel__search-hint.sc-ir-translations-entries-panel{display:inline-flex;align-items:center;padding:0.05rem 0.4rem;font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-text-quiet);background:var(--wa-color-neutral-fill-quiet);border:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0);border-radius:var(--wa-border-radius-s)}@media (max-width: 575px){.entries-panel__toolbar.sc-ir-translations-entries-panel{flex-wrap:wrap}.entries-panel__status.sc-ir-translations-entries-panel{flex:1 1 8rem}}.entries-panel__loader-container.sc-ir-translations-entries-panel{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;padding:3rem 1rem;color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-s)}.entries-panel__loader-container.sc-ir-translations-entries-panel p.sc-ir-translations-entries-panel{margin:0}.entries-panel__footer.sc-ir-translations-entries-panel{display:flex;align-items:center;justify-content:space-between;gap:0.75rem;padding:0.5rem 1rem;font-size:var(--wa-font-size-xs, 0.75rem);font-variant-numeric:tabular-nums;color:var(--wa-color-text-quiet);border-top:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0)}.entries-panel__missing-link.sc-ir-translations-entries-panel{border:none;background:transparent;padding:0;font:inherit;color:var(--wa-color-warning-on-quiet, #92400e);cursor:pointer}.entries-panel__missing-link.sc-ir-translations-entries-panel:hover,.entries-panel__missing-link.sc-ir-translations-entries-panel:focus-visible{text-decoration:underline}`;

const IrTranslationsEntriesPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.createEntry = index.createEvent(this, "createEntry");
        this.editEntry = index.createEvent(this, "editEntry");
        this.duplicateEntry = index.createEvent(this, "duplicateEntry");
        this.deleteEntry = index.createEvent(this, "deleteEntry");
        this.entryChange = index.createEvent(this, "entryChange");
        this.reorderEntries = index.createEvent(this, "reorderEntries");
        this.toggleVisibility = index.createEvent(this, "toggleVisibility");
        this.saveOrder = index.createEvent(this, "saveOrder");
        this.discardOrder = index.createEvent(this, "discardOrder");
    }
    /** The active table's unfiltered entries — filtered internally for display. */
    entries = [];
    languages = [];
    sourceCode;
    /** True while the active table's keys are still loading. */
    isLoading = false;
    /** Disables the "New key" action, e.g. while another write is in flight. */
    disableActions = false;
    /** True once a drag reorder is applied locally but not yet saved — shows the Save/Discard order buttons. */
    hasPendingOrder = false;
    /** Ids of rows whose position differs from the last-loaded/saved order — marked in the table while a reorder is pending. */
    changedEntryIds = new Set();
    createEntry;
    editEntry;
    duplicateEntry;
    deleteEntry;
    entryChange;
    reorderEntries;
    toggleVisibility;
    saveOrder;
    discardOrder;
    searchTerm = '';
    statusFilter = 'all';
    shortcutHint = null;
    searchInputRef;
    componentWillLoad() {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (!isTouchDevice) {
            this.shortcutHint = '/';
        }
        document.addEventListener('keydown', this.handleGlobalKeyDown);
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.handleGlobalKeyDown);
    }
    /** `/` jumps to search the way most keyboard-driven tools do — unlike ⌘F it doesn't fight the browser. */
    handleGlobalKeyDown = (event) => {
        if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) {
            return;
        }
        const target = event.target;
        if (target?.closest('input, textarea, [contenteditable="true"], wa-input, wa-textarea, wa-select')) {
            return;
        }
        event.preventDefault();
        this.searchInputRef?.focus();
    };
    get filteredEntries() {
        const term = this.searchTerm.trim().toLowerCase();
        return this.entries.filter(entry => {
            if (term && !entry.key.toLowerCase().includes(term) && !Object.values(entry.values).some(value => value.toLowerCase().includes(term))) {
                return false;
            }
            if (this.statusFilter === 'all') {
                return true;
            }
            if (this.statusFilter === 'hidden') {
                return entry.meta?.isVisible === false;
            }
            const missing = utils.countMissing(entry, this.languages);
            return this.statusFilter === 'missing' ? missing > 0 : missing === 0;
        });
    }
    get hasActiveFilters() {
        return this.searchTerm.trim().length > 0 || this.statusFilter !== 'all';
    }
    clearFilters = (e) => {
        this.stopPropagation(e);
        this.searchTerm = '';
        this.statusFilter = 'all';
    };
    renderToolbar() {
        return (index.h("div", { class: "entries-panel__toolbar" }, index.h("wa-input", { class: "entries-panel__search", size: "s", "with-clear": true, label: "Search keys and translations", value: this.searchTerm, placeholder: "Search keys and translations", autocomplete: "off", spellcheck: false, ref: el => (this.searchInputRef = el), oninput: (e) => (this.searchTerm = e.target.value) }, index.h("wa-icon", { name: "magnifying-glass", slot: "start", "aria-hidden": "true" }), this.shortcutHint && !this.searchTerm && (index.h("span", { slot: "end", class: "entries-panel__search-hint", "aria-hidden": "true" }, this.shortcutHint))), index.h("wa-select", { class: "entries-panel__status", size: "s", label: "Status", value: this.statusFilter, onchange: (e) => (this.statusFilter = e.target.value) }, index.h("wa-option", { value: "all" }, "All keys"), index.h("wa-option", { value: "missing" }, "Needs translation"), index.h("wa-option", { value: "complete" }, "Complete"), index.h("wa-option", { value: "hidden" }, "Hidden from app")), this.hasPendingOrder && (index.h("ir-custom-button", { style: { marginLeft: 'auto' }, variant: "neutral", appearance: "outlined", disabled: this.disableActions, onClickHandler: () => this.discardOrder.emit() }, "Discard")), this.hasPendingOrder && (index.h("ir-custom-button", { variant: "brand", appearance: "accent", disabled: this.disableActions, loading: this.disableActions, onClickHandler: () => this.saveOrder.emit() }, "Save")), index.h("ir-custom-button", { style: { marginLeft: this.hasPendingOrder ? null : 'auto' }, variant: "brand", appearance: "filled", disabled: this.disableActions || this.isLoading, onClickHandler: () => this.createEntry.emit() }, index.h("wa-icon", { name: "plus", slot: "start", "aria-hidden": "true" }), "New key")));
    }
    renderFooter(shown, total, missing) {
        return (index.h("div", { class: "entries-panel__footer", "aria-live": "polite" }, index.h("span", null, shown === total ? `${total} key${total === 1 ? '' : 's'}` : `${shown} of ${total} keys`), missing > 0 && (index.h("button", { type: "button", class: "entries-panel__missing-link", onClick: () => (this.statusFilter = this.statusFilter === 'missing' ? 'all' : 'missing') }, missing, " need", missing === 1 ? 's' : '', " translation"))));
    }
    stopPropagation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
    }
    render() {
        const filteredEntries = this.filteredEntries;
        const total = this.entries.length;
        const missing = this.entries.filter(entry => utils.countMissing(entry, this.languages) > 0).length;
        return (index.h("div", { key: 'eb2f2ecf32ab73b7d8b6256452ed74f8038cfb3f', class: "entries-panel__card" }, this.renderToolbar(), this.isLoading ? (index.h("div", { class: "entries-panel__loader-container" }, index.h("ir-spinner", null), index.h("p", null, "Loading keys\u2026"))) : (index.h("ir-translations-entries-table", { entries: filteredEntries, languages: this.languages, sourceCode: this.sourceCode, compact: false, filtered: this.hasActiveFilters, reorderEnabled: !this.hasActiveFilters, changedEntryIds: this.changedEntryIds, onEntryChange: (e) => {
                this.stopPropagation(e);
                this.entryChange.emit(e.detail);
            }, onEditEntry: (e) => {
                this.stopPropagation(e);
                this.editEntry.emit(e.detail);
            }, onDuplicateEntry: (e) => {
                this.stopPropagation(e);
                this.duplicateEntry.emit(e.detail);
            }, onDeleteEntry: (e) => {
                this.stopPropagation(e);
                this.deleteEntry.emit(e.detail);
            }, onClearFilters: this.clearFilters, onReorderEntries: (e) => {
                this.stopPropagation(e);
                this.reorderEntries.emit(e.detail);
            }, onToggleVisibility: (e) => {
                this.stopPropagation(e);
                this.toggleVisibility.emit(e.detail);
            } })), !this.isLoading && total > 0 && this.renderFooter(filteredEntries.length, total, missing)));
    }
};
IrTranslationsEntriesPanel.style = irTranslationsEntriesPanelCss();

const irTranslationsEntryDrawerCss = () => `.sc-ir-translations-entry-drawer-h{--ir-drawer-width:32rem}`;

const IrTranslationsEntryDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeDrawer = index.createEvent(this, "closeDrawer");
        this.entrySaved = index.createEvent(this, "entrySaved");
    }
    open = false;
    formId = 'translations-entry-form';
    languages = [];
    /** The entry being edited. Null puts the drawer in create mode. */
    entry = null;
    /** Keys already used in the active table, for duplicate detection. */
    existingKeys = [];
    /** DISPLAY_ORDER a brand-new key should get — one past the highest order already in the table. */
    nextDisplayOrder = 0;
    tableName;
    ownerId;
    entryUserId;
    closeDrawer;
    entrySaved;
    saveDisabled = true;
    isSubmitting = false;
    render() {
        const isEditing = !!this.entry;
        return (index.h("ir-drawer", { key: 'ce89cc3cba6e2e99660d3c01796cbce4560c06ac', label: isEditing ? 'Edit key' : 'New key', open: this.open, onDrawerHide: () => this.closeDrawer.emit() }, this.open && (index.h("ir-translations-entry-form", { key: '1f9cd66d0e1495c6238e91a3cfa07791ba7919c6', formId: this.formId, languages: this.languages, entry: this.entry, existingKeys: this.existingKeys, nextDisplayOrder: this.nextDisplayOrder, tableName: this.tableName, ownerId: this.ownerId, entryUserId: this.entryUserId, onSubmitDisabledChange: (e) => (this.saveDisabled = e.detail), onIsSubmittingChange: (e) => (this.isSubmitting = e.detail), onEntrySaved: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.entrySaved.emit();
                this.closeDrawer.emit();
            } })), index.h("div", { key: 'd8c2aa46ef9d8e6cfab6cee97f7d6aca9070e77c', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: '5d9ab6ce2ca7a0dad9368d7e7315cf05175274a7', size: "m", appearance: "outlined", variant: "neutral", disabled: this.isSubmitting, onClickHandler: () => this.closeDrawer.emit() }, "Cancel"), index.h("ir-custom-button", { key: 'cfb0201f4b53b8ca369a5e0db562f492c7d37f2e', size: "m", appearance: "accent", variant: "brand", form: this.formId, type: "submit", disabled: this.saveDisabled || this.isSubmitting, loading: this.isSubmitting }, "Save"))));
    }
};
IrTranslationsEntryDrawer.style = irTranslationsEntryDrawerCss();

const irTranslationsLanguageDialogCss = () => `.sc-ir-translations-language-dialog-h{--ir-dialog-width:34rem}.language-dialog__body.sc-ir-translations-language-dialog{display:flex;flex-direction:column;gap:1.25rem}.language-dialog__list.sc-ir-translations-language-dialog{list-style:none;margin:0;padding:0;display:flex;flex-direction:column}.language-dialog__item.sc-ir-translations-language-dialog{display:flex;align-items:center;gap:0.65rem;padding:0.4rem 0.5rem;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0)}.language-dialog__item.sc-ir-translations-language-dialog:last-child{border-bottom:0}.language-dialog__item.sc-ir-translations-language-dialog:hover{background:var(--wa-color-neutral-fill-quiet)}.language-dialog__code.sc-ir-translations-language-dialog{flex:0 0 2.5rem;padding:0.1rem 0;font-size:var(--wa-font-size-xs, 0.75rem);font-weight:var(--wa-font-weight-semibold, 600);text-align:center;color:var(--wa-color-text-quiet);background:var(--wa-color-neutral-fill-quiet);border-radius:var(--wa-border-radius-s)}.language-dialog__name.sc-ir-translations-language-dialog{display:flex;align-items:center;gap:0.4rem;flex:1 1 auto;min-width:0;font-size:var(--wa-font-size-s);color:var(--wa-color-text-normal)}.language-dialog__source-tag.sc-ir-translations-language-dialog{flex:0 0 auto;padding:0.05rem 0.35rem;font-size:0.6875rem;color:var(--wa-color-brand-on-quiet);background:var(--wa-color-brand-fill-quiet);border-radius:var(--wa-border-radius-s)}.language-dialog__coverage.sc-ir-translations-language-dialog{display:flex;align-items:center;gap:0.5rem;flex:0 0 auto}.language-dialog__bar.sc-ir-translations-language-dialog{width:4.5rem;--track-height:0.25rem;--indicator-color:var(--wa-color-brand-fill-loud)}.language-dialog__percent.sc-ir-translations-language-dialog{min-width:2.5rem;font-size:var(--wa-font-size-xs, 0.75rem);font-variant-numeric:tabular-nums;text-align:right;color:var(--wa-color-text-quiet)}.language-dialog__add.sc-ir-translations-language-dialog{display:flex;flex-direction:column;gap:0.5rem;padding-top:1rem;border-top:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0)}.language-dialog__add-title.sc-ir-translations-language-dialog{margin:0;font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold, 600);color:var(--wa-color-text-normal)}.language-dialog__add-row.sc-ir-translations-language-dialog{display:flex;align-items:flex-end;gap:0.5rem}.language-dialog__select.sc-ir-translations-language-dialog{flex:1 1 auto;min-width:0}.language-dialog__add-row.sc-ir-translations-language-dialog ir-custom-button.sc-ir-translations-language-dialog{flex:0 0 auto}.language-dialog__hint.sc-ir-translations-language-dialog{margin:0;font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet)}.language-dialog__footer.sc-ir-translations-language-dialog{display:flex;justify-content:flex-end}`;

const IrTranslationsLanguageDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.addLanguage = index.createEvent(this, "addLanguage");
        this.removeLanguage = index.createEvent(this, "removeLanguage");
        this.setSourceLanguage = index.createEvent(this, "setSourceLanguage");
        this.closeDialog = index.createEvent(this, "closeDialog");
    }
    open = false;
    languages = [];
    /** Every language this property exposes and Setup can persist — the picker offers whichever of these aren't already shown. */
    catalog = [];
    /** Every entry across every table, used to report per-language coverage. */
    entries = [];
    addLanguage;
    /** Hides a language from this manager's view. Every CODE_VALUE_* column always exists in Setup, so nothing is deleted. */
    removeLanguage;
    setSourceLanguage;
    closeDialog;
    pendingCode = '';
    dialogRef;
    handleOpenChange(open) {
        if (open) {
            this.pendingCode = '';
            this.dialogRef?.openModal();
        }
        else {
            this.dialogRef?.closeModal();
        }
    }
    get availableLanguages() {
        return this.catalog.filter(language => !this.languages.some(shown => shown.code === language.code));
    }
    handleAdd = () => {
        const language = this.catalog.find(item => item.code === this.pendingCode);
        if (!language) {
            return;
        }
        this.addLanguage.emit({ code: language.code, name: language.name });
        this.pendingCode = '';
    };
    renderLanguageRow(language) {
        const percent = utils.completionFor(this.entries, language.code);
        const isSource = !!language.isSource;
        return (index.h("li", { key: language.code, class: "language-dialog__item" }, index.h("span", { class: "language-dialog__code" }, language.code.toUpperCase()), index.h("span", { class: "language-dialog__name" }, language.name, isSource && index.h("span", { class: "language-dialog__source-tag" }, "Source")), index.h("span", { class: "language-dialog__coverage" }, index.h("wa-progress-bar", { class: "language-dialog__bar", value: percent, label: `${language.name} coverage` }), index.h("span", { class: "language-dialog__percent" }, percent, "%")), index.h("wa-dropdown", { "onwa-select": (e) => {
                if (e.detail.item.value === 'source') {
                    this.setSourceLanguage.emit(language.code);
                }
                else if (e.detail.item.value === 'remove') {
                    this.removeLanguage.emit(language.code);
                }
            } }, index.h("ir-custom-button", { slot: "trigger", appearance: "plain", variant: "neutral", iconBtn: true }, index.h("wa-icon", { name: "ellipsis", label: `Actions for ${language.name}` })), index.h("wa-dropdown-item", { value: "source", disabled: isSource }, index.h("wa-icon", { slot: "icon", name: "star" }), "Set as source"), index.h("wa-dropdown-item", { value: "remove", disabled: isSource }, index.h("wa-icon", { slot: "icon", name: "eye-slash" }), "Hide from view"))));
    }
    render() {
        const availableLanguages = this.availableLanguages;
        return (index.h("ir-dialog", { key: '7bbc07f74247c8996ef4a1763530989e1a73e510', label: "Languages", ref: el => (this.dialogRef = el), onIrDialogHide: () => this.closeDialog.emit() }, index.h("div", { key: 'e1aca65a08a2827aa4debac303dcec4f6af0baae', class: "language-dialog__body" }, this.languages.length === 0 ? (index.h("ir-empty-state", { message: "No languages shown. Add one below." })) : (index.h("ul", { class: "language-dialog__list" }, this.languages.map(language => this.renderLanguageRow(language)))), index.h("div", { key: 'cbd2501c97bb7bf991d97dcd34aa6702d4d4eb2c', class: "language-dialog__add" }, availableLanguages.length === 0 ? (index.h("p", { class: "language-dialog__hint" }, "All exposed languages are shown.")) : (index.h(index.Fragment, null, index.h("h3", { class: "language-dialog__add-title" }, "Show a language"), index.h("div", { class: "language-dialog__add-row" }, index.h("wa-select", { label: "Language", size: "s", class: "language-dialog__select", value: this.pendingCode, onchange: (e) => (this.pendingCode = e.target.value) }, availableLanguages.map(language => (index.h("wa-option", { key: language.code, value: language.code }, language.name, " (", language.code.toUpperCase(), ")")))), index.h("ir-custom-button", { appearance: "filled", variant: "brand", disabled: !this.pendingCode, onClickHandler: this.handleAdd }, "Add")))))), index.h("div", { key: '4e0a0f62a312189707753cb1268e71ecd54aa487', slot: "footer", class: "language-dialog__footer" }, index.h("ir-custom-button", { key: '9b3a69d1b9f89760f32a4e9dfb54af81d3ddc930', appearance: "filled", variant: "neutral", onClickHandler: () => this.closeDialog.emit() }, "Done"))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrTranslationsLanguageDialog.style = irTranslationsLanguageDialogCss();

const irTranslationsTableDialogCss = () => `.sc-ir-translations-table-dialog-h{--ir-dialog-width:28rem}`;

const IrTranslationsTableDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeDialog = index.createEvent(this, "closeDialog");
        this.tableSaved = index.createEvent(this, "tableSaved");
        this.tableSaveFailed = index.createEvent(this, "tableSaveFailed");
    }
    open = false;
    formId = 'translations-table-form';
    mode = 'create';
    table = null;
    /** Names of the other tables, for duplicate detection. */
    existingNames = [];
    ownerId;
    entryUserId;
    closeDialog;
    tableSaved;
    tableSaveFailed;
    saveDisabled = true;
    isSubmitting = false;
    dialogRef;
    handleOpenChange(open) {
        if (open) {
            this.dialogRef?.openModal();
        }
        else {
            this.dialogRef?.closeModal();
        }
    }
    render() {
        const isEditing = this.mode === 'edit';
        return (index.h("ir-dialog", { key: 'a1fbc8b9c55a96b94d4390ba5fd3678de11712f4', label: isEditing ? 'Table details' : 'New table', ref: el => (this.dialogRef = el), onIrDialogHide: () => this.closeDialog.emit() }, this.open && (index.h("ir-translations-table-form", { key: '83533444f635da9662faebe9464bfe10d49d421f', formId: this.formId, mode: this.mode, table: this.table, existingNames: this.existingNames, ownerId: this.ownerId, entryUserId: this.entryUserId, onSubmitDisabledChange: (e) => (this.saveDisabled = e.detail), onIsSubmittingChange: (e) => (this.isSubmitting = e.detail), onTableSaved: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.tableSaved.emit(e.detail);
                this.dialogRef?.closeModal();
            }, onTableSaveFailed: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.tableSaveFailed.emit();
                this.dialogRef?.closeModal();
            } })), index.h("div", { key: '0dbb03c66d630e46d09982048ca74a2c1eaa9ea3', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '2f5de7360cf4d12f01efa6d472a9704a3efdde34', size: "m", appearance: "outlined", variant: "neutral", disabled: this.isSubmitting, onClickHandler: () => this.closeDialog.emit() }, "Cancel"), index.h("ir-custom-button", { key: '6512c245f64b27dbc522ff51380c74b2d43f0a9f', size: "m", appearance: "accent", variant: "brand", form: this.formId, type: "submit", disabled: this.saveDisabled || this.isSubmitting, loading: this.isSubmitting }, "Save"))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrTranslationsTableDialog.style = irTranslationsTableDialogCss();

exports.ir_translations_entries_panel = IrTranslationsEntriesPanel;
exports.ir_translations_entry_drawer = IrTranslationsEntryDrawer;
exports.ir_translations_language_dialog = IrTranslationsLanguageDialog;
exports.ir_translations_table_dialog = IrTranslationsTableDialog;
