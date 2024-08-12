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
        this.closeGuestCounter.emit(null);
    }
    render() {
        return (h("div", { key: 'e8baa3e524ac3628f99ab88d7e14357e54f60229', class: "counter-container p-4" }, h("div", { key: '03052707a01b93b0b7007c074e1e75a9d87e11e4', class: "counter-item" }, h("div", { key: '425c01af0580a3e8e5f9cdea297d482c424b0c63' }, h("p", { key: '7bcb058691b53b0cf0f36961a418eac67691ea18', class: "main-text" }, "Adults"), h("p", { key: 'c9693687a1d61785b93e85c793285d73ffd999b7', class: "secondary-text" }, "Age ", this.childMaxAge + 1, "+")), h("div", { key: '02ac0bf8a1b4a95adddfc2992e0752ca31322804', class: "counter-buttons-group" }, h("ir-button", { key: '107b6bc09441750af32461c77eb277364bee3b3e', iconName: "minus", disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '54f43323e471049209d6e0db062d00aea819a515' }, this.adultCount), h("ir-button", { key: '54f03999658662b9d3515742ace40dfbf5260373', iconName: "plus", disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count", svgClassName: "h-[14px] w-[12.25px]" }))), this.childMaxAge > 0 && (h("div", { key: 'a66bec2d6e74a4963013983058423b0cbbb98d8e', class: "counter-item" }, h("div", { key: '6b93aa43b8c04f9ca64c4d800d19245d3931e6ff' }, h("p", { key: '3c899a43eec5ffe1ad602ed4becd2df17681333a', class: "main-text" }, "Children"), h("p", { key: '5e20011e6f643a3b2cbc962a647273a6acdcdb62', class: "secondary-text" }, "Ages 1-", this.childMaxAge)), h("div", { key: '78de8eef797dcca546b79a44940120a3d05cb95d', class: "counter-buttons-group" }, h("ir-button", { key: 'e42d415d8975636374d0a6a94c001617166ae9b1', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count", iconName: "minus", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: 'f8dbf02927c36547c0eed26597d900db8c630ab7' }, this.childrenCount), h("ir-button", { key: 'bf172bb79d20d71d6de38d874b240fab5c798bf3', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count", iconName: "plus", svgClassName: "h-[14px] w-[12.25px]" })))), h("ir-button", { key: '8597280cb7b897d4151ed79652187ac35bf18a9f', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button",
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
}
//# sourceMappingURL=ir-guest-counter.js.map
