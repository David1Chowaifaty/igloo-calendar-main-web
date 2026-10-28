import { Fragment, Host, h } from "@stencil/core";
import { t } from "../../../../services/locale/t";
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
        return (h(Host, { key: 'fb1629a196414c0f325212152ec49fd49428bd07' }, h("div", { key: 'fffdb6f15477d5710b30aea639df3d907c0e4a85', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, h("div", { key: '21176e639fae8d42675429f53d06d8021a76b85f', class: "header__fd-actions" }, h("div", { key: 'f1f8b4c5c1033f1109857cbaa1ca076984961890', class: "row justify-content-around no-gutters", style: { gap: '0' } }, !this.isVacationRental && (h(Fragment, { key: 'f2d2c2fda7daca92c9df870edf15713250fe087b' }, h("wa-tooltip", { key: '08f0dcda1cda509abbaefc70fa249be1c68c7043', trigger: "hover", for: "fd-unassigned-dates_btn" }, t('Lcz_UnassignedUnitsTooltip')), h("ir-custom-button", { key: 'e1ab21af508adf5d1506c7f55c116a92cd75371a', id: "fd-unassigned-dates_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showAssigned') }, h("wa-icon", { key: '338c4046909d8beba5e9ee4691e3b51cafc085ed', style: { fontSize: '1.3rem' }, name: "list-ol", label: t('Lcz_UnassignedUnitsTooltip'), "aria-label": t('Lcz_UnassignedUnitsTooltip') })))), this.showDayUseButton && (h(Fragment, { key: '5fa1557e6277cb40d150aaa67a8acbca5ab33f72' }, h("wa-tooltip", { key: '3e4930dc7f816b1a4eb49c2f85c7480002d468b4', trigger: "hover", for: "fd-day-use-bookings_btn" }, t('Lcz_DayUseBookings', { fallback: 'Day Use Bookings' })), h("ir-custom-button", { key: 'd8fff40bac67dcc8f8aa518067c1fdaf5f237ad7', id: "fd-day-use-bookings_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showDayUseBookings') }, h("wa-icon", { key: '54c3d5fc65698c874471406746e44e2399aceefe', style: { fontSize: '1.3rem' }, name: "sun", label: t('Lcz_DayUse', { fallback: 'Day use' }), "aria-label": t('Lcz_DayUse', { fallback: 'Day use' }) })))), h("wa-tooltip", { key: '054e2fff28e8268bdce01156cf6ce3930da7188e', trigger: "hover", for: "fd-dates-navigation_btn" }, t('Lcz_Navigate')), h("ir-date-select", { key: 'ac1d02649c8502b393f4b7bcf2b1323bf5f0fb53', minDate: this.minDate, onDateChanged: evt => this.handleDateSelect(evt), ref: el => (this.dateSelectRef = el) }, h("ir-custom-button", { key: '273b1b91959b695b90e335615a572a553dab5bee', slot: "trigger", id: "fd-dates-navigation_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('calendar') }, h("wa-icon", { key: '1144dc35a8fde3cf8484c98d00767136c2066688', style: { fontSize: '1.3rem' }, name: "calendar-days", variant: "regular", label: t('Lcz_Navigate'), "aria-label": t('Lcz_Navigate') })), h("div", { key: '76e5cb7b01a70180297c2de333847906eb2192eb', class: "fd-dates__actions" }, h("wa-divider", { key: 'd3e07a6129a29af5160b73949fe091b33ca4fac1' }), h("ir-custom-button", { key: 'd02a85eb27dcf0d46d191881acc643b1b03be089', variant: "neutral", appearance: "outlined", onClickHandler: () => {
                this.handleAction('gotoToday');
                this.dateSelectRef.hide();
            } }, t('Lcz_Today', { fallback: 'Today' })))), h("wa-tooltip", { key: 'ce197797a32be10ac556d0cfba4f5a3353e45480', trigger: "hover", for: "fd-rectifier" }, t('Lcz_RectifyOrOpenAvailability', { fallback: 'Rectify or open availability' })), h("ir-custom-button", { key: 'c49908835c94c3293794fa851bc0490236eaf64e', id: "fd-rectifier", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('rectify') }, h("wa-icon", { key: '4ad9d466e66556825ce1f6232710b05623ded8b2', style: { fontSize: '1.3rem' }, name: "circle-check", variant: "regular", label: t('Lcz_RectifyOrOpenAvailability', { fallback: 'Rectify or open availability' }), "aria-label": t('Lcz_RectifyOrOpenAvailability', { fallback: 'Rectify or open availability' }) })), h(Fragment, { key: '8c913fbd8a5e99c46b978abbb0a01b6a7d3fbdc1' }, h("wa-tooltip", { key: '57982b60f6602f78f50040ad7f85ab6a5b19cec2', trigger: "hover", for: "fd-stop-open-sale_btn" }, t('Lcz_StopOpenSale')), h("ir-custom-button", { key: '9c3adb42e880dd8843ce27cead0d34ff612e9000', id: "fd-stop-open-sale_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('bulk') }, h("wa-icon", { key: '77dc16c303785431f659264a7f1b90c261ca9723', style: { fontSize: '1.3rem' }, name: "xmarks-lines", label: t('Lcz_StopOpenSale'), "aria-label": t('Lcz_StopOpenSale') })))), this.roomsList.length >= 20 && (h("div", { key: 'e7ec26abffcd918767fbbf40e6f23fb190031d0b', class: "searchContiner" }, h("ir-picker", { key: '1575ab6a4fe45e42e7f9a1522b73267acae3e1ef', size: "s", "onCombobox-select": e => {
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
