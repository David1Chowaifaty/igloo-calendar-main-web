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
        return (h("div", { key: '026af0474df4d8982a5f9b4dc4454ad2842e90c6', class: "booking-header" }, h("div", { key: 'b4a08c0877c5e40a323ae6652bf78d27021fa9fe', class: "booking-header__row" }, h("div", { key: 'b4b343758b518d7e5e262da0fc6a3c92e69c3f4f', class: "booking-header__info" }, h("div", { key: 'cda1651ec1f5f1a4977a71c84ea54462add2f0ab', class: "booking-header__title" }, h("div", { key: 'c7ef4d037c0eaf64e3949047d913368f0d2ed36e', class: "booking-header__label-container" }, this.hasMenu && (h(Fragment, { key: '942d9c2ec4b7a51a16d7a49a728a14fa67c2ab56' }, h("wa-tooltip", { key: 'b57fdb272cf25695be129d0296662d155435689a', for: "menu" }, "Go back"), h("ir-custom-button", { key: '7d8ca41c4d1d46f7fccb2362926630286df6142b', id: "menu", variant: "neutral", size: "s", appearance: "plain" }, h("wa-icon", { key: '48d3e206c5e4c7e3d249f0f47b619ae5e1e70584', name: "arrow-left", style: { fontSize: '1.2rem' }, label: "Go back" })))), h("wa-avatar", { key: '73af479bce0619a5330bdf7dd333a198daa585fd', shape: "circle", class: "booking-header__avatar", initials: this.initials, image: this.avatarImage, loading: "lazy" }), h("div", { key: '1393254228108a6d5866110d51b68e6e388e8f73', class: "booking-header__identity" }, h("div", { key: 'b6e39be7993a366fec0e18727a04162615e708c0', class: 'booking-header__label' }, h("h4", { key: '602fd9ac8c5140f03f656bc3c43c9042c582b771', class: "booking-header__label-number" }, `${locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`)), h("div", { key: '1b91432d4c6e896f348b16b94f9a203238df7688', class: "booking-header__meta" }, !this.booking.is_direct && h("p", { key: '973b633c36d251453c18787f55d4663c4fa9a720', class: "booking-header__channel-number --primary" }, this.booking.channel_booking_nbr), this.booking.agent_booking_nbr && h("p", { key: 'b20e6c1974125e297cac5df18b365292b98f2c4e', class: "booking-header__channel-number --primary" }, this.booking.agent_booking_nbr), h("p", { key: 'b76970b91706159fea443c5cbd26ba35065c488f', class: "booking-header__channel-number" }, this.booking?.agent ? (h("span", null, "Agent:", ' ', h("p", { class: 'truncate p-0 m-0', style: { maxWidth: '150px', display: 'inline-flex' } }, this.agent.name, ' ', h("i", { style: { paddingLeft: '0.5rem' }, class: 'truncate' }, this.agent.reference)))) : (this.booking.origin.Label)), this.canChangeSource && (h("ir-custom-button", { key: '8c76a58202a149f9bc45fdae795ede0f128b42b3', link: true, onClickHandler: () => this.bookingSourceEditor.openDialog() }, "Change source")), lastManipulation && (h(Fragment, { key: '8f976b5d56109291d609229f12a0bc68c49f2d2e' }, h("p", { key: 'd0fb3a2b23b4a2fff301f095caeaa07ac386a5b0', id: `booking-${this.booking.booking_nbr}-modified`, class: "booking-header__modified" }, "Modified"), h("wa-tooltip", { key: '901b29954d188287a114d43729cf7d6d7159a5c9', for: `booking-${this.booking.booking_nbr}-modified` }, h("div", { key: '06bdee2180a6227e4abf72f053c79ff68d4fbfbe' }, h("p", { key: '8619284e9fdf61b753ea6eace1f38912627508b8', class: "m-0" }, "Modified by ", lastManipulation?.user, " at ", lastManipulation?.date, " ", lastManipulation?.hour, ":", lastManipulation?.minute, "."), h("p", { key: '9da4dad5a2abfd50f2f77b0432352ac67c229a4b', class: "m-0" }, this.alertMessage)))))))))), h("div", { key: 'e0c9135e701cef7a02021b51875332448db0a365', class: "booking-header__actions" }, h("div", { key: '4f38316915098ae848c5a8b57f1896c1050a53b0' }, this.booking.allowed_actions.length > 0 && this.booking.is_editable ? (h("wa-dropdown", { "onwa-hide": e => {
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
            appearance: 'outlined', size: "s", variant: "brand", class: "booking-header__status-trigger" }, h("ir-booking-status-tag", { slot: "start", status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }), h("span", null, "Update status")), this.booking.allowed_actions.map(option => (h("wa-dropdown-item", { variant: ['CANC_RA', 'NOSHOW_RA'].includes(option.code) ? 'danger' : 'default', value: option.code }, option.description))))) : (h("ir-booking-status-tag", { status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel }))), isAgentMode(this.agent) && (h(Fragment, { key: '8edfb79fed4be789aac96989415004f48d03d980' })), h("ir-custom-button", { key: '62368dc96bc7be78cb67f65b3b4d8335115db0c9', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            }, appearance: 'outlined', class: "booking-header__stretched-btn", size: "s", variant: "brand" }, "Logs"), showPms && (h("ir-custom-button", { key: '6e31049df6e2a73fc6d521bcd3c04f981a4a896f', class: "booking-header__stretched-btn", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            }, appearance: 'outlined', size: "s", variant: "brand" }, "PMS")), this.hasReceipt && (h(Fragment, { key: '5969fa13c9f557ff3fbf809c50d6d964baa9b940' }, h("ir-custom-button", { key: '6de1afc27482fdd68c2eeeb627ffecbd46d2dab4', class: "booking-header__stretched-btn", id: "invoice", variant: "brand", size: "s", appearance: "outlined" }, "Billing"))), this.hasPrint && (h(Fragment, { key: '9d5ff688ced8c1daef142812777d7bf71acedafd' }, h("wa-tooltip", { key: 'dc715c39f6f49c15b585a706cf3563649a60c182', for: "print" }, "Print booking"), h("ir-custom-button", { key: 'b53ab7e2d88c0cfac8b8004eb508937c3435a97e', id: "print", variant: "brand", size: "s", appearance: "outlined" }, h("wa-icon", { key: '69f51d38aa349b320e53d126e605714b67038495', label: "Print", name: "print", style: { fontSize: '1.2rem' } })))), this.hasEmail && (h(Fragment, { key: '9292f3e76d221c656c0f93080d9d18bb03a8338c' }, h("wa-tooltip", { key: 'cc76f0d3321f74ea832f044a23835db7e5c5ca3e', for: "email" }, "Email this booking to guest"), h("ir-custom-button", { key: 'd964c25f98dc61b6f448f32c7dec8c04ac9a9c5c', id: "email", variant: "brand", size: "s", appearance: "outlined" }, h("wa-icon", { key: '4dd230b662d11ba2caed5289a1a3e6afedc44dbf', name: "envelope", style: { fontSize: '1.2rem' }, label: "Email this booking" })))), this.hasDelete && (h(Fragment, { key: '9ede5ed812f837fe2273c2d33509be3e3fcb374f' }, h("wa-tooltip", { key: '5608a5753467d5b77c8892401c14e9aa79781ff0', for: "book-delete" }, "Delete this booking"), h("ir-custom-button", { key: '77af01a9cd24a0c6cbe74c416063556701c367f8', id: "book-delete", variant: "danger", size: "s", appearance: "plain" }, h("wa-icon", { key: '474e50c5bc9887ad79e02434063323f40b14d5db', name: "envelope", style: { fontSize: '1.2rem' }, label: "Delete this booking" })))), this.hasCloseButton && (h("ir-custom-button", { key: '2c7998551c7d0e141f31a16d0fb30fbf073f8dfb', onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            }, id: "close", variant: "neutral", size: "s", appearance: "plain" }, h("wa-icon", { key: '068cb6422afbc1b65e326ab2efba85881779a173', name: "xmark", style: { fontSize: '1.2rem' }, label: "Go back" }))))), h("ir-dialog", { key: '1650939251709053e6db112d0fae336f7c021fa6', onIrDialogHide: _ => {
                this.currentDialogStatus = null;
            }, label: this.currentDialogStatus === 'pms' ? locales.entries.Lcz_PMS_Logs : locales.entries.Lcz_EventsLog, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), h("ir-dialog", { key: 'f61e47a730d79ad35ddfe3d9be8c28d96d89e856', ref: el => (this.modalEl = el), label: "Alert", lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingStatus = null;
            } }, h("p", { key: 'a55b6ef4ad1df01e9163500ca738c8a402dcdaa3' }, this.booking.is_direct ? 'Are you sure you want to update this booking status?' : locales.entries.Lcz_OTA_Modification_Alter), h("div", { key: 'f1b57ecd08dece38837289ba9646a3dcb65888bc', class: "ir-dialog__footer", slot: "footer" }, h("ir-custom-button", { key: '517d1fbdb72ac8ea696fd47d59034f7a71caa868', "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel), h("ir-custom-button", { key: '1a6f51fa907c4730db2a01465a31878463510670', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateStatus();
            }, size: "m", variant: "brand", loading: isRequestPending('/Change_Exposed_Booking_Status') }, locales?.entries?.Lcz_Confirm))), h("ir-booking-source-editor-dialog", { key: '91dd64f68ca8fb1134383d94656b323eca108527', booking: this.booking, ref: el => (this.bookingSourceEditor = el) })));
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
