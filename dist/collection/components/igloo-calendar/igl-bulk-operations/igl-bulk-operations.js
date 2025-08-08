import { h } from "@stencil/core";
export class IglBulkOperations {
    constructor() {
        this.maxDatesLength = 8;
        this.tabs = [
            {
                id: 'stop-sale',
                label: 'Stop/Open Sale',
            },
            {
                id: 'block',
                label: 'Block Unit',
            },
        ];
    }
    componentDidLoad() {
        var _a, _b, _c;
        this.tabsEl.style.setProperty('--ir-tabs-top', ((_c = (_b = (_a = this.titleEl) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.height) === null || _c === void 0 ? void 0 : _c.toString()) + 'px');
    }
    render() {
        var _a;
        return (h("div", { key: '6a98550e9dbbe4c7ed1a25a43f57365551f44cf4', class: 'bulk-operations-sheet-container' }, h("div", { key: '71b99bbcc3db39e4ad4a025db464ba06be6cd92c', class: "sheet-header d-flex align-items-center" }, h("ir-title", { key: 'c1d99ad2b3a3264a49869e04d88009a5e0131067', ref: el => (this.titleEl = el), onCloseSideBar: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                // if (this.isLoading) {
                //   return;
                // }
                this.closeModal.emit(null);
            }, class: "px-1 mb-0",
            // label={locales.entries.Lcz_BulkStopOpenSale}
            label: 'Bulk Operations', displayContext: "sidebar" })), h("ir-tabs", { key: '86d7c2e976d6173ff2e1a49d12efcaefeb688d2f', ref: el => (this.tabsEl = el), class: "tabs", tabs: this.tabs, onTabChanged: e => (this.selectedTab = e.detail) }), ((_a = this.selectedTab) === null || _a === void 0 ? void 0 : _a.id) === 'stop-sale' ? (h("igl-bulk-stop-sale", { maxDatesLength: this.maxDatesLength, property_id: this.property_id })) : (h("igl-bulk-block", { maxDatesLength: this.maxDatesLength, property_id: this.property_id }))));
    }
    static get is() { return "igl-bulk-operations"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-bulk-operations.css", "../../../common/sheet.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-bulk-operations.css", "../../../common/sheet.css"]
        };
    }
    static get properties() {
        return {
            "maxDatesLength": {
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
                "getter": false,
                "setter": false,
                "attribute": "max-dates-length",
                "reflect": false,
                "defaultValue": "8"
            },
            "property_id": {
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
                "getter": false,
                "setter": false,
                "attribute": "property_id",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "selectedTab": {}
        };
    }
    static get events() {
        return [{
                "method": "closeModal",
                "name": "closeModal",
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
            }, {
                "method": "toast",
                "name": "toast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IrToast",
                    "resolved": "IrToast",
                    "references": {
                        "IrToast": {
                            "location": "import",
                            "path": "@/components/ui/ir-toast/ir-toast",
                            "id": "src/components/ui/ir-toast/ir-toast.tsx::IrToast"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=igl-bulk-operations.js.map
