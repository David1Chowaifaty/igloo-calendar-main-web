import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglCalFooter {
    constructor() {
        this.calendarData = undefined;
        this.today = undefined;
    }
    // private isOnline:boolean = false;
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: 'a69eb7987a3ea24f1ab6881f0cf680165aab3cc2', class: "footerContainer" }, h("div", { key: 'f8ff84214e73c583286314e2e41ac0ec591fe787', class: "footerCell bottomLeftCell align-items-center preventPageScroll" }, h("div", { key: '73e42e2e98ef411395f52c353e5aa2e9f0143769', class: "legendBtn", onClick: () => this.handleOptionEvent('showLegend') }, h("i", { key: 'd0e6a535a633d036d43eff522be16cc941c91bf1', class: "la la-square" }), h("u", { key: 'f55e0760a86b916c787b2ff0103c7f391c6b99b0' }, locales.entries.Lcz_Legend), h("span", { key: 'b7d66cf0b53f2b332490464c42b3d659f13be4a7' }, " - v13"))), this.calendarData.days.map(dayInfo => (h("div", { class: "footerCell align-items-center" }, h("div", { class: `dayTitle full-height align-items-center ${dayInfo.day === this.today ? 'currentDay' : ''}` }, dayInfo.dayDisplayName))))));
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
