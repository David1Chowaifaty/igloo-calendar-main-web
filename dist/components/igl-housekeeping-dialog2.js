import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { H as HouseKeepingService } from './housekeeping.service.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';
import { d as defineCustomElement$1 } from './ir-dialog2.js';

const iglHousekeepingDialogCss = ".sc-igl-housekeeping-dialog-h{display:block;text-align:start}";
const IglHousekeepingDialogStyle0 = iglHousekeepingDialogCss;

const IglHousekeepingDialog = /*@__PURE__*/ proxyCustomElement(class IglHousekeepingDialog extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h("ir-dialog", { key: '4eca53f7c4d9085e48fb46e099dc72ca749a6e71', ref: el => (this.dialogRef = el), open: this.open, label: "Housekeeping Update", onIrDialogAfterHide: () => this.irAfterClose.emit() }, h("p", { key: 'd77e12d20e458ab30c343e15a985d4549ab84e35', style: { margin: '0' } }, `${this.selectedRoom?.name} is currently marked as ${this.getStatusLabel()}.`), h("div", { key: 'ddb6430bc6183c66d0de104f3093a90f0788dde6', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '895a9432011831ae7441bab44f285b782e77cd26', "data-dialog": "close", size: "medium", variant: "neutral", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: 'b9b0d7540e0c00d8fcdd32b4f7d0083079649997', value: "hk-toggle-clean-dirty", size: "medium", variant: "brand", appearance: "outlined", loading: this.isLoading === 'hk-toggle-clean-dirty', onClickHandler: e => this.updateHousekeeping(e, this.selectedRoom.hk_status === '002' ? '001' : '002') }, this.middleButtonLabel()), h("ir-custom-button", { key: '32103715199ee2d8c7788ccded7bcd02289b49bf', value: "hk-clean-inspect", size: "medium", variant: "brand", appearance: "accent", loading: this.isLoading === 'hk-clean-inspect', onClickHandler: e => this.updateHousekeeping(e, this.selectedRoom.hk_status === '004' ? '001' : '004') }, this.rightButtonLabel()))));
    }
    static get style() { return IglHousekeepingDialogStyle0; }
}, [2, "igl-housekeeping-dialog", {
        "open": [4],
        "selectedRoom": [16],
        "bookingNumber": [2, "booking-number"],
        "propertyId": [2, "property-id"],
        "isLoading": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-housekeeping-dialog", "ir-custom-button", "ir-dialog"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-housekeeping-dialog":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglHousekeepingDialog);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglHousekeepingDialog as I, defineCustomElement as d };

//# sourceMappingURL=igl-housekeeping-dialog2.js.map