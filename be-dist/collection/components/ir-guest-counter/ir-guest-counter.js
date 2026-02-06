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
        return (h("div", { key: '445f201898b4c20b8afa86329bdec76d85826905', class: "counter-container p-4" }, h("div", { key: 'df7a13b1bddf95cc83be7098e1a8831124a8569e', class: "counter-item" }, h("div", { key: '571baead73fd8b83a61d5ea96df8d985e296e225' }, h("p", { key: '568dd53c6c107782dc0f4d38aa8db52295c5c3e6', class: "main-text" }, "Adults"), h("p", { key: 'f87ce75f2c6f91c010e7a491297f340562e5d8e8', class: "secondary-text" }, "Ages ", this.childMaxAge + 1, "+")), h("div", { key: 'd9938842f0ae92a2c0f0857a20bd00c98d6551a6', class: "counter-buttons-group" }, h("ir-button", { key: 'dfcf3dd9deb5a72e7ab7fe36da0058555449c787', iconName: "minus", disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: 'c722f7ea9f4d5d4d3cdac6dc984787b4902e005b' }, this.adultCount), h("ir-button", { key: 'bb1331c1aaa4065deacbf03fb12bf92c6de7efdb', iconName: "plus", disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count", svgClassName: "h-[14px] w-[12.25px]" }))), this.childMaxAge > 0 && (h("div", { key: '4e61e053c3240030f4c50d371267639519e99d44', class: "counter-item" }, h("div", { key: '061b1cc98dbbe2cbf318babbcec420e2c337f7f5' }, h("p", { key: '1adc9d78ad217b84e2d525de7055ad454a46bb68', class: "main-text" }, "Children"), h("p", { key: '59a041e41547f6be7639a1852a5166aba7de5c78', class: "secondary-text" }, "Ages 0-", this.childMaxAge)), h("div", { key: 'b477da059b0279b3d2044f52a695154e3054fed2', class: "counter-buttons-group" }, h("ir-button", { key: 'eef8f4de33f0ce58e86400ed117fc143c42ecab4', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count", iconName: "minus", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '8904b06de4acdd0ba21ec2e2e7f40a925efcf1e8' }, this.childrenCount), h("ir-button", { key: 'a19e14ff2573857494effab92d77fdb41439776f', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count", iconName: "plus", svgClassName: "h-[14px] w-[12.25px]" })))), (_a = this.childrenAges) === null || _a === void 0 ? void 0 :
            _a.map((v, i) => (h("div", null, h("ir-select", { addDummyOption: true, value: v, key: `child_${i}_age`, "data-state": this.error && v === '' ? 'error' : '', variant: "double-line", label: `Child ${i + 1} age`, onValueChange: e => {
                    const prev = [...this.childrenAges];
                    prev[i] = e.detail.toString();
                    this.childrenAges = [...prev];
                    this.emitCountHandler();
                }, data: [...Array(this.childMaxAge + 1)].map((_, index) => ({
                    id: index.toString(),
                    value: index === 0 ? localizedWords.entries['Lcz_under1'] : index.toString(),
                })) }), this.error && v === '' && h("p", { class: 'm-0 p-0 text-xs text-red-500' }, localizedWords.entries.Lcz_enterchildage)))), h("ir-button", { key: '2a48a541911a5419e5ec9885fe52e229b4e7417e', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button",
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
