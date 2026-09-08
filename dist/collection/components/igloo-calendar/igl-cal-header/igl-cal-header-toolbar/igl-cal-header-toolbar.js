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
        return (h(Host, { key: '8284fe5c396108bdc09afc5d9d80998b5dfa9b1b' }, h("div", { key: '1f3dbb97e7ff2e4b7336dca243544ee6c536a1a7', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, h("div", { key: 'a11b79d56a64e7793e26f9aa8aa985c7a4861bda', class: "header__fd-actions" }, h("div", { key: '3d1741420b82b370b7712da850f6c535c142af30', class: "row justify-content-around no-gutters", style: { gap: '0' } }, !this.isVacationRental && (h(Fragment, { key: '9b66ddfe15b349b2263c809adff2f3caa82e8aff' }, h("wa-tooltip", { key: '80fbab42bf013fa63460a43e7c0a438d218416b9', trigger: "hover", for: "fd-unassigned-dates_btn" }, t('Lcz_UnassignedUnitsTooltip')), h("ir-custom-button", { key: '832b6e41444335acc6504e4c262da832f331d66c', id: "fd-unassigned-dates_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showAssigned') }, h("wa-icon", { key: '5bd7bdc7ef77c3c1bbb9c69359b5f63fdb4bd56c', style: { fontSize: '1.3rem' }, name: "list-ol", label: t('Lcz_UnassignedUnitsTooltip'), "aria-label": t('Lcz_UnassignedUnitsTooltip') })))), this.showDayUseButton && (h(Fragment, { key: 'cbaf5c80cd78a9d8d214e1f0e403880b9ebcb416' }, h("wa-tooltip", { key: '4eb491279f283f62fde06d80f4f84dc15ca624fb', trigger: "hover", for: "fd-day-use-bookings_btn" }, 'Day use bookings'), h("ir-custom-button", { key: '9a90a7756a8ebb87c85486d9d19a54fee9c96c06', id: "fd-day-use-bookings_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showDayUseBookings') }, h("wa-icon", { key: '71d1cec60e59434fc4cdd062a8aabaea8c8f4478', style: { fontSize: '1.3rem' }, name: "sun", label: 'Day use', "aria-label": 'Day use' })))), h("wa-tooltip", { key: 'e392f35a7cf3fcd518aa5341c9ca9976434bf908', trigger: "hover", for: "fd-dates-navigation_btn" }, t('Lcz_Navigate')), h("ir-date-select", { key: '82f17179953c872e5b838c1b28540ee84b6a28b3', minDate: this.minDate, onDateChanged: evt => this.handleDateSelect(evt), ref: el => (this.dateSelectRef = el) }, h("ir-custom-button", { key: '354546284083cfac0817504156714308e13baea6', slot: "trigger", id: "fd-dates-navigation_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('calendar') }, h("wa-icon", { key: '2a1bb6e83b51a5a54eb84c6876ee8880e7c6e972', style: { fontSize: '1.3rem' }, name: "calendar-days", variant: "regular", label: t('Lcz_Navigate'), "aria-label": t('Lcz_Navigate') })), h("div", { key: '9459d5014ffb901f855f649a7835c7e7f9d98fa0', class: "fd-dates__actions" }, h("wa-divider", { key: '46161b5484928093537b4a0cc6d95ebf2c952f23' }), h("ir-custom-button", { key: 'b7eb6e39d6ee52ad26bf4808ef5076a4fe3bdf46', variant: "neutral", appearance: "outlined", onClickHandler: () => {
                this.handleAction('gotoToday');
                this.dateSelectRef.hide();
            } }, "Today"))), h("wa-tooltip", { key: '1180629bf4f761c06c36995d46a0cc3704aea6c7', trigger: "hover", for: "fd-rectifier" }, "Rectify or open availability"), h("ir-custom-button", { key: '1d4ae2a844d646008ecae47a243a7b1213507294', id: "fd-rectifier", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('rectify') }, h("wa-icon", { key: 'ca709db06be0fd1e66bedd8807ee10c34b52d9bd', style: { fontSize: '1.3rem' }, name: "circle-check", variant: "regular", label: 'Rectify or open availability', "aria-label": 'Rectify or open availability' })), h(Fragment, { key: 'eead731cd6ce69fd0b343285ccf78e6bebf281a0' }, h("wa-tooltip", { key: 'aa31337b407e936b0187b9ddb5cfd1b072a412a9', trigger: "hover", for: "fd-stop-open-sale_btn" }, t('Lcz_StopOpenSale')), h("ir-custom-button", { key: '33b4341fb671f89d406151d305cbca17e4c13c5a', id: "fd-stop-open-sale_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('bulk') }, h("wa-icon", { key: '99e08015fe2358e492e4fc908da64e9889f244e6', style: { fontSize: '1.3rem' }, name: "xmarks-lines", label: t('Lcz_StopOpenSale'), "aria-label": t('Lcz_StopOpenSale') })))), this.roomsList.length >= 20 && (h("div", { key: 'd424c8f60b05b4db38e77ea89b7a59b8177a4bd6', class: "searchContiner" }, h("ir-picker", { key: 'a877fc5e7b026c49f9e948894e0cde0ec9eda19b', size: "s", "onCombobox-select": e => {
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
