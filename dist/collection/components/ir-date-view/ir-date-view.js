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
        return (h(Host, { key: '2c214ee4a709e91890d3cad71908b17f57401d6f' }, h("span", { key: '3e9377ceaf1368e41f3d5ea0e7ad938b60fea170', part: "base" }, h("span", { key: '96a778d20d293c8ee4c022a7b0e6cf1807a5bee9', part: "from-date" }, fromStr), h("span", { key: '119ab85e0bfbd69c51f928632b648f4717b8a1b0', part: "separator", "aria-hidden": "true" }, h("wa-icon", { key: 'bd4e8acdf6837bdb03d19f7089979f058146db80', class: "ir-flip-rtl", name: "arrow-right", part: "separator-icon", "aria-hidden": "true" })), h("span", { key: '365e9d013b82c7260c788f4046734429e14c4eca', part: "to-date" }, toStr), this.showDateDifference && diff > 0 && (h("span", { key: 'bf1c7c3118790c6f52804541664f479e3deeea49', part: "night-count" }, formatCount(diff), "\u00A0", nightLabel)))));
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
