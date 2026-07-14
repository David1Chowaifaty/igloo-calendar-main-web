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
        return (h(Host, { key: '0a8b5fc36b164f68295649a542a2f674ab9726f6' }, h("span", { key: '5d2c3b5e82c5bbf65a2c4cd601b35ce7ec09bf96', part: "base" }, h("span", { key: '0aac25c9acae96ac2fa5ad8970bc88962645eeef', part: "from-date" }, fromStr), h("span", { key: 'e0515af9ced47043428cdc997abb05079f78c6b4', part: "separator", "aria-hidden": "true" }, h("svg", { key: 'e59b68ecf66433fa10cf2dbb7050b4b9f454258c', xmlns: "http://www.w3.org/2000/svg", part: "separator-icon", viewBox: "0 0 512 512", "aria-hidden": "true", focusable: "false" }, h("path", { key: '7990d8fcb4520024d00a4e5a0d2951375f6be661', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" }))), h("span", { key: 'c1a278becca2f19509c33caa786daa0e71e1f98b', part: "to-date" }, toStr), this.showDateDifference && diff > 0 && (h("span", { key: '41564435cdc1c0696f4972f25b7e83dd23c76cc5', part: "night-count" }, diff, "\u00A0", nightLabel)))));
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
