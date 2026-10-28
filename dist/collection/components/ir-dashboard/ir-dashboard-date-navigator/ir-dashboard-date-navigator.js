import { addDaysISO, todayISO } from "../../../utils/calendar-dates";
import { Host, h } from "@stencil/core";
import { formatDate } from "../../../utils/date/index";
import { t } from "../../../services/locale/t";
import { MAX_DAY_OFFSET } from "../dashboard.helpers";
/**
 * Day picker for the dashboard header: a pill showing the selected day that opens a list of the days from
 * today to `MAX_DAY_OFFSET` after it. Past days aren't offered.
 */
export class IrDashboardDateNavigator {
    /** Selected day (`YYYY-MM-DD`). */
    date;
    /** Emitted with the new day when the user picks another day. */
    dateChange;
    handleSelect(e) {
        e.stopPropagation();
        const value = e.detail.item.value;
        if (value && value !== this.date) {
            this.dateChange.emit(value);
        }
    }
    render() {
        const today = todayISO();
        const days = Array.from({ length: MAX_DAY_OFFSET + 1 }, (_, index) => addDaysISO(today, index));
        // Locale- and calendar-aware (Gregorian or Hijri), like every other displayed date.
        const label = (day) => formatDate(day, 'dddd, D MMMM');
        return (h(Host, { key: 'fff8a53b47d2ebbfce696b5d8e2578fc7246c240' }, h("wa-dropdown", { key: '694491afe945128001f954b824c2457cb6e56190', class: "date-navigator", placement: "bottom-end", "onwa-select": e => this.handleSelect(e) }, h("button", { key: '2ff9c065aa54e48c3dd6cc1cf238845eae0f4210', type: "button", slot: "trigger", class: "date-navigator__trigger", "aria-label": t('Lcz_SelectDate', { fallback: 'Select date' }) }, h("wa-icon", { key: '5259ac89991ceedab2b9a8fa0778fc914985d80e', class: "date-navigator__icon", name: "calendar-days", "aria-hidden": "true" }), h("time", { key: '0c86f9ea62ee2cc77ff8049707d1b8b2ae8cda73', class: "date-navigator__date", dateTime: this.date }, label(this.date)), h("wa-icon", { key: 'e6683ea4196abfa249e6c07278c08ae07e2b5043', class: "date-navigator__chevron", name: "chevron-down", "aria-hidden": "true" })), days.map(day => (h("wa-dropdown-item", { key: day, value: day, type: "checkbox", checked: day === this.date }, label(day), day === today && (h("span", { slot: "details", class: "date-navigator__today" }, t('Lcz_Today', { fallback: 'Today' })))))))));
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
                    "text": "Emitted with the new day when the user picks another day."
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
