import localizedWords from "../../../../stores/localization.store";
import { h, Fragment } from "@stencil/core";
export class IrAdultChildCounter {
    constructor() {
        this.adultCount = 2;
        this.childrenCount = 0;
        this.infant_nbr = 0;
        this.error = undefined;
        this.minAdultCount = 0;
        this.minChildrenCount = 0;
        this.maxAdultCount = 10;
        this.maxChildrenCount = 10;
        this.childMaxAge = 0;
        this.baseChildrenAges = [];
        this.isPopoverOpen = false;
    }
    async open() {
        if (this.isPopoverOpen) {
            return;
        }
        this.popover.toggleVisibility();
    }
    addChildrenAndAdult() {
        this.error = false;
        this.updateGuestInformation();
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
        // this.childrenAges.push('');
        this.childrenCount = newValue;
    }
    decrementChildrenCount() {
        const newValue = this.childrenCount - 1;
        if (newValue < this.minChildrenCount) {
            return;
        }
        // this.childrenAges.pop();
        this.childrenCount = newValue;
    }
    incrementInfantCount() {
        const newValue = this.childrenCount + 1;
        if (newValue > this.maxChildrenCount) {
            return;
        }
        // this.childrenAges.push('');
        this.childrenCount = newValue;
    }
    decrementInfantCount() {
        const newValue = this.childrenCount - 1;
        if (newValue < this.minChildrenCount) {
            return;
        }
        // this.childrenAges.pop();
        this.childrenCount = newValue;
    }
    handlePopoverToggle(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.isPopoverOpen = e.detail;
        this.updateGuestInformation();
    }
    updateGuestInformation() {
        // const infant_nbr = calculateInfantNumber(this.childrenAges);
        const config = {
            adult_nbr: this.adultCount,
            child_nbr: this.childrenCount,
            infant_nbr: this.infant_nbr,
            // infant_nbr,
            // childrenAges: this.childrenAges,
        };
        console.log(config);
        this.addAdultsAndChildren.emit(config);
    }
    guestTrigger() {
        return (h("div", { class: "popover-trigger w-full sm:w-fit", slot: "trigger", "data-state": this.isPopoverOpen ? 'opened' : 'closed' }, h("ir-icons", { name: "user", svgClassName: "size-[1.125rem]" }), h("div", { class: "flex h-[3rem] flex-1 flex-col justify-center gap-0.5" }, h("p", { class: "label" }, localizedWords.entries.Lcz_Guests), h("p", { class: 'guests' }, this.adultCount > 0 ? (h(Fragment, null, h("span", { class: 'lowercase' }, this.adultCount, " ", this.adultCount === 1 ? localizedWords.entries.Lcz_Adult : localizedWords.entries.Lcz_Adults), this.childMaxAge > 0 && (h("span", { class: 'lowercase' }, ", ", this.childrenCount, " ", this.childrenCount === 1 ? localizedWords.entries.Lcz_Child : localizedWords.entries.Lcz_Children)))) : (h("span", { class: "" }, localizedWords.entries.Lcz_Select, "..."))))));
    }
    render() {
        return (h("ir-popover", { key: 'bb432411aeb08d97d70e94d5c5f7175e426115f7', ref: el => (this.popover = el), allowFlip: false, placement: "bottom-end", autoAdjust: false, onOpenChange: this.handlePopoverToggle.bind(this) }, this.guestTrigger(), h("div", { key: 'ab48a473a843880a5adb6269eddd5f162a19bba6', class: "counter-container  w-full border-0 p-4 pt-14 shadow-none sm:w-auto sm:border sm:pt-4 sm:shadow-sm", slot: "popover-content" }, h("div", { key: '634a356c450bb1ed46aeb14aaf31add395b13c3e', class: "counter-item" }, h("div", { key: 'b51c989218913ade017c932623a7c1f6ada53898' }, h("p", { key: 'dccc76c6a11906152d4efab9c4e3a4b5e4ede7bd', class: "main-text" }, localizedWords.entries.Lcz_Adults), h("p", { key: '0a4712b954ef413e673301236312bf319ec4556e', class: "secondary-text" }, localizedWords.entries.Lcz_Age, " ", this.childMaxAge + 1, "+")), h("div", { key: '482deeac4d3f0a1ce2aed7ff4ba7c0fad332c770', class: "counter-buttons-group", role: "group" }, h("ir-button", { key: '13d1605b4db86c595bbae4b9b4e60d8f61542595', iconName: "minus", disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '717a9960dbad2547521fc4bafa2b1eea86989fd3', class: 'text-base' }, this.adultCount), h("ir-button", { key: '81114bef1302da91fc93b51dc72be555c57a2c71', iconName: "plus", disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count", svgClassName: "h-[14px] w-[12.25px]" }))), this.childMaxAge > 0 && (h("div", { key: '464c503837a8f91f1a2c9ab50596b255101f6785', class: "counter-item" }, h("div", { key: '6756d187f07eebb007eb011dadaaf9e365aa50ff' }, h("p", { key: '5227487853245a5e733ad56c0e812489d5bb7bc5', class: "main-text" }, localizedWords.entries.Lcz_Children), h("p", { key: '2051ed69f37deaebab1f95e55b3ea6d7d4f51b07', class: "secondary-text" }, localizedWords.entries.Lcz_Age, " 0-", this.childMaxAge)), h("div", { key: '9619166be20cb9d9d2f7ba57b83ead7c96615d81', class: "counter-buttons-group", role: "group" }, h("ir-button", { key: '461dd24832f7347d0fede560bb701054accb1c1a', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count", iconName: "minus", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '704ed3a4df3f4ce622270f9c52d8363059f5c045', class: 'text-base' }, this.childrenCount), h("ir-button", { key: '826147fa99152da8e21e4013c646e436a691e4bd', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count", iconName: "plus", svgClassName: "h-[14px] w-[12.25px]" })))), this.childMaxAge > 0 && (h("div", { key: 'c79e6a114cb01740c402412d9d082c948b5fc3b0', class: "counter-item" }, h("div", { key: 'e323394ee1db439da3d14cf50dcb9483fb328159' }, h("p", { key: '0f6e298a71630b3683e368b55a2975771ea7a219', class: "main-text" }, "Infants"), h("p", { key: 'eb081d62f7a8e7e167e121028c27d7ea9e14e178', class: "secondary-text" }, localizedWords.entries.Lcz_Age, " 0-2")), h("div", { key: '5476dd2d1861125792afa1cd6313b2c6a200d7e7', class: "counter-buttons-group", role: "group" }, h("ir-button", { key: 'e91dee75c5b212b15d446be69c114d29c65413f0', disabled: this.infant_nbr === 6, variants: "icon", onButtonClick: this.decrementInfantCount.bind(this), "aria-label": "Decrease child count", iconName: "minus", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: 'acb7ea076edcbb06df6c6460f89396195adf864f', class: 'text-base' }, this.infant_nbr), h("ir-button", { key: 'a91e3ff853ca1a5ea5eb1563942c30ec9abd30e3', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementInfantCount.bind(this), "aria-label": "Increase child count", iconName: "plus", svgClassName: "h-[14px] w-[12.25px]" })))), h("ir-button", { key: 'd96e5295df31949171cdbca083481113fec90bcc', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button", label: localizedWords.entries.Lcz_Done, "aria-label": "Confirm selection" }))));
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
                "reflect": false,
                "defaultValue": "2"
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
                "reflect": false,
                "defaultValue": "0"
            },
            "infant_nbr": {
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
                "attribute": "infant_nbr",
                "reflect": false,
                "defaultValue": "0"
            },
            "error": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "error",
                "reflect": false
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
            },
            "baseChildrenAges": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "[]"
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
                    "original": "AddAdultsAndChildrenEvent",
                    "resolved": "{ adult_nbr: number; child_nbr: number; infant_nbr: number; }",
                    "references": {
                        "AddAdultsAndChildrenEvent": {
                            "location": "local",
                            "path": "C:/Users/user/Code/work-rony/iglooroom/src/components/ir-booking-engine/ir-booking-page/ir-adult-child-counter/ir-adult-child-counter.tsx",
                            "id": "src/components/ir-booking-engine/ir-booking-page/ir-adult-child-counter/ir-adult-child-counter.tsx::AddAdultsAndChildrenEvent"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "open": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
}
//# sourceMappingURL=ir-adult-child-counter.js.map
