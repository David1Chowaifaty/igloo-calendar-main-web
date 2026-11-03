import { addDaysISO, todayISO } from "../../../utils/calendar-dates";
import { Host, h } from "@stencil/core";
import { formatDate } from "../../../utils/date/index";
import { t } from "../../../services/locale/t";
import { MAX_DAY_OFFSET } from "../dashboard.helpers";
/**
 * Day picker at the top of the dashboard's stats rail: a pill showing the selected day that opens a list of the days from
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
        return (h(Host, { key: 'b0b4be5b1c064bf5d5f9a37601d2cd4b289aa585' }, h("wa-dropdown", { key: '03f4aaa6e6064a22fbbd44b18862f48c74a2d956', class: "date-navigator", placement: "bottom-start", "onwa-select": e => this.handleSelect(e) }, h("button", { key: '2332522f5edae040a881123401db2592051821aa', type: "button", slot: "trigger", class: "date-navigator__trigger", "aria-label": t('Lcz_SelectDate', { fallback: 'Select date' }) }, h("wa-icon", { key: '3d5fedf9e7471b30c9593d63b5c4979bdacd62fc', class: "date-navigator__icon", name: "calendar-days", "aria-hidden": "true" }), h("time", { key: 'bff14a09a7e526e3e25de27ee219ae39e44870f2', class: "date-navigator__date", dateTime: this.date }, label(this.date)), h("wa-icon", { key: '632578ef8ced597078d2ff86e7836e035d919b1e', class: "date-navigator__chevron", name: "chevron-down", "aria-hidden": "true" })), days.map(day => (h("wa-dropdown-item", { key: day, value: day, type: "checkbox", checked: day === this.date }, label(day), day === today && (h("span", { slot: "details", class: "date-navigator__today" }, t('Lcz_Today', { fallback: 'Today' })))))))));
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
