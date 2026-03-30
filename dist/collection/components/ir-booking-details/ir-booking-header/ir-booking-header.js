import { isRequestPending } from "../../../stores/ir-interceptor.store";
import locales from "../../../stores/locales.store";
import { Fragment, h } from "@stencil/core";
import { BookingService } from "../../../services/booking-service/booking.service";
import calendar_data from "../../../stores/calendar-data";
import { isAgentMode } from "../functions";
import { CityLedgerService } from "../../../services/city-ledger/index";
export class IrBookingHeader {
    dialogRef;
    invoiceDialogRef;
    bookingService = new BookingService();
    cityLedgerService = new CityLedgerService();
    alertMessage = `ALERT! Modifying an OTA booking will create a discrepancy between igloorooms and the source. Future guest modifications on the OTA may require manual adjustments of the booking.`;
    modalEl;
    bookingSourceEditor;
    bookingStatus = null;
    currentDialogStatus;
    booking;
    hasReceipt;
    hasPrint;
    hasDelete;
    hasMenu;
    hasCloseButton;
    hasEmail = true;
    toast;
    closeSidebar;
    resetBookingEvt;
    openSidebar;
    // private confirmationBG = {
    //   '001': 'bg-ir-orange',
    //   '002': 'bg-ir-green',
    //   '003': 'bg-ir-red',
    //   '004': 'bg-ir-red',
    // };
    handleSelectChange(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const target = e.target;
        this.bookingStatus = target.selectedValue;
    }
    async updateStatus() {
        if (!this.bookingStatus || this.bookingStatus === '-1') {
            this.toast.emit({
                type: 'error',
                description: '',
                title: locales.entries.Lcz_SelectStatus,
                position: 'top-right',
            });
            return;
        }
        try {
            await this.bookingService.changeExposedBookingStatus({
                book_nbr: this.booking.booking_nbr,
                status: this.bookingStatus,
            });
            this.toast.emit({
                type: 'success',
                description: '',
                title: locales.entries.Lcz_StatusUpdatedSuccessfully,
                position: 'top-right',
            });
            this.bookingStatus = null;
            this.modalEl.closeModal();
            this.resetBookingEvt.emit(null);
        }
        catch (error) {
            console.log(error);
        }
    }
    openDialog(e) {
        const { type } = e;
        this.currentDialogStatus = type;
        this.dialogRef.openModal();
    }
    renderDialogBody() {
        switch (this.currentDialogStatus) {
            case 'pms':
                return h("ir-pms-logs", { bookingNumber: this.booking.booking_nbr });
            case 'events-log':
                return h("ir-events-log", { booking: this.booking, bookingNumber: this.booking.booking_nbr });
        }
    }
    get initials() {
        const { agent } = this.booking;
        if (agent) {
            let c = agent.name.split(' ');
            if (c.length > 1) {
                return c[0][0] + c[1][0];
            }
            return c[0][0] + c[0][1];
        }
        return null;
    }
    get avatarImage() {
        if (this.booking?.agent) {
            return null;
        }
        return this.booking.origin.Icon;
    }
    render() {
        const lastManipulation = this.booking.ota_manipulations ? this.booking.ota_manipulations[this.booking.ota_manipulations.length - 1] : null;
        const showPms = (calendar_data.property?.linked_pms || [])?.findIndex(lp => lp?.is_active && lp?.bookings_integration_mode?.code === '001') !== -1;
        return (h("div", { key: '15732e29400251bc3e881330707535a57d4566b2', class: "booking-header" }, h("div", { key: 'f3e886c8986c8c932d20962c49dff0a526e2c017', class: "booking-header__row" }, h("div", { key: '5b46ec235438a6cc033fd02e5ecbd7cb8b9bd27e', class: "booking-header__info" }, h("div", { key: '1f9c3aab7cbeacac00a0a7f43c9fa8bfcfd3ad93', class: "booking-header__title" }, h("div", { key: '9f471c3d6e5b52ae06cfbf6c0f16c8f493b9e550', class: "booking-header__label-container" }, this.hasMenu && (h(Fragment, { key: '9f8d40859e9fcd4e563b0398001a4de91ccbe39f' }, h("wa-tooltip", { key: 'a6b1ee3f0ac2e7d2879425d00d5212c206eca39f', for: "menu" }, "Go back"), h("ir-custom-button", { key: 'c8c37a4d4694a8c75d1216ece585fe841e8a6142', id: "menu", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '28c4ea8c1bdad5b1cbc8c7645b6f7eec7737ae1e', name: "arrow-left", style: { fontSize: '1.2rem' }, label: "Go back" })))), h("wa-avatar", { key: '76a512f94485a6ec21ee57657630a7b7f7ebd5c3', shape: "circle", initials: this.initials, image: this.avatarImage, loading: "lazy" }), h("div", { key: 'c5489f3608b187f44265c57ce180f695598cd235', class: "booking-header__identity" }, h("div", { key: '7d15aa474cc4bdab018037ca4fd7a64224443d48', class: 'booking-header__label' }, h("h4", { key: 'dd0791673f994a3b658833c95c01df4392fc795f', class: "booking-header__label-number" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`)), h("div", { key: '6ed440a1ecfa4247491f5e86eebd8a2fb1471225', class: "booking-header__meta" }, h("p", { key: '510a64bff138f471192b4fcabad9b20fedcc09a5', class: "booking-header__channel-number" }, this.booking?.agent ? (h("span", null, "Agent:", ' ', h("p", { class: 'truncate p-0 m-0', style: { maxWidth: '100px', display: 'inline-flex' } }, this.booking.agent.name))) : (this.booking.origin.Label)), !this.booking.is_direct && h("p", { key: '8aec4f74df79db0558f02a2722c10fbc8288929b', class: "booking-header__channel-number" }, this.booking.channel_booking_nbr), h("ir-custom-button", { key: '1c5e6f4b0b7f9d9bb591b894c479d9496cd5bd07', link: true, onClickHandler: () => this.bookingSourceEditor.openDialog() }, "Change source"), lastManipulation && (h(Fragment, { key: 'f85c058d76825f47076b1ea22e1dda6dd9cbba8d' }, h("p", { key: '4f9bfc0598d993b75f47dd9eaa7f801cfbdcdb0e', id: `booking-${this.booking.booking_nbr}-modified`, class: "booking-header__modified" }, "Modified"), h("wa-tooltip", { key: '13541309b6968a313682becfd2d0e7bd3069f60d', for: `booking-${this.booking.booking_nbr}-modified` }, h("div", { key: 'b0ae7ab57adfd18e1a1213382265c107249c8d03' }, h("p", { key: '62c00da3d30bec24f526df47b166cd8edd1899f6', class: "m-0" }, "Modified by ", lastManipulation?.user, " at ", lastManipulation?.date, " ", lastManipulation?.hour, ":", lastManipulation?.minute, "."), h("p", { key: 'b32507784fbe982d721b151ce15c4defb6c7af0b', class: "m-0" }, this.alertMessage)))))))))), h("div", { key: '2795983dfe70ebb5abda3370ac691bdf4669b061', class: "booking-header__actions" }, h("div", { key: 'c8391bb4b190afc7e4851d67b58fcc47f962c353' }, this.booking.allowed_actions.length > 0 && this.booking.is_editable ? (h("wa-dropdown", { "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": e => {
                this.bookingStatus = e.detail.item.value;
                this.modalEl.openModal();
            } }, h("wa-button", { slot: "trigger",
            // onClickHandler={() => {
            //   if (!this.booking.is_direct) {
            //     this.modalEl.openModal();
            //     return;
            //   }
            //   this.updateStatus();
            // }}
            withCaret: true,
            // loading={isRequestPending('/Change_Exposed_Booking_Status')}
            appearance: 'outlined', size: "small", variant: "brand", class: "booking-header__status-trigger" }, h("ir-booking-status-tag", { slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), h("span", null, "Update status")), this.booking.allowed_actions.map(option => (h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))) : (h("ir-booking-status-tag", { status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }))), isAgentMode(this.booking) && (h(Fragment, { key: '53ca9f1505e05bef3bb0e2ebdcde57cd7769975c' }, h("ir-custom-button", { key: 'fee73a93152939231026fc1d395c7a66ef9558b0', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.cityLedgerService.syncBookingToCityLedger({
                    booking_nbr: +this.booking.booking_nbr,
                    is_force_post: true,
                });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "small", variant: "warning" }, "Force city ledger"), h("ir-custom-button", { key: '1eab5a8feeb6e10edeafa6cdd26019c9b721b658', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.invoiceDialogRef.openModal();
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "small", variant: "brand" }, "Invoice to agent"))), h("ir-custom-button", { key: '394ef1c285420822bb71c4a5489d94c6c98ceb8a', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "small", variant: "brand" }, "Logs"), showPms && (h("ir-custom-button", { key: '23feda2b85585e387c438e410f160a019abdda64', class: "booking-header__stretched-btn", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "PMS")), this.hasReceipt && (h(Fragment, { key: '39472a3321b8c94c4a9ffa1f8655c5ac43366feb' }, h("ir-custom-button", { key: '945bb2098487c27a5a7a3aaaf2d5c61e2ac0aa09', class: "booking-header__stretched-btn", id: "invoice", variant: "brand", size: "small", appearance: "outlined" }, "Billing"))), this.hasPrint && (h(Fragment, { key: '7deb81d28197a62601e9a9b45f14a11fd5c8f7f4' }, h("wa-tooltip", { key: 'ee7832585d00875cdb4efe6dff0d004283bcb8aa', for: "print" }, "Print booking"), h("ir-custom-button", { key: 'b94e82bc5e898604ec6a112efb33a3c2204c2af4', id: "print", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: 'b68a17a8d99ef841d712bbb9a1eaaf95ed1d0783', label: "Print", name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (h(Fragment, { key: 'c451d1930d4b4007dc441149521031febe76a4dc' }, h("wa-tooltip", { key: 'c6d6842d377dcfbd3cc85e1e9fb6e8c21bdaf82b', for: "email" }, "Email this booking to guest"), h("ir-custom-button", { key: '15bdda32506047e1cb2e29bb1ba31a450c3e3064', id: "email", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: '2a304dd029e881ff7bc8f0d809a592086ae445d6', name: "envelope", style: { fontSize: '1.2rem' }, label: "Email this booking" })))), this.hasDelete && (h(Fragment, { key: 'e6dac23b21ec4a729f41a6a7f0d312869d367bf9' }, h("wa-tooltip", { key: '2ca38e2bc5d7ab4081beabbb82553d855c8c778e', for: "book-delete" }, "Delete this booking"), h("ir-custom-button", { key: 'aea3256716b452927fdda52c2a28ff1c938bc29e', id: "book-delete", variant: "danger", size: "small", appearance: "plain" }, h("wa-icon", { key: '280bb9184ab56341076e3579a0a5eb043ce74765', name: "envelope", style: { fontSize: '1.2rem' }, label: "Delete this booking" })))), this.hasCloseButton && (h("ir-custom-button", { key: '1f1c90fcc91342ef2dbd9576387936a60cb310dd', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: 'cd882eb326625b2866851cece1f99a8f073634bb', name: "xmark", style: { fontSize: '1.2rem' }, label: "Go back" }))))), h("ir-dialog", { key: 'bcc5d60ba164f2c79af89a4b72b6a66c52799c5c', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? locales.entries.Lcz_PMS_Logs : locales.entries.Lcz_EventsLog, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: '4ce4e5b4c2291d5f91e250e7fb628ed42edd24ee', ref: el => (this.modalEl = el), label: "Alert", lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, h("p", { key: '4b8a0f7a40fed25df131d566624eeb58b2eb1e62' }, this.booking.is_direct ? 'Are you sure you want to update this booking status?' : locales.entries.Lcz_OTA_Modification_Alter), h("div", { key: '3523017acb7dd4153156d0f59ccb4e5dc7b0a6d2', class: "ir-dialog__footer", slot: "footer" }, h("ir-custom-button", { key: '2a83119c63c23afc2be338ccc63a89f5df34b4d9', "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel), h("ir-custom-button", { key: '28f38f5cf71790e5ff73a4c48096cbfeb878eefb', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "medium", variant: "brand", loading: isRequestPending('/Change_Exposed_Booking_Status') }, locales?.entries?.Lcz_Confirm))), h("ir-booking-source-editor-dialog", { key: 'ee453d3e883d72c971de2f15949ae67217a127ee', booking: this.booking, ref: el => (this.bookingSourceEditor = el) }), h("ir-cl-invoice-dialog", { key: '09e4ccd95da37e749d5b9a61f75ec47533b8c66e', mode: "booking", agentId: this.booking.agent?.id, bookingNbr: +this.booking.booking_nbr, startDate: this.booking.from_date, endDate: this.booking.to_date, currencyId: calendar_data.property.currency.id, ref: el => (this.invoiceDialogRef = el) })));
    }
    static get is() { return "ir-booking-header"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-header.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-header.css"]
        };
    }
    static get properties() {
        return {
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
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
                "setter": false
            },
            "hasReceipt": {
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
                "attribute": "has-receipt",
                "reflect": false
            },
            "hasPrint": {
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
                "attribute": "has-print",
                "reflect": false
            },
            "hasDelete": {
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
                "attribute": "has-delete",
                "reflect": false
            },
            "hasMenu": {
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
                "attribute": "has-menu",
                "reflect": false
            },
            "hasCloseButton": {
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
                "attribute": "has-close-button",
                "reflect": false
            },
            "hasEmail": {
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
                "attribute": "has-email",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "bookingStatus": {},
            "currentDialogStatus": {}
        };
    }
    static get events() {
        return [{
                "method": "toast",
                "name": "toast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IToast",
                    "resolved": "ICustomToast & Partial<IToastWithButton> | IDefaultToast & Partial<IToastWithButton>",
                    "references": {
                        "IToast": {
                            "location": "import",
                            "path": "@/components/ui/ir-toast/toast",
                            "id": "src/components/ui/ir-toast/toast.ts::IToast"
                        }
                    }
                }
            }, {
                "method": "closeSidebar",
                "name": "closeSidebar",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "resetBookingEvt",
                "name": "resetBookingEvt",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "openSidebar",
                "name": "openSidebar",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "OpenSidebarEvent<any>",
                    "resolved": "{ type: BookingDetailsSidebarEvents; payload?: any; }",
                    "references": {
                        "OpenSidebarEvent": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-booking-details/types.ts::OpenSidebarEvent"
                        }
                    }
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "selectChange",
                "method": "handleSelectChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-booking-header.js.map
