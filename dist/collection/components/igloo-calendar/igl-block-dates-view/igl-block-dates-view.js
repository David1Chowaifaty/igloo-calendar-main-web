import { Host, h } from "@stencil/core";
import { BookingService } from "../../../services/booking-service/booking.service";
import locales from "../../../stores/locales.store";
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
    bookingService = new BookingService();
    async componentWillLoad() {
        try {
            this.releaseList = await this.bookingService.getBlockedInfo();
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
    emitData() {
        this.dataUpdateEvent.emit({
            key: 'blockDatesData',
            data: { ...this.blockDatesData },
        });
    }
    getReleaseHoursString() {
        // console.log("entry date", this.entryDate);
        // console.log("blocked date data", this.blockDatesData);
        let dt = this.entryDate ? new Date(this.entryDate) : new Date();
        if (this.entryDate && this.entryHour && this.entryMinute) {
            dt.setHours(this.entryHour, this.entryMinute, 0, 0);
        }
        else {
            dt.setHours(dt.getHours() + this.blockDatesData.RELEASE_AFTER_HOURS, dt.getMinutes(), 0, 0);
        }
        return dt.toLocaleString('default', { month: 'short' }) + ' ' + dt.getDate() + ', ' + this.formatNumber(dt.getHours()) + ':' + this.formatNumber(dt.getMinutes());
    }
    formatNumber(value) {
        return value < 10 ? `0${value}` : value;
    }
    handleOutOfService(evt) {
        this.blockDatesData.OUT_OF_SERVICE = evt.target.checked;
        if (this.blockDatesData.OUT_OF_SERVICE) {
            this.blockDatesData.OPTIONAL_REASON = '';
            this.blockDatesData.RELEASE_AFTER_HOURS = 0;
        }
        this.renderPage();
        this.emitData();
    }
    renderPage() {
        this.renderAgain = !this.renderAgain;
    }
    render() {
        return (h(Host, { key: '12a5a234566835380a082b87c7bc0a60412d94c1' }, h("div", { key: '9d19b8828c0a45baf6e36738e1aabffcf3cf93ba', class: `m-0 p-0 mb-1` }, h("div", { key: '6a59d657c74cc91c4b07c6454e032f5753dd0216', class: "text-left p-0" }, h("ir-date-view", { key: '26467b03de9b70dde200d8ec68761c87a4346342', format: 'ddd, MMM DD, YYYY', from_date: this.fromDate, dateOption: "YYYY-MM-DD", showDateDifference: false, to_date: this.toDate }))), h("div", { key: 'fcca548676114f6dfdbe684df511da5ea6ebfd8b', class: ` mb-1 text-left ${this.isEventHover && 'p-0'}` }, h("div", { key: '0a46c95eb5ba37f53c0dfd000c8e1e91247ccbb4', class: "mb-1 " }, h("label", { key: '976c3b14189787a4a558d8a8aa6c5b310473574e', class: "p-0 text-bold-700 font-medium-1 m-0 align-middle" }, locales.entries.Lcz_Reason, ":"), h("div", { key: 'ec642ff0bbff4284fd4fbf95f74af778f613103c', class: "p-0 m-0 pr-1  controlContainer checkBoxContainer d-inline-block align-middle" }, h("input", { key: '7a9db055d1f4bb977c2c3a47e2c5e84dbe389074', class: "form-control", type: "checkbox", checked: this.blockDatesData.OUT_OF_SERVICE, id: "userinput6", onChange: event => this.handleOutOfService(event) })), h("span", { key: '8bae4db6034aa06636be070184057a99a5125cac', class: "align-middle out-of-service-label" }, locales.entries.Lcz_OutOfservice)), !this.blockDatesData.OUT_OF_SERVICE ? (h("div", null, h("div", { class: "mb-1 d-flex  align-items-center" }, h("span", { class: "align-middle" }, locales.entries.Lcz_Or, " "), h("div", { class: "d-inline-flex col pr-0 align-middle" }, h("input", { class: "form-control", type: "text", placeholder: locales.entries.Lcz_OptionalReason, id: "optReason", value: this.blockDatesData.OPTIONAL_REASON, onInput: event => this.handleOptionalReason(event) }))), h("div", { class: "mb-1 w-100 pr-0 " }, h("span", { class: "text-bold-700 font-medium-1" }, locales.entries.Lcz_AutomaticReleaseIn, ": "), h("div", { class: "d-inline-block" }, h("select", { class: "form-control input-sm", id: "zSmallSelect", onChange: evt => this.handleReleaseAfterChange(evt) }, this.releaseList.map(releaseItem => (h("option", { value: +releaseItem.CODE_NAME, selected: Number(this.blockDatesData.RELEASE_AFTER_HOURS) == Number(releaseItem.CODE_NAME) }, releaseItem.CODE_VALUE_EN))))), this.blockDatesData.RELEASE_AFTER_HOURS ? (h("div", { class: "d-inline-block releaseTime" }, h("em", null, locales.entries.Lcz_On, " ", this.getReleaseHoursString()))) : null))) : null)));
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
