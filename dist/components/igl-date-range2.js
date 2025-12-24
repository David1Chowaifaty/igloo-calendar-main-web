import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { c as calculateDaysBetweenDates } from './booking.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$2 } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const iglDateRangeCss = ":host{display:flex;min-width:280px}.custom-picker{width:100%}";
const IglDateRangeStyle0 = iglDateRangeCss;

const IglDateRange = /*@__PURE__*/ proxyCustomElement(class IglDateRange extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.dateSelectEvent = createEvent(this, "dateSelectEvent", 7);
        this.dateRangeChange = createEvent(this, "dateRangeChange", 7);
        this.toast = createEvent(this, "toast", 7);
    }
    size = 'small';
    defaultData;
    disabled = false;
    minDate;
    dateLabel;
    maxDate;
    withDateDifference = true;
    variant = 'default';
    hint;
    renderAgain = false;
    dateSelectEvent;
    dateRangeChange;
    toast;
    totalNights = 0;
    fromDate = hooks().toDate();
    toDate = hooks().add(1, 'day').toDate();
    isInvalid;
    componentWillLoad() {
        this.initializeDates();
    }
    handleDataChange(newValue, oldValue) {
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            this.initializeDates();
        }
    }
    initializeDates() {
        if (this.defaultData) {
            if (this.defaultData.fromDate) {
                this.fromDate = new Date(this.defaultData.fromDate);
                this.fromDate.setHours(0, 0, 0, 0);
            }
            if (this.defaultData.toDate) {
                this.toDate = new Date(this.defaultData.toDate);
                this.toDate.setHours(0, 0, 0, 0);
            }
        }
        if (this.fromDate && this.toDate) {
            this.calculateTotalNights();
        }
    }
    calculateTotalNights() {
        this.totalNights = calculateDaysBetweenDates(hooks(this.fromDate).format('YYYY-MM-DD'), hooks(this.toDate).format('YYYY-MM-DD'));
    }
    handleDateSelectEvent(key, data = '') {
        this.dateSelectEvent.emit({ key, data });
    }
    handleDateChange(evt) {
        const { start, end } = evt.detail;
        this.fromDate = start.toDate();
        this.toDate = end.toDate();
        this.calculateTotalNights();
        this.handleDateSelectEvent('selectedDateRange', {
            fromDate: this.fromDate.getTime(),
            toDate: this.toDate.getTime(),
            fromDateStr: start.format('DD MMM YYYY'),
            toDateStr: end.format('DD MMM YYYY'),
            dateDifference: this.totalNights,
        });
        this.dateRangeChange.emit({
            checkIn: start,
            checkOut: end,
        });
        this.renderAgain = !this.renderAgain;
    }
    // private renderDateSummary(showNights: boolean) {
    //   const fromDateDisplay = moment(this.fromDate).format('MMM DD, YYYY');
    //   const toDateDisplay = moment(this.toDate).format('MMM DD, YYYY');
    //   const shouldRenderNights = showNights && this.totalNights > 0;
    //   return (
    //     <div
    //       class={{
    //         'date-range-display': true,
    //         'date-range-display--disabled': this.disabled,
    //       }}
    //     >
    //       <wa-icon variant="regular" name="calendar"></wa-icon>
    //       <span class="date-range-date">{fromDateDisplay}</span>
    //       <wa-icon name="arrow-right"></wa-icon>
    //       <span class="date-range-date">{toDateDisplay}</span>
    //       {shouldRenderNights && (
    //         <span class="date-range-nights">{this.totalNights + (this.totalNights > 1 ? ` ${locales.entries.Lcz_Nights}` : ` ${locales.entries.Lcz_Night}`)}</span>
    //       )}
    //     </div>
    //   );
    // }
    get dates() {
        const fromDate = hooks(this.fromDate).format('YYYY-MM-DD');
        const toDate = hooks(this.toDate).format('YYYY-MM-DD');
        return [fromDate, toDate];
    }
    handleAriaInvalidChange(newValue) {
        this.isInvalid = newValue;
    }
    render() {
        const showNights = this.variant === 'booking' && this.withDateDifference;
        return (
        // <Host size={this.size}>
        //   <div class={`date-range-shell ${this.disabled ? 'disabled' : ''} ${this.variant === 'booking' ? 'picker' : ''}`}>
        //     <ir-date-range
        //       maxDate={this.maxDate}
        //       class={'date-range-input'}
        //       disabled={this.disabled}
        //       fromDate={this.fromDate}
        //       toDate={this.toDate}
        //       minDate={this.minDate}
        //       autoApply
        //       data-state={this.disabled ? 'disabled' : 'active'}
        //       onDateRangeChange={evt => {
        //         this.handleDateChange(evt);
        //       }}
        //     ></ir-date-range>
        //     {this.renderDateSummary(showNights)}
        //   </div>
        // </Host>
        h("ir-custom-date-picker", { key: 'c49dece12fcabdd64d0275ee24e55cf0a191f62d', disabled: this.disabled, class: "custom-picker", minDate: this.minDate, "aria-invalid": this.isInvalid, maxDate: this.maxDate, onDateChanged: e => this.handleDateChange(e), range: true, hint: this.hint, dates: this.dates }, h("wa-icon", { key: '6d568a4e290207cf4e712878c271327c073e53b5', slot: "start", variant: "regular", name: "calendar" }), showNights && (h("span", { key: 'f7d8a8b5940e64af17b1cc37e45aae887ddba657', slot: "end", class: "date-range-nights" }, this.totalNights + (this.totalNights > 1 ? ` ${locales.entries.Lcz_Nights}` : ` ${locales.entries.Lcz_Night}`)))));
    }
    static get watchers() { return {
        "defaultData": ["handleDataChange"],
        "aria-invalid": ["handleAriaInvalidChange"]
    }; }
    static get style() { return IglDateRangeStyle0; }
}, [1, "igl-date-range", {
        "size": [513],
        "defaultData": [16],
        "disabled": [516],
        "minDate": [1, "min-date"],
        "dateLabel": [1, "date-label"],
        "maxDate": [1, "max-date"],
        "withDateDifference": [4, "with-date-difference"],
        "variant": [1],
        "hint": [1],
        "renderAgain": [32],
        "fromDate": [32],
        "toDate": [32],
        "isInvalid": [32]
    }, undefined, {
        "defaultData": ["handleDataChange"],
        "aria-invalid": ["handleAriaInvalidChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-date-range", "ir-custom-date-picker", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglDateRange);
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglDateRange as I, defineCustomElement as d };

//# sourceMappingURL=igl-date-range2.js.map