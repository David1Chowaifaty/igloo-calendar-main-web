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
        this.addAdultsAndChildren.emit({
            adult_nbr: this.adultCount,
            child_nbr: this.childrenCount,
            infant_nbr,
            childrenAges: this.childrenAges,
        });
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
        return (h("ir-popover", { key: '5dd2eb8097e329654cca78360f56d0b721a80d91', ref: el => (this.popover = el), outsideEvents: "none", onOpenChange: this.handlePopoverToggle.bind(this) }, this.guestTrigger(), h("div", { key: '7635a7ff4e34cd094ab21c67c14667b56d917d6d', class: "counter-container max-h-96 w-full overflow-y-auto border-0 p-4 pt-14 shadow-none sm:w-auto sm:border sm:pt-4 sm:shadow-sm", slot: "popover-content" }, h("div", { key: '16766c6560fde7cd1851a27848317808cf3404d5', class: "counter-item" }, h("div", { key: '0509b6c1c797fa7afdae3e769d1e068295220905' }, h("p", { key: 'b9f282c79a8a71d7eeaaf9379722217b5d5af3ea', class: "main-text" }, localizedWords.entries.Lcz_Adults), h("p", { key: 'ad4178fc85db1459cae6db1f8a44ddaffea13f4b', class: "secondary-text" }, localizedWords.entries.Lcz_Age, " ", this.childMaxAge + 1, "+")), h("div", { key: '498307eedb4a04cc560158625ce6973479f823a8', class: "counter-buttons-group", role: "group" }, h("ir-button", { key: '1389fb9cb7a98dd49588de2d397d46067e006486', iconName: "minus", disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '340665b4679816b96cf972b18fafe3279cec2acd', class: 'text-base' }, this.adultCount), h("ir-button", { key: '07144e8e2e11bfebf18f1551bca652e37a9326ab', iconName: "plus", disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count", svgClassName: "h-[14px] w-[12.25px]" }))), this.childMaxAge > 0 && (h("div", { key: 'ff556f85dd6a757c73a2712f45ff4520f6451197', class: "counter-item" }, h("div", { key: '2696e7270fb169c073c641fded692cc01f0a1839' }, h("p", { key: '85ce1bba7a1e0a5c152708cb8f3c8bd3dcb40075', class: "main-text" }, localizedWords.entries.Lcz_Children), h("p", { key: 'b2a69cf436754404f9ee5135cf3181d79b6b5781', class: "secondary-text" }, localizedWords.entries.Lcz_Age, " 0-", this.childMaxAge)), h("div", { key: 'a4b378d78992c149f50477a8db6dbc58d1007837', class: "counter-buttons-group", role: "group" }, h("ir-button", { key: '8c87c72352aa349cd9a871dbe5e8ec68f871bd3a', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count", iconName: "minus", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '94c63c7093600b4ecf5f2d6fd8a5184545a8bb20', class: 'text-base' }, this.childrenCount), h("ir-button", { key: 'd62cc20593b4a003c9e54c7282d75cd1d3de0dda', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count", iconName: "plus", svgClassName: "h-[14px] w-[12.25px]" })))), (_a = this.childrenAges) === null || _a === void 0 ? void 0 :
            _a.map((v, i) => (h("div", null, h("ir-select", { addDummyOption: true, value: v, key: `child_${i}_age`, "data-state": this.error && v === '' ? 'error' : '', variant: "double-line", label: `Child ${i + 1} age`, onValueChange: e => {
                    const prev = [...this.childrenAges];
                    prev[i] = e.detail.toString();
                    this.childrenAges = [...prev];
                }, data: [...Array(this.maxChildrenCount)].map((_, index) => ({
                    id: index.toString(),
                    value: index === 0 ? localizedWords.entries['Lcz_under1'] : index.toString(),
                })) }), this.error && v === '' && h("p", { class: 'text-red-500' }, localizedWords.entries.Lcz_enterchildage)))), h("ir-button", { key: '531442d71322152ff04f30a5fc756b5b3cef328b', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button", label: localizedWords.entries.Lcz_Done, "aria-label": "Confirm selection" }))));
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
