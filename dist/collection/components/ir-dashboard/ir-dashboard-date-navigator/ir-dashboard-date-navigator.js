import { addDaysISO, todayISO } from "../../../utils/calendar-dates";
import { Host, h } from "@stencil/core";
import { formatDate } from "../../../utils/date/index";
import { t } from "../../../services/locale/t";
import { MAX_DAY_OFFSET } from "../dashboard.helpers";
/**
 * Day picker for the dashboard header: a pill showing the selected day that opens a list of the days from
 * `MAX_DAY_OFFSET` before today to `MAX_DAY_OFFSET` after it.
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
        const days = Array.from({ length: MAX_DAY_OFFSET * 2 + 1 }, (_, index) => addDaysISO(today, index - MAX_DAY_OFFSET));
        // Locale- and calendar-aware (Gregorian or Hijri), like every other displayed date.
        const label = (day) => formatDate(day, 'dddd, D MMMM');
        return (h(Host, { key: '1dc743076d9283fc1fac0ed2c96e5584f2da6c0e' }, h("wa-dropdown", { key: 'ceee067811ee5548a743ff94e5cc59d0c3e4302d', class: "date-navigator", placement: "bottom-end", "onwa-select": e => this.handleSelect(e) }, h("button", { key: '2b7f15cdbcd293a4f647d8fd566830269aecc6f3', type: "button", slot: "trigger", class: "date-navigator__trigger", "aria-label": t('Lcz_SelectDate', { fallback: 'Select date' }) }, h("wa-icon", { key: '640b349905f228a7bcac93cf1d673a2719e33ea9', class: "date-navigator__icon", name: "calendar-days", "aria-hidden": "true" }), h("time", { key: 'd97001bfcd44ce612f39e6a756c392de2d8e337f', class: "date-navigator__date", dateTime: this.date }, label(this.date)), h("wa-icon", { key: 'da763f478e285f6a1d4b9db5a98e052cfb8ffd64', class: "date-navigator__chevron", name: "chevron-down", "aria-hidden": "true" })), days.map(day => (h("wa-dropdown-item", { key: day, value: day, type: "checkbox", checked: day === this.date }, label(day), day === today && (h("span", { slot: "details", class: "date-navigator__today" }, t('Lcz_Today', { fallback: 'Today' })))))))));
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
