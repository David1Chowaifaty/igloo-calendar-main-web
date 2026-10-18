import { Host, h } from "@stencil/core";
import { v4 } from "uuid";
import { ExtraServiceSection } from "../../../services/extra-services/types";
import { t } from "../../../services/locale/t";
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
        return (h(Host, { key: '2cab4396a3cb3b1fc4214653283fc4ba7efc05e9', "data-testid": "extra-service-editor-drawer" }, h("ir-drawer", { key: '3c77502c80f00035334344f6d95cde51fafccb30', class: "extra-service__drawer", style: { '--ir-drawer-width': '32rem' }, label: isNewAddon
                ? t('Lcz_NewAddOn', { fallback: 'New Add-On' })
                : t('Lcz_EditFieldAriaLabel', {
                    fallback: `Edit ${this.service?.name ?? 'Extra Service'}`,
                    params: [this.service?.name ?? t('Lcz_ExtraServiceFallback', { fallback: 'Extra Service' })],
                }), open: this.open, "data-testid": "extra-service-editor-drawer-container", onDrawerHide: e => this.handleDrawerClose(e) }, this.open && (h("ir-extra-service-editor-form", { key: 'e7ac3732a69a0fa0a28ffb10284c08912d036137', onCloseDrawer: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.extraServiceEditorClose.emit();
            }, onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loading = e.detail;
            }, service: this.service, formId: this.baseId, "data-testid": "extra-service-editor-form" })), h("div", { key: '30b8ea5441d6942ba0e782057f37ac2a07d1a67d', slot: "footer", class: "ir__drawer-footer", "data-testid": "extra-service-editor-drawer-footer" }, h("ir-custom-button", { key: 'df88351e83da9040cc5cd75b772bfc6db9c5d455', size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral", "data-testid": "extra-service-editor-cancel-button" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'dc0c5862b1c1daa05e819d225a8da0192ecc3f5a', loading: this.loading, type: "submit", form: this.baseId, size: "m", appearance: "accent", variant: "brand", "data-testid": "extra-service-editor-save-button" }, t('Lcz_Save', { fallback: 'Save' }))))));
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
                    "resolved": "{ code?: string; name?: string; id?: number; property_id?: number; is_active?: boolean; section?: \"accommodation\" | \"addon\"; default_price?: number; vat_mode?: \"001\" | \"000\"; allow_price_override?: boolean; day_use_config?: { block_night?: boolean; default_start_time?: string; default_end_time?: string; }; }",
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
