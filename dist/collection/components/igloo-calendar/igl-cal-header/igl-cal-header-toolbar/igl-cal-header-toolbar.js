import { Fragment, Host, h } from "@stencil/core";
import locales from "../../../../stores/locales.store";
/**
 * The `.topLeftCell` sticky bar of `igl-cal-header`: unassigned-units / day-use-bookings buttons,
 * date navigation, rectifier and stop/open-sale buttons, and the room-search picker. `.topLeftCell`
 * is read directly by `igloo-calendar.tsx`'s drag-bounds calculation
 * (`document.querySelector('igl-cal-header .topLeftCell')`) — do not rename it.
 */
export class IglCalHeaderToolbar {
    isVacationRental;
    showDayUseButton;
    minDate;
    roomsList = [];
    /** All toolbar-button actions, keyed the same way the existing `optionEvent` payload's `key` already is. */
    actionSelected;
    roomSelected;
    dateSelectRef;
    handleAction(key, data = '') {
        this.actionSelected.emit({ key, data });
    }
    handleDateSelect(event) {
        if (Object.keys(event.detail).length > 0) {
            this.handleAction('calendar', event.detail);
        }
    }
    handleScrollToRoom(roomId) {
        this.roomSelected.emit({ roomId });
    }
    render() {
        return (h(Host, { key: '829347c448dba5812f333cee3de3aea0c5a2e030' }, h("div", { key: '2295443293e57dbe1145d62871f7e7bfac445218', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, h("div", { key: 'a959733cf51b327c1c4258796fdc0f2ff02eee78', class: "header__fd-actions" }, h("div", { key: '04bc8c3dded2300f2b499530ca20f82a3679ccfd', class: "row justify-content-around no-gutters", style: { gap: '0' } }, !this.isVacationRental && (h(Fragment, { key: '7f91be908023bbecd0a1e463119906a05d841c9a' }, h("wa-tooltip", { key: '9f9405118e960c1ac2a9c61288f74ba558759701', trigger: "hover", for: "fd-unassigned-dates_btn" }, locales.entries.Lcz_UnassignedUnitsTooltip), h("ir-custom-button", { key: 'b9b620063fdfc4dbb4853b7032bce5cb0c170e6e', id: "fd-unassigned-dates_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showAssigned') }, h("wa-icon", { key: '5ebf1752c367aaa6f3e19719e226544d72e99dbf', style: { fontSize: '1.3rem' }, name: "list-ol", label: locales.entries.Lcz_UnassignedUnitsTooltip, "aria-label": locales.entries.Lcz_UnassignedUnitsTooltip })))), this.showDayUseButton && (h(Fragment, { key: '2cb3156bb792348ac9af5301b150ebb06934ca95' }, h("wa-tooltip", { key: 'b911487a4979b604bdf4817307aeae05447c8761', trigger: "hover", for: "fd-day-use-bookings_btn" }, 'Day use bookings'), h("ir-custom-button", { key: 'ff2bccfe97412fcd298c742a84055ba47fa0f776', id: "fd-day-use-bookings_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showDayUseBookings') }, h("wa-icon", { key: 'e1ed2ff28a6bf1611ffedca3f73a9640e05ea741', style: { fontSize: '1.3rem' }, name: "sun", label: 'Day use', "aria-label": 'Day use' })))), h("wa-tooltip", { key: 'f8e0380d8e6eb6dc978946ec877812108d070d92', trigger: "hover", for: "fd-dates-navigation_btn" }, locales.entries.Lcz_Navigate), h("ir-date-select", { key: '6d99ba321e23449da9cad3a326720c3d955c8473', minDate: this.minDate, onDateChanged: evt => this.handleDateSelect(evt), ref: el => (this.dateSelectRef = el) }, h("ir-custom-button", { key: '71194a2b0954498f845d56862394ad81cfec2d8c', slot: "trigger", id: "fd-dates-navigation_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('calendar') }, h("wa-icon", { key: 'f78b90594d4233d0706ed187eb6290c93990b38b', style: { fontSize: '1.3rem' }, name: "calendar-days", variant: "regular", label: locales.entries.Lcz_Navigate, "aria-label": locales.entries.Lcz_Navigate })), h("div", { key: '069b26cfd4aa426d7a4d4819d760b036370862f0', class: "fd-dates__actions" }, h("wa-divider", { key: '20366c09c7a5212e9c6ce13c71af40348495cca3' }), h("ir-custom-button", { key: '5d173e3e3d1a7b074d1114af13b22b2b4e847f7f', variant: "neutral", appearance: "outlined", onClickHandler: () => {
                this.handleAction('gotoToday');
                this.dateSelectRef.hide();
            } }, "Today"))), h("wa-tooltip", { key: '45cf34f1893fc3f9a8ec43401cbdb16538653742', trigger: "hover", for: "fd-rectifier" }, "Rectify or open availability"), h("ir-custom-button", { key: '50b0baf1b1ee106a6c8782507d387222f5ffcad3', id: "fd-rectifier", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('rectify') }, h("wa-icon", { key: '7d7d6751a8d781cb380ea760c663ca019dc07ca1', style: { fontSize: '1.3rem' }, name: "circle-check", variant: "regular", label: 'Rectify or open availability', "aria-label": 'Rectify or open availability' })), h(Fragment, { key: '5c610b76ef4dfc4a4aaa173aaf18929a04e9b49b' }, h("wa-tooltip", { key: '919a56098c755285a7f37f70901e6d090b5539df', trigger: "hover", for: "fd-stop-open-sale_btn" }, locales.entries.Lcz_StopOpenSale), h("ir-custom-button", { key: 'cf3df75090e409e38a50c8c7e71aeb4d04d5aed4', id: "fd-stop-open-sale_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('bulk') }, h("wa-icon", { key: '8b073d741eb9f498a65d9b6fa19d57580e90bd3e', style: { fontSize: '1.3rem' }, name: "xmarks-lines", label: locales.entries.Lcz_StopOpenSale, "aria-label": locales.entries.Lcz_StopOpenSale })))), this.roomsList.length >= 20 && (h("div", { key: 'a7b42a6fbb85ed613918028bcc73e34d1fd848a8', class: "searchContiner" }, h("ir-picker", { key: '566cd53871f82776420d1c5226a8a3cc2bc28c2a', size: "s", "onCombobox-select": e => {
                this.handleScrollToRoom(Number(e.detail.item.value));
            } }, this.roomsList.map(room => (h("ir-picker-item", { label: room.name, value: String(room.id) }, room.name))))))))));
    }
    static get is() { return "igl-cal-header-toolbar"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-cal-header-toolbar.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-cal-header-toolbar.css"]
        };
    }
    static get properties() {
        return {
            "isVacationRental": {
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
                "attribute": "is-vacation-rental"
            },
            "showDayUseButton": {
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
                "attribute": "show-day-use-button"
            },
            "minDate": {
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
                "attribute": "min-date"
            },
            "roomsList": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "RoomListItem[]",
                    "resolved": "RoomListItem[]",
                    "references": {
                        "RoomListItem": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/igloo-calendar/igl-cal-header/types.ts::RoomListItem",
                            "referenceLocation": "RoomListItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get events() {
        return [{
                "method": "actionSelected",
                "name": "actionSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "All toolbar-button actions, keyed the same way the existing `optionEvent` payload's `key` already is."
                },
                "complexType": {
                    "original": "{ key: string; data?: any }",
                    "resolved": "{ key: string; data?: any; }",
                    "references": {}
                }
            }, {
                "method": "roomSelected",
                "name": "roomSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ roomId: number }",
                    "resolved": "{ roomId: number; }",
                    "references": {}
                }
            }];
    }
}
