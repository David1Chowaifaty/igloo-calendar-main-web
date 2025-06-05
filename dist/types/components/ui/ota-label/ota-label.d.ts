import { IOtaNotes } from "../../../models/booking.dto";
export declare class OtaLabel {
    /**
     * Label displayed as the section title.
     */
    label: string;
    /**
     * Array of OTA notes to display in the list.
     */
    remarks: IOtaNotes[];
    /**
     * Maximum number of remarks to display before showing the "Show More" button.
     */
    maxVisibleItems: number;
    /**
     * Internal state that determines whether all remarks are shown or only the limited number.
     */
    showAll: boolean;
    /**
     * Toggles between showing all remarks or only a limited number.
     *
     * Example:
     * ```ts
     * this.toggleShowAll(); // flips showAll state
     * ```
     */
    private toggleShowAll;
    render(): any;
}
