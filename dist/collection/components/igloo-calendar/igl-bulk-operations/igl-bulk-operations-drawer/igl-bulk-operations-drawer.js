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
        return (h(Host, { key: '7383a2332ca45e638282acdcad68d3f6a8589182' }, h("ir-drawer", { key: '9d2ca9e223a04598b15d4ed14710d0c19621ea0c', onDrawerHide: this.handleDrawerClose.bind(this), label: t('Lcz_BulkAvailabilityOperations', { fallback: 'Bulk Availability Operations' }), open: this.open, class: "bulk-operations__drawer" }, this.open && (h("wa-tab-group", { key: 'eab47e4d2c81eb438886df87773b4c3ce1b7e01d', class: "bulk-operations__tab-group", active: this.selectedTab, activation: "manual", "onwa-tab-show": e => (this.selectedTab = e.detail.name?.toString()) }, h("wa-tab", { key: '55c497571b7d06b7c70ef3d47449c9149339f299', panel: "stop-sale" }, t('Lcz_StopOpenSale', { fallback: 'Stop/Open Sale' })), h("wa-tab", { key: '1d10ed960e903ea23f8f0121aba935a7e66f6311', panel: "block" }, t('Lcz_BlockUnit', { fallback: 'Block Unit' })), h("wa-tab-panel", { key: '852721701bc52210f14627acf50b7e75355ea695', name: "stop-sale" }, this.selectedTab === 'stop-sale' && (h("igl-bulk-stop-sale", { key: '8cf26620b1d5d70358b7eb0197705f1baf6be2d4', onCloseDrawer: this.handleDrawerClose.bind(this), maxDatesLength: this.maxDatesLength, formId: formId, property_id: this.property_id }))), h("wa-tab-panel", { key: 'f62e440953b8805df7e552158643f3ec1a78b25c', name: "block" }, this.selectedTab === 'block' && (h("igl-bulk-block", { key: 'bfdbdf055662353a88418f9477cafd32ccaeef61', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId, maxDatesLength: this.maxDatesLength, property_id: this.property_id }))))), h("div", { key: '60c58bfc18002cf74c965dabca4390fe51cc731d', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '191fb760c8d309eeac17e866ac24f3a4a196ffb0', size: "m", variant: "neutral", appearance: "filled", "data-drawer": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '2da208e89b3882ee4756b7ad7d3f063d86ee581e', loading: this.isLoading, type: "submit", form: formId, size: "m", variant: "brand" }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
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
