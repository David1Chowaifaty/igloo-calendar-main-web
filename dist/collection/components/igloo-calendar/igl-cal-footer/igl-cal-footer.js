import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglCalFooter {
    // private isOnline:boolean = false;
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: 'd7eb6ae36c5af34c1569e927663cc7bb67dcd38a', class: "footerContainer" }, h("div", { key: 'a8c110feb45a7c26b9caa24113a5d096333b6f7e', class: "footerCell bottomLeftCell align-items-center preventPageScroll" }, h("div", { key: '05a5aa353575e536b413c6f61cfeaba0eebc9730', class: "legendBtn", onClick: () => this.handleOptionEvent('showLegend') }, h("i", { key: 'bdc6a71c0182f38ac046b73b086a6f6316b7fcba', class: "la la-square" }), h("u", { key: '2aa75973e72f5d4da1559f8d932b05664a155a1c' }, locales.entries.Lcz_Legend), h("span", { key: '3591a84b45aaf89be6e664843d7362d28e5d531f' }, " - v1.0128"))), this.calendarData.days.map(dayInfo => (h("div", { class: "footerCell align-items-center" }, h("div", { class: `dayTitle full-height align-items-center ${dayInfo.day === this.today || this.highlightedDate === dayInfo.day ? 'currentDay' : ''}` }, dayInfo.dayDisplayName))))));
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
