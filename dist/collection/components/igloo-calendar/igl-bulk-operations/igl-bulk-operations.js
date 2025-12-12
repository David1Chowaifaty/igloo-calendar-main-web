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
        return (h("div", { key: '82b91745d520420bcecf3ea6d7da3ca77f5809e9', class: 'bulk-operations-sheet-container' }, h("div", { key: '2f8fa14dfdc5dffebdb8b18446d11485960152b9', class: "sheet-header d-flex align-items-center" }, h("ir-title", { key: '954afea90fadc44c1c69f502f73e7dc092b3d28d', ref: el => (this.titleEl = el), onCloseSideBar: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                // if (this.isLoading) {
                //   return;
                // }
                this.closeModal.emit(null);
            }, class: "px-1 mb-0",
            // label={locales.entries.Lcz_BulkStopOpenSale}
            label: 'Bulk Operations', displayContext: "sidebar" })), h("ir-tabs", { key: 'ebc17d2530a4324d7394633e4c2293aa75cb1664', ref: el => (this.tabsEl = el), class: "tabs", tabs: this.tabs, onTabChanged: e => (this.selectedTab = e.detail) }), this.selectedTab?.id === 'stop-sale' ? (h("igl-bulk-stop-sale", { maxDatesLength: this.maxDatesLength, property_id: this.property_id })) : (h("igl-bulk-block", { maxDatesLength: this.maxDatesLength, property_id: this.property_id }))));
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
