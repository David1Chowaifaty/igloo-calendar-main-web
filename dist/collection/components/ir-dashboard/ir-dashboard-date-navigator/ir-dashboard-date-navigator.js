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
        return (h(Host, { key: 'cb1e9a90eb5becc6f3df518dc3e5ce6244b49d85' }, h("wa-card", { key: '22948b5accced033461b9ed3ea6ecce6b5d290d3', class: `date-navigator${this.date === today ? ' date-navigator--today' : ''}`, appearance: "plain" }, h("wa-button", { key: '6c2a451ce936425248f3ccc67774c44e36e94bec', class: "date-navigator__step", appearance: "plain", variant: "neutral", size: "l", disabled: this.date <= min, onClick: () => this.shift(-1) }, h("wa-icon", { key: 'cb89034b6843d3cc7b67612380bc68ce17e88d66', class: "ir-flip-rtl", name: "chevron-left", label: t('Lcz_GoToPreviousDay', { fallback: 'Previous day' }) })), h("time", { key: 'cf05edda3defd9b302608e8e32bfd7a0a42102cf', class: "date-navigator__date", dateTime: this.date }, h("span", { key: '0006b38c9ea8e3d584b61d69c2fb4fcaa9fe3fc7', class: "date-navigator__weekday" }, formatDate(this.date, 'dddd')), h("span", { key: 'd0770858117f8da3b442d6b789d86f98cd50ad71', class: { 'date-navigator__day': true, 'date-navigator__day--ends-in-one': dayOfMonth.endsWith('1') } }, dayOfMonth), h("span", { key: '0742ef8fcdaa454203b22e37446cd5f07f992440', class: "date-navigator__month" }, formatDate(this.date, 'MMMM'))), h("wa-button", { key: 'aab334deec2eaaa1c3195e70d2e6a706cf3a81c2', class: "date-navigator__step", appearance: "plain", variant: "neutral", size: "l", disabled: this.date >= max, onClick: () => this.shift(1) }, h("wa-icon", { key: '33e8058e1b9e458e69adafa4317ed9792b97515c', class: "ir-flip-rtl", name: "chevron-right", label: t('Lcz_GoToNextDay', { fallback: 'Next day' }) })))));
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
