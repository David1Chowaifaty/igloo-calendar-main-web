import localization_store from "../../../../../stores/app.store";
import localizedWords from "../../../../../stores/localization.store";
import { Host, h } from "@stencil/core";
import { addDays, format } from "date-fns";
export class IrDatePopup {
    constructor() {
        this.minDate = addDays(new Date(), 0);
        this.dates = {
            start: null,
            end: null,
        };
        this.isPopoverOpen = false;
    }
    handleDatesChange() {
        if (this.dates.end && this.isPopoverOpen) {
            this.popover.toggleVisibility();
        }
    }
    componentWillLoad() {
        this.minDate.setHours(0, 0, 0, 0);
    }
    dateTrigger() {
        return (h("div", { class: "popover-trigger relative w-full sm:w-fit", slot: "trigger" }, h("ir-icons", { name: "calendar", svgClassName: "size-[18px]" }), h("div", { class: "flex h-[3rem] flex-1 flex-col justify-center gap-0.5" }, h("p", { class: "label" }, localizedWords.entries.Lcz_Dates), h("div", { class: "dates" }, this.dates.start ? (format(this.dates.start, 'MMM dd', { locale: localization_store.selectedLocale })) : (h("span", { class: "text-slate-500" }, localizedWords.entries.Lcz_CheckIn)), h("span", null, " - "), this.dates.end ? (format(this.dates.end, 'MMM dd', { locale: localization_store.selectedLocale })) : (h("span", { class: "text-slate-500" }, localizedWords.entries.Lcz_CheckOut))))));
    }
    render() {
        return (h(Host, { key: 'ad8fd348ead6d8c09e3438228ad06072190b5b3d' }, h("ir-popover", { key: '9c07905e4d887accb5a78f2f1da98e899f4d2400', showCloseButton: false, placement: "auto", ref: el => (this.popover = el), onOpenChange: e => (this.isPopoverOpen = e.detail) }, this.dateTrigger(), h("div", { key: '5d7fc487401135addbfc4a9d88764e153f4318f3', slot: "popover-content", class: "date-range-container w-full border-0 p-4 pb-6 shadow-none sm:w-auto sm:border sm:p-4 sm:shadow-sm md:p-6 " }, h("ir-date-range", { key: '51150f963efaa899b3fc100b7794269447cccde6', fromDate: this.dates.start, toDate: this.dates.end, locale: localization_store.selectedLocale, maxSpanDays: 5, minDate: this.minDate })))));
    }
    static get is() { return "ir-date-popup"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-date-popup.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-date-popup.css"]
        };
    }
    static get properties() {
        return {
            "dates": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ start: Date | null; end: Date | null }",
                    "resolved": "{ start: Date; end: Date; }",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "{\r\n    start: null,\r\n    end: null,\r\n  }"
            }
        };
    }
    static get states() {
        return {
            "isPopoverOpen": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "dates",
                "methodName": "handleDatesChange"
            }];
    }
}
//# sourceMappingURL=ir-date-popup.js.map
