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
    tabs = [
        {
            id: 'stop-sale',
            label: t('Lcz_StopOpenSale', { fallback: 'Stop/Open Sale' }),
        },
        {
            id: 'block',
            label: t('Lcz_BlockUnit', { fallback: 'Block Unit' }),
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
        return (h(Host, { key: '47139e74369d3c78fd15ce75c5abb0fe936f3510' }, h("ir-drawer", { key: '8c92b202e851c4515406e4441ea03c6e535cfb6f', onDrawerHide: this.handleDrawerClose.bind(this), label: t('Lcz_BulkAvailabilityOperations', { fallback: 'Bulk Availability Operations' }), open: this.open, class: "bulk-operations__drawer" }, this.open && (h("wa-tab-group", { key: 'b7acbf2ce36e7e1ca1eea6a7dd7c7c2bd9e0f4e7', class: "bulk-operations__tab-group", active: this.selectedTab, activation: "manual", "onwa-tab-show": e => (this.selectedTab = e.detail.name?.toString()) }, this.tabs.map(tab => (h("wa-tab", { panel: tab.id }, tab.label))), h("wa-tab-panel", { key: '5e45138a4a24febdfb770ddfd8a753ed42d7ddec', name: "stop-sale" }, this.selectedTab === 'stop-sale' && (h("igl-bulk-stop-sale", { key: '63aff298ea1e46fed1791064708a7053e9225d7f', onCloseDrawer: this.handleDrawerClose.bind(this), maxDatesLength: this.maxDatesLength, formId: formId, property_id: this.property_id }))), h("wa-tab-panel", { key: '161842f5ce21637c39fc176514f2bf076bfcecd6', name: "block" }, this.selectedTab === 'block' && (h("igl-bulk-block", { key: 'f3478dbd3437d1b34b1f3479736c02698eb67446', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId, maxDatesLength: this.maxDatesLength, property_id: this.property_id }))))), h("div", { key: '3bb5737e92733752437f4784ef9c14653a8f9393', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '9b105553a32962905bc4213b60c47e4d0c18631d', size: "m", variant: "neutral", appearance: "filled", "data-drawer": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '4828436532eb93b675547b18cc57f192fad42cef', loading: this.isLoading, type: "submit", form: formId, size: "m", variant: "brand" }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
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
