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
        return (h(Host, { key: '2471bdae9663f54dbeec71c4f0450e02188a0541' }, h("div", { key: '6686ed3289ae07dd3e520b33d47a8631af233c36', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, h("div", { key: 'f08b96306fb3bdb8f9b5e791b0feacf22ac5adf0', class: "header__fd-actions" }, h("div", { key: '8518b16b8b2e230b59c5dad3ae166bd76d4a09ae', class: "row justify-content-around no-gutters", style: { gap: '0' } }, !this.isVacationRental && (h(Fragment, { key: '9e238d0e522734267e4082b00fa23735a74b5d18' }, h("wa-tooltip", { key: 'd7d5bff5d7af39819abdc566fdf796c0893a9f82', trigger: "hover", for: "fd-unassigned-dates_btn" }, t('Lcz_UnassignedUnitsTooltip')), h("ir-custom-button", { key: '4c90871af0ad96a21f3dde7ee0cce1248242a430', id: "fd-unassigned-dates_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showAssigned') }, h("wa-icon", { key: '2723f366d3f8b79c15fb1e732a06269de1ef59cd', style: { fontSize: '1.3rem' }, name: "list-ol", label: t('Lcz_UnassignedUnitsTooltip'), "aria-label": t('Lcz_UnassignedUnitsTooltip') })))), this.showDayUseButton && (h(Fragment, { key: '33b85afa8231a97415531fb814f79cc065c91ce8' }, h("wa-tooltip", { key: '4b31377a18d5965196a001ec27c3baef88139741', trigger: "hover", for: "fd-day-use-bookings_btn" }, t('Lcz_DayUseBookings', { fallback: 'Day Use Bookings' })), h("ir-custom-button", { key: 'be9333bd054c37c3b847ae8f3859582c2e6be94f', id: "fd-day-use-bookings_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showDayUseBookings') }, h("wa-icon", { key: 'c8de86de67af6e1ab0c7883f1fa01e860bfb3e81', style: { fontSize: '1.3rem' }, name: "sun", label: t('Lcz_DayUse', { fallback: 'Day use' }), "aria-label": t('Lcz_DayUse', { fallback: 'Day use' }) })))), h("wa-tooltip", { key: 'f3388e1eaf579c71975e093d3350dcc568e2b95f', trigger: "hover", for: "fd-dates-navigation_btn" }, t('Lcz_Navigate')), h("ir-date-select", { key: '7b03a6d85b9f71c1ec713972a290012dc30e60a3', minDate: this.minDate, onDateChanged: evt => this.handleDateSelect(evt), ref: el => (this.dateSelectRef = el) }, h("ir-custom-button", { key: 'aeb21fccf2209fee5d9e04c7b4b3252607208d96', slot: "trigger", id: "fd-dates-navigation_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('calendar') }, h("wa-icon", { key: '5c7a96f560deb9fd76578175c9afb1d1c35a1dcd', style: { fontSize: '1.3rem' }, name: "calendar-days", variant: "regular", label: t('Lcz_Navigate'), "aria-label": t('Lcz_Navigate') })), h("div", { key: 'eadb90e0a799b3932a73347f5fda27f7b3776b28', class: "fd-dates__actions" }, h("wa-divider", { key: 'c27b296da57fc766bc47892b94db3f3bfbe23d22' }), h("ir-custom-button", { key: 'e1735a72fdddf81e4570382637364126538d8314', variant: "neutral", appearance: "outlined", onClickHandler: () => {
                this.handleAction('gotoToday');
                this.dateSelectRef.hide();
            } }, t('Lcz_Today', { fallback: 'Today' })))), h("wa-tooltip", { key: 'c53edf4d8a15afb797116d3c8101287505bb02d2', trigger: "hover", for: "fd-rectifier" }, t('Lcz_RectifyOrOpenAvailability', { fallback: 'Rectify or open availability' })), h("ir-custom-button", { key: 'ba76af2ef557c06e36dd7d293f011ba4cad1a28e', id: "fd-rectifier", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('rectify') }, h("wa-icon", { key: '1620e4d02711a741b74a4ddb165f3d667940db53', style: { fontSize: '1.3rem' }, name: "circle-check", variant: "regular", label: t('Lcz_RectifyOrOpenAvailability', { fallback: 'Rectify or open availability' }), "aria-label": t('Lcz_RectifyOrOpenAvailability', { fallback: 'Rectify or open availability' }) })), h(Fragment, { key: '8fa1987f8305905d769942db49de9767f2758b27' }, h("wa-tooltip", { key: '71d774ffb076b8f18caec88265f0070a3d695da0', trigger: "hover", for: "fd-stop-open-sale_btn" }, t('Lcz_StopOpenSale')), h("ir-custom-button", { key: 'e534600f93104aa8716ae73e17762c1912f6a2c5', id: "fd-stop-open-sale_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('bulk') }, h("wa-icon", { key: '0d5ec421336afa10ef28571ab5c10c108b75616c', style: { fontSize: '1.3rem' }, name: "xmarks-lines", label: t('Lcz_StopOpenSale'), "aria-label": t('Lcz_StopOpenSale') })))), this.roomsList.length >= 20 && (h("div", { key: 'dd4d279999ea70e8e14c62af4605c231a06303ee', class: "searchContiner" }, h("ir-picker", { key: '8397cd236a095fba6d83082ef8967166b0200ff2', size: "s", "onCombobox-select": e => {
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
