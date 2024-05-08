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
        return (h(Host, { key: '077effd640193b348c19f160467f4956acaa3b7e' }, h("ir-popover", { key: '9df6ba4a4615332a9f298253d6221e0d388c10d3', placement: "auto", ref: el => (this.popover = el), onOpenChange: e => (this.isPopoverOpen = e.detail) }, this.dateTrigger(), h("div", { key: '1a7b363bed17771b59058213be3c3ea6900a05f9', slot: "popover-content", class: "date-range-container p-2 sm:p-4 md:p-6 border-0 w-full shadow-none sm:border sm:w-auto sm:shadow-sm " }, h("ir-date-range", { key: '691935a33ff229e6bbac1175a7a2fb0f6bfb519c', fromDate: this.dates.start, toDate: this.dates.end, locale: localization_store.selectedLocale, maxSpanDays: 5, minDate: this.minDate })))));
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
