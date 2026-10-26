'use strict';

var index = require('./index-IDeZZwEK.js');
var index$1 = require('./index-DnLl4vlg.js');
var t = require('./t-CqJPQrfm.js');
var room_service = require('./room.service-BQ3H_tn4.js');
var index$2 = require('./index-B5qvLYZl.js');
var calendarData = require('./calendar-data-ShS6b-Ns.js');
var irInterceptor_store = require('./ir-interceptor.store-GIfc0Pi9.js');
var utils = require('./utils-BEjK-V-3.js');
var number = require('./number-xBpNWk3H.js');
var utils$1 = require('./utils-PciJI6G4.js');
require('./types-BVJQZ50e.js');
require('./locale-scope-Cch-vf1R.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./commonSchemas-D4iFLV5-.js');
require('./locale.controller-DOykNQAc.js');
require('./language-observer-DKp37LIu.js');
require('./types-sp5nWPAa.js');
require('./moment-CdViwxPQ.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
require('./ir-date-CbkOKs2C.js');
require('./calendar-dates-BxDGM1ix.js');
require('./IBooking-hDE_y33g.js');

const irHkDeleteDialogCss = () => `:host{display:contents}.delete-modal__description{margin:0;font-size:var(--wa-font-size-m);color:var(--wa-color-text-quiet);line-height:var(--wa-line-height-normal)}.delete-modal__footer{display:flex;justify-content:flex-end;gap:0.5rem}`;

const IrHkDeleteDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.modalClosed = index.createEvent(this, "modalClosed");
        this.resetData = index.createEvent(this, "resetData");
    }
    user;
    isOpen = false;
    selectedId = '';
    isConfirming = false;
    modalClosed;
    resetData;
    housekeepingService = new index$1.HouseKeepingService();
    async openModal() {
        this.isOpen = true;
    }
    async closeModal() {
        this.isOpen = false;
        this.modalClosed.emit(null);
    }
    async handleConfirm() {
        try {
            this.isConfirming = true;
            if (this.selectedId === '') {
                await this.housekeepingService.editExposedHKM(this.user, true);
            }
            else {
                const newAssignedUnits = this.user.assigned_units.map(u => ({ hkm_id: +this.selectedId, is_to_assign: true, unit_id: u.id }));
                await this.housekeepingService.manageExposedAssignedUnitToHKM(index$1.housekeeping_store.default_properties.property_id, newAssignedUnits);
                const { assigned_units, is_soft_deleted, is_active, ...user } = this.user;
                await this.housekeepingService.editExposedHKM(user, true);
            }
            this.resetData.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isConfirming = false;
            this.closeModal();
        }
    }
    render() {
        if (!this.user)
            return;
        const hasAssignedUnits = this.user.assigned_units.length > 0;
        const label = hasAssignedUnits ? t.t('Lcz_AssignUnitsTo', { fallback: 'Assign units to' }) : t.t('Lcz_ConfirmDeletion', { fallback: 'Confirm deletion!' });
        return (index.h("ir-dialog", { lightDismiss: false, label: label, open: this.isOpen, onIrDialogHide: () => this.closeModal() }, !hasAssignedUnits && (index.h("p", { class: "delete-modal__description" }, t.t('Lcz_ConfirmPermanentDeleteUser', { fallback: 'Are you sure you want to permanently delete' }), " ", index.h("strong", null, this.user.name), "? This action cannot be undone.")), hasAssignedUnits && (index.h("wa-select", { size: "s", defaultValue: this.selectedId, value: this.selectedId, onchange: e => (this.selectedId = e.target.value) }, index.h("wa-option", { value: "" }, t.t('Lcz_nobody', { fallback: 'nobody' })), index$1.housekeeping_store.hk_criteria.housekeepers
            .filter(hk => hk.id !== this.user.id)
            .map(m => ({ value: m.id.toString(), text: m.name }))
            .sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase()))
            .map(m => (index.h("wa-option", { key: m.value, value: m.value }, m.text))))), index.h("div", { slot: "footer", class: "delete-modal__footer" }, index.h("ir-custom-button", { variant: "neutral", appearance: "filled", size: "m", onClickHandler: () => this.closeModal() }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { variant: "danger", appearance: "accent", size: "m", loading: this.isConfirming, onClickHandler: () => this.handleConfirm() }, t.t('Lcz_Confirm', { fallback: 'Confirm' })))));
    }
};
IrHkDeleteDialog.style = irHkDeleteDialogCss();

