import { r as registerInstance, h, F as Fragment, H as Host } from './index-CeHdrJeH.js';
import { A as ApiClient } from './ApiClient-4jHvz1N4.js';
import { L as LanguageSync } from './language-sync-Cu3Vadzf.js';
import { S as SCREEN_TABLES, L as LocaleController } from './locale.controller-CIFRcTwV.js';
import { t } from './t-BVYK64UG.js';
import { P as PropertyService } from './index-BUMvtt39.js';
import { R as RoomService } from './room.service-BLPKpVpI.js';
import { d as formatPercent, f as formatAmount, c as formatNumber } from './number-1PczWhnt.js';
import { f as showToast } from './utils-DsZQyztt.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { e as formatDateRange } from './ir-date-CASx9LWM.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './locale-scope-CapRuPkM.js';
import './language-observer-CHgzsZkY.js';
import './types-CyZFzmvF.js';
import './types-CB66a07H.js';
import './calendar-data-9xOw4JU4.js';
import './commonSchemas-Cx9w9d8l.js';
import './booking.dto-B554ToUQ.js';
import './type-DjfVZqvs.js';
import './calendar-dates-D3hVfsrC.js';

/** Weekday values in display order, using JS `day()` numbering (0 = Sunday). */
const WEEKDAYS = [1, 2, 3, 4, 5, 6, 0];
const WEEKDAY_FALLBACK = 'M, T, W, Th, Fr, Sa, Su';
/** Localized short weekday labels, in {@link WEEKDAYS} order — the same source `ir-weekday-selector` reads. */
function weekdayLabels() {
    const labels = t('Lcz_WeekdayAbbreviations', { fallback: WEEKDAY_FALLBACK })
        .split(',')
        .map(s => s.trim());
    const fallback = WEEKDAY_FALLBACK.split(', ');
    return WEEKDAYS.map((_, i) => labels[i] || fallback[i]);
}
/** Built on call (not at import time) so the labels follow the loaded locale. */
function getAdjustments() {
    return [
        { value: 'none', label: t('Lcz_UseCurrentRates', { fallback: 'Use current rates' }) },
        { value: 'inc-fixed', label: t('Lcz_IncreaseRatesByFixedSum', { fallback: 'Increase rates by a fixed sum' }) },
        { value: 'inc-pct', label: t('Lcz_IncreaseRatesByPercentage', { fallback: 'Increase rates by a percentage' }) },
        { value: 'dec-pct', label: t('Lcz_DecreaseRatesByPercentage', { fallback: 'Decrease rates by a percentage' }) },
        { value: 'dec-fixed', label: t('Lcz_DecreaseRatesByFixedSum', { fallback: 'Decrease rates by a fixed sum' }) },
    ];
}
const DATE_FORMAT = 'YYYY-MM-DD';
/** Active room types with their active base (non-derived) rate plans; room types without any are dropped. */
function toRoomTypeOptions(roomTypes) {
    return (roomTypes ?? [])
        .filter(rt => rt.is_active)
        .map(rt => ({
        id: rt.id,
        name: rt.name,
        ratePlans: (rt.rateplans ?? []).filter(rp => rp.is_active && !rp.is_derived).map(rp => ({ id: rp.id, label: rp.short_name || rp.name })),
    }))
        .filter(rt => rt.ratePlans.length > 0);
}
function parseSourceOption(option) {
    const [kind, year] = option.split('-');
    return { kind: kind, year: Number(year) };
}
function yearBounds(year) {
    return { from: `${year}-01-01`, to: `${year}-12-31` };
}
function isPercentage(adjustment) {
    return adjustment === 'inc-pct' || adjustment === 'dec-pct';
}
function isDecrease(adjustment) {
    return adjustment === 'dec-pct' || adjustment === 'dec-fixed';
}
/** Shifts a `YYYY-MM-DD` date to the same calendar day one year later. */
function toTargetDate(date) {
    return hooks(date, DATE_FORMAT).add(1, 'year').format(DATE_FORMAT);
}
function validateCloneRates(state) {
    const errors = {};
    if (!state.fromDate || !state.toDate) {
        errors.dates = t('Lcz_SelectStartAndEndDate', { fallback: 'Please select a start and end date.' });
    }
    else if (hooks(state.fromDate, DATE_FORMAT).isAfter(hooks(state.toDate, DATE_FORMAT), 'day')) {
        errors.dates = t('Lcz_StartDateBeforeEndDate', { fallback: 'The start date must be before the end date.' });
    }
    if (state.weekdays.length === 0) {
        errors.weekdays = t('Lcz_SelectAtLeastOneWeekday', { fallback: 'Please select at least one day of the week.' });
    }
    if (state.ratePlanIds.length === 0) {
        errors.ratePlans = t('Lcz_SelectAtLeastOneRatePlan', { fallback: 'Please select at least one rate plan.' });
    }
    if (state.adjustment !== 'none') {
        const amount = Number(state.amount);
        if (state.amount.trim() === '' || !Number.isFinite(amount) || amount <= 0) {
            errors.amount = t('Lcz_AmountGreaterThanZero', { fallback: 'Please enter an amount greater than 0.' });
        }
        else if (state.adjustment === 'dec-pct' && amount >= 100) {
            errors.amount = t('Lcz_PercentageLessThan100', { fallback: 'The percentage must be less than 100.' });
        }
    }
    return errors;
}
function buildCloneRatesPayload(propertyId, state) {
    const amount = state.adjustment === 'none' ? null : Number(state.amount) * (isDecrease(state.adjustment) ? -1 : 1);
    return {
        AC_ID: propertyId,
        SOURCE_FROM_DATE: state.fromDate,
        SOURCE_TO_DATE: state.toDate,
        TARGET_FROM_DATE: toTargetDate(state.fromDate),
        VALUE_TO_ADD: isPercentage(state.adjustment) ? null : amount,
        PERCENTAGE_TO_ADD: isPercentage(state.adjustment) ? amount : null,
        // The backend reads SELECTED_ROOM_TYPE_IDS as rate plan ids.
        SELECTED_ROOM_TYPE_IDS: [...state.ratePlanIds],
        DAYS_OF_WEEK: [...state.weekdays].sort((a, b) => a - b),
        IS_COPY_MLS: state.copyMinStay,
    };
}
function formatReviewRange(from, to) {
    return formatDateRange(from, to, 'MMM D, YYYY');
}
function formatAdjustment(adjustment, amount, currencySymbol) {
    if (adjustment === 'none')
        return t('Lcz_UseCurrentRates', { fallback: 'Use current rates' });
    const sign = isDecrease(adjustment) ? '−' : '+';
    const value = Number(amount);
    return isPercentage(adjustment) ? `${sign} ${formatPercent(value, { maximumFractionDigits: 2 })}` : `${sign} ${formatAmount(currencySymbol, value)}`;
}
/** Human-readable summary of the form, shown in the review dialog before confirming. */
function buildReviewRows(state, roomTypes, currencySymbol) {
    const selected = new Set(state.ratePlanIds);
    const totalRatePlans = roomTypes.reduce((sum, rt) => sum + rt.ratePlans.length, 0);
    const ratePlans = selected.size === totalRatePlans
        ? t('Lcz_AllRatePlansForAllRoomTypes', { fallback: 'All rate plans for all room types' })
        : roomTypes
            .map(rt => ({ name: rt.name, plans: rt.ratePlans.filter(rp => selected.has(rp.id)).map(rp => rp.label) }))
            .filter(rt => rt.plans.length > 0)
            .map(rt => `${rt.name} (${rt.plans.join(', ')})`)
            .join('; ');
    const labels = weekdayLabels();
    const days = WEEKDAYS.map((value, i) => (state.weekdays.includes(value) ? labels[i] : null)).filter(Boolean);
    return [
        { label: t('Lcz_CopyRatesFrom', { fallback: 'Copy rates from' }), value: formatReviewRange(state.fromDate, state.toDate) },
        { label: t('Lcz_CopyRatesTo', { fallback: 'Copy rates to' }), value: formatReviewRange(toTargetDate(state.fromDate), toTargetDate(state.toDate)) },
        { label: t('Lcz_DaysOfTheWeek', { fallback: 'Days of the week' }), value: days.length === WEEKDAYS.length ? t('Lcz_AllDays', { fallback: 'All days' }) : days.join(', ') },
        { label: t('Lcz_RatePlans', { fallback: 'Rate plans' }), value: ratePlans },
        { label: t('Lcz_RateChanges', { fallback: 'Rate changes' }), value: formatAdjustment(state.adjustment, state.amount, currencySymbol) },
        {
            label: t('Lcz_CopyMinStayRestrictions', { fallback: 'Copy minimum stay restrictions' }),
            value: state.copyMinStay ? t('Lcz_Yes', { fallback: 'Yes' }) : t('Lcz_No', { fallback: 'No' }),
        },
    ];
}

