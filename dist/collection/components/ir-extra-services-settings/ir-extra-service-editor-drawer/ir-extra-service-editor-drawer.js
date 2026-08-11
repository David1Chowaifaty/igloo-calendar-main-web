import { Host, h } from "@stencil/core";
import { v4 } from "uuid";
import { ExtraServiceSection } from "../../../services/extra-services/types";
export class IrExtraServiceEditorDrawer {
    open = false;
    service;
    loading = false;
    extraServiceEditorClose;
    baseId = `extra-service-form__id-${v4()}`;
    handleDrawerClose(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!e.detail) {
            return;
        }
        this.extraServiceEditorClose.emit();
    }
    render() {
        const isAddon = this.service?.section === ExtraServiceSection.BookingEngineAddon;
        const isNewAddon = isAddon && this.service?.id === -1;
        return (h(Host, { key: 'ffec2f0f9884db61c955167c2c53b2d72c21074a', "data-testid": "extra-service-editor-drawer" }, h("ir-drawer", { key: '7b1796c4fdb0c6cdaaedde1f9a5af37085a67a57', class: "extra-service__drawer", style: { '--ir-drawer-width': '32rem' }, label: isNewAddon ? 'New Add-On' : `Edit ${this.service?.name ?? 'Extra Service'}`, open: this.open, "data-testid": "extra-service-editor-drawer-container", onDrawerHide: e => this.handleDrawerClose(e) }, this.open && (h("ir-extra-service-editor-form", { key: 'ae2ef29ff1e46d6ead9822f5751fa654cf50b4cb', onCloseDrawer: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.extraServiceEditorClose.emit();
            }, onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loading = e.detail;
            }, service: this.service, formId: this.baseId, "data-testid": "extra-service-editor-form" })), h("div", { key: 'd7483299ecbabaeda9d9f85bc4cb6883f134cb25', slot: "footer", class: "ir__drawer-footer", "data-testid": "extra-service-editor-drawer-footer" }, h("ir-custom-button", { key: 'c868130b80e0a31b34f6b86a8b6aace7d220a1b7', size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral", "data-testid": "extra-service-editor-cancel-button" }, "Cancel"), h("ir-custom-button", { key: '47a19a039bad58bee42acde6a70de63c0fc66cbd', loading: this.loading, type: "submit", form: this.baseId, size: "m", appearance: "accent", variant: "brand", "data-testid": "extra-service-editor-save-button" }, "Save")))));
    }
    static get is() { return "ir-extra-service-editor-drawer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-extra-service-editor-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-extra-service-editor-drawer.css"]
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
                "attribute": "open",
                "defaultValue": "false"
            },
            "service": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ExtraServiceDefinition",
                    "resolved": "{ name?: string; id?: number; property_id?: number; code?: string; is_active?: boolean; section?: \"accommodation\" | \"addon\"; default_price?: number; vat_mode?: \"001\" | \"000\"; allow_price_override?: boolean; day_use_config?: { block_night?: boolean; default_start_time?: string; default_end_time?: string; }; }",
                    "references": {
                        "ExtraServiceDefinition": {
                            "location": "import",
                            "path": "@/services/extra-services/types",
                            "id": "src/services/extra-services/types.ts::ExtraServiceDefinition",
                            "referenceLocation": "ExtraServiceDefinition"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "loading": {}
        };
    }
    static get events() {
        return [{
                "method": "extraServiceEditorClose",
                "name": "extraServiceEditorClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
