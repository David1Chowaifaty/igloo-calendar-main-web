import { r as registerInstance, c as createEvent, h, H as Host, a as getElement, F as Fragment } from './index-CeHdrJeH.js';
import { H as HouseKeepingService, h as housekeeping_store } from './index-DBtvgD27.js';
import { t } from './t-BVYK64UG.js';
import { R as RoomService } from './room.service-ClH5dZs7.js';
import { P as PropertyService } from './index-D1CGyxvl.js';
import { c as calendar_data } from './calendar-data-Cdv5kmxH.js';
import { i as isRequestPending } from './ir-interceptor.store-B1TrAet5.js';
import { h as showToast } from './utils-VLa8HWRW.js';
import { b as formatCount } from './number-D2n6n8dr.js';
import { d as getSetupEntryLabel } from './utils-FfxPnEHJ.js';
import './types-Clk7NCXk.js';
import './locale-scope-CapRuPkM.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './commonSchemas-BxK90Oim.js';
import './locale.controller-DQrDdP3Q.js';
import './language-observer-CHgzsZkY.js';
import './types-C7G2emJd.js';
import './moment-Mki5YqAR.js';
import './booking.dto-D-ACWjZx.js';
import './type-o1ai24d7.js';
import './ir-date-NNCOayR_.js';
import './calendar-dates-D3hVfsrC.js';
import './IBooking-C6czW-Mz.js';

const irHkDeleteDialogCss = () => `:host{display:contents}.delete-modal__description{margin:0;font-size:var(--wa-font-size-m);color:var(--wa-color-text-quiet);line-height:var(--wa-line-height-normal)}.delete-modal__footer{display:flex;justify-content:flex-end;gap:0.5rem}`;

const IrHkDeleteDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.modalClosed = createEvent(this, "modalClosed");
        this.resetData = createEvent(this, "resetData");
    }
    user;
    isOpen = false;
    selectedId = '';
    isConfirming = false;
    modalClosed;
    resetData;
    housekeepingService = new HouseKeepingService();
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
                await this.housekeepingService.manageExposedAssignedUnitToHKM(housekeeping_store.default_properties.property_id, newAssignedUnits);
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
        const label = hasAssignedUnits ? t('Lcz_AssignUnitsTo', { fallback: 'Assign units to' }) : t('Lcz_ConfirmDeletion', { fallback: 'Confirm deletion!' });
        return (h("ir-dialog", { lightDismiss: false, label: label, open: this.isOpen, onIrDialogHide: () => this.closeModal() }, !hasAssignedUnits && (h("p", { class: "delete-modal__description" }, t('Lcz_ConfirmPermanentDeleteUser', { fallback: 'Are you sure you want to permanently delete' }), " ", h("strong", null, this.user.name), "? This action cannot be undone.")), hasAssignedUnits && (h("wa-select", { size: "s", defaultValue: this.selectedId, value: this.selectedId, onchange: e => (this.selectedId = e.target.value) }, h("wa-option", { value: "" }, t('Lcz_nobody', { fallback: 'nobody' })), housekeeping_store.hk_criteria.housekeepers
            .filter(hk => hk.id !== this.user.id)
            .map(m => ({ value: m.id.toString(), text: m.name }))
            .sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase()))
            .map(m => (h("wa-option", { key: m.value, value: m.value }, m.text))))), h("div", { slot: "footer", class: "delete-modal__footer" }, h("ir-custom-button", { variant: "neutral", appearance: "filled", size: "m", onClickHandler: () => this.closeModal() }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { variant: "danger", appearance: "accent", size: "m", loading: this.isConfirming, onClickHandler: () => this.handleConfirm() }, t('Lcz_Confirm', { fallback: 'Confirm' })))));
    }
};
IrHkDeleteDialog.style = irHkDeleteDialogCss();

