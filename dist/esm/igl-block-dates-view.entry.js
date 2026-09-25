import { r as registerInstance, c as createEvent, h, H as Host } from './index-CeHdrJeH.js';
import { S as SetupService } from './index-DOBP7vGO.js';
import { t } from './t-CHjay2ar.js';
import { f as formatDate } from './ir-date-tLkbTntq.js';
import './moment-Mki5YqAR.js';
import { d as getSetupEntryLabel } from './utils-DZNfUvEs.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './IBooking-BEkHqAPo.js';
import './types-BWKgfE54.js';
import './locales.store-CXJn6ls-.js';
import './language-observer-CHgzsZkY.js';

const iglBlockDatesViewCss = () => `.sc-igl-block-dates-view-h{display:block}.block-dates.sc-igl-block-dates-view{display:flex;flex-direction:column;gap:var(--wa-space-s, 0.5rem);text-align:start;font-size:var(--wa-font-size-s, 0.8125rem);color:var(--wa-color-text-normal, #1e293b)}.block-dates__dates.sc-igl-block-dates-view{--ir-date-view-font-size:var(--wa-font-size-m, 0.8125rem)}.block-dates__label.sc-igl-block-dates-view{font-weight:var(--wa-font-weight-semibold, 600);color:var(--wa-color-text-quiet, #64748b)}.block-dates__mode.sc-igl-block-dates-view::part(form-control-label),.block-dates__mode.sc-igl-block-dates-view [part~="form-control-label"]{margin-block-end:var(--wa-space-xs, 0.375rem)}.block-dates__mode.sc-igl-block-dates-view::part(radios),.block-dates__mode.sc-igl-block-dates-view [part~="radios"]{gap:var(--wa-space-xs, 0.375rem)}.block-dates__fields.sc-igl-block-dates-view{display:flex;flex-direction:column;gap:var(--wa-space-xs, 0.375rem);margin-block:var(--wa-space-3xs, 0.125rem) var(--wa-space-2xs, 0.25rem);margin-inline-start:1.6rem;padding-inline-start:var(--wa-space-s, 0.5rem);border-inline-start:2px solid var(--wa-color-neutral-border-quiet, #e2e8f0)}.block-dates__select.sc-igl-block-dates-view,.block-dates__reason.sc-igl-block-dates-view{width:100%}.block-dates__release-on.sc-igl-block-dates-view{font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-text-quiet, #64748b);white-space:nowrap}`;

const IglBlockDatesView = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent");
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
    setupService = new SetupService();
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
        return formatDate(dt, 'MMM D, HH:mm');
    }
    renderPage() {
        this.renderAgain = !this.renderAgain;
    }
    render() {
        const { OUT_OF_SERVICE, OPTIONAL_REASON, RELEASE_AFTER_HOURS } = this.blockDatesData;
        const releaseValue = String(Number(RELEASE_AFTER_HOURS) || 0);
        const releaseHours = Number(RELEASE_AFTER_HOURS) || 0;
        return (h(Host, { key: 'f649eb2617754f2ec1600d83754a703ae9bd21a2' }, h("div", { key: '6d10c77915e268b90e396eecc21495e248975d1b', class: "block-dates" }, h("ir-date-view", { key: 'f18f2806b6b8b313dfc08d8aa85fc4254698e9d9', format: 'weekday-medium', from_date: this.fromDate, to_date: this.toDate, showDateDifference: false }), h("wa-radio-group", { key: '2f4fc7f0cc29b7faa99b7eb62216c230218db68f', class: "block-dates__mode", size: "m", orientation: "vertical", value: OUT_OF_SERVICE ? 'oos' : 'auto', onchange: evt => this.handleModeChange(evt) }, h("span", { key: '7ebfc6b3e0b77bcff325bc1c645543b0707c767b', slot: "label", class: "block-dates__label" }, t('Lcz_Reason', { fallback: 'Reason' })), h("wa-radio", { key: '37b3c58ae1eb4d815de0d88d4d61a3d67daa5ca3', value: "auto" }, t('Lcz_AutomaticReleaseIn', { fallback: 'Automatic release in' })), !OUT_OF_SERVICE && (h("div", { key: '9565a70b6915bfc07759ff7be690a7ea0fca093d', class: "block-dates__fields" }, h("wa-select", { key: 'c66bd7e6f87530ff6527fe6df4c28bd8dd54a563', class: "block-dates__select", size: "s", value: releaseValue, defaultValue: releaseValue, onchange: evt => this.handleReleaseAfterChange(evt) }, h("wa-icon", { key: '762c70d064fcdfb1a0aecda5c6134676663100d7', slot: "start", name: "clock", label: t('Lcz_AutomaticReleaseIn', { fallback: 'Automatic release in' }) }), releaseHours > 0 && (h("span", { key: '5112d37f038b6fac9fde69c09fd23199c36c6d45', slot: "end", class: "block-dates__release-on" }, t('Lcz_On', { fallback: 'On' }), " ", this.getReleaseHoursString())), this.releaseList.map(releaseItem => (h("wa-option", { value: String(Number(releaseItem.CODE_NAME) || 0) }, getSetupEntryLabel(releaseItem))))), h("wa-input", { key: '5c0e85e01bbf57c2b2dbd953c2166081b7c7af0f', class: "block-dates__reason", size: "s", placeholder: t('Lcz_OptionalReason', { fallback: 'Optional reason' }), value: OPTIONAL_REASON, oninput: event => this.handleOptionalReason(event) }, h("wa-icon", { key: '5edb58058030f89f8aa3209f1ba1faa245395f5f', slot: "start", name: "comment", label: t('Lcz_OptionalReason', { fallback: 'Optional reason' }) })))), h("wa-radio", { key: '9eb7c8237d62b8aa1a353dec162a45d0e08fc419', value: "oos" }, t('Lcz_OutOfservice', { fallback: 'Out of service' }))))));
    }
};
IglBlockDatesView.style = iglBlockDatesViewCss();

export { IglBlockDatesView as igl_block_dates_view };