const irHkOperationsCardCss = () => `.sc-ir-hk-operations-card-h{display:block}.ops-header__title.sc-ir-hk-operations-card{margin:0;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.hk-operation__card.sc-ir-hk-operations-card{background-color:var(--wa-color-surface-default, white)}.ops-header__subtitle.sc-ir-hk-operations-card{display:block;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet);margin-top:0.125rem}.ops-settings.sc-ir-hk-operations-card{display:flex;flex-direction:column;gap:0.75rem;margin-bottom:1.25rem}.ops-setting-item.sc-ir-hk-operations-card{display:grid;grid-template-columns:2rem 1fr;align-items:center;gap:0.5rem 0.75rem}.ops-setting-item__icon.sc-ir-hk-operations-card{grid-column:1;grid-row:1;display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;border-radius:0.375rem;background:var(--wa-color-neutral-fill-quiet);color:var(--wa-color-neutral-on-quiet);font-size:0.875rem}.ops-setting-item__info.sc-ir-hk-operations-card{grid-column:2;grid-row:1;display:flex;flex-direction:column;gap:0.125rem;min-width:0}.ops-setting-item__title.sc-ir-hk-operations-card{font-size:0.875rem;font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.ops-setting-item__subtitle.sc-ir-hk-operations-card{font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}.ops-setting-item__controls.sc-ir-hk-operations-card{grid-column:2;grid-row:2}.ops-setting-item__controls.sc-ir-hk-operations-card wa-select.sc-ir-hk-operations-card{width:100%;max-width:330px}@media (min-width: 521px){.ops-setting-item.sc-ir-hk-operations-card{display:flex;grid-template-columns:none;grid-template-rows:none;align-items:center;gap:0.5rem 0.75rem}.ops-setting-item__icon.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;flex-shrink:0}.ops-setting-item__info.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;flex-shrink:0}.ops-setting-item__controls.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;flex-shrink:0}.ops-setting-item__controls.sc-ir-hk-operations-card wa-select.sc-ir-hk-operations-card{width:200px;max-width:none}}.ops-tasks__header.sc-ir-hk-operations-card{margin-bottom:0.75rem}.ops-tasks__title.sc-ir-hk-operations-card{margin:0;margin:0;font-size:0.875rem;font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.ops-tasks__subtitle.sc-ir-hk-operations-card{margin:0.125rem 0 0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}.ops-tasks__list.sc-ir-hk-operations-card{display:flex;flex-direction:column;gap:0.5rem}.ops-task-row.sc-ir-hk-operations-card{display:grid;grid-template-columns:1.5rem 1fr 1.75rem;align-items:center;gap:0.5rem 0.75rem}.ops-task-badge.sc-ir-hk-operations-card{grid-column:1;grid-row:1;display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem;border-radius:50%;background:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-text-loud);font-size:0.6875rem;font-weight:700}.ops-task-badge--locked.sc-ir-hk-operations-card{background:var(--wa-color-neutral-fill-quiet);color:var(--wa-color-neutral-text-quiet);font-size:0.75rem}.ops-task-locked-label.sc-ir-hk-operations-card{grid-column:2;grid-row:1;font-size:0.875rem;font-weight:500;color:var(--wa-color-neutral-text-loud);min-width:0}.ops-task-input.sc-ir-hk-operations-card{grid-column:2;grid-row:1;width:100%}.ops-task-select.sc-ir-hk-operations-card{grid-column:2;grid-row:2;width:100%}.ops-task-delete.sc-ir-hk-operations-card{grid-column:3;grid-row:1;color:var(--wa-color-neutral-text-quiet);font-size:0.75rem}.ops-task-row--locked.sc-ir-hk-operations-card{grid-template-columns:1.5rem 1fr 1.75rem;opacity:0.85}.ir-dialog__footer.sc-ir-hk-operations-card{display:flex;justify-content:flex-end;gap:0.5rem}@media (min-width: 521px){.ops-task-select.sc-ir-hk-operations-card{grid-column:2;grid-row:2;width:100%;max-width:200px}.ops-task-row.sc-ir-hk-operations-card{display:flex;grid-template-columns:none;grid-template-rows:none;align-items:center;gap:0.5rem}.ops-task-badge.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;flex-shrink:0}.ops-task-input.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;width:200px;flex-shrink:0}.ops-task-select.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;width:200px;max-width:none;flex-shrink:0}.ops-task-delete.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;margin-inline-start:auto}.ops-task-row--locked.sc-ir-hk-operations-card{grid-template-columns:none}.ops-task-locked-label.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;min-width:200px;flex-shrink:0}.ops-task-row--locked.sc-ir-hk-operations-card .ops-task-select.sc-ir-hk-operations-card{grid-column:3;grid-row:1}}`;

const IrHkOperationsCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    frequencies = [];
    hkTasks = [
        { name: '', frequency: '' },
        { name: '', frequency: '' },
    ];
    selectedCleaningFrequency = null;
    roomService = new room_service.RoomService();
    propertyService = new index$2.PropertyService();
    houseKeepingService = new index$1.HouseKeepingService();
    dialog;
    componentWillLoad() {
        const criteria = index$1.housekeeping_store.hk_criteria;
        this.hkTasks = [
            { name: criteria?.t1_config?.label ?? '', frequency: criteria?.t1_config?.freq ?? '' },
            { name: criteria?.t2_config?.label ?? '', frequency: criteria?.t2_config?.freq ?? '' },
        ];
        this.selectedCleaningFrequency = (calendarData.calendar_data.cleaning_frequency ?? criteria?.cleaning_frequencies?.[0])?.code ?? null;
    }
    async saveAutomaticCheckInCheckout(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const target = e.target;
        const flag = target.value === 'auto';
        try {
            await this.roomService.SetAutomaticCheckInOut({
                property_id: index$1.housekeeping_store.default_properties.property_id,
                flag,
            });
            utils.showToast({ position: 'top-right', title: t.t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }), description: '', type: 'success' });
        }
        catch (error) {
            console.log(error);
        }
    }
    async saveCleaningFrequency() {
        try {
            await this.propertyService.setExposedCleaningFrequency({
                property_id: index$1.housekeeping_store.default_properties.property_id,
                code: this.selectedCleaningFrequency,
            });
            calendarData.calendar_data.cleaning_frequency = { code: this.selectedCleaningFrequency, description: '' };
            utils.showToast({ position: 'top-right', title: t.t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }), description: '', type: 'success' });
            this.dialog.closeModal();
        }
        catch (error) {
            console.log(error);
        }
    }
    async saveHkTasks() {
        const [t1, t2] = this.hkTasks;
        try {
            await this.houseKeepingService.setHKTaskLabels({
                property_id: index$1.housekeeping_store.default_properties.property_id,
                t1_label: t1.name,
                t1_freq: t1.frequency,
                t2_label: t2.name,
                t2_freq: t2.frequency,
            });
            utils.showToast({ position: 'top-right', title: t.t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }), description: '', type: 'success' });
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        return (index.h(index.Host, { key: '86996a5f24c86210ce7f3ef503e57d927b4b844b' }, index.h("wa-card", { key: 'd40c3a2f0ee182b54228f26b1926fab51678fc97', appearance: "plain", class: "hk-operation__card" }, index.h("div", { key: '5f9b3f38bdf91c145eb697cc31fbab162dd7340e', slot: "header" }, index.h("span", { key: '6a3ac9ec8e7d68dd459d6de1122a2e98274c1e30', class: "ops-header__title" }, t.t('Lcz_OperationsSettings', { fallback: 'Operations Settings' }))), index.h("div", { key: '9b2b5135065a66bbb77487062ed3ae7b1acf2b48', class: "ops-settings" }, index.h("div", { key: '3efa279121a9a9f782c0796b142f18862bff8b85', class: "ops-setting-item" }, index.h("div", { key: 'ac6450d4804e271e657c94c53709473a9d281b7e', class: "ops-setting-item__info" }, index.h("span", { key: '74039fe1dd6642656132ed383f80a1ee48c915a6', class: "ops-setting-item__title" }, t.t('Lcz_AutomaticCheckInCheckout', { fallback: 'Automatic Check-in & Check-out' })), index.h("span", { key: 'dae84152dfe26d76369a48450ecc5361043f67e7', class: "ops-setting-item__subtitle" }, t.t('Lcz_ProcessGuestsAutomaticallyBasedOnPropertyRules', { fallback: 'Process guests automatically based on property rules' }))), index.h("div", { key: '41e6868595368aefb06f179226d60b7e7c241fa6', class: "ops-setting-item__controls" }, index.h("wa-select", { key: '8cc2dbb83e204bbc6f00e9c2b77362bd788fe817', size: "s", style: { minWidth: '260px' }, value: calendarData.calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendarData.calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, index.h("wa-option", { key: '213be37c2ba5fce024b99a214d9da69d59060900', value: "auto" }, t.t('Lcz_YesAsPerPropertyPolicy', { fallback: 'Yes, as per the property policy.' })), index.h("wa-option", { key: '3ab644fcc8994fe4c996df0b6f8ace7d0fa8597a', value: "manual" }, t.t('Lcz_NoIWillDoItManually', { fallback: 'No, I will do it manually.' })))))), index.h("div", { key: 'd993702b3c0d3509ac5f28450f0f09d028d810a8', class: "ops-tasks__header" }, index.h("p", { key: '276b9c868d605eeac96251dafb5868ebf90089fc', class: "ops-tasks__title" }, t.t('Lcz_RecurringTasks', { fallback: 'Recurring Tasks' })), index.h("p", { key: 'a245fc3d29a5e7de91d6462e9719da927cf78297', class: "ops-tasks__subtitle" }, t.t('Lcz_DefineYourHousekeepingTasksAndFrequency', { fallback: 'Define your housekeeping tasks and frequency' }))), index.h("div", { key: '6e190332bf04d54a0738255099fe1e581b412281', class: "ops-tasks__list" }, index.h("div", { key: '4941d562c6c138a2a214df3fc5852441d7eea7ab', class: "ops-task-row ops-task-row--locked" }, index.h("wa-badge", { key: 'f42ad2cd617b3bcc379b302b65d05864f2b580d3', variant: "danger", appearance: "filled" }, t.t('Lcz_CleaningAbbreviation', { fallback: 'CL' })), index.h("span", { key: 'd1bd6dd15f15a8ad0ef0ce4dba4c46dbfcc274f4', class: "ops-task-locked-label" }, t.t('Lcz_Cleaning', { fallback: 'Cleaning' })), index.h("wa-select", { key: '3a0b8ee3b4a88c966b6d45cc8bd25138ba1bc00d', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, index$1.housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (index.h("wa-option", { key: v.code, value: v.code }, v.description)))), index.h("span", { key: '65800a1a20d953897c795190ebd773df33e039db' })), this.hkTasks.map((task, i) => (index.h("div", { key: i, class: "ops-task-row" }, index.h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, t.t('Lcz_TaskAbbreviation', { fallback: 'T%1', params: [number.formatCount(i + 1)] })), index.h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? t.t('Lcz_ChangeSheetsPlaceholder', { fallback: 'Change sheets, ...' }) : t.t('Lcz_AmenitiesRefillPlaceholder', { fallback: 'Amenities refill, ...' }), maxlength: 30, value: task.name, onChange: (e) => {
                const updated = [...this.hkTasks];
                updated[i] = { ...updated[i], name: e.target.value };
                this.hkTasks = updated;
                this.saveHkTasks();
            } }), index.h("wa-select", { class: "ops-task-select", size: "s", value: task.frequency, defaultValue: task.frequency, placeholder: t.t('Lcz_Frequency', { fallback: 'Frequency' }), onchange: (e) => {
                const updated = [...this.hkTasks];
                updated[i] = { ...updated[i], frequency: e.target.value };
                this.hkTasks = updated;
                this.saveHkTasks();
            } }, this.frequencies.map(f => (index.h("wa-option", { key: f.CODE_NAME, value: f.CODE_NAME }, utils$1.getSetupEntryLabel(f))))), index.h("wa-icon-button", { class: "ops-task-delete", name: "xmark", label: t.t('Lcz_RemoveTask', { fallback: 'Remove task' }), onClick: () => {
                const updated = [...this.hkTasks];
                updated[i] = { name: '', frequency: '' };
                this.hkTasks = updated;
                this.saveHkTasks();
            } })))))), index.h("ir-dialog", { key: '0b1430a356d993f9b27f34bdfdc2e453073ed8d3', ref: el => (this.dialog = el), label: t.t('Lcz_Confirmation', { fallback: 'Confirmation' }), lightDismiss: false }, index.h("span", { key: 'eac18c324ed28b4a4bdee67b16c22e2b92719112' }, t.t('Lcz_RescheduleCleaningTasksConfirmation', { fallback: 'This action will reschedule all cleaning tasks. Do you want to continue?' })), index.h("div", { key: '0d72afda87242f4c57205875c18e3a9b7724e277', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '0a0ced142ca682b9bd1aa10d0cf78b2660ee7dcb', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendarData.calendar_data.cleaning_frequency ?? index$1.housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: 'cf08000c4b40cd79820a5645e2a7d5962abe194e', size: "m", appearance: "filled", variant: "brand", loading: irInterceptor_store.isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, t.t('Lcz_Confirm', { fallback: 'Confirm' }))))));
    }
};
IrHkOperationsCard.style = irHkOperationsCardCss();