const irHkOperationsCardCss = () => `.sc-ir-hk-operations-card-h{display:block}.ops-header__title.sc-ir-hk-operations-card{margin:0;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.hk-operation__card.sc-ir-hk-operations-card{background-color:var(--wa-color-surface-default, white)}.ops-header__subtitle.sc-ir-hk-operations-card{display:block;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet);margin-top:0.125rem}.ops-settings.sc-ir-hk-operations-card{display:flex;flex-direction:column;gap:0.75rem;margin-bottom:1.25rem}.ops-setting-item.sc-ir-hk-operations-card{display:grid;grid-template-columns:2rem 1fr;align-items:center;gap:0.5rem 0.75rem}.ops-setting-item__icon.sc-ir-hk-operations-card{grid-column:1;grid-row:1;display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;border-radius:0.375rem;background:var(--wa-color-neutral-fill-quiet);color:var(--wa-color-neutral-on-quiet);font-size:0.875rem}.ops-setting-item__info.sc-ir-hk-operations-card{grid-column:2;grid-row:1;display:flex;flex-direction:column;gap:0.125rem;min-width:0}.ops-setting-item__title.sc-ir-hk-operations-card{font-size:0.875rem;font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.ops-setting-item__subtitle.sc-ir-hk-operations-card{font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}.ops-setting-item__controls.sc-ir-hk-operations-card{grid-column:2;grid-row:2}.ops-setting-item__controls.sc-ir-hk-operations-card wa-select.sc-ir-hk-operations-card{width:100%;max-width:330px}@media (min-width: 521px){.ops-setting-item.sc-ir-hk-operations-card{display:flex;grid-template-columns:none;grid-template-rows:none;align-items:center;gap:0.5rem 0.75rem}.ops-setting-item__icon.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;flex-shrink:0}.ops-setting-item__info.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;flex-shrink:0}.ops-setting-item__controls.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;flex-shrink:0}.ops-setting-item__controls.sc-ir-hk-operations-card wa-select.sc-ir-hk-operations-card{width:200px;max-width:none}}.ops-tasks__header.sc-ir-hk-operations-card{margin-bottom:0.75rem}.ops-tasks__title.sc-ir-hk-operations-card{margin:0;margin:0;font-size:0.875rem;font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.ops-tasks__subtitle.sc-ir-hk-operations-card{margin:0.125rem 0 0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}.ops-tasks__list.sc-ir-hk-operations-card{display:flex;flex-direction:column;gap:0.5rem}.ops-task-row.sc-ir-hk-operations-card{display:grid;grid-template-columns:1.5rem 1fr 1.75rem;align-items:center;gap:0.5rem 0.75rem}.ops-task-badge.sc-ir-hk-operations-card{grid-column:1;grid-row:1;display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem;border-radius:50%;background:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-text-loud);font-size:0.6875rem;font-weight:700}.ops-task-badge--locked.sc-ir-hk-operations-card{background:var(--wa-color-neutral-fill-quiet);color:var(--wa-color-neutral-text-quiet);font-size:0.75rem}.ops-task-locked-label.sc-ir-hk-operations-card{grid-column:2;grid-row:1;font-size:0.875rem;font-weight:500;color:var(--wa-color-neutral-text-loud);min-width:0}.ops-task-input.sc-ir-hk-operations-card{grid-column:2;grid-row:1;width:100%}.ops-task-select.sc-ir-hk-operations-card{grid-column:2;grid-row:2;width:100%}.ops-task-delete.sc-ir-hk-operations-card{grid-column:3;grid-row:1;color:var(--wa-color-neutral-text-quiet);font-size:0.75rem}.ops-task-row--locked.sc-ir-hk-operations-card{grid-template-columns:1.5rem 1fr 1.75rem;opacity:0.85}.ir-dialog__footer.sc-ir-hk-operations-card{display:flex;justify-content:flex-end;gap:0.5rem}@media (min-width: 521px){.ops-task-select.sc-ir-hk-operations-card{grid-column:2;grid-row:2;width:100%;max-width:200px}.ops-task-row.sc-ir-hk-operations-card{display:flex;grid-template-columns:none;grid-template-rows:none;align-items:center;gap:0.5rem}.ops-task-badge.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;flex-shrink:0}.ops-task-input.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;width:200px;flex-shrink:0}.ops-task-select.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;width:200px;max-width:none;flex-shrink:0}.ops-task-delete.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;margin-inline-start:auto}.ops-task-row--locked.sc-ir-hk-operations-card{grid-template-columns:none}.ops-task-locked-label.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;min-width:200px;flex-shrink:0}.ops-task-row--locked.sc-ir-hk-operations-card .ops-task-select.sc-ir-hk-operations-card{grid-column:3;grid-row:1}}`;

const IrHkOperationsCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    frequencies = [];
    hkTasks = [
        { name: '', frequency: '' },
        { name: '', frequency: '' },
    ];
    selectedCleaningFrequency = null;
    roomService = new RoomService();
    propertyService = new PropertyService();
    houseKeepingService = new HouseKeepingService();
    dialog;
    componentWillLoad() {
        const criteria = housekeeping_store.hk_criteria;
        this.hkTasks = [
            { name: criteria?.t1_config?.label ?? '', frequency: criteria?.t1_config?.freq ?? '' },
            { name: criteria?.t2_config?.label ?? '', frequency: criteria?.t2_config?.freq ?? '' },
        ];
        this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? criteria?.cleaning_frequencies?.[0])?.code ?? null;
    }
    async saveAutomaticCheckInCheckout(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const target = e.target;
        const flag = target.value === 'auto';
        try {
            await this.roomService.SetAutomaticCheckInOut({
                property_id: housekeeping_store.default_properties.property_id,
                flag,
            });
            showToast({ position: 'top-right', title: t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }), description: '', type: 'success' });
        }
        catch (error) {
            console.log(error);
        }
    }
    async saveCleaningFrequency() {
        try {
            await this.propertyService.setExposedCleaningFrequency({
                property_id: housekeeping_store.default_properties.property_id,
                code: this.selectedCleaningFrequency,
            });
            calendar_data.cleaning_frequency = { code: this.selectedCleaningFrequency, description: '' };
            showToast({ position: 'top-right', title: t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }), description: '', type: 'success' });
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
                property_id: housekeeping_store.default_properties.property_id,
                t1_label: t1.name,
                t1_freq: t1.frequency,
                t2_label: t2.name,
                t2_freq: t2.frequency,
            });
            showToast({ position: 'top-right', title: t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }), description: '', type: 'success' });
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        return (h(Host, { key: '7a69cc44e956fbba94e1101d311e2782d8e78c0b' }, h("wa-card", { key: '080b410cdb11b3bbb51ad0c5f6685e9bfa7f0ea5', appearance: "plain", class: "hk-operation__card" }, h("div", { key: 'c9e57020572f298dfaaa6b7b29c3bff2b50b5dde', slot: "header" }, h("span", { key: 'bc7d0598a06adb6c0b65be5fc8dc18faf6745024', class: "ops-header__title" }, t('Lcz_OperationsSettings', { fallback: 'Operations Settings' }))), h("div", { key: '06375ef87834e5e796c8ae1ea0c07194b087a191', class: "ops-settings" }, h("div", { key: 'cc249527d57e00832417a1545023e6e9174e0e8f', class: "ops-setting-item" }, h("div", { key: '84175f393bc30069fbe8c51c9c62c404b700eac6', class: "ops-setting-item__info" }, h("span", { key: 'e5bce1a9be62e5b4acee9d4f5289da5758790f0f', class: "ops-setting-item__title" }, t('Lcz_AutomaticCheckInCheckout', { fallback: 'Automatic Check-in & Check-out' })), h("span", { key: 'f1fb73097916c05fcb89078695eecd34b96037d0', class: "ops-setting-item__subtitle" }, t('Lcz_ProcessGuestsAutomaticallyBasedOnPropertyRules', { fallback: 'Process guests automatically based on property rules' }))), h("div", { key: 'aaed5672643587eccea027bee0f6cb8a06059815', class: "ops-setting-item__controls" }, h("wa-select", { key: '9a113474c676149ffe360bba61765db9eb7121de', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: 'f32a3207b98b4e3da9dc590d5e8eba37630f66b8', value: "auto" }, t('Lcz_YesAsPerPropertyPolicy', { fallback: 'Yes, as per the property policy.' })), h("wa-option", { key: '3d36817e0b93f4f3b63ae9d66f7f5f01ba2dee31', value: "manual" }, t('Lcz_NoIWillDoItManually', { fallback: 'No, I will do it manually.' })))))), h("div", { key: 'ea627d88aba3c48b4d91f5cd9654ee00bef9400c', class: "ops-tasks__header" }, h("p", { key: 'c5a946ce988bcf3df8f88d05b674aa4437e33ff8', class: "ops-tasks__title" }, t('Lcz_RecurringTasks', { fallback: 'Recurring Tasks' })), h("p", { key: 'a0b27f479625dba4a6f571c5e00e7be81cf21903', class: "ops-tasks__subtitle" }, t('Lcz_DefineYourHousekeepingTasksAndFrequency', { fallback: 'Define your housekeeping tasks and frequency' }))), h("div", { key: '8216496d486e37b55839f33ec0bd1a72116c5e76', class: "ops-tasks__list" }, h("div", { key: '7da7bf36a81df4cb4cd84513e846819db7d86530', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '1fb5805d5cfb809627f13133f4715fac73825bb8', variant: "danger", appearance: "filled" }, t('Lcz_CleaningAbbreviation', { fallback: 'CL' })), h("span", { key: '56b450c96ad032f92a6c7a1f7b09c994e3042912', class: "ops-task-locked-label" }, t('Lcz_Cleaning', { fallback: 'Cleaning' })), h("wa-select", { key: '873e9cd29f2891da79f15b2f40f27e5ff1a7ad34', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '1c653ad40c67f7c1716b2f424a189050aeb15f2f' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, t('Lcz_TaskAbbreviation', { fallback: 'T%1', params: [formatCount(i + 1)] })), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? t('Lcz_ChangeSheetsPlaceholder', { fallback: 'Change sheets, ...' }) : t('Lcz_AmenitiesRefillPlaceholder', { fallback: 'Amenities refill, ...' }), maxlength: 30, value: task.name, onChange: (e) => {
                const updated = [...this.hkTasks];
                updated[i] = { ...updated[i], name: e.target.value };
                this.hkTasks = updated;
                this.saveHkTasks();
            } }), h("wa-select", { class: "ops-task-select", size: "s", value: task.frequency, defaultValue: task.frequency, placeholder: t('Lcz_Frequency', { fallback: 'Frequency' }), onchange: (e) => {
                const updated = [...this.hkTasks];
                updated[i] = { ...updated[i], frequency: e.target.value };
                this.hkTasks = updated;
                this.saveHkTasks();
            } }, this.frequencies.map(f => (h("wa-option", { key: f.CODE_NAME, value: f.CODE_NAME }, getSetupEntryLabel(f))))), h("wa-icon-button", { class: "ops-task-delete", name: "xmark", label: t('Lcz_RemoveTask', { fallback: 'Remove task' }), onClick: () => {
                const updated = [...this.hkTasks];
                updated[i] = { name: '', frequency: '' };
                this.hkTasks = updated;
                this.saveHkTasks();
            } })))))), h("ir-dialog", { key: '5cc8a1145be6a25822bc7ca58333ede09b269c9b', ref: el => (this.dialog = el), label: t('Lcz_Confirmation', { fallback: 'Confirmation' }), lightDismiss: false }, h("span", { key: '13297740d25397affade797a690ba534d345f728' }, t('Lcz_RescheduleCleaningTasksConfirmation', { fallback: 'This action will reschedule all cleaning tasks. Do you want to continue?' })), h("div", { key: 'b1cd1f135fa6cc19df04104cfc0f6e5c5b2a7d72', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'ee1820caf56abaab63d07c43effe3dd652394522', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '624bc978fd69ca5fd011de86fa41d8687e5ec940', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
    }
};
IrHkOperationsCard.style = irHkOperationsCardCss();

const irHkTeamCss = () => `.icons-container.sc-ir-hk-team{display:flex;align-items:center;justify-content:end}.text-center.sc-ir-hk-team{text-align:center !important}.hk-team-header.sc-ir-hk-team{display:flex;flex-direction:column;gap:0.25rem}.hk-team__card.sc-ir-hk-team{background-color:var(--wa-color-surface-default, white)}.hk-team__card.sc-ir-hk-team::part(body),.hk-team__card.sc-ir-hk-team [part~="body"]{padding:0.5rem}.hk-team-header__top.sc-ir-hk-team{display:flex;flex-direction:column;gap:0.5rem}.hk-team-header__title.sc-ir-hk-team{margin:0;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.hk-team-header__stats.sc-ir-hk-team{display:flex;align-items:center;flex-wrap:wrap;gap:0.75rem}.hk-team-header__stat.sc-ir-hk-team{margin:0;font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet)}.hk-team-header__stat--bold.sc-ir-hk-team{font-weight:600;color:var(--wa-color-text-normal)}.hk-team-header__unassigned-btn.sc-ir-hk-team::part(base),.hk-team-header__unassigned-btn.sc-ir-hk-team [part~="base"]{height:auto;padding:0.125rem 0.5rem}.hk-team-header__hint.sc-ir-hk-team{margin:0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}@media (min-width: 640px){.hk-team-header__top.sc-ir-hk-team{flex-direction:row;align-items:center;justify-content:space-between}}.ir-text-start.sc-ir-hk-team{text-align:start}`;

const tableCss = () => `.sc-ir-hk-team-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-hk-team{overflow-x:auto}.table--container.sc-ir-hk-team,.data-table.sc-ir-hk-team{height:100%}.ir-table-row.sc-ir-hk-team td.sc-ir-hk-team{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-hk-team td.sc-ir-hk-team{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-hk-team tbody.sc-ir-hk-team tr.sc-ir-hk-team:last-child>td.sc-ir-hk-team{border-bottom:0 !important}.cell--align-start.sc-ir-hk-team{text-align:start !important}.cell--align-center.sc-ir-hk-team{text-align:center !important}.cell--align-end.sc-ir-hk-team{text-align:end !important}.table.sc-ir-hk-team thead.sc-ir-hk-team th.sc-ir-hk-team{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-hk-team thead.sc-ir-hk-team th.sc-ir-hk-team{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-hk-team{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-hk-team,.ir-table-row.sc-ir-hk-team{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-hk-team{text-transform:capitalize;cursor:pointer}.table.sc-ir-hk-team thead.sc-ir-hk-team th.sortable.sc-ir-hk-team{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-hk-team thead.sc-ir-hk-team th.sortable.sc-ir-hk-team:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-hk-team thead.sc-ir-hk-team th.sortable.sc-ir-hk-team:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-hk-team:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-hk-team svg.sc-ir-hk-team{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-hk-team:hover td.sc-ir-hk-team{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-hk-team:hover td.sc-ir-hk-team{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-hk-team:active td.sc-ir-hk-team{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-hk-team td.sc-ir-hk-team{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-hk-team:hover td.sc-ir-hk-team{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-hk-team:active td.sc-ir-hk-team{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-hk-team .empty-row.sc-ir-hk-team{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-hk-team{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-hk-team{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const IrHkTeam = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    currentTrigger = null;
    deletionTimout;
    renderAssignedUnits(hk) {
        if (hk.assigned_units.length === 0) {
            return (h("span", null, "0 -", ' ', h("wa-button", { size: "s", variant: "brand", appearance: "outlined", class: "hk-team-header__unassigned-btn", onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: hk }) }, t('Lcz_Assign', { fallback: 'Assign' }))));
        }
        return (h("span", null, formatCount(hk.assigned_units.length), " -", ' ', h("wa-button", { class: "hk-team-header__unassigned-btn", size: "s", variant: "brand", appearance: "outlined", onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: hk }) }, t('Lcz_Edit', { fallback: 'Edit' }))));
    }
    renderCurrentTrigger() {
        switch (this.currentTrigger?.type) {
            case 'unassigned_units':
                return h("ir-hk-unassigned-units", { slot: "sidebar-body", user: this.currentTrigger.user });
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
        if (!housekeeping_store.hk_criteria) {
            return null;
        }
        const { assigned, total, un_assigned } = housekeeping_store.hk_criteria.units_assignments;
        return (h("wa-card", { appearance: "plain", class: "hk-team__card" }, h("section", { slot: "header", class: "hk-team-header" }, h("div", { class: "hk-team-header__top" }, h("p", { class: "hk-team-header__title" }, t('Lcz_HousekeepingTeam', { fallback: 'Housekeeping team' })), h("div", { class: "hk-team-header__stats" }, h("p", { class: "hk-team-header__stat hk-team-header__stat--bold" }, formatCount(total), " ", t('Lcz_TotalUnits', { fallback: 'Total units' })), h("p", { class: "hk-team-header__stat" }, assigned, " ", h("span", null, t('Lcz_Assigned', { fallback: 'Assigned' }))), un_assigned > 0 && (h("wa-button", { onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: null }), size: "s", class: "hk-team-header__unassigned-btn", variant: "brand", appearance: "outlined" }, un_assigned, " ", t('Lcz_Unassigned', { fallback: 'Unassigned' }))))), h("p", { class: "hk-team-header__hint" }, t('Lcz_AsAnOption', { fallback: 'As an option, create housekeepers (as individuals or teams) and assign units to them to notify them separately.' }))), h("section", { class: "table-responsive" }, h("table", { class: "table data-table" }, h("thead", null, h("tr", null, h("th", { class: "ir-text-start" }, t('Lcz_Name', { fallback: 'Name' })), h("th", null, t('Lcz_Mobile', { fallback: 'Mobile' })), h("th", null, t('Lcz_Username', { fallback: 'Username' })), h("th", null, t('Lcz_UnitsAssigned', { fallback: 'Units assigned' })), h("th", { class: 'ir-text-start' }, h("div", { class: "d-flex justify-content-center" }, h("ir-custom-button", { onClickHandler: () => {
                this.currentTrigger = {
                    type: 'user',
                    isEdit: false,
                    user: null,
                };
            }, variant: "neutral", appearance: "plain" }, h("wa-icon", { name: "plus", style: { fontSize: '1.2rem' } })))))), h("tbody", null, housekeeping_store.hk_criteria.housekeepers.map(hk => (h("tr", { key: hk.id, class: "ir-table-row" }, h("td", { class: "ir-text-start" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, hk.name?.length > 25 ? (h(Fragment, null, h("wa-tooltip", { for: hk.id + '_name' }, hk.name), h("span", { id: hk.id + '_name' }, hk.name.slice(0, 25), "..."))) : (hk.name), hk.note && (
        // <ir-popover content={hk.note}>
        //   <ir-button variant="icon" icon_name="note" data-toggle="tooltip" data-placement="bottom" title={t('Lcz_ClickToViewNote', { fallback: 'Click to view note' })}></ir-button>
        // </ir-popover>
        h(Fragment, null, h("wa-tooltip", { for: hk.id + '_note' }, hk.note), h("wa-icon", { id: hk.id + '_note', name: "note-sticky", variant: "regular" }))))), h("td", { class: "" }, hk.phone_prefix, " ", hk.mobile), h("td", null, hk.username), h("td", null, this.renderAssignedUnits(hk)), h("td", { class: "" }, h("div", { class: "icons-container" }, h("ir-custom-button", { onClickHandler: () => {
                const { assigned_units, is_soft_deleted, is_active, ...user } = hk;
                this.currentTrigger = {
                    type: 'user',
                    isEdit: true,
                    user,
                };
            }, variant: "neutral", appearance: "plain" }, h("wa-icon", { name: "edit", style: { fontSize: '1.2rem' } })), h("ir-custom-button", { onClickHandler: () => this.handleDeletion(hk), variant: "danger", appearance: "plain" }, h("wa-icon", { name: "trash-can", style: { fontSize: '1.2rem' } })))))))))), h("ir-hk-user-drawer", { open: this.currentTrigger?.type === 'user', user: this.currentTrigger?.user, isEdit: this.currentTrigger?.isEdit }), h("ir-hk-unassigned-units-drawer", { open: this.currentTrigger?.type === 'unassigned_units', user: this.currentTrigger?.user }), this.currentTrigger?.type === 'delete' && h("ir-hk-delete-dialog", { user: this.currentTrigger.user })));
    }
};
IrHkTeam.style = irHkTeamCss() + tableCss();

const irHkUnassignedUnitsCss = () => `.sc-ir-hk-unassigned-units-h{display:block;--ir-root-active-color:#1e9ff2;--ir-root-inactive-color:#d2d2d2}table.sc-ir-hk-unassigned-units{width:100%}td.sc-ir-hk-unassigned-units{padding-top:3px;padding-bottom:3px}td.sc-ir-hk-unassigned-units:last-child{text-align:end}.title.sc-ir-hk-unassigned-units{min-width:230px !important}.ir-ps-1.sc-ir-hk-unassigned-units{padding-inline-start:0.25rem}`;

const sheetCss = () => `.sc-ir-hk-unassigned-units-h{height:100%}.sheet-container.sc-ir-hk-unassigned-units{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-hk-unassigned-units{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-hk-unassigned-units{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-hk-unassigned-units{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-hk-unassigned-units{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-hk-unassigned-units{flex-direction:row;align-items:center}}`;

const IrHkUnassignedUnits = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeSideBar = createEvent(this, "closeSideBar");
        this.resetData = createEvent(this, "resetData");
    }
    user = null;
    renderAgain = false;
    closeSideBar;
    resetData;
    assignedUnits = new Map();
    housekeepingService = new HouseKeepingService();
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
            await this.housekeepingService.manageExposedAssignedUnitToHKM(housekeeping_store.default_properties.property_id, [...this.assignedUnits.values()]);
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
            return housekeeping_store.hk_criteria.units_assignments.unassigned_units?.map(unit => (h("tr", { key: unit.id }, h("td", { class: "" }, unit.name), h("td", { class: "sr-only" }), h("td", { class: "ir-ps-1" }, h("ir-select", { onSelectChange: e => {
                    let hk_id = e.detail;
                    if (hk_id === '') {
                        hk_id = null;
                    }
                    else {
                        hk_id = +hk_id;
                    }
                    this.assignUnit(unit.id, hk_id, false);
                }, data: housekeeping_store.hk_criteria.housekeepers.map(hk => ({ text: hk.name, value: hk.id.toString() })) })))));
        }
        return calendar_data.roomsInfo.map(roomType => {
            console.log(roomType);
            if (!roomType.is_active) {
                return null;
            }
            return roomType.physicalrooms?.map(physical_room => {
                if (!physical_room['is_active']) {
                    return null;
                }
                let taken = !housekeeping_store.hk_criteria.units_assignments.unassigned_units?.find(unit => unit.id.toString() === physical_room.id.toString());
                let housekeeper = [];
                const assignedRoom = this.assignedUnits.get(physical_room.id);
                if (assignedRoom && assignedRoom.is_to_assign) {
                    housekeeper = [this.user];
                    taken = true;
                }
                else {
                    if (taken) {
                        housekeeper = housekeeping_store.hk_criteria.housekeepers.filter(hk => hk.assigned_units.find(unit => unit.id === physical_room.id));
                    }
                }
                return (h("tr", { key: physical_room.id }, h("td", null, physical_room.name), h("td", null, taken ? housekeeper[0]?.name : ''), h("td", null, h("wa-switch", { defaultChecked: taken && housekeeper[0]?.id === this.user.id, checked: taken && housekeeper[0]?.id === this.user.id, onchange: e => {
                        const checked = e.target.checked;
                        this.assignUnit(physical_room.id, this.user.id, checked);
                    } }))));
            });
        });
    }
    render() {
        return (h("div", { key: '90f42d8bba3802247abcb246f6de96e223396be4', class: "sheet-container" }, h("ir-title", { key: 'd0beefb989620d943e34fbc6f870027173f27aff', class: "title sheet-header px-1", displayContext: "sidebar", label: !this.user ? t('Lcz_AssingnUnitsTypo', { fallback: 'Assingn Units' }) : `${t('Lcz_AssignmentForUser', { fallback: 'Assignment for' })} ${this.user.name}` }), h("section", { key: '7200fdd7835a5379b22f6b343079a2fa8948cfaf', class: "px-1 sheet-body" }, h("table", { key: 'b39719c4059aa5c8d01596639f644dbf9d314409' }, h("thead", { key: '4b350c5a35dcb505c69998ff4dffef93fef5da59' }, h("th", { key: '6bf99651e58692b89d6be89d4fe1a8e1fad6ec1c', class: "sr-only" }, t('Lcz_RoomName', { fallback: 'room name' })), h("th", { key: '6e5cd48673db4d798aaeb98c675f9933b1934dda', class: "sr-only" }, t('Lcz_HousekeeperName', { fallback: 'housekeeper name' })), h("th", { key: 'd3849e7379f135e6e45855756b498a2043fd73f4', class: "sr-only" }, t('Lcz_Actions', { fallback: 'Actions' }))), h("tbody", { key: '35180b51e6c01359d15df5206ad8e8ebdda424e0' }, this.renderRooms()))), h("div", { key: 'b2260766bddb86750d37e2ebbb1ce0a211647c61', class: "sheet-footer" }, h("ir-button", { key: '622ec3689da5083f04e263ec54e59296841c7233', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", btn_color: "secondary", text: t('Lcz_Cancel', { fallback: 'Cancel' }) }), h("ir-button", { key: 'd581fcf6046a0ad29c0ecf2f64af81d302a1d862', isLoading: isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), onClickHandler: this.assignUnits.bind(this), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", text: t('Lcz_Confirm', { fallback: 'Confirm' }) }))));
    }
};
IrHkUnassignedUnits.style = irHkUnassignedUnitsCss() + sheetCss();

