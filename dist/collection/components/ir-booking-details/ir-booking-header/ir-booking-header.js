import { isRequestPending } from "../../../stores/ir-interceptor.store";
import locales from "../../../stores/locales.store";
import { Fragment, h } from "@stencil/core";
import { BookingService } from "../../../services/booking-service/booking.service";
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
        return (h("div", { key: 'a7b6e93bb4b3f06d6a9e4f5e8d1b72f6e93b2a21', class: "fluid-container px-1" }, h("div", { key: '9ec60a75d37025a66a3f52e1a8eead291162ae17', class: "d-flex flex-column p-0 mx-0 flex-lg-row align-items-md-center justify-content-between" }, h("div", { key: 'df2026d371346d91d98a0777804e01570a8119ba', class: "m-0 p-0 mb-1 mb-lg-0 mt-md-0" }, h("p", { key: '894b17690d685395ff49d1d4273e647e31fefd7f', style: { color: 'black' }, class: "font-size-large m-0 p-0" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`), h("p", { key: 'abb10826850756a44177f90946f60700cfc3a45c', class: "m-0 p-0" }, !this.booking.is_direct && h("span", { key: 'c832620ee54e65c47b0c950f1ece5d54ffa7f3d9', class: "mr-1 m-0" }, this.booking.channel_booking_nbr))), h("div", { key: '921b94d523869b3c73553501f95883120aa2fe1a', class: "d-flex justify-content-end align-items-center", style: { gap: '1rem', flexWrap: 'wrap' } }, h("div", { key: '9c55395dd7cfc1b4e554089518ccbc79199b2793', class: "d-flex flex-column align-items-center" }, h("ir-booking-status-tag", { key: '2f57a8fea841add0b5ad3ad15b9c8ccb3749495b', status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), lastManipulation && (h("ir-popover", { key: '229712ee37171b5620be9860f2ad4856d4accfe4', trigger: "hover", renderContentAsHtml: true, content: `<div><p>Modified by ${lastManipulation.user} at ${lastManipulation.date} ${lastManipulation.hour}:${lastManipulation.minute}.</p>
                <p>${this.alertMessage}</p></div>` }, h("p", { key: 'a6ac37dd001371e2546fd9420a038fd83fb94a68', class: "mx-0 p-0 small text-danger", style: { marginTop: '0.25rem', marginBottom: '0' } }, h("b", { key: 'a7783da874325d1f435b63d707041010afefec59' }, "Modified"))))), this.booking.allowed_actions.length > 0 && this.booking.is_editable && (h("div", { key: '394b1a5dc0607859e24bf828dc1b0d8edf54b987', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.25rem' } }, h("wa-select", { key: '9119ed07411b4f33b99c2dbdda36da64f8b85ec9', onchange: e => {
                this.bookingStatus = e.target.value;
            }, style: { width: '120px' }, size: "small", placeholder: "Select...", value: this.bookingStatus ?? '' }, h("wa-option", { key: 'c8db0a1555609f055bc8d573d7eee627e3e62b55', value: "" }, "Select..."), this.booking.allowed_actions.map(option => (h("wa-option", { value: option.code }, option.description)))), h("ir-custom-button", { key: 'bbf7611cda25006298d559909da36c7de99e058c', onClickHandler: () => {
                if (!this.booking.is_direct) {
                    this.modalEl.openModal();
                    return;
                }
                this.updateStatus();
            }, loading: isRequestPending('/Change_Exposed_Booking_Status'), appearance: 'accent', size: "small", variant: "brand" }, "Update"))), h("ir-custom-button", { key: '7f05aa442316a83970698a3bd7e0a2b3f79576fd', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "Events log"), h("ir-custom-button", { key: '65863a17748b389d27b536f47786e6d2bebb8344', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "PMS"), this.hasReceipt && (h(Fragment, { key: '590f522b71300aafcf541783252575f0a601be88' }, h("ir-custom-button", { key: '7e53561dddc6d60bf6ae0533e7de12e07725e9e2', id: "invoice", variant: "brand", size: "small", appearance: "outlined" }, "Billings"))), this.hasPrint && (h(Fragment, { key: '9891c32196a5a4eb2f65c86309610dad0cd7c5da' }, h("wa-tooltip", { key: 'f65f86b9d26a601beb9e758c4db5fb4677776500', for: "print" }, "Print booking"), h("ir-custom-button", { key: '886cfaed86655db48953339360aaefb7764deda2', id: "print", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '146e902812bc3064b9cb4c9ca2354a9e6dd2f617', label: "Print", name: "print", style: { fontSize: '1.65rem' } })))), this.hasEmail && (h(Fragment, { key: '78ae9d0ce80707cabc5fb9afb358545b21b60eeb' }, h("wa-tooltip", { key: 'd3f299a04d7d610bd1e625b110bab468b1139312', for: "email" }, "Email this booking"), h("ir-custom-button", { key: 'f7cc871247e9e5c5251a1877de7f14fec234ff0f', id: "email", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: 'f64c28720325503cf2796d6005c8a82b3a9a1033', name: "envelope", style: { fontSize: '1.65rem' }, label: "Email this booking" })))), this.hasDelete && (h(Fragment, { key: 'd8d20cf6a4fa48f62af691273ce4ed22eea9fac0' }, h("wa-tooltip", { key: '5bbd5c8e56eafe9285765ef2fa4ffdd812973ea4', for: "book-delete" }, "Delete this booking"), h("ir-custom-button", { key: '80b002dcd61ec5db2fbe4c622e81acb7910e3885', id: "book-delete", variant: "danger", size: "small", appearance: "plain" }, h("wa-icon", { key: 'c90a6098b6c012453ff7e138483806a52b474f42', name: "envelope", style: { fontSize: '1.65rem' }, label: "Email this booking" })))), this.hasMenu && (h(Fragment, { key: '8f53e99e9155b3f471544af6afe3502c4540e9be' }, h("wa-tooltip", { key: '7a447433b0c5ebe4b1d85434e433164395ef6d1a', for: "menu" }, "Go back"), h("ir-custom-button", { key: 'd663ac55acda2ba7c8e794d73fdcebed3ee990cc', id: "menu", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '76efba4f7577dbe3bf044421334d331c1ef9fdf8', name: "list", style: { fontSize: '1.65rem' }, label: "Go back" })))), this.hasCloseButton && (h("ir-custom-button", { key: 'ce4699e04d48d69cf74fa9140f305e2d883673d1', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: 'ca13b98926b517eed5d55e62263af5359ebea118', name: "xmark", style: { fontSize: '1.65rem' }, label: "Go back" }))))), h("ir-dialog", { key: '4cab8ff4981b7834abf9239cd3ca498a92e9cc9e', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? locales.entries.Lcz_PMS_Logs : locales.entries.Lcz_EventsLog, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: '751d2d77eec90aa1e5c0fd993387e81e3ccb7d8b', ref: el => (this.modalEl = el), label: "Alert", lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, h("p", { key: '0ec8a330e913688809aba680d73f9c802071a295' }, locales.entries.Lcz_OTA_Modification_Alter), h("div", { key: 'cf44e091e09464981dc857341680c40db9c0c864', class: "ir-dialog__footer" }, h("ir-custom-button", { key: '3e13791dbd8ddd5df8588418dc020aa37141f2bd', "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel), h("ir-custom-button", { key: 'da28c894063e192eedc875f3f3226e4644292cf5', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "medium", variant: "danger", loading: isRequestPending('/Change_Exposed_Booking_Status') }, locales?.entries?.Lcz_Confirm)))));
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
