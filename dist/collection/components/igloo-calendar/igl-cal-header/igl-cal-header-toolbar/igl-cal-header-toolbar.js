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
        return (h(Host, { key: 'bd366149bd3592056435f460a3db9e71e540ca60' }, h("div", { key: '55d1279ba85aa9df1f30e83b2e5c64a52aa355e9', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, h("div", { key: '76805a72334747b2593cde3974605a505a078f69', class: "header__fd-actions" }, h("div", { key: 'e5543dfb3bbb80369a37633075b7b5fcad4edad8', class: "row justify-content-around no-gutters", style: { gap: '0' } }, !this.isVacationRental && (h(Fragment, { key: '06e8f476bfcf7bdfe476c03692d3de5a9a30f952' }, h("wa-tooltip", { key: '1fc73428d7b3720bfc7cb63e859fd6720b87ae3d', trigger: "hover", for: "fd-unassigned-dates_btn" }, t('Lcz_UnassignedUnitsTooltip')), h("ir-custom-button", { key: 'c094e09f852f4442e73e5a9037d267c8a62db2c5', id: "fd-unassigned-dates_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showAssigned') }, h("wa-icon", { key: '91def8915dc6aa1980187a056e17c1891d1b774d', style: { fontSize: '1.3rem' }, name: "list-ol", label: t('Lcz_UnassignedUnitsTooltip'), "aria-label": t('Lcz_UnassignedUnitsTooltip') })))), this.showDayUseButton && (h(Fragment, { key: '81bddad2dc827069fbcc2080a416aa82773463d0' }, h("wa-tooltip", { key: '9e0e6079022dd6efeea81e56e38d3b99d4e1a31d', trigger: "hover", for: "fd-day-use-bookings_btn" }, t('Lcz_DayUseBookings', { fallback: 'Day Use Bookings' })), h("ir-custom-button", { key: 'e3a452fc7c192086a2d99c97dd2b114a1d6c0c8f', id: "fd-day-use-bookings_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showDayUseBookings') }, h("wa-icon", { key: '084590b86d5b2eaaebb5017fd033956b7cfdf723', style: { fontSize: '1.3rem' }, name: "sun", label: t('Lcz_DayUse', { fallback: 'Day use' }), "aria-label": t('Lcz_DayUse', { fallback: 'Day use' }) })))), h("wa-tooltip", { key: '29f87000c216c9fc08ef3eba0fc64ee2a923ca36', trigger: "hover", for: "fd-dates-navigation_btn" }, t('Lcz_Navigate')), h("ir-date-select", { key: '32df5194943a5a00ebd0ad848ac3ffb9778f16b5', minDate: this.minDate, onDateChanged: evt => this.handleDateSelect(evt), ref: el => (this.dateSelectRef = el) }, h("ir-custom-button", { key: '1009df3dc18ee4a3e54a67f891b13de3e265dd8c', slot: "trigger", id: "fd-dates-navigation_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('calendar') }, h("wa-icon", { key: 'e9277338fb1eaf0a1c2dbb2622ecef218eb5c110', style: { fontSize: '1.3rem' }, name: "calendar-days", variant: "regular", label: t('Lcz_Navigate'), "aria-label": t('Lcz_Navigate') })), h("div", { key: '9d322bb0b263e7b5c85aa56835997cdce0e65498', class: "fd-dates__actions" }, h("wa-divider", { key: '4b4f3cb26d44295b5a1376ec415fa0ec86ebb997' }), h("ir-custom-button", { key: '1fa6317e82a13c5c8f71596144c61b7739c25fc9', variant: "neutral", appearance: "outlined", onClickHandler: () => {
                this.handleAction('gotoToday');
                this.dateSelectRef.hide();
            } }, t('Lcz_Today', { fallback: 'Today' })))), h("wa-tooltip", { key: '8894a0454f14d9087b474855793bfe7ba345452c', trigger: "hover", for: "fd-rectifier" }, t('Lcz_RectifyOrOpenAvailability', { fallback: 'Rectify or open availability' })), h("ir-custom-button", { key: '0efe7bcd86a33733fcc8fda50435977dd6a08c3e', id: "fd-rectifier", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('rectify') }, h("wa-icon", { key: '42e31db2c01f61a2423f741f17f75e1a51e50c19', style: { fontSize: '1.3rem' }, name: "circle-check", variant: "regular", label: t('Lcz_RectifyOrOpenAvailability', { fallback: 'Rectify or open availability' }), "aria-label": t('Lcz_RectifyOrOpenAvailability', { fallback: 'Rectify or open availability' }) })), h(Fragment, { key: 'fd5910ef1bb77424c84db06312d6e1b34ad26728' }, h("wa-tooltip", { key: '57ebece4be3afa12ba13ca5e266f74083aaedc6a', trigger: "hover", for: "fd-stop-open-sale_btn" }, t('Lcz_StopOpenSale')), h("ir-custom-button", { key: '4b2c8f9377a63b090940bc773bf3ac0654822a4d', id: "fd-stop-open-sale_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('bulk') }, h("wa-icon", { key: 'ea981b9ffb52cf4f08ba37824180948531f8a6a1', style: { fontSize: '1.3rem' }, name: "xmarks-lines", label: t('Lcz_StopOpenSale'), "aria-label": t('Lcz_StopOpenSale') })))), this.roomsList.length >= 20 && (h("div", { key: '23a6a9c806050d6c9eac6214bcc8ee548a189385', class: "searchContiner" }, h("ir-picker", { key: 'e163cb4842d16be8970a6a74044eaf361a4eae2f', size: "s", "onCombobox-select": e => {
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
