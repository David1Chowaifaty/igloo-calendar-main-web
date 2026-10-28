import { calculateDaysBetweenDates } from "../../utils/booking";
import { formatDate, toDate } from "../../utils/date/index";
import { formatCount } from "../../utils/number";
import { Host, h } from "@stencil/core";
import moment from "moment";
import { t } from "../../services/locale/t";
export class IrDateView {
    /** Raw from-date — accepts ISO string, JS Date, or Moment */
    from_date;
    /** Raw to-date — accepts ISO string, JS Date, or Moment */
    to_date;
    /** Show the night-count badge after the to-date */
    showDateDifference = true;
    /** Display style for both dates */
    format = 'medium';
    render() {
        const fromStr = formatDate(this.from_date, { style: this.format });
        const toStr = formatDate(this.to_date, { style: this.format });
        // Night-count is computed from the original values, never from the (possibly Hijri) display
        // string — re-parsing display text with a display-locale parser breaks once formatting can
        // switch calendar systems.
        const fromISO = toDate(this.from_date);
        const toISO = toDate(this.to_date);
        const diff = fromISO && toISO ? calculateDaysBetweenDates(moment(fromISO).format('YYYY-MM-DD'), moment(toISO).format('YYYY-MM-DD')) : 0;
        const nightLabel = diff === 1 ? t('Lcz_Night', { fallback: 'night' }) : t('Lcz_Nights', { fallback: 'nights' });
        return (h(Host, { key: '61d273bc6f2e655c1e24121b8fad0fc8d2f823b2' }, h("span", { key: '35d3cfa2a106904604905835516fd929fbdcf04a', part: "base" }, h("span", { key: 'f4342cf55a74b709d06ebe944be887970bd9bbab', part: "from-date" }, fromStr), h("span", { key: '1c59e1bc06983a9429c7f9661302eb9ddc724f67', part: "separator", "aria-hidden": "true" }, h("wa-icon", { key: '749e1f3e1da132290ed683b1e501b92b54d415d5', class: "ir-flip-rtl", name: "arrow-right", part: "separator-icon", "aria-hidden": "true" })), h("span", { key: 'da47037901c5a4469573c91359d5827aa1ae705d', part: "to-date" }, toStr), this.showDateDifference && diff > 0 && (h("span", { key: '4b50a0b9e4dfac4868f349726417f582da86c1c6', part: "night-count" }, formatCount(diff), "\u00A0", nightLabel)))));
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
            "format": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DateStyle",
                    "resolved": "\"day-only\" | \"long\" | \"medium\" | \"month-year\" | \"short\" | \"weekday-medium\"",
                    "references": {
                        "DateStyle": {
                            "location": "import",
                            "path": "@/utils/date",
                            "id": "src/utils/date/index.ts::DateStyle",
                            "referenceLocation": "DateStyle"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Display style for both dates"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "format",
                "defaultValue": "'medium'"
            }
        };
    }
}
