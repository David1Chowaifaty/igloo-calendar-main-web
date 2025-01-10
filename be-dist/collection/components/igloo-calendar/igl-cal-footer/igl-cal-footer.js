import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglCalFooter {
    constructor() {
        this.calendarData = undefined;
        this.today = undefined;
        this.highlightedDate = undefined;
    }
    // private isOnline:boolean = false;
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: '03e81d5d07e3a4ece7db2b84e7a3af069ab825c2', class: "footerContainer" }, h("div", { key: '150433f62c921d919d25ab3e8513a96a33a2884d', class: "footerCell bottomLeftCell align-items-center preventPageScroll" }, h("div", { key: '1338754dfdefad6c1a957a6a0288362617983ddd', class: "legendBtn", onClick: () => this.handleOptionEvent('showLegend') }, h("i", { key: '0d4330a73f85983b96ac2a22f4b6aac037565ffc', class: "la la-square" }), h("u", { key: '0eeda67e2909d841bea61ebff50f3725d06cfe0e' }, locales.entries.Lcz_Legend), h("span", { key: '25e4ae6dff069cf859c85d56e5c9d8a7c7c42030' }, " - v99.12"))), this.calendarData.days.map(dayInfo => (h("div", { class: "footerCell align-items-center" }, h("div", { class: `dayTitle full-height align-items-center ${dayInfo.day === this.today || this.highlightedDate === dayInfo.day ? 'currentDay' : ''}` }, dayInfo.dayDisplayName))))));
    }
    static get is() { return "igl-cal-footer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-cal-footer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-cal-footer.css"]
        };
    }
    static get properties() {
        return {
            "calendarData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "today": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "String",
                    "resolved": "String",
                    "references": {
                        "String": {
                            "location": "global",
                            "id": "global::String"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "highlightedDate": {
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
                "attribute": "highlighted-date",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "optionEvent",
                "name": "optionEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=igl-cal-footer.js.map
