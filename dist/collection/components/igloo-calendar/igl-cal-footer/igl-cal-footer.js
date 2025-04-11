import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglCalFooter {
    // private isOnline:boolean = false;
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: 'a4e961812cbde06e6bd60e184308553915c58210', class: "footerContainer" }, h("div", { key: '514a02909babbfb6e3d98fcea2a51d773c295c6f', class: "footerCell bottomLeftCell align-items-center preventPageScroll" }, h("div", { key: 'a86795edbfed19fa6166702db10f1fb70905dcfe', class: "legendBtn", onClick: () => this.handleOptionEvent('showLegend') }, h("i", { key: 'a2d817fac3a93243ea308224be7f303a1b664dc0', class: "la la-square" }), h("u", { key: 'b757e42c3c05115cf6ad513feb537be28d8deb9c' }, locales.entries.Lcz_Legend), h("span", { key: 'a71e453a2e91ffd76a6f48b291edf14925fabe6e' }, " - v1.005"))), this.calendarData.days.map(dayInfo => (h("div", { class: "footerCell align-items-center" }, h("div", { class: `dayTitle full-height align-items-center ${dayInfo.day === this.today || this.highlightedDate === dayInfo.day ? 'currentDay' : ''}` }, dayInfo.dayDisplayName))))));
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
