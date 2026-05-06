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
    agent;
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
        return (h("div", { key: '1e07ecaaa984ebd6450e1ac6cc422c1390488a00', class: "booking-header" }, h("div", { key: 'c52f922e309484402ce598b4a95147ccbadf5013', class: "booking-header__row" }, h("div", { key: 'ad3b27b35dafbe181cdffd9002dbca519d61d7b1', class: "booking-header__info" }, h("div", { key: 'bb054fd50896287d83196c1ec11cae29dcfcf981', class: "booking-header__title" }, h("div", { key: '1094ee77f2d2292a4ac7c2fb35741e9269320d70', class: "booking-header__label-container" }, this.hasMenu && (h(Fragment, { key: 'bc283a69cec0f3ae0b9c0dc95e82eb90af5f5f0c' }, h("wa-tooltip", { key: '93dd231423dedc67144330dc3b5fad7c41e2b9c9', for: "menu" }, "Go back"), h("ir-custom-button", { key: 'b915b9fa4b6e5527e61a8f42016b40163cb0dcb5', id: "menu", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '4704d09c020be05b9c409722448b385d6c08155c', name: "arrow-left", style: { fontSize: '1.2rem' }, label: "Go back" })))), h("wa-avatar", { key: '6403d7758588ee8fea6b27de4223d74595466ec7', shape: "circle", initials: this.initials, image: this.avatarImage, loading: "lazy" }), h("div", { key: '110ace5fd549994f758edc66a16f7d9ee3ac6b60', class: "booking-header__identity" }, h("div", { key: '15dfcb69c67f42a9edc9630435b2151a2b901936', class: 'booking-header__label' }, h("h4", { key: '1d2b28fe49f81818d6693e6c19c9dea5058233ff', class: "booking-header__label-number" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`)), h("div", { key: 'e0ccfacb00929455d7e59cb22954461edf69a37d', class: "booking-header__meta" }, h("p", { key: '22f56d14cf702861a9797fcf4fa059fc2cf4b8f8', class: "booking-header__channel-number" }, this.booking?.agent ? (h("span", null, "Agent:", ' ', h("p", { class: 'truncate p-0 m-0', style: { maxWidth: '150px', display: 'inline-flex' } }, this.agent.name, " ", this.agent.reference))) : (this.booking.origin.Label)), !this.booking.is_direct && h("p", { key: '392871c8f54df4394d0b173770400d4ec7649d85', class: "booking-header__channel-number" }, this.booking.channel_booking_nbr), h("ir-custom-button", { key: 'b70ceec7c148c0ec461c9334841a690c2ad7f6c5', link: true, onClickHandler: () => this.bookingSourceEditor.openDialog() }, "Change source"), lastManipulation && (h(Fragment, { key: '7527a77611cbd692831504bcc0d9aaea4ed15bdf' }, h("p", { key: 'f3ef0a071673cae2ec38f6c98ab2076c58f38fb1', id: `booking-${this.booking.booking_nbr}-modified`, class: "booking-header__modified" }, "Modified"), h("wa-tooltip", { key: 'fe3141967b731642242411e02c9ae0c868c15ac1', for: `booking-${this.booking.booking_nbr}-modified` }, h("div", { key: '1028e37c0d67fa26d1452789a6b87faac2a45428' }, h("p", { key: '3c2dcc7b9a6490656304a3085389b5770210e8d3', class: "m-0" }, "Modified by ", lastManipulation?.user, " at ", lastManipulation?.date, " ", lastManipulation?.hour, ":", lastManipulation?.minute, "."), h("p", { key: '77989ba2c3886b9ec4638290d7ba8f6b17ffacb2', class: "m-0" }, this.alertMessage)))))))))), h("div", { key: 'a764f89ca6fee0703b4582e298d42bc4aae2ba6e', class: "booking-header__actions" }, h("div", { key: '9682961fb1970a0faf509b1c2388e6ee23f47726' }, this.booking.allowed_actions.length > 0 && this.booking.is_editable ? (h("wa-dropdown", { "onwa-hide": e => {
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
            appearance: 'outlined', size: "small", variant: "brand", class: "booking-header__status-trigger" }, h("ir-booking-status-tag", { slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), h("span", null, "Update status")), this.booking.allowed_actions.map(option => (h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))) : (h("ir-booking-status-tag", { status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }))), isAgentMode(this.agent) && (h(Fragment, { key: 'acf4ed524efd469cf5c649854ffe7f592f3b569d' }, h("ir-custom-button", { key: 'e1378a286320c0ba9db0b08be1203f8b817f6dbf', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.cityLedgerService.syncBookingToCityLedger({
                    booking_nbr: +this.booking.booking_nbr,
                    is_force_post: true,
                });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "small", variant: "warning" }, "Force city ledger"), h("ir-custom-button", { key: 'a096e04515aec35939fa4ebf857a30ca611b6289', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.invoiceDialogRef.openModal();
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "small", variant: "brand" }, "Invoice to agent"))), h("ir-custom-button", { key: '7df879d9a35b8ef1022e6c118fbe905884969762', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "small", variant: "brand" }, "Logs"), showPms && (h("ir-custom-button", { key: '0db7e66cde6ae90cdff5f81ff86a8c8abcbdc851', class: "booking-header__stretched-btn", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "PMS")), this.hasReceipt && (h(Fragment, { key: '4c60331c01d49726c8a97d7d91a5bdf7158b5c0d' }, h("ir-custom-button", { key: '689d0fb01fce6855c63dc8707992fa2270023933', class: "booking-header__stretched-btn", id: "invoice", variant: "brand", size: "small", appearance: "outlined" }, "Billing"))), this.hasPrint && (h(Fragment, { key: '0e636caf0891d64af981e54845c94f00af0a7169' }, h("wa-tooltip", { key: '2766a19bf4bd2247d212ee5a84989b82f5f4bd12', for: "print" }, "Print booking"), h("ir-custom-button", { key: 'cd3de0e9ed8ce646ed255cb4229f9dfe9b1f9acc', id: "print", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: '650bc01d4a5e87404fe3986a7dab2b12571c938d', label: "Print", name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (h(Fragment, { key: 'd0f0385733089d626f252b0e6655bf533edb6061' }, h("wa-tooltip", { key: '21d73b2c006a47eea0b8b597294bbe59b52843f3', for: "email" }, "Email this booking to guest"), h("ir-custom-button", { key: '349eef7acc0832b66dc1fc0cff913425990673e7', id: "email", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: 'ea9edcce9505329b31445f51ae38da433804b1aa', name: "envelope", style: { fontSize: '1.2rem' }, label: "Email this booking" })))), this.hasDelete && (h(Fragment, { key: '2544004794e1b7c6d1d3e79e9818fdffd9204445' }, h("wa-tooltip", { key: '5c3f16bc3620058ac2d26a73d4d38e4b21f4ce98', for: "book-delete" }, "Delete this booking"), h("ir-custom-button", { key: '7dbfe49ae91f8f29d043c1b7612e07d0e077c475', id: "book-delete", variant: "danger", size: "small", appearance: "plain" }, h("wa-icon", { key: '20c9b31af1d3e2c2da100036cfacc3e7ef7c530b', name: "envelope", style: { fontSize: '1.2rem' }, label: "Delete this booking" })))), this.hasCloseButton && (h("ir-custom-button", { key: '0ab167caa4c0e18f6f881d550e437052f3dafae4', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: 'e43606648ae5a78cf05dcdc14abdf142fe0f00b3', name: "xmark", style: { fontSize: '1.2rem' }, label: "Go back" }))))), h("ir-dialog", { key: '272533ae486e19b37410f34162f37b5cd339a0be', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? locales.entries.Lcz_PMS_Logs : locales.entries.Lcz_EventsLog, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: '00b09592e91331904ddc50e671f1381fdac46e89', ref: el => (this.modalEl = el), label: "Alert", lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, h("p", { key: '185fc0536814d81f9cf1084a94dae7df10a32697' }, this.booking.is_direct ? 'Are you sure you want to update this booking status?' : locales.entries.Lcz_OTA_Modification_Alter), h("div", { key: '0ca4067d121f74f717bb486632202e62309b43d9', class: "ir-dialog__footer", slot: "footer" }, h("ir-custom-button", { key: '82afff35fe22a12672adf3f47048704cbecbfe79', "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel), h("ir-custom-button", { key: '796107a5abae9995817dd80f0710b0dedf102396', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "medium", variant: "brand", loading: isRequestPending('/Change_Exposed_Booking_Status') }, locales?.entries?.Lcz_Confirm))), h("ir-booking-source-editor-dialog", { key: '3f04388ab63fc37d2d039d8b1daaa45e63b58f41', booking: this.booking, ref: el => (this.bookingSourceEditor = el) }), h("ir-cl-invoice-dialog", { key: '7daafa30e8bb453b0202e9ff8a6301c373ec2789', mode: "booking", agentId: this.booking.agent?.id, bookingNbr: +this.booking.booking_nbr, startDate: this.booking.from_date, endDate: this.booking.to_date, currencyId: calendar_data.property.currency.id, ref: el => (this.invoiceDialogRef = el) })));
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
            "agent": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Agent",
                    "resolved": "{ name?: string; email?: string; property_id?: any; code?: string; id?: number; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
                    "references": {
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent"
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
