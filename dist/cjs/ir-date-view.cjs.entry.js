'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aeea0adf.js');
const locales_store = require('./locales.store-03c357e0.js');
const booking = require('./booking-d5a30757.js');
const moment = require('./moment-1780b03a.js');
require('./utils-d4ccb4e4.js');
require('./index-db8b30d9.js');
require('./axios-6e678d52.js');
require('./calendar-data-c22d8f90.js');

const irDateViewCss = ".sc-ir-date-view-h{display:block;font-size:13.65px !important;width:100%}.mx-01.sc-ir-date-view{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}";
const IrDateViewStyle0 = irDateViewCss;

const IrDateView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        const fromDate = moment.hooks(this.dates.from_date, 'MMM DD, YYYY').format('YYYY-MM-DD');
        const toDate = moment.hooks(this.dates.to_date, 'MMM DD, YYYY').format('YYYY-MM-DD');
        this.dates.date_difference = booking.calculateDaysBetweenDates(fromDate, toDate);
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
            this.dates[key] = moment.hooks(date, this.dateOption).format('MMM DD, YYYY');
        }
        else if (date instanceof Date) {
            this.dates[key] = moment.hooks(date).format('MMM DD, YYYY');
        }
        else if (moment.hooks.isMoment(date)) {
            this.dates[key] = date.format('MMM DD, YYYY');
        }
        else {
            console.error('Unsupported date type');
        }
    }
    render() {
        return (index.h(index.Host, { key: '9da1175261155caaa9d7972817e804153902cb30', class: "d-flex align-items-center" }, index.h("span", { key: '6606e181cbb532b3e796d5af74ec3dca7078b276' }, this.dates.from_date), ' ', index.h("svg", { key: '7bc5921e45b84060f9510fccdb726fe251769ef2', xmlns: "http://www.w3.org/2000/svg", class: "mx-01", height: "14", width: "14", viewBox: "0 0 512 512" }, index.h("path", { key: 'b1ff6bd0dc11309794edac0ca4afbb62537abab5', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), index.h("span", { key: '0449ac04005f0f12b216d5e2a013a9d497ab6a8b' }, this.dates.to_date, ' ', this.showDateDifference && (index.h("span", { key: '007f3e4797d8ebb28ff78d4a5a70ea8e3ca9d86e', class: "mx-01" }, this.dates.date_difference, '   ', this.dates.date_difference > 1 ? ` ${locales_store.locales.entries.Lcz_Nights}` : ` ${locales_store.locales.entries.Lcz_Night}`)))));
    }
    static get watchers() { return {
        "from_date": ["handleFromDateChange"],
        "to_date": ["handleToDateChange"]
    }; }
};
IrDateView.style = IrDateViewStyle0;

exports.ir_date_view = IrDateView;

//# sourceMappingURL=ir-date-view.cjs.entry.js.map