const irHkTeamCss = () => `.icons-container.sc-ir-hk-team{display:flex;align-items:center;justify-content:end}.text-center.sc-ir-hk-team{text-align:center !important}.hk-team-header.sc-ir-hk-team{display:flex;flex-direction:column;gap:0.25rem}.hk-team__card.sc-ir-hk-team{background-color:var(--wa-color-surface-default, white)}.hk-team__card.sc-ir-hk-team::part(body),.hk-team__card.sc-ir-hk-team [part~="body"]{padding:0.5rem}.hk-team-header__top.sc-ir-hk-team{display:flex;flex-direction:column;gap:0.5rem}.hk-team-header__title.sc-ir-hk-team{margin:0;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.hk-team-header__stats.sc-ir-hk-team{display:flex;align-items:center;flex-wrap:wrap;gap:0.75rem}.hk-team-header__stat.sc-ir-hk-team{margin:0;font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet)}.hk-team-header__stat--bold.sc-ir-hk-team{font-weight:600;color:var(--wa-color-text-normal)}.hk-team-header__unassigned-btn.sc-ir-hk-team::part(base),.hk-team-header__unassigned-btn.sc-ir-hk-team [part~="base"]{height:auto;padding:0.125rem 0.5rem}.hk-team-header__hint.sc-ir-hk-team{margin:0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}@media (min-width: 640px){.hk-team-header__top.sc-ir-hk-team{flex-direction:row;align-items:center;justify-content:space-between}}.ir-text-start.sc-ir-hk-team{text-align:start}`;

