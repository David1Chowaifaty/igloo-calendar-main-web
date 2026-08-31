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
        return (h(Host, { key: 'ba3543661cb0a87e0cf49420656f64994ff54e0c' }, h("div", { key: '22cbb2d7e4bcc3f8869ffd7d51ee832f493f84bd', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, h("div", { key: '4927e4379f7160e044c9455454d3f11533aecbff', class: "header__fd-actions" }, h("div", { key: '0e6826a4d8f62cdb127f0db1116a56ae8a3cad9a', class: "row justify-content-around no-gutters", style: { gap: '0' } }, !this.isVacationRental && (h(Fragment, { key: '22db7bec654aeba1538f329c84c63df2760eea89' }, h("wa-tooltip", { key: '940cffa37c12637aa54033d26dc14cc2f8f329f5', trigger: "hover", for: "fd-unassigned-dates_btn" }, locales.entries.Lcz_UnassignedUnitsTooltip), h("ir-custom-button", { key: '4db57af9aa78ec95534ed11893f66b5110e607ea', id: "fd-unassigned-dates_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showAssigned') }, h("wa-icon", { key: '808276608429de56582f9f93bc30b3b7c39ffc33', style: { fontSize: '1.3rem' }, name: "list-ol", label: locales.entries.Lcz_UnassignedUnitsTooltip, "aria-label": locales.entries.Lcz_UnassignedUnitsTooltip })))), this.showDayUseButton && (h(Fragment, { key: 'ba3964646190eef25cfa5a1422fe11db2e4bad34' }, h("wa-tooltip", { key: '4f27a5477863d7ed81234b700e2d6a0c0544376e', trigger: "hover", for: "fd-day-use-bookings_btn" }, 'Day use bookings'), h("ir-custom-button", { key: 'a517d225ac58e6007ca991b36993524b1a6a909f', id: "fd-day-use-bookings_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showDayUseBookings') }, h("wa-icon", { key: '404ae052a00f224b99b17b756489e90b3d238431', style: { fontSize: '1.3rem' }, name: "sun", label: 'Day use', "aria-label": 'Day use' })))), h("wa-tooltip", { key: '2d9b1f750c9d0ab3b79d85f234fecba805298188', trigger: "hover", for: "fd-dates-navigation_btn" }, locales.entries.Lcz_Navigate), h("ir-date-select", { key: '173c6449e757aef1776a28f7258f4fa06e6dd42c', minDate: this.minDate, onDateChanged: evt => this.handleDateSelect(evt), ref: el => (this.dateSelectRef = el) }, h("ir-custom-button", { key: '5f968b5d1ca55190fb7d04fdc7071c67314ac854', slot: "trigger", id: "fd-dates-navigation_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('calendar') }, h("wa-icon", { key: '74a4f5ea65555e54299a8d93683db5e3165c53e3', style: { fontSize: '1.3rem' }, name: "calendar-days", variant: "regular", label: locales.entries.Lcz_Navigate, "aria-label": locales.entries.Lcz_Navigate })), h("div", { key: 'f512cdca09df3ef52166544db701e3302ea477a4', class: "fd-dates__actions" }, h("wa-divider", { key: '6e27244117586a142aa58401608510a7e2b292a6' }), h("ir-custom-button", { key: '666cac49720d18051933329816c4569928032a9e', variant: "neutral", appearance: "outlined", onClickHandler: () => {
                this.handleAction('gotoToday');
                this.dateSelectRef.hide();
            } }, "Today"))), h("wa-tooltip", { key: 'bdc608d6e3b10c0856653f0a6d718816ea2cbe3b', trigger: "hover", for: "fd-rectifier" }, "Rectify or open availability"), h("ir-custom-button", { key: '81261372db393ad339adab6455cb0d8be4667542', id: "fd-rectifier", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('rectify') }, h("wa-icon", { key: '93f3f578635e76496a71bbc83ef73a1d47e96b4a', style: { fontSize: '1.3rem' }, name: "circle-check", variant: "regular", label: 'Rectify or open availability', "aria-label": 'Rectify or open availability' })), h(Fragment, { key: 'ebb2e490750b76893ebf142de02c861eab2c682f' }, h("wa-tooltip", { key: '93a6acbe39a95f1452ae65ade40b769c7c55dc93', trigger: "hover", for: "fd-stop-open-sale_btn" }, locales.entries.Lcz_StopOpenSale), h("ir-custom-button", { key: 'f2ae20f01462a52346feac592bc32fcd80a45b10', id: "fd-stop-open-sale_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('bulk') }, h("wa-icon", { key: 'e5c301dd4b9547bc8f1cf93a65e3f7a752344a6f', style: { fontSize: '1.3rem' }, name: "xmarks-lines", label: locales.entries.Lcz_StopOpenSale, "aria-label": locales.entries.Lcz_StopOpenSale })))), this.roomsList.length >= 20 && (h("div", { key: 'b297f3fd29bee1bea0a21596e05880d56ee75f91', class: "searchContiner" }, h("ir-picker", { key: '900f72d0c136387536a63bc563022cea5a8aaba9', size: "s", "onCombobox-select": e => {
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
