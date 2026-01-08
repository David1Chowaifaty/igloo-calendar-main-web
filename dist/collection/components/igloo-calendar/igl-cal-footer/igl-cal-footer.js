import locales from "../../../stores/locales.store";
import { isWeekend } from "../../../utils/utils";
import { Host, h } from "@stencil/core";
import moment from "moment";
export class IglCalFooter {
    optionEvent;
    calendarData;
    isLegendOpen = false;
    today;
    highlightedDate;
    _today = moment().format('YYYY-MM-DD');
    // private isOnline:boolean = false;
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: 'c7d24ab8eeda4324dc471ff8e6caebf2183cb5ef', class: "footerContainer" }, h("div", { key: 'dde02947bb623e3c1754a127b37992eab1c5192e', class: "footerCell bottomLeftCell align-items-center preventPageScroll", style: { paddingLeft: '10px' } }, h("button", { key: 'fa5a02cd1b11ae86ee96a4cf7971176438f9cadf', class: "m-0 p-0 btn btn-sm  legendBtn d-flex align-items-center", style: { gap: '0.25rem' }, onClick: () => this.handleOptionEvent('showLegend') }, this.isLegendOpen ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", height: 16, width: 16 }, h("path", { fill: "currentColor", d: "M105.4 297.4C92.9 309.9 92.9 330.2 105.4 342.7L265.4 502.7C277.9 515.2 298.2 515.2 310.7 502.7C323.2 490.2 323.2 469.9 310.7 457.4L173.3 320L310.6 182.6C323.1 170.1 323.1 149.8 310.6 137.3C298.1 124.8 277.8 124.8 265.3 137.3L105.3 297.3zM457.4 137.4L297.4 297.4C284.9 309.9 284.9 330.2 297.4 342.7L457.4 502.7C469.9 515.2 490.2 515.2 502.7 502.7C515.2 490.2 515.2 469.9 502.7 457.4L365.3 320L502.6 182.6C515.1 170.1 515.1 149.8 502.6 137.3C490.1 124.8 469.8 124.8 457.3 137.3z" }))) : (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", height: 16, width: 16 }, h("path", { fill: "currentColor", d: "M535.1 342.6C547.6 330.1 547.6 309.8 535.1 297.3L375.1 137.3C362.6 124.8 342.3 124.8 329.8 137.3C317.3 149.8 317.3 170.1 329.8 182.6L467.2 320L329.9 457.4C317.4 469.9 317.4 490.2 329.9 502.7C342.4 515.2 362.7 515.2 375.2 502.7L535.2 342.7zM183.1 502.6L343.1 342.6C355.6 330.1 355.6 309.8 343.1 297.3L183.1 137.3C170.6 124.8 150.3 124.8 137.8 137.3C125.3 149.8 125.3 170.1 137.8 182.6L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7z" }))), h("span", { key: '34085f587c839bbe4fc08f3368b3b4500bdf7282' }, locales.entries.Lcz_Legend), h("span", { key: '5a9ab0a2f6b184d7109352c78ebc03b9f88a3f87' }, "v1.3"), h("ir-new-badge", { key: '4882303d2d040e13ceda87d2632830e9e088ece6', style: { marginLeft: '0.25rem' } }))), this.calendarData.days.map(dayInfo => (h("div", { class: "footerCell align-items-center" }, h("div", { class: {
                'dayTitle full-height align-items-center': true,
                'weekend': isWeekend(dayInfo.value),
                'currentDay': dayInfo.value === this._today || this.highlightedDate === dayInfo.day,
            } }, dayInfo.dayDisplayName))))));
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
            "isLegendOpen": {
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
                "attribute": "is-legend-open",
                "reflect": false,
                "defaultValue": "false"
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
