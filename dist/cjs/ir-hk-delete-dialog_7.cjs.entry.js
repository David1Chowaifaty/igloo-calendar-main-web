'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const housekeeping_service = require('./housekeeping.service-8d06557d.js');
const locales_store = require('./locales.store-32782582.js');
const room_service = require('./room.service-f9117e70.js');
const property_service = require('./property.service-ceef98b2.js');
const calendarData = require('./calendar-data-70bc3b4b.js');
const irInterceptor_store = require('./ir-interceptor.store-d60f5a34.js');
require('./index-8bb117a0.js');
require('./index-fbf1fe1d.js');
require('./axios-6e678d52.js');
require('./utils-32be062a.js');
require('./moment-1780b03a.js');
require('./type-53035218.js');

const irHkDeleteDialogCss = ":host{display:contents}.delete-modal__description{margin:0;font-size:var(--wa-font-size-m);color:var(--wa-color-text-quiet);line-height:var(--wa-line-height-normal)}.delete-modal__footer{display:flex;justify-content:flex-end;gap:0.5rem}";
const IrHkDeleteDialogStyle0 = irHkDeleteDialogCss;

const IrHkDeleteDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.modalClosed = index.createEvent(this, "modalClosed", 7);
        this.resetData = index.createEvent(this, "resetData", 7);
    }
    user;
    isOpen = false;
    selectedId = '';
    isConfirming = false;
    modalClosed;
    resetData;
    housekeepingService = new housekeeping_service.HouseKeepingService();
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
                await this.housekeepingService.manageExposedAssignedUnitToHKM(housekeeping_service.housekeeping_store.default_properties.property_id, newAssignedUnits);
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
        const label = hasAssignedUnits ? locales_store.locales.entries.Lcz_AssignUnitsTo : locales_store.locales.entries.Lcz_ConfirmDeletion;
        return (index.h("ir-dialog", { lightDismiss: false, label: label, open: this.isOpen, onIrDialogHide: () => this.closeModal() }, !hasAssignedUnits && (index.h("p", { class: "delete-modal__description" }, "Are you sure you want to permanently delete ", index.h("strong", null, this.user.name), "? This action cannot be undone.")), hasAssignedUnits && (index.h("wa-select", { size: "small", defaultValue: this.selectedId, value: this.selectedId, onchange: e => (this.selectedId = e.target.value) }, index.h("wa-option", { value: "" }, locales_store.locales.entries.Lcz_nobody), housekeeping_service.housekeeping_store.hk_criteria.housekeepers
            .filter(hk => hk.id !== this.user.id)
            .map(m => ({ value: m.id.toString(), text: m.name }))
            .sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase()))
            .map(m => (index.h("wa-option", { key: m.value, value: m.value }, m.text))))), index.h("div", { slot: "footer", class: "delete-modal__footer" }, index.h("ir-custom-button", { variant: "neutral", appearance: "filled", size: "medium", onClickHandler: () => this.closeModal() }, locales_store.locales.entries.Lcz_Cancel), index.h("ir-custom-button", { variant: "danger", appearance: "accent", size: "medium", loading: this.isConfirming, onClickHandler: () => this.handleConfirm() }, locales_store.locales.entries.Lcz_Confirm))));
    }
};
IrHkDeleteDialog.style = IrHkDeleteDialogStyle0;

