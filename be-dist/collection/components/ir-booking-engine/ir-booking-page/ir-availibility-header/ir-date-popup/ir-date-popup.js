import localization_store from "../../../../../stores/app.store";
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
        return (h("div", { class: "popover-trigger w-full relative sm:w-fit", slot: "trigger" }, h("ir-icons", { name: "calendar", svgClassName: "size-[18px]" }), h("div", { class: "flex-1 " }, h("p", { class: "label" }, "Dates"), h("div", { class: "dates" }, this.dates.start ? format(this.dates.start, 'MMM dd', { locale: localization_store.selectedLocale }) : h("span", { class: "text-slate-500" }, "Check in"), h("span", null, " - "), this.dates.end ? format(this.dates.end, 'MMM dd', { locale: localization_store.selectedLocale }) : h("span", { class: "text-slate-500" }, "Check out")))));
    }
    render() {
        return (h(Host, { key: 'ff455b6009a385be74bb1156a7147338d56589f1' }, h("ir-popover", { key: 'fc2ad678cadfb507d3b22457ffdb2be91125f87c', ref: el => (this.popover = el), onOpenChange: e => (this.isPopoverOpen = e.detail) }, this.dateTrigger(), h("div", { key: '387efdfb9b359f69eade625cf0271808fa03cd76', slot: "popover-content", class: "date-range-container p-2 md:p-4 border-0 w-full shadow-none sm:border sm:w-auto sm:shadow-sm " }, h("ir-date-range", { key: '3a28afdd639b184b13e7607bc04d1a58749f8672', fromDate: this.dates.start, toDate: this.dates.end, locale: localization_store.selectedLocale, maxSpanDays: 5, minDate: this.minDate })))));
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
