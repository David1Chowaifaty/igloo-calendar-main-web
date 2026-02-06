import { Host, h } from "@stencil/core";
import moment from "moment/min/moment-with-locales";
export class IrWidgetDatePopup {
    constructor() {
        this.absoluteIcon = false;
    }
    componentDidLoad() {
        var _a;
        this.mediaQueryList = window.matchMedia('(min-width: 640px)');
        this.handleMediaChange = e => {
            var _a;
            if (e.matches) {
                // We crossed into >= 640px
                (_a = this.mobileDatePopupModal) === null || _a === void 0 ? void 0 : _a.close();
            }
        };
        // Run once in case we load already at >= 640px
        if (this.mediaQueryList.matches) {
            (_a = this.mobileDatePopupModal) === null || _a === void 0 ? void 0 : _a.close();
        }
        this.mediaQueryList.addEventListener('change', this.handleMediaChange);
    }
    disconnectedCallback() {
        var _a;
        (_a = this.mediaQueryList) === null || _a === void 0 ? void 0 : _a.removeEventListener('change', this.handleMediaChange);
    }
    renderDateTrigger(slot = 'trigger') {
        var _a, _b;
        const from = (_a = this.dates) === null || _a === void 0 ? void 0 : _a.from_date;
        const to = (_b = this.dates) === null || _b === void 0 ? void 0 : _b.to_date;
        let fromLabel = '';
        let toLabel = '';
        if (from) {
            fromLabel = moment(from).format('DD MMM YYYY');
        }
        if (to) {
            toLabel = moment(to).format('DD MMM YYYY');
        }
        return (h("button", { disabled: this.disabled, class: `ir-widget__date-trigger relative ${this.absoluteIcon ? '--absolute-icon' : ''}`, part: "date-trigger", slot: slot }, h("div", { class: this.absoluteIcon ? 'pointer-events-none absolute inset-y-0 start-2 flex  items-center' : '' }, h("ir-icons", { name: "calendar", svgClassName: "ir-widget__icon", removeClassName: true, height: 16, width: 16 })), fromLabel && toLabel ? (h("div", null, h("p", null, h("span", null, fromLabel), h("span", null, " - "), h("span", null, toLabel)))) : (h("div", null, h("p", null, "Your dates")))));
    }
    renderLoadingTrigger(slot = 'trigger') {
        return (h("div", { class: `ir-widget__date-trigger ir-widget__trigger--loading relative ${this.absoluteIcon ? '--absolute-icon' : ''}`, part: "date-trigger", slot: slot, "aria-busy": "true" }, h("div", { class: this.absoluteIcon ? 'pointer-events-none absolute inset-y-0 start-2 flex  items-center' : '' }, h("span", { class: "ir-widget__loading-icon ir-widget__shimmer" })), h("div", { class: "ir-widget__loading-range" }, h("span", { class: "ir-widget__loading-line --short ir-widget__shimmer" }), h("span", { class: "ir-widget__loading-line --medium ir-widget__shimmer" }))));
    }
    renderDateRange() {
        var _a, _b;
        return (h("ir-date-range", { dateModifiers: this.dateModifiers, minDate: moment(), style: { '--radius': 'var(--ir-widget-radius)' }, fromDate: ((_a = this.dates) === null || _a === void 0 ? void 0 : _a.from_date) ? moment(this.dates.from_date) : null, toDate: ((_b = this.dates) === null || _b === void 0 ? void 0 : _b.to_date) ? moment(this.dates.to_date) : null, locale: this.locale, maxSpanDays: this.maxSpanDays, onDateChange: e => {
                var _a;
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { end, start } = e.detail;
                if (end && start) {
                    this.dateWidgetPopupRef.close();
                    (_a = this.mobileDatePopupModal) === null || _a === void 0 ? void 0 : _a.close();
                }
                this.dateChange.emit({
                    from_date: start,
                    to_date: end,
                });
            } }));
    }
    render() {
        return (h(Host, { key: 'f67a1acc36e75c9d21d2723cfd683a5f9368474f' }, h("ir-popup", { key: '39d51223cf3b3ed419f26d4e44c35fe35c7e91ea', modal: true, withArrow: true, class: "ir-multi-property-date-popup__popup", ref: el => (this.mobileDatePopupModal = el) }, this.isLoading ? this.renderLoadingTrigger('anchor') : this.renderDateTrigger('anchor'), !this.isLoading && (h("header", { key: '4c62383e58bb1c56ae22233a1e60ff6c1dfbf09b', class: 'ir-multi-property-date-popup__header' }, h("ir-button", { key: '242a92260e3a6d7a7059c4cd7c16b80d88d4ebfd', onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.mobileDatePopupModal.close();
            }, iconName: "xmark", variants: "icon" }))), !this.isLoading && this.renderDateRange()), h("ir-popup", { key: '57e684d42b907805e6391f2a35fb3e53481606e6', withArrow: true, class: "ir-multi-property-date-popup__popup", ref: el => (this.dateWidgetPopupRef = el) }, this.isLoading ? this.renderLoadingTrigger('anchor') : this.renderDateTrigger('anchor'), !this.isLoading && this.renderDateRange())));
    }
    static get is() { return "ir-widget-date-popup"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-widget-date-popup.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-widget-date-popup.css"]
        };
    }
    static get properties() {
        return {
            "dateModifiers": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "date-modifiers",
                "reflect": false
            },
            "dates": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ from_date: Date | null; to_date: Date | null }",
                    "resolved": "{ from_date: Date; to_date: Date; }",
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
                "getter": false,
                "setter": false
            },
            "locale": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "locale",
                "reflect": false
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false
            },
            "maxSpanDays": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "max-span-days",
                "reflect": false
            },
            "absoluteIcon": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "absolute-icon",
                "reflect": false,
                "defaultValue": "false"
            },
            "isLoading": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "is-loading",
                "reflect": false
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
                    "text": ""
                },
                "complexType": {
                    "original": "{ from_date: Date | null; to_date: Date | null }",
                    "resolved": "{ from_date: Date; to_date: Date; }",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-widget-date-popup.js.map