const irHkOperationsCardCss = ".sc-ir-hk-operations-card-h{display:block}.ops-header__title.sc-ir-hk-operations-card{margin:0;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.ops-header__subtitle.sc-ir-hk-operations-card{display:block;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet);margin-top:0.125rem}.ops-settings.sc-ir-hk-operations-card{display:flex;flex-direction:column;gap:0.75rem;margin-bottom:1.25rem}.ops-setting-item.sc-ir-hk-operations-card{display:grid;grid-template-columns:2rem 1fr;align-items:center;gap:0.5rem 0.75rem}.ops-setting-item__icon.sc-ir-hk-operations-card{grid-column:1;grid-row:1;display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;border-radius:0.375rem;background:var(--wa-color-neutral-fill-quiet);color:var(--wa-color-neutral-on-quiet);font-size:0.875rem}.ops-setting-item__info.sc-ir-hk-operations-card{grid-column:2;grid-row:1;display:flex;flex-direction:column;gap:0.125rem;min-width:0}.ops-setting-item__title.sc-ir-hk-operations-card{font-size:0.875rem;font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.ops-setting-item__subtitle.sc-ir-hk-operations-card{font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}.ops-setting-item__controls.sc-ir-hk-operations-card{grid-column:2;grid-row:2}.ops-setting-item__controls.sc-ir-hk-operations-card wa-select.sc-ir-hk-operations-card{width:100%;max-width:330px}@media (min-width: 521px){.ops-setting-item.sc-ir-hk-operations-card{display:flex;grid-template-columns:none;grid-template-rows:none;align-items:center;gap:0.5rem 0.75rem}.ops-setting-item__icon.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;flex-shrink:0}.ops-setting-item__info.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;flex-shrink:0}.ops-setting-item__controls.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;flex-shrink:0}.ops-setting-item__controls.sc-ir-hk-operations-card wa-select.sc-ir-hk-operations-card{width:200px;max-width:none}}.ops-tasks__header.sc-ir-hk-operations-card{margin-bottom:0.75rem}.ops-tasks__title.sc-ir-hk-operations-card{margin:0;margin:0;font-size:0.875rem;font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.ops-tasks__subtitle.sc-ir-hk-operations-card{margin:0.125rem 0 0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}.ops-tasks__list.sc-ir-hk-operations-card{display:flex;flex-direction:column;gap:0.5rem}.ops-task-row.sc-ir-hk-operations-card{display:grid;grid-template-columns:1.5rem 1fr 1.75rem;align-items:center;gap:0.5rem 0.75rem}.ops-task-badge.sc-ir-hk-operations-card{grid-column:1;grid-row:1;display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem;border-radius:50%;background:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-text-loud);font-size:0.6875rem;font-weight:700}.ops-task-badge--locked.sc-ir-hk-operations-card{background:var(--wa-color-neutral-fill-quiet);color:var(--wa-color-neutral-text-quiet);font-size:0.75rem}.ops-task-locked-label.sc-ir-hk-operations-card{grid-column:2;grid-row:1;font-size:0.875rem;font-weight:500;color:var(--wa-color-neutral-text-loud);min-width:0}.ops-task-input.sc-ir-hk-operations-card{grid-column:2;grid-row:1;width:100%}.ops-task-select.sc-ir-hk-operations-card{grid-column:2;grid-row:2;width:100%}.ops-task-delete.sc-ir-hk-operations-card{grid-column:3;grid-row:1;color:var(--wa-color-neutral-text-quiet);font-size:0.75rem}.ops-task-row--locked.sc-ir-hk-operations-card{grid-template-columns:1.5rem 1fr 1.75rem;opacity:0.85}.ir-dialog__footer.sc-ir-hk-operations-card{display:flex;justify-content:flex-end;gap:0.5rem}@media (min-width: 521px){.ops-task-select.sc-ir-hk-operations-card{grid-column:2;grid-row:2;width:100%;max-width:200px}.ops-task-row.sc-ir-hk-operations-card{display:flex;grid-template-columns:none;grid-template-rows:none;align-items:center;gap:0.5rem}.ops-task-badge.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;flex-shrink:0}.ops-task-input.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;width:200px;flex-shrink:0}.ops-task-select.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;width:200px;max-width:none;flex-shrink:0}.ops-task-delete.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;margin-left:auto}.ops-task-row--locked.sc-ir-hk-operations-card{grid-template-columns:none}.ops-task-locked-label.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;min-width:200px;flex-shrink:0}.ops-task-row--locked.sc-ir-hk-operations-card .ops-task-select.sc-ir-hk-operations-card{grid-column:3;grid-row:1}}";
const IrHkOperationsCardStyle0 = irHkOperationsCardCss;

const IrHkOperationsCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toast = index.createEvent(this, "toast", 7);
    }
    frequencies = [];
    hkTasks = [
        { name: '', frequency: '' },
        { name: '', frequency: '' },
    ];
    selectedCleaningFrequency = null;
    toast;
    roomService = new room_service.RoomService();
    propertyService = new property_service.PropertyService();
    houseKeepingService = new housekeeping_service.HouseKeepingService();
    dialog;
    componentWillLoad() {
        const criteria = housekeeping_service.housekeeping_store.hk_criteria;
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
                property_id: housekeeping_service.housekeeping_store.default_properties.property_id,
                flag,
            });
            this.toast.emit({ position: 'top-right', title: 'Saved Successfully', description: '', type: 'success' });
        }
        catch (error) {
            console.log(error);
        }
    }
    async saveCleaningFrequency() {
        try {
            await this.propertyService.setExposedCleaningFrequency({
                property_id: housekeeping_service.housekeeping_store.default_properties.property_id,
                code: this.selectedCleaningFrequency,
            });
            calendarData.calendar_data.cleaning_frequency = { code: this.selectedCleaningFrequency, description: '' };
            this.toast.emit({ position: 'top-right', title: 'Saved Successfully', description: '', type: 'success' });
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
                property_id: housekeeping_service.housekeeping_store.default_properties.property_id,
                t1_label: t1.name,
                t1_freq: t1.frequency,
                t2_label: t2.name,
                t2_freq: t2.frequency,
            });
            this.toast.emit({ position: 'top-right', title: 'Saved Successfully', description: '', type: 'success' });
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        return (index.h(index.Host, { key: 'b48560731f9e58d23df1a5f8afc528345a650fb3' }, index.h("wa-card", { key: 'c647242c222078e499c2a63c8adb05be542ad077', class: "" }, index.h("div", { key: 'cd517f6dcb82ddb7d317b5a742d59127b34f7a8d', slot: "header" }, index.h("span", { key: 'abeaa415804c414f55f1aa290c3966be3e4ed8aa', class: "ops-header__title" }, "Operations Settings")), index.h("div", { key: 'ac81293e2916e81b69ed7b6bab64e475cdae4e86', class: "ops-settings" }, index.h("div", { key: 'ffcf3b1bcf16c0ff3da1c1e035df47415c65b862', class: "ops-setting-item" }, index.h("div", { key: '059a885133595bbe10b65308874ecc0112e03d37', class: "ops-setting-item__info" }, index.h("span", { key: '27a6ff9c01e3b5a5f0f7daa2236bd34af91c64ee', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), index.h("span", { key: 'bf6db230faf2bfb4a4fa4386441a726b36fc92c4', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), index.h("div", { key: 'f1f16e05365cd321b96252e12e43cc473407bc6e', class: "ops-setting-item__controls" }, index.h("wa-select", { key: 'f9c7ac8dbfd5562458ed7f53bd48693437ef9182', size: "small", style: { minWidth: '260px' }, value: calendarData.calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendarData.calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, index.h("wa-option", { key: '23a6b757c8c678409b91876ad5581a3751682854', value: "auto" }, locales_store.locales.entries.Lcz_YesAsPerPropertyPolicy), index.h("wa-option", { key: '94a0ae981e02f526404ebb979a425d1ff2cc2c5f', value: "manual" }, locales_store.locales.entries.Lcz_NoIWillDoItManually))))), index.h("div", { key: '053895949e4f8f80699cb5c830344c6abacd886d', class: "ops-tasks__header" }, index.h("p", { key: '5e01ed9c7ea5cb623a035df8c20c1ea1a83e293f', class: "ops-tasks__title" }, "Recurring Tasks"), index.h("p", { key: '3f04789cdac456006f5bf0b0f0afb681c833f0d5', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), index.h("div", { key: '0ad5e13299f31ee36e1883ae394528c5ecaeda7b', class: "ops-tasks__list" }, index.h("div", { key: '6f8ecf7f40d1eb3e5cd1ec5d3d33acf23e0c1a9f', class: "ops-task-row ops-task-row--locked" }, index.h("wa-badge", { key: 'c8854149bb2bba236e7517f1527224c3a23bc5cc', variant: "danger", appearance: "filled" }, "CL"), index.h("span", { key: 'c2d8e32bc5f8662329c7a89f041262ea43af7aa9', class: "ops-task-locked-label" }, "Cleaning"), index.h("wa-select", { key: '364d74ff05804c0a1df2793df74a0d1da04693b2', class: "ops-task-select", size: "small", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_service.housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (index.h("wa-option", { key: v.code, value: v.code }, v.description)))), index.h("span", { key: 'd59ab329bbb44a80a318b7d6a69cebb8e4185709' })), this.hkTasks.map((task, i) => (index.h("div", { key: i, class: "ops-task-row" }, index.h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), index.h("ir-input", { class: "ops-task-input", size: "small", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
                const updated = [...this.hkTasks];
                updated[i] = { ...updated[i], name: e.target.value };
                this.hkTasks = updated;
                this.saveHkTasks();
            } }), index.h("wa-select", { class: "ops-task-select", size: "small", value: task.frequency, defaultValue: task.frequency, placeholder: "Frequency", onchange: (e) => {
                const updated = [...this.hkTasks];
                updated[i] = { ...updated[i], frequency: e.target.value };
                this.hkTasks = updated;
                this.saveHkTasks();
            } }, this.frequencies.map(f => (index.h("wa-option", { key: f.CODE_NAME, value: f.CODE_NAME }, f.CODE_VALUE_EN)))), index.h("wa-icon-button", { class: "ops-task-delete", name: "xmark", label: "Remove task", onClick: () => {
                const updated = [...this.hkTasks];
                updated[i] = { name: '', frequency: '' };
                this.hkTasks = updated;
                this.saveHkTasks();
            } })))))), index.h("ir-dialog", { key: '63ba827908cdd1058703eda54a5f10fdbf114885', ref: el => (this.dialog = el), label: locales_store.locales.entries.Lcz_Confirmation, lightDismiss: false }, index.h("span", { key: 'e727bbe4fcf66c2375e670e559e58d0817fb566e' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), index.h("div", { key: '59ff7ebe3422723cad2d10b8d4ca3927325fba84', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '869e577865dcf63af7c6ac93c9208cda841ad809', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendarData.calendar_data.cleaning_frequency ?? housekeeping_service.housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales_store.locales.entries.Lcz_Cancel), index.h("ir-custom-button", { key: 'ef610ba1e3d2d7f50d265aff2e5ff47eb130c77d', size: "medium", appearance: "filled", variant: "brand", loading: irInterceptor_store.isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales_store.locales.entries.Lcz_Confirm)))));
    }
};
IrHkOperationsCard.style = IrHkOperationsCardStyle0;

const irHkTeamCss = ".icons-container.sc-ir-hk-team{display:flex;align-items:center;justify-content:end}.text-center.sc-ir-hk-team{text-align:center !important}.hk-team-header.sc-ir-hk-team{display:flex;flex-direction:column;gap:0.25rem}.hk-team-header__top.sc-ir-hk-team{display:flex;flex-direction:column;gap:0.5rem}.hk-team-header__title.sc-ir-hk-team{margin:0;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.hk-team-header__stats.sc-ir-hk-team{display:flex;align-items:center;flex-wrap:wrap;gap:0.75rem}.hk-team-header__stat.sc-ir-hk-team{margin:0;font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet)}.hk-team-header__stat--bold.sc-ir-hk-team{font-weight:600;color:var(--wa-color-text-normal)}.hk-team-header__unassigned-btn.sc-ir-hk-team::part(base){height:auto;padding:0.125rem 0.5rem}.hk-team-header__hint.sc-ir-hk-team{margin:0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}@media (min-width: 640px){.hk-team-header__top.sc-ir-hk-team{flex-direction:row;align-items:center;justify-content:space-between}}";
const IrHkTeamStyle0 = irHkTeamCss;

const tableCss = ".sc-ir-hk-team-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-hk-team td.sc-ir-hk-team{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-hk-team{overflow-x:auto}.table.sc-ir-hk-team td.sc-ir-hk-team{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-hk-team tbody.sc-ir-hk-team tr.sc-ir-hk-team:last-child>td.sc-ir-hk-team{border-bottom:0 !important}.table.sc-ir-hk-team thead.sc-ir-hk-team th.sc-ir-hk-team{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-hk-team thead.sc-ir-hk-team th.sc-ir-hk-team{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-hk-team .empty-row.sc-ir-hk-team{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-hk-team{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-hk-team td.sc-ir-hk-team{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important}.selected.sc-ir-hk-team td.sc-ir-hk-team{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-hk-team,.ir-table-row.sc-ir-hk-team{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-hk-team{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-hk-team td.sc-ir-hk-team{transition-duration:var(--wa-transition-fast)}.table.sc-ir-hk-team thead.sc-ir-hk-team th.sortable.sc-ir-hk-team{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-hk-team thead.sc-ir-hk-team th.sortable.sc-ir-hk-team:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-hk-team thead.sc-ir-hk-team th.sortable.sc-ir-hk-team:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-hk-team:hover td.sc-ir-hk-team{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-hk-team:hover td.sc-ir-hk-team{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-hk-team:active td.sc-ir-hk-team{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-hk-team:hover td.sc-ir-hk-team{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-hk-team:active td.sc-ir-hk-team{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-hk-team:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-hk-team svg.sc-ir-hk-team{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-hk-team{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-hk-team,.data-table.sc-ir-hk-team{height:100%}";
const IrHkTeamStyle1 = tableCss;

const IrHkTeam = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    currentTrigger = null;
    deletionTimout;
    renderAssignedUnits(hk) {
        if (hk.assigned_units.length === 0) {
            return (index.h("span", null, "0 -", ' ', index.h("wa-button", { size: "small", variant: "brand", appearance: "outlined", class: "hk-team-header__unassigned-btn", onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: hk }) }, locales_store.locales.entries.Lcz_Assign)));
        }
        return (index.h("span", null, hk.assigned_units.length, " -", ' ', index.h("wa-button", { class: "hk-team-header__unassigned-btn", size: "small", variant: "brand", appearance: "outlined", onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: hk }) }, 'Edit')));
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
        if (!housekeeping_service.housekeeping_store.hk_criteria) {
            return null;
        }
        const { assigned, total, un_assigned } = housekeeping_service.housekeeping_store.hk_criteria.units_assignments;
        return (index.h("wa-card", null, index.h("section", { slot: "header", class: "hk-team-header" }, index.h("div", { class: "hk-team-header__top" }, index.h("p", { class: "hk-team-header__title" }, locales_store.locales.entries.Lcz_HousekeepingTeam), index.h("div", { class: "hk-team-header__stats" }, index.h("p", { class: "hk-team-header__stat hk-team-header__stat--bold" }, total, " ", locales_store.locales.entries.Lcz_TotalUnits), index.h("p", { class: "hk-team-header__stat" }, assigned, " ", index.h("span", null, locales_store.locales.entries.Lcz_Assigned)), un_assigned > 0 && (index.h("wa-button", { onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: null }), size: "small", class: "hk-team-header__unassigned-btn", variant: "brand", appearance: "outlined" }, un_assigned, " ", locales_store.locales.entries.Lcz_Unassigned)))), index.h("p", { class: "hk-team-header__hint" }, locales_store.locales.entries.Lcz_AsAnOption)), index.h("section", { class: "table-responsive" }, index.h("table", { class: "table" }, index.h("thead", null, index.h("tr", null, index.h("th", { class: "text-left" }, locales_store.locales.entries.Lcz_Name), index.h("th", null, locales_store.locales.entries.Lcz_Mobile), index.h("th", null, locales_store.locales.entries.Lcz_Username), index.h("th", null, locales_store.locales.entries.Lcz_UnitsAssigned), index.h("th", { class: 'text-left' }, index.h("div", { class: "d-flex justify-content-center" }, index.h("ir-custom-button", { onClickHandler: () => {
                this.currentTrigger = {
                    type: 'user',
                    isEdit: false,
                    user: null,
                };
            }, variant: "neutral", appearance: "plain" }, index.h("wa-icon", { name: "plus", style: { fontSize: '1.2rem' } })))))), index.h("tbody", null, housekeeping_service.housekeeping_store.hk_criteria.housekeepers.map(hk => (index.h("tr", { key: hk.id, class: "ir-table-row" }, index.h("td", { class: "text-left" }, index.h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, hk.name?.length > 25 ? (index.h("ir-popover", { trigger: "hover", content: hk.name }, index.h("span", null, hk.name.slice(0, 25), "..."))) : (hk.name), hk.note && (index.h("ir-popover", { content: hk.note }, index.h("ir-button", { variant: "icon", icon_name: "note", "data-toggle": "tooltip", "data-placement": "bottom", title: "Click to view note" }))))), index.h("td", { class: "" }, hk.phone_prefix, " ", hk.mobile), index.h("td", null, hk.username), index.h("td", null, this.renderAssignedUnits(hk)), index.h("td", { class: "" }, index.h("div", { class: "icons-container" }, index.h("ir-custom-button", { onClickHandler: () => {
                const { assigned_units, is_soft_deleted, is_active, ...user } = hk;
                this.currentTrigger = {
                    type: 'user',
                    isEdit: true,
                    user,
                };
            }, variant: "neutral", appearance: "plain" }, index.h("wa-icon", { name: "edit", style: { fontSize: '1.2rem' } })), index.h("ir-custom-button", { onClickHandler: () => this.handleDeletion(hk), variant: "danger", appearance: "plain" }, index.h("wa-icon", { name: "trash-can", style: { fontSize: '1.2rem' } })))))))))), index.h("ir-hk-user-drawer", { open: this.currentTrigger?.type === 'user', user: this.currentTrigger?.user, isEdit: this.currentTrigger?.isEdit }), index.h("ir-hk-unassigned-units-drawer", { open: this.currentTrigger?.type === 'unassigned_units', user: this.currentTrigger?.user }), this.currentTrigger?.type === 'delete' && index.h("ir-hk-delete-dialog", { user: this.currentTrigger.user })));
    }
};
IrHkTeam.style = IrHkTeamStyle0 + IrHkTeamStyle1;

