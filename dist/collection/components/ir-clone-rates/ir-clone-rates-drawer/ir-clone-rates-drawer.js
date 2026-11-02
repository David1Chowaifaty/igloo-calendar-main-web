import { t } from "../../../services/locale/index";
import { h } from "@stencil/core";
export class IrCloneRatesDrawer {
    open = false;
    ticket;
    p;
    language = 'en';
    propertyid;
    /** Fired when the drawer closes: Cancel, the close button, Escape, light dismiss, or a successful copy. The parent should set `open` to false. */
    cloneRatesDrawerClosed;
    handleDrawerHide = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.cloneRatesDrawerClosed.emit();
    };
    render() {
        return (h("ir-drawer", { key: '5f8ebad0c162971ceebbcf07b60275b23f0765d8', open: this.open, label: t('Lcz_CopyRatesToFutureDates'), onDrawerHide: this.handleDrawerHide }, this.open && (h("ir-clone-rates", { key: 'e327f4de40626cb9209c22d07c8447e85a35594a', mode: "drawer", ticket: this.ticket, p: this.p, language: this.language, propertyid: this.propertyid, onRatesCloned: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.cloneRatesDrawerClosed.emit();
            } })), h("div", { key: 'ca15a23ed092aa1d82fa2c96329befbc1e44c0b7', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '217b14fee481d31df0c5eaa5fc615a1cb8fbac7a', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, t('Lcz_Cancel')), h("ir-custom-button", { key: '971d1b0ecc6c5ff476898f884f9079aee72ebc72', size: "m", variant: "brand", type: "submit", form: "clone-rates-form" }, t('Lcz_Review')))));
    }
    static get is() { return "ir-clone-rates-drawer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-clone-rates-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-clone-rates-drawer.css"]
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
                "reflect": false,
                "attribute": "open",
                "defaultValue": "false"
            },
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "ticket"
            },
            "p": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "p"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "language",
                "defaultValue": "'en'"
            },
            "propertyid": {
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
                "attribute": "propertyid"
            }
        };
    }
    static get events() {
        return [{
                "method": "cloneRatesDrawerClosed",
                "name": "cloneRatesDrawerClosed",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired when the drawer closes: Cancel, the close button, Escape, light dismiss, or a successful copy. The parent should set `open` to false."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
