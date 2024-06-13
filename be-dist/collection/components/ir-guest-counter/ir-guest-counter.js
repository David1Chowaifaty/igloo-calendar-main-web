import { h } from "@stencil/core";
export class IrGuestCounter {
    constructor() {
        this.minAdultCount = 1;
        this.maxAdultCount = 5;
        this.minChildrenCount = 0;
        this.maxChildrenCount = 5;
        this.childMaxAge = 17;
        this.adultCount = this.minAdultCount;
        this.childrenCount = this.minChildrenCount;
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
        this.updateCounts.emit({ adultCount: this.adultCount, childrenCount: this.childrenCount });
        console.log('Selection confirmed:', this.adultCount, 'adults and', this.childrenCount, 'children');
    }
    render() {
        return (h("div", { key: '806d2f034b48e584b407fefe260aeced28616ff4', class: "counter-container" }, h("div", { key: 'ff397456d573febbc81c99e77fab0916af456ab7', class: "counter-item" }, h("div", { key: '9ad6ad624fc1231af8622255dda53be81c9f36b1' }, h("p", { key: '8151966d80f0871c565db267a7ad03691d3584e9', class: "main-text" }, "Adults"), h("p", { key: 'b58d3b26d1d1ebf36b4071d1756a33c738a2ac59', class: "secondary-text" }, "Age ", this.childMaxAge + 1, "+")), h("div", { key: '2e3e64437856cbbac3b5d8a07f57cd46b9a2dc68', class: "counter-buttons-group" }, h("ir-button", { key: '0f8804f6f97e22c074d4c628091bc322b1c2ad35', iconName: "minus", disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '126575107c9c676fec7cc693bd2a96532af77de0' }, this.adultCount), h("ir-button", { key: '758fc70b077ac43f24b4a902f993eee38d7f7a01', iconName: "plus", disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count", svgClassName: "h-[14px] w-[12.25px]" }))), h("div", { key: '6c9aa400750f21e4fc28051e1e65e0168fd12a4c', class: "counter-item" }, h("div", { key: '1c76c7ca56c75bffd23819b099f6c07d7b2a2eca' }, h("p", { key: 'c207276cadcc3ffc9c437ed5a086009bb520eb61', class: "main-text" }, "Children"), h("p", { key: 'af577c69be19315f73e50d81cd83ba92c46275d9', class: "secondary-text" }, "Ages 1-", this.childMaxAge)), h("div", { key: '239ba2c49ee26edf064e7474feb82ad7b392f939', class: "counter-buttons-group" }, h("ir-button", { key: '6d9830ad719fca82dd6a5232760c51db99b5aea7', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count", iconName: "minus", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: 'a0ae15ea25a3d7e80e4f00242e2b50ce015199ee' }, this.childrenCount), h("ir-button", { key: '61c234c347dfd31c3732ab792c15a09d97747a1f', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count", iconName: "plus", svgClassName: "h-[14px] w-[12.25px]" }))), h("ir-button", { key: '1dc412b2990d5d57e255b493c735edb7e0386faf', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button",
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
            }];
    }
}
//# sourceMappingURL=ir-guest-counter.js.map
