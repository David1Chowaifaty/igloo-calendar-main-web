import { r as registerInstance, h, e as Host } from './index-7b3961ed.js';
import { l as locales } from './locales.store-daef23cc.js';
import { c as calculateDaysBetweenDates } from './booking-2b94eb2b.js';
import { h as hooks } from './moment-ab846cee.js';
import './index-17663a35.js';
import './utils-7eaed9ad.js';
import './index-40c31d5b.js';
import './calendar-data-cdc01d0d.js';
import './index-5ba472df.js';

const irDateViewCss = ".sc-ir-date-view-h{display:block;font-size:13.65px !important;width:100%}.mx-01.sc-ir-date-view{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}";

const IrDateView = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    from_date;
    to_date;
    showDateDifference = true;
    dateOption = 'YYYY-MM-DD';
    format = 'MMM DD, YYYY';
    dates;
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
            this.dates[key] = hooks(date, this.dateOption).format(this.format);
        }
        else if (date instanceof Date) {
            this.dates[key] = hooks(date).format(this.format);
        }
        else if (hooks.isMoment(date)) {
            this.dates[key] = date.format(this.format);
        }
        else {
            console.error('Unsupported date type');
        }
    }
    render() {
        return (h(Host, { key: '56fd9a25571404f5fb6241054e395fef06ad5767', class: "d-flex align-items-center" }, h("span", { key: '5f57e1558def53bd73a684b5d2da1149cc938440' }, this.dates.from_date), ' ', h("svg", { key: '695d30a71146eaefae43b2bf1d56229ba3411cb5', xmlns: "http://www.w3.org/2000/svg", class: "mx-01", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: '0ff1dd230c1b644bc23d78c65405ff47331aaedf', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), h("span", { key: '9cb59c4bf13d729a86445809526171844106ba33' }, this.dates.to_date, ' ', this.showDateDifference && (h("span", { key: '61fd325b05471ceeddf18d90159a95ed2c1cc371', class: "mx-01" }, this.dates.date_difference, '   ', this.dates.date_difference > 1 ? ` ${locales.entries.Lcz_Nights}` : ` ${locales.entries.Lcz_Night}`)))));
    }
    static get watchers() { return {
        "from_date": ["handleFromDateChange"],
        "to_date": ["handleToDateChange"]
    }; }
};
IrDateView.style = irDateViewCss;

export { IrDateView as ir_date_view };

//# sourceMappingURL=ir-date-view.entry.js.map