const irHkUnassignedUnitsCss = ".sc-ir-hk-unassigned-units-h{display:block;--ir-root-active-color:#1e9ff2;--ir-root-inactive-color:#d2d2d2}table.sc-ir-hk-unassigned-units{width:100%}td.sc-ir-hk-unassigned-units{padding-top:3px;padding-bottom:3px}td.sc-ir-hk-unassigned-units:last-child{text-align:end}.title.sc-ir-hk-unassigned-units{min-width:230px !important}";
const IrHkUnassignedUnitsStyle0 = irHkUnassignedUnitsCss;

const sheetCss = ".sc-ir-hk-unassigned-units-h{height:100%}.sheet-container.sc-ir-hk-unassigned-units{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-hk-unassigned-units{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-hk-unassigned-units{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-hk-unassigned-units{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-hk-unassigned-units{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-hk-unassigned-units{flex-direction:row;align-items:center}}";
const IrHkUnassignedUnitsStyle1 = sheetCss;

const IrHkUnassignedUnits = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
        this.resetData = index.createEvent(this, "resetData", 7);
    }
    user = null;
    renderAgain = false;
    closeSideBar;
    resetData;
    assignedUnits = new Map();
    housekeepingService = new housekeeping_service.HouseKeepingService();
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
            await this.housekeepingService.manageExposedAssignedUnitToHKM(housekeeping_service.housekeeping_store.default_properties.property_id, [...this.assignedUnits.values()]);
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
            return housekeeping_service.housekeeping_store.hk_criteria.units_assignments.unassigned_units?.map(unit => (index.h("tr", { key: unit.id }, index.h("td", { class: "" }, unit.name), index.h("td", { class: "sr-only" }), index.h("td", { class: "pl-1" }, index.h("ir-select", { onSelectChange: e => {
                    let hk_id = e.detail;
                    if (hk_id === '') {
                        hk_id = null;
                    }
                    else {
                        hk_id = +hk_id;
                    }
                    this.assignUnit(unit.id, hk_id, false);
                }, data: housekeeping_service.housekeeping_store.hk_criteria.housekeepers.map(hk => ({ text: hk.name, value: hk.id.toString() })) })))));
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
                let taken = !housekeeping_service.housekeeping_store.hk_criteria.units_assignments.unassigned_units?.find(unit => unit.id.toString() === physical_room.id.toString());
                let housekeeper = [];
                const assignedRoom = this.assignedUnits.get(physical_room.id);
                if (assignedRoom && assignedRoom.is_to_assign) {
                    housekeeper = [this.user];
                    taken = true;
                }
                else {
                    if (taken) {
                        housekeeper = housekeeping_service.housekeeping_store.hk_criteria.housekeepers.filter(hk => hk.assigned_units.find(unit => unit.id === physical_room.id));
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
        return (index.h("div", { key: 'abe9351da6ff5dbd9f25d3eb82089c53a7ebbb05', class: "sheet-container" }, index.h("ir-title", { key: '53697832d856611b1cab58fb09ddc582e3306c45', class: "title sheet-header px-1", displayContext: "sidebar", label: !this.user ? 'Assingn Units' : `Assignment for ${this.user.name}` }), index.h("section", { key: '9892dac51e23d20a11ed06cd0437cf74698731ba', class: "px-1 sheet-body" }, index.h("table", { key: '67452dac3e231c393c64978b2ae6006cedc1ac51' }, index.h("thead", { key: '41d45701f163f8414a719a9db6070fecb8b6015b' }, index.h("th", { key: '5ef9d81a961d3d2323c14bdf2b8be522a5e46740', class: "sr-only" }, locales_store.locales.entries.Lcz_RoomName), index.h("th", { key: 'a40f11d63d1bd4350e62b7646ec43c40cb2500d4', class: "sr-only" }, locales_store.locales.entries.Lcz_HousekeeperName), index.h("th", { key: 'da2b6f2da4728599f9ad5caa2f602ae700debd33', class: "sr-only" }, locales_store.locales.entries.Lcz_Actions)), index.h("tbody", { key: '713b8c288671c7a0234c970a20580310e92592ff' }, this.renderRooms()))), index.h("div", { key: '139dc99018699eb9941077fce829d50fbd87ca3a', class: "sheet-footer" }, index.h("ir-button", { key: '19c50d4cd46c1c003841045210b06f8f79189e61', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", btn_color: "secondary", text: locales_store.locales.entries.Lcz_Cancel }), index.h("ir-button", { key: '175c317cc2d9aef097df87d9471caf849d0c61df', isLoading: irInterceptor_store.isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), onClickHandler: this.assignUnits.bind(this), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", text: locales_store.locales.entries.Lcz_Confirm }))));
    }
};
IrHkUnassignedUnits.style = IrHkUnassignedUnitsStyle0 + IrHkUnassignedUnitsStyle1;

