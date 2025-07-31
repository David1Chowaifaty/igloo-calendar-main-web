import localizedWords from "../../stores/localization.store";
import { calculateInfantNumber } from "../../utils/utils";
import { h } from "@stencil/core";
export class IrGuestCounter {
    constructor() {
        // Properties
        this.minAdultCount = 1;
        this.maxAdultCount = 5;
        this.minChildrenCount = 0;
        this.maxChildrenCount = 5;
        this.childMaxAge = 17;
        this.error = false;
        // Local state
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
        return (h("div", { key: '507a67b92f4203aed1315331b4d15936e2e030c5', class: "counter-container p-4" }, h("div", { key: 'd1cd912de391be72702858fe0c451f3ba0d1b16c', class: "counter-item" }, h("div", { key: 'e5384bfe8ec42404bf0e43b5a205d9d55bcb1c2c' }, h("p", { key: '07861440ebbb243d26d15a99af071a57ecba3458', class: "main-text" }, "Adults"), h("p", { key: 'e7472f8155516cac8788bd76c2bad9e5f2310c05', class: "secondary-text" }, "Ages ", this.childMaxAge + 1, "+")), h("div", { key: 'c1a9eb16863b4904a3b242fd9fcc6275543fe8db', class: "counter-buttons-group" }, h("ir-button", { key: '70d0a1467330b1a407029d63717a94d8313d3634', iconName: "minus", disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '58c19390ed322b6eae57a0f67a7f31e562be5264' }, this.adultCount), h("ir-button", { key: '3be24974d3d9eb86a6c1bdb7f21ba93ed1781685', iconName: "plus", disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count", svgClassName: "h-[14px] w-[12.25px]" }))), this.childMaxAge > 0 && (h("div", { key: 'b47c2b9b86ab6b6682a7fad5f15f73bceb476fa0', class: "counter-item" }, h("div", { key: 'b91dbbead4670a2b7d2589c7d5bf9e129b16820c' }, h("p", { key: '616001464480da263a8d63afc662bc1ca7ec5682', class: "main-text" }, "Children"), h("p", { key: '24a39192259c046b5aea391659721b49f434ba78', class: "secondary-text" }, "Ages 0-", this.childMaxAge)), h("div", { key: 'fa87dcab6f05e0c674f2e1564df0adf62ca423fe', class: "counter-buttons-group" }, h("ir-button", { key: 'a8994150bad77d7392069c104ffc3f8c4f1e000a', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count", iconName: "minus", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '7e0a9668b810a7cf53ac7c0949a294196f90abbc' }, this.childrenCount), h("ir-button", { key: '99930fc3772d6cda8b3f3ece4c4751dc1780cf9e', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count", iconName: "plus", svgClassName: "h-[14px] w-[12.25px]" })))), (_a = this.childrenAges) === null || _a === void 0 ? void 0 :
            _a.map((v, i) => (h("div", null, h("ir-select", { addDummyOption: true, value: v, key: `child_${i}_age`, "data-state": this.error && v === '' ? 'error' : '', variant: "double-line", label: `Child ${i + 1} age`, onValueChange: e => {
                    const prev = [...this.childrenAges];
                    prev[i] = e.detail.toString();
                    this.childrenAges = [...prev];
                    this.emitCountHandler();
                }, data: [...Array(this.childMaxAge + 1)].map((_, index) => ({
                    id: index.toString(),
                    value: index === 0 ? localizedWords.entries['Lcz_under1'] : index.toString(),
                })) }), this.error && v === '' && h("p", { class: 'm-0 p-0 text-xs text-red-500' }, localizedWords.entries.Lcz_enterchildage)))), h("ir-button", { key: '57776b8477de98c2dcde5260a890a8f65bb4f63d', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button",
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
