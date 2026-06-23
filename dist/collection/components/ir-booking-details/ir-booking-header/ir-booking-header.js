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
        return (h("div", { key: '83d88714ae197d186bf6eafcab83ec98c7e99370', class: "booking-header" }, h("div", { key: '3abb083f9de877d44cc943a00ebbbe459975a2fa', class: "booking-header__row" }, h("div", { key: 'ab98f2b00c5da46986ecac1ea8eb959527ea0168', class: "booking-header__info" }, h("div", { key: '6f6ae57cc2045543fddf952b02950861c622eca2', class: "booking-header__title" }, h("div", { key: '3f3a62b5c1a105fb568483f39ab3cb07259e646c', class: "booking-header__label-container" }, this.hasMenu && (h(Fragment, { key: '0c4881f1099ad953bac4eab506e7693de32a227b' }, h("wa-tooltip", { key: 'afefdee1c7bad03ad70922fd0729bbdc829a287a', for: "menu" }, "Go back"), h("ir-custom-button", { key: '3c2db622375cdbd05b45413391de16f135267cd3', id: "menu", variant: "neutral", size: "s", appearance: "plain" }, h("wa-icon", { key: '29324a88a5a1093242b1bb5bc50416aa5f6ee53d', name: "arrow-left", style: { fontSize: '1.2rem' }, label: "Go back" })))), h("wa-avatar", { key: 'ec9b7a21045b8d3d4b939dc1f2597faf92449082', shape: "circle", class: "booking-header__avatar", initials: this.initials, image: this.avatarImage, loading: "lazy" }), h("div", { key: 'a7b41f330d9b84a41bf667930c7fac6160e8bdd8', class: "booking-header__identity" }, h("div", { key: '750f3664c9eec1bc99deafe85c16e0493f9fe930', class: 'booking-header__label' }, h("h4", { key: '3398757f1abdd973f85a378f1bf03a1ff8d625eb', class: "booking-header__label-number" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`)), h("div", { key: '9932b746e42da761b7a25388db080ae61701454e', class: "booking-header__meta" }, !this.booking.is_direct && h("p", { key: 'ffb11ce7b3659f13ef0ff68ec733dd05317b66e9', class: "booking-header__channel-number --primary" }, this.booking.channel_booking_nbr), this.booking.agent_booking_nbr && h("p", { key: '7a3362de84c0ba4667097496481fb0469a632e93', class: "booking-header__channel-number --primary" }, this.booking.agent_booking_nbr), h("p", { key: 'd67c4924403d90a60188deccfe78f32677237d50', class: "booking-header__channel-number" }, this.booking?.agent ? (h("span", null, "Agent:", ' ', h("p", { class: 'truncate p-0 m-0', style: { maxWidth: '150px', display: 'inline-flex' } }, this.agent.name, ' ', h("i", { style: { paddingLeft: '0.5rem' }, class: 'truncate' }, this.agent.reference)))) : (this.booking.origin.Label)), this.canChangeSource && (h("ir-custom-button", { key: 'a3e72e85ef33ab4abf55aaf28d73b1e9de512c51', link: true, onClickHandler: () => this.bookingSourceEditor.openDialog() }, "Change source")), lastManipulation && (h(Fragment, { key: '228e2b4ec58dab63ecfdc6f46fef15ab738361f1' }, h("p", { key: '4ea18910e61ab154a4e1412eb8d40144389c42d3', id: `booking-${this.booking.booking_nbr}-modified`, class: "booking-header__modified" }, "Modified"), h("wa-tooltip", { key: 'cc333ae0e745469e26712a7052251675d8244810', for: `booking-${this.booking.booking_nbr}-modified` }, h("div", { key: 'f0384710c5253e9e36e903e142d38734ebc668c3' }, h("p", { key: '9cc25487fe13fb4ba8d6805533224cbe2297997a', class: "m-0" }, "Modified by ", lastManipulation?.user, " at ", lastManipulation?.date, " ", lastManipulation?.hour, ":", lastManipulation?.minute, "."), h("p", { key: '4714e8f1055ea56d49e74c2eabf1d37a3d30d1bd', class: "m-0" }, this.alertMessage)))))))))), h("div", { key: '3e3226c6ca5bcb82387ed533ded9faf496d318d4', class: "booking-header__actions" }, h("div", { key: 'abe4b786428ef4177a8e66a4e1f39f2d6a99531b' }, this.booking.allowed_actions.length > 0 && this.booking.is_editable ? (h("wa-dropdown", { "onwa-hide": e => {
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
            appearance: 'outlined', size: "s", variant: "brand", class: "booking-header__status-trigger" }, h("ir-booking-status-tag", { slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), h("span", null, "Update status")), this.booking.allowed_actions.map(option => (h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))) : (h("ir-booking-status-tag", { status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }))), isAgentMode(this.agent) && (h(Fragment, { key: '3c6654838f3f00feb65ef20e35f86007c7016b8b' })), h("ir-custom-button", { key: 'c5a40e7f01f6be004750a9883c98a7029746d765', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "s", variant: "brand" }, "Logs"), showPms && (h("ir-custom-button", { key: '528cf88239d5577656769e5f16ed15d4ebca65df', class: "booking-header__stretched-btn", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "s", variant: "brand" }, "PMS")), this.hasReceipt && (h(Fragment, { key: '061cee97f138febf89070dfe954411dc6a112136' }, h("ir-custom-button", { key: 'a0206620c4a4649d331676fc98d781d54c388b04', class: "booking-header__stretched-btn", id: "invoice", variant: "brand", size: "s", appearance: "outlined" }, "Billing"))), this.hasPrint && (h(Fragment, { key: 'a02c3b0442f520a172acc3b98378a84616a60373' }, h("wa-tooltip", { key: '1104bae1ceec15ce31fc01366698146210bd18e0', for: "print" }, "Print booking"), h("ir-custom-button", { key: 'bbe6fd59a8e7ad54b5ebe6b1a26cacfda118b582', id: "print", variant: "brand", size: "s", appearance: "outlined" }, h("wa-icon", { key: '71739637fc4f05dc0093bb5ba29ed88d6fb399ab', label: "Print", name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (h(Fragment, { key: '48c5a660607d1650398f6348a7ca7ff46437a919' }, h("wa-tooltip", { key: '8f5ed23eceb49d3a98c4699eae9fe8c489656e99', for: "email" }, "Email this booking to guest"), h("ir-custom-button", { key: '27d63711417f9d71e7c174a9c1925de0c981f1f3', id: "email", variant: "brand", size: "s", appearance: "outlined" }, h("wa-icon", { key: '09e1ca7aff244afce92a1c8323ce0b84f07e6bec', name: "envelope", style: { fontSize: '1.2rem' }, label: "Email this booking" })))), this.hasDelete && (h(Fragment, { key: '565bb7cbfea0e8373325330766f5732e92f75933' }, h("wa-tooltip", { key: '97381593febf858710c2df9ad0ec63b0ebc4ca3a', for: "book-delete" }, "Delete this booking"), h("ir-custom-button", { key: '6231a008a0722a737fa42d43605473a83fdeb70d', id: "book-delete", variant: "danger", size: "s", appearance: "plain" }, h("wa-icon", { key: '208e39cfdd06949caa5b20e7e1e4cb2387a2b3a7', name: "envelope", style: { fontSize: '1.2rem' }, label: "Delete this booking" })))), this.hasCloseButton && (h("ir-custom-button", { key: '7554e74ad89df17d413c83e2ddeb78a006566775', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "s", appearance: "plain" }, h("wa-icon", { key: 'e3b58909f7f19efc280d2c8238090cf2e8320d7e', name: "xmark", style: { fontSize: '1.2rem' }, label: "Go back" }))))), h("ir-dialog", { key: '1d272106a6e624cd96cf81184a4bbf3b6dff3d27', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? locales.entries.Lcz_PMS_Logs : locales.entries.Lcz_EventsLog, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: '9f25748f541f7ece5547d063c84306eb166e68f8', ref: el => (this.modalEl = el), label: "Alert", lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, h("p", { key: '6db2c57da0b2f29e847adb09ea1cb0401062429a' }, this.booking.is_direct ? 'Are you sure you want to update this booking status?' : locales.entries.Lcz_OTA_Modification_Alter), h("div", { key: '17431e243feff783f8b9c53b4e79cb6523d75166', class: "ir-dialog__footer", slot: "footer" }, h("ir-custom-button", { key: 'c150398c18343ffc11835ea3b0ea65419fd6ef72', "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel), h("ir-custom-button", { key: '230427b9a13a23114ca6f86d5558579586071dc4', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "m", variant: "brand", loading: isRequestPending('/Change_Exposed_Booking_Status') }, locales?.entries?.Lcz_Confirm))), h("ir-booking-source-editor-dialog", { key: 'a1de263b5f3a060c1cc2ec4b894a7bcb93d5262d', booking: this.booking, ref: el => (this.bookingSourceEditor = el) })));
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