const irHkUnassignedUnitsDrawerCss = ".sc-ir-hk-unassigned-units-drawer-h{display:block}";
const IrHkUnassignedUnitsDrawerStyle0 = irHkUnassignedUnitsDrawerCss;

const IrHkUnassignedUnitsDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
    }
    open = false;
    user = null;
    closeSideBar;
    formId = 'hk-unassigned-units-drawer-form';
    render() {
        return (index.h("ir-drawer", { key: '6ea6caa51e2b8d103bc322b9abf972277d163f95', label: !this.user ? 'Assingn Units' : `Assignment for ${this.user.name}`, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeSideBar.emit(null);
            }, style: { '--ir-drawer-width': 'max-content' }, open: this.open }, this.open && index.h("ir-hk-unassigned-units-drawer-form", { key: '016b091f4d2da36cd10ce5c91af31b2e70ef63f6', formId: this.formId, user: this.user }), index.h("div", { key: 'c20c3aec218a9c89ea4cb1c26cd2948a04766dc2', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: '2b72572d4b83c2d7d2f03615ab1951937485e90f', "data-drawer": "close", variant: "neutral", size: "medium", appearance: "filled" }, "Cancel"), index.h("ir-custom-button", { key: '3f92479a4f8481227d4e026900da3c3fc734eed8', loading: irInterceptor_store.isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), variant: "brand", type: "submit", form: this.formId, appearance: "accent", size: "medium" }, "Save"))));
    }
};
IrHkUnassignedUnitsDrawer.style = IrHkUnassignedUnitsDrawerStyle0;

