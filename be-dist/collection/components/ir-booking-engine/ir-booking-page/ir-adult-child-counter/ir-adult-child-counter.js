import localizedWords from "../../../../stores/localization.store";
import { h } from "@stencil/core";
export class IrAdultChildCounter {
    constructor() {
        this.adultCount = 0;
        this.childrenCount = 0;
        this.minAdultCount = 0;
        this.minChildrenCount = 0;
        this.maxAdultCount = 10;
        this.maxChildrenCount = 10;
        this.childMaxAge = 0;
        this.isPopoverOpen = false;
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
        return (h("div", { class: "popover-trigger w-full sm:w-fit", slot: "trigger", "data-state": this.isPopoverOpen ? 'opened' : 'closed' }, h("ir-icons", { name: "user", svgClassName: "size-[18px]" }), h("div", { class: "flex h-[3rem] flex-1 flex-col justify-center gap-0.5" }, h("p", { class: "label" }, localizedWords.entries.Lcz_Guests), h("p", { class: 'guests' }, this.adultCount > 0 && (h("span", null, this.adultCount, " ", this.adultCount === 1 ? localizedWords.entries.Lcz_Adult : localizedWords.entries.Lcz_Adults)), this.childrenCount > 0 && (h("span", null, ", ", this.childrenCount, " ", this.childrenCount === 1 ? localizedWords.entries.Lcz_Child : localizedWords.entries.Lcz_Children)), this.adultCount === 0 && h("span", { class: "" }, localizedWords.entries.Lcz_Select)))));
    }
    handlePopoverToggle(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.isPopoverOpen = e.detail;
        if (!this.isPopoverOpen) {
            this.addAdultsAndChildren.emit({
                adult_nbr: this.adultCount,
                child_nbr: this.childrenCount,
            });
        }
    }
    render() {
        return (h("ir-popover", { key: 'de67ffb3e1dbcf058f62798edf285c71071f0111', ref: el => (this.popover = el), onOpenChange: this.handlePopoverToggle.bind(this) }, this.guestTrigger(), h("div", { key: 'db5096104f62168a3735897764e5ebab3f0c1852', class: "counter-container w-full border-0 p-4 pt-14 shadow-none sm:w-auto sm:border sm:pt-4 sm:shadow-sm", slot: "popover-content" }, h("div", { key: 'ab989c46ef56f8efd6d028a97470316a0b54e59b', class: "counter-item" }, h("div", { key: '9e1321f137a38883fc652a35c786c0e5c1d18a74' }, h("p", { key: '1ce287aa364ab16dd9e37f274826470452166554', class: "main-text" }, localizedWords.entries.Lcz_Adults), h("p", { key: 'e169a54a95537427451a14055cbc0b3af1d8ac46', class: "secondary-text" }, localizedWords.entries.Lcz_Age, " ", this.childMaxAge + 1, "+")), h("div", { key: 'adfd634b25627044d11b5c2a03e68dc65f968d74', class: "counter-buttons-group", role: "group" }, h("ir-button", { key: '469558bc2558de62403bfb3305f7bcd4e3dca595', iconName: "minus", disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: 'e0aae9c73d81939a848690bce65761c736c6a27c' }, this.adultCount), h("ir-button", { key: '927f2a91bbdeb16f24863f5af612703e1931dbc4', iconName: "plus", disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count", svgClassName: "h-[14px] w-[12.25px]" }))), h("div", { key: '81c1e5b44c6533123de3148e20614c5c7b66b7e4', class: "counter-item" }, h("div", { key: 'da68d4be8d94926b81be7930f46fa7c602f8fe10' }, h("p", { key: '145b01df6f8e10af09d05abf0883befbb51ff63b', class: "main-text" }, localizedWords.entries.Lcz_Children), h("p", { key: 'fab5d4bec743dc6994b0a1486df28b9cdbf70a24', class: "secondary-text" }, localizedWords.entries.Lcz_Ages, " 1-", this.childMaxAge)), h("div", { key: '764049764e608b779c1d51c0005010679a94d26d', class: "counter-buttons-group", role: "group" }, h("ir-button", { key: '551c6c78be0b7ff1e1fa2be6dc385d4a36e7ca60', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count", iconName: "minus", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '912fb8169080c659c0001d3b83cc73796b3670f5' }, this.childrenCount), h("ir-button", { key: 'b81cf0729917606cdfb68f53fbb605f941f1ae88', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count", iconName: "plus", svgClassName: "h-[14px] w-[12.25px]" }))), h("ir-button", { key: '03d9798dc13209309a96198fd4e9d4658b44e302', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button", label: localizedWords.entries.Lcz_Done, "aria-label": "Confirm selection" }))));
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
                "defaultValue": "0"
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
                "defaultValue": "0"
            }
        };
    }
    static get states() {
        return {
            "isPopoverOpen": {}
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
