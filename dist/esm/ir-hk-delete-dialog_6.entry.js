import { r as registerInstance, c as createEvent, h, H as Host, d as getElement, F as Fragment } from './index-D7D7fhZS.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-I641YNVz.js';
import { l as locales } from './locales.store-C0aS6UDK.js';
import { R as RoomService } from './room.service-RYuSnrxp.js';
import { P as PropertyService } from './property.service-CAIwQBf3.js';
import { c as calendar_data } from './calendar-data-15-64PrB.js';
import { i as isRequestPending } from './ir-interceptor.store-B5mzcEc4.js';
import { k as showToast } from './utils-DvzWTdKJ.js';
import './index-DeW5X45W.js';
import './index-TzZ5wfUy.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './moment-Mki5YqAR.js';
import './type-D7rOPtKA.js';

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
        const label = hasAssignedUnits ? locales.entries.Lcz_AssignUnitsTo : locales.entries.Lcz_ConfirmDeletion;
        return (h("ir-dialog", { lightDismiss: false, label: label, open: this.isOpen, onIrDialogHide: () => this.closeModal() }, !hasAssignedUnits && (h("p", { class: "delete-modal__description" }, "Are you sure you want to permanently delete ", h("strong", null, this.user.name), "? This action cannot be undone.")), hasAssignedUnits && (h("wa-select", { size: "s", defaultValue: this.selectedId, value: this.selectedId, onchange: e => (this.selectedId = e.target.value) }, h("wa-option", { value: "" }, locales.entries.Lcz_nobody), housekeeping_store.hk_criteria.housekeepers
            .filter(hk => hk.id !== this.user.id)
            .map(m => ({ value: m.id.toString(), text: m.name }))
            .sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase()))
            .map(m => (h("wa-option", { key: m.value, value: m.value }, m.text))))), h("div", { slot: "footer", class: "delete-modal__footer" }, h("ir-custom-button", { variant: "neutral", appearance: "filled", size: "m", onClickHandler: () => this.closeModal() }, locales.entries.Lcz_Cancel), h("ir-custom-button", { variant: "danger", appearance: "accent", size: "m", loading: this.isConfirming, onClickHandler: () => this.handleConfirm() }, locales.entries.Lcz_Confirm))));
    }
};
IrHkDeleteDialog.style = irHkDeleteDialogCss();