const irHkUserDrawerCss = ".sc-ir-hk-user-drawer-h{display:block}";
const IrHkUserDrawerStyle0 = irHkUserDrawerCss;

const IrHkUserDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
    }
    isLoading = false;
    open = false;
    isEdit = false;
    user = null;
    closeSideBar;
    formId = 'hk-user-drawer-form';
    render() {
        return (index.h("ir-drawer", { key: '1ae2feea6197e3c1a0565d4f63bfbe585898a8b0', open: this.open, onDrawerHide: () => {
                this.closeSideBar.emit(null);
            }, label: this.isEdit ? locales_store.locales.entries.Lcz_EditHousekeeperProfile : locales_store.locales.entries.Lcz_CreateHousekeeperProfile }, this.open && (index.h("ir-hk-user-drawer-form", { key: '9b8cba3b2734a80864a578d16e9c4c4784a23473', onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail;
            }, isEdit: this.isEdit, user: this.user, formId: this.formId })), index.h("div", { key: '64a8ac4bd227203d3b8be0ba9af1d4f3924c3da7', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: '5e7871e4e677cb94a7e2ac4fcfcc0da3d4d35b48', "data-drawer": "close", variant: "neutral", size: "medium", appearance: "filled" }, "Cancel"), index.h("ir-custom-button", { key: '0bf428b5a7f4b1718bfdc2b54223639c43a867f8', loading: this.isLoading, variant: "brand", type: "submit", form: this.formId, appearance: "accent", size: "medium" }, "Save"))));
    }
};
IrHkUserDrawer.style = IrHkUserDrawerStyle0;

