import { Host, h } from "@stencil/core";
export class IglBulkOperationsDrawer {
    open;
    maxDatesLength = 8;
    property_id;
    closeDrawer;
    toast;
    selectedTab = 'stop-sale';
    isLoading;
    formId = `bulk-operations-form`;
    tabs = [
        {
            id: 'stop-sale',
            label: 'Stop/Open Sale',
        },
        {
            id: 'block',
            label: 'Block Unit',
        },
        {
            id: 'rectifier',
            label: 'Rectify Availability',
        },
    ];
    handleLoadingChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.isLoading = e.detail;
    }
    handleDrawerClose(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.closeDrawer.emit();
    }
    render() {
        const formId = `${this.formId}-${this.selectedTab}`;
        return (h(Host, { key: '98175e6dd1a7fd6e80093fc490bb329edfaa7503' }, h("ir-drawer", { key: 'e2a2e812696dac385162aec389088195a4bd98bf', onDrawerHide: this.handleDrawerClose.bind(this), label: "Bulk Availability Operations", open: this.open, class: "bulk-operations__drawer" }, this.open && (h("wa-tab-group", { key: 'd4cfaa77c9f56a7e0e300090c4d117c14e505052', class: "bulk-operations__tab-group", active: this.selectedTab, activation: "manual", "onwa-tab-show": e => (this.selectedTab = e.detail.name?.toString()) }, this.tabs.map(tab => (h("wa-tab", { panel: tab.id }, tab.label))), h("wa-tab-panel", { key: '78902d22f164020c84bf8b5f789de1c44ce76e3a', name: "stop-sale" }, this.selectedTab === 'stop-sale' && (h("igl-bulk-stop-sale", { key: 'ab14c06a683c142714d3151acc61587ff5470666', onCloseDrawer: this.handleDrawerClose.bind(this), maxDatesLength: this.maxDatesLength, formId: formId, property_id: this.property_id }))), h("wa-tab-panel", { key: '535e4c63dde56b7abd2198d6b56973459402cf4e', name: "block" }, this.selectedTab === 'block' && (h("igl-bulk-block", { key: 'e4785825c440d93ce55af4b2eed084e0d1652bfe', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId, maxDatesLength: this.maxDatesLength, property_id: this.property_id }))), h("wa-tab-panel", { key: '59fa765b6ba55a1e73409b9410e0dcfee49515e0', name: "rectifier" }, this.selectedTab === 'rectifier' && h("ir-rectifier", { key: '94da602d480db3a489cb5b9287837c65b366bf3a', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId })))), h("div", { key: '3ae20aa2bc12f5239c872ab60a86b27228891b2d', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '1b8a68e9885028e179f9f65a2a94740a2c66a62b', size: "medium", variant: "neutral", appearance: "filled", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: 'd4c477a67f6ad7887f95adddd4a6155ece6c57df', loading: this.isLoading, type: "submit", form: formId, size: "medium", variant: "brand" }, "Confirm")))));
    }
    static get is() { return "igl-bulk-operations-drawer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-bulk-operations-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-bulk-operations-drawer.css"]
        };
    }
    static get properties() {
        return {
            "open": {
                "type": "boolean",
                "mutable": false,
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
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "open"
            },
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
                "reflect": false,
                "attribute": "max-dates-length",
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
                "reflect": false,
                "attribute": "property_id"
            }
        };
    }
    static get states() {
        return {
            "selectedTab": {},
            "isLoading": {}
        };
    }
    static get events() {
        return [{
                "method": "closeDrawer",
                "name": "closeDrawer",
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
                            "id": "src/components/ui/ir-toast/ir-toast.tsx::IrToast",
                            "referenceLocation": "IrToast"
                        }
                    }
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "loadingChanged",
                "method": "handleLoadingChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