const tableCss = () => `.sc-ir-hk-team-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-hk-team{overflow-x:auto}.table--container.sc-ir-hk-team,.data-table.sc-ir-hk-team{height:100%}.ir-table-row.sc-ir-hk-team td.sc-ir-hk-team{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-hk-team td.sc-ir-hk-team{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-hk-team tbody.sc-ir-hk-team tr.sc-ir-hk-team:last-child>td.sc-ir-hk-team{border-bottom:0 !important}.cell--align-start.sc-ir-hk-team{text-align:start !important}.cell--align-center.sc-ir-hk-team{text-align:center !important}.cell--align-end.sc-ir-hk-team{text-align:end !important}.table.sc-ir-hk-team thead.sc-ir-hk-team th.sc-ir-hk-team{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-hk-team thead.sc-ir-hk-team th.sc-ir-hk-team{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-hk-team{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-hk-team,.ir-table-row.sc-ir-hk-team{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-hk-team{text-transform:capitalize;cursor:pointer}.table.sc-ir-hk-team thead.sc-ir-hk-team th.sortable.sc-ir-hk-team{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-hk-team thead.sc-ir-hk-team th.sortable.sc-ir-hk-team:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-hk-team thead.sc-ir-hk-team th.sortable.sc-ir-hk-team:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-hk-team:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-hk-team svg.sc-ir-hk-team{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-hk-team:hover td.sc-ir-hk-team{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-hk-team:hover td.sc-ir-hk-team{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-hk-team:active td.sc-ir-hk-team{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-hk-team td.sc-ir-hk-team{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-hk-team:hover td.sc-ir-hk-team{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-hk-team:active td.sc-ir-hk-team{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-hk-team .empty-row.sc-ir-hk-team{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-hk-team{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-hk-team{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const IrHkTeam = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    currentTrigger = null;
    deletionTimout;
    renderAssignedUnits(hk) {
        if (hk.assigned_units.length === 0) {
            return (index.h("span", null, "0 -", ' ', index.h("wa-button", { size: "s", variant: "brand", appearance: "outlined", class: "hk-team-header__unassigned-btn", onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: hk }) }, t.t('Lcz_Assign', { fallback: 'Assign' }))));
        }
        return (index.h("span", null, number.formatCount(hk.assigned_units.length), " -", ' ', index.h("wa-button", { class: "hk-team-header__unassigned-btn", size: "s", variant: "brand", appearance: "outlined", onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: hk }) }, t.t('Lcz_Edit', { fallback: 'Edit' }))));
    }
    renderCurrentTrigger() {
        switch (this.currentTrigger?.type) {
            case 'unassigned_units':
                return index.h("ir-hk-unassigned-units", { slot: "sidebar-body", user: this.currentTrigger.user });
            // case 'user':
            //   return <ir-hk-user slot="sidebar-body" user={this.currentTrigger.user} isEdit={this.currentTrigger.isEdit}></ir-hk-user>;
            default:
                return null;
        }
    }
    handleCloseSideBar(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.currentTrigger = null;
    }
    handleDeletion(user) {
        this.currentTrigger = { type: 'delete', user };
        this.deletionTimout = setTimeout(() => {
            const modal = this.el.querySelector('ir-hk-delete-dialog');
            if (!modal)
                return;
            modal.openModal();
        }, 100);
    }
    disconnectedCallback() {
        clearTimeout(this.deletionTimout);
    }
    render() {
        if (!index$1.housekeeping_store.hk_criteria) {
            return null;
        }
        const { assigned, total, un_assigned } = index$1.housekeeping_store.hk_criteria.units_assignments;
        return (index.h("wa-card", { appearance: "plain", class: "hk-team__card" }, index.h("section", { slot: "header", class: "hk-team-header" }, index.h("div", { class: "hk-team-header__top" }, index.h("p", { class: "hk-team-header__title" }, t.t('Lcz_HousekeepingTeam', { fallback: 'Housekeeping team' })), index.h("div", { class: "hk-team-header__stats" }, index.h("p", { class: "hk-team-header__stat hk-team-header__stat--bold" }, number.formatCount(total), " ", t.t('Lcz_TotalUnits', { fallback: 'Total units' })), index.h("p", { class: "hk-team-header__stat" }, assigned, " ", index.h("span", null, t.t('Lcz_Assigned', { fallback: 'Assigned' }))), un_assigned > 0 && (index.h("wa-button", { onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: null }), size: "s", class: "hk-team-header__unassigned-btn", variant: "brand", appearance: "outlined" }, un_assigned, " ", t.t('Lcz_Unassigned', { fallback: 'Unassigned' }))))), index.h("p", { class: "hk-team-header__hint" }, t.t('Lcz_AsAnOption', { fallback: 'As an option, create housekeepers (as individuals or teams) and assign units to them to notify them separately.' }))), index.h("section", { class: "table-responsive" }, index.h("table", { class: "table data-table" }, index.h("thead", null, index.h("tr", null, index.h("th", { class: "ir-text-start" }, t.t('Lcz_Name', { fallback: 'Name' })), index.h("th", null, t.t('Lcz_Mobile', { fallback: 'Mobile' })), index.h("th", null, t.t('Lcz_Username', { fallback: 'Username' })), index.h("th", null, t.t('Lcz_UnitsAssigned', { fallback: 'Units assigned' })), index.h("th", { class: 'ir-text-start' }, index.h("div", { class: "d-flex justify-content-center" }, index.h("ir-custom-button", { onClickHandler: () => {
                this.currentTrigger = {
                    type: 'user',
                    isEdit: false,
                    user: null,
                };
            }, variant: "neutral", appearance: "plain" }, index.h("wa-icon", { name: "plus", style: { fontSize: '1.2rem' } })))))), index.h("tbody", null, index$1.housekeeping_store.hk_criteria.housekeepers.map(hk => (index.h("tr", { key: hk.id, class: "ir-table-row" }, index.h("td", { class: "ir-text-start" }, index.h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, hk.name?.length > 25 ? (index.h(index.Fragment, null, index.h("wa-tooltip", { for: hk.id + '_name' }, hk.name), index.h("span", { id: hk.id + '_name' }, hk.name.slice(0, 25), "..."))) : (hk.name), hk.note && (
        // <ir-popover content={hk.note}>
        //   <ir-button variant="icon" icon_name="note" data-toggle="tooltip" data-placement="bottom" title={t('Lcz_ClickToViewNote', { fallback: 'Click to view note' })}></ir-button>
        // </ir-popover>
        index.h(index.Fragment, null, index.h("wa-tooltip", { for: hk.id + '_note' }, hk.note), index.h("wa-icon", { id: hk.id + '_note', name: "note-sticky", variant: "regular" }))))), index.h("td", { class: "" }, hk.phone_prefix, " ", hk.mobile), index.h("td", null, hk.username), index.h("td", null, this.renderAssignedUnits(hk)), index.h("td", { class: "" }, index.h("div", { class: "icons-container" }, index.h("ir-custom-button", { onClickHandler: () => {
                const { assigned_units, is_soft_deleted, is_active, ...user } = hk;
                this.currentTrigger = {
                    type: 'user',
                    isEdit: true,
                    user,
                };
            }, variant: "neutral", appearance: "plain" }, index.h("wa-icon", { name: "edit", style: { fontSize: '1.2rem' } })), index.h("ir-custom-button", { onClickHandler: () => this.handleDeletion(hk), variant: "danger", appearance: "plain" }, index.h("wa-icon", { name: "trash-can", style: { fontSize: '1.2rem' } })))))))))), index.h("ir-hk-user-drawer", { open: this.currentTrigger?.type === 'user', user: this.currentTrigger?.user, isEdit: this.currentTrigger?.isEdit }), index.h("ir-hk-unassigned-units-drawer", { open: this.currentTrigger?.type === 'unassigned_units', user: this.currentTrigger?.user }), this.currentTrigger?.type === 'delete' && index.h("ir-hk-delete-dialog", { user: this.currentTrigger.user })));
    }
};
IrHkTeam.style = irHkTeamCss() + tableCss();

const irHkUnassignedUnitsCss = () => `.sc-ir-hk-unassigned-units-h{display:block;--ir-root-active-color:#1e9ff2;--ir-root-inactive-color:#d2d2d2}table.sc-ir-hk-unassigned-units{width:100%}td.sc-ir-hk-unassigned-units{padding-top:3px;padding-bottom:3px}td.sc-ir-hk-unassigned-units:last-child{text-align:end}.title.sc-ir-hk-unassigned-units{min-width:230px !important}.ir-ps-1.sc-ir-hk-unassigned-units{padding-inline-start:0.25rem}`;

const sheetCss = () => `.sc-ir-hk-unassigned-units-h{height:100%}.sheet-container.sc-ir-hk-unassigned-units{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-hk-unassigned-units{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-hk-unassigned-units{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-hk-unassigned-units{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-hk-unassigned-units{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-hk-unassigned-units{flex-direction:row;align-items:center}}`;

const IrHkUnassignedUnits = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar");
        this.resetData = index.createEvent(this, "resetData");
    }
    user = null;
    renderAgain = false;
    closeSideBar;
    resetData;
    assignedUnits = new Map();
    housekeepingService = new index$1.HouseKeepingService();
    assignUnit(unit_id, hk_id, checked) {
        if (this.user) {
            const userUnit = this.user.assigned_units.find(unit => unit.id === unit_id);
            if ((checked && userUnit) || (!checked && !userUnit)) {
                this.assignedUnits.delete(unit_id);
            }
            else if (!checked && userUnit) {
                this.assignedUnits.set(unit_id, { hkm_id: hk_id, is_to_assign: false, unit_id });
            }
            else if (checked) {
                const assignment = {
                    hkm_id: hk_id,
                    is_to_assign: true,
                    unit_id,
                };
                this.assignedUnits.set(unit_id, assignment);
            }
        }
        else {
            if (this.assignedUnits.has(unit_id) && !hk_id) {
                this.assignedUnits.delete(unit_id);
                return;
            }
            else {
                this.assignedUnits.set(unit_id, {
                    hkm_id: hk_id,
                    is_to_assign: true,
                    unit_id,
                });
            }
        }
        this.renderAgain = !this.renderAgain;
    }
    async assignUnits() {
        try {
            await this.housekeepingService.manageExposedAssignedUnitToHKM(index$1.housekeeping_store.default_properties.property_id, [...this.assignedUnits.values()]);
            this.resetData.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.closeSideBar.emit(null);
        }
    }
    renderRooms() {
        if (!this.user) {
            return index$1.housekeeping_store.hk_criteria.units_assignments.unassigned_units?.map(unit => (index.h("tr", { key: unit.id }, index.h("td", { class: "" }, unit.name), index.h("td", { class: "sr-only" }), index.h("td", { class: "ir-ps-1" }, index.h("ir-select", { onSelectChange: e => {
                    let hk_id = e.detail;
                    if (hk_id === '') {
                        hk_id = null;
                    }
                    else {
                        hk_id = +hk_id;
                    }
                    this.assignUnit(unit.id, hk_id, false);
                }, data: index$1.housekeeping_store.hk_criteria.housekeepers.map(hk => ({ text: hk.name, value: hk.id.toString() })) })))));
        }
        return calendarData.calendar_data.roomsInfo.map(roomType => {
            console.log(roomType);
            if (!roomType.is_active) {
                return null;
            }
            return roomType.physicalrooms?.map(physical_room => {
                if (!physical_room['is_active']) {
                    return null;
                }
                let taken = !index$1.housekeeping_store.hk_criteria.units_assignments.unassigned_units?.find(unit => unit.id.toString() === physical_room.id.toString());
                let housekeeper = [];
                const assignedRoom = this.assignedUnits.get(physical_room.id);
                if (assignedRoom && assignedRoom.is_to_assign) {
                    housekeeper = [this.user];
                    taken = true;
                }
                else {
                    if (taken) {
                        housekeeper = index$1.housekeeping_store.hk_criteria.housekeepers.filter(hk => hk.assigned_units.find(unit => unit.id === physical_room.id));
                    }
                }
                return (index.h("tr", { key: physical_room.id }, index.h("td", null, physical_room.name), index.h("td", null, taken ? housekeeper[0]?.name : ''), index.h("td", null, index.h("wa-switch", { defaultChecked: taken && housekeeper[0]?.id === this.user.id, checked: taken && housekeeper[0]?.id === this.user.id, onchange: e => {
                        const checked = e.target.checked;
                        this.assignUnit(physical_room.id, this.user.id, checked);
                    } }))));
            });
        });
    }
    render() {
        return (index.h("div", { key: '23c389c1c10f061026ae5ba6782242484d7222b5', class: "sheet-container" }, index.h("ir-title", { key: 'b38b5456db0dbf428ab8231a8b78aa2314b4b643', class: "title sheet-header px-1", displayContext: "sidebar", label: !this.user ? t.t('Lcz_AssingnUnitsTypo', { fallback: 'Assingn Units' }) : `${t.t('Lcz_AssignmentForUser', { fallback: 'Assignment for' })} ${this.user.name}` }), index.h("section", { key: 'b6d1a737bbcb58950ed3f691b6aabbaebf863685', class: "px-1 sheet-body" }, index.h("table", { key: '7dc237222bcd5c6b4b301b09400561dd9af44c16' }, index.h("thead", { key: 'd8d4065ef9850cb3c4c6315d4ce4e2dcc9ecb4b5' }, index.h("th", { key: 'e353df090327b636b8736a555903ae53e1285b42', class: "sr-only" }, t.t('Lcz_RoomName', { fallback: 'room name' })), index.h("th", { key: 'e0d77a1d3b656471ce06488ce1bfe494f8c1a6da', class: "sr-only" }, t.t('Lcz_HousekeeperName', { fallback: 'housekeeper name' })), index.h("th", { key: 'ae025d78256de2dabb3f865db7c31afd45dd327a', class: "sr-only" }, t.t('Lcz_Actions', { fallback: 'Actions' }))), index.h("tbody", { key: '70c53da416b92d08f09a8e5a85e3876d60fc59bb' }, this.renderRooms()))), index.h("div", { key: 'fd569e8dfc47e9e8db3e377b66d5fb1d679fbc02', class: "sheet-footer" }, index.h("ir-button", { key: 'aca2dc5fb37c80d33a4439b87d4a60bad707dfe8', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", btn_color: "secondary", text: t.t('Lcz_Cancel', { fallback: 'Cancel' }) }), index.h("ir-button", { key: 'e89c757711f302fc666a9a5f8be179cd791d4524', isLoading: irInterceptor_store.isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), onClickHandler: this.assignUnits.bind(this), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", text: t.t('Lcz_Confirm', { fallback: 'Confirm' }) }))));
    }
};
IrHkUnassignedUnits.style = irHkUnassignedUnitsCss() + sheetCss();

