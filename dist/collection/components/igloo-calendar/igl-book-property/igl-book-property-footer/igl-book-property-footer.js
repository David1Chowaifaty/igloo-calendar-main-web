import { Fragment, Host, h } from "@stencil/core";
import locales from "../../../../stores/locales.store";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import calendar_data from "../../../../stores/calendar-data";
import moment from "moment";
export class IglBookPropertyFooter {
    eventType;
    disabled = true;
    page;
    isEditOrAddRoomEvent;
    dateRangeData;
    isLoading;
    buttonClicked;
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
    renderButton({ label, type, disabled, 
    // icon_name,
    isLoading, }) {
        return (h("div", { class: this.shouldRenderTwoButtons() ? ` ${this.editNext(label)}` : 'flex-fill' }, h("ir-custom-button", { size: 'medium', loading: isLoading, appearance: type === 'cancel' || type === 'back' ? 'filled' : 'accent', variant: type === 'cancel' || type === 'back' ? 'neutral' : 'brand', disabled: disabled, onClickHandler: () => {
                this.buttonClicked.emit({ key: type });
            }, class: "full-width" }, label)));
    }
    shouldRenderTwoButtons() {
        return this.isEventType('PLUS_BOOKING') || this.isEventType('ADD_ROOM') || this.isEventType('EDIT_BOOKING');
    }
    render() {
        if (this.page === 'page_one') {
            return (h(Host, null, this.isEventType('EDIT_BOOKING') ? (h(Fragment, null, this.renderButton({ type: 'cancel', label: locales.entries.Lcz_Cancel }), this.shouldRenderTwoButtons() &&
                this.renderButton({
                    type: 'next',
                    label: `${locales.entries.Lcz_Next}`,
                    disabled: isRequestPending('/Get_Exposed_Booking_Availability'),
                    icon_name: 'angles_right',
                }))) : (h(Fragment, null, this.renderButton({ type: 'cancel', label: locales.entries.Lcz_Cancel }), this.shouldRenderTwoButtons() && this.renderButton({ type: 'next', label: `${locales.entries.Lcz_Next}`, icon_name: 'angles_right' })))));
        }
        const showBookAndCheckin = calendar_data.checkin_enabled && moment(new Date(this.dateRangeData?.fromDate)).isSame(new Date(), 'day');
        return (h(Fragment, null, this.isEditOrAddRoomEvent ? (h(Fragment, null, this.renderButton({ type: 'back', icon_position: 'left', label: locales.entries.Lcz_Back, icon_name: 'angles_left' }), this.renderButton({ type: 'save', label: locales.entries.Lcz_Save, isLoading: this.isLoading === 'save' }))) : (h(Fragment, null, this.renderButton({ type: 'back', icon_position: 'left', label: locales.entries.Lcz_Back, icon_name: 'angles_left' }), this.renderButton({ type: 'book', label: locales.entries.Lcz_Book, isLoading: this.isLoading === 'book' }), showBookAndCheckin && this.renderButton({ type: 'bookAndCheckIn', label: locales.entries.Lcz_BookAndChekcIn, isLoading: this.isLoading === 'bookAndCheckIn' })))));
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "true"
            },
            "page": {
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
                "attribute": "page",
                "reflect": false
            },
            "isEditOrAddRoomEvent": {
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
                "attribute": "is-edit-or-add-room-event",
                "reflect": true
            },
            "dateRangeData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "isLoading": {
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
                "attribute": "is-loading",
                "reflect": false
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