const irCloneRatesCss = () => `.sc-ir-clone-rates-h{display:block;--clone-rates-ease-out:cubic-bezier(0.23, 1, 0.32, 1)}.clone-rates__sections.sc-ir-clone-rates{display:flex;flex-direction:column;gap:var(--wa-space-l);max-inline-size:48rem}.clone-rates__card.sc-ir-clone-rates{margin-bottom:var(--wa-space-s)}.clone-rates__card.sc-ir-clone-rates::part(body),.clone-rates__card.sc-ir-clone-rates [part~="body"]{padding:0;display:flex;flex-direction:column;gap:var(--wa-space-s)}.clone-rates__divider.sc-ir-clone-rates{--spacing:0}ir-weekday-selector.clone-rates__weekdays.sc-ir-clone-rates{margin-block:0 !important;flex-wrap:wrap}.clone-rates__question.sc-ir-clone-rates{margin:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-m)}.clone-rates__room-types.sc-ir-clone-rates{display:flex;flex-direction:column;gap:var(--wa-space-l)}.clone-rates__room-type.sc-ir-clone-rates{display:flex;flex-direction:column;gap:var(--wa-space-s)}.clone-rates__room-type-name.sc-ir-clone-rates{margin:0;font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold);color:var(--wa-color-text-quiet)}.clone-rates__rate-plans.sc-ir-clone-rates{display:grid;grid-template-columns:repeat(auto-fill, minmax(11rem, 1fr));gap:var(--wa-space-m) var(--wa-space-l);padding-inline-start:calc(var(--wa-form-control-toggle-size) + 0.5em)}.clone-rates__amount.sc-ir-clone-rates{display:flex;flex-direction:column;gap:var(--wa-space-xs)}.clone-rates__amount.sc-ir-clone-rates,.clone-rates__error.sc-ir-clone-rates{animation:clone-rates-reveal 200ms var(--clone-rates-ease-out)}@keyframes clone-rates-reveal{from{opacity:0;transform:translateY(-4px)}}.clone-rates__actions.sc-ir-clone-rates{display:flex;gap:var(--wa-space-s)}@media (min-width: 768px){.clone-rates__source.sc-ir-clone-rates,.clone-rates__dates.sc-ir-clone-rates,.clone-rates__adjustment.sc-ir-clone-rates,.clone-rates__amount.sc-ir-clone-rates{max-inline-size:26rem}}@media (prefers-reduced-motion: reduce){.clone-rates__amount.sc-ir-clone-rates,.clone-rates__error.sc-ir-clone-rates{animation-name:clone-rates-fade}}@keyframes clone-rates-fade{from{opacity:0}}`;