const irHkUnassignedUnitsDrawerCss = () => `.sc-ir-hk-unassigned-units-drawer-h{display:block}`;

const IrHkUnassignedUnitsDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar");
    }
    open = false;
    user = null;
    closeSideBar;
    formId = 'hk-unassigned-units-drawer-form';
    render() {
        return (index.h("ir-drawer", { key: '8535a7c9810c4b01f7d667017ac2e5a0c95f77b0', label: !this.user
                ? t.t('Lcz_AssingnUnitsTypo', { fallback: 'Assingn Units' })
                : `${t.t('Lcz_AssignmentForUser', { fallback: 'Assignment for' })} ${this.user.name}`, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeSideBar.emit(null);
            }, style: { '--ir-drawer-width': 'max-content' }, open: this.open }, this.open && index.h("ir-hk-unassigned-units-drawer-form", { key: '10efe30b4685ee6a2e97ed33d342cd22e77719b3', formId: this.formId, user: this.user }), index.h("div", { key: 'c266ad67421be5a8b62ab7842bc6246a9768d89a', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: 'fc59c0f71f0444bdfa1a5ff523ff72b9edccf7bc', "data-drawer": "close", variant: "neutral", size: "m", appearance: "filled" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: 'ec2996d982f2effc9c494bf5d75d5b6094760c12', loading: irInterceptor_store.isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), variant: "brand", type: "submit", form: this.formId, appearance: "accent", size: "m" }, t.t('Lcz_Save', { fallback: 'Save' })))));
    }
};
IrHkUnassignedUnitsDrawer.style = irHkUnassignedUnitsDrawerCss();

