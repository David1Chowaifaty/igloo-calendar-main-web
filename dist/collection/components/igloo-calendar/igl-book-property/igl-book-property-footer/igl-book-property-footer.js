import { Fragment, Host, h } from "@stencil/core";
import locales from "../../../../stores/locales.store";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
export class IglBookPropertyFooter {
    constructor() {
        this.eventType = undefined;
        this.disabled = true;
    }
    isEventType(event) {
        return event === this.eventType;
    }
    editNext(label) {
        if (this.isEventType('EDIT_BOOKING')) {
            if (label === 'Cancel') {
                return 'flex-fill';
            }
            else {
                return 'd-none d-md-block  flex-fill';
            }
        }
        return 'flex-fill';
    }
    renderButton(type, label, disabled = false, icon_name) {
        return (h("div", { class: this.shouldRenderTwoButtons() ? ` ${this.editNext(label)}` : 'flex-fill' }, h("ir-button", { btn_color: type === 'cancel' ? 'secondary' : 'primary', text: label, btn_disabled: disabled, onClickHanlder: () => {
                this.buttonClicked.emit({ key: type });
            }, icon_name: icon_name, iconPostion: "right", style: { '--icon-size': '1rem' }, icon_style: { paddingBottom: '1.9px' } })));
    }
    shouldRenderTwoButtons() {
        return this.isEventType('PLUS_BOOKING') || this.isEventType('ADD_ROOM') || this.isEventType('EDIT_BOOKING');
    }
    render() {
        return (h(Host, { key: '1c1b3b203de19a641835d7d63369aa2771277672' }, h("div", { key: 'c6f63cef6e45e2cedeb7a8768fa7b16156fa8ae8', class: "d-flex justify-content-between gap-30 align-items-center" }, this.isEventType('EDIT_BOOKING') ? (h(Fragment, null, this.renderButton('cancel', locales.entries.Lcz_Cancel), this.shouldRenderTwoButtons() && this.renderButton('next', `${locales.entries.Lcz_Next}`, isRequestPending('/Get_Exposed_Booking_Availability'), 'angles_right'))) : (h(Fragment, null, this.renderButton('cancel', locales.entries.Lcz_Cancel), this.shouldRenderTwoButtons() && this.renderButton('next', `${locales.entries.Lcz_Next}`, false, 'angles_right'))))));
    }
    static get is() { return "igl-book-property-footer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-book-property-footer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-book-property-footer.css"]
        };
    }
    static get properties() {
        return {
            "eventType": {
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
                "attribute": "event-type",
                "reflect": false
            },
            "disabled": {
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
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get events() {
        return [{
                "method": "buttonClicked",
                "name": "buttonClicked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ key: TPropertyButtonsTypes }",
                    "resolved": "{ key: TPropertyButtonsTypes; }",
                    "references": {
                        "TPropertyButtonsTypes": {
                            "location": "import",
                            "path": "../../../../models/igl-book-property",
                            "id": "src/models/igl-book-property.d.ts::TPropertyButtonsTypes"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=igl-book-property-footer.js.map
