import { ArchivedTask } from "../../../../models/housekeeping";
import { EventEmitter } from '../../../../stencil-public-runtime';
export type ArchivesFilters = {
    from_date: string;
    to_date: string;
    filtered_by_hkm?: number[];
    filtered_by_unit?: number[];
};
export declare class IrHkArchiveDrawer {
    propertyId: string | number;
    language: string;
    ticket: string;
    open: boolean;
    filters: ArchivesFilters;
    data: (ArchivedTask & {
        id: string;
    })[];
    isLoading: 'search' | 'excel' | null;
    fetchedData: boolean;
    selectedBooking: number | string | null;
    drawerClosed: EventEmitter<void>;
    private readonly minSelectableDate;
    private readonly maxSelectableDate;
    private houseKeepingService;
    private units;
    componentWillLoad(): void;
    handleCloseBookingDetails(e: CustomEvent): void;
    private setUpUnits;
    private updateFilters;
    private getArchivedTasks;
    private searchArchive;
    private exportArchive;
    render(): any;
}
