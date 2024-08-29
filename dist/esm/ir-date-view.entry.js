import { r as registerInstance, h, H as Host } from './index-c553b3dc.js';
import { l as locales } from './locales.store-a1e3db22.js';
import { d as calculateDaysBetweenDates } from './booking-caef1e21.js';
import { h as hooks } from './moment-ab846cee.js';
import './index-1d7b1ff2.js';
import './utils-b90a23b3.js';
import './axios-ab377903.js';
import './calendar-data-666acc1f.js';

const irDateViewCss = ".sc-ir-date-view-h{display:block;font-size:13.65px !important;width:100%}.mx-01.sc-ir-date-view{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}";
const IrDateViewStyle0 = irDateViewCss;

const IrDateView = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.from_date = undefined;
        this.to_date = undefined;
        this.showDateDifference = true;
        this.dateOption = 'YYYY-MM-DD';
        this.dates = undefined;
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
        this.dates.date_diffrence = calculateDaysBetweenDates(fromDate, toDate);
    }
    convertDate(key, date) {
        this.dates = this.dates || {
            from_date: '',
            to_date: '',
            date_diffrence: 0,
        };
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
        return (h(Host, { key: '7b771cf1cca6916d29b004555a5090a49015944b', class: "d-flex align-items-center" }, h("span", { key: '6913fe7ede3fef6bb07083198f630c5f54d71ffd' }, this.dates.from_date), ' ', h("svg", { key: '842d53bd382c667d528b0cbebec599ea3e89d2c6', xmlns: "http://www.w3.org/2000/svg", class: "mx-01", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: 'f7034e0d9b19b7845b105a59f5defd9a48bc583e', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), h("span", { key: 'aa07152b851329bbb40c474ba1ac5fec111b9bd8' }, this.dates.to_date, ' ', this.showDateDifference && (h("span", { key: '0807dc5050b75d0177e1c51d6e32ace1638c8119', class: "mx-01" }, this.dates.date_diffrence, '   ', this.dates.date_diffrence > 1 ? ` ${locales.entries.Lcz_Nights}` : ` ${locales.entries.Lcz_Night}`)))));
    }
    static get watchers() { return {
        "from_date": ["handleFromDateChange"],
        "to_date": ["handleToDateChange"]
    }; }
};
IrDateView.style = IrDateViewStyle0;

export { IrDateView as ir_date_view };

//# sourceMappingURL=ir-date-view.entry.js.map