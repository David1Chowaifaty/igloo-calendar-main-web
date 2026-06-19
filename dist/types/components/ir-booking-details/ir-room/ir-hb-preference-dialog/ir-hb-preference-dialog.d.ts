import { Room } from "../../../../models/booking.dto";
import { EventEmitter } from '../../../../stencil-public-runtime';
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
export declare class IrHbPreferenceDialog {
    /** Room whose half-board preference is being changed. */
    room: Room;
    /** Controls dialog visibility. */
    open: boolean;
    selectedValue: string | null;
    isLoading: boolean;
    /**
     * Fired when the dialog closes.
     * `saved: true` → preference was persisted; `saved: false` → user cancelled.
     */
    hbPreferenceClose: EventEmitter<{
        saved: boolean;
    }>;
    private bookingService;
    private dialogRef;
    private closedBySave;
    private handleConfirm;
    render(): any;
}
