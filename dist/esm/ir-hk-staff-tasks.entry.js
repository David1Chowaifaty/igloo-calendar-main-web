import { r as registerInstance, g as getElement, h, H as Host } from './index-7e96440e.js';
import { T as Token } from './Token-030c78a9.js';
import { H as HouseKeepingService } from './housekeeping.service-bcba5d10.js';
import { m as moment } from './moment-with-locales-ca51a4f5.js';
import { l as lookup } from './index-7ee206df.js';
import { v as v4 } from './v4-964634d6.js';
import './axios-aa1335b8.js';
import './index-bdcc1750.js';
import './index-f100e9d2.js';
import './_commonjsHelpers-c9e3b764.js';

const irHkStaffTasksCss = ".sc-ir-hk-staff-tasks-h{display:block;background:white;height:100%;min-height:100vh}.tasks__container.sc-ir-hk-staff-tasks{display:flex;flex-direction:column;gap:1.5rem;padding:1rem !important}.tasks__section.sc-ir-hk-staff-tasks{display:flex;flex-direction:column;gap:0.75rem}.tasks-grid.sc-ir-hk-staff-tasks{display:grid;gap:0.625rem}.tasks__count.sc-ir-hk-staff-tasks{font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet)}.tasks__header.sc-ir-hk-staff-tasks{display:flex;align-items:end;padding:0.5rem 0;gap:1rem}.tasks__date.sc-ir-hk-staff-tasks{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-l);margin:0;padding:0}@media (width >= 640px){.tasks-grid.sc-ir-hk-staff-tasks{grid-template-columns:repeat(2, minmax(0, 1fr))}}@media (width >= 1024px){.tasks-grid.sc-ir-hk-staff-tasks{grid-template-columns:repeat(3, minmax(0, 1fr))}}.tasks__empty.sc-ir-hk-staff-tasks{color:var(--wa-color-text-quiet);text-align:center;padding:2rem 0;margin:0}.hk-staff-tasks__dialog.sc-ir-hk-staff-tasks::part(title){text-align:start}";
const IrHkStaffTasksStyle0 = irHkStaffTasksCss;

