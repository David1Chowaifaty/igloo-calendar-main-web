import localization_store from "../../stores/app.store";
import { Host, h } from "@stencil/core";
import { addDays, format } from "date-fns";
export class IrDatePopup {
    constructor() {
        this.minDate = addDays(new Date(), -1);
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
        return (h("div", { class: "popover-trigger w-full sm:w-fit", slot: "trigger" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "18", width: "12.5", viewBox: "0 0 448 512" }, h("path", { fill: "currentColor", d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" })), h("div", { class: "flex items-center gap-8 flex-1" }, h("div", null, h("p", null, "Check in"), h("p", { class: 'date' }, this.dates.start ? format(this.dates.start, 'MMM dd', { locale: localization_store.selectedLocale }) : h("span", { class: "text-slate-500" }, "Add date"))), h("div", { class: "flex flex-col items-end h-full" }, h("div", null, h("ir-icons", { name: "minus", svgClassName: " h-5 w-5 md:w-3 w-3" }))), h("div", null, h("p", null, "Check out"), h("p", { class: "date" }, this.dates.end ? format(this.dates.end, 'MMM dd', { locale: localization_store.selectedLocale }) : h("span", { class: "text-slate-500" }, "Add date"))))));
    }
    render() {
        return (h(Host, { key: 'a464155977bb77a7634262ed0d61e6821e4fbb23' }, h("ir-popover", { key: 'da5f75427305b3f2b832fdb6e5835c4ca376a237', ref: el => (this.popover = el), onOpenChange: e => (this.isPopoverOpen = e.detail) }, this.dateTrigger(), h("div", { key: '3545ccb3705dbcb7131a5c147bcaae705ee95925', slot: "popover-content", class: "date-range-container p-2 md:p-4 border-0 w-full shadow-none sm:border sm:w-auto sm:shadow-sm " }, h("ir-date-range", { key: 'b880c3f522cb6b80eedcc701d2361be5aaf17275', fromDate: this.dates.start, toDate: this.dates.end, locale: localization_store.selectedLocale, maxSpanDays: 5, minDate: this.minDate })))));
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
