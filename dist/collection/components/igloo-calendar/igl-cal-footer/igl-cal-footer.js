import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglCalFooter {
    // private isOnline:boolean = false;
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: 'a70d2ea01fe58addea82776d1337e070feae64b1', class: "footerContainer" }, h("div", { key: 'f8a949d0c6fc4a16fbbe35676798098a76d9644c', class: "footerCell bottomLeftCell align-items-center preventPageScroll" }, h("div", { key: '2d6442f7f93e7b00a09a934173c2a06daf2e9ef1', class: "legendBtn", onClick: () => this.handleOptionEvent('showLegend') }, h("i", { key: '15b6a30b99337eae35d10fcc58af5d35dfcd1cda', class: "la la-square" }), h("u", { key: 'a8ab156218827da88324e1cd033455818b422438' }, locales.entries.Lcz_Legend), h("span", { key: '37055cd9b0d6a826da4f727fe405da1cd9f22903' }, " - v1.009"))), this.calendarData.days.map(dayInfo => (h("div", { class: "footerCell align-items-center" }, h("div", { class: `dayTitle full-height align-items-center ${dayInfo.day === this.today || this.highlightedDate === dayInfo.day ? 'currentDay' : ''}` }, dayInfo.dayDisplayName))))));
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
                },
                "getter": false,
                "setter": false
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
                },
                "getter": false,
                "setter": false
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
                "getter": false,
                "setter": false,
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