const irHkOperationsCardCss = () => `.sc-ir-hk-operations-card-h{display:block}.ops-header__title.sc-ir-hk-operations-card{margin:0;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.ops-header__subtitle.sc-ir-hk-operations-card{display:block;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet);margin-top:0.125rem}.ops-settings.sc-ir-hk-operations-card{display:flex;flex-direction:column;gap:0.75rem;margin-bottom:1.25rem}.ops-setting-item.sc-ir-hk-operations-card{display:grid;grid-template-columns:2rem 1fr;align-items:center;gap:0.5rem 0.75rem}.ops-setting-item__icon.sc-ir-hk-operations-card{grid-column:1;grid-row:1;display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;border-radius:0.375rem;background:var(--wa-color-neutral-fill-quiet);color:var(--wa-color-neutral-on-quiet);font-size:0.875rem}.ops-setting-item__info.sc-ir-hk-operations-card{grid-column:2;grid-row:1;display:flex;flex-direction:column;gap:0.125rem;min-width:0}.ops-setting-item__title.sc-ir-hk-operations-card{font-size:0.875rem;font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.ops-setting-item__subtitle.sc-ir-hk-operations-card{font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}.ops-setting-item__controls.sc-ir-hk-operations-card{grid-column:2;grid-row:2}.ops-setting-item__controls.sc-ir-hk-operations-card wa-select.sc-ir-hk-operations-card{width:100%;max-width:330px}@media (min-width: 521px){.ops-setting-item.sc-ir-hk-operations-card{display:flex;grid-template-columns:none;grid-template-rows:none;align-items:center;gap:0.5rem 0.75rem}.ops-setting-item__icon.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;flex-shrink:0}.ops-setting-item__info.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;flex-shrink:0}.ops-setting-item__controls.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;flex-shrink:0}.ops-setting-item__controls.sc-ir-hk-operations-card wa-select.sc-ir-hk-operations-card{width:200px;max-width:none}}.ops-tasks__header.sc-ir-hk-operations-card{margin-bottom:0.75rem}.ops-tasks__title.sc-ir-hk-operations-card{margin:0;margin:0;font-size:0.875rem;font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.ops-tasks__subtitle.sc-ir-hk-operations-card{margin:0.125rem 0 0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}.ops-tasks__list.sc-ir-hk-operations-card{display:flex;flex-direction:column;gap:0.5rem}.ops-task-row.sc-ir-hk-operations-card{display:grid;grid-template-columns:1.5rem 1fr 1.75rem;align-items:center;gap:0.5rem 0.75rem}.ops-task-badge.sc-ir-hk-operations-card{grid-column:1;grid-row:1;display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem;border-radius:50%;background:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-text-loud);font-size:0.6875rem;font-weight:700}.ops-task-badge--locked.sc-ir-hk-operations-card{background:var(--wa-color-neutral-fill-quiet);color:var(--wa-color-neutral-text-quiet);font-size:0.75rem}.ops-task-locked-label.sc-ir-hk-operations-card{grid-column:2;grid-row:1;font-size:0.875rem;font-weight:500;color:var(--wa-color-neutral-text-loud);min-width:0}.ops-task-input.sc-ir-hk-operations-card{grid-column:2;grid-row:1;width:100%}.ops-task-select.sc-ir-hk-operations-card{grid-column:2;grid-row:2;width:100%}.ops-task-delete.sc-ir-hk-operations-card{grid-column:3;grid-row:1;color:var(--wa-color-neutral-text-quiet);font-size:0.75rem}.ops-task-row--locked.sc-ir-hk-operations-card{grid-template-columns:1.5rem 1fr 1.75rem;opacity:0.85}.ir-dialog__footer.sc-ir-hk-operations-card{display:flex;justify-content:flex-end;gap:0.5rem}@media (min-width: 521px){.ops-task-select.sc-ir-hk-operations-card{grid-column:2;grid-row:2;width:100%;max-width:200px}.ops-task-row.sc-ir-hk-operations-card{display:flex;grid-template-columns:none;grid-template-rows:none;align-items:center;gap:0.5rem}.ops-task-badge.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;flex-shrink:0}.ops-task-input.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;width:200px;flex-shrink:0}.ops-task-select.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;width:200px;max-width:none;flex-shrink:0}.ops-task-delete.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;margin-left:auto}.ops-task-row--locked.sc-ir-hk-operations-card{grid-template-columns:none}.ops-task-locked-label.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;min-width:200px;flex-shrink:0}.ops-task-row--locked.sc-ir-hk-operations-card .ops-task-select.sc-ir-hk-operations-card{grid-column:3;grid-row:1}}`;

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
            showToast({ position: 'top-right', title: 'Saved Successfully', description: '', type: 'success' });
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
            showToast({ position: 'top-right', title: 'Saved Successfully', description: '', type: 'success' });
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
            showToast({ position: 'top-right', title: 'Saved Successfully', description: '', type: 'success' });
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        return (h(Host, { key: '8010e5ba502b6281cbb47c414334aa75f5095678' }, h("wa-card", { key: '1c138d94580a28456d8c120d2a1cb0b61e97e789', class: "" }, h("div", { key: '228c644b00d49db055045ccd105ed2015f9cdf3a', slot: "header" }, h("span", { key: '361fb480e89d70cc0585b5bea08edf3c5323888b', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '2bffd807b5328259d003ee16aa6e4b0a72c99620', class: "ops-settings" }, h("div", { key: 'ca0d02fd81075077695f0be9342403e7fad8d032', class: "ops-setting-item" }, h("div", { key: 'adfe17dd081669aca0a789cd1848c5650ef0bffd', class: "ops-setting-item__info" }, h("span", { key: 'f44d779c0c807ed7c22b890d9ec0ca24410d4020', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: 'ffb87525948bac44a9b0d5e947ef78b8f7f83cb6', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: 'cb14ecfc06a4853a322cc962a8fc901b758851cd', class: "ops-setting-item__controls" }, h("wa-select", { key: 'ef8e7df8575dbf8ca329df38cb4738d49fd3eb2d', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: 'cf5dd1939e5b5ee4ad0f9015b6d2e175d0154989', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '1746ae721768f783aa491f02481b3fa1722edcf5', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: 'c269cfd1e3cf2d8c9b8275c0c051da4062f64b66', class: "ops-tasks__header" }, h("p", { key: 'b011fde281c4fafa806e5e972359f4bea8719b93', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '2b409177c414afc7b87f00428c3b79b7bbcad3aa', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: 'ccf710e3e593f11449dbcb8fca05ac78deab6d2a', class: "ops-tasks__list" }, h("div", { key: '35371abe34a158cd355f2518c277cb374c133ad7', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '95f133e05e5c6b673d859c959362ab4305bf0bcb', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: 'a487f702ce3b31e972684f1caa4a4bb869606090', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: '8b93bd826628123de545fda8f184d05df6e6892a', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '365ad14fa2647acfdb75d76b080ae46d88d0c7be' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
                const updated = [...this.hkTasks];
                updated[i] = { ...updated[i], name: e.target.value };
                this.hkTasks = updated;
                this.saveHkTasks();
            } }), h("wa-select", { class: "ops-task-select", size: "s", value: task.frequency, defaultValue: task.frequency, placeholder: "Frequency", onchange: (e) => {
                const updated = [...this.hkTasks];
                updated[i] = { ...updated[i], frequency: e.target.value };
                this.hkTasks = updated;
                this.saveHkTasks();
            } }, this.frequencies.map(f => (h("wa-option", { key: f.CODE_NAME, value: f.CODE_NAME }, f.CODE_VALUE_EN)))), h("wa-icon-button", { class: "ops-task-delete", name: "xmark", label: "Remove task", onClick: () => {
                const updated = [...this.hkTasks];
                updated[i] = { name: '', frequency: '' };
                this.hkTasks = updated;
                this.saveHkTasks();
            } })))))), h("ir-dialog", { key: 'ccb2448ca6a2220efebaa450e74a3a772c9887ab', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '5f553aeb0017af3d3a1f99d62064d79f4edc666d' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: 'faf30a65b08a4259f97f35f45b308aee38cb578e', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'c7b2c45806b12c08f55fbf2d3bb8080404f37bed', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '025d04d213821eb6b5a0c4c7a7326293b0bf7afd', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
    }
};
IrHkOperationsCard.style = irHkOperationsCardCss();

const irHkTeamCss = () => `.icons-container.sc-ir-hk-team{display:flex;align-items:center;justify-content:end}.text-center.sc-ir-hk-team{text-align:center !important}.hk-team-header.sc-ir-hk-team{display:flex;flex-direction:column;gap:0.25rem}.hk-team__card.sc-ir-hk-team::part(body),.hk-team__card.sc-ir-hk-team [part~="body"]{padding:0.5rem}.hk-team-header__top.sc-ir-hk-team{display:flex;flex-direction:column;gap:0.5rem}.hk-team-header__title.sc-ir-hk-team{margin:0;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.hk-team-header__stats.sc-ir-hk-team{display:flex;align-items:center;flex-wrap:wrap;gap:0.75rem}.hk-team-header__stat.sc-ir-hk-team{margin:0;font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet)}.hk-team-header__stat--bold.sc-ir-hk-team{font-weight:600;color:var(--wa-color-text-normal)}.hk-team-header__unassigned-btn.sc-ir-hk-team::part(base),.hk-team-header__unassigned-btn.sc-ir-hk-team [part~="base"]{height:auto;padding:0.125rem 0.5rem}.hk-team-header__hint.sc-ir-hk-team{margin:0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}@media (min-width: 640px){.hk-team-header__top.sc-ir-hk-team{flex-direction:row;align-items:center;justify-content:space-between}}`;

const tableCss = () => `.sc-ir-hk-team-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-hk-team{overflow-x:auto}.table--container.sc-ir-hk-team,.data-table.sc-ir-hk-team{height:100%}.ir-table-row.sc-ir-hk-team td.sc-ir-hk-team{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-hk-team td.sc-ir-hk-team{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-hk-team tbody.sc-ir-hk-team tr.sc-ir-hk-team:last-child>td.sc-ir-hk-team{border-bottom:0 !important}.table.sc-ir-hk-team thead.sc-ir-hk-team th.sc-ir-hk-team{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-hk-team thead.sc-ir-hk-team th.sc-ir-hk-team{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-hk-team{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-hk-team,.ir-table-row.sc-ir-hk-team{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-hk-team{text-transform:capitalize;cursor:pointer}.table.sc-ir-hk-team thead.sc-ir-hk-team th.sortable.sc-ir-hk-team{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-hk-team thead.sc-ir-hk-team th.sortable.sc-ir-hk-team:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-hk-team thead.sc-ir-hk-team th.sortable.sc-ir-hk-team:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-hk-team:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-hk-team svg.sc-ir-hk-team{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-hk-team:hover td.sc-ir-hk-team{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-hk-team:hover td.sc-ir-hk-team{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-hk-team:active td.sc-ir-hk-team{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-hk-team td.sc-ir-hk-team{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-hk-team:hover td.sc-ir-hk-team{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-hk-team:active td.sc-ir-hk-team{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-hk-team .empty-row.sc-ir-hk-team{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-hk-team{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-hk-team{position:sticky !important;right:0;background-color:white}`;

const IrHkTeam = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    currentTrigger = null;
    deletionTimout;
    renderAssignedUnits(hk) {
        if (hk.assigned_units.length === 0) {
            return (h("span", null, "0 -", ' ', h("wa-button", { size: "s", variant: "brand", appearance: "outlined", class: "hk-team-header__unassigned-btn", onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: hk }) }, locales.entries.Lcz_Assign)));
        }
        return (h("span", null, hk.assigned_units.length, " -", ' ', h("wa-button", { class: "hk-team-header__unassigned-btn", size: "s", variant: "brand", appearance: "outlined", onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: hk }) }, 'Edit')));
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
        return (h("wa-card", { class: "hk-team__card" }, h("section", { slot: "header", class: "hk-team-header" }, h("div", { class: "hk-team-header__top" }, h("p", { class: "hk-team-header__title" }, locales.entries.Lcz_HousekeepingTeam), h("div", { class: "hk-team-header__stats" }, h("p", { class: "hk-team-header__stat hk-team-header__stat--bold" }, total, " ", locales.entries.Lcz_TotalUnits), h("p", { class: "hk-team-header__stat" }, assigned, " ", h("span", null, locales.entries.Lcz_Assigned)), un_assigned > 0 && (h("wa-button", { onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: null }), size: "s", class: "hk-team-header__unassigned-btn", variant: "brand", appearance: "outlined" }, un_assigned, " ", locales.entries.Lcz_Unassigned)))), h("p", { class: "hk-team-header__hint" }, locales.entries.Lcz_AsAnOption)), h("section", { class: "table-responsive" }, h("table", { class: "table data-table" }, h("thead", null, h("tr", null, h("th", { class: "text-left" }, locales.entries.Lcz_Name), h("th", null, locales.entries.Lcz_Mobile), h("th", null, locales.entries.Lcz_Username), h("th", null, locales.entries.Lcz_UnitsAssigned), h("th", { class: 'text-left' }, h("div", { class: "d-flex justify-content-center" }, h("ir-custom-button", { onClickHandler: () => {
                this.currentTrigger = {
                    type: 'user',
                    isEdit: false,
                    user: null,
                };
            }, variant: "neutral", appearance: "plain" }, h("wa-icon", { name: "plus", style: { fontSize: '1.2rem' } })))))), h("tbody", null, housekeeping_store.hk_criteria.housekeepers.map(hk => (h("tr", { key: hk.id, class: "ir-table-row" }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, hk.name?.length > 25 ? (h(Fragment, null, h("wa-tooltip", { for: hk.id + '_name' }, hk.name), h("span", { id: hk.id + '_name' }, hk.name.slice(0, 25), "..."))) : (hk.name), hk.note && (
        // <ir-popover content={hk.note}>
        //   <ir-button variant="icon" icon_name="note" data-toggle="tooltip" data-placement="bottom" title="Click to view note"></ir-button>
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

const irHkUnassignedUnitsCss = () => `.sc-ir-hk-unassigned-units-h{display:block;--ir-root-active-color:#1e9ff2;--ir-root-inactive-color:#d2d2d2}table.sc-ir-hk-unassigned-units{width:100%}td.sc-ir-hk-unassigned-units{padding-top:3px;padding-bottom:3px}td.sc-ir-hk-unassigned-units:last-child{text-align:end}.title.sc-ir-hk-unassigned-units{min-width:230px !important}`;

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
            return housekeeping_store.hk_criteria.units_assignments.unassigned_units?.map(unit => (h("tr", { key: unit.id }, h("td", { class: "" }, unit.name), h("td", { class: "sr-only" }), h("td", { class: "pl-1" }, h("ir-select", { onSelectChange: e => {
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
        return (h("div", { key: '5edae59de62d3c9c299a56fbd39e67bfb02b2860', class: "sheet-container" }, h("ir-title", { key: '8b81cc28665f7f2627b18fae30eef7c6dbb2eec1', class: "title sheet-header px-1", displayContext: "sidebar", label: !this.user ? 'Assingn Units' : `Assignment for ${this.user.name}` }), h("section", { key: '335fbc6cc80dcf64603f45f28d25661f67f6f685', class: "px-1 sheet-body" }, h("table", { key: 'f1b43ac0361088430c7e8eb8a9e53552b870a496' }, h("thead", { key: 'd539d3f1f6353a5f2f0c0810f97315d82e8c2fad' }, h("th", { key: '306da2ee84cbb6644076d1daf286ebbd753e26a2', class: "sr-only" }, locales.entries.Lcz_RoomName), h("th", { key: 'e0fa705f3d79ff0da7672b2cad11d1912f946a91', class: "sr-only" }, locales.entries.Lcz_HousekeeperName), h("th", { key: '6268040eec4d442a1f7a4c91c148fe873b79174d', class: "sr-only" }, locales.entries.Lcz_Actions)), h("tbody", { key: '868482cc07434694c2379be3782e7bb26aff4c8c' }, this.renderRooms()))), h("div", { key: '564e581760f4764538e81373d5d436af36ac591d', class: "sheet-footer" }, h("ir-button", { key: '3dc77284bb3dc79f3cf14fffc59489753660f257', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", btn_color: "secondary", text: locales.entries.Lcz_Cancel }), h("ir-button", { key: 'f57e491213ab180a2e6a2d7fc4ef0cf7b8bbee7c', isLoading: isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), onClickHandler: this.assignUnits.bind(this), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", text: locales.entries.Lcz_Confirm }))));
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
        return (h("ir-drawer", { key: '971876035803c6b00efc366043870cc1d15a54e6', label: !this.user ? 'Assingn Units' : `Assignment for ${this.user.name}`, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeSideBar.emit(null);
            }, style: { '--ir-drawer-width': 'max-content' }, open: this.open }, this.open && h("ir-hk-unassigned-units-drawer-form", { key: 'ff9fe8c1fa33ab93a70e2f1ce2f81225d351736c', formId: this.formId, user: this.user }), h("div", { key: '60dd0a9c0ce681d9b304693893350915cda5037a', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '20ad31562a25342412944e236779dcb13851932c', "data-drawer": "close", variant: "neutral", size: "m", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: '49101d84781a1a8a2a2038d1ee7cbff32d9e2cc5', loading: isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), variant: "brand", type: "submit", form: this.formId, appearance: "accent", size: "m" }, "Save"))));
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
        return (h("ir-drawer", { key: '1c9850f00d5463f9df6c9ce1fb478b5061aebe33', open: this.open, onDrawerHide: () => {
                this.closeSideBar.emit(null);
            }, label: this.isEdit ? locales.entries.Lcz_EditHousekeeperProfile : locales.entries.Lcz_CreateHousekeeperProfile }, this.open && (h("ir-hk-user-drawer-form", { key: '49ed29fc40e6a13dda21866bed9e86ce0ff49362', onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail;
            }, isEdit: this.isEdit, user: this.user, formId: this.formId })), h("div", { key: '77a315ec5b3670e8cf05c929852a3e4d5d4c550a', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'a605792587f819e2875bb74f0d2e633f82f56016', "data-drawer": "close", variant: "neutral", size: "m", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: '16a258b504be8cde9599c61f779c64d63266b31d', loading: this.isLoading, variant: "brand", type: "submit", form: this.formId, appearance: "accent", size: "m" }, "Save"))));
    }
};
IrHkUserDrawer.style = irHkUserDrawerCss();

export { IrHkDeleteDialog as ir_hk_delete_dialog, IrHkOperationsCard as ir_hk_operations_card, IrHkTeam as ir_hk_team, IrHkUnassignedUnits as ir_hk_unassigned_units, IrHkUnassignedUnitsDrawer as ir_hk_unassigned_units_drawer, IrHkUserDrawer as ir_hk_user_drawer };
