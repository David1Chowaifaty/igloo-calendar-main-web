import { h } from "@stencil/core";
export class IglBulkOperations {
    maxDatesLength = 8;
    property_id;
    closeModal;
    toast;
    selectedTab;
    tabs = [
        {
            id: 'stop-sale',
            label: 'Stop/Open Sale',
        },
        {
            id: 'block',
            label: 'Block Unit',
        },
    ];
    tabsEl;
    titleEl;
    componentDidLoad() {
        this.tabsEl.style.setProperty('--ir-tabs-top', this.titleEl?.getBoundingClientRect()?.height?.toString() + 'px');
    }
    render() {
        return (h("div", { key: '70a8109ab886e0d8b576f63589fbf81d75ffc98d', class: 'bulk-operations-sheet-container' }, h("div", { key: '72ed955ac32f730f5450df1fe2f8bdd254bd0f1e', class: "sheet-header d-flex align-items-center" }, h("ir-title", { key: '906390b6fd9fdc73a5e11998bed0e61b69b85426', ref: el => (this.titleEl = el), onCloseSideBar: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                // if (this.isLoading) {
                //   return;
                // }
                this.closeModal.emit(null);
            }, class: "px-1 mb-0",
            // label={locales.entries.Lcz_BulkStopOpenSale}
            label: 'Bulk Operations', displayContext: "sidebar" })), h("ir-tabs", { key: 'a0d33aa6258bcced703e0a3e15327b4cc0cf5dc3', ref: el => (this.tabsEl = el), class: "tabs", tabs: this.tabs, onTabChanged: e => (this.selectedTab = e.detail) }), this.selectedTab?.id === 'stop-sale' ? (h("igl-bulk-stop-sale", { maxDatesLength: this.maxDatesLength, property_id: this.property_id })) : (h("igl-bulk-block", { maxDatesLength: this.maxDatesLength, property_id: this.property_id }))));
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