const irHkUserDrawerCss = () => `.sc-ir-hk-user-drawer-h{display:block}`;

const IrHkUserDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar");
    }
    isLoading = false;
    open = false;
    isEdit = false;
    user = null;
    closeSideBar;
    formId = 'hk-user-drawer-form';
    render() {
        return (index.h("ir-drawer", { key: 'f7e454dd28196d1107523141af4a5e682313139a', open: this.open, onDrawerHide: () => {
                this.closeSideBar.emit(null);
            }, label: this.isEdit ? t.t('Lcz_EditHousekeeperProfile', { fallback: 'Edit Housekeeper Profile' }) : t.t('Lcz_CreateHousekeeperProfile', { fallback: 'Create housekeeper profile' }) }, this.open && (index.h("ir-hk-user-drawer-form", { key: 'ba8040eaba408d38b09026d297f47c59ba7c9bf1', onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail;
            }, isEdit: this.isEdit, user: this.user, formId: this.formId })), index.h("div", { key: '97172420015ae37ebe3dfe4c5d85e5dd75151603', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: 'd543841f39b0a3431d0f3fe4692bfb96ddfa9941', "data-drawer": "close", variant: "neutral", size: "m", appearance: "filled" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '871683c5d21b8253955dcc0bcd84b2a22f0a2fbb', loading: this.isLoading, variant: "brand", type: "submit", form: this.formId, appearance: "accent", size: "m" }, t.t('Lcz_Save', { fallback: 'Save' })))));
    }
};
IrHkUserDrawer.style = irHkUserDrawerCss();

exports.ir_hk_delete_dialog = IrHkDeleteDialog;
exports.ir_hk_operations_card = IrHkOperationsCard;
exports.ir_hk_team = IrHkTeam;
exports.ir_hk_unassigned_units = IrHkUnassignedUnits;
exports.ir_hk_unassigned_units_drawer = IrHkUnassignedUnitsDrawer;
exports.ir_hk_user_drawer = IrHkUserDrawer;
