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
        return (h(Host, { key: '9dc800c1e22a69c8dcbd710e6ba5a0dde84da2da' }, h("div", { key: 'e5a6f8e8ba8ce714ef7f3354ca7772bb5916039b', class: "block-dates" }, h("ir-date-view", { key: '1318102d2447abf9b3222ec4661af4ceab4271d4', format: 'weekday-medium', from_date: this.fromDate, to_date: this.toDate, showDateDifference: false }), h("wa-radio-group", { key: 'd8a3b4733bdc09a4df225f194f117fc68d8d5e92', class: "block-dates__mode", size: "m", orientation: "vertical", value: OUT_OF_SERVICE ? 'oos' : 'auto', onchange: evt => this.handleModeChange(evt) }, h("span", { key: 'f839af4ce8b2a6d21a3fd8f5b2f594756d6b6ce8', slot: "label", class: "block-dates__label" }, t('Lcz_Reason', { fallback: 'Reason' })), h("wa-radio", { key: '32db1de5cb3dd2b3b55e0b6d96b2b22414c907df', value: "auto" }, t('Lcz_AutomaticReleaseIn', { fallback: 'Automatic release in' })), !OUT_OF_SERVICE && (h("div", { key: '8ade78a00e7d8040963752396d2045462e162475', class: "block-dates__fields" }, h("wa-select", { key: 'c5462a65defefb38b65714fae63d17276b3f8ce3', class: "block-dates__select", size: "s", value: releaseValue, defaultValue: releaseValue, onchange: evt => this.handleReleaseAfterChange(evt) }, h("wa-icon", { key: '2f22c93c8ac16884b457ab985d25ca04ccd5dda6', slot: "start", name: "clock", label: t('Lcz_AutomaticReleaseIn', { fallback: 'Automatic release in' }) }), releaseHours > 0 && (h("span", { key: '8a3d6cfbd68db7503bd971aa8681c1552108876a', slot: "end", class: "block-dates__release-on" }, t('Lcz_On', { fallback: 'On' }), " ", this.getReleaseHoursString())), this.releaseList.map(releaseItem => (h("wa-option", { value: String(Number(releaseItem.CODE_NAME) || 0) }, getSetupEntryLabel(releaseItem))))), h("wa-input", { key: '0af9121c8b268192cc233e36c570a62e2ee5ad94', class: "block-dates__reason", size: "s", placeholder: t('Lcz_OptionalReason', { fallback: 'Optional reason' }), value: OPTIONAL_REASON, oninput: event => this.handleOptionalReason(event) }, h("wa-icon", { key: '411621247faaa6ebdf71b291b792934db0161dc2', slot: "start", name: "comment", label: t('Lcz_OptionalReason', { fallback: 'Optional reason' }) })))), h("wa-radio", { key: '9154b709150fc689e7242ec19b2059edac4497e3', value: "oos" }, t('Lcz_OutOfservice', { fallback: 'Out of service' }))))));
    }
};
IglBlockDatesView.style = iglBlockDatesViewCss();

export { IglBlockDatesView as igl_block_dates_view };