const irHkUnassignedUnitsDrawerCss = () => `.sc-ir-hk-unassigned-units-drawer-h{display:block}`;

const IrHkUnassignedUnitsDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeSideBar = createEvent(this, "closeSideBar");
    }
    open = false;
    user = null;
    closeSideBar;
    formId = 'hk-unassigned-units-drawer-form';
    render() {
        return (h("ir-drawer", { key: '0209a5466956105c271dacdd992c754d3231218f', label: !this.user
                ? t('Lcz_AssingnUnitsTypo', { fallback: 'Assingn Units' })
                : `${t('Lcz_AssignmentForUser', { fallback: 'Assignment for' })} ${this.user.name}`, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeSideBar.emit(null);
            }, style: { '--ir-drawer-width': 'max-content' }, open: this.open }, this.open && h("ir-hk-unassigned-units-drawer-form", { key: 'ad3c0326fbd4e5226908082603408ee3ecd48ab7', formId: this.formId, user: this.user }), h("div", { key: '9fa70256363aa7a717a0e9bf0d630e530a23e23e', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'b879d309b3e4cdeab2b2f17b5b212cb49d4ad8d8', "data-drawer": "close", variant: "neutral", size: "m", appearance: "filled" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '114344e9eec086435c963b2da273f38e8a8fee89', loading: isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), variant: "brand", type: "submit", form: this.formId, appearance: "accent", size: "m" }, t('Lcz_Save', { fallback: 'Save' })))));
    }
};
IrHkUnassignedUnitsDrawer.style = irHkUnassignedUnitsDrawerCss();

