import ApiClient from "../../models/ApiClient";
import { LanguageSync } from "../../services/locale/language-sync";
import { LocaleController } from "../../services/locale/locale.controller";
import { SCREEN_TABLES } from "../../services/locale/screen-tables";
import { t } from "../../services/locale/t";
import { PropertyService } from "../../services/property/index";
import { RoomService } from "../../services/room.service";
import { formatNumber } from "../../utils/number";
import { showToast } from "../../utils/utils";
import { Fragment, Host, h } from "@stencil/core";
import moment from "moment";
import { WEEKDAYS, buildCloneRatesPayload, buildReviewRows, getAdjustments, isDecrease, isPercentage, parseSourceOption, toRoomTypeOptions, validateCloneRates, yearBounds, } from "./clone-rates.utils";
export class IrCloneRates {
    ticket;
    p;
    language = 'en';
    propertyid;
    /** `drawer` drops the page shell and the inline Review button; the host drawer submits `#clone-rates-form` from its footer. */
    mode = 'page';
    /** Fired after the rates were copied successfully. */
    ratesCloned;
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
    currentYear = moment().year();
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
            this.ratesCloned.emit();
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
        return (h("form", { id: "clone-rates-form", class: "clone-rates__sections", noValidate: true, onSubmit: e => {
                e.preventDefault();
                this.review();
            } }, this.renderDatesSection(), this.renderWeekdaysSection(), this.renderRoomTypesSection(), this.renderAdjustmentSection(), this.renderRestrictionsSection(), this.mode === 'page' && (h("div", { class: "clone-rates__actions" }, h("ir-custom-button", { variant: "brand", size: "m", type: "submit", form: "clone-rates-form" }, t('Lcz_Review', { fallback: 'Review' }))))));
    }
    renderReview() {
        return (h("ir-clone-rates-review", { open: this.isReviewOpen, loading: this.isSaving, rows: buildReviewRows(this.formState, this.roomTypes, this.currencySymbol), onGoBack: () => (this.isReviewOpen = false), onConfirmClone: () => this.confirm() }));
    }
    render() {
        if (this.mode === 'drawer') {
            if (this.isLoading) {
                return (h("div", { class: "clone-rates__loader" }, h("ir-spinner", null)));
            }
            return (h(Host, null, this.renderForm(), this.renderReview()));
        }
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-page", { label: t('Lcz_CopyRatesToFutureDates', { fallback: 'Copy rates to future dates' }), description: t('Lcz_CopyRatesDescription', { fallback: 'Here you can copy over your existing rate plans to the date range you want, easily and efficiently.' }) }, this.renderForm(), this.renderReview())));
    }
    static get is() { return "ir-clone-rates"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-clone-rates.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-clone-rates.css"]
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
            "p": {
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
                "attribute": "p"
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
            },
            "propertyid": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "propertyid"
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'page' | 'drawer'",
                    "resolved": "\"drawer\" | \"page\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "`drawer` drops the page shell and the inline Review button; the host drawer submits `#clone-rates-form` from its footer."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "mode",
                "defaultValue": "'page'"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "isSaving": {},
            "isReviewOpen": {},
            "roomTypes": {},
            "currencySymbol": {},
            "source": {},
            "fromDate": {},
            "toDate": {},
            "weekdays": {},
            "selectedRatePlans": {},
            "adjustment": {},
            "amount": {},
            "copyMinStay": {},
            "errors": {}
        };
    }
    static get events() {
        return [{
                "method": "ratesCloned",
                "name": "ratesCloned",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired after the rates were copied successfully."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "language",
                "methodName": "languageChanged"
            }, {
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }, {
                "propName": "p",
                "methodName": "handlePChange"
            }, {
                "propName": "propertyid",
                "methodName": "handlePropertyIdChange"
            }];
    }
}
