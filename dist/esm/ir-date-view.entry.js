import { r as registerInstance, h, H as Host } from './index-d2ec0a5d.js';
import { l as locales } from './locales.store-91c051f0.js';
import { c as calculateDaysBetweenDates } from './booking-bcc64520.js';
import { h as hooks } from './moment-ab846cee.js';
import './index-a32c4342.js';
import './calendar-data-956fa3f1.js';
import './calendar-dates.store-26a46226.js';

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
        return (h(Host, { key: '7724caf1e1005e29eb249353faf9209657b35341', class: "d-flex align-items-center" }, h("span", { key: '1796ef2a9725cc6ebb49ff08f32d37d0a1bcc004' }, this.dates.from_date), ' ', h("svg", { key: '962119ab292eed2464b96471c76982579846b639', xmlns: "http://www.w3.org/2000/svg", class: "mx-01", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: '19a3afca1e831458b9c0e6cded799f4393ee9d76', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), h("span", { key: '4ba6a1f04713f8122903a2df7954c24229e829cc' }, this.dates.to_date, ' ', this.showDateDifference && (h("span", { key: 'cdf99d753f165c5a3abf1b34d2448f4452cdc865', class: "mx-01" }, this.dates.date_diffrence, '   ', this.dates.date_diffrence > 1 ? ` ${locales.entries.Lcz_Nights}` : ` ${locales.entries.Lcz_Night}`)))));
    }
    static get watchers() { return {
        "from_date": ["handleFromDateChange"],
        "to_date": ["handleToDateChange"]
    }; }
};
IrDateView.style = IrDateViewStyle0;

export { IrDateView as ir_date_view };

//# sourceMappingURL=ir-date-view.entry.js.map