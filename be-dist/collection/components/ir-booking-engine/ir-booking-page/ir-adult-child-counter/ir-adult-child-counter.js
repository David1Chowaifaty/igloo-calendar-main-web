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
        return (h("ir-popover", { key: '31debc98d517d060aa4f86a1164f111064869230', ref: el => (this.popover = el), onOpenChange: e => {
                if (!e.detail) {
                    this.addAdultsAndChildren.emit({
                        adult_nbr: this.adultCount,
                        child_nbr: this.childrenCount,
                    });
                }
            } }, this.guestTrigger(), h("div", { key: 'b8bb7b3a6c79a12eac85da28e274ea82bde9daf6', class: "counter-container border-0 w-full p-4 shadow-none sm:border sm:w-auto sm:shadow-sm", slot: "popover-content" }, h("div", { key: '45f0e26fd902e8d06521f279740c19b898faa9f6', class: "counter-item" }, h("div", { key: '2236c8d716fd7c12e05897d0e3efe6b72b8271b9' }, h("p", { key: '1942b0ed6a43b44ea365bde6303d869a48ab0a39', class: "main-text" }, "Adults"), h("p", { key: '85dcf6e5a28a241264b804fb3be46613c3713ee6', class: "secondary-text" }, "Age 13+")), h("div", { key: 'a61df89013519e80b3373b806f6ea7a5c66aaf11', class: "counter-buttons-group", role: "group" }, h("ir-button", { key: '7e73304848bc8a023b35b637540903fd978c8da6', disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count" }, h("svg", { key: 'c969bda6017d3a79c86a26480a4d08a3da757f3a', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: '0e222f3825e0219296637060015219ea66618e86', fill: "currentColor", d: "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" }))), h("p", { key: 'e758a602556d34fce5b12524073b9ec56310cefa' }, this.adultCount), h("ir-button", { key: '4ec4dc2fa42385441cec6398aeaee70fa8aa847d', disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count" }, h("svg", { key: 'fd480b2a4e8098cf315b993a257f7f50d4b54b57', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: '0f1e5749c037cb66864e30e12a6ce6b880ce1dac', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" }))))), h("div", { key: '3c5accb0f1ee59fe150e08a7a7b3db8dce4e1ee0', class: "counter-item" }, h("div", { key: '81380737718c958a8f0bdb5b8d097987cad23cac' }, h("p", { key: 'f01ec536cb8cc325cc4f1f7020732a7af02a5914', class: "main-text" }, "Children"), h("p", { key: '9281a725d9274fbf485d7b526d599f08e4eb568d', class: "secondary-text" }, "Ages 2-12")), h("div", { key: '20408bafc9c28ecfb76512547d472e0d98520421', class: "counter-buttons-group", role: "group" }, h("ir-button", { key: '06428f047bd8b923b99603796daa03ecb4cc9c10', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count" }, h("svg", { key: '31baa27ded630cd6bf74a64163ffddb5778fac5a', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: '4ad769b1d18cdc577b978aca9ae277290f10e565', fill: "currentColor", d: "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" }))), h("p", { key: 'f1d820cd1ca6e1a251809b9a38d9a5199dbd78ba' }, this.childrenCount), h("ir-button", { key: '8b9166a451804e676b00ae37e9dc4a6b30c06b5a', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count" }, h("svg", { key: '5f59619659c14f1cfb3200714b747986a0cecab8', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: 'ea0f6879c39c08884071a70e7480e6bbf14359e7', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" }))))), h("ir-button", { key: 'fc1e00be7282270f38362ab565a86f6f6fb19649', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button", label: "Done", "aria-label": "Confirm selection" }))));
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
