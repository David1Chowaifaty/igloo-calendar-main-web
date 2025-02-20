import locales from "../../stores/locales.store";
import { calculateDaysBetweenDates } from "../../utils/booking";
import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrDateView {
    constructor() {
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
        const fromDate = moment(this.dates.from_date, 'MMM DD, YYYY').format('YYYY-MM-DD');
        const toDate = moment(this.dates.to_date, 'MMM DD, YYYY').format('YYYY-MM-DD');
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
            this.dates[key] = moment(date, this.dateOption).format('MMM DD, YYYY');
        }
        else if (date instanceof Date) {
            this.dates[key] = moment(date).format('MMM DD, YYYY');
        }
        else if (moment.isMoment(date)) {
            this.dates[key] = date.format('MMM DD, YYYY');
        }
        else {
            console.error('Unsupported date type');
        }
    }
    render() {
        return (h(Host, { key: '6e305fd34c7a4ca1ee63a9641cf84bbad5562d2d', class: "d-flex align-items-center" }, h("span", { key: 'dd95d2f7d071953631001b7ba0001ec5284a4c43' }, this.dates.from_date), ' ', h("svg", { key: '1b3a9c946eaf4a09be2bcd7921bc442bb86769d5', xmlns: "http://www.w3.org/2000/svg", class: "mx-01", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: 'ad2cd63b9533381a46f8e17e48b30ae69f135d55', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), h("span", { key: '0f44a3436f2212a2ed15300f1ce8c8b1f59fbb19' }, this.dates.to_date, ' ', this.showDateDifference && (h("span", { key: '7cae70e39001248a6fd9277bf5c927af626778cb', class: "mx-01" }, this.dates.date_difference, '   ', this.dates.date_difference > 1 ? ` ${locales.entries.Lcz_Nights}` : ` ${locales.entries.Lcz_Night}`)))));
    }
    static get is() { return "ir-date-view"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-date-view.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-date-view.css"]
        };
    }
    static get properties() {
        return {
            "from_date": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | Date | moment.Moment",
                    "resolved": "Date | Moment | string",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        },
                        "moment": {
                            "location": "global",
                            "id": "global::moment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "from_date",
                "reflect": false
            },
            "to_date": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | Date | moment.Moment",
                    "resolved": "Date | Moment | string",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        },
                        "moment": {
                            "location": "global",
                            "id": "global::moment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "to_date",
                "reflect": false
            },
            "showDateDifference": {
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
                "attribute": "show-date-difference",
                "reflect": false,
                "defaultValue": "true"
            },
            "dateOption": {
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
                "attribute": "date-option",
                "reflect": false,
                "defaultValue": "'YYYY-MM-DD'"
            }
        };
    }
    static get states() {
        return {
            "dates": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "from_date",
                "methodName": "handleFromDateChange"
            }, {
                "propName": "to_date",
                "methodName": "handleToDateChange"
            }];
    }
}
//# sourceMappingURL=ir-date-view.js.map
