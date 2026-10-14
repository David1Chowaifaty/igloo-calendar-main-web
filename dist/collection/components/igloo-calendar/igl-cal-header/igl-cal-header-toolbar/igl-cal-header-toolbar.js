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
        return (h(Host, { key: '4d6cf1f78b4a150ee505c4a964b6fd92755d8eda' }, h("div", { key: 'd12a06a81ec91b42593cb89b4748add48c56338c', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, h("div", { key: 'ca6d89ab8960e936038e84c810517708cd4f60e5', class: "header__fd-actions" }, h("div", { key: '49eb61abedb3e7dfb3cbaca76104fce08965a91f', class: "row justify-content-around no-gutters", style: { gap: '0' } }, !this.isVacationRental && (h(Fragment, { key: '25b0e22c24b7af26cfc917893ae35ff418fbec1d' }, h("wa-tooltip", { key: '649aceea2f849167b2a5f9bd1b1613f1ab4aeb0e', trigger: "hover", for: "fd-unassigned-dates_btn" }, t('Lcz_UnassignedUnitsTooltip')), h("ir-custom-button", { key: '542a9ae21c9ac74969cf3d7746934df5baebf343', id: "fd-unassigned-dates_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showAssigned') }, h("wa-icon", { key: '86385ce436c8f24761e7ac476ed9da9e98b22261', style: { fontSize: '1.3rem' }, name: "list-ol", label: t('Lcz_UnassignedUnitsTooltip'), "aria-label": t('Lcz_UnassignedUnitsTooltip') })))), this.showDayUseButton && (h(Fragment, { key: 'd196bc7d6688f501c941cf3f927a6eea0f5fa6d1' }, h("wa-tooltip", { key: '46bfa427d0d712019ba3ad0e5b51865a7a9cb2c8', trigger: "hover", for: "fd-day-use-bookings_btn" }, t('Lcz_DayUseBookings', { fallback: 'Day Use Bookings' })), h("ir-custom-button", { key: '3e199c0713a0c53df34c9dfe84feb5093aa843b2', id: "fd-day-use-bookings_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showDayUseBookings') }, h("wa-icon", { key: 'c9e4caba76b5820218d02a91b67983a6e7c2023c', style: { fontSize: '1.3rem' }, name: "sun", label: t('Lcz_DayUse', { fallback: 'Day use' }), "aria-label": t('Lcz_DayUse', { fallback: 'Day use' }) })))), h("wa-tooltip", { key: '8b57926f6d1cb60ee5af197a2c25c549cf989b7d', trigger: "hover", for: "fd-dates-navigation_btn" }, t('Lcz_Navigate')), h("ir-date-select", { key: '109a0c471d5080f0c638eb6ed6306900757e33b3', minDate: this.minDate, onDateChanged: evt => this.handleDateSelect(evt), ref: el => (this.dateSelectRef = el) }, h("ir-custom-button", { key: 'db5bff5947a1ed306525d2e96f992340096d7d98', slot: "trigger", id: "fd-dates-navigation_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('calendar') }, h("wa-icon", { key: '890ccda9c147c4b9d8c16a5b893b954c8fd2fe71', style: { fontSize: '1.3rem' }, name: "calendar-days", variant: "regular", label: t('Lcz_Navigate'), "aria-label": t('Lcz_Navigate') })), h("div", { key: '7f60a6aa16ee0017cf7b90efb9772e0bd05ec1b5', class: "fd-dates__actions" }, h("wa-divider", { key: 'befd62c230d8c1a5fdd657473976f7b2ec88125f' }), h("ir-custom-button", { key: '5e627d80d95b713da4e891525bd1422a69a0e0fa', variant: "neutral", appearance: "outlined", onClickHandler: () => {
                this.handleAction('gotoToday');
                this.dateSelectRef.hide();
            } }, t('Lcz_Today', { fallback: 'Today' })))), h("wa-tooltip", { key: '9a0b93d64ce06f1d6b79b9f196be1f128653bac7', trigger: "hover", for: "fd-rectifier" }, t('Lcz_RectifyOrOpenAvailability', { fallback: 'Rectify or open availability' })), h("ir-custom-button", { key: '4eede2dc23632c2b1b6a0c6ad05deb4ad5c94090', id: "fd-rectifier", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('rectify') }, h("wa-icon", { key: 'db56c692b9a26ab5628b36c251b5568036a193e8', style: { fontSize: '1.3rem' }, name: "circle-check", variant: "regular", label: t('Lcz_RectifyOrOpenAvailability', { fallback: 'Rectify or open availability' }), "aria-label": t('Lcz_RectifyOrOpenAvailability', { fallback: 'Rectify or open availability' }) })), h(Fragment, { key: 'bc3e7cc50bbc0e4fcaab30655e64427a935fec9c' }, h("wa-tooltip", { key: 'c6d44c0a4ff44e10b075664125d39a01bc3a9c35', trigger: "hover", for: "fd-stop-open-sale_btn" }, t('Lcz_StopOpenSale')), h("ir-custom-button", { key: 'ba85b0824b1aa50c07bf9608e9933cc2061299d6', id: "fd-stop-open-sale_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('bulk') }, h("wa-icon", { key: '4e07a9158c2773a9da4a82a1c184ec21aa932687', style: { fontSize: '1.3rem' }, name: "xmarks-lines", label: t('Lcz_StopOpenSale'), "aria-label": t('Lcz_StopOpenSale') })))), this.roomsList.length >= 20 && (h("div", { key: '930a3ecdb66daa58f42292aa08c5fe36e1ec918d', class: "searchContiner" }, h("ir-picker", { key: 'bdc06035d0714667c3c2dcb2108adfadb22d075b', size: "s", "onCombobox-select": e => {
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
