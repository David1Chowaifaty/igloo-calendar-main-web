import { h } from "@stencil/core";
export class IrAdultChildCounter {
    constructor() {
        this.adultCount = 1;
        this.childrenCount = 0;
        this.minAdultCount = 0;
        this.minChildrenCount = 0;
        this.maxAdultCount = 10;
        this.maxChildrenCount = 10;
    }
    addChildrenAndAdult() {
        this.addAdultsAndChildren.emit({
            adult_nbr: this.adultCount,
            child_nbr: this.childrenCount,
        });
        this.popover.toggleVisibility();
    }
    incrementAdultCount() {
        const newValue = this.adultCount + 1;
        if (newValue > this.maxAdultCount) {
            return;
        }
        this.adultCount = newValue;
    }
    decrementAdultCount() {
        const newValue = this.adultCount - 1;
        if (newValue < this.minAdultCount) {
            return;
        }
        this.adultCount = newValue;
    }
    incrementChildrenCount() {
        const newValue = this.childrenCount + 1;
        if (newValue > this.maxChildrenCount) {
            return;
        }
        this.childrenCount = newValue;
    }
    decrementChildrenCount() {
        const newValue = this.childrenCount - 1;
        if (newValue < this.minChildrenCount) {
            return;
        }
        this.childrenCount = newValue;
    }
    guestTrigger() {
        return (h("div", { class: "popover-trigger w-full sm:w-fit", slot: "trigger" }, h("ir-icons", { name: "user", svgClassName: "size-[18px]" }), h("div", null, h("p", { class: "text-xs" }, "Guests"), h("p", { class: 'guests pt-3' }, this.adultCount > 0 && (h("span", null, this.adultCount, " ", this.adultCount === 1 ? 'adult' : 'adults')), this.childrenCount > 0 && (h("span", null, ", ", this.childrenCount, " ", this.childrenCount === 1 ? 'child' : 'children'))))));
    }
    render() {
        return (h("ir-popover", { key: 'e4905695058d9a02b94f71b35a6c8b0c556df342', ref: el => (this.popover = el), onOpenChange: e => {
                if (!e.detail) {
                    this.addAdultsAndChildren.emit({
                        adult_nbr: this.adultCount,
                        child_nbr: this.childrenCount,
                    });
                }
            } }, this.guestTrigger(), h("div", { key: '31888067e69b971005c75a94311015688a3489b7', class: "counter-container w-full border-0 p-4 shadow-none sm:w-auto sm:border sm:shadow-sm", slot: "popover-content" }, h("div", { key: 'd129a13c40060381371fb10e5ff9d4182070f236', class: "counter-item" }, h("div", { key: 'b0cd44d11ce810f5d31c3e2e5a15489d713348c7' }, h("p", { key: 'da79cb095b36e9e82d94cf744ab7734350f445da', class: "main-text" }, "Adults"), h("p", { key: '8f431eff9be6f8183b4c08f91a8173e741b7e1ec', class: "secondary-text" }, "Age 13+")), h("div", { key: 'd4cf29a1c379a62f890bf94b6aba78e0338d1e81', class: "counter-buttons-group", role: "group" }, h("ir-button", { key: 'ff1e0418b2b11e2f0de3011c80659c313f552817', disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count" }, h("svg", { key: '89585ba369b51244a884af479a96124a9b5913e5', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: 'd3cc9c975322fb7775e51e7978c03845c3989668', fill: "currentColor", d: "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" }))), h("p", { key: 'caa5c6937b237c8b0a8c6ec232a2261a615f450b' }, this.adultCount), h("ir-button", { key: '436e1aec6b519ef11352b50ff88919954503be9d', disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count" }, h("svg", { key: '22e7e5d158f3eb1ea670776ac97363bc1d7b8ce4', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: 'c85f025d773027b66fdc804ea48a393fec954752', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" }))))), h("div", { key: 'c81d15e7c4ab2187ed5ce31d592169c38eac3d4b', class: "counter-item" }, h("div", { key: '7d2a2536c784807e07394a131903652e714b205a' }, h("p", { key: '0944893fabb942fb4cb5afe76b316624d1ac0765', class: "main-text" }, "Children"), h("p", { key: '578b77f8816847b0d737b3004a5b01c62682c25d', class: "secondary-text" }, "Ages 2-12")), h("div", { key: 'f4b29bc75e9b01d50d7c3070d78c3b7c6e2b2100', class: "counter-buttons-group", role: "group" }, h("ir-button", { key: '368d1a8f6e965ff0e0f21d27328352c8e94e4931', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count" }, h("svg", { key: '79644fbafd3fa1598f51f2ac2bd5b0a087e7691a', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: 'b0adb5c3a48bcef22cdd4a14a4b766dc2b0ec8f8', fill: "currentColor", d: "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" }))), h("p", { key: '87ce83c1123fd5c45161bd6f9106daedb1c387c5' }, this.childrenCount), h("ir-button", { key: 'f9e90a0cc774ee9289e0b7f9ed82ed4230c5b462', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count" }, h("svg", { key: 'b860f250c0058125df3f4a9fbbec985eb4755fe7', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: '336d75306872f61fe30ecb62777ad5366d64c6da', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" }))))), h("ir-button", { key: 'a15a84525c9e5efeb981a4e5bb14cad831a3bbb1', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button", label: "Done", "aria-label": "Confirm selection" }))));
    }
    static get is() { return "ir-adult-child-counter"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-adult-child-counter.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-adult-child-counter.css"]
        };
    }
    static get properties() {
        return {
            "adultCount": {
                "type": "number",
                "mutable": true,
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
                "attribute": "adult-count",
                "reflect": true,
                "defaultValue": "1"
            },
            "childrenCount": {
                "type": "number",
                "mutable": true,
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
                "attribute": "children-count",
                "reflect": true,
                "defaultValue": "0"
            },
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
                "defaultValue": "0"
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
                "defaultValue": "10"
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
                "defaultValue": "10"
            }
        };
    }
    static get events() {
        return [{
                "method": "addAdultsAndChildren",
                "name": "addAdultsAndChildren",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ adult_nbr: number; child_nbr: number }",
                    "resolved": "{ adult_nbr: number; child_nbr: number; }",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-adult-child-counter.js.map
