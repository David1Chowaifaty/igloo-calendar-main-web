import { addDaysISO, todayISO } from "../../../utils/calendar-dates";
import { Host, h } from "@stencil/core";
import { formatDate } from "../../../utils/date/index";
import { t } from "../../../services/locale/t";
import { MAX_DAY_OFFSET } from "../dashboard.helpers";
/** How many days either side of today the picker reaches. */
/**
 * Day picker for the dashboard, bounded to five days either side of today: weekday, day and month stacked
 * between the previous / next chevrons, all vertically centred. The day turns brand blue while it is today.
 */
export class IrDashboardDateNavigator {
    /** Selected day (`YYYY-MM-DD`). */
    date;
    /** How tightly the card is drawn; ir-dashboard steps it down when the desktop rail is short. */
    density = 'regular';
    /** Emitted with the new day when the user moves to the previous / next day. */
    dateChange;
    shift(days) {
        this.dateChange.emit(addDaysISO(this.date, days));
    }
    render() {
        const today = todayISO();
        const min = addDaysISO(today, -MAX_DAY_OFFSET);
        const max = addDaysISO(today, MAX_DAY_OFFSET);
        // Locale- and calendar-aware (Gregorian or Hijri), like every other displayed date.
        const dayOfMonth = formatDate(this.date, 'D');
        return (h(Host, { key: '5b52b3e0428d686f331da20622f325c0ef596ef2' }, h("wa-card", { key: '634f3fb0a00a7a7420acb8c18fd79602f037275a', class: `date-navigator${this.date === today ? ' date-navigator--today' : ''}`, appearance: "plain" }, h("wa-button", { key: '0862f2100796b261c8229cc9ae0c7572f4cf7b6f', class: "date-navigator__step", appearance: "plain", variant: "neutral", size: "l", disabled: this.date <= min, onClick: () => this.shift(-1) }, h("wa-icon", { key: '0efd73b76d589fa03f33fe5b1c993dff986a16d8', class: "ir-flip-rtl", name: "chevron-left", label: t('Lcz_GoToPreviousDay', { fallback: 'Previous day' }) })), h("time", { key: 'fabc863998f7cbf1b43aa7a09b2d3ba1aedb9911', class: "date-navigator__date", dateTime: this.date }, h("span", { key: 'c4af115b901c9d7e91ee0cd6e60bdb0b7b02ce21', class: "date-navigator__weekday" }, formatDate(this.date, 'dddd')), h("span", { key: 'c47f22299187a5e60d616544a7145556483ce8ba', class: { 'date-navigator__day': true, 'date-navigator__day--ends-in-one': dayOfMonth.endsWith('1') } }, dayOfMonth), h("span", { key: 'f7791ee4365e1c70d6586efa46bc80644f15d1dc', class: "date-navigator__month" }, formatDate(this.date, 'MMMM'))), h("wa-button", { key: 'c21707d51f0c7715d9e2eb65d63a6d92f546144d', class: "date-navigator__step", appearance: "plain", variant: "neutral", size: "l", disabled: this.date >= max, onClick: () => this.shift(1) }, h("wa-icon", { key: 'aa514f03cf0e2bb020618d5732d256b5f860bee2', class: "ir-flip-rtl", name: "chevron-right", label: t('Lcz_GoToNextDay', { fallback: 'Next day' }) })))));
    }
    static get is() { return "ir-dashboard-date-navigator"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-dashboard-date-navigator.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-dashboard-date-navigator.css"]
        };
    }
    static get properties() {
        return {
            "date": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ISODate",
                    "resolved": "string",
                    "references": {
                        "ISODate": {
                            "location": "import",
                            "path": "@/utils/calendar-dates",
                            "id": "src/utils/calendar-dates.ts::ISODate",
                            "referenceLocation": "ISODate"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Selected day (`YYYY-MM-DD`)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "date"
            },
            "density": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "RailDensity",
                    "resolved": "\"compact\" | \"regular\" | \"spacious\" | \"tight\"",
                    "references": {
                        "RailDensity": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-dashboard/types.ts::RailDensity",
                            "referenceLocation": "RailDensity"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "How tightly the card is drawn; ir-dashboard steps it down when the desktop rail is short."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "density",
                "defaultValue": "'regular'"
            }
        };
    }
    static get events() {
        return [{
                "method": "dateChange",
                "name": "dateChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted with the new day when the user moves to the previous / next day."
                },
                "complexType": {
                    "original": "ISODate",
                    "resolved": "string",
                    "references": {
                        "ISODate": {
                            "location": "import",
                            "path": "@/utils/calendar-dates",
                            "id": "src/utils/calendar-dates.ts::ISODate",
                            "referenceLocation": "ISODate"
                        }
                    }
                }
            }];
    }
}
