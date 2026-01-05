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
        return (h("div", { key: 'fa796ff557f433490d7c7d5b86035dd4793fbd1d', class: "fluid-container px-1" }, h("div", { key: 'b768ce2d2cfd3d05ee54bf1dc512bd420ab65879', class: "d-flex flex-column p-0 mx-0 flex-lg-row align-items-md-center justify-content-between" }, h("div", { key: '986685b96438d079a5cc7948d8df4651f4fa34d5', class: "m-0 p-0 mb-1 mb-lg-0 mt-md-0" }, h("div", { key: 'f2083802e5ce852cb1fe67e23e0967aee7f713d0', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("p", { key: '9540a716bba8d4614d8bee1d366a3c8ccef11655', style: { color: 'black' }, class: "font-size-large m-0 p-0" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`), h("wa-dropdown", { key: 'aafe05348bb97272b1669a992adab04c51ff6bbb', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": e => {
                this.bookingStatus = e.detail.item.value;
                this.modalEl.openModal();
            } }, h("ir-custom-button", { key: '15584c08a9c912d1058fe259d7a9ac69d3691b6d', slot: "trigger",
            // onClickHandler={() => {
            //   if (!this.booking.is_direct) {
            //     this.modalEl.openModal();
            //     return;
            //   }
            //   this.updateStatus();
            // }}
            withCaret: true,
            // loading={isRequestPending('/Change_Exposed_Booking_Status')}
            appearance: 'outlined', size: "small", variant: "brand" }, h("ir-booking-status-tag", { key: '78069b38b6b9ad6bac957830049d7a87f05a4636', slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), h("span", { key: '75ce07db2556b3dfee70cbf1f56800231cd3ffd4' }, "Update status")), this.booking.allowed_actions.map(option => (h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))), h("p", { key: 'f5fd0b0691179a64d476ce8545636be5558d9bac', class: "m-0 p-0" }, !this.booking.is_direct && h("span", { key: '16d2253fd6cf3e0b990f21dafd57c30965eb4329', class: "mr-1 m-0" }, this.booking.channel_booking_nbr))), h("div", { key: 'ef5845844afe926854bfcf60d69849c0f0af4b6e', class: "d-flex justify-content-end align-items-center", style: { gap: '1rem', flexWrap: 'wrap' } }, h("div", { key: '2e1af74d4298c6c8b08efd87eb2ea1412de50aaa', class: "d-flex flex-column align-items-center" }, lastManipulation && (h("ir-popover", { key: '39ecdbd8a3015dea9c44d1cd49865da585027659', trigger: "hover", renderContentAsHtml: true, content: `<div><p>Modified by ${lastManipulation.user} at ${lastManipulation.date} ${lastManipulation.hour}:${lastManipulation.minute}.</p>
                <p>${this.alertMessage}</p></div>` }, h("p", { key: 'a1132a8fc481fad580c495daf727ec6b5cb49503', class: "mx-0 p-0 small text-danger", style: { marginTop: '0.25rem', marginBottom: '0' } }, h("b", { key: '420e9fea715bc975880874f171c64bfa91b9d1bf' }, "Modified"))))), this.booking.allowed_actions.length > 0 && this.booking.is_editable && (h("div", { key: '6d37249adfbe48c8b290a35ed3bf9b3ee5ae8128', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.25rem' } })), h("ir-custom-button", { key: '5d0b7778535f8b277ce66a6a5595de9c233b1a93', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "Events log"), showPms && (h("ir-custom-button", { key: '85fb69d9d89870844b23efb272f58b971725aeac', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "PMS")), this.hasReceipt && (h(Fragment, { key: 'e10378a8b17e7bbe53899d8453da978c88e8063b' }, h("ir-custom-button", { key: '0d4590783d2ca171858c1f1ec644859dbc221b26', id: "invoice", variant: "brand", size: "small", appearance: "outlined" }, "Billing"))), this.hasPrint && (h(Fragment, { key: 'e2247e1226d05df5ef717062e9eb09c556f08dca' }, h("wa-tooltip", { key: '691950cc71b360548be15ac3dfebc71fa847ad77', for: "print" }, "Print booking"), h("ir-custom-button", { key: 'b34ff1d90ecf95eb2a01f15446eafca71e023616', id: "print", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: '2ff9278d98c08b517c51e896927013835a40bbac', label: "Print", name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (h(Fragment, { key: 'edc6237272e23d203d4a09a466e49c3653b67478' }, h("wa-tooltip", { key: '7cde50d4ef56db23efe109a71e8b9365f1678275', for: "email" }, "Email this booking to guest"), h("ir-custom-button", { key: '3f0059d256b64644e6e885152bd4eea915d08c79', id: "email", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: '07541b0c13a8b4de8054a017ab9d2f7d2b088cbd', name: "envelope", style: { fontSize: '1.2rem' }, label: "Email this booking" })))), this.hasDelete && (h(Fragment, { key: '701be852d2f4fbc2e7d09db06020696b1ef5839b' }, h("wa-tooltip", { key: 'f1e5be82f7505a18efe54519cc4bfc7ade0c16e4', for: "book-delete" }, "Delete this booking"), h("ir-custom-button", { key: '1ba13cdbc541a2d701461592e81463f1d87a68ce', id: "book-delete", variant: "danger", size: "small", appearance: "plain" }, h("wa-icon", { key: '1764b1d3ab615ec4f1bfd69426ceef35a735e9f6', name: "envelope", style: { fontSize: '1.2rem' }, label: "Delete this booking" })))), this.hasMenu && (h(Fragment, { key: '3d25a73361606c684ae800d1a46306a8ad1798d6' }, h("wa-tooltip", { key: 'aa58724135b89ee48e9953d445535f1a052c0040', for: "menu" }, "Go back"), h("ir-custom-button", { key: '3b0f5c5ed97c9b1ebac9f788476e79a0279d3d0c', id: "menu", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '9c9038cbcf7dc600bcd8edbc9f724ff8ceac7b2e', name: "list", style: { fontSize: '1.2rem' }, label: "Go back" })))), this.hasCloseButton && (h("ir-custom-button", { key: '33681efebc6f4b6ea32c03716ee5aaa022a96a94', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '5a3843ab45dd3a002b2ca61f933840c9861126aa', name: "xmark", style: { fontSize: '1.2rem' }, label: "Go back" }))))), h("ir-dialog", { key: '3949ea13ea1121384201a1697c9951818d855d95', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? locales.entries.Lcz_PMS_Logs : locales.entries.Lcz_EventsLog, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: '6818a313284b70ed44eead1b4b400e0c51f31cf7', ref: el => (this.modalEl = el), label: "Alert", lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, h("p", { key: 'bb34cc80145b292403feeed69a60c05a20a76779' }, this.booking.is_direct ? 'Are you sure you want to update this booking status?' : locales.entries.Lcz_OTA_Modification_Alter), h("div", { key: 'b1520c7637a7f34f3823f3ce205590b43367ca80', class: "ir-dialog__footer", slot: "footer" }, h("ir-custom-button", { key: '45835ac1ebcb3e5da17a1fea89d487f044c0c2f3', "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel), h("ir-custom-button", { key: '0350e0903b104185b7d4fe09c07cd67d7caeef7d', onClickHandler: e => {
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
