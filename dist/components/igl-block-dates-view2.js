import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$1 } from './ir-date-view2.js';

const iglBlockDatesViewCss = ".sc-igl-block-dates-view-h{display:block}.sc-igl-block-dates-view-h .controlContainer.sc-igl-block-dates-view{width:24px}.sc-igl-block-dates-view-h .checkBoxContainer.sc-igl-block-dates-view input.sc-igl-block-dates-view{height:1.2rem !important;width:30px}.releaseTime.sc-igl-block-dates-view{padding-left:5px}.out-of-service-label.sc-igl-block-dates-view{margin-left:5px !important}";
const IglBlockDatesViewStyle0 = iglBlockDatesViewCss;

const IglBlockDatesView = /*@__PURE__*/ proxyCustomElement(class IglBlockDatesView extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent", 7);
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
        console.log({ fromDate: this.fromDate, toDate: this.toDate });
        return (h(Host, { key: '2ca0d07c26a7e60d001b66ff29863a58f5e3b02e' }, h("div", { key: 'fc692ab65d3e581e61128b0b2ca6f2001a5c1eb8', class: `m-0 p-0 mb-1` }, h("div", { key: 'b73ed61606164ef8e13869c665247b21d87f4193', class: "text-left p-0" }, h("ir-date-view", { key: '245ac49753da876dee88b4ee4802e14608ef8a4c', from_date: this.fromDate, dateOption: "YYYY-MM-DD", showDateDifference: false, to_date: this.toDate }))), h("div", { key: '5bd30c57d686d82fc620b087963fceacdd497b74', class: ` mb-1 text-left ${this.isEventHover && 'p-0'}` }, h("div", { key: 'c59b918ed0d7e34d26da095d103b5801c1d5d7a2', class: "mb-1 " }, h("label", { key: '36dc31dc9dd8864461649c8df3d3801a2f0d5e8e', class: "p-0 text-bold-700 font-medium-1 m-0 align-middle" }, locales.entries.Lcz_Reason, ":"), h("div", { key: 'caea992a4f9c2f21f24f69d32bdbae8fbd880a60', class: "p-0 m-0 pr-1  controlContainer checkBoxContainer d-inline-block align-middle" }, h("input", { key: '73f4b0b71b36d6907b87c2f5b73354f4d5c5a067', class: "form-control", type: "checkbox", checked: this.blockDatesData.OUT_OF_SERVICE, id: "userinput6", onChange: event => this.handleOutOfService(event) })), h("span", { key: 'c7ccbfa963e5a0728dc233e28c6d2b1ac6be75b2', class: "align-middle out-of-service-label" }, locales.entries.Lcz_OutOfservice)), !this.blockDatesData.OUT_OF_SERVICE ? (h("div", null, h("div", { class: "mb-1 d-flex  align-items-center" }, h("span", { class: "align-middle" }, locales.entries.Lcz_Or, " "), h("div", { class: "d-inline-flex col pr-0 align-middle" }, h("input", { class: "form-control", type: "text", placeholder: locales.entries.Lcz_OptionalReason, id: "optReason", value: this.blockDatesData.OPTIONAL_REASON, onInput: event => this.handleOptionalReason(event) }))), h("div", { class: "mb-1 w-100 pr-0 " }, h("span", { class: "text-bold-700 font-medium-1" }, locales.entries.Lcz_AutomaticReleaseIn, ": "), h("div", { class: "d-inline-block" }, h("select", { class: "form-control input-sm", id: "zSmallSelect", onChange: evt => this.handleReleaseAfterChange(evt) }, this.releaseList.map(releaseItem => (h("option", { value: +releaseItem.CODE_NAME, selected: Number(this.blockDatesData.RELEASE_AFTER_HOURS) == Number(releaseItem.CODE_NAME) }, releaseItem.CODE_VALUE_EN))))), this.blockDatesData.RELEASE_AFTER_HOURS ? (h("div", { class: "d-inline-block releaseTime" }, h("em", null, locales.entries.Lcz_On, " ", this.getReleaseHoursString()))) : null))) : null)));
    }
    static get style() { return IglBlockDatesViewStyle0; }
}, [2, "igl-block-dates-view", {
        "defaultData": [16],
        "fromDate": [1, "from-date"],
        "toDate": [1, "to-date"],
        "entryDate": [1025, "entry-date"],
        "entryHour": [2, "entry-hour"],
        "isEventHover": [4, "is-event-hover"],
        "entryMinute": [2, "entry-minute"],
        "renderAgain": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-block-dates-view", "ir-date-view"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglBlockDatesView);
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglBlockDatesView as I, defineCustomElement as d };

//# sourceMappingURL=igl-block-dates-view2.js.map