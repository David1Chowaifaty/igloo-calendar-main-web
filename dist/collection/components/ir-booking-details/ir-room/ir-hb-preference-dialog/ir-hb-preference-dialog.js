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
        return (h("ir-dialog", { key: 'e76a11ce332794074efbc9d642bc69750ef970a0', open: this.open, label: "Half Board 2nd Meal Preference", ref: el => (this.dialogRef = el), onIrDialogHide: e => {
                e.preventDefault();
                const saved = this.closedBySave;
                this.hbPreferenceClose.emit({ saved });
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closedBySave = false;
                this.selectedValue = null;
            } }, h("wa-radio-group", { key: '9b220c174bc813394c264cbb8f5500cb8522cb05', value: this.selectedValue ?? '', onchange: e => (this.selectedValue = e.target.value) }, h("wa-radio", { key: 'a807d080f47cedcd8f8158c65bab04b7c6f53f7c', value: HbPreference.Lunch }, "Lunch"), h("wa-radio", { key: '4e4f1b05f1b5ee258bc468074194f410b3244966', value: HbPreference.Dinner }, "Dinner")), h("div", { key: 'ce8d1dbbe16d9846567c0b7db2a203aeac7dac3e', slot: "footer", class: 'ir-dialog__footer' }, h("ir-custom-button", { key: 'b74b8b4747419de7e5bb22a9d0eb9c633645e61f', size: "m", variant: "neutral", appearance: "filled", "data-dialog": "close" }, "Cancel"), h("ir-custom-button", { key: '5ea1a40d705571272c813e5b71285cc6f51f1ced', size: "m", variant: "brand", loading: this.isLoading, disabled: !this.selectedValue, onClickHandler: e => this.handleConfirm(e), appearance: "accent" }, "Confirm"))));
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
