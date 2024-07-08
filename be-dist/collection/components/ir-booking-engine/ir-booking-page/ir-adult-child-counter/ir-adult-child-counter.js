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
        return (h("ir-popover", { key: '96b7f569d99b96d9bd3df50818883bae246e7315', ref: el => (this.popover = el), onOpenChange: this.handlePopoverToggle.bind(this) }, this.guestTrigger(), h("div", { key: 'e16ccf9af8fbb53344e9aeb114741b70ab2d6ada', class: "counter-container w-full border-0 p-4 pt-14 shadow-none sm:w-auto sm:border sm:pt-4 sm:shadow-sm", slot: "popover-content" }, h("div", { key: 'a43a678ca296c32c0bac8e563f2fdac7fd16de63', class: "counter-item" }, h("div", { key: 'ad5f6277043990cf53ad931483d11520378cbad9' }, h("p", { key: 'fbad54207e785b8873428c387dba675cd508d4e4', class: "main-text" }, localizedWords.entries.Lcz_Adults), h("p", { key: 'f8424e84cf25e97c04b5ed9e929db0b4fc338940', class: "secondary-text" }, localizedWords.entries.Lcz_Age, " ", this.childMaxAge + 1, "+")), h("div", { key: 'd67f7c409915c5af102fd48873ea617aec5d0d51', class: "counter-buttons-group", role: "group" }, h("ir-button", { key: 'a62cfad15957c821283742c2b0207ffe02940fad', iconName: "minus", disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '3b8dfda9844717e568894f7446525b2733cc4a46' }, this.adultCount), h("ir-button", { key: 'ac5d63feb4b5d41979f31249f7ed7d37a03bf830', iconName: "plus", disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count", svgClassName: "h-[14px] w-[12.25px]" }))), h("div", { key: '152560cc8e43fd1cf22bd21dcb396aa424ffde41', class: "counter-item" }, h("div", { key: 'b40d62c9a0a4f193d357c25bed1d27771d36044f' }, h("p", { key: 'ed66b5c8345ce310b7ac580cbc10ec0b38861a4a', class: "main-text" }, localizedWords.entries.Lcz_Children), h("p", { key: '01066a5fb0fe6c3c4e490fba66fc1ffa5ab5c89e', class: "secondary-text" }, localizedWords.entries.Lcz_Ages, " 1-", this.childMaxAge)), this.childMaxAge > 0 && (h("div", { key: '5fac45046170c58955cb8bdd9d6375fd6c391b63', class: "counter-buttons-group", role: "group" }, h("ir-button", { key: 'bb2291d5f9c749341c63398c0b71ef00c4e890a9', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count", iconName: "minus", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '0506423f45ffd142ccd3c48d1d5438ffb3070f6e' }, this.childrenCount), h("ir-button", { key: 'e731e4a635f77aec11da85906ef1a1e1053ba63a', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count", iconName: "plus", svgClassName: "h-[14px] w-[12.25px]" })))), h("ir-button", { key: 'd15206f1c03661c801d947dc6e028043b6cfed62', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button", label: localizedWords.entries.Lcz_Done, "aria-label": "Confirm selection" }))));
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