const irPopoverCss = ":host{display:block;width:100%}*{box-sizing:border-box}.popover-trigger{all:unset;cursor:pointer}.popover-trigger:hover,.popover-trigger:focus{color:#000}";
const IrPopoverStyle0 = irPopoverCss;

const IrPopover = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    /**
     * Content to display inside the popover.
     * Can be plain text or HTML depending on `renderContentAsHtml`.
     */
    content;
    /**
     * Horizontal offset (left) of the popover from its trigger.
     * Used in inline style as `--ir-popover-left`.
     */
    irPopoverLeft = '10px';
    /**
     * Position of the popover relative to the trigger.
     * Options: `'top'`, `'bottom'`, `'left'`, `'right'`, `'auto'`.
     */
    placement = 'auto';
    /**
     * Event that triggers the popover.
     * Options: `'focus'`, `'click'`, `'hover'`.
     */
    trigger = 'focus';
    /**
     * Whether to treat `content` as raw HTML.
     * When true, `content` will be injected with `html: true` in jQuery popover.
     */
    renderContentAsHtml = false;
    /**
     * Internal flag to ensure popover is only initialized once.
     */
    initialized = false;
    /**
     * Reference to the HTML element that triggers the popover.
     */
    popoverTrigger;
    componentDidLoad() {
        if (this.initialized) {
            return;
        }
        this.initializePopover();
    }
    /**
     * Initializes the jQuery popover on the trigger element using configured props.
     */
    initializePopover() {
        $(this.popoverTrigger).popover({
            trigger: this.trigger,
            content: this.content,
            placement: this.placement,
            html: this.renderContentAsHtml,
        });
        this.initialized = true;
    }
    disconnectedCallback() {
        $(this.popoverTrigger).popover('dispose');
    }
    render() {
        return (index.h(index.Host, { key: '26864e054197086140c0185fc2f4b0eb7565b716', style: { '--ir-popover-left': this.irPopoverLeft } }, this.trigger !== 'focus' ? (index.h("p", { ref: el => (this.popoverTrigger = el), class: "popover-title m-0 p-0", style: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                cursor: 'pointer',
            } }, index.h("slot", null))) : (index.h("button", { tabindex: "0", class: "popover-trigger", ref: el => (this.popoverTrigger = el) }, index.h("slot", null)))));
    }
};
IrPopover.style = IrPopoverStyle0;

exports.ir_hk_delete_dialog = IrHkDeleteDialog;
exports.ir_hk_operations_card = IrHkOperationsCard;
exports.ir_hk_team = IrHkTeam;
exports.ir_hk_unassigned_units = IrHkUnassignedUnits;
exports.ir_hk_unassigned_units_drawer = IrHkUnassignedUnitsDrawer;
exports.ir_hk_user_drawer = IrHkUserDrawer;
exports.ir_popover = IrPopover;

//# sourceMappingURL=ir-hk-delete-dialog_7.cjs.entry.js.map