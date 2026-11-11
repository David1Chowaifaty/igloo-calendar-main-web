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
        return (h(Host, { key: '5db5701b8230eaf63dc6d4c463224444027cdda3' }, h("ir-drawer", { key: '9f943ce63e16828368b29805c007a51073dee7f5', onDrawerHide: this.handleDrawerClose.bind(this), label: t('Lcz_RectifyExtendAvailability', { fallback: 'Rectify/Extend Availability' }), open: this.open, class: "rectifier__drawer" }, this.open && h("ir-rectifier", { key: '2ccb9939a1857f98cf762f8dde882b0b3e6ee7a8', formId: this.formId, onCloseDrawer: this.handleDrawerClose.bind(this), onLoadingChanged: this.handleLoadingChange.bind(this) }), h("div", { key: '7b91e76e60ce1b69be79f29f678313dcb56e8f69', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'ffe51c9432d20747df2daa1a1c1ce86aa2e6085f', size: "m", variant: "neutral", appearance: "filled", "data-drawer": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'cfbdf7f9d6432896981559cbb9132c8d2442fe77', loading: this.isLoading, type: "submit", form: this.formId, size: "m", variant: "brand" }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
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
