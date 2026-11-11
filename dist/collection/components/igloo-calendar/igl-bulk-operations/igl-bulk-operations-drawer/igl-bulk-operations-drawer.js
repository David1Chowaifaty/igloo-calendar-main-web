import { Host, h } from "@stencil/core";
import { t } from "../../../../services/locale/t";
export class IglBulkOperationsDrawer {
    open;
    maxDatesLength = 8;
    property_id;
    closeDrawer;
    toast;
    selectedTab = 'stop-sale';
    isLoading;
    formId = `bulk-operations-form`;
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
        return (h(Host, { key: '9264b30ff7ab34217b95b060d43b923c090c047b' }, h("ir-drawer", { key: 'e7599946fc502841f2ca9cb0751dd04dd32f17dc', onDrawerHide: this.handleDrawerClose.bind(this), label: t('Lcz_BulkAvailabilityOperations', { fallback: 'Bulk Availability Operations' }), open: this.open, class: "bulk-operations__drawer" }, this.open && (h("wa-tab-group", { key: '7ffbc0184d2acbe59cf680c906dddda489cabeb9', class: "bulk-operations__tab-group", active: this.selectedTab, activation: "manual", "onwa-tab-show": e => (this.selectedTab = e.detail.name?.toString()) }, h("wa-tab", { key: 'dc67ca361ac3b7488e6f2453d4b249eba080459f', panel: "stop-sale" }, t('Lcz_StopOpenSale', { fallback: 'Stop/Open Sale' })), h("wa-tab", { key: 'b70ddbda9c9e9301f9be7b17f548ef62461ac6f9', panel: "block" }, t('Lcz_BlockUnit', { fallback: 'Block Unit' })), h("wa-tab-panel", { key: '58de496eeda45738f7ce731a4f07cb3da51b2dc3', name: "stop-sale" }, this.selectedTab === 'stop-sale' && (h("igl-bulk-stop-sale", { key: '8c33cfd985dbd87ad13b92b810a0856db44d5d0f', onCloseDrawer: this.handleDrawerClose.bind(this), maxDatesLength: this.maxDatesLength, formId: formId, property_id: this.property_id }))), h("wa-tab-panel", { key: 'ae0973be6139b278b8a0eccf9c53200b6361f4c1', name: "block" }, this.selectedTab === 'block' && (h("igl-bulk-block", { key: 'be254b04de052500e70b40d9730b3bf00af9a5e2', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId, maxDatesLength: this.maxDatesLength, property_id: this.property_id }))))), h("div", { key: 'd1000503d4c9cc6d6df07ea87f6071d5fd15c3db', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'cb6e478a719134f0e95413ad14da9a51b925fd41', size: "m", variant: "neutral", appearance: "filled", "data-drawer": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '62a038a9a6612e68f6e67308ef233b8917e9ba94', loading: this.isLoading, type: "submit", form: formId, size: "m", variant: "brand" }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
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
