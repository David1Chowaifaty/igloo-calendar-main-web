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
        return (h("div", { class: "popover-trigger relative w-full sm:w-fit", slot: "trigger", "data-state": this.isPopoverOpen ? 'opened' : 'closed' }, h("ir-icons", { name: "calendar", svgClassName: "size-[18px]" }), h("div", { class: "flex h-[3rem] flex-1 flex-col justify-center gap-0.5" }, h("p", { class: "label" }, localizedWords.entries.Lcz_Dates), h("div", { class: "dates" }, this.dates.start ? (format(this.dates.start, 'MMM dd', { locale: localization_store.selectedLocale })) : (h("span", { class: "text-slate-500" }, localizedWords.entries.Lcz_CheckIn)), h("span", null, " - "), this.dates.end ? (format(this.dates.end, 'MMM dd', { locale: localization_store.selectedLocale })) : (h("span", { class: "text-slate-500" }, localizedWords.entries.Lcz_CheckOut))))));
    }
    render() {
        return (h(Host, { key: '83e38608f1fe27b4af5092a007f478569bd876f2' }, h("ir-popover", { key: '6622494ef3c71ff5786121b911872c8d0f6a9ac4', showCloseButton: false, placement: "auto", ref: el => (this.popover = el), onOpenChange: e => {
                this.isPopoverOpen = e.detail;
                if (!this.isPopoverOpen && !this.dates.end && this.dates.start) {
                    this.dateChange.emit(Object.assign(Object.assign({}, this.dates), { end: addDays(this.dates.start, 1) }));
                }
            } }, this.dateTrigger(), h("div", { key: '36fdc55e58a8783d08b1dd6f15ad03d754d1677e', slot: "popover-content", class: "date-range-container w-full border-0 p-4 pb-6 shadow-none sm:w-auto sm:border sm:p-4 sm:shadow-sm md:p-6 " }, h("ir-date-range", { key: '4669a83e67ef8e1502bbc1ef10105b5c315be4df', fromDate: this.dates.start, toDate: this.dates.end, locale: localization_store.selectedLocale, maxSpanDays: 5, minDate: this.minDate })))));
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
    static get events() {
        return [{
                "method": "dateChange",
                "name": "dateChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ start: Date | null; end: Date | null }",
                    "resolved": "{ start: Date; end: Date; }",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                }
            }];
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
