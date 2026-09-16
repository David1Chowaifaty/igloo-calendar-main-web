'use strict';

var index = require('./index-CQkpA5n3.js');
var index$1 = require('./index-Jy9KaFJU.js');
var t = require('./t-CyRK1btk.js');
var irDate = require('./ir-date-BZLsqCOc.js');
require('./moment-CdViwxPQ.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./utils-DfkM3gGN.js');
require('./IBooking-hDE_y33g.js');
require('./types-BVJQZ50e.js');
require('./locales.store-BMTss6fG.js');
require('./language-observer-DKp37LIu.js');

const iglBlockDatesViewCss = () => `.sc-igl-block-dates-view-h{display:block}.block-dates.sc-igl-block-dates-view{display:flex;flex-direction:column;gap:var(--wa-space-s, 0.5rem);text-align:start;font-size:var(--wa-font-size-s, 0.8125rem);color:var(--wa-color-text-normal, #1e293b)}.block-dates__dates.sc-igl-block-dates-view{--ir-date-view-font-size:var(--wa-font-size-m, 0.8125rem)}.block-dates__label.sc-igl-block-dates-view{font-weight:var(--wa-font-weight-semibold, 600);color:var(--wa-color-text-quiet, #64748b)}.block-dates__mode.sc-igl-block-dates-view::part(form-control-label),.block-dates__mode.sc-igl-block-dates-view [part~="form-control-label"]{margin-block-end:var(--wa-space-xs, 0.375rem)}.block-dates__mode.sc-igl-block-dates-view::part(radios),.block-dates__mode.sc-igl-block-dates-view [part~="radios"]{gap:var(--wa-space-xs, 0.375rem)}.block-dates__fields.sc-igl-block-dates-view{display:flex;flex-direction:column;gap:var(--wa-space-xs, 0.375rem);margin-block:var(--wa-space-3xs, 0.125rem) var(--wa-space-2xs, 0.25rem);margin-inline-start:1.6rem;padding-inline-start:var(--wa-space-s, 0.5rem);border-inline-start:2px solid var(--wa-color-neutral-border-quiet, #e2e8f0)}.block-dates__select.sc-igl-block-dates-view,.block-dates__reason.sc-igl-block-dates-view{width:100%}.block-dates__release-on.sc-igl-block-dates-view{font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-text-quiet, #64748b);white-space:nowrap}`;

