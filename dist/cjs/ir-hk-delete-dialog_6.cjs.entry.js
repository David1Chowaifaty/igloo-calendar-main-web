'use strict';

var index = require('./index-DYQrLNin.js');
var housekeeping_service = require('./housekeeping.service-DUTTsbC7.js');
var locales_store = require('./locales.store-6IlEbCjL.js');
var room_service = require('./room.service-BDxvptKu.js');
var index$1 = require('./index-CBGJ2sL1.js');
var calendarData = require('./calendar-data-R3j-WBLW.js');
var irInterceptor_store = require('./ir-interceptor.store-DCFOyFp0.js');
var utils = require('./utils-DgT4kKsD.js');
require('./index-CLqkDPTC.js');
require('./index-C59pxKl1.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./moment-CdViwxPQ.js');
require('./type-Dy9pVS4V.js');

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
        return (index.h("ir-dialog", { lightDismiss: false, label: label, open: this.isOpen, onIrDialogHide: () => this.closeModal() }, !hasAssignedUnits && (index.h("p", { class: "delete-modal__description" }, "Are you sure you want to permanently delete ", index.h("strong", null, this.user.name), "? This action cannot be undone.")), hasAssignedUnits && (index.h("wa-select", { size: "s", defaultValue: this.selectedId, value: this.selectedId, onchange: e => (this.selectedId = e.target.value) }, index.h("wa-option", { value: "" }, locales_store.locales.entries.Lcz_nobody), housekeeping_service.housekeeping_store.hk_criteria.housekeepers
            .filter(hk => hk.id !== this.user.id)
            .map(m => ({ value: m.id.toString(), text: m.name }))
            .sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase()))
            .map(m => (index.h("wa-option", { key: m.value, value: m.value }, m.text))))), index.h("div", { slot: "footer", class: "delete-modal__footer" }, index.h("ir-custom-button", { variant: "neutral", appearance: "filled", size: "m", onClickHandler: () => this.closeModal() }, locales_store.locales.entries.Lcz_Cancel), index.h("ir-custom-button", { variant: "danger", appearance: "accent", size: "m", loading: this.isConfirming, onClickHandler: () => this.handleConfirm() }, locales_store.locales.entries.Lcz_Confirm))));
    }
};
IrHkDeleteDialog.style = irHkDeleteDialogCss();

