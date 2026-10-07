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
        return (h("div", { key: '81227adc7c58f7f1f5255d4889e9f7d39a4a8ecb', class: "booking-header" }, h("div", { key: 'a0c7f462c57293467ce1a632f5176c70254d846b', class: "booking-header__row" }, h("div", { key: 'f8eeca469173c0d79e2afca876d5bea07985e081', class: "booking-header__info" }, h("div", { key: '185322719850737abf1cfd02760f6d7930c3e085', class: "booking-header__title" }, h("div", { key: '165c78fdb23e782216bd946c99c803ffab7e8934', class: "booking-header__label-container" }, this.hasMenu && (h(Fragment, { key: '1046c2014a530554a82ef5770663096a2c6c8233' }, h("wa-tooltip", { key: '5ce08a154a093c3d8f2eb784308a3d342e6201ad', for: "menu" }, t('Lcz_GoBack', { fallback: 'Go back' })), h("ir-custom-button", { key: 'fdee20aecf97ebea2bb0256d0407d7d62c6764e7', id: "menu", variant: "neutral", size: "s", appearance: "plain" }, h("wa-icon", { key: '1b640f4a5efa455847ddca1b5755633ecfe10d81', class: "ir-flip-rtl", name: "arrow-left", style: { fontSize: '1.2rem' }, label: t('Lcz_GoBack', { fallback: 'Go back' }) })))), h("wa-avatar", { key: 'db29586ad6ebb7ffa3fc60121bba114f7be5d712', shape: "circle", class: "booking-header__avatar", initials: this.initials, image: this.avatarImage, loading: "lazy" }), h("div", { key: 'a540a3ba3a3cde16daac769c59ddc357111314e2', class: "booking-header__identity" }, h("div", { key: '87e15acbf8a9ad990eebc07b8d19735dd67bed27', class: 'booking-header__label' }, h("h4", { key: 'fa36f5ae328afa7eae90f701e3627fb1c33d14fa', class: "booking-header__label-number" }, `${t('Lcz_Booking', { fallback: 'Booking' })}#${formatBookingNumber(this.booking.booking_nbr)}`)), h("div", { key: '51fd89cbc96147127721ecadb0530870bc710be3', class: "booking-header__meta" }, !this.booking.is_direct && h("p", { key: 'b7e0550b502ac350464f42207d542a69c741e1ff', class: "booking-header__channel-number --primary" }, formatBookingNumber(this.booking.channel_booking_nbr)), this.booking.agent_booking_nbr && h("p", { key: '07bbb5e05fdbb08de12b23c019ea9242d4cb4cdf', class: "booking-header__channel-number --primary" }, formatBookingNumber(this.booking.agent_booking_nbr)), h("p", { key: 'e51caa760b72483e008a758d508bd68c11cc937a', class: "booking-header__channel-number" }, this.booking?.agent ? (h("span", null, t('Lcz_Agent', { fallback: 'Agent' }), ': ', h("p", { class: 'truncate p-0 m-0', style: { maxWidth: '150px', display: 'inline-flex' } }, this.agent.name, ' ', h("i", { style: { paddingInlineStart: '0.5rem' }, class: 'truncate' }, this.agent.reference)))) : (this.booking.origin.Label)), this.canChangeSource && (h("ir-custom-button", { key: '668dde75ea4978771788a32607ce4994a90fefb2', link: true, onClickHandler: () => this.bookingSourceEditor.openDialog() }, t('Lcz_ChangeSource', { fallback: 'Change source' }))), lastManipulation && (h(Fragment, { key: 'a699346b7a6ff8decc8050d3e79b8774d1933311' }, h("p", { key: 'fa9440ecaa4cce82cbd19af4454ca71b14d48921', id: `booking-${this.booking.booking_nbr}-modified`, class: "booking-header__modified" }, t('Lcz_Modified', { fallback: 'Modified' })), h("wa-tooltip", { key: '5cafc32cd1969fd548ad35909f25d46a95fb331e', for: `booking-${this.booking.booking_nbr}-modified` }, h("div", { key: 'cc9ecc8569d682c8be6cd86a68a627805cda347e' }, h("p", { key: 'd8f073f1fee757a1bbee42f5577b309c9920cf88', class: "m-0" }, t('Lcz_ModifiedByAt', {
            fallback: 'Modified by %1 at %2 %3:%4.',
            params: [
                lastManipulation?.user,
                formatDate(lastManipulation?.date, 'MMM DD, YYYY'),
                formatNumber(Number(lastManipulation?.hour), { minimumIntegerDigits: 2, useGrouping: false }),
                formatNumber(Number(lastManipulation?.minute), { minimumIntegerDigits: 2, useGrouping: false }),
            ],
        })), h("p", { key: '389d130a7cfd824e3816ccaf8d4be7edacf46088', class: "m-0" }, this.alertMessage)))))))))), h("div", { key: 'e3d5dcd8fc5c862a16831898cf238183cf484afb', class: "booking-header__actions" }, h("div", { key: 'ac5d0806b88fef383e741d981241d24f6e2d531d' }, this.booking.allowed_actions.length > 0 && this.booking.is_editable ? (h("wa-dropdown", { "onwa-hide": e => {
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
            appearance: 'outlined', size: "s", variant: "brand", class: "booking-header__status-trigger" }, h("ir-booking-status-tag", { slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), h("span", null, t('Lcz_UpdateStatus', { fallback: 'Update status' }))), this.booking.allowed_actions.map(option => (h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))) : (h("ir-booking-status-tag", { status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }))), isAgentMode(this.agent) && (h(Fragment, { key: 'bbea1c6c6e8bd73b0eb5f932468a0859ebe90553' })), h("ir-custom-button", { key: '289ad7bea8bf11ea8fcb868833241212a1ef81e0', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "s", variant: "brand" }, t('Lcz_Logs', { fallback: 'Logs' })), showPms && (h("ir-custom-button", { key: '1555eada696438c46879e5c00a178a46312585eb', class: "booking-header__stretched-btn", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "s", variant: "brand" }, t('Lcz_PMS', { fallback: 'PMS' }))), this.hasReceipt && (h(Fragment, { key: '63acb1891ad010a5514d400548762523817a4966' }, h("ir-custom-button", { key: 'af4c5e9fd22cec7fb7add8c83a51a57f102abb62', class: "booking-header__stretched-btn", id: "invoice", variant: "brand", size: "s", appearance: "outlined" }, t('Lcz_Billing', { fallback: 'Billing' })))), this.hasPrint && (h(Fragment, { key: '2aa8c118676c1e9eca6c3d0cd9c1356e29040a1d' }, h("wa-tooltip", { key: '4f314fb4d0ebb1a6aabc4ecae614e4f9e3292aa3', for: "print" }, t('Lcz_PrintBookingTooltip', { fallback: 'Print booking' })), h("ir-custom-button", { key: 'bd2edf574457a26d36d32b07cc3f6e95bfd8069e', id: "print", variant: "brand", size: "s", appearance: "outlined" }, h("wa-icon", { key: '0b8e004e5c6899b504924c198934ec4f2d25e47d', label: t('Lcz_Print', { fallback: 'Print' }), name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (h(Fragment, { key: '0463ef7b4b1406b2e05322a85e83a24b23aec14c' }, h("wa-tooltip", { key: '266ebf433a4e7d92f34306a8ebcae2a9a11d6dd4', for: "email" }, t('Lcz_EmailBookingToGuestTooltip', { fallback: 'Email this booking to guest' })), h("ir-custom-button", { key: 'bf745e21455a973bf43a446064840128ba706afc', id: "email", variant: "brand", size: "s", appearance: "outlined" }, h("wa-icon", { key: 'e405c7d86c3fe531cd668d43c6b5ff3bcbc15c9e', name: "envelope", style: { fontSize: '1.2rem' }, label: t('Lcz_EmailThisBooking', { fallback: 'Email this booking' }) })))), this.hasDelete && (h(Fragment, { key: '6b296b097c2ff00ad1e122d400186a7e05ab79df' }, h("wa-tooltip", { key: '76ed2081c1bea8c6d9ee1bcb31a3966d50e7fdd4', for: "book-delete" }, t('Lcz_DeleteThisBooking', { fallback: 'Delete this booking' })), h("ir-custom-button", { key: '611bfacb68631ebc3951225b7dc6c76491b70bc3', id: "book-delete", variant: "danger", size: "s", appearance: "plain" }, h("wa-icon", { key: '9a2c8328322d81221f8a161b0173d9a1a30f95a5', name: "envelope", style: { fontSize: '1.2rem' }, label: t('Lcz_DeleteThisBooking', { fallback: 'Delete this booking' }) })))), this.hasCloseButton && (h("ir-custom-button", { key: '4dc7b40e0d56f44b88050251660486c0195496a1', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "s", appearance: "plain" }, h("wa-icon", { key: 'ac245777faf93cbb952a1e277693cc22441c4d22', name: "xmark", style: { fontSize: '1.2rem' }, label: t('Lcz_GoBack', { fallback: 'Go back' }) }))))), h("ir-dialog", { key: '1fc976e196c25601a0a504ac7953d6ddabde7060', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? t('Lcz_PMS_Logs') : t('Lcz_EventsLog'), style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: '332d8ef728bd3dfe9a3f24fb4c0a7210d5db3a16', ref: el => (this.modalEl = el), label: t('Lcz_Alert', { fallback: 'Alert' }), lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, h("p", { key: '194ae4886ccb39bb1fe7e2badcfd8053b00e8b34' }, this.booking.is_direct ? t('Lcz_ConfirmUpdateBookingStatus', { fallback: 'Are you sure you want to update this booking status?' }) : t('Lcz_OTA_Modification_Alter')), h("div", { key: 'd41e2bcd579f8db01fe41bb4863108872eb42238', class: "ir-dialog__footer", slot: "footer" }, h("ir-custom-button", { key: '39655b5c55c97ad372c29f079dfbf0e044a50093', "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '2258b16ac92c2102e6f05a4a7b44d60a6dde1403', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "m", variant: "brand", loading: isRequestPending('/Change_Exposed_Booking_Status') }, t('Lcz_Confirm', { fallback: 'Confirm' })))), h("ir-booking-source-editor-dialog", { key: 'dc035a86d8430f0ce152d65729cf955f10896db3', booking: this.booking, ref: el => (this.bookingSourceEditor = el) })));
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
