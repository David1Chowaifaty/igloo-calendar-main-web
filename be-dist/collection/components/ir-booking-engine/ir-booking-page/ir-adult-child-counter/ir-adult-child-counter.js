import localizedWords from "../../../../stores/localization.store";
import { calculateInfantNumber } from "../../../../utils/utils";
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
        this.childrenAges = [];
    }
    componentWillLoad() {
        this.childrenAges = [...this.baseChildrenAges];
    }
    handleBaseChildrenAgesChange(newValue) {
        this.childrenAges = [...newValue];
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
        this.validateChildrenAges();
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
        this.childrenAges.push('');
        this.childrenCount = newValue;
    }
    decrementChildrenCount() {
        const newValue = this.childrenCount - 1;
        if (newValue < this.minChildrenCount) {
            return;
        }
        this.childrenAges.pop();
        this.childrenCount = newValue;
    }
    handlePopoverToggle(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.isPopoverOpen = e.detail;
        if (!this.isPopoverOpen) {
            if (this.childrenCount === 0) {
                this.popover.forceClose();
            }
            else {
                this.validateChildrenAges();
            }
            this.updateGuestInformation();
        }
    }
    updateGuestInformation() {
        const infant_nbr = calculateInfantNumber(this.childrenAges);
        const config = {
            adult_nbr: this.adultCount,
            child_nbr: this.childrenCount,
            infant_nbr,
            childrenAges: this.childrenAges,
        };
        console.log(config);
        this.addAdultsAndChildren.emit(config);
    }
    validateChildrenAges() {
        if (this.childrenAges.some(c => c === '')) {
            this.error = true;
            return;
        }
        this.popover.forceClose();
    }
    guestTrigger() {
        return (h("div", { class: "popover-trigger w-full sm:w-fit", slot: "trigger", "data-state": this.isPopoverOpen ? 'opened' : 'closed' }, h("ir-icons", { name: "user", svgClassName: "size-[1.125rem]" }), h("div", { class: "flex h-[3rem] flex-1 flex-col justify-center gap-0.5" }, h("p", { class: "label" }, localizedWords.entries.Lcz_Guests), h("p", { class: 'guests' }, this.adultCount > 0 ? (h(Fragment, null, h("span", { class: 'lowercase' }, this.adultCount, " ", this.adultCount === 1 ? localizedWords.entries.Lcz_Adult : localizedWords.entries.Lcz_Adults), this.childMaxAge > 0 && (h("span", { class: 'lowercase' }, ", ", this.childrenCount, " ", this.childrenCount === 1 ? localizedWords.entries.Lcz_Child : localizedWords.entries.Lcz_Children)))) : (h("span", { class: "" }, localizedWords.entries.Lcz_Select, "..."))))));
    }
    render() {
        var _a;
        console.log(this.childrenAges);
        return (h("ir-popover", { key: 'c637194583f76445dafd7de9135fda1c693bcd7a', ref: el => (this.popover = el), allowFlip: false, placement: "bottom-end", autoAdjust: false, outsideEvents: "none", onOpenChange: this.handlePopoverToggle.bind(this) }, this.guestTrigger(), h("div", { key: '59f499c4116e0078e599518d30e80106072dda28', class: "counter-container  w-full border-0 p-4 pt-14 shadow-none sm:w-auto sm:border sm:pt-4 sm:shadow-sm", slot: "popover-content" }, h("div", { key: '3d4281e955010d8d072831740a890da2e58781d6', class: "counter-item" }, h("div", { key: 'da1051841f48370c7f304b2c8411c60cac7ee809' }, h("p", { key: 'd225a8af2dcdf7c9f1283d39f361e3461c758dcc', class: "main-text" }, localizedWords.entries.Lcz_Adults), h("p", { key: '469edf42f592e02f5f3728048a1f435a85dfd502', class: "secondary-text" }, localizedWords.entries.Lcz_Age, " ", this.childMaxAge + 1, "+")), h("div", { key: '666619d8cf93e1d024a79d195ef75d0b4bf3d9ea', class: "counter-buttons-group", role: "group" }, h("ir-button", { key: 'e64b449cfcf97f45d027a93565f207bd630f74ed', iconName: "minus", disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '4c5a3c03475ada25ae2ba734e47948ca272dc743', class: 'text-base' }, this.adultCount), h("ir-button", { key: '29d9542d58fb9da50f760ec50bdc63340ab9b417', iconName: "plus", disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count", svgClassName: "h-[14px] w-[12.25px]" }))), this.childMaxAge > 0 && (h("div", { key: '26ace1a7d6a23e0a5a97bd9de80e9f7e05a1e65b', class: "counter-item" }, h("div", { key: 'bf2171c7da02b8a3da3628c6034f3abda9f59168' }, h("p", { key: 'fff72ba4a2b9234069d7f1db101499f625f858b4', class: "main-text" }, localizedWords.entries.Lcz_Children), h("p", { key: 'aa102c8ed42b966e39245595dd8afeb834711348', class: "secondary-text" }, localizedWords.entries.Lcz_Age, " 0-", this.childMaxAge)), h("div", { key: '2134982ea8ed4e020d46feb33be96a1b5b25e244', class: "counter-buttons-group", role: "group" }, h("ir-button", { key: '1a4f810578822f233d8797df70695feedc391a2c', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count", iconName: "minus", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: 'e8ebd235969dac044bf9b9ad32be531255b6b297', class: 'text-base' }, this.childrenCount), h("ir-button", { key: '0170c9aac9522cb29e0d696112b6f449c04c7c99', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count", iconName: "plus", svgClassName: "h-[14px] w-[12.25px]" })))), (_a = this.childrenAges) === null || _a === void 0 ? void 0 :
            _a.map((v, i) => (h("div", null, h("ir-select", { addDummyOption: true, value: v, key: `child_${i}_age`, "data-state": this.error && v === '' ? 'error' : '', variant: "double-line", label: `Child ${i + 1} age`, onValueChange: e => {
                    const prev = [...this.childrenAges];
                    prev[i] = e.detail.toString();
                    this.childrenAges = [...prev];
                }, data: [...Array(this.childMaxAge)].map((_, index) => ({
                    id: index.toString(),
                    value: index === 0 ? localizedWords.entries['Lcz_under1'] : index.toString(),
                })) }), this.error && v === '' && h("p", { class: 'm-0 p-0 text-xs text-red-500' }, localizedWords.entries.Lcz_enterchildage)))), h("ir-button", { key: 'd5ae2fee7b2bce78b8ad1222cecb588eb650fe01', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button", label: localizedWords.entries.Lcz_Done, "aria-label": "Confirm selection" }))));
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
            "isPopoverOpen": {},
            "childrenAges": {}
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
                    "resolved": "{ adult_nbr: number; child_nbr: number; infant_nbr: number; childrenAges: string[]; }",
                    "references": {
                        "AddAdultsAndChildrenEvent": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/work-rony/iglooroom/src/components/ir-booking-engine/ir-booking-page/ir-adult-child-counter/ir-adult-child-counter.tsx",
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
    static get watchers() {
        return [{
                "propName": "baseChildrenAges",
                "methodName": "handleBaseChildrenAgesChange"
            }];
    }
}
//# sourceMappingURL=ir-adult-child-counter.js.map
