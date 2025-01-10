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
        this.checkAvailability.emit(null);
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
        return (h("ir-popover", { key: '256123449326d482812933a740c5557ef20c160b', ref: el => (this.popover = el), allowFlip: false, placement: "bottom-end", autoAdjust: false, outsideEvents: "none", onOpenChange: this.handlePopoverToggle.bind(this) }, this.guestTrigger(), h("div", { key: '12ab9b829b85a2eeb99843508e7d5ec68dec930f', class: "counter-container  w-full border-0 p-4 pt-14 shadow-none sm:w-auto sm:border sm:pt-4 sm:shadow-sm", slot: "popover-content" }, h("div", { key: '9e4221ab240a582a2a5bf391a339167c58ec4722', class: "counter-item" }, h("div", { key: '6ba64f07ebaa601307a7e0bbb81bce8ab7f7ba0f' }, h("p", { key: '4022245d63a1b09fc3864e90c3d6289710ec2667', class: "main-text" }, localizedWords.entries.Lcz_Adults), h("p", { key: '9cf7d8b4ce571c81c436cfa3a2dd2e6b6a70ae13', class: "secondary-text" }, localizedWords.entries.Lcz_Age, " ", this.childMaxAge + 1, "+")), h("div", { key: '2320390b0601dce2434fdbd1603b7c92a3035fc7', class: "counter-buttons-group", role: "group" }, h("ir-button", { key: '25d43d77e298ff0aabf6b3d5094a254f2d800b18', iconName: "minus", disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: 'a1b28ae642823fecf8743b3384e1050507764c23', class: 'text-base' }, this.adultCount), h("ir-button", { key: 'd103baf41a336dada20aa7d5f223db2779b2bf45', iconName: "plus", disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count", svgClassName: "h-[14px] w-[12.25px]" }))), this.childMaxAge > 0 && (h("div", { key: '50a10d415d6aaf3d2ca30fae2de7f240207b2fb1', class: "counter-item" }, h("div", { key: '717ade18c1e07fc41457327eed6658e7bc4e8302' }, h("p", { key: '0562bbe488deb76074ef306718ec52c1aefda6b6', class: "main-text" }, localizedWords.entries.Lcz_Children), h("p", { key: 'f41d0534cb876dba92e16aff43184ba930ec9d9a', class: "secondary-text" }, localizedWords.entries.Lcz_Age, " 0-", this.childMaxAge)), h("div", { key: 'e83c8862b32eece856eea3eceba2b4a12dcf6954', class: "counter-buttons-group", role: "group" }, h("ir-button", { key: '38c59db800c1257d831d54240eb92ccec14f86fb', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count", iconName: "minus", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '0a0ddf361d7848c334bfd75acf346355d484bbd3', class: 'text-base' }, this.childrenCount), h("ir-button", { key: '57a3877bcc4991abbbbf641ce720fd14d4dd55ac', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count", iconName: "plus", svgClassName: "h-[14px] w-[12.25px]" })))), (_a = this.childrenAges) === null || _a === void 0 ? void 0 :
            _a.map((v, i) => (h("div", null, h("ir-select", { addDummyOption: true, value: v.toString(), key: `child_${i}_age`, "data-state": this.error && v === '' ? 'error' : '', variant: "double-line", label: `Child ${i + 1} age`, onValueChange: e => {
                    const prev = [...this.childrenAges];
                    prev[i] = e.detail.toString();
                    this.childrenAges = [...prev];
                }, data: [...Array(this.childMaxAge + 1)].map((_, index) => ({
                    id: index.toString(),
                    value: index === 0 ? localizedWords.entries['Lcz_under1'] : index.toString(),
                })) }), this.error && v === '' && h("p", { class: 'm-0 p-0 text-xs text-red-500' }, localizedWords.entries.Lcz_enterchildage)))), h("ir-button", { key: '6a0063acf98f3082da0f14bc3161971abca1169e', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button", label: localizedWords.entries.Lcz_Done, "aria-label": "Confirm selection" }))));
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
            }, {
                "method": "checkAvailability",
                "name": "checkAvailability",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
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
