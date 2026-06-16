import { isRequestPending } from "../../../stores/ir-interceptor.store";
import locales from "../../../stores/locales.store";
import { Fragment, h } from "@stencil/core";
import { BookingService } from "../../../services/booking-service/booking.service";
import calendar_data from "../../../stores/calendar-data";
import { isAgentMode } from "../functions";
import { showToast } from "../../../utils/utils";
export class IrBookingHeader {
    dialogRef;
    bookingService = new BookingService();
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
    folioRows = [];
    agents = [];
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
            showToast({
                type: 'error',
                description: '',
                title: locales.entries.Lcz_SelectStatus,
            });
            return;
        }
        try {
            await this.bookingService.changeExposedBookingStatus({
                book_nbr: this.booking.booking_nbr,
                status: this.bookingStatus,
            });
            showToast({
                type: 'success',
                description: '',
                title: locales.entries.Lcz_StatusUpdatedSuccessfully,
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
    get canChangeSource() {
        return this.booking?.is_source_editable;
        // if (!this.booking.is_direct || this.booking.source?.code?.toLowerCase() === 'ghs' || !this.booking.is_editable) {
        //   return false;
        // }
        // if (this.agents.length === 0) {
        //   return false;
        // }
        // const folioRows = this.folioRows ?? [];
        // if (folioRows?.length > 0) {
        //   return folioRows.every(f => f._raw.IS_LOCKED === false);
        // }
        // return true;
    }
    render() {
        const lastManipulation = this.booking.ota_manipulations ? this.booking.ota_manipulations[this.booking.ota_manipulations.length - 1] : null;
        const showPms = (calendar_data.property?.linked_pms || [])?.findIndex(lp => lp?.is_active && lp?.bookings_integration_mode?.code === '001') !== -1;
        return (h("div", { key: '4b1ca0b85ace47ec44a6d9b3d7e38fe06269b8ab', class: "booking-header" }, h("div", { key: 'c59cb83971fc1ac315cbcc105e035f787e5d3de3', class: "booking-header__row" }, h("div", { key: '44cb8f39b2f1031b07f7c3688edf67f9349bf983', class: "booking-header__info" }, h("div", { key: 'f1d58ec62071d09fa1d4aa053a3f6da7853f9628', class: "booking-header__title" }, h("div", { key: '73b5c50973ec18081d20a2065f4c442478453167', class: "booking-header__label-container" }, this.hasMenu && (h(Fragment, { key: '0a0ca9c864df7e95105b200554fa845996316cca' }, h("wa-tooltip", { key: '79b8f1bdf6ba3ac27a71f4064f427b4b6ff67e0f', for: "menu" }, "Go back"), h("ir-custom-button", { key: 'e0e951c8306ffac026337d08144fe721b4ded70d', id: "menu", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: '2bd3a9dcadbce578b2af2b0c673c7eefcfdf9ad4', name: "arrow-left", style: { fontSize: '1.2rem' }, label: "Go back" })))), h("wa-avatar", { key: '9035fad7b639be17222189dd0e3762e3eb7f96f8', shape: "circle", class: "booking-header__avatar", initials: this.initials, image: this.avatarImage, loading: "lazy" }), h("div", { key: '4db826a19b4267aef9e7619adf12686182857e87', class: "booking-header__identity" }, h("div", { key: '89cddf46c40f218d296e6725c2f67492bd691488', class: 'booking-header__label' }, h("h4", { key: '40d0a8bfe940405ce93da2e397f8fc417ade9b40', class: "booking-header__label-number" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`)), h("div", { key: '7c8c5baeae8b716c187ddc8701c295974d2ba4f3', class: "booking-header__meta" }, !this.booking.is_direct && h("p", { key: '362b3a323627d04c5bc42648ef737046e4e0a2d0', class: "booking-header__channel-number --primary" }, this.booking.channel_booking_nbr), this.booking.agent_booking_nbr && h("p", { key: '01de156e1dddc7a071490e969c4eb2d9c0aa0df6', class: "booking-header__channel-number --primary" }, this.booking.agent_booking_nbr), h("p", { key: '7a6e200d38820645ad2ebb43ba8f4f2e0171af92', class: "booking-header__channel-number" }, this.booking?.agent ? (h("span", null, "Agent:", ' ', h("p", { class: 'truncate p-0 m-0', style: { maxWidth: '150px', display: 'inline-flex' } }, this.agent.name, ' ', h("i", { style: { paddingLeft: '0.5rem' }, class: 'truncate' }, this.agent.reference)))) : (this.booking.origin.Label)), this.canChangeSource && (h("ir-custom-button", { key: '432c4cd48aacfa802d5c0f7fd3a5b7b5b863416d', link: true, onClickHandler: () => this.bookingSourceEditor.openDialog() }, "Change source")), lastManipulation && (h(Fragment, { key: 'c9c6aa853d84fa13d9ebc30893bea54ccf41964f' }, h("p", { key: '42ae34a706dd01abde46249634058b855959c7b1', id: `booking-${this.booking.booking_nbr}-modified`, class: "booking-header__modified" }, "Modified"), h("wa-tooltip", { key: '40d66c6e9ba46d27e5c028f22e37255f39d508a3', for: `booking-${this.booking.booking_nbr}-modified` }, h("div", { key: '8b03f8c88018b7973a788efdd1b4241dce268e2d' }, h("p", { key: 'f1c86a30db46b0f0edbbac6b854e0b06ecb00e87', class: "m-0" }, "Modified by ", lastManipulation?.user, " at ", lastManipulation?.date, " ", lastManipulation?.hour, ":", lastManipulation?.minute, "."), h("p", { key: '48d836f220b91bd6e5d4467615723d23a75b107f', class: "m-0" }, this.alertMessage)))))))))), h("div", { key: '2631d41e4bd5332466e0f227db5f5d2ab68791d2', class: "booking-header__actions" }, h("div", { key: '66d16ebf0c9259dafe0c25bf06106ad073b75ab7' }, this.booking.allowed_actions.length > 0 && this.booking.is_editable ? (h("wa-dropdown", { "onwa-hide": e => {
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
            appearance: 'outlined', size: "small", variant: "brand", class: "booking-header__status-trigger" }, h("ir-booking-status-tag", { slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), h("span", null, "Update status")), this.booking.allowed_actions.map(option => (h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))) : (h("ir-booking-status-tag", { status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }))), isAgentMode(this.agent) && (h(Fragment, { key: 'f074b093c091701b606966121b13257fbc3f6862' })), h("ir-custom-button", { key: 'fcf36a10e873651ba5700cd34ac27d50a66fce71', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "small", variant: "brand" }, "Logs"), showPms && (h("ir-custom-button", { key: '03141d68699bce256022ad4729a9df7f403db36f', class: "booking-header__stretched-btn", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "small", variant: "brand" }, "PMS")), this.hasReceipt && (h(Fragment, { key: '3a1b5f0cba94af194cc594e09a2a72b430455c0f' }, h("ir-custom-button", { key: '7ea3f28ab2491ad0b3878a094449abab378a340f', class: "booking-header__stretched-btn", id: "invoice", variant: "brand", size: "small", appearance: "outlined" }, "Billing"))), this.hasPrint && (h(Fragment, { key: 'df28192f3976c381837520ffa33df0584debbdd4' }, h("wa-tooltip", { key: '6e43c64e7bd6a614bef51b31b7a9d7f80eeba926', for: "print" }, "Print booking"), h("ir-custom-button", { key: 'a099c9a336c85fd685af15fcd905f5bc33ddb941', id: "print", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: '87f434723478576613ad9ab44ba6ec7e5f8b98fe', label: "Print", name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (h(Fragment, { key: 'fb141a97a982f03129c313e77f020215c6999fe2' }, h("wa-tooltip", { key: 'f6c431f2e28167cb0ec18e013fa27e4b3deafdc1', for: "email" }, "Email this booking to guest"), h("ir-custom-button", { key: 'ee40097f1a49eed3c0ccc5616411c8479f1f511d', id: "email", variant: "brand", size: "small", appearance: "outlined" }, h("wa-icon", { key: '2f356280133cf45549f432fae99db129789eaed0', name: "envelope", style: { fontSize: '1.2rem' }, label: "Email this booking" })))), this.hasDelete && (h(Fragment, { key: '8faecc24dd042ebc17f06fbbb137acfd10cbd6d6' }, h("wa-tooltip", { key: 'fb272cd9824b8810a08fe1d3d6651a37215ef304', for: "book-delete" }, "Delete this booking"), h("ir-custom-button", { key: '1f6873de5e5b2e4d291a2ba0f248d46ec4cfea58', id: "book-delete", variant: "danger", size: "small", appearance: "plain" }, h("wa-icon", { key: 'cd8cb9a011947bde38decabbe6c61476ae7a9ea0', name: "envelope", style: { fontSize: '1.2rem' }, label: "Delete this booking" })))), this.hasCloseButton && (h("ir-custom-button", { key: 'e02f7ee90bf39faebb7659248d58dbab7fb16936', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "small", appearance: "plain" }, h("wa-icon", { key: 'e036797a5fbaa413ed5849fc0808cdd80a264c6b', name: "xmark", style: { fontSize: '1.2rem' }, label: "Go back" }))))), h("ir-dialog", { key: '5d2756e3bbccbfc46884ea23128dcb898a6bfc94', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? locales.entries.Lcz_PMS_Logs : locales.entries.Lcz_EventsLog, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: '100a99df7dce2f13e1c39ca2f81e769a9682bec8', ref: el => (this.modalEl = el), label: "Alert", lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, h("p", { key: '143e3a63560fab9b4cfef87976ab729c959572f5' }, this.booking.is_direct ? 'Are you sure you want to update this booking status?' : locales.entries.Lcz_OTA_Modification_Alter), h("div", { key: 'd742c800aa968b756960d224a261243719e0b2a4', class: "ir-dialog__footer", slot: "footer" }, h("ir-custom-button", { key: 'c68078637edeabb4c74cf604d2cbaca1d00bbbc1', "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel), h("ir-custom-button", { key: 'e5d92f95631cb5d4b51d313102a3b5783d6f43ff', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "medium", variant: "brand", loading: isRequestPending('/Change_Exposed_Booking_Status') }, locales?.entries?.Lcz_Confirm))), h("ir-booking-source-editor-dialog", { key: '9a3e1a508f7d9b7bfb2b74776f8b2c25a1b1720d', booking: this.booking, ref: el => (this.bookingSourceEditor = el) })));
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
            },
            "folioRows": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "FolioRow[]",
                    "resolved": "FolioRow[]",
                    "references": {
                        "FolioRow": {
                            "location": "import",
                            "path": "@/components/ir-city-ledger/ir-city-ledger-folio/types",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/types.ts::FolioRow"
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
            },
            "agents": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Agent[]",
                    "resolved": "{ name?: string; email?: string; property_id?: any; code?: string; id?: number; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }[]",
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
                "setter": false,
                "defaultValue": "[]"
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
