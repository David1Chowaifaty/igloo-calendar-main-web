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
        const showPms = calendar_data.property?.linked_pms?.findIndex(lp => lp?.is_active && lp?.booking_integration_mode?.code === '001') !== -1;
        return (h("div", { key: '1afa45edd24fbdfb566cd0090365dfaf1601db82', class: "fluid-container px-1" }, h("div", { key: '3e04578a7b35c3baf1d511b477667614c262377b', class: "d-flex flex-column p-0 mx-0 flex-lg-row align-items-md-center justify-content-between" }, h("div", { key: 'bf303c2819608ffb2eb8e9d1ca8bdfe0b718f949', class: "m-0 p-0 mb-1 mb-lg-0 mt-md-0" }, h("div", { key: '17f55277ea05201e4f178d2fda115f25f8935417', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("p", { key: 'c67e55f6c4159593b9e35ca2014dc9fc76abf280', style: { color: 'black' }, class: "font-size-large m-0 p-0" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`), h("wa-dropdown", { key: '70dce247bf3bafc6134dffff6ac99da2ff1c0139', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": e => {
                this.bookingStatus = e.detail.item.value;
                this.modalEl.openModal();
            } }, h("ir-custom-button", { key: '6e1b3fb62e9c5fef0d58662d73d22b5c148d4310', slot: "trigger",
            // onClickHandler={() => {
            //   if (!this.booking.is_direct) {
            //     this.modalEl.openModal();
            //     return;
            //   }
            //   this.updateStatus();
            // }}
            withCaret: true,
            // loading={isRequestPending('/Change_Exposed_Booking_Status')}
            appearance: 'outlined', size: "small", variant: "brand" }, h("ir-booking-status-tag", { key: 'b58a3cd9c5d041dd7ff6d36e0e256c816a093516', slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), h("span", { key: 'de28e8e0f553393bcab6d11ff63ef72c2354cc5a' }, "Update status")), this.booking.allowed_actions.map(option => (h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))), h("p", { key: '5ee4b819ce66469acf0d46544ef771d24935591f', class: "m-0 p-0" }, !this.booking.is_direct && h("span", { key: '09983a20c6f30a5c2c0b2f9e96da979a8288e2dc', class: "mr-1 m-0" }, this.booking.channel_booking_nbr))), h("div", { key: '4eb8e8dafef59d12090729c2da82e1bd18cc2191', class: "d-flex justify-content-end align-items-center", style: { gap: '1rem', flexWrap: 'wrap' } }, h("div", { key: '0f748edabba2049a6652ecd761ef36d2735401c6', class: "d-flex flex-column align-items-center" }, lastManipulation && (h("ir-popover", { key: '933a6bdb710fb1fc63452f27ce74ca48bf98554b', trigger: "hover", renderContentAsHtml: true, content: `<div><p>Modified by ${lastManipulation.user} at ${lastManipulation.date} ${lastManipulation.hour}:${lastManipulation.minute}.</p>
                <p>${this.alertMessage}</p></div>` }, h("p", { key: '2aec7edcce4af760f131b302b43a3d4d45dedb9b', class: "mx-0 p-0 small text-danger", style: { marginTop: '0.25rem', marginBottom: '0' } }, h("b", { key: 'f076e2f169d8a657efd0f81d640fe712fddb23bb' }, "Modified"))))), this.booking.allowed_actions.length > 0 && this.booking.is_editable && (h("div", { key: '4a6980b52dd29bec4bd6441e9dcbcf49d7dd920f', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.25rem' } })), h("ir-custom-button", { key: 'ee3fd31a00169734978595c42d9dadbb675e1fb5', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "Events log"), showPms && (h("ir-custom-button", { key: '007a0c988f7106b27d86f6010002bc31d6b119ab', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "PMS")), this.hasReceipt && (h(Fragment, { key: 'fc3958a295612a21c13165ba90a2687e9a440033' }, h("ir-custom-button", { key: '9957f6543096e4bf5e07efda678f18cc73b0eee8', id: "invoice", variant: "brand", size: "small", appearance: "outlined" }, "Billing"))), this.hasPrint && (h(Fragment, { key: '2bafe9d72f8421432fdb2ec3881c24f719dc9edf' }, h("wa-tooltip", { key: 'c7eb35d2a9bf6c9452553dfe9f89e7b7990bc90a', for: "print" }, "Print booking"), h("ir-custom-button", { key: 'f045c3c20286b6db8db037e2aa2ebad87833358f', id: "print", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: 'a58d8cf5826438d344ddf7b17e01b895d7703c99', label: "Print", name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (h(Fragment, { key: 'f829f15c1ce450a1d44aa854881ac13f4d15457b' }, h("wa-tooltip", { key: 'b736e4b1b451a7b9e672ead3427ebe8aada8eb54', for: "email" }, "Email this booking to guest"), h("ir-custom-button", { key: '5387f96f6b73c79526cca3b7b4c6eb340a18fe8e', id: "email", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: '02d25c617947c81a42028f3a55d1172f2ef1515b', name: "envelope", style: { fontSize: '1.2rem' }, label: "Email this booking" })))), this.hasDelete && (h(Fragment, { key: '11f9bb7ec66ab78a964e52d315ef3e558492b6c1' }, h("wa-tooltip", { key: 'e8ecb19268c6289ba7ca98e6adff3784a05406a9', for: "book-delete" }, "Delete this booking"), h("ir-custom-button", { key: '80a26322c05352d36ef375ff18b1fa7b7701bdae', id: "book-delete", variant: "danger", size: "small", appearance: "plain" }, h("wa-icon", { key: '8283e95f0fb33cb6efdec1c20a9b58ccba75accf', name: "envelope", style: { fontSize: '1.65rem' }, label: "Email this booking" })))), this.hasMenu && (h(Fragment, { key: 'dd1035d87100c161d35847219c4d4fcae8582df8' }, h("wa-tooltip", { key: '98c36279441416394fb29012813f81afb9c16ba7', for: "menu" }, "Go back"), h("ir-custom-button", { key: '41f4bebf7124aa36f2e51898b7f77f6abebd8119', id: "menu", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: 'e57737acbf3e4393e5455005e3c6da079613890b', name: "list", style: { fontSize: '1.65rem' }, label: "Go back" })))), this.hasCloseButton && (h("ir-custom-button", { key: 'fe324c712554b682e2245613e342e5f40674a49e', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '8af030dfc02a24ca7a079e09ca84c0cf70261949', name: "xmark", style: { fontSize: '1.65rem' }, label: "Go back" }))))), h("ir-dialog", { key: '14c1b1bfe99dfea342baac4d0c0d086be1c16280', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? locales.entries.Lcz_PMS_Logs : locales.entries.Lcz_EventsLog, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: 'cb6950faaa177ecfed216e887d1a9db0a0541b66', ref: el => (this.modalEl = el), label: "Alert", lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, h("p", { key: 'f655bcdbae9602a8bbec9e19d43c19c87c46ce0b' }, this.booking.is_direct ? 'Are you sure you want to update this booking status?' : locales.entries.Lcz_OTA_Modification_Alter), h("div", { key: '13ac591575f549789f54fbafd58c9647534c5502', class: "ir-dialog__footer", slot: "footer" }, h("ir-custom-button", { key: 'd36686d057228f68fd2d3b1fd8c8e13d707d3afe', "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel), h("ir-custom-button", { key: '5d96c6cbc87da4bc26e3aae9b061264eeae5799f', onClickHandler: e => {
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
