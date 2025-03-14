import app_store from "../../../../../stores/app.store";
import localization_store from "../../../../../stores/app.store";
import localizedWords from "../../../../../stores/localization.store";
import { Host, h } from "@stencil/core";
import moment from "moment/min/moment-with-locales";
export class IrDatePopup {
    constructor() {
        this.dates = {
            start: null,
            end: null,
        };
        this.isPopoverOpen = false;
        this.minDate = moment();
    }
    handleDatesChange() {
        if (this.dates.end && this.isPopoverOpen) {
            this.popover.toggleVisibility();
        }
    }
    dateTrigger() {
        return (h("div", { class: "popover-trigger relative w-full sm:w-fit", slot: "trigger", "data-state": this.isPopoverOpen ? 'opened' : 'closed' }, h("ir-icons", { name: "calendar", svgClassName: "size-[18px]" }), h("div", { class: "flex h-[3rem] flex-1 flex-col justify-center gap-0.5" }, h("p", { class: "label" }, localizedWords.entries.Lcz_Dates), h("div", { class: "dates" }, this.dates.start ? (this.dates.start.locale(localization_store.selectedLocale).format('MMM DD')) : (
        // format(this.dates.start, 'MMM dd', { locale: localization_store.selectedLocale })
        h("span", { class: "text-slate-500" }, localizedWords.entries.Lcz_CheckIn)), h("span", null, " - "), this.dates.end ? (this.dates.end.locale(localization_store.selectedLocale).format('MMM DD')) : (
        // format(this.dates.end, 'MMM dd', { locale: localization_store.selectedLocale })
        h("span", { class: "text-slate-500" }, localizedWords.entries.Lcz_CheckOut))))));
    }
    render() {
        return (h(Host, { key: '3ab860083d32bef0bffa40c0a77e9e8bb460919d' }, h("ir-popover", { key: 'b9e66feedda1a9b802dd99010c96c5025487b8dd', showCloseButton: false, placement: "bottom-start", ref: el => (this.popover = el), onOpenChange: e => {
                this.isPopoverOpen = e.detail;
                if (!this.isPopoverOpen && !this.dates.end && this.dates.start) {
                    this.dateChange.emit(Object.assign(Object.assign({}, this.dates), { end: this.dates.start.add(1, 'days') }));
                }
            } }, this.dateTrigger(), h("div", { key: '1d690b0ae850c2d8310c11abfbf51a32a8db58a1', slot: "popover-content", class: "date-range-container w-full border-0 p-4 pb-6 shadow-none sm:w-auto sm:border sm:p-4 sm:shadow-sm  " }, h("ir-date-range", { key: 'a4e06d578686a2eeb6ab7c16ba89e83aabc266fd', dateModifiers: this.getDateModifiers(), fromDate: this.dates.start, toDate: this.dates.end, locale: localization_store.selectedLocale, maxSpanDays: app_store.property.max_nights, minDate: this.minDate })))));
    }
    getDateModifiers() {
        var _a;
        if (!Object.keys(app_store.nonBookableNights).length) {
            return undefined;
        }
        const nights = {};
        (_a = Object.keys(app_store === null || app_store === void 0 ? void 0 : app_store.nonBookableNights)) === null || _a === void 0 ? void 0 : _a.forEach(nbn => {
            nights[nbn] = {
                disabled: true,
            };
        });
        return nights;
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
                    "original": "{ start: Moment | null; end: Moment | null }",
                    "resolved": "{ start: Moment; end: Moment; }",
                    "references": {
                        "Moment": {
                            "location": "import",
                            "path": "moment/min/moment-with-locales",
                            "id": "node_modules::Moment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
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
                    "original": "{ start: Moment | null; end: Moment | null }",
                    "resolved": "{ start: Moment; end: Moment; }",
                    "references": {
                        "Moment": {
                            "location": "import",
                            "path": "moment/min/moment-with-locales",
                            "id": "node_modules::Moment"
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
