import { r as registerInstance, a as createEvent, h } from './index-7b3961ed.js';
import { H as HouseKeepingService } from './housekeeping.service-0ce1e0a7.js';
import { c as calendar_data } from './calendar-data-cdc01d0d.js';
import './index-40c31d5b.js';
import './housekeeping.store-9565c156.js';
import './index-17663a35.js';
import './index-5ba472df.js';

const iglHousekeepingDialogCss = ".sc-igl-housekeeping-dialog-h{display:block;text-align:start}";

const IglHousekeepingDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.irAfterClose = createEvent(this, "irAfterClose", 7);
    }
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
        return (h("ir-dialog", { key: '1935cced10ae6ceae436d245cdafecc2afbfabea', ref: el => (this.dialogRef = el), open: this.open, label: "Housekeeping Update", onIrDialogAfterHide: () => this.irAfterClose.emit() }, h("p", { key: '59f0bcd5601c6004986ddd44fa5051fc16406893', style: { margin: '0' } }, `${this.selectedRoom?.name} is currently marked as ${this.getStatusLabel()}.`), h("div", { key: '87635e3a4bfde106576554e30054d0980f4b3557', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '81f81746afea115cf60d9089f7c8ca832098e218', "data-dialog": "close", size: "medium", variant: "neutral", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: '6657917798d82d5b6c9505b7d3b687e95f6f0370', value: "hk-toggle-clean-dirty", size: "medium", variant: "brand", appearance: "outlined", loading: this.isLoading === 'hk-toggle-clean-dirty', onClickHandler: e => this.updateHousekeeping(e, this.selectedRoom.hk_status === '002' ? '001' : '002') }, this.middleButtonLabel()), h("ir-custom-button", { key: '2cb132c0844c0d97863db0918d55a2e07ba56771', value: "hk-clean-inspect", size: "medium", variant: "brand", appearance: "accent", loading: this.isLoading === 'hk-clean-inspect', onClickHandler: e => this.updateHousekeeping(e, this.selectedRoom.hk_status === '004' ? '001' : '004') }, this.rightButtonLabel()))));
    }
};
IglHousekeepingDialog.style = iglHousekeepingDialogCss;

export { IglHousekeepingDialog as igl_housekeeping_dialog };

//# sourceMappingURL=igl-housekeeping-dialog.entry.js.map