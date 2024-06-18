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
        console.log('Selection confirmed:', this.adultCount, 'adults and', this.childrenCount, 'children');
    }
    render() {
        return (h("div", { key: 'ecec458be869a0be53614c50efc370556940a0b3', class: "counter-container" }, h("div", { key: '07f337c0f99f87f9d2f1f3e10f28c077cf18dfc4', class: "counter-item" }, h("div", { key: 'fa609e6e8f4e8ec06175d8a1803ce638f38bb130' }, h("p", { key: '734c56b034f4b09248eb26864a3e07141b5c8567', class: "main-text" }, "Adults"), h("p", { key: '99e7dec1c2f845ac5807dfbbd789816580e821dd', class: "secondary-text" }, "Age ", this.childMaxAge + 1, "+")), h("div", { key: '160b73868e8feefec5eee74b98daffb6a365f764', class: "counter-buttons-group" }, h("ir-button", { key: '848f88a601ab8693b5ce8bc1e009aa0826142021', iconName: "minus", disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: 'f2674e60ec279245ee3abe68ca345175e2253173' }, this.adultCount), h("ir-button", { key: 'c0d585bed19a334ab326eee649a9be9527215e5d', iconName: "plus", disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count", svgClassName: "h-[14px] w-[12.25px]" }))), h("div", { key: '619840061fd0efaefdb7cd1e1794aae650101284', class: "counter-item" }, h("div", { key: 'ee349de91b884d35adf5519aed92546dfe4c9901' }, h("p", { key: '31f3f89d9679b62e458002982760749438b58123', class: "main-text" }, "Children"), h("p", { key: '18006d5302f2cbcdbd1775789753f10e37f30527', class: "secondary-text" }, "Ages 1-", this.childMaxAge)), h("div", { key: 'dfad623f34ade0cebf313f053b15d8341add5aae', class: "counter-buttons-group" }, h("ir-button", { key: '9727282c81c77ec8bd7a86316cfcab784dc3cbb7', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count", iconName: "minus", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: 'bb72d8569e9c5a7a6ccc91a48479ab74b0232d0a' }, this.childrenCount), h("ir-button", { key: 'ab578a0f4a0447b48a037d21722afb4a00fdbea5', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count", iconName: "plus", svgClassName: "h-[14px] w-[12.25px]" }))), h("ir-button", { key: '39dc263606a522d490cfe35651747a2325c98cb3', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button",
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
