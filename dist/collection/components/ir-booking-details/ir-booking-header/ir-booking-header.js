import { isRequestPending } from "../../../stores/ir-interceptor.store";
import locales from "../../../stores/locales.store";
import { Fragment, h } from "@stencil/core";
import { BookingService } from "../../../services/booking-service/booking.service";
import calendar_data from "../../../stores/calendar-data";
export class IrBookingHeader {
    booking;
    hasReceipt;
    hasPrint;
    hasDelete;
    hasMenu;
    hasCloseButton;
    hasEmail = true;
    bookingStatus = null;
    currentDialogStatus;
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
    dialogRef;
    bookingService = new BookingService();
    alertMessage = `ALERT! Modifying an OTA booking will create a discrepancy between igloorooms and the source. Future guest modifications on the OTA may require manual adjustments of the booking.`;
    modalEl;
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
    render() {
        const lastManipulation = this.booking.ota_manipulations ? this.booking.ota_manipulations[this.booking.ota_manipulations.length - 1] : null;
        const showPms = calendar_data.property?.linked_pms?.findIndex(lp => lp?.is_active && lp?.bookings_integration_mode?.code === '001') !== -1;
        return (h("div", { key: 'dd53c248ae133203a0a710257d976b3266a7d128', class: "fluid-container px-1" }, h("div", { key: 'c77aaba9c541afdc408e6c302f12c35b5f9ffeb9', class: "d-flex flex-column p-0 mx-0 flex-lg-row align-items-md-center justify-content-between" }, h("div", { key: '966a74143b0d67efbe654c96e7f798c5b7c6b027', class: "m-0 p-0 mb-1 mb-lg-0 mt-md-0" }, h("div", { key: '18dfa06358e24250fd80ff642f1de2781da42f0e', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("p", { key: 'b2129d01ce3e6af15728f28a6b0dc7ddd2817872', style: { color: 'black' }, class: "font-size-large m-0 p-0" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`), h("wa-dropdown", { key: 'b956c888d6c9402d755cfcc4b31506250063261f', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": e => {
                this.bookingStatus = e.detail.item.value;
                this.modalEl.openModal();
            } }, h("ir-custom-button", { key: '632f8cec750f12134f25fd7735f5c635e98bf528', slot: "trigger",
            // onClickHandler={() => {
            //   if (!this.booking.is_direct) {
            //     this.modalEl.openModal();
            //     return;
            //   }
            //   this.updateStatus();
            // }}
            withCaret: true,
            // loading={isRequestPending('/Change_Exposed_Booking_Status')}
            appearance: 'outlined', size: "small", variant: "brand" }, h("ir-booking-status-tag", { key: '84edc1418d36e46fc11d4a5e0f32600e468b5f0f', slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), h("span", { key: '8bde56c4b732df51e2eea0e3a4b44c32edb21529' }, "Update status")), this.booking.allowed_actions.map(option => (h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))), h("p", { key: '54b0309cb68f57d593fa0ac2c5ed9d6ca5b8476a', class: "m-0 p-0" }, !this.booking.is_direct && h("span", { key: 'd030241fb18024bf6853be04ea6763bf4ded345f', class: "mr-1 m-0" }, this.booking.channel_booking_nbr))), h("div", { key: 'fc83bd200d2dccdb7aec2755e5e3d5f2e91aabd1', class: "d-flex justify-content-end align-items-center", style: { gap: '1rem', flexWrap: 'wrap' } }, h("div", { key: 'e35bee4853322962d7c9405d7756de8e4197f8da', class: "d-flex flex-column align-items-center" }, lastManipulation && (h("ir-popover", { key: '8af31e41dac2bfbecbcb720fcc9969e902a1f9ef', trigger: "hover", renderContentAsHtml: true, content: `<div><p>Modified by ${lastManipulation.user} at ${lastManipulation.date} ${lastManipulation.hour}:${lastManipulation.minute}.</p>
                <p>${this.alertMessage}</p></div>` }, h("p", { key: '64cd21585a45e607403e6397fe81c5309047962e', class: "mx-0 p-0 small text-danger", style: { marginTop: '0.25rem', marginBottom: '0' } }, h("b", { key: 'c1c8b5e049ca0be76ea6df82cde3d4bbc263b25e' }, "Modified"))))), this.booking.allowed_actions.length > 0 && this.booking.is_editable && (h("div", { key: '70292186b7fbb9f335494eaf4d37d71ad998b98c', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.25rem' } })), h("ir-custom-button", { key: 'eeadc3d0885f883049310cfde9b9ab65cba32ea9', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "Events log"), showPms && (h("ir-custom-button", { key: '4ec7c50cb3f6cc365fa8c7f318388f66358f5888', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "PMS")), this.hasReceipt && (h(Fragment, { key: '7bbf704383ad9ad7a1bded8948d703c1de7a0b05' }, h("ir-custom-button", { key: '9fe51513870b9b1a0291bc64a1b44209ddc79b43', id: "invoice", variant: "brand", size: "small", appearance: "outlined" }, "Billing"))), this.hasPrint && (h(Fragment, { key: '24facac95d14d3ea413e917fab9ed692ae89f4ba' }, h("wa-tooltip", { key: 'f745215620ce41a277fcebffcb8251994bf0b535', for: "print" }, "Print booking"), h("ir-custom-button", { key: '2b3d3f9152c73a98de40f1ff1d0c81fb688ab681', id: "print", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: '84c9cd36a72bdef3da468777b1aa00670c425690', label: "Print", name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (h(Fragment, { key: '39eae266ea748f03f5287c0ee84882fb67841d44' }, h("wa-tooltip", { key: '2cbc4ebf1c48438333734e3d085c67a6f2249095', for: "email" }, "Email this booking to guest"), h("ir-custom-button", { key: 'a76b05747e2334d632ade2701f56e8676d8fcecc', id: "email", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: 'cb7762573324ca97a8a9b5e87bb05e112eb5c5ab', name: "envelope", style: { fontSize: '1.2rem' }, label: "Email this booking" })))), this.hasDelete && (h(Fragment, { key: '52a2d6546a845918c2252b2533fa958bc8f45f9e' }, h("wa-tooltip", { key: '1ddbd25b31e4a125add63cd31ee3e2edca2976c4', for: "book-delete" }, "Delete this booking"), h("ir-custom-button", { key: 'c7fe4237137d4ee1e524412a831593785424baca', id: "book-delete", variant: "danger", size: "small", appearance: "plain" }, h("wa-icon", { key: '9a08b07975dc58e55c79d07612414620e8aa9696', name: "envelope", style: { fontSize: '1.2rem' }, label: "Delete this booking" })))), this.hasMenu && (h(Fragment, { key: 'eac9e1d443856db0651071b888d1e279d1d8d4fa' }, h("wa-tooltip", { key: '482f980b3f97984c66d124ac7238f4267f7f2e46', for: "menu" }, "Go back"), h("ir-custom-button", { key: '4447fd3e3d965ebdb427ab7ff02c7f3836d0dfc8', id: "menu", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '81f5d3455f22e82c232f3386f111efedccf40dd0', name: "list", style: { fontSize: '1.2rem' }, label: "Go back" })))), this.hasCloseButton && (h("ir-custom-button", { key: '0b265c59c39c979e297cd1e75544697eeb86277d', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '82d119bb8613912836712ac5188d858d530b6553', name: "xmark", style: { fontSize: '1.2rem' }, label: "Go back" }))))), h("ir-dialog", { key: '0504fb7e1551b86a59731ba48c6dc1ce9edb97f4', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? locales.entries.Lcz_PMS_Logs : locales.entries.Lcz_EventsLog, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: '2ebf6de6409c063e6c057b5023d6cc579b6e6ff1', ref: el => (this.modalEl = el), label: "Alert", lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, h("p", { key: '09cffcdacf05929cad6eb34e15def21cc519f5bc' }, this.booking.is_direct ? 'Are you sure you want to update this booking status?' : locales.entries.Lcz_OTA_Modification_Alter), h("div", { key: '090292bd530d234d6453bce88b1305bfeabaf4de', class: "ir-dialog__footer", slot: "footer" }, h("ir-custom-button", { key: 'ce9811838bef0ce2e02410845eee3643526f6e32', "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel), h("ir-custom-button", { key: '9eca557684978577832ad5477198dd3aeb8cef42', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "medium", variant: "brand", loading: isRequestPending('/Change_Exposed_Booking_Status') }, locales?.entries?.Lcz_Confirm)))));
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