const LANGUAGE_KEY = 'ir_language';
const localeMap = {
    en: 'en',
    ar: 'ar',
    el: 'el',
};
const translations = {
    en: {
        noTasks: 'No tasks for this day.',
        markAsCleaned: 'Mark as Cleaned',
        confirm: 'Confirm',
        anythingToReport: 'Anything to report?',
        cancel: 'Cancel',
    },
    ar: {
        noTasks: 'لا توجد مهام لهذا اليوم.',
        markAsCleaned: 'تعليم كمنظّف',
        confirm: 'تأكيد',
        anythingToReport: 'هل هناك ما تريد الإبلاغ عنه؟',
        cancel: 'إلغاء',
    },
    el: {
        noTasks: 'Δεν υπάρχουν εργασίες για αυτή την ημέρα.',
        markAsCleaned: 'Σήμανση ως καθαρισμένο',
        confirm: 'Επιβεβαίωση',
        anythingToReport: 'Κάτι να αναφέρετε;',
        cancel: 'Ακύρωση',
    },
};
function toMomentLocale(lang) {
    return localeMap[lang?.toLowerCase()] ?? 'en';
}
function t(lang) {
    return translations[lang?.toLowerCase()] ?? translations.en;
}
const IrHkStaffTasks = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    ticket;
    baseurl;
    language = 'en';
    tokenService = new Token();
    houseKeepingService = new HouseKeepingService();
    // Always use English locale for date keys to avoid Arabic-Indic numerals
    fromDate = moment().locale('en').format('YYYY-MM-DD');
    toDate = moment().add(3, 'days').locale('en').format('YYYY-MM-DD');
    confirmDialog;
    socket;
    hkOverrideTimer = null;
    /** Resolved language: localStorage → language prop → 'en'. @State so render updates on change. */
    activeLanguage = 'en';
    selectedTask = null;
    connectedHk;
    isLoading = true;
    isConfirmLoading = false;
    tasksByDate = [];
    anythingToReportString = null;
    componentWillLoad() {
        // Language resolution: stored preference wins, then prop, then default 'en'
        this.activeLanguage = localStorage.getItem(LANGUAGE_KEY) || this.language;
        moment.locale(toMomentLocale(this.activeLanguage));
        this.el.setAttribute('dir', this.activeLanguage === 'ar' ? 'rtl' : 'ltr');
        if (this.baseurl) {
            this.tokenService.setBaseUrl(this.baseurl);
        }
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.loadTasks();
        }
    }
    handleLanguageChange(newLang) {
        this.applyLanguage(newLang);
    }
    applyLanguage(lang) {
        if (lang === this.activeLanguage) {
            return;
        }
        this.activeLanguage = lang;
        localStorage.setItem(LANGUAGE_KEY, lang);
        moment.locale(toMomentLocale(lang));
        this.el.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        this.tasksByDate = this.tasksByDate.map(group => ({
            ...group,
            // Use locale('en') clone so display format uses active locale correctly
            formattedDate: moment(group.date).format('ddd, DD MMM'),
        }));
    }
    async handleTicketChange(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.loadTasks();
        }
    }
    groupTasks(tasks) {
        const groups = new Map();
        for (const task of tasks) {
            const key = `${task.date}__${task.unit.id}`;
            if (!groups.has(key)) {
                groups.set(key, []);
            }
            groups.get(key).push(task);
        }
        const result = [];
        for (const group of groups.values()) {
            const cln = group.find(t => t.task_type?.code === 'CLN');
            const t1 = group.find(t => t.task_type?.code === 'T1');
            const t2 = group.find(t => t.task_type?.code === 'T2');
            if (cln) {
                const extra = [];
                if (t1)
                    extra.push(t1);
                if (t2)
                    extra.push(t2);
                result.push({ ...cln, extra_task: extra.length > 0 ? extra : null });
            }
            else if (t1) {
                result.push({ ...t1, extra_task: t2 ? [t2] : null });
            }
            else if (t2) {
                result.push({ ...t2, extra_task: null });
            }
        }
        return result;
    }
    groupByDate(tasks) {
        // Always use 'en' locale for date keys/comparisons — Arabic locale formats
        // dates with Arabic-Indic numerals which breaks string matching against API dates.
        const today = moment().locale('en').format('YYYY-MM-DD');
        const dateMap = new Map();
        const cursor = moment(this.fromDate);
        const end = moment(this.toDate);
        while (cursor.isSameOrBefore(end, 'day')) {
            const dateStr = cursor.clone().locale('en').format('YYYY-MM-DD');
            dateMap.set(dateStr, {
                date: dateStr,
                formattedDate: cursor.format('ddd, DD MMM'), // uses active global locale for display
                isFuture: dateStr > today,
                tasks: [],
            });
            cursor.add(1, 'day');
        }
        // Fill in actual tasks
        for (const task of tasks) {
            if (dateMap.has(task.date)) {
                dateMap.get(task.date).tasks.push(task);
            }
        }
        return Array.from(dateMap.values());
    }
    /** Fetches HK data and populates tasksByDate. Does NOT touch isLoading. */
    async loadTasks() {
        try {
            this.isLoading = true;
            this.connectedHk = await this.houseKeepingService.getConnectedHk();
            const { tasks } = await this.houseKeepingService.getHkTasks({
                from_date: this.fromDate,
                to_date: this.toDate,
                property_id: this.connectedHk.AC_ID,
                housekeepers: [{ id: this.connectedHk.HKM_ID }],
                cleaning_frequency: '001',
                dusty_window: '000',
                highlight_window: '000',
            });
            if (tasks) {
                const mapped = tasks.map((task) => ({ ...task, id: v4() }));
                this.tasksByDate = this.groupByDate(this.groupTasks(mapped));
            }
            this.isLoading = false;
            this.connectSocket();
        }
        catch (error) {
            console.error(error);
        }
    }
    connectSocket() {
        if (this.socket) {
            return;
        }
        this.socket = lookup('https://realtime.igloorooms.com/');
        this.socket.on('MSG', async (msg) => {
            const parsed = JSON.parse(msg);
            if (!parsed) {
                return;
            }
            const { REASON, KEY, PAYLOAD } = parsed;
            if (KEY.toString() !== this.connectedHk.AC_ID.toString()) {
                return;
            }
            if (REASON === 'UNIT_HK_STATUS_CHANGED') {
                const result = JSON.parse(PAYLOAD);
                if (result.HKM_ID === this.connectedHk.HKM_ID) {
                    await this.refreshTasks();
                }
            }
            else if (REASON === 'HK_TASK_OVERRIDE') {
                const result = JSON.parse(PAYLOAD);
                // Relevant if assigned to us (HKM_ID matches) or removed from someone (HKM_ID null — could be us)
                const affectsUs = result.HKM_ID === this.connectedHk.HKM_ID || result.HKM_ID === null;
                // Only refresh if the date falls within our displayed window
                const inRange = result.DATE >= this.fromDate && result.DATE <= this.toDate;
                if (affectsUs && inRange) {
                    this.scheduleTaskRefresh();
                }
            }
        });
    }
    disconnectedCallback() {
        if (this.hkOverrideTimer !== null) {
            clearTimeout(this.hkOverrideTimer);
            this.hkOverrideTimer = null;
        }
        this.socket?.disconnect();
        this.socket = null;
    }
    scheduleTaskRefresh() {
        if (this.hkOverrideTimer !== null) {
            clearTimeout(this.hkOverrideTimer);
        }
        this.hkOverrideTimer = setTimeout(async () => {
            this.hkOverrideTimer = null;
            await this.refreshTasks();
        }, 300);
    }
    async handleConfirm() {
        if (!this.selectedTask) {
            return;
        }
        try {
            this.isConfirmLoading = true;
            const comment = this.anythingToReportString?.value?.trim() || '';
            const allTasks = [this.selectedTask, ...(this.selectedTask.extra_task ?? [])];
            await this.houseKeepingService.executeHKAction({
                actions: allTasks.map((task, i) => ({
                    description: comment || 'Cleaned',
                    hkm_id: task.hkm_id === 0 ? null : task.hkm_id,
                    unit_id: task.unit.id,
                    booking_nbr: task.booking_nbr,
                    status: '001',
                    hk_task_type_code: task.task_type.code,
                    comment: i === 0 ? this.anythingToReportString || undefined : undefined,
                })),
            });
            await this.refreshTasks();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isConfirmLoading = false;
            this.confirmDialog.closeModal();
        }
    }
    async refreshTasks() {
        const { tasks } = await this.houseKeepingService.getHkTasks({
            from_date: this.fromDate,
            to_date: this.toDate,
            property_id: this.connectedHk.AC_ID,
            housekeepers: [{ id: this.connectedHk.HKM_ID }],
            cleaning_frequency: '001',
            dusty_window: '000',
            highlight_window: '000',
        });
        if (tasks) {
            const mapped = tasks.map((task) => ({ ...task, id: v4() }));
            this.tasksByDate = this.groupByDate(this.groupTasks(mapped));
        }
    }
    render() {
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        const i18n = t(this.activeLanguage);
        return (h(Host, null, h("ir-hk-staff-tasks-header", { connectedHK: this.connectedHk, language: this.activeLanguage, onLanguageChanged: e => this.applyLanguage(e.detail) }), h("div", { class: "tasks__container" }, this.tasksByDate.map(group => (h("section", { key: group.date, class: "tasks__section", "aria-label": `Tasks for ${group.formattedDate}` }, h("header", { class: "tasks__header" }, h("h3", { class: "tasks__date" }, group.formattedDate), h("wa-badge", { pill: true, style: { fontSize: '0.875rem', fontWeight: 'bold' }, variant: group.isFuture ? 'neutral' : 'brand', appearance: group.isFuture ? 'filled' : 'accent' }, group.tasks.length)), group.tasks.length > 0 ? (h("div", { class: "tasks-grid", role: "list" }, group.tasks.map(task => (h("ir-hk-staff-task", { onTaskClick: e => {
                this.selectedTask = e.detail;
                this.confirmDialog.openModal();
            }, future: group.isFuture, task: task, key: task.id, role: "listitem" }))))) : (h("p", { class: "tasks__empty" }, i18n.noTasks)))))), h("ir-dialog", { class: "hk-staff-tasks__dialog", ref: el => (this.confirmDialog = el), label: this.selectedTask ? `${this.selectedTask.unit.name} — ${i18n.markAsCleaned}` : i18n.confirm, onIrDialogAfterHide: () => {
                this.selectedTask = null;
                if (this.anythingToReportString) {
                    this.anythingToReportString = null;
                }
            } }, h("wa-textarea", { value: this.anythingToReportString, onchange: e => (this.anythingToReportString = e.target.value), defaultValue: this.anythingToReportString, placeholder: i18n.anythingToReport, maxlength: 500 }), h("div", { slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { variant: "neutral", appearance: "filled", onClickHandler: () => this.confirmDialog.closeModal() }, i18n.cancel), h("ir-custom-button", { variant: "brand", appearance: "accent", loading: this.isConfirmLoading, onClickHandler: this.handleConfirm.bind(this) }, i18n.confirm)))));
    }
    static get watchers() { return {
        "language": ["handleLanguageChange"],
        "ticket": ["handleTicketChange"]
    }; }
};
IrHkStaffTasks.style = IrHkStaffTasksStyle0;

export { IrHkStaffTasks as ir_hk_staff_tasks };

//# sourceMappingURL=ir-hk-staff-tasks.entry.js.map