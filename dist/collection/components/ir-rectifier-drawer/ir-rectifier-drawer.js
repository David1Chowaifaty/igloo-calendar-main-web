import { Host, h } from "@stencil/core";
import { v4 } from "uuid";
import { t } from "../../services/locale/t";
export class IrRectifierDrawer {
    open;
    closeDrawer;
    isLoading;
    formId = `rectifier-form__id-${v4()}`;
    handleDrawerClose(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.closeDrawer.emit();
    }
    handleLoadingChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.isLoading = e.detail;
    }
    render() {
        return (h(Host, { key: 'b639038eaaab40929437cd18d9e3a39678d08f15' }, h("ir-drawer", { key: '3a6decaa80441495faa82a804fd4fec0c01ffa27', onDrawerHide: this.handleDrawerClose.bind(this), label: t('Lcz_RectifyExtendAvailability', { fallback: 'Rectify/Extend Availability' }), open: this.open, class: "rectifier__drawer" }, this.open && h("ir-rectifier", { key: '561813256eb8f59e8a9243d815c8348e0a767e0a', formId: this.formId, onCloseDrawer: this.handleDrawerClose.bind(this), onLoadingChanged: this.handleLoadingChange.bind(this) }), h("div", { key: '257cc606f187e108c143220b53f8d3833c4dc249', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'aae477afa82936112ab8ddc1080dd5c0a8598822', size: "m", variant: "neutral", appearance: "filled", "data-drawer": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'bac4cfb57204e44f676e94d67ef43bacd4a06d67', loading: this.isLoading, type: "submit", form: this.formId, size: "m", variant: "brand" }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
    }
    static get is() { return "ir-rectifier-drawer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-rectifier-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-rectifier-drawer.css"]
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
            }
        };
    }
    static get states() {
        return {
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
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
