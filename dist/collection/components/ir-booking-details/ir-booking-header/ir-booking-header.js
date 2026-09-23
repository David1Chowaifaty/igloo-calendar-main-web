import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { Fragment, h } from "@stencil/core";
import { BookingService } from "../../../services/booking-service/booking.service";
import calendar_data from "../../../stores/calendar-data";
import { isAgentMode } from "../functions";
import { showToast } from "../../../utils/utils";
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
        const lastManipulation = this.booking.ota_manipulations ? this.booking.ota_manipulations[this.booking.ota_manipulations.length - 1] : null;
        const showPms = (calendar_data.property?.linked_pms || [])?.findIndex(lp => lp?.is_active && lp?.bookings_integration_mode?.code === '001') !== -1;
        return (h("div", { key: '6b987fb172ed4d756c2d4d42f1329b187126fc53', class: "booking-header" }, h("div", { key: '52f573823e9ab521ef4e567dd014e42dbd629e47', class: "booking-header__row" }, h("div", { key: '500238d21e276756efced009ddf07f56e9e6faaa', class: "booking-header__info" }, h("div", { key: '48de0ff2e69967cbafb3d1be59a7a9b619eff78a', class: "booking-header__title" }, h("div", { key: 'e13c93f042d9dc79a5e907f624cbfab5b505a293', class: "booking-header__label-container" }, this.hasMenu && (h(Fragment, { key: 'f22c11bbfbdbc0b91097ddaaea8df9042e5b5d66' }, h("wa-tooltip", { key: '858234e81afb585667581ebfea86adda295726d5', for: "menu" }, t('Lcz_GoBack', { fallback: 'Go back' })), h("ir-custom-button", { key: 'ae64f7746b95e93597b0358dcd180a77b4311caa', id: "menu", variant: "neutral", size: "s", appearance: "plain" }, h("wa-icon", { key: '0234d3d7d862b664a34ed66cb00de69c2f070bff', class: "ir-flip-rtl", name: "arrow-left", style: { fontSize: '1.2rem' }, label: t('Lcz_GoBack', { fallback: 'Go back' }) })))), h("wa-avatar", { key: '1e1becb57cc3b9cb109f07f7bd8004e9f0dcf83f', shape: "circle", class: "booking-header__avatar", initials: this.initials, image: this.avatarImage, loading: "lazy" }), h("div", { key: 'ec20429f4dc065df5bf0fd59c339c2a378b0860b', class: "booking-header__identity" }, h("div", { key: 'c9fee40e9958acc6d1636ce1ac3cce406b339892', class: 'booking-header__label' }, h("h4", { key: '9ba1277ff1c94e2c5b5d8a9f10c82d82c793e38e', class: "booking-header__label-number" }, `${t('Lcz_Booking', { fallback: 'Booking' })}#${formatBookingNumber(this.booking.booking_nbr)}`)), h("div", { key: 'cbc0b85987768a9383b387e5358435058d569fdf', class: "booking-header__meta" }, !this.booking.is_direct && h("p", { key: '48a51f9b9b8fe7fbec4cd6b61a16e73f6c873a61', class: "booking-header__channel-number --primary" }, formatBookingNumber(this.booking.channel_booking_nbr)), this.booking.agent_booking_nbr && h("p", { key: '82ea08315ec79ea6b18f874fd2eb53335d00eb5d', class: "booking-header__channel-number --primary" }, formatBookingNumber(this.booking.agent_booking_nbr)), h("p", { key: 'ef58d8f0bb5f42e6a6100618e58080638046e633', class: "booking-header__channel-number" }, this.booking?.agent ? (h("span", null, t('Lcz_Agent', { fallback: 'Agent' }), ': ', h("p", { class: 'truncate p-0 m-0', style: { maxWidth: '150px', display: 'inline-flex' } }, this.agent.name, ' ', h("i", { style: { paddingInlineStart: '0.5rem' }, class: 'truncate' }, this.agent.reference)))) : (this.booking.origin.Label)), this.canChangeSource && (h("ir-custom-button", { key: 'd9023e731f2ec3c416ab9aa2d3404674362c7406', link: true, onClickHandler: () => this.bookingSourceEditor.openDialog() }, t('Lcz_ChangeSource', { fallback: 'Change source' }))), lastManipulation && (h(Fragment, { key: 'fe568d2c44e2fe34866175d4d988fd9c351fdbf1' }, h("p", { key: '141aac230860e605d7b1c771fe0237884971e694', id: `booking-${this.booking.booking_nbr}-modified`, class: "booking-header__modified" }, t('Lcz_Modified', { fallback: 'Modified' })), h("wa-tooltip", { key: '5078c97dc0f2b871963b4118e1dde0ef12eb3932', for: `booking-${this.booking.booking_nbr}-modified` }, h("div", { key: '59f7145ca1481471c4ec9bef34ec7debc0a67e92' }, h("p", { key: '642d0fc25690419b7da4d79905f6455fdff0173b', class: "m-0" }, t('Lcz_ModifiedByAt', {
            fallback: 'Modified by %1 at %2 %3:%4.',
            params: [
                lastManipulation?.user,
                formatDate(lastManipulation?.date, 'MMM DD, YYYY'),
                formatNumber(Number(lastManipulation?.hour), { minimumIntegerDigits: 2, useGrouping: false }),
                formatNumber(Number(lastManipulation?.minute), { minimumIntegerDigits: 2, useGrouping: false }),
            ],
        })), h("p", { key: 'c0988bcbb6b2e4ae312059dd6f0ebe48a92694f2', class: "m-0" }, this.alertMessage)))))))))), h("div", { key: 'c8c9bf8b04686504aa7dd3850a9dd0476f751112', class: "booking-header__actions" }, h("div", { key: '365b6e4c0dc6be44e7d73b41c38548cba547a31a' }, this.booking.allowed_actions.length > 0 && this.booking.is_editable ? (h("wa-dropdown", { "onwa-hide": e => {
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
            appearance: 'outlined', size: "s", variant: "brand", class: "booking-header__status-trigger" }, h("ir-booking-status-tag", { slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), h("span", null, t('Lcz_UpdateStatus', { fallback: 'Update status' }))), this.booking.allowed_actions.map(option => (h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))) : (h("ir-booking-status-tag", { status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }))), isAgentMode(this.agent) && (h(Fragment, { key: 'e41a1a5b8e04456f2114d8a137d7012693d22cf8' })), h("ir-custom-button", { key: '9f7a5587cae3ccaa272c61119803a19622f93e48', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "s", variant: "brand" }, t('Lcz_Logs', { fallback: 'Logs' })), showPms && (h("ir-custom-button", { key: '6acfdc6db86e1047cff1f4c700cb1a0bd2810433', class: "booking-header__stretched-btn", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "s", variant: "brand" }, t('Lcz_PMS', { fallback: 'PMS' }))), this.hasReceipt && (h(Fragment, { key: '359984b4aa5d740204755b14a0c52b7fc414d0e5' }, h("ir-custom-button", { key: 'a2ab43747bf8d6f9066cd814d3295e554cbf1808', class: "booking-header__stretched-btn", id: "invoice", variant: "brand", size: "s", appearance: "outlined" }, t('Lcz_Billing', { fallback: 'Billing' })))), this.hasPrint && (h(Fragment, { key: '1c6ce4e9f076e509bc725d978494065144e24640' }, h("wa-tooltip", { key: '8ab22c96aa083b08b960c4eebcc9d992c514eb4a', for: "print" }, t('Lcz_PrintBookingTooltip', { fallback: 'Print booking' })), h("ir-custom-button", { key: '7c80824aeb3638de90d4a5fcc24789371c5edcaf', id: "print", variant: "brand", size: "s", appearance: "outlined" }, h("wa-icon", { key: '4e2c1cebcf7523b82cf7b3c90b4e7a9522e21ebc', label: t('Lcz_Print', { fallback: 'Print' }), name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (h(Fragment, { key: '5a97583a0f357c5e1b7a06e33d7f0f7ff9a0a8e2' }, h("wa-tooltip", { key: '46fa2463cb19877ed3e17ff6f4c7e7e31267f686', for: "email" }, t('Lcz_EmailBookingToGuestTooltip', { fallback: 'Email this booking to guest' })), h("ir-custom-button", { key: 'f3ab2432fd8adb6d45d3f6b97b1e3a30f73b5be9', id: "email", variant: "brand", size: "s", appearance: "outlined" }, h("wa-icon", { key: 'f6b24b7e01def1500c111d9067e8033e8f6888aa', name: "envelope", style: { fontSize: '1.2rem' }, label: t('Lcz_EmailThisBooking', { fallback: 'Email this booking' }) })))), this.hasDelete && (h(Fragment, { key: '9664fd4040d5633a5d739bf489583a8feb6c8391' }, h("wa-tooltip", { key: 'f7f28a4b69a42c7e48d34120c2c5812d1a61667d', for: "book-delete" }, t('Lcz_DeleteThisBooking', { fallback: 'Delete this booking' })), h("ir-custom-button", { key: '0fd0573de10594ceeeb01fd3ea2b80e212b8a083', id: "book-delete", variant: "danger", size: "s", appearance: "plain" }, h("wa-icon", { key: '39c31a165ae02f5db230a6970e8ef8d8c5b70f13', name: "envelope", style: { fontSize: '1.2rem' }, label: t('Lcz_DeleteThisBooking', { fallback: 'Delete this booking' }) })))), this.hasCloseButton && (h("ir-custom-button", { key: '1754da1d2552a20568cbb38441a9af7631d926e0', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "s", appearance: "plain" }, h("wa-icon", { key: '98011b40ce893a9a46bc0bfc547f266e4f492fce', name: "xmark", style: { fontSize: '1.2rem' }, label: t('Lcz_GoBack', { fallback: 'Go back' }) }))))), h("ir-dialog", { key: '01ff1251247121a6ee99c1829ecff2f194cca204', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? t('Lcz_PMS_Logs') : t('Lcz_EventsLog'), style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: '46f8d7370567f37969eca3c38bc7b4a5c20ba1c7', ref: el => (this.modalEl = el), label: t('Lcz_Alert', { fallback: 'Alert' }), lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, h("p", { key: 'f7aedd79faf85e35080dfd5064921b73c0a8a1af' }, this.booking.is_direct ? t('Lcz_ConfirmUpdateBookingStatus', { fallback: 'Are you sure you want to update this booking status?' }) : t('Lcz_OTA_Modification_Alter')), h("div", { key: '7b4b570a1d73001454bb81bb73cb6f674bb778c4', class: "ir-dialog__footer", slot: "footer" }, h("ir-custom-button", { key: '4900c53daaae1d56d67367b480e12869234ffab2', "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '142ab2fd1d2b91c583bde26aa7ae7e6cfb0fe054', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "m", variant: "brand", loading: isRequestPending('/Change_Exposed_Booking_Status') }, t('Lcz_Confirm', { fallback: 'Confirm' })))), h("ir-booking-source-editor-dialog", { key: '93c00d6cfe761fc4527bad9ab31214777ba1a379', booking: this.booking, ref: el => (this.bookingSourceEditor = el) })));
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
