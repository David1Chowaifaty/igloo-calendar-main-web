import ApiClient from "../../../models/ApiClient";
import { HouseKeepingService } from "../../../services/housekeeping/index";
import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatDate } from "../../../utils/date/index";
import { isRtlLanguage } from "../../../utils/direction";
import { realtimeService } from "../../../services/realtime/realtime.service";
import { v4 } from "uuid";
import { t } from "../../../services/locale/t";
import { formatCount } from "../../../utils/number";
import { LocaleController } from "../../../services/locale/locale.controller";
import { SCREEN_TABLES } from "../../../services/locale/screen-tables";
const LANGUAGE_KEY = 'ir_language';
/**
 * Fallbacks for `t()`. This page is opened by housekeeping staff on their own devices, in
 * their own language, so it cannot wait for Setup's `_HOUSEKEEPING` table to be translated —
 * the strings a translated table would carry are inlined here until it is.
 */
const INLINE_LABELS = {
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
function inlineLabels(lang) {
    return INLINE_LABELS[lang?.toLowerCase()] ?? INLINE_LABELS.en;
}
export class IrHkStaffTasks {
    ticket;
    baseurl;
    language = 'en';
    apiClientService = new ApiClient();
    houseKeepingService = new HouseKeepingService();
    // Always use English locale for date keys to avoid Arabic-Indic numerals
    fromDate = moment().locale('en').format('YYYY-MM-DD');
    toDate = moment().add(3, 'days').locale('en').format('YYYY-MM-DD');
    confirmDialog;
    unsubscribeRealtime = null;
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
        this.publishLanguage(this.activeLanguage);
        if (this.baseurl) {
            this.apiClientService.setBaseUrl(this.baseurl);
        }
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
            this.loadLocale(this.activeLanguage);
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
        this.publishLanguage(lang);
        if (this.ticket) {
            this.loadLocale(lang, true);
        }
        this.tasksByDate = this.tasksByDate.map(group => ({
            ...group,
            formattedDate: formatDate(group.date, 'ddd, DD MMM'),
        }));
    }
    /**
     * Standalone page, so it fetches its own strings — after `setApiClient`, since the request
     * needs the ticket. Nothing awaits this: `t()` renders the inline fallback until the store
     * fills, then the component re-renders through the store.
     */
    loadLocale(language, force = false) {
        LocaleController.load({ language, tables: SCREEN_TABLES.hkStaffTasks, force }).catch(() => { });
    }
    /**
     * This component is mounted standalone (staff open it directly), so nothing else has run
     * `fetchLanguage` to publish the active language. Setting `<html lang>` is what routes it to
     * the date layer — see `resolveLocale` in `src/utils/date/ir-date.ts`. Deliberately no
     * `moment.locale()` call: that is a global mutation that would change date output for every
     * other component on the page.
     */
    publishLanguage(lang) {
        const normalized = (lang ?? 'en').toLowerCase();
        document.documentElement.lang = normalized;
        // Direction is a document-level concern - dialogs, drawers and toasts render outside
        // this element's subtree and would keep the page default if `dir` only went on the host.
        document.documentElement.setAttribute('dir', isRtlLanguage(normalized) ? 'rtl' : 'ltr');
    }
    async handleTicketChange(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
            this.loadLocale(this.activeLanguage);
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
                formattedDate: formatDate(dateStr, 'ddd, DD MMM'),
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
                // housekeepers: [{ id: this.connectedHk.HKM_ID }],
                cleaning_frequency: '001',
                dusty_window: '000',
                highlight_window: '000',
            });
            if (tasks) {
                const mapped = tasks.filter(i => !i.hkm_id || i.hkm_id === this.connectedHk.HKM_ID).map((task) => ({ ...task, id: v4() }));
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
        if (this.unsubscribeRealtime) {
            return;
        }
        this.unsubscribeRealtime = realtimeService.subscribe(this.connectedHk.AC_ID, async (msg) => {
            if (msg.reason === 'UNIT_HK_STATUS_CHANGED') {
                if (msg.payload.HKM_ID === this.connectedHk.HKM_ID) {
                    await this.refreshTasks();
                }
            }
            else if (msg.reason === 'HK_TASK_OVERRIDE') {
                const affectsUs = msg.payload.HKM_ID === this.connectedHk.HKM_ID || msg.payload.HKM_ID === null;
                const inRange = msg.payload.DATE >= this.fromDate && msg.payload.DATE <= this.toDate;
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
        this.unsubscribeRealtime?.();
        this.unsubscribeRealtime = null;
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
                    description: comment || t('Lcz_Cleaned', { fallback: 'Cleaned' }),
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
        const i18n = inlineLabels(this.activeLanguage);
        return (h(Host, null, h("ir-hk-staff-tasks-header", { connectedHK: this.connectedHk, language: this.activeLanguage, onLanguageChanged: e => this.applyLanguage(e.detail) }), h("div", { class: "tasks__container" }, this.tasksByDate.map(group => (h("section", { key: group.date, class: `tasks__section${group.isFuture ? ' tasks__section--future' : ''}`, "aria-label": `${t('Lcz_TasksFor', { fallback: 'Tasks for' })} ${group.formattedDate}` }, h("header", { class: "tasks__header" }, h("h3", { class: "tasks__date" }, group.formattedDate), h("wa-badge", { pill: true, style: { fontSize: '0.875rem', fontWeight: 'bold' }, variant: group.isFuture ? 'neutral' : 'brand', appearance: group.isFuture ? 'filled' : 'accent' }, formatCount(group.tasks.length))), group.tasks.length > 0 ? (h("div", { class: "tasks-grid", role: "list" }, group.tasks.map(task => (h("ir-hk-staff-task", { class: "task-card", onTaskClick: e => {
                this.selectedTask = e.detail;
                this.confirmDialog.openModal();
            }, future: group.isFuture, task: task, key: task.id, role: "listitem" }))))) : (h("p", { class: "tasks__empty" }, t('Lcz_NoTasksForThisDay', { fallback: i18n.noTasks }))))))), h("ir-dialog", { class: "hk-staff-tasks__dialog", ref: el => (this.confirmDialog = el), label: this.selectedTask ? `${this.selectedTask.unit.name} — ${t('Lcz_MarkAsCleaned', { fallback: i18n.markAsCleaned })}` : t('Lcz_Confirm', { fallback: i18n.confirm }), onIrDialogAfterHide: () => {
                this.selectedTask = null;
                if (this.anythingToReportString) {
                    this.anythingToReportString = null;
                }
            } }, h("wa-textarea", { value: this.anythingToReportString, onchange: e => (this.anythingToReportString = e.target.value), defaultValue: this.anythingToReportString, placeholder: t('Lcz_AnythingToReport', { fallback: i18n.anythingToReport }), maxlength: 500 }), h("div", { slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { variant: "neutral", appearance: "filled", onClickHandler: () => this.confirmDialog.closeModal() }, t('Lcz_Cancel', { fallback: i18n.cancel })), h("ir-custom-button", { variant: "brand", appearance: "accent", loading: this.isConfirmLoading, onClickHandler: this.handleConfirm.bind(this) }, t('Lcz_Confirm', { fallback: i18n.confirm }))))));
    }
    static get is() { return "ir-hk-staff-tasks"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hk-staff-tasks.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hk-staff-tasks.css"]
        };
    }
    static get properties() {
        return {
            "ticket": {
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
                "attribute": "ticket"
            },
            "baseurl": {
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
                "attribute": "baseurl"
            },
            "language": {
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
                "attribute": "language",
                "defaultValue": "'en'"
            }
        };
    }
    static get states() {
        return {
            "activeLanguage": {},
            "selectedTask": {},
            "connectedHk": {},
            "isLoading": {},
            "isConfirmLoading": {},
            "tasksByDate": {},
            "anythingToReportString": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "language",
                "methodName": "handleLanguageChange"
            }, {
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }];
    }
}
