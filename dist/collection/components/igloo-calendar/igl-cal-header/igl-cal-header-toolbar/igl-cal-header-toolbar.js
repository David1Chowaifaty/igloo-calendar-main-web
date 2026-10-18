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
        return (h(Host, { key: '02bd86903271d45043562ad321efde19c4eae237' }, h("div", { key: '4bba3e5edb2f5b6bd432cac9d01129810e75b6ef', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, h("div", { key: '4b3cc035a2b6fde481e2903e56a36ddf3658178b', class: "header__fd-actions" }, h("div", { key: '7a572a59f88319821d98651f0b8785793705972d', class: "row justify-content-around no-gutters", style: { gap: '0' } }, !this.isVacationRental && (h(Fragment, { key: '95e6490c9d74559063b76478110681d83bb350d9' }, h("wa-tooltip", { key: '545e3d1d7e477899531388a6389d7e6b57dc7d65', trigger: "hover", for: "fd-unassigned-dates_btn" }, t('Lcz_UnassignedUnitsTooltip')), h("ir-custom-button", { key: '56fffb17022fdfa560e8032fd2f6563c6f55c8f9', id: "fd-unassigned-dates_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showAssigned') }, h("wa-icon", { key: 'be05009101dcb90bfd1c6ea13df7c2fd364c9b4b', style: { fontSize: '1.3rem' }, name: "list-ol", label: t('Lcz_UnassignedUnitsTooltip'), "aria-label": t('Lcz_UnassignedUnitsTooltip') })))), this.showDayUseButton && (h(Fragment, { key: 'fa435751aeba42ee8efb6a1e153798e246de2a3b' }, h("wa-tooltip", { key: '0e334e328cf8939e667a6b2209379e8b0efb2009', trigger: "hover", for: "fd-day-use-bookings_btn" }, t('Lcz_DayUseBookings', { fallback: 'Day Use Bookings' })), h("ir-custom-button", { key: 'e48a1db6b32e1a975a76633fbe010be879d7b5b8', id: "fd-day-use-bookings_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showDayUseBookings') }, h("wa-icon", { key: '8c1c2a0b21116b69876bf678271093b4d52594b1', style: { fontSize: '1.3rem' }, name: "sun", label: t('Lcz_DayUse', { fallback: 'Day use' }), "aria-label": t('Lcz_DayUse', { fallback: 'Day use' }) })))), h("wa-tooltip", { key: '1342729283f8254858bb3fb80430a5d058063dcb', trigger: "hover", for: "fd-dates-navigation_btn" }, t('Lcz_Navigate')), h("ir-date-select", { key: '86d2d0f985980c09ae124f7d9b2796c13cd7c3c7', minDate: this.minDate, onDateChanged: evt => this.handleDateSelect(evt), ref: el => (this.dateSelectRef = el) }, h("ir-custom-button", { key: 'd30175325e320fd5b574daf9146680ddb9f968c9', slot: "trigger", id: "fd-dates-navigation_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('calendar') }, h("wa-icon", { key: '6833b31ee094c72acaec5902be2dfb5f880eda06', style: { fontSize: '1.3rem' }, name: "calendar-days", variant: "regular", label: t('Lcz_Navigate'), "aria-label": t('Lcz_Navigate') })), h("div", { key: 'b4c4a679d96d24d17c9985952103c75488286c99', class: "fd-dates__actions" }, h("wa-divider", { key: 'bf40395f6ddd096bc5ad980894bf47973b9d3e0e' }), h("ir-custom-button", { key: 'a81898cc93ec0336d30baf654f0c75d48ebaeb85', variant: "neutral", appearance: "outlined", onClickHandler: () => {
                this.handleAction('gotoToday');
                this.dateSelectRef.hide();
            } }, t('Lcz_Today', { fallback: 'Today' })))), h("wa-tooltip", { key: 'fef2648f2e13aeba87e3f7669f566c5c3385a5a3', trigger: "hover", for: "fd-rectifier" }, t('Lcz_RectifyOrOpenAvailability', { fallback: 'Rectify or open availability' })), h("ir-custom-button", { key: '3a088bf41db39b8bbe402fa66ee04c4100afe1cc', id: "fd-rectifier", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('rectify') }, h("wa-icon", { key: '97fa0113067fd05a200a857847fc7eae6ee1a0e3', style: { fontSize: '1.3rem' }, name: "circle-check", variant: "regular", label: t('Lcz_RectifyOrOpenAvailability', { fallback: 'Rectify or open availability' }), "aria-label": t('Lcz_RectifyOrOpenAvailability', { fallback: 'Rectify or open availability' }) })), h(Fragment, { key: '9dac017dea7ada63cbdc645971342fa355a3d598' }, h("wa-tooltip", { key: '415e7ad0af7b046674f0c057e0971cc09ca42749', trigger: "hover", for: "fd-stop-open-sale_btn" }, t('Lcz_StopOpenSale')), h("ir-custom-button", { key: '199f24da5a5c63a41ea854d9087b105a1cd78ff3', id: "fd-stop-open-sale_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('bulk') }, h("wa-icon", { key: 'ad5c1a3154660360cb26431f5c67f96dc70465cd', style: { fontSize: '1.3rem' }, name: "xmarks-lines", label: t('Lcz_StopOpenSale'), "aria-label": t('Lcz_StopOpenSale') })))), this.roomsList.length >= 20 && (h("div", { key: '2da901cb0ccfd60f159ec4facd13977f30de1c2d', class: "searchContiner" }, h("ir-picker", { key: 'c5f0f85c1a885830e321ec370da2e21212404c25', size: "s", "onCombobox-select": e => {
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