const IglBlockDatesView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dataUpdateEvent = index.createEvent(this, "dataUpdateEvent");
    }
    defaultData;
    fromDate;
    toDate;
    entryDate;
    entryHour;
    isEventHover = false;
    entryMinute;
    renderAgain = false;
    dataUpdateEvent;
    blockDatesData = {
        RELEASE_AFTER_HOURS: 0,
        OPTIONAL_REASON: '',
        OUT_OF_SERVICE: false,
    }; // Change of property name might require updates in booking-event-hover
    releaseList = [];
    setupService = new index$1.SetupService();
    async componentWillLoad() {
        try {
            this.releaseList = await this.setupService.getBlockedInfo();
            if (this.defaultData) {
                this.blockDatesData = { ...this.defaultData };
            }
            else {
                this.blockDatesData.RELEASE_AFTER_HOURS = parseInt(this.releaseList[0].CODE_NAME);
                this.emitData();
            }
        }
        catch (error) {
            // toastr.error(error);
        }
    }
    handleOptionalReason(event) {
        this.blockDatesData.OPTIONAL_REASON = event.target.value;
        this.emitData();
    }
    handleReleaseAfterChange(evt) {
        if (this.entryDate)
            this.entryDate = undefined;
        this.blockDatesData.RELEASE_AFTER_HOURS = parseInt(evt.target.value);
        this.renderPage();
        this.emitData();
    }
    /**
     * Switches between the two ways a block resolves: auto-release after a period, or out-of-service (manual release).
     * The `wa-select` / `wa-input` for the auto-release branch live inside the radio group, so their bubbled `change`
     * events reach this handler too — ignore anything that isn't the radio group or a radio.
     */
    handleModeChange(evt) {
        const target = evt.target;
        if (!target || (target.tagName !== 'WA-RADIO-GROUP' && target.tagName !== 'WA-RADIO')) {
            return;
        }
        const outOfService = target.value === 'oos';
        this.blockDatesData.OUT_OF_SERVICE = outOfService;
        if (outOfService) {
            this.blockDatesData.OPTIONAL_REASON = '';
            this.blockDatesData.RELEASE_AFTER_HOURS = 0;
        }
        this.renderPage();
        this.emitData();
    }
    emitData() {
        this.dataUpdateEvent.emit({
            key: 'blockDatesData',
            data: { ...this.blockDatesData },
        });
    }
    getReleaseHoursString() {
        let dt = this.entryDate ? new Date(this.entryDate) : new Date();
        if (this.entryDate && this.entryHour && this.entryMinute) {
            dt.setHours(this.entryHour, this.entryMinute, 0, 0);
        }
        else {
            dt.setHours(dt.getHours() + this.blockDatesData.RELEASE_AFTER_HOURS, dt.getMinutes(), 0, 0);
        }
        return irDate.formatDate(dt, 'MMM D, HH:mm');
    }
    renderPage() {
        this.renderAgain = !this.renderAgain;
    }
    render() {
        const { OUT_OF_SERVICE, OPTIONAL_REASON, RELEASE_AFTER_HOURS } = this.blockDatesData;
        const releaseValue = String(Number(RELEASE_AFTER_HOURS) || 0);
        const releaseHours = Number(RELEASE_AFTER_HOURS) || 0;
        return (index.h(index.Host, { key: 'd0da791f6aa7186257cb8875cc9ca03a53fe57de' }, index.h("div", { key: 'b84eb886fd81331e9304e611c90fbfb23057ed51', class: "block-dates" }, index.h("ir-date-view", { key: '4501c6ffb9eed20d58bd3d26374b34e6677e78c6', format: 'weekday-medium', from_date: this.fromDate, to_date: this.toDate, showDateDifference: false }), index.h("wa-radio-group", { key: '65d5da6d076419a0bad9830429ef5ddc8299249d', class: "block-dates__mode", size: "m", orientation: "vertical", value: OUT_OF_SERVICE ? 'oos' : 'auto', onchange: evt => this.handleModeChange(evt) }, index.h("span", { key: '4c60821d86b2f2eab9befb4b8124338ea87ac855', slot: "label", class: "block-dates__label" }, t.t('Lcz_Reason', { fallback: 'Reason' })), index.h("wa-radio", { key: '87ede2e7a0e163234e0c2810dcf6c12a40c2b632', value: "auto" }, t.t('Lcz_AutomaticReleaseIn', { fallback: 'Automatic release in' })), !OUT_OF_SERVICE && (index.h("div", { key: 'ae7bb0cd1dc38b9be225759b26077658c88ae220', class: "block-dates__fields" }, index.h("wa-select", { key: 'bce4b91e897701a9e77344dc1352a3e90c6a1f25', class: "block-dates__select", size: "s", value: releaseValue, defaultValue: releaseValue, onchange: evt => this.handleReleaseAfterChange(evt) }, index.h("wa-icon", { key: 'f6906f5ead6f9d3f4fdd5bba8ccae4c5f403e81e', slot: "start", name: "clock", label: t.t('Lcz_AutomaticReleaseIn', { fallback: 'Automatic release in' }) }), releaseHours > 0 && (index.h("span", { key: '0110873d4aec73a9890c4f0b50db81af2d19673c', slot: "end", class: "block-dates__release-on" }, t.t('Lcz_On', { fallback: 'On' }), " ", this.getReleaseHoursString())), this.releaseList.map(releaseItem => (index.h("wa-option", { value: String(Number(releaseItem.CODE_NAME) || 0) }, releaseItem.CODE_VALUE_EN)))), index.h("wa-input", { key: '352e8935067a1693403536785f303638f4fbf2c5', class: "block-dates__reason", size: "s", placeholder: t.t('Lcz_OptionalReason', { fallback: 'Optional reason' }), value: OPTIONAL_REASON, oninput: event => this.handleOptionalReason(event) }, index.h("wa-icon", { key: '739fa883e5616963d860b0fe646dd22eb27ef75b', slot: "start", name: "comment", label: t.t('Lcz_OptionalReason', { fallback: 'Optional reason' }) })))), index.h("wa-radio", { key: 'f1a90e20559b441e1db7985a711d972d42075cd7', value: "oos" }, t.t('Lcz_OutOfservice', { fallback: 'Out of service' }))))));
    }
};
IglBlockDatesView.style = iglBlockDatesViewCss();

exports.igl_block_dates_view = IglBlockDatesView;
