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
        this.adultCount = this.minAdultCount;
        this.childrenCount = this.minChildrenCount;
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
            this.updateCounts.emit({ adultCount: this.adultCount, childrenCount: this.childrenCount });
        }
    }
    decrementAdultCount() {
        if (this.adultCount > this.minAdultCount) {
            this.adultCount--;
            this.updateCounts.emit({ adultCount: this.adultCount, childrenCount: this.childrenCount });
        }
    }
    incrementChildrenCount() {
        if (this.childrenCount < this.maxChildrenCount) {
            this.childrenCount++;
            this.updateCounts.emit({ adultCount: this.adultCount, childrenCount: this.childrenCount });
        }
    }
    decrementChildrenCount() {
        if (this.childrenCount > this.minChildrenCount) {
            this.childrenCount--;
            this.updateCounts.emit({ adultCount: this.adultCount, childrenCount: this.childrenCount });
        }
    }
    addChildrenAndAdult() {
        this.closeGuestCounter.emit(null);
    }
    render() {
        return (h("div", { key: 'bc4f77bfc92ec9147aef97a59901604adc4d6a00', class: "counter-container p-4" }, h("div", { key: '990492adb5c3ff8525b238a54ea2e8fde54cc870', class: "counter-item" }, h("div", { key: 'b89c07e464e2c8f42ff78d993fb70219ceefad55' }, h("p", { key: '4791cfc3fb325d68ac249c164dc869872aa59c81', class: "main-text" }, "Adults"), h("p", { key: 'c3c53a552fea2eeac9d5f2ae5fbeeab7bd47f70c', class: "secondary-text" }, "Age ", this.childMaxAge + 1, "+")), h("div", { key: 'b44b4d843793db59ecd4d7d19655057274e613ba', class: "counter-buttons-group" }, h("ir-button", { key: '9772d9be6e5851547373d2da4a5226b4a04c373d', iconName: "minus", disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '4f17a860b5d0f576e7761bfdb3be70b6510407f6' }, this.adultCount), h("ir-button", { key: '0d573eb44c63ca91a8469d68fbf1d4d1a8be6812', iconName: "plus", disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count", svgClassName: "h-[14px] w-[12.25px]" }))), this.childMaxAge > 0 && (h("div", { key: 'd79ee47d3f41b9fa67abe693ce8f892f8d8c1b10', class: "counter-item" }, h("div", { key: '1bb74184df1e458dea274e63c11ceda510c6294a' }, h("p", { key: 'aad289ffb69affff867464ee0d2c997c22fc4020', class: "main-text" }, "Children"), h("p", { key: '0c3b5a2b03610cc4edecd713f80c19f38a2de8b0', class: "secondary-text" }, "Ages 1-", this.childMaxAge)), h("div", { key: '263fd49b23208c95f4835a07e7d65f7540839f8a', class: "counter-buttons-group" }, h("ir-button", { key: '7bfe93abe1515012fd609306253c215472255747', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count", iconName: "minus", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '266d8942cef9f1f49adbed5ebf9083d5cce780b3' }, this.childrenCount), h("ir-button", { key: '094e9605028b5b3f40abbae013ee3c5c9dcd85b3', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count", iconName: "plus", svgClassName: "h-[14px] w-[12.25px]" })))), h("ir-button", { key: '8b70f6cb7b3bf47d811ac82750401278cab2e976', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button",
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
            }
        };
    }
    static get states() {
        return {
            "adultCount": {},
            "childrenCount": {}
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
