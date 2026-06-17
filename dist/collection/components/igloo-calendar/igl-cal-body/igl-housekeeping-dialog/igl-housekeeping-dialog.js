import { h } from "@stencil/core";
import { HouseKeepingService } from "../../../../services/housekeeping.service";
import calendar_data from "../../../../stores/calendar-data";
export class IglHousekeepingDialog {
    /**
     * Controls whether the dialog is open.
     * The parent component is responsible for toggling this value.
     */
    open;
    /**
     * Currently selected room for housekeeping actions.
     * When null or undefined, the dialog will not render.
     */
    selectedRoom;
    /**
     * Booking number associated with the selected room (if any).
     * Used for housekeeping action tracking.
     */
    bookingNumber;
    /**
     * Current property identifier.
     * Required for housekeeping service requests.
     */
    propertyId;
    isLoading = null;
    /** Fired after dialog is fully closed */
    irAfterClose;
    dialogRef;
    housekeepingService = new HouseKeepingService();
    getStatusLabel() {
        switch (this.selectedRoom?.hk_status) {
            case '002':
                return 'dirty';
            case '004':
                return 'inspected';
            default:
                return 'clean';
        }
    }
    middleButtonLabel() {
        return this.selectedRoom?.hk_status === '002' ? 'Clean' : 'Dirty';
    }
    rightButtonLabel() {
        return this.selectedRoom?.hk_status !== '004' ? 'Clean & Inspect' : 'Clean';
    }
    // private renderModalBody() {
    //   if (!this.selectedRoom) {
    //     return null;
    //   }
    //   return <p style={{ padding: '0', margin: '0' }}>Update unit {this.selectedRoom?.name} to ...</p>;
    // }
    async updateHousekeeping(e, status) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        try {
            this.isLoading = e.target.value;
            await this.housekeepingService.setExposedUnitHKStatus({
                property_id: calendar_data.property.id,
                // housekeeper: this.selectedRoom?.housekeeper ? { id: this.selectedRoom?.housekeeper?.id } : null,
                status: {
                    code: status,
                },
                unit: {
                    id: this.selectedRoom?.id,
                },
            });
            if (['001', '004'].includes(status)) {
                await this.housekeepingService.executeHKAction({
                    actions: [
                        {
                            description: 'Cleaned',
                            hkm_id: this.selectedRoom?.housekeeper?.id || null,
                            unit_id: this.selectedRoom?.id,
                            booking_nbr: this.bookingNumber,
                            status: status,
                            hk_task_type_code: 'CLN',
                        },
                    ],
                });
            }
        }
        finally {
            this.isLoading = null;
            this.dialogRef.closeModal();
        }
    }
    render() {
        return (h("ir-dialog", { key: '37889f12a59c3d22c6ff91c65868b705021e75b1', ref: el => (this.dialogRef = el), open: this.open, label: "Housekeeping Update", onIrDialogAfterHide: () => this.irAfterClose.emit() }, h("p", { key: '5bd0fd99b27e07eadc1720720f307e07ff29677b', style: { margin: '0' } }, `${this.selectedRoom?.name} is currently marked as ${this.getStatusLabel()}.`), h("div", { key: 'f3169466c711930bbcd400536bf7c3610a115a03', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '65d979e82feba7eba14fd3b65621dca769f8a4f4', "data-dialog": "close", size: "m", variant: "neutral", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: 'd251f6c9de9175ca364099443fa5aecd8d6b8fe9', value: "hk-toggle-clean-dirty", size: "m", variant: "brand", appearance: "outlined", loading: this.isLoading === 'hk-toggle-clean-dirty', onClickHandler: e => this.updateHousekeeping(e, this.selectedRoom.hk_status === '002' ? '001' : '002') }, this.middleButtonLabel()), h("ir-custom-button", { key: '817d99fbc17dffd1edb6319747e776273b6fd2e8', value: "hk-clean-inspect", size: "m", variant: "brand", appearance: "accent", loading: this.isLoading === 'hk-clean-inspect', onClickHandler: e => this.updateHousekeeping(e, this.selectedRoom.hk_status === '004' ? '001' : '004') }, this.rightButtonLabel()))));
    }
    static get is() { return "igl-housekeeping-dialog"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-housekeeping-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-housekeeping-dialog.css"]
        };
    }
    static get properties() {
        return {
            "open": {
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
                    "text": "Controls whether the dialog is open.\nThe parent component is responsible for toggling this value."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "open"
            },
            "selectedRoom": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "PhysicalRoom",
                    "resolved": "PhysicalRoom",
                    "references": {
                        "PhysicalRoom": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::PhysicalRoom",
                            "referenceLocation": "PhysicalRoom"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Currently selected room for housekeeping actions.\nWhen null or undefined, the dialog will not render."
                },
                "getter": false,
                "setter": false
            },
            "bookingNumber": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Booking number associated with the selected room (if any).\nUsed for housekeeping action tracking."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "booking-number"
            },
            "propertyId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current property identifier.\nRequired for housekeeping service requests."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "property-id"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {}
        };
    }
    static get events() {
        return [{
                "method": "irAfterClose",
                "name": "irAfterClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired after dialog is fully closed"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
