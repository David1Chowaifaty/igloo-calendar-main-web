import { r as registerInstance, a as createEvent, h } from './index-7b3961ed.js';
import { l as locales } from './locales.store-daef23cc.js';
import { c as calculateDaysBetweenDates } from './booking-2b94eb2b.js';
import { h as hooks } from './moment-ab846cee.js';
import './index-17663a35.js';
import './utils-7eaed9ad.js';
import './index-40c31d5b.js';
import './calendar-data-cdc01d0d.js';
import './index-5ba472df.js';

const iglDateRangeCss = ":host{display:flex;min-width:280px}.custom-picker{width:100%}";

const IglDateRange = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        h("ir-date-select", { key: 'ae20a84a7221ceecca2a700e9a88bf75d7048a1b', disabled: this.disabled, class: "custom-picker", minDate: this.minDate, "aria-invalid": this.isInvalid, maxDate: this.maxDate, onDateChanged: e => this.handleDateChange(e), range: true,
            // hint={this.hint}
            dates: this.dates }, h("wa-icon", { key: 'd2bcc2d1644c615037556129482c1e23d1ebf58f', slot: "start", variant: "regular", name: "calendar" }), showNights && (h("span", { key: '76d533c05ab6563dff91fedd4dd1e1ffb88337f8', slot: "end", class: "date-range-nights" }, this.totalNights + (this.totalNights > 1 ? ` ${locales.entries.Lcz_Nights}` : ` ${locales.entries.Lcz_Night}`)))));
    }
    static get watchers() { return {
        "defaultData": ["handleDataChange"],
        "aria-invalid": ["handleAriaInvalidChange"]
    }; }
};
IglDateRange.style = iglDateRangeCss;

export { IglDateRange as igl_date_range };

//# sourceMappingURL=igl-date-range.entry.js.map