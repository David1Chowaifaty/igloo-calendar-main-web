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
        return (h(Host, { key: 'a1644a3781979a1e47da6aa1e6fad57bfdbe5a64' }, h("div", { key: '9bd24688921ef3872ba6f174846924a3094cf75a', class: "block-dates" }, h("ir-date-view", { key: 'bdc8811848123f81253001b835d5ffb324d64427', format: 'weekday-medium', from_date: this.fromDate, to_date: this.toDate, showDateDifference: false }), h("wa-radio-group", { key: '40a5eb6e2eabf583d44319c7adebf9afd1626e51', class: "block-dates__mode", size: "m", orientation: "vertical", value: OUT_OF_SERVICE ? 'oos' : 'auto', onchange: evt => this.handleModeChange(evt) }, h("span", { key: '4646b157e4e0c6f5a2c769512deacd569cc23aed', slot: "label", class: "block-dates__label" }, t('Lcz_Reason', { fallback: 'Reason' })), h("wa-radio", { key: 'fb7117ae5c5ecf9e341c7b3d3bc18a0cb940e505', value: "auto" }, t('Lcz_AutomaticReleaseIn', { fallback: 'Automatic release in' })), !OUT_OF_SERVICE && (h("div", { key: 'e1420b5bd6d5e19a58407ac0d43f56103f42bc57', class: "block-dates__fields" }, h("wa-select", { key: 'd77c4192f3a4728421d7b54605983da27a38c500', class: "block-dates__select", size: "s", value: releaseValue, defaultValue: releaseValue, onchange: evt => this.handleReleaseAfterChange(evt) }, h("wa-icon", { key: '4153903b82e8cbaded111f60a251f0a11ac69396', slot: "start", name: "clock", label: t('Lcz_AutomaticReleaseIn', { fallback: 'Automatic release in' }) }), releaseHours > 0 && (h("span", { key: '260cb3f56070fbabd496ef2b9fc084c18b42411d', slot: "end", class: "block-dates__release-on" }, t('Lcz_On', { fallback: 'On' }), " ", this.getReleaseHoursString())), this.releaseList.map(releaseItem => (h("wa-option", { value: String(Number(releaseItem.CODE_NAME) || 0) }, getSetupEntryLabel(releaseItem))))), h("wa-input", { key: '8968e2f6adee614bf6a1424073704e362281816c', class: "block-dates__reason", size: "s", placeholder: t('Lcz_OptionalReason', { fallback: 'Optional reason' }), value: OPTIONAL_REASON, oninput: event => this.handleOptionalReason(event) }, h("wa-icon", { key: 'ec83af6f4b826e865aa1fc18ebc669a55dd29997', slot: "start", name: "comment", label: t('Lcz_OptionalReason', { fallback: 'Optional reason' }) })))), h("wa-radio", { key: 'bae84bb1fedb8d1de0f74d3f34ae0d6f4a21cb73', value: "oos" }, t('Lcz_OutOfservice', { fallback: 'Out of service' }))))));
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
