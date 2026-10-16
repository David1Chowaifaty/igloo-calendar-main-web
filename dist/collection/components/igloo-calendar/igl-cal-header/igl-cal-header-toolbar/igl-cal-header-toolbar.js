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
        return (h(Host, { key: '83184987bccb1ba70e918926b0f8c795f0a70d29' }, h("div", { key: 'e04f218fc16ec8e884dd447f57cadc4a3f61d6ff', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, h("div", { key: '14dcbfbed4652f4ce570bd8f19a01fbdf57b1a3c', class: "header__fd-actions" }, h("div", { key: 'f1f1375ec3adefeaddedb496b7d96079e330fbcb', class: "row justify-content-around no-gutters", style: { gap: '0' } }, !this.isVacationRental && (h(Fragment, { key: 'd2633fbc650f23f77e21205a00c03e206e45e744' }, h("wa-tooltip", { key: '137b65d78a73087b109b15c273b21bb58b13e33b', trigger: "hover", for: "fd-unassigned-dates_btn" }, locales.entries.Lcz_UnassignedUnitsTooltip), h("ir-custom-button", { key: 'f6d72e8fcfcdd79285c9af1d71c918c77b38a530', id: "fd-unassigned-dates_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showAssigned') }, h("wa-icon", { key: 'fd86e92743c5b2398cea719fca2a5aed85ac2368', style: { fontSize: '1.3rem' }, name: "list-ol", label: locales.entries.Lcz_UnassignedUnitsTooltip, "aria-label": locales.entries.Lcz_UnassignedUnitsTooltip })))), this.showDayUseButton && (h(Fragment, { key: '1fbcf4332670d0c3fb79812c1fae71f9d9cc8b40' }, h("wa-tooltip", { key: 'b15099281ea16beaa82a1e75a8b8748bd5a5deb6', trigger: "hover", for: "fd-day-use-bookings_btn" }, 'Day use bookings'), h("ir-custom-button", { key: 'b6e2f746ea7bc0ef19fff4af2e81b277c026dd7e', id: "fd-day-use-bookings_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showDayUseBookings') }, h("wa-icon", { key: '32149366b48196d13a27d18ca38bd1da825bf7d9', style: { fontSize: '1.3rem' }, name: "sun", label: 'Day use', "aria-label": 'Day use' })))), h("wa-tooltip", { key: 'eaf4a471093e7f134340ce5471576d2c5e02047a', trigger: "hover", for: "fd-dates-navigation_btn" }, locales.entries.Lcz_Navigate), h("ir-date-select", { key: '0341fad4eae2c1fc2839a4e153ea6621afa138a5', minDate: this.minDate, onDateChanged: evt => this.handleDateSelect(evt), ref: el => (this.dateSelectRef = el) }, h("ir-custom-button", { key: 'dcf2797ce4e1781dbf2fa86af86fe23aeb130c03', slot: "trigger", id: "fd-dates-navigation_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('calendar') }, h("wa-icon", { key: 'a66197592799e16c24203dcd7cc79b6426d97183', style: { fontSize: '1.3rem' }, name: "calendar-days", variant: "regular", label: locales.entries.Lcz_Navigate, "aria-label": locales.entries.Lcz_Navigate })), h("div", { key: 'c71dc74101bbbb710fc6a039e3dce0c753ed0518', class: "fd-dates__actions" }, h("wa-divider", { key: 'ab03583c217c7415cf6397dc136972ff17cda424' }), h("ir-custom-button", { key: '0dcf85ae9b48ee84d676ce4cdea6e4bf210ed07e', variant: "neutral", appearance: "outlined", onClickHandler: () => {
                this.handleAction('gotoToday');
                this.dateSelectRef.hide();
            } }, "Today"))), h("wa-tooltip", { key: 'dca62cc791ac4064308a8968595eb4a6e3ced572', trigger: "hover", for: "fd-rectifier" }, "Rectify or open availability"), h("ir-custom-button", { key: '84d2234890b6e9264741c0d91910635ab308f44a', id: "fd-rectifier", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('rectify') }, h("wa-icon", { key: 'b0c1c127cc9585c25b5bbbb215dc1151d1b2bcfd', style: { fontSize: '1.3rem' }, name: "circle-check", variant: "regular", label: 'Rectify or open availability', "aria-label": 'Rectify or open availability' })), h(Fragment, { key: '521d2f0dbf2a2a0f42c3cc319dc0134d85d0d4dc' }, h("wa-tooltip", { key: '3adf4b87fbc1e5613d4eaa6c6c7fa4b958353d68', trigger: "hover", for: "fd-stop-open-sale_btn" }, locales.entries.Lcz_StopOpenSale), h("ir-custom-button", { key: 'a44b26bc6a38a995a9d63e564cdab3d3bfc9c3b8', id: "fd-stop-open-sale_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('bulk') }, h("wa-icon", { key: '6114cd1bf5f03d430d15c28e56079e937e874539', style: { fontSize: '1.3rem' }, name: "xmarks-lines", label: locales.entries.Lcz_StopOpenSale, "aria-label": locales.entries.Lcz_StopOpenSale })))), this.roomsList.length >= 20 && (h("div", { key: '975655d2423ca61688428ad4bb7de9e86462d949', class: "searchContiner" }, h("ir-picker", { key: 'c852163c123aacc1931f8a2d7e9f2888f176c423', size: "s", "onCombobox-select": e => {
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
