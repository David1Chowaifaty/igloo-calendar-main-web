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
        return (h("ir-dialog", { key: 'b2b0774fc20d86cf9db20ff6e2b9454880f8d9da', open: this.open, label: "Half Board 2nd Meal Preference", ref: el => (this.dialogRef = el), onIrDialogHide: e => {
                e.preventDefault();
                const saved = this.closedBySave;
                this.hbPreferenceClose.emit({ saved });
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closedBySave = false;
                this.selectedValue = null;
            } }, h("wa-radio-group", { key: '34c3e1ef8fe05810c307d7f24a543b83f6095fb1', value: this.selectedValue ?? '', onchange: e => (this.selectedValue = e.target.value) }, h("wa-radio", { key: 'a0e72f548f01e6ae963122359a6a02729d52f50b', value: HbPreference.Lunch }, "Lunch"), h("wa-radio", { key: 'f4d62edd1b6b590b6f3090572ee5b39988499139', value: HbPreference.Dinner }, "Dinner")), h("div", { key: '0ecd4c2805dfad57ce102d6b4187f676f32e128b', slot: "footer", class: 'ir-dialog__footer' }, h("ir-custom-button", { key: '450efbfd56716956f237e42c38db651360dce0c7', size: "m", variant: "neutral", appearance: "filled", "data-dialog": "close" }, "Cancel"), h("ir-custom-button", { key: 'fe354e937841f2d368defe1379de8541db432a2a', size: "m", variant: "brand", loading: this.isLoading, disabled: !this.selectedValue, onClickHandler: e => this.handleConfirm(e), appearance: "accent" }, "Confirm"))));
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