const irHkOperationsCardCss = () => `.sc-ir-hk-operations-card-h{display:block}.ops-header__title.sc-ir-hk-operations-card{margin:0;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.ops-header__subtitle.sc-ir-hk-operations-card{display:block;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet);margin-top:0.125rem}.ops-settings.sc-ir-hk-operations-card{display:flex;flex-direction:column;gap:0.75rem;margin-bottom:1.25rem}.ops-setting-item.sc-ir-hk-operations-card{display:grid;grid-template-columns:2rem 1fr;align-items:center;gap:0.5rem 0.75rem}.ops-setting-item__icon.sc-ir-hk-operations-card{grid-column:1;grid-row:1;display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;border-radius:0.375rem;background:var(--wa-color-neutral-fill-quiet);color:var(--wa-color-neutral-on-quiet);font-size:0.875rem}.ops-setting-item__info.sc-ir-hk-operations-card{grid-column:2;grid-row:1;display:flex;flex-direction:column;gap:0.125rem;min-width:0}.ops-setting-item__title.sc-ir-hk-operations-card{font-size:0.875rem;font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.ops-setting-item__subtitle.sc-ir-hk-operations-card{font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}.ops-setting-item__controls.sc-ir-hk-operations-card{grid-column:2;grid-row:2}.ops-setting-item__controls.sc-ir-hk-operations-card wa-select.sc-ir-hk-operations-card{width:100%;max-width:330px}@media (min-width: 521px){.ops-setting-item.sc-ir-hk-operations-card{display:flex;grid-template-columns:none;grid-template-rows:none;align-items:center;gap:0.5rem 0.75rem}.ops-setting-item__icon.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;flex-shrink:0}.ops-setting-item__info.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;flex-shrink:0}.ops-setting-item__controls.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;flex-shrink:0}.ops-setting-item__controls.sc-ir-hk-operations-card wa-select.sc-ir-hk-operations-card{width:200px;max-width:none}}.ops-tasks__header.sc-ir-hk-operations-card{margin-bottom:0.75rem}.ops-tasks__title.sc-ir-hk-operations-card{margin:0;margin:0;font-size:0.875rem;font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.ops-tasks__subtitle.sc-ir-hk-operations-card{margin:0.125rem 0 0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}.ops-tasks__list.sc-ir-hk-operations-card{display:flex;flex-direction:column;gap:0.5rem}.ops-task-row.sc-ir-hk-operations-card{display:grid;grid-template-columns:1.5rem 1fr 1.75rem;align-items:center;gap:0.5rem 0.75rem}.ops-task-badge.sc-ir-hk-operations-card{grid-column:1;grid-row:1;display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem;border-radius:50%;background:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-text-loud);font-size:0.6875rem;font-weight:700}.ops-task-badge--locked.sc-ir-hk-operations-card{background:var(--wa-color-neutral-fill-quiet);color:var(--wa-color-neutral-text-quiet);font-size:0.75rem}.ops-task-locked-label.sc-ir-hk-operations-card{grid-column:2;grid-row:1;font-size:0.875rem;font-weight:500;color:var(--wa-color-neutral-text-loud);min-width:0}.ops-task-input.sc-ir-hk-operations-card{grid-column:2;grid-row:1;width:100%}.ops-task-select.sc-ir-hk-operations-card{grid-column:2;grid-row:2;width:100%}.ops-task-delete.sc-ir-hk-operations-card{grid-column:3;grid-row:1;color:var(--wa-color-neutral-text-quiet);font-size:0.75rem}.ops-task-row--locked.sc-ir-hk-operations-card{grid-template-columns:1.5rem 1fr 1.75rem;opacity:0.85}.ir-dialog__footer.sc-ir-hk-operations-card{display:flex;justify-content:flex-end;gap:0.5rem}@media (min-width: 521px){.ops-task-select.sc-ir-hk-operations-card{grid-column:2;grid-row:2;width:100%;max-width:200px}.ops-task-row.sc-ir-hk-operations-card{display:flex;grid-template-columns:none;grid-template-rows:none;align-items:center;gap:0.5rem}.ops-task-badge.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;flex-shrink:0}.ops-task-input.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;width:200px;flex-shrink:0}.ops-task-select.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;width:200px;max-width:none;flex-shrink:0}.ops-task-delete.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;margin-left:auto}.ops-task-row--locked.sc-ir-hk-operations-card{grid-template-columns:none}.ops-task-locked-label.sc-ir-hk-operations-card{grid-column:unset;grid-row:unset;min-width:200px;flex-shrink:0}.ops-task-row--locked.sc-ir-hk-operations-card .ops-task-select.sc-ir-hk-operations-card{grid-column:3;grid-row:1}}`;

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
    propertyService = new index$1.PropertyService();
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
            utils.showToast({ position: 'top-right', title: 'Saved Successfully', description: '', type: 'success' });
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
            utils.showToast({ position: 'top-right', title: 'Saved Successfully', description: '', type: 'success' });
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
            utils.showToast({ position: 'top-right', title: 'Saved Successfully', description: '', type: 'success' });
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        return (index.h(index.Host, { key: '05c76cd7fa6a5958c9e60b0ef698a62f7225e67a' }, index.h("wa-card", { key: '1a837ca6041cc6d3cb5887def7544187de0b09ac', class: "" }, index.h("div", { key: '1101efddc8ac522e5104a977f9b87a440dc20091', slot: "header" }, index.h("span", { key: '1813f75e7a4103a19368a80a5da1620e50dcc791', class: "ops-header__title" }, "Operations Settings")), index.h("div", { key: '8f1d7363fd2f51e7296dc9f7f44587f49f6bc6bf', class: "ops-settings" }, index.h("div", { key: 'a1aff72889951e48e81a592dc948010e5e345c94', class: "ops-setting-item" }, index.h("div", { key: '4d924d82b54cfd7079ceb714609e136fc5d26e8e', class: "ops-setting-item__info" }, index.h("span", { key: '8783687fb6fb134084611d88d9fa773a24bac41b', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), index.h("span", { key: '30eceb2c12e0e062d780e22466fc5aa5daf08baf', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), index.h("div", { key: '9badefc15e4c23b29eb5afb6580b4bf9e11607c0', class: "ops-setting-item__controls" }, index.h("wa-select", { key: 'c9650f23510aee043035dcdf6b9f81b6512b7104', size: "s", style: { minWidth: '260px' }, value: calendarData.calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendarData.calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, index.h("wa-option", { key: '9ebc91b310ceca9b48592545be8f6bdd3fc76b90', value: "auto" }, locales_store.locales.entries.Lcz_YesAsPerPropertyPolicy), index.h("wa-option", { key: 'a495c1e65e296df6678c368d52afdc871395e58f', value: "manual" }, locales_store.locales.entries.Lcz_NoIWillDoItManually))))), index.h("div", { key: 'bd3f3530a07180f19e3621093bbf49af6fe1932d', class: "ops-tasks__header" }, index.h("p", { key: '49ede0f7ec34584f4c3e5c93666852b5e16bc72c', class: "ops-tasks__title" }, "Recurring Tasks"), index.h("p", { key: '464364822ad3100e1550b7fd14d89e6be01b01c8', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), index.h("div", { key: '7ffefbe6a68649908f49a3d8db0a0919acdc90cc', class: "ops-tasks__list" }, index.h("div", { key: '7accdf875227c9a459773ac469e723ba70018ec5', class: "ops-task-row ops-task-row--locked" }, index.h("wa-badge", { key: '86e8d37aa5bc3ff33bef907ee9aded413de2a5a9', variant: "danger", appearance: "filled" }, "CL"), index.h("span", { key: '6b853166fba21b46023383d28121d4abe435e5f4', class: "ops-task-locked-label" }, "Cleaning"), index.h("wa-select", { key: 'd3e0df2ce60a930782d3fd2a629eaaf3cca96c1b', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_service.housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (index.h("wa-option", { key: v.code, value: v.code }, v.description)))), index.h("span", { key: '6628f8017aa6207c894bdaf47957acbc60a06713' })), this.hkTasks.map((task, i) => (index.h("div", { key: i, class: "ops-task-row" }, index.h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), index.h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
                const updated = [...this.hkTasks];
                updated[i] = { ...updated[i], name: e.target.value };
                this.hkTasks = updated;
                this.saveHkTasks();
            } }), index.h("wa-select", { class: "ops-task-select", size: "s", value: task.frequency, defaultValue: task.frequency, placeholder: "Frequency", onchange: (e) => {
                const updated = [...this.hkTasks];
                updated[i] = { ...updated[i], frequency: e.target.value };
                this.hkTasks = updated;
                this.saveHkTasks();
            } }, this.frequencies.map(f => (index.h("wa-option", { key: f.CODE_NAME, value: f.CODE_NAME }, f.CODE_VALUE_EN)))), index.h("wa-icon-button", { class: "ops-task-delete", name: "xmark", label: "Remove task", onClick: () => {
                const updated = [...this.hkTasks];
                updated[i] = { name: '', frequency: '' };
                this.hkTasks = updated;
                this.saveHkTasks();
            } })))))), index.h("ir-dialog", { key: 'e080102d0c5bbfde77be14d4ffedd276180f372a', ref: el => (this.dialog = el), label: locales_store.locales.entries.Lcz_Confirmation, lightDismiss: false }, index.h("span", { key: '0d0bdc7757766c03d8c4d06144a2bb628d9c17c7' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), index.h("div", { key: 'ad9fc911ac647f1c839efc443db13f912f1445ba', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '77f4379cf1928265e55d3ee90ca19c21be058eb6', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendarData.calendar_data.cleaning_frequency ?? housekeeping_service.housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales_store.locales.entries.Lcz_Cancel), index.h("ir-custom-button", { key: 'e47d39c2be68c5d52c4400d81b84f6de248db779', size: "m", appearance: "filled", variant: "brand", loading: irInterceptor_store.isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales_store.locales.entries.Lcz_Confirm)))));
    }
};
IrHkOperationsCard.style = irHkOperationsCardCss();

const irHkTeamCss = () => `.icons-container.sc-ir-hk-team{display:flex;align-items:center;justify-content:end}.text-center.sc-ir-hk-team{text-align:center !important}.hk-team-header.sc-ir-hk-team{display:flex;flex-direction:column;gap:0.25rem}.hk-team__card.sc-ir-hk-team::part(body),.hk-team__card.sc-ir-hk-team [part~="body"]{padding:0.5rem}.hk-team-header__top.sc-ir-hk-team{display:flex;flex-direction:column;gap:0.5rem}.hk-team-header__title.sc-ir-hk-team{margin:0;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.hk-team-header__stats.sc-ir-hk-team{display:flex;align-items:center;flex-wrap:wrap;gap:0.75rem}.hk-team-header__stat.sc-ir-hk-team{margin:0;font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet)}.hk-team-header__stat--bold.sc-ir-hk-team{font-weight:600;color:var(--wa-color-text-normal)}.hk-team-header__unassigned-btn.sc-ir-hk-team::part(base),.hk-team-header__unassigned-btn.sc-ir-hk-team [part~="base"]{height:auto;padding:0.125rem 0.5rem}.hk-team-header__hint.sc-ir-hk-team{margin:0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}@media (min-width: 640px){.hk-team-header__top.sc-ir-hk-team{flex-direction:row;align-items:center;justify-content:space-between}}`;

const tableCss = () => `.sc-ir-hk-team-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-hk-team{overflow-x:auto}.table--container.sc-ir-hk-team,.data-table.sc-ir-hk-team{height:100%}.ir-table-row.sc-ir-hk-team td.sc-ir-hk-team{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-hk-team td.sc-ir-hk-team{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-hk-team tbody.sc-ir-hk-team tr.sc-ir-hk-team:last-child>td.sc-ir-hk-team{border-bottom:0 !important}.table.sc-ir-hk-team thead.sc-ir-hk-team th.sc-ir-hk-team{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-hk-team thead.sc-ir-hk-team th.sc-ir-hk-team{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-hk-team{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-hk-team,.ir-table-row.sc-ir-hk-team{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-hk-team{text-transform:capitalize;cursor:pointer}.table.sc-ir-hk-team thead.sc-ir-hk-team th.sortable.sc-ir-hk-team{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-hk-team thead.sc-ir-hk-team th.sortable.sc-ir-hk-team:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-hk-team thead.sc-ir-hk-team th.sortable.sc-ir-hk-team:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-hk-team:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-hk-team svg.sc-ir-hk-team{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-hk-team:hover td.sc-ir-hk-team{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-hk-team:hover td.sc-ir-hk-team{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-hk-team:active td.sc-ir-hk-team{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-hk-team td.sc-ir-hk-team{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-hk-team:hover td.sc-ir-hk-team{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-hk-team:active td.sc-ir-hk-team{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-hk-team .empty-row.sc-ir-hk-team{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-hk-team{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-hk-team{position:sticky !important;right:0;background-color:white}`;

const IrHkTeam = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    currentTrigger = null;
    deletionTimout;
    renderAssignedUnits(hk) {
        if (hk.assigned_units.length === 0) {
            return (index.h("span", null, "0 -", ' ', index.h("wa-button", { size: "s", variant: "brand", appearance: "outlined", class: "hk-team-header__unassigned-btn", onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: hk }) }, locales_store.locales.entries.Lcz_Assign)));
        }
        return (index.h("span", null, hk.assigned_units.length, " -", ' ', index.h("wa-button", { class: "hk-team-header__unassigned-btn", size: "s", variant: "brand", appearance: "outlined", onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: hk }) }, 'Edit')));
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
        return (index.h("wa-card", { class: "hk-team__card" }, index.h("section", { slot: "header", class: "hk-team-header" }, index.h("div", { class: "hk-team-header__top" }, index.h("p", { class: "hk-team-header__title" }, locales_store.locales.entries.Lcz_HousekeepingTeam), index.h("div", { class: "hk-team-header__stats" }, index.h("p", { class: "hk-team-header__stat hk-team-header__stat--bold" }, total, " ", locales_store.locales.entries.Lcz_TotalUnits), index.h("p", { class: "hk-team-header__stat" }, assigned, " ", index.h("span", null, locales_store.locales.entries.Lcz_Assigned)), un_assigned > 0 && (index.h("wa-button", { onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: null }), size: "s", class: "hk-team-header__unassigned-btn", variant: "brand", appearance: "outlined" }, un_assigned, " ", locales_store.locales.entries.Lcz_Unassigned)))), index.h("p", { class: "hk-team-header__hint" }, locales_store.locales.entries.Lcz_AsAnOption)), index.h("section", { class: "table-responsive" }, index.h("table", { class: "table data-table" }, index.h("thead", null, index.h("tr", null, index.h("th", { class: "text-left" }, locales_store.locales.entries.Lcz_Name), index.h("th", null, locales_store.locales.entries.Lcz_Mobile), index.h("th", null, locales_store.locales.entries.Lcz_Username), index.h("th", null, locales_store.locales.entries.Lcz_UnitsAssigned), index.h("th", { class: 'text-left' }, index.h("div", { class: "d-flex justify-content-center" }, index.h("ir-custom-button", { onClickHandler: () => {
                this.currentTrigger = {
                    type: 'user',
                    isEdit: false,
                    user: null,
                };
            }, variant: "neutral", appearance: "plain" }, index.h("wa-icon", { name: "plus", style: { fontSize: '1.2rem' } })))))), index.h("tbody", null, housekeeping_service.housekeeping_store.hk_criteria.housekeepers.map(hk => (index.h("tr", { key: hk.id, class: "ir-table-row" }, index.h("td", { class: "text-left" }, index.h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, hk.name?.length > 25 ? (index.h(index.Fragment, null, index.h("wa-tooltip", { for: hk.id + '_name' }, hk.name), index.h("span", { id: hk.id + '_name' }, hk.name.slice(0, 25), "..."))) : (hk.name), hk.note && (
        // <ir-popover content={hk.note}>
        //   <ir-button variant="icon" icon_name="note" data-toggle="tooltip" data-placement="bottom" title="Click to view note"></ir-button>
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

const irHkUnassignedUnitsCss = () => `.sc-ir-hk-unassigned-units-h{display:block;--ir-root-active-color:#1e9ff2;--ir-root-inactive-color:#d2d2d2}table.sc-ir-hk-unassigned-units{width:100%}td.sc-ir-hk-unassigned-units{padding-top:3px;padding-bottom:3px}td.sc-ir-hk-unassigned-units:last-child{text-align:end}.title.sc-ir-hk-unassigned-units{min-width:230px !important}`;

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
        return (index.h("div", { key: 'c3ddfac6e11155399145abd86868cec69598291d', class: "sheet-container" }, index.h("ir-title", { key: '437c77b96d545f38407c57c853da40c5000431e7', class: "title sheet-header px-1", displayContext: "sidebar", label: !this.user ? 'Assingn Units' : `Assignment for ${this.user.name}` }), index.h("section", { key: 'ce0c6dfd5fcc421f56d4b0996208de6d1a51c4d3', class: "px-1 sheet-body" }, index.h("table", { key: 'd6eb814ba4b0ca3187ce8b0ea84731eccb9a553d' }, index.h("thead", { key: 'e09eaa6adfd87addc6adadd5cc0c5500f566f559' }, index.h("th", { key: '837d699a3cc45751b725638e6c2b93b46514c9e5', class: "sr-only" }, locales_store.locales.entries.Lcz_RoomName), index.h("th", { key: 'c1b0d8305486aa3e699caa3f3024303a03ac4715', class: "sr-only" }, locales_store.locales.entries.Lcz_HousekeeperName), index.h("th", { key: '3a6a4d5737a43b79733be950f53b333b389c7515', class: "sr-only" }, locales_store.locales.entries.Lcz_Actions)), index.h("tbody", { key: '3a86c883071aefce5b44590808b6e273b08d9953' }, this.renderRooms()))), index.h("div", { key: '1e1ea707a84b7ac3929a595dffc2b40306b82fe5', class: "sheet-footer" }, index.h("ir-button", { key: 'b3fe1f315686023d541b2c3ea7162c381125f536', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", btn_color: "secondary", text: locales_store.locales.entries.Lcz_Cancel }), index.h("ir-button", { key: '55a4ef554ce108916b0c247091027573d34cb1b6', isLoading: irInterceptor_store.isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), onClickHandler: this.assignUnits.bind(this), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", text: locales_store.locales.entries.Lcz_Confirm }))));
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
        return (index.h("ir-drawer", { key: '73a41c11061ccd10b663fb72c671113730dee19b', label: !this.user ? 'Assingn Units' : `Assignment for ${this.user.name}`, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeSideBar.emit(null);
            }, style: { '--ir-drawer-width': 'max-content' }, open: this.open }, this.open && index.h("ir-hk-unassigned-units-drawer-form", { key: '9173142973b8455a59523403312aaad8202f0ab4', formId: this.formId, user: this.user }), index.h("div", { key: 'a4191b94ee9e20eb19a50f5a76fae437ca5d9b6d', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: '030675a74b76939efa44c582414064ac1f774955', "data-drawer": "close", variant: "neutral", size: "m", appearance: "filled" }, "Cancel"), index.h("ir-custom-button", { key: 'd69fd48337fc2454decca95fd56cfa7fe35317d3', loading: irInterceptor_store.isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), variant: "brand", type: "submit", form: this.formId, appearance: "accent", size: "m" }, "Save"))));
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
        return (index.h("ir-drawer", { key: 'f6a254cbb6ee200f506a8b2e310aff37277373aa', open: this.open, onDrawerHide: () => {
                this.closeSideBar.emit(null);
            }, label: this.isEdit ? locales_store.locales.entries.Lcz_EditHousekeeperProfile : locales_store.locales.entries.Lcz_CreateHousekeeperProfile }, this.open && (index.h("ir-hk-user-drawer-form", { key: '332ee8a49804352d9fe484169181373124713d84', onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail;
            }, isEdit: this.isEdit, user: this.user, formId: this.formId })), index.h("div", { key: 'c1a97c927e750c176c4e562c78aaea96011b976d', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: 'f36df3d42b767204b3e8b956ce8191f39e25f2af', "data-drawer": "close", variant: "neutral", size: "m", appearance: "filled" }, "Cancel"), index.h("ir-custom-button", { key: '3879c6ad0a2ccb50a406ddaa38b3ae3da0e7cbe1', loading: this.isLoading, variant: "brand", type: "submit", form: this.formId, appearance: "accent", size: "m" }, "Save"))));
    }
};
IrHkUserDrawer.style = irHkUserDrawerCss();

exports.ir_hk_delete_dialog = IrHkDeleteDialog;
exports.ir_hk_operations_card = IrHkOperationsCard;
exports.ir_hk_team = IrHkTeam;
exports.ir_hk_unassigned_units = IrHkUnassignedUnits;
exports.ir_hk_unassigned_units_drawer = IrHkUnassignedUnitsDrawer;
exports.ir_hk_user_drawer = IrHkUserDrawer;
