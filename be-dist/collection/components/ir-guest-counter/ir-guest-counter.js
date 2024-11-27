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
        return (h("div", { key: '663b4e612d8ba085a84b3648d65551b33287c1e8', class: "counter-container p-4" }, h("div", { key: '819bea032ff84629e829e0d43d9b68f55ad5779d', class: "counter-item" }, h("div", { key: '50f27134254274b3fe3fc906fc68b12cbea743d5' }, h("p", { key: 'd69e426e5d7588c8adb312f8f1e902fa8ccfc67f', class: "main-text" }, "Adults"), h("p", { key: 'b3a32ddbc06d1e2094af6f0798c1dd00fe6bb55c', class: "secondary-text" }, "Ages ", this.childMaxAge + 1, "+")), h("div", { key: 'cb013b8465487a279618e3c45e67ec1b5dd13de4', class: "counter-buttons-group" }, h("ir-button", { key: '3d611bf0e7524a1e8094bb518d4d24a939f03e4d', iconName: "minus", disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '462e2d7f52071ae4c153660b732ed59f87ff3b98' }, this.adultCount), h("ir-button", { key: 'c30f053c5c704d3c2789e400e077b72d6d4beb77', iconName: "plus", disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count", svgClassName: "h-[14px] w-[12.25px]" }))), this.childMaxAge > 0 && (h("div", { key: 'e16aa63f22081ab70e14f625cee5236fe6d1a65b', class: "counter-item" }, h("div", { key: 'fc0987a8f3aad10109927d4dc6c4a964a2a67040' }, h("p", { key: '3a3bf38162bf4a1d68d79cffd0b5d036d7a9797e', class: "main-text" }, "Children"), h("p", { key: 'b6b9a9aa4ac0b65e8497c87f79cc13709111be04', class: "secondary-text" }, "Ages 0-", this.childMaxAge)), h("div", { key: '60d70170073ffbf25732942c45c1e126441da4b0', class: "counter-buttons-group" }, h("ir-button", { key: 'f59613110648ba54e5a1207ed3eeac2bdc42c70d', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count", iconName: "minus", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: 'e948b2ece4a11c5c1c7e395e79a62dbd76171408' }, this.childrenCount), h("ir-button", { key: '7f63e0454365ef4e841873618f1f33b58672799f', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count", iconName: "plus", svgClassName: "h-[14px] w-[12.25px]" })))), (_a = this.childrenAges) === null || _a === void 0 ? void 0 :
            _a.map((v, i) => (h("div", null, h("ir-select", { addDummyOption: true, value: v, key: `child_${i}_age`, "data-state": this.error && v === '' ? 'error' : '', variant: "double-line", label: `Child ${i + 1} age`, onValueChange: e => {
                    const prev = [...this.childrenAges];
                    prev[i] = e.detail.toString();
                    this.childrenAges = [...prev];
                    this.emitCountHandler();
                }, data: [...Array(this.childMaxAge + 1)].map((_, index) => ({
                    id: index.toString(),
                    value: index === 0 ? localizedWords.entries['Lcz_under1'] : index.toString(),
                })) }), this.error && v === '' && h("p", { class: 'm-0 p-0 text-xs text-red-500' }, localizedWords.entries.Lcz_enterchildage)))), h("ir-button", { key: 'cadff0ba02fd437ab7654818e2b6265a0194c0fe', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button",
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
