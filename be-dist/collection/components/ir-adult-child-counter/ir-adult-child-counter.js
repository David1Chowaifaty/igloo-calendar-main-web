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
        return (h("div", { class: "popover-trigger w-full sm:w-fit", slot: "trigger" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 17.5, viewBox: "0 0 448 512" }, h("path", { fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" })), h("div", null, h("p", null, "Guests"), h("p", { class: 'guests' }, this.adultCount > 0 && h("span", null, this.adultCount, " adults"), this.childrenCount > 0 && h("span", null, ", ", this.childrenCount, " children")))));
    }
    render() {
        return (h("ir-popover", { key: 'f81606300aa50119d7cc12b7a97a106424ff2475', ref: el => (this.popover = el), onOpenChange: e => {
                if (!e.detail) {
                    this.addAdultsAndChildren.emit({
                        adult_nbr: this.adultCount,
                        child_nbr: this.childrenCount,
                    });
                }
            } }, this.guestTrigger(), h("div", { key: '10d865d8804f1e9ac69a91f68e38e1076c3448c2', class: "counter-container border-0 w-full p-2 shadow-none sm:border sm:w-auto sm:shadow-sm sm:p-4", slot: "popover-content" }, h("div", { key: '7166508eb8ec22437781da24f3e9b62e76ce9699', class: "counter-item" }, h("div", { key: '34178a6e2d457787f258d5e5b3a69bfc16ede0fc' }, h("p", { key: 'a8302f89b995ce72113bf0715dbbf7bc6db6aa50', class: "main-text" }, "Adults"), h("p", { key: '8df26b4f089cfa2d16bc30b99570704b4735aa8b', class: "secondary-text" }, "Age 13+")), h("div", { key: '43887e40f8af6caf581969961283e65d3e50f6f8', class: "counter-buttons-group", role: "group" }, h("ir-button", { key: '41d0d6a9afed6b0cb0ba0cbc340ed3df88bb6f55', disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count" }, h("svg", { key: 'c4861e3b1ea47acd2c1d04ea5c231d479a19c08b', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: '731191d4b622eb3d426cdb4ca25979410b995d8d', fill: "currentColor", d: "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" }))), h("p", { key: '644345a0e88957aa5f04d89f7d55acf02a1073c5' }, this.adultCount), h("ir-button", { key: '55359409268d0bd2b9b2be020ef4cf751740dc92', disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count" }, h("svg", { key: 'f6d125b0a7e312bc75841bc499b5efcf38fbcc79', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: '77c860b4ca7515a30d90cd60ac48c171b0c7c089', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" }))))), h("div", { key: '7809da87fb807caf3b68bd896201f1fd2ab5f84b', class: "counter-item" }, h("div", { key: '059ced6dcae816fdad3357cde3fa9ec2de2f5c5c' }, h("p", { key: 'e4f594b1013971e2632bcd972171d0e959da2a7a', class: "main-text" }, "Children"), h("p", { key: '08e0fd028b22592ab55b4b9eb2ce0f9d351ff332', class: "secondary-text" }, "Ages 2-12")), h("div", { key: '7592775a1e400b96ef7208e7ad7d84e0d407017f', class: "counter-buttons-group", role: "group" }, h("ir-button", { key: '7c8e7213af36e544c6c706fc33d18d4a2cfde7b0', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count" }, h("svg", { key: '52906a241cf5ae2bdc4fbcd93a2b35edb6f5f89f', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: 'ffda148c0256040965985f6606c8fb74f0b4f56c', fill: "currentColor", d: "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" }))), h("p", { key: '37a005c1515f4340d1ca6372c319842a4a2a0ed4' }, this.childrenCount), h("ir-button", { key: 'c54d6a1a59ac3580ee5b791f751e1b31c9d6e0e1', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count" }, h("svg", { key: '277d35036e982713557cc90de005ee0d929c5d4c', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: 'c892a0ad4a95b894497d63c69c7a971c6aced706', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" }))))), h("ir-button", { key: 'd7d780d3d48a16ac46c076ae4c0a865cd5a9bf1f', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button", label: "Done", "aria-label": "Confirm selection" }))));
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
