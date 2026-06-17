import locales from "../../stores/locales.store";
import { calculateDaysBetweenDates } from "../../utils/booking";
import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrDateView {
    /** Raw from-date — accepts ISO string, JS Date, or Moment */
    from_date;
    /** Raw to-date — accepts ISO string, JS Date, or Moment */
    to_date;
    /** Show the night-count badge after the to-date */
    showDateDifference = true;
    /** Input format used when `from_date` / `to_date` are plain strings */
    dateOption = 'YYYY-MM-DD';
    /** Display format for both dates */
    format = 'MMM DD, YYYY';
    formatDate(date) {
        if (!date)
            return '';
        if (typeof date === 'string')
            return moment(date, this.dateOption).format(this.format);
        if (date instanceof Date)
            return moment(date).format(this.format);
        if (moment.isMoment(date))
            return date.format(this.format);
        return '';
    }
    render() {
        const fromStr = this.formatDate(this.from_date);
        const toStr = this.formatDate(this.to_date);
        const diff = calculateDaysBetweenDates(moment(fromStr, this.format).format('YYYY-MM-DD'), moment(toStr, this.format).format('YYYY-MM-DD'));
        const nightLabel = diff === 1 ? locales.entries.Lcz_Night : locales.entries.Lcz_Nights;
        return (h(Host, { key: 'dd74304aefb7b63310c180b9b60da7c3d039e2f9' }, h("span", { key: '9021a4c9cf55dd095d6258258a247f3ff0eeaad5', part: "base" }, h("span", { key: 'fe516e8d07f86cd379e899a0ae6c68581d43666a', part: "from-date" }, fromStr), h("span", { key: 'b79c760d2963211bb25fb96981beac00f442af61', part: "separator", "aria-hidden": "true" }, h("svg", { key: '943d773a33286240fa91c7495310e11d7db91f84', xmlns: "http://www.w3.org/2000/svg", part: "separator-icon", viewBox: "0 0 512 512", "aria-hidden": "true", focusable: "false" }, h("path", { key: '20e94de19c571cce2c3df4a239586db09f4e0715', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" }))), h("span", { key: '6aae12fc223c1db3f0cbb8ac306aa19a42d2cfa0', part: "to-date" }, toStr), this.showDateDifference && diff > 0 && (h("span", { key: 'bd21d38b81f098518ecb19a051f76a003a6333fe', part: "night-count" }, diff, "\u00A0", nightLabel)))));
    }
    static get is() { return "ir-date-view"; }
    static get encapsulation() { return "shadow"; }
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
                    "text": "Raw from-date \u2014 accepts ISO string, JS Date, or Moment"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "from_date"
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
                    "text": "Raw to-date \u2014 accepts ISO string, JS Date, or Moment"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "to_date"
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
                    "text": "Show the night-count badge after the to-date"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-date-difference",
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
                    "text": "Input format used when `from_date` / `to_date` are plain strings"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "date-option",
                "defaultValue": "'YYYY-MM-DD'"
            },
            "format": {
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
                    "text": "Display format for both dates"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "format",
                "defaultValue": "'MMM DD, YYYY'"
            }
        };
    }
}