const irHkUserDrawerCss = () => `.sc-ir-hk-user-drawer-h{display:block}`;

const IrHkUserDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeSideBar = createEvent(this, "closeSideBar");
    }
    isLoading = false;
    open = false;
    isEdit = false;
    user = null;
    closeSideBar;
    formId = 'hk-user-drawer-form';
    render() {
        return (h("ir-drawer", { key: '9ca569ce2674b3f358344edc311c373cb08e1319', open: this.open, onDrawerHide: () => {
                this.closeSideBar.emit(null);
            }, label: this.isEdit ? t('Lcz_EditHousekeeperProfile', { fallback: 'Edit Housekeeper Profile' }) : t('Lcz_CreateHousekeeperProfile', { fallback: 'Create housekeeper profile' }) }, this.open && (h("ir-hk-user-drawer-form", { key: 'b4d1aa9afd8e2cbc17b9a1963938fc51a61bc3c2', onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail;
            }, isEdit: this.isEdit, user: this.user, formId: this.formId })), h("div", { key: '2b478ff79101e41338c37e9af0365c189c45fb88', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '8d86843ffe6e87038517a6a885f643c20ca60fab', "data-drawer": "close", variant: "neutral", size: "m", appearance: "filled" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '2bcdab3254ce130c9d8eeaf63e475603c629ef29', loading: this.isLoading, variant: "brand", type: "submit", form: this.formId, appearance: "accent", size: "m" }, t('Lcz_Save', { fallback: 'Save' })))));
    }
};
IrHkUserDrawer.style = irHkUserDrawerCss();

export { IrHkDeleteDialog as ir_hk_delete_dialog, IrHkOperationsCard as ir_hk_operations_card, IrHkTeam as ir_hk_team, IrHkUnassignedUnits as ir_hk_unassigned_units, IrHkUnassignedUnitsDrawer as ir_hk_unassigned_units_drawer, IrHkUserDrawer as ir_hk_user_drawer };
