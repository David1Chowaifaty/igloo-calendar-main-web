'use strict';

var index = require('./index-CQkpA5n3.js');
var ApiClient = require('./ApiClient-u7fuhiXA.js');
var index$2 = require('./index-ucnJQqCg.js');
var index$1 = require('./index-CQ0teTmL.js');
var room_service = require('./room.service-SRdCt12B.js');
var irInterceptor_store = require('./ir-interceptor.store-moMB-JCs.js');
var utils$1 = require('./utils-C5I0LkiV.js');
var locale_controller = require('./locale.controller-C4TH5Eq_.js');
var languageSync = require('./language-sync-CcxSJ9ci.js');
var t = require('./t-CyRK1btk.js');
var utils = require('./utils-BiDhI8bI.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./IBooking-C1lok6Tq.js');
require('./types-BlCoz3jZ.js');
require('./calendar-data-HgC39-BR.js');
require('./locales.store-BMTss6fG.js');
require('./moment-CdViwxPQ.js');
require('./commonSchemas-BFzTbV-r.js');
require('./booking.dto-DxxzsxJC.js');
require('./type-BRhg-bzd.js');
require('./ir-date-BZLsqCOc.js');
require('./language-observer-DKp37LIu.js');
require('./types-BzBUVSnE.js');

const irGapNightsCss = () => `.sc-ir-gap-nights-h{display:block}.gap-nights__card.sc-ir-gap-nights{min-height:70vh}@media (min-width: 768px){.gap-nights__day-options.sc-ir-gap-nights{max-width:300px}}.gap-nights__card.sc-ir-gap-nights{background-color:var(--wa-color-surface-default, white)}.gap-nights__card-header.sc-ir-gap-nights{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;gap:var(--wa-space-l)}.gap-nights__card-header.sc-ir-gap-nights p.sc-ir-gap-nights{margin:0;padding:0}.gap-nights__card.sc-ir-gap-nights::part(body),.gap-nights__card.sc-ir-gap-nights [part~="body"]{display:flex;flex-direction:column;gap:var(--wa-space-l)}.gap-nights__period.sc-ir-gap-nights{display:flex;align-items:center;gap:var(--wa-space-m)}.gap-nights__period-label.sc-ir-gap-nights{font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold);color:var(--wa-color-neutral-800);white-space:nowrap}.gap-nights__period--disabled.sc-ir-gap-nights .gap-nights__period-label.sc-ir-gap-nights{color:var(--wa-color-neutral-400)}`;

const DEFAULT_RULE_CODE = '000';
const DEFAULT_LOOKAHEAD_DAYS = 30;
const IrGapNights = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    ticket;
    p;
    language = 'en';
    propertyid;
    isLoading;
    isSaving;
    selectedRule = DEFAULT_RULE_CODE;
    applicableDays = DEFAULT_LOOKAHEAD_DAYS;
    gapRules = [];
    gapRanges = [];
    propertyId;
    apiClientService = new ApiClient.ApiClient();
    roomService = new room_service.RoomService();
    propertyService = new index$1.PropertyService();
    setupService = new index$2.SetupService();
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.gapNights, () => this.init());
    componentWillLoad() {
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
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.gapNights });
            const [propertyRes, , setupEntries] = await Promise.all([
                this.roomService.getExposedProperty({
                    id: this.propertyid ?? 0,
                    aname: this.p,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                }),
                localeReady,
                this.setupService.getSetupEntriesByTableNameMulti(['_GAP_RANGE', '_GAP_RULE']),
            ]);
            this.propertyId = propertyRes.My_Result.id;
            const { gap_rule, gap_range } = utils.groupEntryTablesResult(setupEntries);
            this.gapRules = gap_rule ?? [];
            this.gapRanges = gap_range ?? [];
            const gapRule = propertyRes.My_Result?.gap_rule;
            if (gapRule) {
                this.selectedRule = gapRule.type?.code ?? gap_rule[0].CODE_NAME;
                this.applicableDays = gapRule.gap_lookahead_days ?? Number(gap_range[0].CODE_NAME);
            }
        }
        catch (err) {
            console.error(err);
        }
        finally {
            this.isLoading = false;
        }
    }
    async save() {
        try {
            this.isSaving = true;
            await this.propertyService.setPropertyGapConfig({
                property_id: this.propertyId,
                gap_rule_code: this.selectedRule,
                gap_lookahead_days: this.selectedRule === DEFAULT_RULE_CODE ? 0 : this.applicableDays,
            });
            utils$1.showToast({ position: 'top-right', title: t.t('Lcz_SavedSuccessfully', { fallback: 'Saved successfully' }), description: '', type: 'success' });
        }
        catch (err) {
            console.error(err);
            utils$1.showToast({ position: 'top-right', title: t.t('Lcz_FailedToSave', { fallback: 'Failed to save' }), description: String(err), type: 'error' });
        }
        finally {
            this.isSaving = false;
        }
    }
    render() {
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        const ruleDisabled = irInterceptor_store.isRequestPending('/Set_Property_Gap_Config') || this.isSaving;
        const periodDisabled = ruleDisabled || this.selectedRule === DEFAULT_RULE_CODE;
        return (index.h(index.Host, null, index.h("ir-page", { label: t.t('Lcz_GapNights', { fallback: 'Gap Nights' }) }, index.h("ir-custom-button", { slot: "page-header", variant: "brand", loading: ruleDisabled, onClickHandler: () => this.save() }, t.t('Lcz_Save', { fallback: 'Save' })), index.h("wa-card", { appearance: "plain", class: "gap-nights__card" }, index.h("wa-callout", { variant: "neutral", size: "s" }, index.h("wa-icon", { slot: "icon", name: "circle-info" }), t.t('Lcz_GapNightsExplanation', {
            fallback: "Gap nights are nights guests can't book because of your length of stay restriction. For example, if you have 2 consecutive nights left and you've set a restriction of 3 nights minimum stay, guests won't be able to book those 2 nights.",
        })), index.h("wa-radio-group", { label: t.t('Lcz_Rule', { fallback: 'Rule' }), value: this.selectedRule, defaultValue: this.selectedRule, onchange: (e) => {
                this.selectedRule = e.target.value;
            } }, this.gapRules.map(r => (index.h("wa-radio", { key: r.CODE_NAME, value: r.CODE_NAME, disabled: ruleDisabled }, r.CODE_VALUE_EN)))), index.h("wa-select", { size: "s", class: "gap-nights__day-options", label: t.t('Lcz_ApplicableOverTheNext', { fallback: 'Applicable over the next' }), value: this.applicableDays.toString(), defaultValue: this.applicableDays.toString(), disabled: periodDisabled, onchange: (e) => {
                this.applicableDays = Number(e.target.value);
            } }, this.gapRanges.map(r => (index.h("wa-option", { key: r.CODE_NAME, value: Number(r.CODE_NAME).toString() }, r.CODE_VALUE_EN))))))));
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
IrGapNights.style = irGapNightsCss();

exports.ir_gap_nights = IrGapNights;
