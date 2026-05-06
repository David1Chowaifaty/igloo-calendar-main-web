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
        return (h(Host, { key: 'cd2e5f3a60259117ad19a10152124d14d6d200ed' }, h("ir-drawer", { key: '70b1b867abffd6635d397b72d3862fc9b16f9f8b', onDrawerHide: this.handleDrawerClose.bind(this), label: "Bulk Availability Operations", open: this.open, class: "bulk-operations__drawer" }, this.open && (h("wa-tab-group", { key: '3b20f468b45e210ffe553fc2b3d5322ed0042e1f', class: "bulk-operations__tab-group", active: this.selectedTab, activation: "manual", "onwa-tab-show": e => (this.selectedTab = e.detail.name?.toString()) }, this.tabs.map(tab => (h("wa-tab", { panel: tab.id }, tab.label))), h("wa-tab-panel", { key: 'd982c48ea303babb4baf98c48397c6dab99a4eaf', name: "stop-sale" }, this.selectedTab === 'stop-sale' && (h("igl-bulk-stop-sale", { key: '2c8b4a833844689d387539c2c8815c000b5bbea0', onCloseDrawer: this.handleDrawerClose.bind(this), maxDatesLength: this.maxDatesLength, formId: formId, property_id: this.property_id }))), h("wa-tab-panel", { key: '449fe1c898dd038c629d252697714a7e1a993514', name: "block" }, this.selectedTab === 'block' && (h("igl-bulk-block", { key: 'a4bd34df6845a787be10036b04f2af4fa6571fe9', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId, maxDatesLength: this.maxDatesLength, property_id: this.property_id }))), h("wa-tab-panel", { key: '6c72de8395848c662557f1ab9aac2b22ef85b1d5', name: "rectifier" }, this.selectedTab === 'rectifier' && h("ir-rectifier", { key: '2e06a3211e20bef7bd6d1a05c6af8185592178bf', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId })))), h("div", { key: '8633bb19de41ed773c8d1d15f0227d7e8574a8a2', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '6d2b7d2f79a9f399cfbc5cac74f7d89486b33164', size: "medium", variant: "neutral", appearance: "filled", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: '71b379deba17145ee4a480f0caf49abbd7c80883', loading: this.isLoading, type: "submit", form: formId, size: "medium", variant: "brand" }, "Confirm")))));
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
                "attribute": "open",
                "reflect": true
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
                            "id": "src/components/ui/ir-toast/ir-toast.tsx::IrToast"
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
//# sourceMappingURL=igl-bulk-operations-drawer.js.map
