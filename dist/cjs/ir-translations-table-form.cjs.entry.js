'use strict';

var index = require('./index-CQkpA5n3.js');
var index$1 = require('./index-BVhX2bVZ.js');
var utils = require('./utils-Du7akmn_.js');
var setupMapping = require('./setup-mapping-D72fId4a.js');
var t = require('./t-C54QV4_c.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./utils-CQGL0l4_.js');
require('./IBooking-C1lok6Tq.js');
require('./types-BlCoz3jZ.js');
require('./locales.store-BMTss6fG.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-HgC39-BR.js');
require('./booking.dto-DxxzsxJC.js');
require('./type-BRhg-bzd.js');
require('./ir-date-BLb2Vxrk.js');
require('./language-observer-DKp37LIu.js');

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
    setupService = new index$1.SetupService();
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
        return (index.h("form", { key: '14367544c248742949140ea2ecb607c2c7ab834e', id: this.formId, class: "table-form__body", onSubmit: this.handleSubmit, novalidate: true }, index.h("ir-input", { key: '21bcdf539b22c647bdfcf6ace45a51eeee0998ea', label: t.t('Lcz_Name', { fallback: 'Name' }), autocomplete: "off", value: this.name, placeholder: "e.g. Booking emails", "onText-change": e => this.handleNameChange(e.detail), ref: el => (this.nameInputRef = el) }), this.isDuplicateName && (index.h("p", { key: 'e8944e03676565b3ee08249de30a2d2442e96963', class: "table-form__error", role: "alert" }, "A table with this name already exists."))));
    }
};
IrTranslationsTableForm.style = irTranslationsTableFormCss();

exports.ir_translations_table_form = IrTranslationsTableForm;
