import { r as registerInstance, h, H as Host } from './index-jhiFt_tX.js';
import { l as locales } from './locales.store-BsXBgatZ.js';
import { k as calculateDaysBetweenDates } from './booking-D1am6tKx.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import './index-C7eXIDl2.js';
import './index-DeW5X45W.js';
import './axios-Bpmk_xoW.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './calendar-data-D2MMPhx6.js';

const irDateViewCss = ".sc-ir-date-view-h{display:block;font-size:13.65px !important;width:100%}.mx-01.sc-ir-date-view{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}";

const IrDateView = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.showDateDifference = true;
        this.dateOption = 'YYYY-MM-DD';
    }
    componentWillLoad() {
        this.initializeDates();
    }
    handleFromDateChange(newVal, oldVal) {
        if (newVal !== oldVal) {
            this.initializeDates();
        }
    }
    handleToDateChange(newVal, oldVal) {
        if (newVal !== oldVal) {
            this.initializeDates();
        }
    }
    initializeDates() {
        this.convertDate('from_date', this.from_date);
        this.convertDate('to_date', this.to_date);
        const fromDate = hooks(this.dates.from_date, 'MMM DD, YYYY').format('YYYY-MM-DD');
        const toDate = hooks(this.dates.to_date, 'MMM DD, YYYY').format('YYYY-MM-DD');
        this.dates.date_difference = calculateDaysBetweenDates(fromDate, toDate);
    }
    convertDate(key, date) {
        this.dates = this.dates || {
            from_date: '',
            to_date: '',
            date_difference: 0,
        };
        if (!date) {
            return;
        }
        if (typeof date === 'string') {
            this.dates[key] = hooks(date, this.dateOption).format('MMM DD, YYYY');
        }
        else if (date instanceof Date) {
            this.dates[key] = hooks(date).format('MMM DD, YYYY');
        }
        else if (hooks.isMoment(date)) {
            this.dates[key] = date.format('MMM DD, YYYY');
        }
        else {
            console.error('Unsupported date type');
        }
    }
    render() {
        return (h(Host, { key: '00ec092c875abd4d71fe0792df4306d564b0c28c', class: "d-flex align-items-center" }, h("span", { key: 'e3fd01c86881d6bca6f6fc0686935b1abcdde9c0' }, this.dates.from_date), ' ', h("svg", { key: '7f09d1811ffaad42a28f113ce253d52aa088a2e0', xmlns: "http://www.w3.org/2000/svg", class: "mx-01", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: '9d914f948486b64c2684ad7a5e4e75977f63a00e', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), h("span", { key: 'b84aba5dc038c91cebc346e717d010c284030f5a' }, this.dates.to_date, ' ', this.showDateDifference && (h("span", { key: 'f00d0abc5e330e72852883b5416ae62e73d7e8e8', class: "mx-01" }, this.dates.date_difference, '   ', this.dates.date_difference > 1 ? ` ${locales.entries.Lcz_Nights}` : ` ${locales.entries.Lcz_Night}`)))));
    }
    static get watchers() { return {
        "from_date": ["handleFromDateChange"],
        "to_date": ["handleToDateChange"]
    }; }
};
IrDateView.style = irDateViewCss;

export { IrDateView as ir_date_view };
//# sourceMappingURL=ir-date-view.entry.js.map

//# sourceMappingURL=ir-date-view.entry.js.map