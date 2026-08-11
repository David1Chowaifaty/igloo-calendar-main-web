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
        return (h("div", { key: 'c34245c8326a9d524dc836fea74d338365559568', class: "booking-header" }, h("div", { key: '75d031b96a4c1dbcfea825a0a4f4739f5dc7c82e', class: "booking-header__row" }, h("div", { key: '3567c8bb5f837768c2eb85cf8ab78c3c3f75bf7f', class: "booking-header__info" }, h("div", { key: 'cee860ab0ba5414ee467576cb8701724122907df', class: "booking-header__title" }, h("div", { key: '46b52936aa011e72e12bef6592e2cf82e6dc05ae', class: "booking-header__label-container" }, this.hasMenu && (h(Fragment, { key: '69ec3b8fdec5f18aac2e5e6c7c7b7f091c7f3668' }, h("wa-tooltip", { key: 'd94b79edbece555852848cf3173919974faba592', for: "menu" }, "Go back"), h("ir-custom-button", { key: '4851bdad9993f1e436f439ab4f9ccd82e8ba372c', id: "menu", variant: "neutral", size: "s", appearance: "plain" }, h("wa-icon", { key: 'fbd96df8254e16cc892732f436f26df3e8afd125', name: "arrow-left", style: { fontSize: '1.2rem' }, label: "Go back" })))), h("wa-avatar", { key: 'd48ab1f39040a4d972d5dc37325cc972dfb3959d', shape: "circle", class: "booking-header__avatar", initials: this.initials, image: this.avatarImage, loading: "lazy" }), h("div", { key: '07eb708afee1bddbc03804a3dac228962a3b88e5', class: "booking-header__identity" }, h("div", { key: 'fbcbdbae1e90458779d635fef8e6e595e4cdc896', class: 'booking-header__label' }, h("h4", { key: 'b7af71d6ac921f0041461ca6b7606e53b29d618c', class: "booking-header__label-number" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`)), h("div", { key: '1f8a004bad4e8bd55266fd9462b9a086137fb12b', class: "booking-header__meta" }, !this.booking.is_direct && h("p", { key: '161aebea670ab9aefc83594d38b75a6935c803c0', class: "booking-header__channel-number --primary" }, this.booking.channel_booking_nbr), this.booking.agent_booking_nbr && h("p", { key: '2583c0a4498e162a80c12fe4412bf1e25d2f7b73', class: "booking-header__channel-number --primary" }, this.booking.agent_booking_nbr), h("p", { key: '61e42cb4070aafdb390caee46f0e8dab1074f6b9', class: "booking-header__channel-number" }, this.booking?.agent ? (h("span", null, "Agent:", ' ', h("p", { class: 'truncate p-0 m-0', style: { maxWidth: '150px', display: 'inline-flex' } }, this.agent.name, ' ', h("i", { style: { paddingLeft: '0.5rem' }, class: 'truncate' }, this.agent.reference)))) : (this.booking.origin.Label)), this.canChangeSource && (h("ir-custom-button", { key: '700526deb421b79c5fc69033140c26b0c159fa66', link: true, onClickHandler: () => this.bookingSourceEditor.openDialog() }, "Change source")), lastManipulation && (h(Fragment, { key: 'e031feba4084df1c337c9520cdb442849df17af7' }, h("p", { key: '26546725130f2106dfeaf10edaaaf876a9698962', id: `booking-${this.booking.booking_nbr}-modified`, class: "booking-header__modified" }, "Modified"), h("wa-tooltip", { key: 'f82e054137cd88d2adc98cbf89437d869f74981b', for: `booking-${this.booking.booking_nbr}-modified` }, h("div", { key: 'ba263d7a5f152752274d5442b5f58e805d0aa5e2' }, h("p", { key: '77c7f081ca9d999c81832d429ec4ea34bde29dde', class: "m-0" }, "Modified by ", lastManipulation?.user, " at ", lastManipulation?.date, " ", lastManipulation?.hour, ":", lastManipulation?.minute, "."), h("p", { key: '3e26dd4d2ab08be93a32525878fd57a56c33c1e5', class: "m-0" }, this.alertMessage)))))))))), h("div", { key: '2815c9fe9499b446beb102d709aad2647292dc8b', class: "booking-header__actions" }, h("div", { key: 'e701f441ac6608a689431ca860536c674af12e8c' }, this.booking.allowed_actions.length > 0 && this.booking.is_editable ? (h("wa-dropdown", { "onwa-hide": e => {
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
            appearance: 'outlined', size: "s", variant: "brand", class: "booking-header__status-trigger" }, h("ir-booking-status-tag", { slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), h("span", null, "Update status")), this.booking.allowed_actions.map(option => (h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))) : (h("ir-booking-status-tag", { status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }))), isAgentMode(this.agent) && (h(Fragment, { key: '2fe60cf3b47149e6a57248a7c257c815126d7d68' })), h("ir-custom-button", { key: 'a96d0c13129d15e036364535a617cda910811ef1', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "s", variant: "brand" }, "Logs"), showPms && (h("ir-custom-button", { key: '7e6ea0c76720973c652f85f80352816a5e8e7a55', class: "booking-header__stretched-btn", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "s", variant: "brand" }, "PMS")), this.hasReceipt && (h(Fragment, { key: 'ef3d8e7dc21ef16d9f0a9ff7ddee2577bae92138' }, h("ir-custom-button", { key: 'a754cb5d1ed921865725a19921cbef21a5f5cdde', class: "booking-header__stretched-btn", id: "invoice", variant: "brand", size: "s", appearance: "outlined" }, "Billing"))), this.hasPrint && (h(Fragment, { key: 'd001630e58e596dc2c6f234e3f2be6967d8b0f20' }, h("wa-tooltip", { key: '9898c46e03b96ab48ad42743accdd59d7350357c', for: "print" }, "Print booking"), h("ir-custom-button", { key: '6a589f25c24c0d15af7416c7627ab1f5406bbe66', id: "print", variant: "brand", size: "s", appearance: "outlined" }, h("wa-icon", { key: '485509a62140a13ff8c287e0bfbd5163fe7511bf', label: "Print", name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (h(Fragment, { key: 'd0d22c6236995728640eca2acba71efedc1431cf' }, h("wa-tooltip", { key: 'f43c7dbcd313bcd253c12aaf2945a2308f6b3ab9', for: "email" }, "Email this booking to guest"), h("ir-custom-button", { key: '182da14bbd77fd278d0434a6e86485f2571921f9', id: "email", variant: "brand", size: "s", appearance: "outlined" }, h("wa-icon", { key: '2cee7da0aef4420c3ebd29f64e837ad4915f5b58', name: "envelope", style: { fontSize: '1.2rem' }, label: "Email this booking" })))), this.hasDelete && (h(Fragment, { key: 'c21fa78aa6535784625714ce9754018c0b3ba256' }, h("wa-tooltip", { key: 'd714f0ee3e2cb295c8daa361643b51ca94adc7cc', for: "book-delete" }, "Delete this booking"), h("ir-custom-button", { key: 'd181a8fba68015a6fcaa843deabc8a792fcdf45e', id: "book-delete", variant: "danger", size: "s", appearance: "plain" }, h("wa-icon", { key: '10e6683b0ee82b6acbaafafbc6a3e6afcd709d25', name: "envelope", style: { fontSize: '1.2rem' }, label: "Delete this booking" })))), this.hasCloseButton && (h("ir-custom-button", { key: 'eaae02258c4565491ed2cecda93490181360956a', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "s", appearance: "plain" }, h("wa-icon", { key: '177cc9d6f37ff40417055e808f704702e352c0e4', name: "xmark", style: { fontSize: '1.2rem' }, label: "Go back" }))))), h("ir-dialog", { key: '96a5d55d908b956229b58ee9fbcaf8c1143c4495', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? locales.entries.Lcz_PMS_Logs : locales.entries.Lcz_EventsLog, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: '2c31ffe117175ec9189b2bcf53df850957d1c3ed', ref: el => (this.modalEl = el), label: "Alert", lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, h("p", { key: '68d1a63ba0901d1e0f4e70d45c115cc1a9880d58' }, this.booking.is_direct ? 'Are you sure you want to update this booking status?' : locales.entries.Lcz_OTA_Modification_Alter), h("div", { key: 'f47d5544a4ad0cd6f4d3ae6e37e844d5155c50aa', class: "ir-dialog__footer", slot: "footer" }, h("ir-custom-button", { key: '3b3a413bbc199a051a027ccf73a0d2ce7a89e266', "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel), h("ir-custom-button", { key: 'f76c3ee1da55a27e9cd121132880b37d1e0b5aa8', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "m", variant: "brand", loading: isRequestPending('/Change_Exposed_Booking_Status') }, locales?.entries?.Lcz_Confirm))), h("ir-booking-source-editor-dialog", { key: 'f6bae26e3d707c79e5bd912d82857ffb2d8798b9', booking: this.booking, ref: el => (this.bookingSourceEditor = el) })));
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
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
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
                "reflect": false,
                "attribute": "has-receipt"
            },
            "agent": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Agent",
                    "resolved": "{ name?: string; id?: number; email?: string; property_id?: any; code?: string; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
                    "references": {
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent",
                            "referenceLocation": "Agent"
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
                "reflect": false,
                "attribute": "has-print"
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
                "reflect": false,
                "attribute": "has-delete"
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
                "reflect": false,
                "attribute": "has-menu"
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
                "reflect": false,
                "attribute": "has-close-button"
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
                "reflect": false,
                "attribute": "has-email",
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
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/types.ts::FolioRow",
                            "referenceLocation": "FolioRow"
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
                    "resolved": "{ name?: string; id?: number; email?: string; property_id?: any; code?: string; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }[]",
                    "references": {
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent",
                            "referenceLocation": "Agent"
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
                    "resolved": "any",
                    "references": {
                        "OpenSidebarEvent": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-booking-details/types.ts::OpenSidebarEvent",
                            "referenceLocation": "OpenSidebarEvent"
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
