import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { Fragment, h } from "@stencil/core";
import { BookingService } from "../../../services/booking-service/booking.service";
import calendar_data from "../../../stores/calendar-data";
import { isAgentMode } from "../functions";
import { isBookingModified, showToast } from "../../../utils/utils";
import { formatBookingNumber, formatNumber } from "../../../utils/number";
import { t } from "../../../services/locale/t";
import { formatDate } from "../../../utils/date/index";
export class IrBookingHeader {
    dialogRef;
    bookingService = new BookingService();
    alertMessage = t('Lcz_OtaModificationAlert', {
        fallback: 'ALERT! Modifying an OTA booking will create a discrepancy between igloorooms and the source. Future guest modifications on the OTA may require manual adjustments of the booking.',
    });
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
                title: t('Lcz_SelectStatus'),
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
                title: t('Lcz_StatusUpdatedSuccessfully'),
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
        const { modified, lastManipulation } = isBookingModified(this.booking);
        const showPms = (calendar_data.property?.linked_pms || [])?.findIndex(lp => lp?.is_active && lp?.bookings_integration_mode?.code === '001') !== -1;
        return (h("div", { key: 'dcf8701ff5b9cd5858b3fe9fe0e07dc9b903434e', class: "booking-header" }, h("div", { key: 'cae9f17f8e21a3cd9fc21f01ce4f2ced17e7332b', class: "booking-header__row" }, h("div", { key: '081ce9e7d194a941476d1e8507db72e6bbf08044', class: "booking-header__info" }, h("div", { key: '3c38739ade711e329db26c0f9f6c79bce33fc0e1', class: "booking-header__title" }, h("div", { key: '065dee0052efc9c2c88c2b6f16b13bae5b1d9da1', class: "booking-header__label-container" }, this.hasMenu && (h(Fragment, { key: '1af87514adf88b8eb84148840abf3efd434bd67d' }, h("wa-tooltip", { key: 'ed7f3579046e81365f6ed428229c8225e084df6b', for: "menu" }, t('Lcz_GoBack', { fallback: 'Go back' })), h("ir-custom-button", { key: '0bdcd9082870583a9b7dd12bcf9c7e153fc5015f', id: "menu", variant: "neutral", size: "s", appearance: "plain" }, h("wa-icon", { key: 'fbd38f638529e707ddacb351a7f39a2b1e01f172', class: "ir-flip-rtl", name: "arrow-left", style: { fontSize: '1.2rem' }, label: t('Lcz_GoBack', { fallback: 'Go back' }) })))), h("wa-avatar", { key: '74b0de5410a2cee9b7606ffe5bf09ef14ec90857', shape: "circle", class: "booking-header__avatar", initials: this.initials, image: this.avatarImage, loading: "lazy" }), h("div", { key: '3e6f0f6e65cffcc070aaedf821ced4f011123ce8', class: "booking-header__identity" }, h("div", { key: '06c7cac14a105ab34ad499fdc35aa366c214e914', class: 'booking-header__label' }, h("h4", { key: 'c8199cffc9b5df3ecf54707c36f602f6d68f5354', class: "booking-header__label-number" }, `${t('Lcz_Booking', { fallback: 'Booking' })}#${formatBookingNumber(this.booking.booking_nbr)}`)), h("div", { key: '746c1e896f5f17e1796fee158ff9e2caebe51d08', class: "booking-header__meta" }, !this.booking.is_direct && h("p", { key: 'c1208b1ac6495fcc7ad298adaa3b976d5c97d9bd', class: "booking-header__channel-number --primary" }, formatBookingNumber(this.booking.channel_booking_nbr)), this.booking.agent_booking_nbr && h("p", { key: '3e61731064c8465bfbf2354cf29b990627ffa8db', class: "booking-header__channel-number --primary" }, formatBookingNumber(this.booking.agent_booking_nbr)), h("p", { key: 'a089430e6be57a44283d86bfed6b2d8669bf72fc', class: "booking-header__channel-number" }, this.booking?.agent ? (h("span", null, t('Lcz_Agent', { fallback: 'Agent' }), ': ', h("p", { class: 'truncate p-0 m-0', style: { maxWidth: '150px', display: 'inline-flex' } }, this.agent.name, ' ', h("i", { style: { paddingInlineStart: '0.5rem' }, class: 'truncate' }, this.agent.reference)))) : (this.booking.origin.Label)), this.canChangeSource && (h("ir-custom-button", { key: '97642fad6dde31d07b9fe09ad8945c562b974c5f', link: true, onClickHandler: () => this.bookingSourceEditor.openDialog() }, t('Lcz_ChangeSource', { fallback: 'Change source' }))), modified && (h(Fragment, { key: '4d1ada93c9a46464fe025fcd5a20ca5fca8a9370' }, h("p", { key: 'cdefe1b8ccafdaa69330e2b6a463e5ad0f62b57b', id: `booking-${this.booking.booking_nbr}-modified`, class: "booking-header__modified" }, t('Lcz_Modified', { fallback: 'Modified' })), h("wa-tooltip", { key: 'ae85b37fa85b250566802a7c8fdc25f334638289', for: `booking-${this.booking.booking_nbr}-modified` }, h("div", { key: '0c0be4a14582f8988d41782adc707babeb88f140' }, lastManipulation && (h("p", { key: 'f12415b3537e434b9d5dd6d8405c06a99813b0a0', class: "m-0" }, t('Lcz_ModifiedByAt', {
            fallback: 'Modified by %1 at %2 %3:%4.',
            params: [
                lastManipulation?.user,
                formatDate(lastManipulation?.date, 'MMM DD, YYYY'),
                formatNumber(Number(lastManipulation?.hour), { minimumIntegerDigits: 2, useGrouping: false }),
                formatNumber(Number(lastManipulation?.minute), { minimumIntegerDigits: 2, useGrouping: false }),
            ],
        }))), h("p", { key: '46dd170cdd81e07d5feb814a71715257a10361a4', class: "m-0" }, this.alertMessage)))))))))), h("div", { key: 'ebfaf01a464b2ec187c2f09b6132ea85b5d389e4', class: "booking-header__actions" }, h("div", { key: '83e21854777eb31b9fcfe56a632813b181b0d263' }, this.booking.allowed_actions.length > 0 && this.booking.is_editable ? (h("wa-dropdown", { "onwa-hide": e => {
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
            appearance: 'outlined', size: "s", variant: "brand", class: "booking-header__status-trigger" }, h("ir-booking-status-tag", { slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), h("span", null, t('Lcz_UpdateStatus', { fallback: 'Update status' }))), this.booking.allowed_actions.map(option => (h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))) : (h("ir-booking-status-tag", { status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }))), isAgentMode(this.agent) && (h(Fragment, { key: '3c8b65998c4c76081cfc048621d175fe103cf2ce' })), h("ir-custom-button", { key: 'bc1bfff92c10981257928dea6f2aae0b210a5cae', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "s", variant: "brand" }, t('Lcz_Logs', { fallback: 'Logs' })), showPms && (h("ir-custom-button", { key: 'a70093067a95038250c85e4bb0ba6c939760e0f7', class: "booking-header__stretched-btn", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "s", variant: "brand" }, t('Lcz_PMS', { fallback: 'PMS' }))), this.hasReceipt && (h(Fragment, { key: '518b943b985aab7984e619ee726db44e4036ac4b' }, h("ir-custom-button", { key: 'bd6e8a8aa94e4986bd8b563cce0e61069e19e81b', class: "booking-header__stretched-btn", id: "invoice", variant: "brand", size: "s", appearance: "outlined" }, t('Lcz_Billing', { fallback: 'Billing' })))), this.hasPrint && (h(Fragment, { key: '8e21b69924df59baa20c9d28018289b3166fa637' }, h("wa-tooltip", { key: 'c693dcf80e1073352c391944e650a911bd48a473', for: "print" }, t('Lcz_PrintBookingTooltip', { fallback: 'Print booking' })), h("ir-custom-button", { key: '406de9f65dd295969b4a95f92034935b01b0d424', id: "print", variant: "brand", size: "s", appearance: "outlined" }, h("wa-icon", { key: 'a49d1afee7a5adb927fd06ad055353fe0e6788d7', label: t('Lcz_Print', { fallback: 'Print' }), name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (h(Fragment, { key: 'b3d22135255d831509f1711d4dc38cfee5608a95' }, h("wa-tooltip", { key: '05ffff90bec1b0880a59dfa1da0ec28820429ee5', for: "email" }, t('Lcz_EmailBookingToGuestTooltip', { fallback: 'Email this booking to guest' })), h("ir-custom-button", { key: '5aa0e67c55b50aa0a28aeaf7571e8dd5666fe3f2', id: "email", variant: "brand", size: "s", appearance: "outlined" }, h("wa-icon", { key: '9de01088817361df12d8244991708e6ea83b5bcb', name: "envelope", style: { fontSize: '1.2rem' }, label: t('Lcz_EmailThisBooking', { fallback: 'Email this booking' }) })))), this.hasDelete && (h(Fragment, { key: 'ddd34a9fe78d879b1fd600d3d06423ee4414a5e5' }, h("wa-tooltip", { key: '529ac0c66a4868ae64f41844f39bb32be08c80f6', for: "book-delete" }, t('Lcz_DeleteThisBooking', { fallback: 'Delete this booking' })), h("ir-custom-button", { key: '85b7316ac1b399c139edee4818a7bac3b05ed91a', id: "book-delete", variant: "danger", size: "s", appearance: "plain" }, h("wa-icon", { key: '4085cc376f4c199c4974824e9b8ae61b061624e3', name: "envelope", style: { fontSize: '1.2rem' }, label: t('Lcz_DeleteThisBooking', { fallback: 'Delete this booking' }) })))), this.hasCloseButton && (h("ir-custom-button", { key: '8f778054ae55bcddbad9bf3e31cb5f76988eddbf', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "s", appearance: "plain" }, h("wa-icon", { key: 'bfb66ef1ce5bb873812763869f48d7d0ae61ee06', name: "xmark", style: { fontSize: '1.2rem' }, label: t('Lcz_GoBack', { fallback: 'Go back' }) }))))), h("ir-dialog", { key: '542be9265211e5518a1d4dc462c7463c78e24f23', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? t('Lcz_PMS_Logs') : t('Lcz_EventsLog'), style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: '41d93bc026cbf63b7d01c1c109aa389c3602d5bc', ref: el => (this.modalEl = el), label: t('Lcz_Alert', { fallback: 'Alert' }), lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, h("p", { key: '0a8a9ce43bb59aab3ec9cee97af5ef8b85d2077e' }, this.booking.is_direct ? t('Lcz_ConfirmUpdateBookingStatus', { fallback: 'Are you sure you want to update this booking status?' }) : t('Lcz_OTA_Modification_Alter')), h("div", { key: 'bc84ccaa0130730cffa4ae6eb55c20a3e316a34a', class: "ir-dialog__footer", slot: "footer" }, h("ir-custom-button", { key: '28105fc944e96f2c5488b788be8b6a37d89f151e', "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '0a068ab471eb63e99dffe56e9a0e62ea774da158', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "m", variant: "brand", loading: isRequestPending('/Change_Exposed_Booking_Status') }, t('Lcz_Confirm', { fallback: 'Confirm' })))), h("ir-booking-source-editor-dialog", { key: '26b3bdf02679b6546dda7d4420cc25f30f746d73', booking: this.booking, ref: el => (this.bookingSourceEditor = el) })));
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
                    "resolved": "{ code?: string; name?: string; id?: number; email?: string; property_id?: any; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
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
                    "resolved": "{ code?: string; name?: string; id?: number; email?: string; property_id?: any; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }[]",
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
