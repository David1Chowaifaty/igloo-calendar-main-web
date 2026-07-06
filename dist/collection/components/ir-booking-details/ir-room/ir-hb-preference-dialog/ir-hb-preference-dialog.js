import { BookingService } from "../../../../services/booking-service/booking.service";
import { HbPreference } from "../../../../types/enums";
import calendar_data from "../../../../stores/calendar-data";
import { h } from "@stencil/core";
/**
 * Dialog that lets staff set or change the half-board meal preference (lunch / dinner)
 * for a single room. Persists the choice via BookingService.setHbPreference and emits
 * `hbPreferenceClose` when it closes so the parent can refresh the booking.
 *
 * Usage:
 *   <ir-hb-preference-dialog
 *     room={room}
 *     open={isOpen}
 *     onHbPreferenceClose={e => { isOpen = false; if (e.detail.saved) refresh(); }}
 *   />
 */
export class IrHbPreferenceDialog {
    /** Room whose half-board preference is being changed. */
    room;
    /** Controls dialog visibility. */
    open;
    selectedValue = null;
    isLoading = false;
    /**
     * Fired when the dialog closes.
     * `saved: true` → preference was persisted; `saved: false` → user cancelled.
     */
    hbPreferenceClose;
    bookingService = new BookingService();
    dialogRef;
    closedBySave = false;
    async handleConfirm(e) {
        e.stopImmediatePropagation();
        if (!this.selectedValue)
            return;
        try {
            this.isLoading = true;
            await this.bookingService.setHbPreference({
                property_id: calendar_data.property.id,
                room_identifier: this.room.identifier,
                code: this.selectedValue,
            });
            this.closedBySave = true;
            this.dialogRef?.closeModal();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        return (h("ir-dialog", { key: '1c7a7a90810aedd1daf02ef3f408970c070239ae', open: this.open, label: "Half Board 2nd Meal Preference", ref: el => (this.dialogRef = el), onIrDialogHide: e => {
                e.preventDefault();
                const saved = this.closedBySave;
                this.hbPreferenceClose.emit({ saved });
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closedBySave = false;
                this.selectedValue = null;
            } }, h("wa-radio-group", { key: 'ed4fe1222ccb91f6c7cdf385f94ad4479ecfec57', value: this.selectedValue ?? '', onchange: e => (this.selectedValue = e.target.value) }, h("wa-radio", { key: '9b2cfcd918d6fd8671261c901906182d80ffb7a6', value: HbPreference.Lunch }, "Lunch"), h("wa-radio", { key: '2f621da8d882c74aaeb0e0d06e1ab49bbaf96e0d', value: HbPreference.Dinner }, "Dinner")), h("div", { key: '8f5a3e23ced3ab8d3fc544f44fad99797d405764', slot: "footer", class: 'ir-dialog__footer' }, h("ir-custom-button", { key: '1e583caa7935ac7571a6e930b2096ac0e9a62c84', size: "m", variant: "neutral", appearance: "filled", "data-dialog": "close" }, "Cancel"), h("ir-custom-button", { key: 'f56f325dbd42ec7c542d32633c5264f9e94c5ec4', size: "m", variant: "brand", loading: this.isLoading, disabled: !this.selectedValue, onClickHandler: e => this.handleConfirm(e), appearance: "accent" }, "Confirm"))));
    }
    static get is() { return "ir-hb-preference-dialog"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hb-preference-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hb-preference-dialog.css"]
        };
    }
    static get properties() {
        return {
            "room": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Room",
                    "resolved": "Room",
                    "references": {
                        "Room": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Room",
                            "referenceLocation": "Room"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Room whose half-board preference is being changed."
                },
                "getter": false,
                "setter": false
            },
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
                    "text": "Controls dialog visibility."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "open"
            }
        };
    }
    static get states() {
        return {
            "selectedValue": {},
            "isLoading": {}
        };
    }
    static get events() {
        return [{
                "method": "hbPreferenceClose",
                "name": "hbPreferenceClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired when the dialog closes.\n`saved: true` \u2192 preference was persisted; `saved: false` \u2192 user cancelled."
                },
                "complexType": {
                    "original": "{ saved: boolean }",
                    "resolved": "{ saved: boolean; }",
                    "references": {}
                }
            }];
    }
}
