import { r as registerInstance, c as createEvent, h, H as Host } from './index-DKZeCK8T.js';
import { S as SetupService } from './index-D9hqk41R.js';
import { t } from './t-Bvz1wS_D.js';
import { f as formatDate } from './ir-date-CY_qGQ63.js';
import './moment-Mki5YqAR.js';
import { d as getSetupEntryLabel } from './utils-Cz9i5CF5.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './IBooking-BFuEU3Ic.js';
import './types-BLb1NO3I.js';
import './locale-scope-Jre4lb6k.js';
import './language-observer-CHgzsZkY.js';
import './commonSchemas-BNnUj2OT.js';

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
        return (h(Host, { key: 'c46b74dd4b56b91c904bff1051b15431d8f4aff4' }, h("div", { key: 'c695ea752c40d3952ca97b0ae57126fa80011be0', class: "block-dates" }, h("ir-date-view", { key: '00ab39427ead0eb4ec6244bd9a48e9f27bdb2e83', format: 'weekday-medium', from_date: this.fromDate, to_date: this.toDate, showDateDifference: false }), h("wa-radio-group", { key: '02335ade1521a4495f6bb323759663cb8697bae9', class: "block-dates__mode", size: "m", orientation: "vertical", value: OUT_OF_SERVICE ? 'oos' : 'auto', onchange: evt => this.handleModeChange(evt) }, h("span", { key: '717e634a316fd76f5036900d9307abaa4a89495a', slot: "label", class: "block-dates__label" }, t('Lcz_Reason', { fallback: 'Reason' })), h("wa-radio", { key: '2da382175b4d24b608e15bc18f2f313db9191cb9', value: "auto" }, t('Lcz_AutomaticReleaseIn', { fallback: 'Automatic release in' })), !OUT_OF_SERVICE && (h("div", { key: '851692012b7d50e991f853e01126ea4a1c864635', class: "block-dates__fields" }, h("wa-select", { key: '955bda4cd42b21da61e852c245c8413b5cbc434e', class: "block-dates__select", size: "s", value: releaseValue, defaultValue: releaseValue, onchange: evt => this.handleReleaseAfterChange(evt) }, h("wa-icon", { key: 'b7d1a89d19722735c1dabf7f1cd6c975db8c4160', slot: "start", name: "clock", label: t('Lcz_AutomaticReleaseIn', { fallback: 'Automatic release in' }) }), releaseHours > 0 && (h("span", { key: 'a9fb7fe14395f95e2844f002e35152ca714692c3', slot: "end", class: "block-dates__release-on" }, t('Lcz_On', { fallback: 'On' }), " ", this.getReleaseHoursString())), this.releaseList.map(releaseItem => (h("wa-option", { value: String(Number(releaseItem.CODE_NAME) || 0) }, getSetupEntryLabel(releaseItem))))), h("wa-input", { key: '2d95d465701b86a2f16edf2c1753e2dcec57398b', class: "block-dates__reason", size: "s", placeholder: t('Lcz_OptionalReason', { fallback: 'Optional reason' }), value: OPTIONAL_REASON, oninput: event => this.handleOptionalReason(event) }, h("wa-icon", { key: 'e21951b1bed4bc820a1128afa0c6f14eb068cf64', slot: "start", name: "comment", label: t('Lcz_OptionalReason', { fallback: 'Optional reason' }) })))), h("wa-radio", { key: '38b1b09afa2172c71a3cbbaf06215b9b6e96b5b5', value: "oos" }, t('Lcz_OutOfservice', { fallback: 'Out of service' }))))));
    }
};
IglBlockDatesView.style = iglBlockDatesViewCss();

export { IglBlockDatesView as igl_block_dates_view };
