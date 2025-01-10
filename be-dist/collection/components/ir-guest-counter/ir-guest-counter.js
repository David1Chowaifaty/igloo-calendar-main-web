import localizedWords from "../../stores/localization.store";
import { calculateInfantNumber } from "../../utils/utils";
import { h } from "@stencil/core";
export class IrGuestCounter {
    constructor() {
        this.minAdultCount = 1;
        this.maxAdultCount = 5;
        this.minChildrenCount = 0;
        this.maxChildrenCount = 5;
        this.childMaxAge = 17;
        this.child = undefined;
        this.adults = undefined;
        this.error = false;
        this.adultCount = this.minAdultCount;
        this.childrenCount = this.minChildrenCount;
        this.childrenAges = [];
    }
    componentWillLoad() {
        this.adultCount = this.adults || this.minAdultCount;
        this.childrenCount = this.child || this.minAdultCount;
    }
    handleAdultsChange(newValue, oldValue) {
        if (newValue !== oldValue && newValue !== this.adultCount) {
            this.adultCount = newValue;
        }
    }
    handleChildChange(newValue, oldValue) {
        if (newValue !== oldValue && newValue !== this.childrenCount) {
            this.childrenCount = newValue;
        }
    }
    incrementAdultCount() {
        if (this.adultCount < this.maxAdultCount) {
            this.adultCount++;
            this.emitCountHandler();
        }
    }
    decrementAdultCount() {
        if (this.adultCount > this.minAdultCount) {
            this.adultCount--;
            this.emitCountHandler();
        }
    }
    incrementChildrenCount() {
        if (this.childrenCount < this.maxChildrenCount) {
            const newValue = this.childrenCount + 1;
            if (newValue > this.maxChildrenCount) {
                return;
            }
            this.childrenAges.push('');
            this.childrenCount++;
            this.emitCountHandler();
        }
    }
    decrementChildrenCount() {
        if (this.childrenCount > this.minChildrenCount) {
            const newValue = this.childrenCount - 1;
            if (newValue < this.minChildrenCount) {
                return;
            }
            this.childrenAges.pop();
            this.childrenCount--;
            this.emitCountHandler();
        }
    }
    validateChildrenAges() {
        if (this.childrenAges.some(c => c === '')) {
            this.error = true;
            return;
        }
        this.closeGuestCounter.emit(null);
        // this.popover.forceClose();
    }
    emitCountHandler() {
        const infant_nbr = calculateInfantNumber(this.childrenAges);
        const config = {
            adultCount: this.adultCount,
            childrenCount: this.childrenCount,
            infants: infant_nbr,
            childrenAges: this.childrenAges,
        };
        this.updateCounts.emit(config);
    }
    addChildrenAndAdult() {
        this.validateChildrenAges();
    }
    render() {
        var _a;
        return (h("div", { key: '44d54a27b1eb6d66067b64f561a827245f9490e1', class: "counter-container p-4" }, h("div", { key: 'b86477055f78dd3e509e42394d4dca3ccabbf177', class: "counter-item" }, h("div", { key: 'f34ef680b60e7ada0c73f3b066083239cd31628c' }, h("p", { key: '650ce754f6bf7d6d658b7d8ad8c88f5acafbb732', class: "main-text" }, "Adults"), h("p", { key: 'bb1716a6c2935ad2b0d72027718928b120016d4f', class: "secondary-text" }, "Ages ", this.childMaxAge + 1, "+")), h("div", { key: 'bc791a3fee6205ff072bae4698ff5a3de0a510ac', class: "counter-buttons-group" }, h("ir-button", { key: '4ecd9d902f8228d241a83aa77682ecaf22f6be13', iconName: "minus", disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: 'b5150db9b3383d8625f04f7b39cbccb481d05c43' }, this.adultCount), h("ir-button", { key: 'ce1a5343711f140d27808edd9e23918bb031dfb0', iconName: "plus", disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count", svgClassName: "h-[14px] w-[12.25px]" }))), this.childMaxAge > 0 && (h("div", { key: '52feb7f94a3358823b31fcec5f59488e697d451f', class: "counter-item" }, h("div", { key: '2e1e25021533af193b6f14992f678de593e2b59b' }, h("p", { key: '10b53703250a8606c4bfc0b3c1a2dbce9a47572b', class: "main-text" }, "Children"), h("p", { key: '07654127bcc8ed68ff2d4f2fb999faeb29daea44', class: "secondary-text" }, "Ages 0-", this.childMaxAge)), h("div", { key: '22001ced0074ad137eda58fe9bb9de155ac2c19f', class: "counter-buttons-group" }, h("ir-button", { key: 'f6b30abe45a7a115a096050a455cc7c339e4e2f7', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count", iconName: "minus", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '2a88a5ed6524d288cd43dfa33a60cac5f9157373' }, this.childrenCount), h("ir-button", { key: '636499c38b51e7291d458fb875d1b961c7e81d5b', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count", iconName: "plus", svgClassName: "h-[14px] w-[12.25px]" })))), (_a = this.childrenAges) === null || _a === void 0 ? void 0 :
            _a.map((v, i) => (h("div", null, h("ir-select", { addDummyOption: true, value: v, key: `child_${i}_age`, "data-state": this.error && v === '' ? 'error' : '', variant: "double-line", label: `Child ${i + 1} age`, onValueChange: e => {
                    const prev = [...this.childrenAges];
                    prev[i] = e.detail.toString();
                    this.childrenAges = [...prev];
                    this.emitCountHandler();
                }, data: [...Array(this.childMaxAge + 1)].map((_, index) => ({
                    id: index.toString(),
                    value: index === 0 ? localizedWords.entries['Lcz_under1'] : index.toString(),
                })) }), this.error && v === '' && h("p", { class: 'm-0 p-0 text-xs text-red-500' }, localizedWords.entries.Lcz_enterchildage)))), h("ir-button", { key: 'f724267e48a7d5f40ac339da4bd137e060e3759f', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button",
            // label={localizedWords.entries.Lcz_Done}
            label: "Done", "aria-label": "Confirm selection" })));
    }
    static get is() { return "ir-guest-counter"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-guest-counter.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-guest-counter.css"]
        };
    }
    static get properties() {
        return {
            "minAdultCount": {
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
                "attribute": "min-adult-count",
                "reflect": false,
                "defaultValue": "1"
            },
            "maxAdultCount": {
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
                "attribute": "max-adult-count",
                "reflect": false,
                "defaultValue": "5"
            },
            "minChildrenCount": {
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
                "attribute": "min-children-count",
                "reflect": false,
                "defaultValue": "0"
            },
            "maxChildrenCount": {
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
                "attribute": "max-children-count",
                "reflect": false,
                "defaultValue": "5"
            },
            "childMaxAge": {
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
                "attribute": "child-max-age",
                "reflect": false,
                "defaultValue": "17"
            },
            "child": {
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
                "attribute": "child",
                "reflect": false
            },
            "adults": {
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
                "attribute": "adults",
                "reflect": false
            },
            "error": {
                "type": "boolean",
                "mutable": true,
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
                "attribute": "error",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "adultCount": {},
            "childrenCount": {},
            "childrenAges": {}
        };
    }
    static get events() {
        return [{
                "method": "updateCounts",
                "name": "updateCounts",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "closeGuestCounter",
                "name": "closeGuestCounter",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "adults",
                "methodName": "handleAdultsChange"
            }, {
                "propName": "child",
                "methodName": "handleChildChange"
            }];
    }
}
//# sourceMappingURL=ir-guest-counter.js.map
