import { Host, h } from "@stencil/core";
import { SetupService, getSetupEntryLabel } from "../../../services/setup/index";
import { t } from "../../../services/locale/t";
import { formatDate } from "../../../utils/date/index";
export class IglBlockDatesView {
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
    static get is() { return "igl-block-dates-view"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-block-dates-view.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-block-dates-view.css"]
        };
    }
    static get properties() {
        return {
            "defaultData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "fromDate": {
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
                "attribute": "from-date"
            },
            "toDate": {
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
                "attribute": "to-date"
            },
            "entryDate": {
                "type": "string",
                "mutable": true,
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
                "attribute": "entry-date"
            },
            "entryHour": {
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
                "attribute": "entry-hour"
            },
            "isEventHover": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "is-event-hover",
                "defaultValue": "false"
            },
            "entryMinute": {
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
                "attribute": "entry-minute"
            }
        };
    }
    static get states() {
        return {
            "renderAgain": {}
        };
    }
    static get events() {
        return [{
                "method": "dataUpdateEvent",
                "name": "dataUpdateEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }];
    }
}
