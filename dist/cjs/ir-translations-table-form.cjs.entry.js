'use strict';

var index = require('./index-Bp205iz4.js');
var setupMapping = require('./setup-mapping-CNvHLVKB.js');
var utils = require('./utils-w7_1d-K4.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./IBooking-Dsxfr_fF.js');
require('./types-BVJQZ50e.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-BpobEh98.js');
require('./index-CjQGUKJk.js');
require('./locales.store-CQhQqUVl.js');
require('./type-Bj2x9EWc.js');
require('./calendar-dates-BxDGM1ix.js');

const irTranslationsTableFormCss = () => `.sc-ir-translations-table-form-h{display:block}.table-form__body.sc-ir-translations-table-form{display:flex;flex-direction:column;gap:1rem}.table-form__error.sc-ir-translations-table-form{margin:-0.75rem 0 0;font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-danger-on-quiet, #991b1b)}`;

const IrTranslationsTableForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.tableSaved = index.createEvent(this, "tableSaved");
        this.tableSaveFailed = index.createEvent(this, "tableSaveFailed");
        this.submitDisabledChange = index.createEvent(this, "submitDisabledChange");
        this.isSubmittingChange = index.createEvent(this, "isSubmittingChange");
    }
    formId;
    mode = 'create';
    table = null;
    /** Names of the other tables, for duplicate detection. */
    existingNames = [];
    ownerId;
    entryUserId;
    tableSaved;
    tableSaveFailed;
    submitDisabledChange;
    isSubmittingChange;
    name = '';
    isSubmitting = false;
    nameInputRef;
    setupService = new setupMapping.SetupService();
    componentWillLoad() {
        this.name = this.table?.name ?? '';
        this.submitDisabledChange.emit(!this.isValid);
    }
    componentDidLoad() {
        requestAnimationFrame(() => this.nameInputRef?.focusInput());
    }
    get isDuplicateName() {
        const name = this.name.trim().toLowerCase();
        if (!name) {
            return false;
        }
        return this.existingNames.some(existing => existing.toLowerCase() === name && existing !== this.table?.name);
    }
    get isValid() {
        return this.name.trim().length > 0 && !this.isDuplicateName;
    }
    handleNameChange(value) {
        this.name = value ?? '';
        this.submitDisabledChange.emit(!this.isValid);
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        if (!this.isValid) {
            return;
        }
        const newName = this.name.trim();
        if (this.mode === 'create' || !this.table || this.table.entries.length === 0) {
            this.tableSaved.emit({ id: newName, name: newName, mode: this.mode });
            return;
        }
        const table = this.table;
        this.isSubmitting = true;
        this.isSubmittingChange.emit(true);
        try {
            await Promise.all(table.entries.map(entry => this.setupService.editSetup(setupMapping.buildEditSetupParams({ tableName: newName, key: entry.key, values: entry.values, meta: entry.meta }))));
            await Promise.all(table.entries.map(entry => this.setupService.editSetup(setupMapping.buildEditSetupParams({
                tableName: table.name,
                key: entry.key,
                values: entry.values,
                meta: entry.meta,
                isDeleted: true,
            }))));
            utils.showToast({ type: 'success', title: 'Table renamed' });
            this.tableSaved.emit({ id: newName, name: newName, mode: 'edit' });
        }
        catch (error) {
            console.error(error);
            utils.showToast({ type: 'error', title: 'Rename may be incomplete — reloading tables' });
            this.tableSaveFailed.emit();
        }
        finally {
            this.isSubmitting = false;
            this.isSubmittingChange.emit(false);
        }
    };
    render() {
        return (index.h("form", { key: 'bc0c9cdeffe2f05b7c3c0dcb545ba6b2b69a9dba', id: this.formId, class: "table-form__body", onSubmit: this.handleSubmit, novalidate: true }, index.h("ir-input", { key: '84d103a87cc9bc1a082a44ad43b5cdd7fdfff3fa', label: "Name", autocomplete: "off", value: this.name, placeholder: "e.g. Booking emails", "onText-change": e => this.handleNameChange(e.detail), ref: el => (this.nameInputRef = el) }), this.isDuplicateName && (index.h("p", { key: '5dffaec011937ae91904386caf1e19da593ff2c8', class: "table-form__error", role: "alert" }, "A table with this name already exists."))));
    }
};
IrTranslationsTableForm.style = irTranslationsTableFormCss();

exports.ir_translations_table_form = IrTranslationsTableForm;