const IrCloneRates = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    ticket;
    p;
    language = 'en';
    propertyid;
    isLoading;
    isSaving;
    isReviewOpen = false;
    roomTypes = [];
    currencySymbol = '';
    source;
    fromDate;
    toDate;
    weekdays;
    selectedRatePlans;
    adjustment;
    amount;
    copyMinStay;
    errors = {};
    propertyId;
    currentYear = hooks().year();
    years = [this.currentYear, this.currentYear - 1];
    apiClientService = new ApiClient();
    roomService = new RoomService();
    propertyService = new PropertyService();
    /** Re-runs init when the language changes so server-localized room type and rate plan names follow. */
    languageSync = new LanguageSync(SCREEN_TABLES.cloneRates, () => this.init());
    componentWillLoad() {
        this.resetForm();
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
            this.init();
        }
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.apiClientService.setApiClient(newValue);
            this.init();
        }
    }
    handlePChange(newValue, oldValue) {
        if (newValue !== oldValue && this.ticket)
            this.init();
    }
    handlePropertyIdChange(newValue, oldValue) {
        if (newValue !== oldValue && this.ticket)
            this.init();
    }
    async init() {
        try {
            this.isLoading = true;
            const localeReady = LocaleController.load({ language: this.language, tables: SCREEN_TABLES.cloneRates });
            const [propertyRes] = await Promise.all([
                this.roomService.getExposedProperty({
                    id: this.propertyid ?? 0,
                    aname: this.p,
                    language: LocaleController.language,
                    is_backend: true,
                }),
                localeReady,
            ]);
            const property = propertyRes.My_Result;
            this.propertyId = property.id;
            this.currencySymbol = property.currency?.symbol ?? '';
            this.roomTypes = toRoomTypeOptions(property.roomtypes);
        }
        catch (err) {
            console.error(err);
        }
        finally {
            this.isLoading = false;
        }
    }
    resetForm() {
        const { from, to } = yearBounds(this.currentYear);
        this.source = `full-${this.currentYear}`;
        this.fromDate = from;
        this.toDate = to;
        this.weekdays = new Set(WEEKDAYS);
        this.selectedRatePlans = new Set();
        this.adjustment = 'none';
        this.amount = '';
        this.copyMinStay = false;
        this.errors = {};
    }
    get formState() {
        return {
            fromDate: this.fromDate,
            toDate: this.toDate,
            weekdays: Array.from(this.weekdays),
            ratePlanIds: Array.from(this.selectedRatePlans),
            adjustment: this.adjustment,
            amount: this.amount,
            copyMinStay: this.copyMinStay,
        };
    }
    clearError(field) {
        if (!this.errors[field])
            return;
        const { [field]: _removed, ...rest } = this.errors;
        this.errors = rest;
    }
    handleSourceChange(value) {
        const { year } = parseSourceOption(value);
        const { from, to } = yearBounds(year);
        this.source = value;
        this.fromDate = from;
        this.toDate = to;
        this.clearError('dates');
    }
    get allRatePlanIds() {
        return this.roomTypes.flatMap(rt => rt.ratePlans.map(rp => rp.id));
    }
    toggleRatePlan(id, checked) {
        const next = new Set(this.selectedRatePlans);
        checked ? next.add(id) : next.delete(id);
        this.selectedRatePlans = next;
        this.clearError('ratePlans');
    }
    toggleAllRatePlans(checked) {
        this.selectedRatePlans = checked ? new Set(this.allRatePlanIds) : new Set();
        this.clearError('ratePlans');
    }
    review() {
        this.errors = validateCloneRates(this.formState);
        if (Object.keys(this.errors).length === 0) {
            this.isReviewOpen = true;
        }
    }
    async confirm() {
        try {
            this.isSaving = true;
            await this.propertyService.cloneRates(buildCloneRatesPayload(this.propertyId, this.formState));
            showToast({ position: 'top-right', title: t('Lcz_RatesCopiedSuccessfully', { fallback: 'Rates copied successfully' }), description: '', type: 'success' });
            this.isReviewOpen = false;
            this.resetForm();
        }
        catch (err) {
            console.error(err);
            showToast({ position: 'top-right', title: t('Lcz_FailedToCopyRates', { fallback: 'Failed to copy rates' }), description: String(err), type: 'error' });
        }
        finally {
            this.isSaving = false;
        }
    }
    renderError(field) {
        if (!this.errors[field])
            return null;
        return (h("wa-callout", { variant: "danger", size: "s", class: "clone-rates__error" }, h("wa-icon", { slot: "icon", name: "circle-exclamation" }), this.errors[field]));
    }
    renderInfo(text) {
        return (h("wa-callout", { variant: "warning", size: "s" }, h("wa-icon", { slot: "icon", name: "circle-info" }), text));
    }
    renderDatesSection() {
        const { kind, year } = parseSourceOption(this.source);
        const { from, to } = yearBounds(year);
        return (h("wa-card", { appearance: "plain", class: "clone-rates__card" }, h("h4", { class: "clone-rates__question" }, t('Lcz_CopyRatesFromWhichDates', { fallback: 'Which dates do you want to copy rates from?' })), h("wa-select", { size: "s", class: "clone-rates__source", value: this.source, defaultValue: this.source, onchange: (e) => this.handleSourceChange(e.target.value) }, this.years.map(y => {
            const yearLabel = formatNumber(y, { useGrouping: false });
            return (h(Fragment, null, h("wa-option", { value: `full-${y}` }, t('Lcz_FullYear', { fallback: 'Full year %1', params: [yearLabel] })), h("wa-option", { value: `custom-${y}` }, t('Lcz_CustomDateRangeIn', { fallback: 'Custom date range in %1', params: [yearLabel] }))));
        })), h("div", { class: "clone-rates__dates" }, h("ir-date-range-filter", { fromDate: this.fromDate, toDate: this.toDate, minDate: from, maxDate: to, readonly: kind === 'full', showQuickActions: false, withClear: false, onDatesChanged: e => {
                this.fromDate = e.detail.from;
                this.toDate = e.detail.to;
                this.clearError('dates');
            } })), this.renderError('dates'), this.renderInfo(t('Lcz_RatesWillBeCopiedTo', { fallback: 'Rates will be copied over to %1', params: [formatNumber(year + 1, { useGrouping: false })] }))));
    }
    renderWeekdaysSection() {
        return (h("wa-card", { appearance: "plain", class: "clone-rates__card" }, h("h4", { class: "clone-rates__question" }, t('Lcz_CopyRatesWhichWeekdays', { fallback: 'Which days of the week do you want to copy rates from?' })), h("ir-weekday-selector", { class: "clone-rates__weekdays", required: true, weekdays: Array.from(this.weekdays), onWeekdayChange: e => {
                this.weekdays = new Set(e.detail);
                this.clearError('weekdays');
            } }), this.renderError('weekdays')));
    }
    renderRoomTypesSection() {
        const selectedCount = this.selectedRatePlans.size;
        const allSelected = selectedCount > 0 && selectedCount === this.allRatePlanIds.length;
        return (h("wa-card", { appearance: "plain", class: "clone-rates__card" }, h("h4", { class: "clone-rates__question" }, t('Lcz_CopyRatesWhichRatePlans', { fallback: 'Which room types and rate plans do you want to copy?' })), h("wa-checkbox", { checked: allSelected, indeterminate: selectedCount > 0 && !allSelected, onchange: (e) => this.toggleAllRatePlans(e.target.checked) }, t('Lcz_SelectAllRatePlans', { fallback: 'Select all rate plans for all room types' })), h("wa-divider", { class: "clone-rates__divider" }), this.roomTypes.length === 0 ? (h("ir-empty-state", { message: t('Lcz_NoActiveRatePlans', { fallback: 'No active rate plans found' }) })) : (h("div", { class: "clone-rates__room-types" }, this.roomTypes.map(rt => (h("div", { key: rt.id, class: "clone-rates__room-type" }, h("p", { class: "clone-rates__room-type-name" }, rt.name), h("div", { class: "clone-rates__rate-plans" }, rt.ratePlans.map(rp => (h("wa-checkbox", { key: rp.id, checked: this.selectedRatePlans.has(rp.id), onchange: (e) => this.toggleRatePlan(rp.id, e.target.checked) }, rp.label))))))))), this.renderError('ratePlans')));
    }
    renderAmountInput() {
        const label = isDecrease(this.adjustment)
            ? t('Lcz_AmountToDecreaseRatesBy', { fallback: 'Set the amount you want to decrease your rates by' })
            : t('Lcz_AmountToIncreaseRatesBy', { fallback: 'Set the amount you want to increase your rates by' });
        return (h("div", { class: "clone-rates__amount" }, h("ir-input", { label: label, mask: "price", value: this.amount, "onText-change": (e) => {
                this.amount = e.detail;
                this.clearError('amount');
            } }, h("span", { slot: "start" }, isPercentage(this.adjustment) ? '%' : this.currencySymbol)), this.renderError('amount')));
    }
    renderAdjustmentSection() {
        return (h("wa-card", { appearance: "plain", class: "clone-rates__card" }, h("h4", { class: "clone-rates__question" }, t('Lcz_CopyRatesMakeChanges', { fallback: 'Do you want to make changes to the rates?' })), h("wa-select", { size: "s", class: "clone-rates__adjustment", value: this.adjustment, defaultValue: this.adjustment, onchange: (e) => {
                this.adjustment = e.target.value;
                this.amount = '';
                this.clearError('amount');
            } }, getAdjustments().map(a => (h("wa-option", { key: a.value, value: a.value }, a.label)))), this.adjustment !== 'none' && this.renderAmountInput()));
    }
    renderRestrictionsSection() {
        return (h("wa-card", { appearance: "plain", class: "clone-rates__card" }, h("h4", { class: "clone-rates__question" }, t('Lcz_CopyMinStayQuestion', { fallback: 'Do you want to copy over the minimum stay restrictions for these dates?' })), h("wa-checkbox", { checked: this.copyMinStay, onchange: (e) => (this.copyMinStay = e.target.checked) }, t('Lcz_CopyMinStayConfirm', { fallback: 'Yes, copy my minimum stay restrictions for this date range' }))));
    }
    renderForm() {
        return (h("div", { class: "clone-rates__sections" }, this.renderDatesSection(), this.renderWeekdaysSection(), this.renderRoomTypesSection(), this.renderAdjustmentSection(), this.renderRestrictionsSection(), h("div", { class: "clone-rates__actions" }, h("ir-custom-button", { variant: "brand", size: "m", onClickHandler: () => this.review() }, t('Lcz_Review', { fallback: 'Review' })))));
    }
    render() {
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-page", { label: t('Lcz_CopyRatesToFutureDates', { fallback: 'Copy rates to future dates' }), description: t('Lcz_CopyRatesDescription', { fallback: 'Here you can copy over your existing rate plans to the date range you want, easily and efficiently.' }) }, this.renderForm(), h("ir-clone-rates-review", { open: this.isReviewOpen, loading: this.isSaving, rows: buildReviewRows(this.formState, this.roomTypes, this.currencySymbol), onGoBack: () => (this.isReviewOpen = false), onConfirmClone: () => this.confirm() }))));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "ticket": [{
                "handleTicketChange": 0
            }],
        "p": [{
                "handlePChange": 0
            }],
        "propertyid": [{
                "handlePropertyIdChange": 0
            }]
    }; }
};
IrCloneRates.style = irCloneRatesCss();

export { IrCloneRates as ir_clone_rates };
