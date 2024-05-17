import localizedWords from "../../../../stores/localization.store";
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
        return (h("div", { class: "popover-trigger w-full sm:w-fit", slot: "trigger" }, h("ir-icons", { name: "user", svgClassName: "size-[18px]" }), h("div", { class: "flex h-[3rem] flex-1 flex-col justify-center gap-0.5" }, h("p", { class: "label" }, "Guests"), h("p", { class: 'guests' }, this.adultCount > 0 && (h("span", null, this.adultCount, " ", this.adultCount === 1 ? 'adult' : 'adults')), this.childrenCount > 0 && (h("span", null, ", ", this.childrenCount, " ", this.childrenCount === 1 ? 'child' : 'children'))))));
    }
    render() {
        return (h("ir-popover", { key: 'b49987f74d0008f10cf97f7e0bd616c1bc251045', ref: el => (this.popover = el), onOpenChange: e => {
                if (!e.detail) {
                    this.addAdultsAndChildren.emit({
                        adult_nbr: this.adultCount,
                        child_nbr: this.childrenCount,
                    });
                }
            } }, this.guestTrigger(), h("div", { key: 'b8f9c64fa84e3f18678a75c0ac320e7c3c682ccf', class: "counter-container w-full border-0 p-4 shadow-none sm:w-auto sm:border sm:shadow-sm", slot: "popover-content" }, h("div", { key: '6fcd1f0b9ce7809ff2a3ddd6a99ad7e6cffc1d3b', class: "counter-item" }, h("div", { key: '067b4bc48f1ddf53959b5ef9f558368108d2856c' }, h("p", { key: '5399b6660de915a80d4708694cc580ddfd339ed4', class: "main-text" }, localizedWords.entries.Lcz_Adults), h("p", { key: '78a9638679fcf1b7621534235a8c8ee2426acc7d', class: "secondary-text" }, localizedWords.entries.Lcz_Age, " 13+")), h("div", { key: 'f5f36cdd5a2240f76f6cc1907756deee0be4a4b1', class: "counter-buttons-group", role: "group" }, h("ir-button", { key: 'f9da2beeb0808e1cbf9a4670c748d8eec73016fa', disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count" }, h("svg", { key: 'a71e5070de9edc595bba220d80c49ec4e917e36c', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: '881c7721671b7ff18fc83e511beb4191fc401130', fill: "currentColor", d: "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" }))), h("p", { key: '16a9bd91ac5006aacaa766871394fd0ede398591' }, this.adultCount), h("ir-button", { key: '0c58e4cfed86fc03af1a9112c319be9283d37477', disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count" }, h("svg", { key: 'fe6eb0b762978195602db1354d39997449351e7a', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: '1f776d184e7b68505620bd58366f2b1f770f3709', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" }))))), h("div", { key: 'c4bee843cd739c22320f6ef70c3f161bd43d6a04', class: "counter-item" }, h("div", { key: 'f1d815bea29037f3df48f0bf8961bc90e22eaea6' }, h("p", { key: '3540d759e7ac6d68b359a8a38d9057fd1437b95b', class: "main-text" }, localizedWords.entries.Lcz_Children), h("p", { key: '5490a0dceacde57872a0c89bd5428f73893df208', class: "secondary-text" }, localizedWords.entries.Lcz_Ages, " 2-12")), h("div", { key: '6f81a392affd1bbaada75ea7b390e9a4620e9d3e', class: "counter-buttons-group", role: "group" }, h("ir-button", { key: 'a5703858641015edc0e8d8c60707641f58edf631', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count" }, h("svg", { key: '38407769b0c6f7890791a6a64a0971bc182de44f', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: '879c39dabc013898cc971ae47e52fa1d9b6475bf', fill: "currentColor", d: "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" }))), h("p", { key: '9471a998d1d1ef3c8bbe05bea4cfd5c00b41248a' }, this.childrenCount), h("ir-button", { key: 'effc12d6803bee22a9b448fe2c3bfd73223dba20', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count" }, h("svg", { key: '16471129effe8bd627a4ede48acf2467a9963dec', slot: "btn-icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: '94bbb9fad0373bf2f7e3f1aa471e220737d46070', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" }))))), h("ir-button", { key: '4b2504013ae936045ec1a9be85aa837995b6bfdb', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button", label: localizedWords.entries.Lcz_Done, "aria-label": "Confirm selection" }))));
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
