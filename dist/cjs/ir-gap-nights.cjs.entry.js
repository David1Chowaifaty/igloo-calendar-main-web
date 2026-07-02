'use strict';

var index = require('./index-DYQrLNin.js');
var Token = require('./Token-mN7PQKGF.js');
var booking_store = require('./booking.store-CiJUpSjF.js');
var index$1 = require('./index-CBGJ2sL1.js');
var room_service = require('./room.service-BDxvptKu.js');
var irInterceptor_store = require('./ir-interceptor.store-DCFOyFp0.js');
var utils = require('./utils-DgT4kKsD.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./index-CLqkDPTC.js');
require('./booking-D81t5lFq.js');
require('./moment-CdViwxPQ.js');
require('./locales.store-6IlEbCjL.js');
require('./index-C59pxKl1.js');
require('./calendar-data-R3j-WBLW.js');
require('./type-Dy9pVS4V.js');

const irGapNightsCss = () => `.sc-ir-gap-nights-h{display:block}.gap-nights__card.sc-ir-gap-nights{min-height:70vh}@media (min-width: 768px){.gap-nights__day-options.sc-ir-gap-nights{max-width:300px}}.gap-nights__card-header.sc-ir-gap-nights{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;gap:var(--wa-space-l)}.gap-nights__card-header.sc-ir-gap-nights p.sc-ir-gap-nights{margin:0;padding:0}.gap-nights__card.sc-ir-gap-nights::part(body),.gap-nights__card.sc-ir-gap-nights [part~="body"]{display:flex;flex-direction:column;gap:var(--wa-space-l)}.gap-nights__period.sc-ir-gap-nights{display:flex;align-items:center;gap:var(--wa-space-m)}.gap-nights__period-label.sc-ir-gap-nights{font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold);color:var(--wa-color-neutral-800);white-space:nowrap}.gap-nights__period--disabled.sc-ir-gap-nights .gap-nights__period-label.sc-ir-gap-nights{color:var(--wa-color-neutral-400)}`;

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
    tokenService = new Token.Token();
    roomService = new room_service.RoomService();
    propertyService = new index$1.PropertyService();
    bookingService = new booking_store.BookingService();
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.tokenService.setToken(newValue);
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
            const [propertyRes, , setupEntries] = await Promise.all([
                this.roomService.getExposedProperty({
                    id: this.propertyid ?? 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                }),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getSetupEntriesByTableNameMulti(['_GAP_RANGE', '_GAP_RULE']),
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
            utils.showToast({ position: 'top-right', title: 'Saved successfully', description: '', type: 'success' });
        }
        catch (err) {
            console.error(err);
            utils.showToast({ position: 'top-right', title: 'Failed to save', description: String(err), type: 'error' });
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
        return (index.h(index.Host, null, index.h("ir-page", { label: "Gap Nights" }, index.h("ir-custom-button", { slot: "page-header", variant: "brand", loading: ruleDisabled, onClickHandler: () => this.save() }, "Save"), index.h("wa-card", { class: "gap-nights__card" }, index.h("wa-callout", { variant: "neutral", size: "s" }, index.h("wa-icon", { slot: "icon", name: "circle-info" }), "Gap nights are nights guests can't book because of your length of stay restriction. For example, if you have 2 consecutive nights left and you've set a restriction of 3 nights minimum stay, guests won't be able to book those 2 nights."), index.h("wa-radio-group", { label: "Rule", value: this.selectedRule, defaultValue: this.selectedRule, onchange: (e) => {
                this.selectedRule = e.target.value;
            } }, this.gapRules.map(r => (index.h("wa-radio", { key: r.CODE_NAME, value: r.CODE_NAME, disabled: ruleDisabled }, r.CODE_VALUE_EN)))), index.h("wa-select", { size: "s", class: "gap-nights__day-options", label: "Applicable over the next", value: this.applicableDays.toString(), defaultValue: this.applicableDays.toString(), disabled: periodDisabled, onchange: (e) => {
                this.applicableDays = Number(e.target.value);
            } }, this.gapRanges.map(r => (index.h("wa-option", { key: r.CODE_NAME, value: Number(r.CODE_NAME).toString() }, r.CODE_VALUE_EN))))))));
    }
    static get watchers() { return {
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
